import {
	AudiModel,
	BMWModel,
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
	TeslaModel,
	ToyotaModel,
	VolvoModel,
} from '../../enums/property.enum';
import { Direction } from '../../enums/common.enum';

export interface PropertyInput {
	propertyCarType: PropertyCarType;
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
	propertyFuel: String;
	propertyCarBody: String;

	propertyAddress: string;
	propertyTitle: string;
	propertyPrice: number;
	propertyMile: number;
	propertyYear: Date;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter?: boolean;
	propertyRent?: boolean;
	memberId?: string;
	constructedAt?: Date;
}

interface PISearch {
	memberId?: string;
	locationList?: PropertyLocation[];
	typeList?: PropertyCarType[];
	fuelList?: PropertyFuel[];
	options?: string[];
	carBodyList?: PropertyCarBody[];
	pricesRange?: PriceRange;
	periodsRange?: PeriodsRange;
	yearsRange?: YearsRange;
	mileRange?: MileRange;
	text?: string;
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

interface PriceRange {
	start: number;
	end: number;
}

interface PeriodsRange {
	start: Date | number;
	end: Date | number;
}

interface YearsRange {
	start: Date | number;
	end: Date | number;
}

interface MileRange {
	start: number;
	end: number;
}
