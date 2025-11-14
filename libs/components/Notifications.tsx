import React, { useMemo, useState } from 'react';
import {
	Drawer,
	Typography,
	Divider,
	List,
	ListItem,
	Stack,
	Box,
	Tabs,
	Tab,
	Button,
	Tooltip,
	Chip,
	Paper,
} from '@mui/material';
import { CheckCircle, Trash2, MailOpen, Mail } from 'lucide-react';
import { useMutation, useQuery } from '@apollo/client';
import useDeviceDetect from '../hooks/useDeviceDetect';
import { Notification } from '../types/notification/notification';
import { T } from '../types/common';
import { getJwtToken } from '../auth';
import { GET_NOTIFICATIONS, GET_UNREADNOTIFICATIONS } from '../../apollo/user/query';
import {
	MARKALLNOTIFICATIONREAD,
	MARKNOTIFICATIONREAD,
	REMOVENOTIFICATION,
	REMOVEALLNOTIFICATION,
} from '../../apollo/user/mutation';
import { useTranslation } from 'next-i18next';

type Direction = 'ASC' | 'DESC';
type TabKey = 'new' | 'read' | 'all';

interface NotificationsProps {
	initialInput: { page: number; limit: number; sort?: string; direction?: Direction };
	open: boolean;
	onClose: () => void;
}

const fmtTime = (d?: string) => (d ? new Date(d).toLocaleString() : '');

const Notifications = ({ initialInput, open, onClose }: NotificationsProps) => {
	const device = useDeviceDetect();
	const { t } = useTranslation('common');

	const [tab, setTab] = useState<TabKey>('new');
	const [notifications, setNotifications] = useState<Notification[]>([]);
	const [unreadCount, setUnreadCount] = useState<number>(0);

	const token = getJwtToken();
	const isLoggedIn = !!token;

	const [markNotificationRead, { loading: markOneLoading }] = useMutation(MARKNOTIFICATIONREAD);
	const [markAllNotificationRead, { loading: markAllLoading }] = useMutation(MARKALLNOTIFICATIONREAD);
	const [removeNotification, { loading: removeOneLoading }] = useMutation(REMOVENOTIFICATION);
	const [removeAllNotifications, { loading: removeAllLoading }] = useMutation(REMOVEALLNOTIFICATION);

	const listVariables = useMemo(() => {
		const statusList = tab === 'read' ? ['READ'] : tab === 'new' ? ['WAIT'] : ['WAIT', 'READ'];
		return {
			input: {
				page: initialInput.page,
				limit: initialInput.limit,
				sort: initialInput.sort ?? 'createdAt',
				direction: initialInput.direction ?? 'DESC',
				search: { statusList },
			},
		};
	}, [initialInput.page, initialInput.limit, initialInput.sort, initialInput.direction, tab]);

	const { loading: listLoading, refetch: refetchList } = useQuery(GET_NOTIFICATIONS, {
		skip: !isLoggedIn || !open,
		fetchPolicy: 'cache-and-network',
		notifyOnNetworkStatusChange: true,
		variables: listVariables,
		onCompleted: (data: T) => setNotifications(data?.myNotifications?.list ?? []),
	});

	const { refetch: refetchCount } = useQuery(GET_UNREADNOTIFICATIONS, {
		skip: !isLoggedIn,
		fetchPolicy: 'cache-and-network',
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => setUnreadCount(data?.unreadNotificationsCount ?? 0),
	});

	const handleMarkRead = async (id: string) => {
		await markNotificationRead({ variables: { id } }).catch(console.error);
		if (tab !== 'read') setNotifications((prev) => prev.filter((n) => n._id !== id));
		await refetchCount?.();
	};

	const handleMarkAllRead = async () => {
		await markAllNotificationRead().catch(console.error);
		if (tab !== 'read') setNotifications([]);
		await Promise.all([refetchCount?.(), refetchList?.(listVariables)]);
	};

	const handleRemove = async (id: string) => {
		await removeNotification({ variables: { id } }).catch(console.error);
		setNotifications((prev) => prev.filter((n) => n._id !== id));
		await refetchCount?.();
	};

	const handleDeleteAll = async () => {
		await removeAllNotifications().catch(console.error);
		setNotifications([]);
		await Promise.all([refetchCount?.(), refetchList?.(listVariables)]);
	};

	const onTabChange = (_e: React.SyntheticEvent, value: TabKey) => setTab(value);

	if (device === 'mobile') {
		return (
			<Stack className="info-box">
				<span>{t('Notifications are unavailable on mobile yet — please use desktop')}</span>
			</Stack>
		);
	}

	return (
		<Drawer
			anchor="right"
			open={open}
			onClose={onClose}
			ModalProps={{ keepMounted: true }}
			PaperProps={{
				sx: {
					width: 400,
					height: 'auto',
					minHeight: 380,

					maxWidth: '85vw',
					borderLeft: '1px solid',
					borderColor: 'divider',
					boxShadow: 4,
					backgroundColor: '#fcfcfc',
					borderRadius: '8px ',
					m: 2,
				},
			}}
		>
			<Stack sx={{ height: 'auto', minHeight: '100%', p: 1.5 }}>
				{/* Header */}
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					sx={{ mb: 1.5, borderBottom: '1px solid', borderColor: 'divider', pb: 1 }}
				>
					<Stack direction="row" spacing={1} alignItems="center">
						<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
							{t('Notifications')}
						</Typography>
						<Chip size="small" icon={<Mail size={13} />} label={`${t('Unread')}: ${unreadCount}`} variant="outlined" />
					</Stack>

					<Stack direction="row" spacing={1}>
						<Tooltip title={t('Mark all visible as read') as string}>
							<span>
								<Button
									size="small"
									variant="outlined"
									startIcon={<MailOpen size={14} />}
									onClick={handleMarkAllRead}
									disabled={tab === 'read' || notifications.length === 0 || markAllLoading}
									sx={{ fontSize: 12 }}
								>
									{t('Read all')}
								</Button>
							</span>
						</Tooltip>
						<Tooltip title={t('Delete all visible') as string}>
							<span>
								<Button
									size="small"
									color="error"
									variant="outlined"
									startIcon={<Trash2 size={14} />}
									onClick={handleDeleteAll}
									disabled={notifications.length === 0 || removeAllLoading}
									sx={{ fontSize: 12 }}
								>
									{t('Delete all')}
								</Button>
							</span>
						</Tooltip>
					</Stack>
				</Stack>

				{/* Tabs */}
				<Tabs
					value={tab}
					onChange={onTabChange}
					variant="fullWidth"
					sx={{
						mb: 1,
						'& .MuiTab-root': { fontSize: 13, minHeight: 36, fontWeight: 600 },
					}}
				>
					<Tab value="new" label={t('New')} />
					<Tab value="read" label={t('Read')} />
					<Tab value="all" label={t('All')} />
				</Tabs>

				{/* List */}
				<div style={{ flex: 1, overflow: 'auto', paddingRight: '8px' }}>
					{!isLoggedIn || notifications.length === 0 ? (
						<Stack alignItems="center" justifyContent="center" sx={{ py: 5, color: 'text.secondary' }}>
							<Typography variant="body2">
								{isLoggedIn
									? listLoading
										? t('Loading...')
										: tab === 'read'
										? t('No read notifications.')
										: tab === 'new'
										? t('No new notifications.')
										: t('No notifications.')
									: t('Log in to see your notifications.')}
							</Typography>
						</Stack>
					) : (
						<List disablePadding>
							{notifications.map((n) => {
								const title = (n as any).notificationTitle ?? t('Notification');
								const message = (n as any).notificationDesc ?? '—';
								const created = fmtTime((n as any).createdAt);

								return (
									<ListItem key={n._id} disableGutters sx={{ mb: 1 }}>
										<Paper
											variant="outlined"
											sx={{
												width: '100%',
												p: 1.5,
												borderRadius: 2,
												display: 'flex',
												alignItems: 'flex-start',
												flexDirection: 'column',
												gap: 1,
												bgcolor: 'background.paper',
											}}
										>
											<Stack spacing={0.5}>
												<Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
													{title}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{message}
												</Typography>
											</Stack>

											<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
												<Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
													{created}
												</Typography>

												<Stack direction="row" spacing={1}>
													{tab !== 'read' && (
														<Button
															size="small"
															variant="outlined"
															onClick={() => handleMarkRead(n._id)}
															disabled={markOneLoading}
															startIcon={<CheckCircle size={14} />}
															sx={{ fontSize: 11 }}
														>
															{t('Read')}
														</Button>
													)}
													<Button
														size="small"
														color="error"
														variant="outlined"
														onClick={() => handleRemove(n._id)}
														disabled={removeOneLoading}
														startIcon={<Trash2 size={14} />}
														sx={{ fontSize: 11 }}
													>
														{t('Delete')}
													</Button>
												</Stack>
											</Stack>
										</Paper>
									</ListItem>
								);
							})}
						</List>
					)}
				</div>
			</Stack>
		</Drawer>
	);
};

Notifications.defaultProps = {
	initialInput: { page: 1, limit: 10, sort: 'createdAt', direction: 'DESC' },
};

export default Notifications;
