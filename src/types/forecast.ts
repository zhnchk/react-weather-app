export type TimeAndLocation = {
	name: string;
	nameUA: string;
	timezone: string;
};

export type currentForecast = {
	name: string;
	image: string;
	temp: number;
	feels_like: number;
	humidity: number;
	wind: number;
	sunrise: number;
	sunset: number;
	temp_max: number;
	temp_min: number;
};

export type hourlyAndDailyForecast = {
	time: number;
	temp: number;
	image: string;
};

export type ForecastState = {
	timeAndLocation: TimeAndLocation;
	currentForecast: currentForecast;
	hourlyForecast: hourlyAndDailyForecast[];
	dailyForecast: hourlyAndDailyForecast[];
	lastFetchedCity: string;
	loading: boolean;
	error: string | null;
};
