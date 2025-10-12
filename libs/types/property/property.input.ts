import {
	AudiModel,
	BMWModel,
	CarOptions,
	ChevroletModel,
	HondaModel,
	HyundaiModel,
	JeepModel,
	KiaModel,
	LandRoverModel,
	LexusModel,
	LincolnModel,
	MercedesModel,
	PropertyCarBody,
	PropertyCarType,
	PropertyFuel,
	PropertyLocation,
	PropertyStatus,
	PropertyTransmission,
	TeslaModel,
	ToyotaModel,
	VolvoModel,
} from '../../enums/property.enum';
import { Direction } from '../../enums/common.enum';

export interface PropertyInput {
	propertyCarType: PropertyCarType;
	propertyModel: string;
	kiaModel?: KiaModel;
	bmwModel?: BMWModel;
	hyundaiModel?: HyundaiModel;
	audiModel?: AudiModel;
	mercedesModel?: MercedesModel;
	toyotaModel?: ToyotaModel;
	teslaModel?: TeslaModel;
	chevroletModel?: ChevroletModel;
	jeepModel?: JeepModel;
	hondaModel?: HondaModel;
	landRoverModel?: LandRoverModel;
	lexusModel?: LexusModel;
	lincolnModel?: LincolnModel;
	volvoModel?: VolvoModel;
	propertyLocation: PropertyLocation;
	propertyFuel: PropertyFuel;
	propertyCarBody: PropertyCarBody;
	propertyBrand: string;
	propertyTransmission: PropertyTransmission;
	propertyAddress: string;
	propertyTitle: string;
	propertyPrice: number;
	propertyMile: number;
	propertyYear: number;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	memberId?: string;
	constructedAt?: number;
}

interface PISearch {
	memberId?: string;
	locationList?: PropertyLocation[];
	typeList?: PropertyCarType[];
	fuelList?: PropertyFuel[];
	options?: string[];
	carOptions?: CarOptions[];
	carBodyList?: PropertyCarBody[];
	pricesRange?: PriceRange;
	yearsRange?: YearsRange;
	transmissionList?: PropertyTransmission[];
	mileRange?: MileRange;
	text?: string;
	modelList?: string[];
}

export interface PropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: PISearch;
}

interface APISearch {
	propertyStatus?: PropertyStatus;
}

export interface AgentPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: APISearch;
}

interface ALPISearch {
	propertyStatus?: PropertyStatus;
	propertyLocationList?: PropertyLocation[];
}

export interface AllPropertiesInquiry {
	page: number;
	limit: number;
	sort?: string;
	direction?: Direction;
	search: ALPISearch;
}

export interface PriceRange {
	start?: number;
	end?: number;
}

interface YearsRange {
	start: number;
	end: number;
}

interface MileRange {
	start: number;
	end: number;
}
