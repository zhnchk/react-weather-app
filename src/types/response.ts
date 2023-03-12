export type searchParams = {
	lat?: string;
	lon?: string;
	units: 'standard' | 'metric' | 'imperial';
};

export type ForecastResponse = {
	name: string;
	nameUA: string;
	lon: number;
	lat: number;
	timezone: string;
	timezone_offset: number;
	current: CurrentResponse;
	hourly: HourlyResponse[];
	daily: DailyResponse[];
	lastFetchedCity: string;
};

type CurrentResponse = {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
};

type HourlyResponse = {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	pop: number;
};

type DailyResponse = {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: {
		day: number;
		min: number;
		max: number;
		night: number;
		eve: number;
		morn: number;
	};
	feels_like: {
		day: number;
		night: number;
		eve: number;
		morn: number;
	};
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	clouds: number;
	pop: number;
	uvi: number;
};
