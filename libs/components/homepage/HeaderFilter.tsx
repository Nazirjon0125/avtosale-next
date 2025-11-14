import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	Stack,
	Box,
	Modal,
	Divider,
	Button,
	Typography,
	Checkbox,
	FormControl,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {
	PropertyLocation,
	PropertyCarType,
	PropertyFuel,
	KiaModel,
	HyundaiModel,
	ToyotaModel,
	AudiModel,
	BMWModel,
	MercedesModel,
	TeslaModel,
	ChevroletModel,
	JeepModel,
	HondaModel,
	LandRoverModel,
	LexusModel,
	LincolnModel,
	VolvoModel,
	PropertyCarBody,
	PropertyTransmission,
} from '../../enums/property.enum';
import { PriceRange, PropertiesInquiry } from '../../types/property/property.input';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { carMileage, carPrice, carYears, REACT_APP_API_URL } from '../../config';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

// Brand va model mappingni enum asosida hosil qilamiz
const BrandModelsMap: Record<PropertyCarType, string[]> = {
	[PropertyCarType.KIA]: Object.values(KiaModel),
	[PropertyCarType.BMW]: Object.values(BMWModel),
	[PropertyCarType.HYUNDAI]: Object.values(HyundaiModel),
	[PropertyCarType.AUDI]: Object.values(AudiModel),
	[PropertyCarType.MERCEDES]: Object.values(MercedesModel),
	[PropertyCarType.TOYOTA]: Object.values(ToyotaModel),
	[PropertyCarType.TESLA]: Object.values(TeslaModel),
	[PropertyCarType.CHEVROLET]: Object.values(ChevroletModel),
	[PropertyCarType.JEEP]: Object.values(JeepModel),
	[PropertyCarType.HONDA]: Object.values(HondaModel),
	[PropertyCarType.LAND_ROVER]: Object.values(LandRoverModel),
	[PropertyCarType.LEXUS]: Object.values(LexusModel),
	[PropertyCarType.LINCOLN]: Object.values(LincolnModel),
	[PropertyCarType.VOLVO]: Object.values(VolvoModel),
};

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	bgcolor: 'background.paper',
	borderRadius: '12px',
	outline: 'none',
	boxShadow: 24,
};

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

const thisYear = new Date().getFullYear();

interface HeaderFilterProps {
	initialInput: PropertiesInquiry;
}

const HeaderFilter = ({ initialInput }: HeaderFilterProps) => {
	const device = useDeviceDetect();
	const { t } = useTranslation('common');
	const [searchFilter, setSearchFilter] = useState<PropertiesInquiry>(initialInput);
	const locationRef: any = useRef();
	const typeRef: any = useRef();
	const modelRef: any = useRef();
	const router = useRouter();
	const [openAdvancedFilter, setOpenAdvancedFilter] = useState(false);
	const [openLocation, setOpenLocation] = useState(false);
	const [openType, setOpenType] = useState(false);
	const [openModel, setOpenModel] = useState(false);
	const [propertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [propertyType] = useState<PropertyCarType[]>(Object.values(PropertyCarType));
	const [propertyFuel] = useState<PropertyFuel[]>(Object.values(PropertyFuel));
	const [propertyCarBody] = useState<PropertyCarBody[]>(Object.values(PropertyCarBody));
	const [propertyTransmission] = useState<PropertyTransmission[]>(Object.values(PropertyTransmission));
	const [optionCheck, setOptionCheck] = useState('all');
	const [yearCheck, setYearCheck] = useState({ start: 1990, end: thisYear });
	const [mileCheck, setMileCheck] = useState({ start: 0, end: 999999 });
	const [priceCheck, setPriceCheck] = useState<PriceRange>({ start: 0, end: 1000000 });

	useEffect(() => {
		const clickHandler = (event: MouseEvent) => {
			if (!locationRef?.current?.contains(event.target)) setOpenLocation(false);
			if (!typeRef?.current?.contains(event.target)) setOpenType(false);
			if (!modelRef?.current?.contains(event.target)) setOpenModel(false);
		};
		document.addEventListener('mousedown', clickHandler);
		return () => document.removeEventListener('mousedown', clickHandler);
	}, []);

	// Brand va modelni aniqlash
	const selectedBrand = searchFilter.search.typeList?.[0] as PropertyCarType;
	const availableModels = selectedBrand ? BrandModelsMap[selectedBrand] || [] : [];

	const advancedFilterHandler = (status: boolean) => {
		setOpenLocation(false);
		setOpenType(false);
		setOpenModel(false);
		setOpenAdvancedFilter(status);
	};

	const locationStateChangeHandler = () => {
		setOpenLocation((prev) => !prev);
		setOpenType(false);
		setOpenModel(false);
	};
	const typeStateChangeHandler = () => {
		setOpenType((prev) => !prev);
		setOpenLocation(false);
		setOpenModel(false);
	};
	const modelStateChangeHandler = () => {
		setOpenModel((prev) => !prev);
		setOpenType(false);
		setOpenLocation(false);
	};

	const propertyLocationSelectHandler = useCallback(
		(value: PropertyLocation) => {
			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, locationList: [value] },
			});
			setOpenLocation(false);
		},
		[searchFilter],
	);

	const propertyTypeSelectHandler = useCallback(
		(value: PropertyCarType) => {
			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, typeList: [value], modelList: [] }, // model reset
			});
			setOpenType(false);
		},
		[searchFilter],
	);

	const propertyModelSelectHandler = useCallback(
		(value: string) => {
			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, modelList: [value] },
			});
			setOpenModel(false);
		},
		[searchFilter],
	);

	const carFuelTypeSelectHandler = useCallback(
		(e: any) => {
			const value = e.target.value;
			const isChecked = e.target.checked;

			let newFuelList = searchFilter.search.fuelList || [];
			if (isChecked) newFuelList = [...newFuelList, value];
			else newFuelList = newFuelList.filter((item) => item !== value);

			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, fuelList: newFuelList },
			});
		},
		[searchFilter],
	);

	const carTransmissionTypeSelectHandler = useCallback(
		(e: any) => {
			const value = e.target.value;
			const isChecked = e.target.checked;

			let newTransmissionList = searchFilter.search.transmissionList || [];
			if (isChecked) newTransmissionList = [...newTransmissionList, value];
			else newTransmissionList = newTransmissionList.filter((item) => item !== value);

			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, transmissionList: newTransmissionList },
			});
		},
		[searchFilter],
	);

	const carBodyTypeSelectHandler = useCallback(
		(e: any) => {
			const value = e.target.value;
			const isChecked = e.target.checked;

			let newBodyList = searchFilter.search.carBodyList || [];
			if (isChecked) newBodyList = [...newBodyList, value];
			else newBodyList = newBodyList.filter((item) => item !== value);

			setSearchFilter({
				...searchFilter,
				search: { ...searchFilter.search, carBodyList: newBodyList },
			});
		},
		[searchFilter],
	);

	const propertyOptionSelectHandler = useCallback(
		(e: any) => {
			const value = e.target.value;
			setOptionCheck(value);

			setSearchFilter({
				...searchFilter,
				search:
					value === 'all'
						? { ...searchFilter.search, carOptions: undefined }
						: { ...searchFilter.search, carOptions: [value] },
			});
		},
		[searchFilter],
	);

	const yearStartChangeHandler = (event: any) => {
		const start = Number(event.target.value);
		setYearCheck({ ...yearCheck, start });
		setSearchFilter({
			...searchFilter,
			search: { ...searchFilter.search, yearsRange: { start, end: yearCheck.end } },
		});
	};
	const yearEndChangeHandler = (event: any) => {
		const end = Number(event.target.value);
		setYearCheck({ ...yearCheck, end });
		setSearchFilter({
			...searchFilter,
			search: { ...searchFilter.search, yearsRange: { start: yearCheck.start, end } },
		});
	};

	const mileStartChangeHandler = (event: any) => {
		const start = Number(event.target.value);
		setMileCheck({ ...mileCheck, start });
		setSearchFilter({
			...searchFilter,
			search: { ...searchFilter.search, mileRange: { start, end: mileCheck.end } },
		});
	};
	const mileEndChangeHandler = (event: any) => {
		const end = Number(event.target.value);
		setMileCheck({ ...mileCheck, end });
		setSearchFilter({
			...searchFilter,
			search: { ...searchFilter.search, mileRange: { start: mileCheck.start, end } },
		});
	};

	const mileageHandler = useCallback(
		async (e: any, type: string) => {
			const value = parseInt(e.target.value);

			if (type === 'start') {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						// @ts-ignore
						mileRange: { ...searchFilter.search.mileRange, start: value },
					},
				});
			} else {
				setSearchFilter({
					...searchFilter,
					search: {
						...searchFilter.search,
						// @ts-ignore
						mileRange: { ...searchFilter.search.mileRange, end: value },
					},
				});
			}
		},
		[searchFilter],
	);
	const priceStartChangeHandler = (event: SelectChangeEvent<number>) => {
		const newStart = Number(event.target.value);
		setPriceCheck((prev) => ({ ...prev, start: newStart }));
		setSearchFilter((prev) => ({
			...prev,
			search: {
				...prev.search,
				pricesRange: {
					start: newStart,
					end: prev.search?.pricesRange?.end ?? 0,
				},
			},
		}));
	};

	const priceEndChangeHandler = (event: SelectChangeEvent<number>) => {
		const newEnd = Number(event.target.value);
		setPriceCheck((prev) => ({ ...prev, end: newEnd }));
		setSearchFilter((prev) => ({
			...prev,
			search: {
				...prev.search,
				pricesRange: {
					start: prev.search?.pricesRange?.start ?? 0,
					end: newEnd,
				},
			},
		}));
	};

	const resetFilterHandler = () => {
		setSearchFilter(initialInput);
		setOptionCheck('all');
		setYearCheck({ start: 1990, end: thisYear });
		setMileCheck({ start: 0, end: 999999 });
		setPriceCheck({ start: 0, end: 1000000 });
	};

	const pushSearchHandler = async () => {
		await router.push(`/property?input=${JSON.stringify(searchFilter)}`);
	};

	if (device === 'mobile') {
		return <div>HEADER FILTER MOBILE</div>;
	} else {
		return (
			<Stack className={'search-box'}>
				<Stack className={'select-box'}>
					<Box className={`box ${openType ? 'on' : ''}`} onClick={typeStateChangeHandler}>
						<span>{searchFilter?.search?.typeList?.[0] ?? t('Car Brand')}</span>
						<ExpandMoreIcon />
					</Box>
					<Box className={`box ${openModel ? 'on' : ''}`} onClick={modelStateChangeHandler}>
						<span>{searchFilter?.search?.modelList?.[0] ?? t('Model')}</span>
						<ExpandMoreIcon />
					</Box>
					<Box className={`box ${openLocation ? 'on' : ''}`} onClick={locationStateChangeHandler}>
						<span>{searchFilter?.search?.locationList?.[0] ?? t('Location')}</span>
						<ExpandMoreIcon />
					</Box>
				</Stack>
				<Stack className={'search-box-other'}>
					<Box className={'advanced-filter'} onClick={() => advancedFilterHandler(true)}>
						<img src="/img/icons/tune.svg" alt="" />
						<span>{t('Advanced')}</span>
					</Box>
					<Box className={'search-btn'} onClick={pushSearchHandler}>
						<img src="/img/icons/search_white.svg" alt="" />
						<p>{t('Search Cars')}</p>
					</Box>
				</Stack>

				{/* Type Menu */}
				<div className={`filter-type ${openType ? 'on' : ''}`} ref={typeRef}>
					{propertyType.map((type) => (
						<div
							key={type}
							style={{ backgroundImage: `url(/img/banner/types/${type.toLowerCase()}.svg)` }}
							onClick={() => propertyTypeSelectHandler(type)}
						>
							<img src={`img/banner/car/${type}.svg`} alt="" />
							<span>{type}</span>
						</div>
					))}
					´
				</div>
				{/* Model Menu */}
				<div className={`filter-model ${openModel ? 'on' : ''}`} ref={modelRef}>
					{availableModels.map((model) => (
						<div key={model} onClick={() => propertyModelSelectHandler(model)}>
							<span>{model}</span>
						</div>
					))}
				</div>
				{/* Location Menu */}
				<div className={`filter-location ${openLocation ? 'on' : ''}`} ref={locationRef}>
					{propertyLocation.map((location) => (
						<div key={location} onClick={() => propertyLocationSelectHandler(location)}>
							<img src={`img/banner/cities/${location}.webp`} alt="" />
							<span>{location}</span>
						</div>
					))}
				</div>
				{/* Advanced Filter Modal */}
				<Modal
					open={openAdvancedFilter}
					onClose={() => advancedFilterHandler(false)}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					{/* @ts-ignore */}
					<Box sx={style}>
						<Box className={'advanced-filter-modal'}>
							<div className={'close'} onClick={() => advancedFilterHandler(false)}>
								<CancelRoundedIcon />
							</div>
							<div className={'top'}>
								<div className={'search-input-box'}>
									<img src="/img/icons/search.svg" alt="" />
									<input
										value={searchFilter?.search?.text ?? ''}
										type="text"
										placeholder={'Search by name...'}
										onChange={(e: any) => {
											setSearchFilter({
												...searchFilter,
												search: { ...searchFilter.search, text: e.target.value },
											});
										}}
									/>
								</div>
							</div>

							<div className={'middle'}>
								<div className={'row-box'}>
									<div className={'box'}>
										<span>Car Type</span>
										{propertyCarBody.map((type: string) => (
											<Stack
												className={'input-box'}
												key={type}
												flexDirection={'row'}
												width={'100%'}
												alignItems={'center'}
												gap={'4px'}
											>
												<label style={{ cursor: 'pointer' }} htmlFor={type}>
													<Typography className="property-type">{type}</Typography>
												</label>
												<Checkbox
													id={type}
													className="property-checkbox"
													color="default"
													value={type}
													onChange={carBodyTypeSelectHandler}
													checked={(searchFilter?.search?.carBodyList || []).includes(type as PropertyCarBody)}
												/>
											</Stack>
										))}
									</div>
									<div className={'box'}>
										<span>Fuel</span>
										{propertyFuel.map((type: string) => (
											<Stack className={'input-box'} key={type} flexDirection={'row'}>
												<label style={{ cursor: 'pointer' }} htmlFor={type}>
													<Typography className="property-type">{type}</Typography>
												</label>
												<Checkbox
													id={type}
													className="property-checkbox"
													color="default"
													value={type}
													onChange={carFuelTypeSelectHandler}
													checked={(searchFilter?.search?.fuelList || []).includes(type as PropertyFuel)}
												/>
											</Stack>
										))}
									</div>
									<div className={'box'}>
										<span>options</span>
										<div className={'inside'}>
											<FormControl>
												<Select
													value={optionCheck}
													onChange={propertyOptionSelectHandler}
													displayEmpty
													inputProps={{ 'aria-label': 'Without label' }}
												>
													<MenuItem value={'all'}>All Options</MenuItem>
													<MenuItem value={'carBarter'}>Barter</MenuItem>
													<MenuItem value={'carRent'}>Rent</MenuItem>
												</Select>
											</FormControl>
										</div>

										<div className={'box'}>
											<span>Transmission</span>
											{propertyTransmission.map((type: string) => (
												<Stack className={'input-box'} key={type} flexDirection={'row'}>
													<label style={{ cursor: 'pointer' }} htmlFor={type}>
														<Typography className="property-type">{type}</Typography>
													</label>
													<Checkbox
														id={type}
														className="property-checkbox"
														color="default"
														value={type}
														onChange={carTransmissionTypeSelectHandler}
														checked={(searchFilter?.search?.transmissionList || []).includes(
															type as PropertyTransmission,
														)}
													/>
												</Stack>
											))}
										</div>
									</div>
								</div>

								<div className={'row-box'}>
									<div className={'box'}>
										<span>Year</span>
										<div className={'inside space-between align-center'}>
											<FormControl sx={{ width: '122px' }}>
												<Select
													value={yearCheck.start.toString()}
													onChange={yearStartChangeHandler}
													displayEmpty
													inputProps={{ 'aria-label': 'Without label' }}
													MenuProps={MenuProps}
												>
													{carYears?.slice(0)?.map((year: number) => (
														<MenuItem value={year} disabled={yearCheck.end <= year} key={year}>
															{year}
														</MenuItem>
													))}
												</Select>
											</FormControl>
											<div className={'minus-line'}></div>
											<FormControl sx={{ width: '122px' }}>
												<Select
													value={yearCheck.end.toString()}
													onChange={yearEndChangeHandler}
													displayEmpty
													inputProps={{ 'aria-label': 'Without label' }}
													MenuProps={MenuProps}
												>
													{carYears
														?.slice(0)
														.reverse()
														.map((year: number) => (
															<MenuItem value={year} disabled={yearCheck.start >= year} key={year}>
																{year}
															</MenuItem>
														))}
												</Select>
											</FormControl>
										</div>
									</div>
									<div className={'box'}>
										<span>mileage</span>
										<div className={'inside space-between align-center'}>
											<FormControl sx={{ width: '122px' }}>
												<Select
													value={searchFilter?.search?.mileRange?.start}
													onChange={(e: any) => mileageHandler(e, 'start')}
													inputProps={{ 'aria-label': 'Mileage Start' }}
													MenuProps={MenuProps}
												>
													{carMileage.map((mileage: number) => (
														<MenuItem
															value={mileage}
															disabled={(searchFilter?.search?.mileRange?.end || 0) < mileage}
															key={mileage}
														>
															{mileage}
														</MenuItem>
													))}
												</Select>
											</FormControl>
											<div className={'minus-line'}></div>
											<FormControl sx={{ width: '122px' }}>
												<Select
													value={searchFilter?.search?.mileRange?.end}
													onChange={(e: any) => mileageHandler(e, 'end')}
													inputProps={{ 'aria-label': 'Mileage End' }}
													MenuProps={MenuProps}
												>
													{carMileage.map((mileage: number) => (
														<MenuItem
															value={mileage}
															disabled={(searchFilter?.search?.mileRange?.start || 0) > mileage}
															key={mileage}
														>
															{mileage}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</div>
									</div>
								</div>
							</div>
							<div className={'bottom'}>
								<div onClick={resetFilterHandler}>
									<img src="/img/icons/reset.svg" alt="" />
									<span>Reset All filters</span>
								</div>
								<Button
									startIcon={<img src={'/img/icons/search.svg'} />}
									className={'search-btn'}
									onClick={pushSearchHandler}
								>
									Search
								</Button>
							</div>
						</Box>
					</Box>
				</Modal>
			</Stack>
		);
	}
};

HeaderFilter.defaultProps = {
	initialInput: {
		page: 1,
		limit: 9,
		search: {},
	},
};

export default HeaderFilter;
