import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Avatar, Box, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { useRouter } from 'next/router';
import ScrollableFeed from 'react-scrollable-feed';
import { RippleBadge } from '../../scss/MaterialTheme/styled';
import { Member } from '../types/member/member';
import { useReactiveVar } from '@apollo/client';
import { socketVar, userVar } from '../../apollo/store';
import { Messages, REACT_APP_API_URL } from '../config';
import { sweetErrorAlert } from '../sweetAlert';
import { useTranslation } from 'next-i18next';

interface MessagePayload {
	event: string;
	text: string;
	memberData: Member;
}
interface InfoPayload {
	event: string;
	totalClients: number;
	memberData: Member;
	action: string;
}

const Chat = () => {
	const { t } = useTranslation('common');
	const chatContentRef = useRef<HTMLDivElement>(null);
	const [messagesList, setMessagesList] = useState<MessagePayload[]>([]);
	const [onlineUsers, setOnlineUsers] = useState<number>(0);
	const [messageInput, setMessageInput] = useState<string>('');
	const [open, setOpen] = useState(false);
	const [openButton, setOpenButton] = useState(false);
	const router = useRouter();
	const user = useReactiveVar(userVar);
	const socket = useReactiveVar(socketVar);

	useEffect(() => {
		socket.onmessage = (msg) => {
			const data = JSON.parse(msg.data);
			switch (data.event) {
				case 'info':
					setOnlineUsers((data as InfoPayload).totalClients);
					break;
				case 'getMessages':
					setMessagesList(data.list as MessagePayload[]);
					break;
				case 'message':
					setMessagesList((prev) => [...prev, data as MessagePayload]);
					break;
			}
		};
	}, [socket]);

	useEffect(() => {
		const timeoutId = setTimeout(() => setOpenButton(true), 100);
		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => setOpenButton(false), [router.pathname]);

	const handleOpenChat = () => setOpen((prev) => !prev);

	const getInputMessageHandler = useCallback((e: any) => {
		setMessageInput(e.target.value);
	}, []);

	const getKeyHandler = (e: any) => {
		try {
			if (e.key === 'Enter') onClickHandler();
		} catch {}
	};

	const onClickHandler = () => {
		if (!messageInput) sweetErrorAlert(Messages.error4);
		else {
			socket.send(JSON.stringify({ event: 'message', data: messageInput }));
			setMessageInput('');
		}
	};

	return (
		<Stack className="chatting">
			{openButton ? (
				<button className="chat-button" onClick={handleOpenChat}>
					{open ? <CloseFullscreenIcon /> : <MarkChatUnreadIcon />}
				</button>
			) : null}

			<Stack className={`chat-frame ${open ? 'open' : ''}`}>
				<Box className="chat-top" component="div">
					<div style={{ fontFamily: 'Nunito' }}>{t('Online Chat')}</div>
					<RippleBadge style={{ margin: '-18px 0 0 21px' }} badgeContent={onlineUsers} />
				</Box>

				<Box className="chat-content" id="chat-content" ref={chatContentRef} component="div">
					<ScrollableFeed>
						<Stack className="chat-main">
							<Box component="div" sx={{ m: '10px 0px' }}>
								<div className="welcome">{t('Welcome to Live chat!')}</div>
							</Box>

							{messagesList.map((ele: MessagePayload, idx) => {
								const { text, memberData } = ele;
								const memberImage = memberData?.memberImage
									? `${REACT_APP_API_URL}/${memberData.memberImage}`
									: '/img/profile/defaultUser.svg';

								return memberData?._id === user?._id ? (
									<Box key={idx} component="div" sx={{ m: '10px 0px', display: 'flex' }} justifyContent="flex-end">
										<div className="msg-right">{text}</div>
									</Box>
								) : (
									<Box key={idx} component="div" sx={{ m: '10px 0px', display: 'flex' }}>
										<Avatar alt="member" src={memberImage} />
										<div className="msg-left">{text}</div>
									</Box>
								);
							})}
						</Stack>
					</ScrollableFeed>
				</Box>

				<Box className="chat-bott" component="div">
					<input
						type="text"
						name="message"
						className="msg-input"
						placeholder={t('Type message') as string}
						value={messageInput}
						onChange={getInputMessageHandler}
						onKeyDown={getKeyHandler}
					/>
					<button className="send-msg-btn" onClick={onClickHandler}>
						<SendIcon style={{ color: '#fff' }} />
					</button>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Chat;
