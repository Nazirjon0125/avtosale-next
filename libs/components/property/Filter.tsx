import React, { useState, useCallback, useEffect } from 'react';
import {
	Stack,
	Typography,
	Checkbox,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	IconButton,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useRouter } from 'next/router';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import {
	PropertyLocation,
	PropertyCarType,
	PropertyFuel,
	PropertyCarBody,
	KiaModel,
	BMWModel,
	HyundaiModel,
	AudiModel,
	MercedesModel,
	ToyotaModel,
	TeslaModel,
	ChevroletModel,
	JeepModel,
	HondaModel,
	LandRoverModel,
	LexusModel,
	LincolnModel,
	VolvoModel,
} from '../../enums/property.enum';
import { PropertiesInquiry } from '../../types/property/property.input';

const MenuProps = { PaperProps: { style: { maxHeight: 200 } } };

interface FilterType {
	searchFilter: PropertiesInquiry;
	setSearchFilter: any;
	initialInput: PropertiesInquiry;
}

const Filter = ({ searchFilter, setSearchFilter, initialInput }: FilterType) => {
	const device = useDeviceDetect();
	const router = useRouter();
	const [searchText, setSearchText] = useState<string>('');

	/** REFRESH FILTER **/
	const refreshHandler = async () => {
		setSearchText('');
		await router.push(
			`/property?input=${JSON.stringify(initialInput)}`,
			`/property?input=${JSON.stringify(initialInput)}`,
			{ scroll: false },
		);
	};

	/** UPDATE FILTER HELPER **/
	const updateFilter = useCallback(
		async (key: string, value: any) => {
			const newFilter = {
				...searchFilter,
				search: { ...searchFilter.search, [key]: value },
			};
			setSearchFilter(newFilter);
			await router.push(
				`/property?input=${JSON.stringify(newFilter)}`,
				`/property?input=${JSON.stringify(newFilter)}`,
				{ scroll: false },
			);
		},
		[searchFilter],
	);

	/** TEXT SEARCH HANDLER **/
	const handleSearchEnter = () => {
		updateFilter('text', searchText);
	};

	if (device === 'mobile') return <div>PROPERTIES FILTER</div>;

	return (
		<Stack className="filter-main">
			{/* Search Box */}
			<Stack className="find-your-home" mb="40px">
				<Typography className="title-main">Find Your Car</Typography>
				<Stack className="input-box">
					<input
						type="text"
						value={searchText}
						placeholder="Search for car..."
						onChange={(e) => setSearchText(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && handleSearchEnter()}
					/>
					{searchText && (
						<CancelRoundedIcon
							onClick={() => {
								setSearchText('');
								updateFilter('text', '');
							}}
						/>
					)}
					<IconButton onClick={refreshHandler}>
						<RefreshIcon />
					</IconButton>
				</Stack>
			</Stack>

			{/* Location */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Location</Typography>
				<Stack>
					{Object.values(PropertyLocation).map((loc) => (
						<Stack key={loc} className="input-box">
							<Checkbox
								value={loc}
								checked={(searchFilter.search.locationList || []).includes(loc)}
								onChange={(e) => {
									const checked = e.target.checked;
									const prev = searchFilter.search.locationList || [];
									const updated = checked ? [...prev, loc] : prev.filter((l) => l !== loc);
									updateFilter('locationList', updated);
								}}
							/>
							<label>{loc}</label>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* Car Type */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Car Type</Typography>
				<Stack>
					{Object.values(PropertyCarType).map((type) => (
						<Stack key={type} className="input-box">
							<Checkbox
								value={type}
								checked={(searchFilter.search.typeList || []).includes(type)}
								onChange={(e) => {
									const checked = e.target.checked;
									const prev = searchFilter.search.typeList || [];
									const updated = checked ? [...prev, type] : prev.filter((t) => t !== type);
									updateFilter('typeList', updated);
								}}
							/>
							<label>{type}</label>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* Fuel */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Fuel</Typography>
				<Stack>
					{Object.values(PropertyFuel).map((fuel) => (
						<Stack key={fuel} className="input-box">
							<Checkbox
								value={fuel}
								checked={(searchFilter.search.fuelList || []).includes(fuel)}
								onChange={(e) => {
									const checked = e.target.checked;
									const prev = searchFilter.search.fuelList || [];
									const updated = checked ? [...prev, fuel] : prev.filter((f) => f !== fuel);
									updateFilter('fuelList', updated);
								}}
							/>
							<label>{fuel}</label>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* Car Body */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Car Body</Typography>
				<Stack>
					{Object.values(PropertyCarBody).map((body) => (
						<Stack key={body} className="input-box">
							<Checkbox
								value={body}
								checked={(searchFilter.search.carBodyList || []).includes(body)}
								onChange={(e) => {
									const checked = e.target.checked;
									const prev = searchFilter.search.carBodyList || [];
									const updated = checked ? [...prev, body] : prev.filter((b) => b !== body);
									updateFilter('carBodyList', updated);
								}}
							/>
							<label>{body}</label>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* Price Range */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Price Range</Typography>
				<Stack direction="row" spacing={1}>
					<input
						type="number"
						placeholder="Min"
						value={searchFilter.search.pricesRange?.start || 0}
						onChange={(e) =>
							updateFilter('pricesRange', { ...searchFilter.search.pricesRange, start: +e.target.value })
						}
					/>
					<input
						type="number"
						placeholder="Max"
						value={searchFilter.search.pricesRange?.end || 0}
						onChange={(e) => updateFilter('pricesRange', { ...searchFilter.search.pricesRange, end: +e.target.value })}
					/>
				</Stack>
			</Stack>

			{/* Mile Range */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Mile Range</Typography>
				<Stack direction="row" spacing={1}>
					<input
						type="number"
						placeholder="Min"
						value={searchFilter.search.mileRange?.start || 0}
						onChange={(e) => updateFilter('mileRange', { ...searchFilter.search.mileRange, start: +e.target.value })}
					/>
					<input
						type="number"
						placeholder="Max"
						value={searchFilter.search.mileRange?.end || 0}
						onChange={(e) => updateFilter('mileRange', { ...searchFilter.search.mileRange, end: +e.target.value })}
					/>
				</Stack>
			</Stack>

			{/* Year Range */}
			<Stack className="find-your-home" mb="30px">
				<Typography className="title">Year Range</Typography>
				<Stack direction="row" spacing={1}>
					<input
						type="number"
						placeholder="Min"
						value={searchFilter.search.yearsRange?.start || 2000}
						onChange={(e) => updateFilter('yearsRange', { ...searchFilter.search.yearsRange, start: +e.target.value })}
					/>

					<input
						type="number"
						placeholder="Max"
						value={searchFilter.search.yearsRange?.end || new Date().getFullYear()}
						onChange={(e) => updateFilter('yearsRange', { ...searchFilter.search.yearsRange, end: +e.target.value })}
					/>
				</Stack>
			</Stack>

			{/* Options */}
			<Stack className="find-your-home">
				<Typography className="title">Options</Typography>
				<Stack className="input-box">
					<Checkbox
						value="propertyBarter"
						checked={(searchFilter.search.options || []).includes('propertyBarter')}
						onChange={(e) => {
							const checked = e.target.checked;
							const prev = searchFilter.search.options || [];
							const updated = checked ? [...prev, 'propertyBarter'] : prev.filter((o) => o !== 'propertyBarter');
							updateFilter('options', updated);
						}}
					/>
					<label>Barter</label>
				</Stack>
				<Stack className="input-box">
					<Checkbox
						value="propertyRent"
						checked={(searchFilter.search.options || []).includes('propertyRent')}
						onChange={(e) => {
							const checked = e.target.checked;
							const prev = searchFilter.search.options || [];
							const updated = checked ? [...prev, 'propertyRent'] : prev.filter((o) => o !== 'propertyRent');
							updateFilter('options', updated);
						}}
					/>
					<label>Rent</label>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Filter;
