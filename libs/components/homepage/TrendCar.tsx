'use client';
import { useState } from 'react';
import { Stack, Box, Divider, Typography } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper';

import TrendCarCard from './TrendCarCard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../../apollo/user/query';
import type { T } from '../../types/common';
import { LIKE_TARGET_PROPERTY } from '../../../apollo/user/mutation';
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from '../../sweetAlert';
import { Message } from '../../enums/common.enum';
import { useTranslation } from 'next-i18next';
import { PropertiesInquiry } from '../../types/property/property.input';
import { Property } from '../../types/property/property';

interface TrendPropertiesProps {
	initialInput: PropertiesInquiry;
}

const TrendProperties = (props: TrendPropertiesProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const [trendCars, setTrendCars] = useState<Property[]>([]);
	const [activeSort, setActiveSort] = useState(initialInput.sort);
	const { t, i18n } = useTranslation('common');

	/** APOLLO REQUESTS **/
	const [likeTargetCar] = useMutation(LIKE_TARGET_PROPERTY);

	const {
		loading: getCarsLoading,
		data: getCarsData,
		error: getCarsError,
		refetch: getCarsRefetch,
	} = useQuery(GET_PROPERTIES, {
		fetchPolicy: 'cache-and-network',
		variables: { input: initialInput },
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => {
			setTrendCars(data?.getProperties?.list);
		},
	});

	/** HANDLERS **/
	const likeCarHandler = async (user: T, id: string) => {
		try {
			if (!id) return;
			if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);
			//execute likeCarHandler Mutation
			await likeTargetCar({ variables: { input: id } });

			//execute getCarsRefetch
			await getCarsRefetch({ input: initialInput });

			await sweetTopSmallSuccessAlert('success', 800);
		} catch (err: any) {
			console.log('ERROR, likeCarHandler', err.message);
			sweetMixinErrorAlert(err.message).then();
		}
	};

	const carSearchChangeHandler = async (sortInput: string) => {
		try {
			await getCarsRefetch({
				input: {
					...initialInput,
					sort: sortInput,
				},
			});
			setActiveSort(sortInput);
		} catch (err: any) {
			console.log('ERROR, carSearchChangeHandler', err.message);
			sweetMixinErrorAlert(err.message);
		}
	};

	if (trendCars) console.log('trendCars:', trendCars);
	if (!trendCars) return null;

	if (device === 'mobile') {
		return (
			<Stack className={'trend-cars'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<h2>{t('Featured Car Listings')}</h2>
						</Box>
					</Stack>
					<Stack className="car-filter-box">
						<Stack className="car-filter-boxes">
							<Typography
								onClick={() => carSearchChangeHandler('carViews')}
								className={activeSort === 'carViews' ? 'active' : ''}
							>
								{t('Popular Cars')}
							</Typography>
							<Typography
								onClick={() => carSearchChangeHandler('carLikes')}
								className={activeSort === 'carLikes' ? 'active' : ''}
							>
								{t('Trending Cars')}
							</Typography>
							<Typography
								onClick={() => carSearchChangeHandler('carRank')}
								className={activeSort === 'carRank' ? 'active' : ''}
							>
								{t('Top Cars')}
							</Typography>
						</Stack>
						<Divider
							sx={{
								color: '#e9e9e9',
								width: '100%',
								height: '1px',
							}}
						/>
					</Stack>
					<Stack className={'card-box'}>
						{trendCars.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								Trends Empty
							</Box>
						) : (
							<Swiper
								className={'trend-car-swiper'}
								slidesPerView={1.6}
								spaceBetween={12}
								modules={[Autoplay, Navigation, Pagination]}
								pagination={{
									el: '.swiper-trend-pagination',
									clickable: true,
								}}
							>
								{trendCars.map((car: Property) => {
									return (
										<SwiperSlide key={car._id} className={'trend-car-slide'}>
											<TrendCarCard car={car} likeCarHandler={likeCarHandler} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'trend-cars'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span>{t('Trend Cars ')}</span>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'pagination-box'}>
								<WestIcon className={'swiper-trend-prev'} />
								<span className={'swiper-trend-pagination'}></span>
								<EastIcon className={'swiper-trend-next'} />
							</div>
						</Box>
					</Stack>
					<Stack className="car-filter-box">
						<Stack className="car-filter-boxes">
							<Typography
								onClick={() => carSearchChangeHandler('propertyLikes')}
								className={activeSort === 'propertyLikes' ? 'active' : ''}
							>
								{t('Trend is based on likes')}
							</Typography>
						</Stack>
					</Stack>
					<Stack className={'card-box'}>
						{trendCars.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								Trends Empty
							</Box>
						) : (
							<Swiper
								className={'trend-car-swiper'}
								slidesPerView={5}
								spaceBetween={20}
								modules={[Autoplay, Navigation, Pagination, Grid]}
								navigation={{
									nextEl: '.swiper-trend-next',
									prevEl: '.swiper-trend-prev',
								}}
								pagination={{
									clickable: true,
									el: '.swiper-trend-pagination',
								}}
							>
								{trendCars.map((car: Property) => {
									return (
										<SwiperSlide key={car._id} className={'trend-car-slide'}>
											<TrendCarCard car={car} likeCarHandler={likeCarHandler} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

TrendProperties.defaultProps = {
	initialInput: {
		page: 1,
		limit: 15,
		sort: 'propertyLikes',
		direction: 'DESC',
		search: {},
	},
};

export default TrendProperties;
