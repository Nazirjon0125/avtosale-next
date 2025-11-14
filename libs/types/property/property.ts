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
import { Member } from '../member/member';

export interface MeLiked {
	memberId: string;
	likeRefId: string;
	myFavorite: boolean;
}

export interface TotalCounter {
	total: number;
}

export interface Property {
	_id: string;
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
	propertyModel: string;
	propertyFuel: PropertyFuel;
	propertyCarBody: PropertyCarBody;
	propertyStatus: PropertyStatus;
	propertyLocation: PropertyLocation;
	propertyCarOptions: CarOptions;
	propertyTransmission: PropertyTransmission;
	propertyAddress: string;
	propertyTitle: string;
	propertyPrice: number;
	propertyMile: number;
	propertyYear: number;
	propertyViews: number;
	propertyLikes: number;
	propertyComments: number;
	propertyRank: number;
	propertyImages: string[];
	propertyDesc?: string;
	propertyBarter: boolean;
	propertyRent: boolean;
	memberId: string;
	soldAt?: Date;
	deletedAt?: Date;
	constructedAt?: Date;
	createdAt: Date;
	updatedAt: Date;
	/** from aggregation **/
	meLiked?: MeLiked[];
	memberData?: Member;
}

export interface Properties {
	list: Property[];
	metaCounter: TotalCounter[];
}
