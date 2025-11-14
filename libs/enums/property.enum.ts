export enum PropertyCarType {
	KIA = 'KIA',
	HYUNDAI = 'HYUNDAI',
	AUDI = 'AUDI',
	BMW = 'BMW',
	MERCEDES = 'MERCEDES',
	TOYOTA = 'TOYOTA',
	TESLA = 'TESLA',
	CHEVROLET = 'CHEVROLET',
	JEEP = 'JEEP',
	HONDA = 'HONDA',
	LAND_ROVER = 'LAND_ROVER',
	LEXUS = 'LEXUS',
	LINCOLN = 'LINCOLN',
	VOLVO = 'VOLVO',
}

export enum KiaModel {
	// 🔹 SEDAN / HATCHBACK
	Picanto = 'Picanto',
	Rio = 'Rio',
	Pegas = 'Pegas',
	Forte = 'Forte',
	K4 = 'K4',
	K5 = 'K5',
	K8 = 'K8',
	K9 = 'K9',
	// 🔹 SEDAN / HATCHBACK
	Opirus = 'Opirus',
	Pride = 'Pride',
	Stinger = 'Stinger',
	// 🔹 SUV / CROSSOVER (faol)
	Sonet = 'Sonet',
	Seltos = 'Seltos',
	Soul = 'Soul',
	Niro = 'Niro',
	Sportage = 'Sportage',
	Sorento = 'Sorento',
	Telluride = 'Telluride',
	Mohave = 'Mohave',
	Ray = 'Ray',
	EV3 = 'EV3',
	EV4 = 'EV4',
	EV5 = 'EV5',
	EV6 = 'EV6',
	EV9 = 'EV9',
	// 🔹 SUV / CROSSOVER (eski)
	Retona = 'Retona',
	Rocsta = 'Rocsta',
	Visto = 'Visto',
	Borrego = 'Borrego',
	Joice = 'Joice',

	// 🔹 MPV / MINIVAN (faol)
	Carnival = 'Carnival', // (Sedona)
	Carens = 'Carens',
	// 🔹 PICKUP / YUK MASHINALARI
	Tasman = 'Tasman', // (2025-yilda chiqadi)
	K2700 = 'K2700',
	K3000S = 'K3000S',
	K4000G = 'K4000G',
	Bongo3 = 'Bongo III',
	Frontier = 'Frontier',
}

export enum BMWModel {
	// SEDAN / HATCHBACK / COUPE / GRAN COUPE
	SERIES_1 = '1_SERIES',
	SERIES_2 = '2_SERIES',
	SERIES_3 = '3_SERIES',
	SERIES_4 = '4_SERIES',
	SERIES_5 = '5_SERIES',
	SERIES_6 = '6_SERIES',
	SERIES_7 = '7_SERIES',
	SERIES_8 = '8_SERIES',
	Z4 = 'Z4',
	// SUV / SAV / CROSSOVER
	X1 = 'X1',
	X2 = 'X2',
	X3 = 'X3',
	X4 = 'X4',
	X5 = 'X5',
	X6 = 'X6',
	X7 = 'X7',
	XM = 'XM',
	// ELECTRIC / i-SERIES
	I3 = 'I3',
	I4 = 'I4',
	I5 = 'I5',
	I7 = 'I7',
	IX = 'IX',
	IX1 = 'IX1',
	IX2 = 'IX2',
	IX3 = 'IX3',
	IX4 = 'IX4',
	// M PERFORMANCE / M MODELS
	M2 = 'M2',
	M3 = 'M3',
	M4 = 'M4',
	M5 = 'M5',
	M6 = 'M6',
	M8 = 'M8',
	// Specific “M-badged” versions you mentioned
	M235 = 'M235',
	M240i = 'M240i',
	M340i = 'M340i',
	M440i = 'M440i',
	// Additional performance variants
	X3M = 'X3M',
	X4M = 'X4M',
	X5M = 'X5M',
	X6M = 'X6M',
}

export enum HyundaiModel {
	// SEDAN
	ACCENT = 'ACCENT',
	VERNA = 'VERNA', // Accent uchun ayrim bozorlarda
	ELANTRA = 'ELANTRA',
	SONATA = 'SONATA',
	AZERA = 'AZERA',
	GRANDEUR = 'GRANDEUR',

	// HATCHBACK / COMPACT
	I10 = 'I10',
	I20 = 'I20',
	I30 = 'I30',
	I40 = 'I40',

	// SUV / CROSSOVER
	VENUE = 'VENUE',
	CRETA = 'CRETA',
	CRETA_KING = 'CRETA_KING',
	CRETA_KING_LIMITED = 'CRETA_KING_LIMITED',
	CRETA_KING_KNIGHT = 'CRETA_KING_KNIGHT',
	TUCSON = 'TUCSON',
	SANTA_FE = 'SANTA_FE',
	SANTA_CRUZ = 'SANTA_CRUZ',
	PALISADE = 'PALISADE',

	// MPV / VAN
	STARIA = 'STARIA',
	STARGAZER = 'STARGAZER',
	H1 = 'H1',
	H100 = 'H100',

	// ELECTRIC / HYBRID
	IONIQ = 'IONIQ',
	IONIQ_5 = 'IONIQ_5',
	IONIQ_6 = 'IONIQ_6',
	IONIQ_7 = 'IONIQ_7',
	KONA = 'KONA',
	KONA_ELECTRIC = 'KONA_ELECTRIC',

	// PERFORMANCE / N-LINE
	ELANTRA_N = 'ELANTRA_N',
	I30_N = 'I30_N',
	KONA_N = 'KONA_N',
	SONATA_N_LINE = 'SONATA_N_LINE',
	TUCSON_N_LINE = 'TUCSON_N_LINE',

	// TRUCK / COMMERCIAL
	MIGHTY = 'MIGHTY',
	PAVISE = 'PAVISE',
	XCENT = 'XCENT',
}

export enum AudiModel {
	// SEDAN / HATCHBACK / LUXURY
	A1 = 'A1',
	A3 = 'A3',
	A4 = 'A4',
	A5 = 'A5',
	A6 = 'A6',
	A7 = 'A7',
	A8 = 'A8',
	TT = 'TT',
	R8 = 'R8',

	// SUV / CROSSOVER / Q-SERIES
	Q2 = 'Q2',
	Q3 = 'Q3',
	Q3_SPORTBACK = 'Q3_SPORTBACK',
	Q4_E_TRON = 'Q4_E_TRON',
	Q5 = 'Q5',
	Q5_SPORTBACK = 'Q5_SPORTBACK',
	Q5_TFSI_E = 'Q5_TFSI_E',
	Q6_E_TRON = 'Q6_E_TRON',
	Q7 = 'Q7',
	Q8 = 'Q8',
	Q8_SPORTBACK = 'Q8_SPORTBACK',
	Q8_TFSI_E = 'Q8_TFSI_E',

	// ELECTRIC / E-TRON SERIES
	A6_E_TRON = 'A6_E_TRON',
	A7_E_TRON = 'A7_E_TRON',
	A8_E_TRON = 'A8_E_TRON',
	E_TRON_GT = 'E_TRON_GT',

	// PERFORMANCE / RS MODELS
	RS3 = 'RS3',
	RS4 = 'RS4',
	RS5 = 'RS5',
	RS6 = 'RS6',
	RS7 = 'RS7',
	RS_Q3 = 'RS_Q3',
	RS_Q5 = 'RS_Q5',
	RS_Q8 = 'RS_Q8',
	RS_MODELS = 'RS_MODELS',
}

export enum MercedesModel {
	// 🔹 SEDAN / HATCHBACK
	A_CLASS = 'A_CLASS',
	B_CLASS = 'B_CLASS',
	C_CLASS = 'C_CLASS',
	E_CLASS = 'E_CLASS',
	S_CLASS = 'S_CLASS',
	CLA = 'CLA',
	CLS = 'CLS',
	EQE_SALON = 'EQE_SALON',

	// 🔹 SUV / CROSSOVER
	GLA = 'GLA',
	GLB = 'GLB',
	GLC = 'GLC',
	GLE = 'GLE',
	GLS = 'GLS',
	EQS_SUV = 'EQS_SUV',

	// 🔹 ELECTRIC / EQ SERIES
	EQB = 'EQB',
	EQC = 'EQC',
	EQE = 'EQE',
	EQS = 'EQS',

	// 🔹 AMG PERFORMANCE MODELS
	AMG = 'AMG',
	A45_AMG = 'A45_AMG',
	C63_AMG = 'C63_AMG',
	E63_AMG = 'E63_AMG',
	GLE63_AMG = 'GLE63_AMG',
	GLS63_AMG = 'GLS63_AMG',
	GT_AMG = 'GT_AMG',
	AMG_ONE = 'AMG_ONE',

	// 🔹 G-CLASS
	G_CLASS = 'G_CLASS',
}

export enum ToyotaModel {
	// 🔹 SEDAN / HATCHBACK
	YARIS = 'YARIS',
	COROLLA = 'COROLLA',
	COROLLA_HATCHBACK = 'COROLLA_HATCHBACK',
	COROLLA_HYBRID = 'COROLLA_HYBRID',
	CAMRY = 'CAMRY',
	CAMRY_HYBRID = 'CAMRY_HYBRID',
	AVALON = 'AVALON',
	PRIUS = 'PRIUS',
	PRIUS_HYBRID = 'PRIUS_HYBRID',
	MIRAI = 'MIRAI',
	MIRAI_HYBRID = 'MIRAI_HYBRID',

	// 🔹 SUV / CROSSOVER
	RAV4 = 'RAV4',
	RAV4_HYBRID = 'RAV4_HYBRID',
	HIGHLANDER = 'HIGHLANDER',
	HIGHLANDER_HYBRID = 'HIGHLANDER_HYBRID',
	RUNNER4 = 'RUNNER4', // RUNNER
	LAND_CRUISER = 'LAND_CRUISER',
	SEQUOIA = 'SEQUOIA',

	// 🔹 PICKUP / TRUCK
	TUNDRA = 'TUNDRA',
	TACOMA = 'TACOMA',

	// 🔹 MPV / MINIVAN
	SIENNA = 'SIENNA',
	SIENNA_HYBRID = 'SIENNA_HYBRID', // 2021+ hybrid variant

	// 🔹 ELECTRIC / HYBRID
	BZ4X = 'BZ4X', // Toyota’ning yangi EV crossoveri
	CROWN_EV = 'CROWN_EV', // ayrim bozorlarda chiqmoqda
}

export enum TeslaModel {
	// 🔹 SEDAN
	MODEL_S = 'MODEL_S',
	MODEL_3 = 'MODEL_3',

	// 🔹 SUV / CROSSOVER
	MODEL_X = 'MODEL_X',
	MODEL_Y = 'MODEL_Y',

	// 🔹 SPORTS / ROADSTER
	ROADSTER = 'ROADSTER',

	// 🔹 TRUCK / COMMERCIAL
	CYBERTRUCK = 'CYBERTRUCK',
	SEMI = 'SEMI',

	// 🔹 FUTURE / CONCEPT
	ROADSTER_2ND_GEN = 'ROADSTER_2ND_GEN',
	CYBERQUAD = 'CYBERQUAD',
}

export enum ChevroletModel {
	// 🔹 COMPACT / SEDAN
	SPARK = 'SPARK',
	SONIC = 'SONIC',
	MALIBU = 'MALIBU',
	CAMARO = 'CAMARO',
	CORVETTE = 'CORVETTE',

	// 🔹 SUV / CROSSOVER
	TRAILBLAZER = 'TRAILBLAZER',
	EQUINOX = 'EQUINOX',
	BLAZER = 'BLAZER',
	TRAVERSE = 'TRAVERSE',
	TAHOE = 'TAHOE',
	SUBURBAN = 'SUBURBAN',

	// 🔹 PICKUP / TRUCK
	COLORADO = 'COLORADO',
	SILVERADO_1500 = 'SILVERADO_1500',
	SILVERADO_2500HD = 'SILVERADO_2500HD',
	SILVERADO_3500HD = 'SILVERADO_3500HD',

	// 🔹 ELECTRIC / EV
	BOLT_EV = 'BOLT_EV',
	BOLT_EUV = 'BOLT_EUV',
}

export enum JeepModel {
	// 🔹 COMPACT / SUBCOMPACT SUV
	RENEGADE = 'RENEGADE',
	COMPASS = 'COMPASS',

	// 🔹 MID-SIZE SUV
	CHEROKEE = 'CHEROKEE',
	GRAND_CHEROKEE = 'GRAND_CHEROKEE',
	GRAND_CHEROKEE_L = 'GRAND_CHEROKEE_L',
	GRAND_CHEROKEE_4XE = 'GRAND_CHEROKEE_4XE', // plug-in hybrid

	// 🔹 FULL-SIZE SUV / LUXURY
	WAGONEER = 'WAGONEER',
	GRAND_WAGONEER = 'GRAND_WAGONEER',

	// 🔹 OFF-ROAD / WRANGLER
	WRANGLER = 'WRANGLER',
	WRANGLER_4XE = 'WRANGLER_4XE', // plug-in hybrid

	// 🔹 PICKUP / TRUCK
	GLADIATOR = 'GLADIATOR',
}

export enum HondaModel {
	// 🔹 SEDAN / HATCHBACK
	CIVIC = 'CIVIC',
	CIVIC_HYBRID = 'CIVIC_HYBRID',
	ACCORD = 'ACCORD',
	ACCORD_HYBRID = 'ACCORD_HYBRID',
	INSIGHT = 'INSIGHT',
	INSIGHT_HYBRID = 'INSIGHT_HYBRID',

	// 🔹 SUV / CROSSOVER
	HR_V = 'HR_V',
	CR_V = 'CR_V',
	CR_V_HYBRID = 'CR_V_HYBRID',
	PILOT = 'PILOT',
	PASSPORT = 'PASSPORT',

	// 🔹 PICKUP / TRUCK
	RIDGELINE = 'RIDGELINE',
	RIDGELINE_PHEV = 'RIDGELINE_PHEV',

	// 🔹 MPV / MINIVAN
	ODYSSEY = 'ODYSSEY',

	// 🔹 FUTURE / EV
	PROLOGUE = 'PROLOGUE', // kelajak EV pickup/SUV
}

export enum LandRoverModel {
	// 🔹 OFF-ROAD / SUV
	DEFENDER = 'DEFENDER',
	DISCOVERY = 'DISCOVERY',
	DISCOVERY_SPORT = 'DISCOVERY_SPORT',

	// 🔹 RANGE ROVER / LUXURY SUV
	RANGE_ROVER = 'RANGE_ROVER',
	RANGE_ROVER_SPORT = 'RANGE_ROVER_SPORT',
	RANGE_ROVER_VELAR = 'RANGE_ROVER_VELAR',
	RANGE_ROVER_EVOQUE = 'RANGE_ROVER_EVOQUE',

	// 🔹 HYBRID / PHEV
	RANGE_ROVER_SPORT_HYBRID = 'RANGE_ROVER_SPORT_HYBRID',
	RANGE_ROVER_VELAR_HYBRID = 'RANGE_ROVER_VELAR_HYBRID',
	RANGE_ROVER_EVOQUE_HYBRID = 'RANGE_ROVER_EVOQUE_HYBRID',

	// 🔹 FUTURE / ELECTRIC (rejalashtirilgan)
	RANGE_ROVER_EV = 'RANGE_ROVER_EV',
	DEFENDER_EV = 'DEFENDER_EV',
}

export enum LexusModel {
	// 🔹 COMPACT / CROSSOVER / SUV
	UX = 'UX',
	NX = 'NX',
	RX = 'RX',
	GX = 'GX',
	LX = 'LX',

	// 🔹 HYBRID VARIANTS
	UX_HYBRID = 'UX_HYBRID',
	NX_HYBRID = 'NX_HYBRID',
	RX_HYBRID = 'RX_HYBRID',
	LX_HYBRID = 'LX_HYBRID',
	ES_HYBRID = 'ES_HYBRID',

	// 🔹 SEDAN / LUXURY
	ES = 'ES',
	GS = 'GS',
	IS = 'IS',
	LS = 'LS',

	// 🔹 COUPE / SPORTS
	LC = 'LC',
	RC = 'RC',
}

export enum LincolnModel {
	// 🔹 COMPACT / MID-SIZE SUV
	CORSAIR = 'CORSAIR',
	NAUTILUS = 'NAUTILUS',
	AVIATOR = 'AVIATOR',

	// 🔹 FULL-SIZE SUV / LUXURY
	NAVIGATOR = 'NAVIGATOR',

	// 🔹 FUTURE / ELECTRIC
	ZEPHYR = 'ZEPHYR', // kelajakda chiqariladigan EV modeli
}

export enum VolvoModel {
	// 🔹 COMPACT / MID-SIZE SUV
	XC40 = 'XC40',
	XC60 = 'XC60',
	XC90 = 'XC90',

	// 🔹 SEDAN / LUXURY
	S60 = 'S60',
	S90 = 'S90',

	// 🔹 WAGON / ESTATE
	V60 = 'V60',
	V90 = 'V90',

	// 🔹 ELECTRIC / EV
	C40 = 'C40', // to‘liq elektr crossover
	XC40_RECHARGE = 'XC40_RECHARGE', // to‘liq elektr versiyasi
}

export enum PropertyFuel {
	LPG = 'LPG',
	PETROL = 'PETROL',
	DIESEL = 'DIESEL',
	ELECTRIC = 'ELECTRIC',
	HYBRID = 'HYBRID',
}

export enum PropertyTransmission {
	AUTOMATIC = 'AUTOMATIC',
	MANUAL = 'MANUAL',
}

export enum PropertyCarBody {
	SEDAN = 'SEDAN',
	HATCHBACK = 'HATCHBACK',
	SUV = 'SUV',
	COUPE = 'COUPE',
	WAGON = 'WAGON',
	VAN = 'VAN',
	PICKUP_TRUCK = 'PICKUP_TRUCK',
	MINIVAN = 'MINIVAN',
	LIMOUSINE = 'LIMOUSINE',
	OTHER = 'OTHER',
}

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}

export enum PropertyLocation {
	// 🔹 Metropolitan Cities / Major Cities
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GWANGJU = 'GWANGJU',
	DAEJON = 'DAEJON',
	ULSAN = 'ULSAN',
	SEJONG = 'SEJONG',
	JEJU = 'JEJU',
}

export enum CarOptions {
	// 🔹 SEATING OPTIONS
	HEATED_SEATS = 'HEATED_SEATS', // isitiladigan o‘rindiqlar
	VENTILATED_SEATS = 'VENTILATED_SEATS', // ventilyatsiyalangan o‘rindiqlar
	POWER_SEATS = 'POWER_SEATS', // elektr o‘rindiqlar
	LEATHER_SEATS = 'LEATHER_SEATS', // charm o‘rindiqlar

	// 🔹 STEERING & CONTROLS
	HEATED_STEERING = 'HEATED_STEERING', // isitiladigan rul
	CRUISE_CONTROL = 'CRUISE_CONTROL', // tezlikni ushlab turish
	LANE_KEEP_ASSIST = 'LANE_KEEP_ASSIST', // yo‘lni saqlash assistenti
	BLIND_SPOT_WARNING = 'BLIND_SPOT_WARNING', // o‘ng va chap ko‘zdan ogohlantirish
	AUTO_BRAKING = 'AUTO_BRAKING', // avtomatik tormoz

	// 🔹 KEY & ENTRY
	SMART_KEY = 'SMART_KEY', // smart kalit
	TWO_KEYS = 'TWO_KEYS', // ikki kalit mavjud

	// 🔹 INFOTAINMENT / NAVIGATION
	NAVIGATION = 'NAVIGATION', // navigatsiya tizimi
	REAR_CAMERA = 'REAR_CAMERA', // orqa kamera
	CAMERA_360 = 'CAMERA_360', // 360° kamera tizimi
	PARKING_SENSOR_REAR = 'PARKING_SENSOR_REAR', // orqa park sensori
	PARKING_SENSOR_FRONT = 'PARKING_SENSOR_FRONT', // old park sensori
	BLACK_BOX = 'BLACK_BOX', // video yozuvchi / dashcam

	// 🔹 COMFORT & LUXURY
	SUNROOF = 'SUNROOF', // quyosh oynasi
	NON_SMOKER = 'NON_SMOKER', // tamaki chekilmagan mashina
}

// enums mapping
export const BrandModelsMap = {
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
