import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack, Box, Typography, Grid, IconButton, TextField, Button } from '@mui/material';
import useDeviceDetect from '../hooks/useDeviceDetect';
import moment from 'moment';

const Footer = () => {
	const device = useDeviceDetect();

	return (
		<Box
			component="footer"
			sx={{
				background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
				color: '#fff',
				pt: 6,
				pb: 3,
				px: { xs: 3, md: 10 },
			}}
		>
			<Grid container spacing={5} justifyContent="space-between">
				{/* Logo and Contact */}
				<Grid item xs={12} md={3}>
					<img src="/img/logo/logo.jpg" alt="AvtoBaraka Logo" style={{ width: 140, marginBottom: 16 }} />
					<Typography variant="body2" sx={{ opacity: 0.8 }}>
						Buy and sell cars anywhere, anytime in South Korea. Best cars at the best prices on AvtoBaraka.
					</Typography>
					<Box mt={2}>
						<Typography variant="subtitle2">Customer Care (24/7)</Typography>
						<Typography variant="body1">📞 +82 10 2754 5777</Typography>
					</Box>
				</Grid>

				{/* Popular Searches */}
				<Grid item xs={6} md={2}>
					<Typography variant="h6" gutterBottom>
						Popular Searches
					</Typography>
					<Stack spacing={1}>
						<Typography variant="body2">Cars for Sale</Typography>
						<Typography variant="body2">Used Cars</Typography>
						<Typography variant="body2">New Cars</Typography>
						<Typography variant="body2">Luxury Cars</Typography>
					</Stack>
				</Grid>

				{/* Quick Links */}
				<Grid item xs={6} md={2}>
					<Typography variant="h6" gutterBottom>
						Quick Links
					</Typography>
					<Stack spacing={1}>
						<Typography variant="body2">Terms of Use</Typography>
						<Typography variant="body2">Privacy Policy</Typography>
						<Typography variant="body2">Pricing Plans</Typography>
						<Typography variant="body2">Our Services</Typography>
						<Typography variant="body2">Contact Support</Typography>
						<Typography variant="body2">FAQs</Typography>
					</Stack>
				</Grid>

				{/* Discover */}
				<Grid item xs={6} md={2}>
					<Typography variant="h6" gutterBottom>
						Discover
					</Typography>
					<Stack spacing={1}>
						<Typography variant="body2">Seoul</Typography>
						<Typography variant="body2">Gyeonggi-do</Typography>
						<Typography variant="body2">Busan</Typography>
						<Typography variant="body2">Jeju</Typography>
					</Stack>
				</Grid>

				{/* Newsletter */}
				<Grid item xs={12} md={3}>
					<Typography variant="h6" gutterBottom>
						Stay Updated
					</Typography>
					<Stack direction="row" spacing={1}>
						<TextField
							placeholder="Your Email"
							variant="outlined"
							size="small"
							sx={{
								bgcolor: '#fff',
								borderRadius: 1,
								input: { color: '#000' },
								flex: 1,
							}}
						/>
						<Button variant="contained" color="warning">
							Subscribe
						</Button>
					</Stack>
					<Box mt={2}>
						<Typography variant="body2">Follow us</Typography>
						<Stack direction="row" spacing={1} mt={1}>
							<IconButton
								component="a"
								href="https://facebook.com/koreaavtobaraka"
								target="_blank"
								rel="noopener noreferrer"
								color="inherit"
							>
								<FacebookOutlinedIcon />
							</IconButton>

							<IconButton
								component="a"
								href="https://t.me/koreaavtobaraka"
								target="_blank"
								rel="noopener noreferrer"
								color="inherit"
							>
								<TelegramIcon />
							</IconButton>

							<IconButton
								component="a"
								href="https://instagram.com/koreaavtobaraka"
								target="_blank"
								rel="noopener noreferrer"
								color="inherit"
							>
								<InstagramIcon />
							</IconButton>

							<IconButton
								component="a"
								href="https://twitter.com/yourpage"
								target="_blank"
								rel="noopener noreferrer"
								color="inherit"
							>
								<TwitterIcon />
							</IconButton>
						</Stack>
					</Box>
				</Grid>
			</Grid>

			{/* Bottom Section */}
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				justifyContent="space-between"
				alignItems="center"
				sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}
			>
				<Typography variant="body2">© AvtoBaraka - All rights reserved. {moment().year()}</Typography>
				<Typography variant="body2">Privacy · Terms · Sitemap</Typography>
			</Stack>
		</Box>
	);
};

export default Footer;
