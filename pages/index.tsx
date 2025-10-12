import { NextPage } from 'next';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';
import withLayoutMain from '../libs/components/layout/LayoutHome';
import CommunityBoards from '../libs/components/homepage/CommunityBoards';
import PopularProperties from '../libs/components/homepage/PopularCar';
import TopAgents from '../libs/components/homepage/TopAgents';

import TopProperties from '../libs/components/homepage/TopCar';
import { Stack } from '@mui/material';
import Advertisement from '../libs/components/homepage/Advertisement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TrendProperties from '../libs/components/homepage/TrendCar';
import PopularCars from '../libs/components/homepage/PopularCar';
import PopularCar from '../libs/components/homepage/PopularCar';

export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

const Home: NextPage = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return (
			<Stack className={'home-page'}>
				<TrendProperties />
				<PopularCar />
				<Advertisement />
				<TopProperties />
				<TopAgents />
			</Stack>
		);
	} else {
		return (
			<Stack className={'home-page'}>
				<TrendProperties />
				<PopularCar />
				<Advertisement />
				<TopProperties />
				<TopAgents />
				<CommunityBoards />
			</Stack>
		);
	}
};

export default withLayoutMain(Home);
