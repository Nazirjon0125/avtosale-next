import React, { useCallback, useEffect, useState } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	Button,
	OutlinedInput,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	IconButton,
	ListItemText,
} from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import {
	PropertyLocation,
	PropertyCarType,
	PropertyFuel,
	PropertyCarBody,
	PropertyTransmission,
} from '../../enums/property.enum';
import { PropertiesInquiry } from '../../types/property/property.input';
import { useRouter } from 'next/router';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { carMileage, carYears } from '../../config';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
		},
	},
};

interface FilterType {
	searchFilter: PropertiesInquiry;
	setSearchFilter: any;
	initialInput: PropertiesInquiry;
}

const Filter = (props: FilterType) => {
	const { searchFilter, setSearchFilter, initialInput } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const [propertyLocation, setPropertyLocation] = useState<PropertyLocation[]>(Object.values(PropertyLocation));
	const [propertyCarType, setPropertyCarType] = useState<PropertyCarType[]>(Object.values(PropertyCarType));
	const [propertyFuel, setPropertyFuel] = useState<PropertyFuel[]>(Object.values(PropertyFuel));
	const [propertyCarBody, setPropertyCarBody] = useState<PropertyCarBody[]>(Object.values(PropertyCarBody));
	const [propertyTransmission, setPropertyTransmission] = useState<PropertyTransmission[]>(
		Object.values(PropertyTransmission),
	);
	const [searchText, setSearchText] = useState<string>('');
	const [showMore, setShowMore] = useState<boolean>(false);

	// Filter.tsx faylida yuqoriga qo‘shib qo‘ying
	const thisYear = new Date().getFullYear();

	/** LIFECYCLES **/
	useEffect(() => {
		if (searchFilter?.search?.locationList?.length == 0) {
			delete searchFilter.search.locationList;
			setShowMore(false);
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.typeList?.length == 0) {
			delete searchFilter.search.typeList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.fuelList?.length == 0) {
			delete searchFilter.search.fuelList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.carOptions?.length == 0) {
			delete searchFilter.search.carOptions;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.carBodyList?.length == 0) {
			delete searchFilter.search.carBodyList;
			router
				.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
						},
					})}`,
					{ scroll: false },
				)
				.then();
		}

		if (searchFilter?.search?.locationList) setShowMore(true);
	}, [searchFilter]);

	/** HANDLERS **/
	const propertyLocationSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, locationList: [...(searchFilter?.search?.locationList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.locationList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								locationList: searchFilter?.search?.locationList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyLocationSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyLocationSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyTypeSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, typeList: [...(searchFilter?.search?.typeList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.typeList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								typeList: searchFilter?.search?.typeList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.typeList?.length == 0) {
					alert('error');
				}

				console.log('propertyTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	// const propertyFuelSelectHandler = useCallback(
	// 	async (e: any) => {
	// 		try {
	// 			const isChecked = e.target.checked;
	// 			const value = e.target.value;
	// 			if (isChecked) {
	// 				await router.push(
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: { ...searchFilter.search, fuelList: [...(searchFilter?.search?.fuelList || []), value] },
	// 					})}`,
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: { ...searchFilter.search, fuelList: [...(searchFilter?.search?.fuelList || []), value] },
	// 					})}`,
	// 					{ scroll: false },
	// 				);
	// 			} else if (searchFilter?.search?.fuelList?.includes(value)) {
	// 				await router.push(
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							fuelList: searchFilter?.search?.fuelList?.filter((item: string) => item !== value),
	// 						},
	// 					})}`,
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							fuelList: searchFilter?.search?.fuelList?.filter((item: string) => item !== value),
	// 						},
	// 					})}`,
	// 					{ scroll: false },
	// 				);
	// 			}

	// 			if (searchFilter?.search?.fuelList?.length == 0) {
	// 				alert('error');
	// 			}

	// 			console.log('propertyTypeSelectHandler:', e.target.value);
	// 		} catch (err: any) {
	// 			console.log('ERROR, propertyTypeSelectHandler:', err);
	// 		}
	// 	},
	// 	[searchFilter],
	// );

	const propertyFuelSelectHandler = useCallback(
		async (event: any) => {
			const {
				target: { value },
			} = event;

			// multiple select uchun value har doim array bo'lishi kerak
			const newFuelList = typeof value === 'string' ? value.split(',') : value;

			try {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: { ...searchFilter.search, fuelList: newFuelList },
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: { ...searchFilter.search, fuelList: newFuelList },
					})}`,
					{ scroll: false },
				);
			} catch (err: any) {
				console.log('ERROR, propertyFuelSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyCarBodySelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, carBodyList: [...(searchFilter?.search?.carBodyList || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, carBodyList: [...(searchFilter?.search?.carBodyList || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.carBodyList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								carBodyList: searchFilter?.search?.carBodyList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								carBodyList: searchFilter?.search?.carBodyList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.fuelList?.length == 0) {
					alert('error');
				}

				console.log('propertyTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyTransmissionSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								transmissionList: [...(searchFilter?.search?.transmissionList || []), value],
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								transmissionList: [...(searchFilter?.search?.transmissionList || []), value],
							},
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.transmissionList?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								transmissionList: searchFilter?.search?.transmissionList?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								transmissionList: searchFilter?.search?.transmissionList?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				if (searchFilter?.search?.transmissionList?.length == 0) {
					alert('error');
				}

				console.log('propertyTypeSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyTypeSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	// const propertyTransmitionSelectHandler = useCallback(
	// 	async (e: any) => {
	// 		try {
	// 			const isChecked = e.target.checked;
	// 			const value = e.target.value;
	// 			if (isChecked) {
	// 				await router.push(
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							transmitionList: [...(searchFilter?.search?.transmissionList || []), value],
	// 						},
	// 					})}`,
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							transmitionList: [...(searchFilter?.search?.transmissionList || []), value],
	// 						},
	// 					})}`,
	// 					{ scroll: false },
	// 				);
	// 			} else if (searchFilter?.search?.transmissionList?.includes(value)) {
	// 				await router.push(
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							transmitionList: searchFilter?.search?.transmissionList?.filter((item: string) => item !== value),
	// 						},
	// 					})}`,
	// 					`/property?input=${JSON.stringify({
	// 						...searchFilter,
	// 						search: {
	// 							...searchFilter.search,
	// 							transmitionList: searchFilter?.search?.transmissionList?.filter((item: string) => item !== value),
	// 						},
	// 					})}`,
	// 					{ scroll: false },
	// 				);
	// 			}

	// 			if (searchFilter?.search?.transmissionList?.length == 0) {
	// 				alert('error');
	// 			}

	// 			console.log('propertyTypeSelectHandler:', e.target.value);
	// 		} catch (err: any) {
	// 			console.log('ERROR, propertyTypeSelectHandler:', err);
	// 		}
	// 	},
	// 	[searchFilter],
	// );

	const propertyOptionSelectHandler = useCallback(
		async (e: any) => {
			try {
				const isChecked = e.target.checked;
				const value = e.target.value;
				if (isChecked) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: { ...searchFilter.search, options: [...(searchFilter?.search?.options || []), value] },
						})}`,
						{ scroll: false },
					);
				} else if (searchFilter?.search?.carOptions?.includes(value)) {
					await router.push(
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						`/property?input=${JSON.stringify({
							...searchFilter,
							search: {
								...searchFilter.search,
								options: searchFilter?.search?.options?.filter((item: string) => item !== value),
							},
						})}`,
						{ scroll: false },
					);
				}

				console.log('propertyOptionSelectHandler:', e.target.value);
			} catch (err: any) {
				console.log('ERROR, propertyOptionSelectHandler:', err);
			}
		},
		[searchFilter],
	);

	const propertyPriceHandler = useCallback(
		async (value: number, type: string) => {
			if (type == 'start') {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, start: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			} else {
				await router.push(
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					`/property?input=${JSON.stringify({
						...searchFilter,
						search: {
							...searchFilter.search,
							pricesRange: { ...searchFilter.search.pricesRange, end: value * 1 },
						},
					})}`,
					{ scroll: false },
				);
			}
		},
		[searchFilter],
	);

	const propertyYearHandler = useCallback(
		async (value: number, type: 'start' | 'end') => {
			const updatedFilter = {
				...searchFilter,
				search: {
					...searchFilter.search,
					yearsRange: {
						...searchFilter.search?.yearsRange,
						[type]: value * 1,
					},
				},
			};

			await router.push(
				`/property?input=${JSON.stringify(updatedFilter)}`,
				`/property?input=${JSON.stringify(updatedFilter)}`,
				{ scroll: false },
			);
		},
		[searchFilter, router],
	);

	const refreshHandler = async () => {
		try {
			setSearchText('');
			await router.push(
				`/property?input=${JSON.stringify(initialInput)}`,
				`/property?input=${JSON.stringify(initialInput)}`,
				{ scroll: false },
			);
		} catch (err: any) {
			console.log('ERROR, refreshHandler:', err);
		}
	};

	if (device === 'mobile') {
		return <div>CAR FILTER</div>;
	} else {
		return (
			<>
				<Stack className={'filter-main'}>
					<Stack className={'find-your-home'} mb={'40px'}>
						<Typography className={'title-main'}>Find Your Car</Typography>
						<Stack className={'input-box'}>
							<OutlinedInput
								value={searchText}
								type={'text'}
								className={'search-input'}
								placeholder={'What are you looking for?'}
								onChange={(e: any) => setSearchText(e.target.value)}
								onKeyDown={(event: any) => {
									if (event.key == 'Enter') {
										setSearchFilter({
											...searchFilter,
											search: { ...searchFilter.search, text: searchText },
										});
									}
								}}
								endAdornment={
									<>
										<CancelRoundedIcon
											onClick={() => {
												setSearchText('');
												setSearchFilter({
													...searchFilter,
													search: { ...searchFilter.search, text: '' },
												});
											}}
										/>
									</>
								}
							/>
							<img src={'/img/icons/search_icon.png'} alt={''} />
							<Tooltip title="Reset">
								<IconButton onClick={refreshHandler}>
									<RefreshIcon />
								</IconButton>
							</Tooltip>
						</Stack>
					</Stack>
					<Stack className={'find-your-home'} mb={'30px'}>
						<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
							Location
						</p>
						<Stack
							className={`property-location`}
							style={{ height: showMore ? '253px' : '115px' }}
							onMouseEnter={() => setShowMore(true)}
							onMouseLeave={() => {
								if (!searchFilter?.search?.locationList) {
									setShowMore(false);
								}
							}}
						>
							{propertyLocation.map((location: string) => {
								return (
									<Stack className={'input-box'} key={location}>
										<Checkbox
											id={location}
											className="property-checkbox"
											color="default"
											size="small"
											value={location}
											checked={(searchFilter?.search?.locationList || []).includes(location as PropertyLocation)}
											onChange={propertyLocationSelectHandler}
										/>
										<label htmlFor={location} style={{ cursor: 'pointer' }}>
											<Typography className="property-type">{location}</Typography>
										</label>
									</Stack>
								);
							})}
						</Stack>
					</Stack>
					<Stack className={'find-your-home'} mb={'30px'}>
						<Typography className={'title'}>Car Brand</Typography>

						{propertyCarType.map((type: string) => (
							<Stack className={'input-box'} key={type}>
								<Checkbox
									id={type}
									className="property-checkbox"
									color="default"
									size="small"
									value={type}
									onChange={propertyTypeSelectHandler}
									checked={(searchFilter?.search?.typeList || []).includes(type as PropertyCarType)}
								/>
								<label style={{ cursor: 'pointer' }}>
									<Typography className="property_type">{type}</Typography>
								</label>
							</Stack>
						))}
					</Stack>

					<Stack className={'find-your-home'} mb={'30px'}>
						<Typography className={'title'}>Fuel Type</Typography>

						<Select
							multiple
							fullWidth
							size="small"
							displayEmpty
							value={searchFilter?.search?.fuelList || []}
							onChange={propertyFuelSelectHandler}
							renderValue={(selected) =>
								(selected as string[]).length === 0 ? 'Select fuel type' : (selected as string[]).join(', ')
							}
						>
							{propertyFuel.map((type: PropertyFuel) => (
								<MenuItem key={type} value={type}>
									<Checkbox checked={(searchFilter?.search?.fuelList || []).includes(type as PropertyFuel)} />
									<ListItemText primary={type} />
								</MenuItem>
							))}
						</Select>
					</Stack>

					<Stack className={'find-your-home'} mb={'30px'}>
						<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
							CarBody
						</p>

						{propertyCarBody.map((carBody: string) => {
							return (
								<Stack className={'input-box'} key={carBody}>
									<Checkbox
										id={carBody}
										className="property-checkbox"
										color="default"
										size="small"
										value={carBody}
										checked={(searchFilter?.search?.carBodyList || []).includes(carBody as PropertyCarBody)}
										onChange={propertyCarBodySelectHandler}
									/>
									<label htmlFor={carBody} style={{ cursor: 'pointer' }}>
										<Typography className="property-type">{carBody}</Typography>
									</label>
								</Stack>
							);
						})}
					</Stack>
					{showMore && (
						<>
							<Stack className={'find-your-home'} mb={'30px'}>
								<p className={'title'} style={{ textShadow: '0px 3px 4px #b9b9b9' }}>
									Transmission
								</p>

								{propertyTransmission.map((carBody: string) => {
									return (
										<Stack className={'input-box'} key={carBody}>
											<Checkbox
												id={carBody}
												className="property-checkbox"
												color="default"
												size="small"
												value={carBody}
												checked={(searchFilter?.search?.transmissionList || []).includes(
													carBody as PropertyTransmission,
												)}
												onChange={propertyTransmissionSelectHandler}
											/>
											<label htmlFor={carBody} style={{ cursor: 'pointer' }}>
												<Typography className="property-type">{carBody}</Typography>
											</label>
										</Stack>
									);
								})}
							</Stack>

							<Stack className={'find-your-home'}>
								<Typography className={'title'}>Price Range</Typography>
								<Stack className="square-year-input">
									<input
										type="number"
										placeholder="$ min"
										min={0}
										value={searchFilter?.search?.pricesRange?.start ?? 0}
										onChange={(e: any) => {
											if (e.target.value >= 0) {
												propertyPriceHandler(e.target.value, 'start');
											}
										}}
									/>
									<div className="central-divider"></div>
									<input
										type="number"
										placeholder="$ max"
										value={searchFilter?.search?.pricesRange?.end ?? 0}
										onChange={(e: any) => {
											if (e.target.value >= 0) {
												propertyPriceHandler(e.target.value, 'end');
											}
										}}
									/>
								</Stack>
							</Stack>

							<Stack className={'find-your-home'} mb={'30px'}>
								<Typography className={'title'}>Options</Typography>
								<Stack className={'input-box'}>
									<Checkbox
										id={'Barter'}
										className="property-checkbox"
										color="default"
										size="small"
										value={'propertyBarter'}
										checked={(searchFilter?.search?.options || []).includes('propertyBarter')}
										onChange={propertyOptionSelectHandler}
									/>
									<label htmlFor={'Barter'} style={{ cursor: 'pointer' }}>
										<Typography className="propert-type">Barter</Typography>
									</label>
								</Stack>
								<Stack className={'input-box'}>
									<Checkbox
										id={'Rent'}
										className="property-checkbox"
										color="default"
										size="small"
										value={'propertyRent'}
										checked={(searchFilter?.search?.options || []).includes('propertyRent')}
										onChange={propertyOptionSelectHandler}
									/>
									<label htmlFor={'Rent'} style={{ cursor: 'pointer' }}>
										<Typography className="propert-type">Rent</Typography>
									</label>
								</Stack>
							</Stack>

							<Stack className={'find-your-home'}>
								<Typography className={'title'}>Year Range</Typography>
								<Stack className="square-year-input" direction="row" spacing={2}>
									<Select
										value={searchFilter?.search?.yearsRange?.start ?? 1990}
										onChange={(e) => propertyYearHandler(Number(e.target.value), 'start')}
										displayEmpty
										size="small"
									>
										<MenuItem value={0}>Any</MenuItem>
										{carYears.map((year) => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</Select>

									<Typography>—</Typography>

									<Select
										value={searchFilter?.search?.yearsRange?.end ?? thisYear}
										onChange={(e) => propertyYearHandler(Number(e.target.value), 'end')}
										displayEmpty
										size="small"
									>
										<MenuItem value={0}>Any</MenuItem>
										{carYears.map((year) => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</Select>
								</Stack>
							</Stack>
						</>
					)}
					<Stack>
						<div className="show-more" onClick={() => setShowMore(!showMore)}>
							<span>{showMore ? 'Show Less' : 'Show More'}</span>
							<ExpandMoreIcon style={{ transform: showMore ? 'rotate(180deg)' : 'none' }} />
						</div>
					</Stack>
				</Stack>
			</>
		);
	}
};

export default Filter;
