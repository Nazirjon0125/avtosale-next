// libs/components/admin/cs/NoticeList.tsx
import React, { useMemo, useState } from 'react';
import {
	Box,
	Button,
	Checkbox,
	Chip,
	IconButton,
	InputAdornment,
	MenuItem,
	OutlinedInput,
	Select,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Tooltip,
	Typography,
} from '@mui/material';
import EditRounded from '@mui/icons-material/EditRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import PublishedWithChangesRounded from '@mui/icons-material/PublishedWithChangesRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchIcon from '@mui/icons-material/Search';
import { useMutation, useQuery } from '@apollo/client';

import { NoticesInquiry, NoticeSearchInput } from '../../../types/notice/notice.input';
import { Notice } from '../../../types/notice/notice';
import { Direction } from '../../../enums/common.enum';
import { NoticeCategory, NoticeStatus } from '../../../enums/notice.enum';
import { GET_NOTICES } from '../../../../apollo/user/query';
import { CHANGENOTICESTATUS, DELETENOTICE } from '../../../../apollo/admin/mutation';

type OnEdit = (row: Notice) => void;

interface Props {
	onEdit?: OnEdit;
}

const statusColor = (s: NoticeStatus) =>
	s === NoticeStatus.ACTIVE ? 'success' : s === NoticeStatus.HOLD ? 'warning' : 'default';

export const NoticeList: React.FC<Props> = ({ onEdit }) => {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(20);
	const [status, setStatus] = useState<NoticeStatus | 'ALL'>('ALL');
	const [text, setText] = useState('');

	const [selected, setSelected] = useState<string[]>([]);

	const input: NoticesInquiry = useMemo(
		() => ({
			page,
			limit,
			sort: 'createdAt',
			direction: Direction.DESC,
			search: {
				noticeCategory: NoticeCategory.NOTICE,
				noticeStatus: status === 'ALL' ? undefined : status,
				text: text.trim() || undefined,
			} as NoticeSearchInput,
		}),
		[page, limit, status, text],
	);

	const { data, loading, error, refetch } = useQuery(GET_NOTICES, {
		variables: { input },
		fetchPolicy: 'cache-and-network',
	});

	const [changeStatus, { loading: statusLoading }] = useMutation(CHANGENOTICESTATUS, { onCompleted: () => refetch() });
	const [deleteNotice, { loading: deleteLoading }] = useMutation(DELETENOTICE, {
		onCompleted: () => {
			setSelected([]);
			refetch();
		},
	});

	const rows: Notice[] = data?.getNotices?.notices ?? [];
	const totalCount = data?.getNotices?.totalCount ?? 0;

	const allChecked = rows.length > 0 && selected.length === rows.length;
	const someChecked = selected.length > 0 && selected.length < rows.length;

	const toggleRow = (id: string) =>
		setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
	const toggleAll = () => (allChecked ? setSelected([]) : setSelected(rows.map((r) => r._id)));

	const doToggleStatus = async (row: Notice) => {
		const next =
			row.noticeStatus === NoticeStatus.ACTIVE
				? NoticeStatus.HOLD
				: row.noticeStatus === NoticeStatus.HOLD
				? NoticeStatus.ACTIVE
				: NoticeStatus.HOLD;
		await changeStatus({ variables: { input: { _id: row._id, noticeStatus: next } } });
	};

	const doBulkDelete = async () => {
		await Promise.all(selected.map((_id) => deleteNotice({ variables: { _id } })));
	};

	return (
		<Box>
			<Stack direction="row" spacing={2} sx={{ mb: 2 }}>
				<Select size="small" value={status} onChange={(e) => setStatus(e.target.value as any)} sx={{ width: 160 }}>
					<MenuItem value="ALL">All Status</MenuItem>
					{Object.values(NoticeStatus).map((s) => (
						<MenuItem key={s} value={s}>
							{s}
						</MenuItem>
					))}
				</Select>

				<OutlinedInput
					size="small"
					value={text}
					placeholder="Search notice title or content"
					onChange={(e) => setText(e.target.value)}
					sx={{ flex: 1 }}
					onKeyDown={(e) => e.key === 'Enter' && refetch()}
					endAdornment={
						<>
							{!!text && <CancelRoundedIcon sx={{ mr: 1, cursor: 'pointer' }} onClick={() => setText('')} />}
							<InputAdornment position="end">
								<IconButton onClick={() => refetch()}>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						</>
					}
				/>

				{selected.length > 0 && (
					<Button color="error" variant="outlined" onClick={doBulkDelete} disabled={deleteLoading}>
						Delete Selected ({selected.length})
					</Button>
				)}
			</Stack>

			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell padding="checkbox">
								<Checkbox color="primary" checked={allChecked} indeterminate={someChecked} onChange={toggleAll} />
							</TableCell>
							<TableCell width={120}>Category</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Status</TableCell>
							<TableCell width={180}>Created</TableCell>
							<TableCell width={180}>Updated</TableCell>
							<TableCell width={140} align="right">
								Actions
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{loading && (
							<TableRow>
								<TableCell colSpan={7}>Loading...</TableCell>
							</TableRow>
						)}
						{error && (
							<TableRow>
								<TableCell colSpan={7}>
									<Typography color="error">{error.message}</Typography>
								</TableCell>
							</TableRow>
						)}
						{!loading && !error && rows.length === 0 && (
							<TableRow>
								<TableCell colSpan={7}>No notices.</TableCell>
							</TableRow>
						)}

						{rows.map((row) => (
							<TableRow key={row._id} hover>
								<TableCell padding="checkbox">
									<Checkbox color="primary" checked={selected.includes(row._id)} onChange={() => toggleRow(row._id)} />
								</TableCell>
								<TableCell>{row.noticeCategory}</TableCell>
								<TableCell>
									<Typography fontWeight={600}>{row.noticeTitle}</Typography>
									<Typography variant="body2" color="text.secondary" noWrap>
										{row.noticeContent}
									</Typography>
								</TableCell>
								<TableCell>
									<Chip size="small" label={row.noticeStatus} color={statusColor(row.noticeStatus) as any} />
								</TableCell>
								<TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
								<TableCell>{new Date(row.updatedAt).toLocaleString()}</TableCell>
								<TableCell align="right">
									<Tooltip title="Edit">
										<IconButton onClick={() => onEdit?.(row)}>
											<EditRounded />
										</IconButton>
									</Tooltip>
									<Tooltip title="Toggle Active/Hold">
										<IconButton onClick={() => doToggleStatus(row)} disabled={statusLoading}>
											<PublishedWithChangesRounded />
										</IconButton>
									</Tooltip>
									<Tooltip title="Delete (soft)">
										<IconButton onClick={() => deleteNotice({ variables: { _id: row._id } })} disabled={deleteLoading}>
											<DeleteRounded />
										</IconButton>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<TablePagination
				component="div"
				rowsPerPageOptions={[20, 40, 60]}
				count={totalCount}
				rowsPerPage={limit}
				page={page - 1}
				onPageChange={(_event: unknown, p: number) => setPage(p + 1)}
				onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
					setLimit(parseInt(e.target.value, 10));
					setPage(1);
				}}
			/>
		</Box>
	);
};
