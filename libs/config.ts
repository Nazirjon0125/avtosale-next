export const REACT_APP_API_URL = `${process.env.REACT_APP_API_URL}`;

export const availableOptions = ['propertyBarter', 'propertyRent'];

const thisYear = new Date().getFullYear();

export const propertyYears: any = [];

export const carYears: number[] = [];
for (let i = 1990; i <= thisYear; i++) {
	carYears.push(i);
}

export const Messages = {
	error1: 'Something went wrong!',
	error2: 'Please login first!',
	error3: 'Please fulfill all inputs!',
	error4: 'Message is empty!',
	error5: 'Only images with jpeg, jpg, png format allowed!',
};

export const topPropertyRank = 2;

export const carMileage = [
	0, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 100000, 120000, 150000, 180000, 200000, 250000,
	300000,
];

export const carPrice: number[] = [];

for (let i = 0; i <= 1000000; i += 1000) {
	carPrice.push(i);
}
