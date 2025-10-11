import React from 'react';
import { NextPage } from 'next';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';
import withLayoutBasic from '../../libs/components/layout/LayoutBasic';
import { Stack, Box } from '@mui/material';

const About: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>ABOUT PAGE MOBILE</div>;
	} else {
		return (
			<Stack className={'about-page'}>
				<Stack className={'intro'}>
					<Stack className={'container'}>
						<Stack className={'left'}>
							<strong>We're on a Mission to Transform the Car Marketplace.</strong>
						</Stack>
						<Stack className={'right'}>
							<p>
								Buying or selling a car should not be complicated. With our platform, you can easily browse, compare,
								and secure the best deals.
								<br />
								<br />
								From trusted dealers to private sellers, we make sure you get transparent pricing, secure transactions,
								and a smooth car buying experience.
							</p>
							<Stack className={'boxes'}>
								<div className={'box'}>
									<div>
										<img src="/img/icons/car.svg" alt="" />
									</div>
									<span>Wide Car Selection</span>
									<p>Choose from thousands of verified listings.</p>
								</div>
								<div className={'box'}>
									<div>
										<img src="/img/icons/securePayment.svg" alt="" />
									</div>
									<span>Secure Payment</span>
									<p>Safe and reliable payment process.</p>
								</div>
							</Stack>
						</Stack>
					</Stack>
				</Stack>

				<Stack className={'statistics'}>
					<Stack className={'container'}>
						<Stack className={'banner'}>
							<img src="/img/banner/carBanner.svg" alt="" />
						</Stack>
						<Stack className={'info'}>
							<Box component={'div'}>
								<strong>10K+</strong>
								<p>Cars Listed</p>
							</Box>
							<Box component={'div'}>
								<strong>500+</strong>
								<p>Verified Dealers</p>
							</Box>
							<Box component={'div'}>
								<strong>1M+</strong>
								<p>Happy Drivers</p>
							</Box>
						</Stack>
					</Stack>
				</Stack>

				<Stack className={'agents'}>
					<Stack className={'container'}>
						<span className={'title'}>Our Top Dealers</span>
						<p className={'desc'}>Find trusted car dealers near you</p>
						<Stack className={'wrap'}>{/* DealerCard component */}</Stack>
					</Stack>
				</Stack>

				<Stack className={'options'}>
					<img src="/img/banner/aboutCarBanner.svg" alt="" className={'about-banner'} />
					<Stack className={'container'}>
						<strong>Choose the best car buying option for you</strong>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/security.svg" alt="" />
							</div>
							<div className={'text-box'}>
								<span>Verified Listings</span>
								<p>All cars are checked and verified before publishing.</p>
							</div>
						</Stack>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/loan.svg" alt="" />
							</div>
							<div className={'text-box'}>
								<span>Easy Financing</span>
								<p>Get instant loan and leasing options with partners.</p>
							</div>
						</Stack>
						<Stack>
							<div className={'icon-box'}>
								<img src="/img/icons/insurance.svg" alt="" />
							</div>
							<div className={'text-box'}>
								<span>Insurance Support</span>
								<p>Get the best insurance coverage with trusted providers.</p>
							</div>
						</Stack>
						<Stack className={'btn'}>
							Explore Cars
							<img src="/img/icons/rightup.svg" alt="" />
						</Stack>
					</Stack>
				</Stack>

				<Stack className={'partners'}>
					<Stack className={'container'}>
						<span>Trusted by leading automotive brands</span>
						<Stack className={'wrap'}>
							<img src="/img/icons/brands/tesla.svg" alt="" />
							<img src="/img/icons/brands/bmw.svg" alt="" />
							<img src="/img/icons/brands/audi.svg" alt="" />
							<img src="/img/icons/brands/toyota.svg" alt="" />
							<img src="/img/icons/brands/mercedes.svg" alt="" />
						</Stack>
					</Stack>
				</Stack>

				<Stack className={'help'}>
					<Stack className={'container'}>
						<Box component={'div'} className={'left'}>
							<strong>Need help? Talk to our car experts.</strong>
							<p>Contact us or explore more car options today.</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'white'}>
								Contact Us
								<img src="/img/icons/rightup.svg" alt="" />
							</div>
							<div className={'black'}>
								<img src="/img/icons/call.svg" alt="" />
								920 851 9087
							</div>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default withLayoutBasic(About);
