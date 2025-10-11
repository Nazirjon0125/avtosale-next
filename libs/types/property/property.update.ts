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
	PropertyTransmission,
	TeslaModel,
	ToyotaModel,
	VolvoModel,
} from '../../enums/property.enum';

export interface PropertyUpdate {
	_id: string;
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
	propertyFuel: PropertyFuel;
	propertyCarBody: PropertyCarBody;
	propertyStatus: PropertyStatus;
	propertyLocation: PropertyLocation;
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
}
