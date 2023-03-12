// redux
import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from '@reduxjs/toolkit';
// types
import {
	TimeAndLocation,
	currentForecast,
	hourlyAndDailyForecast,
	ForecastState,
} from '../../types/forecast';
import { ForecastResponse, searchParams } from '../../types/response';

const API_KEY: string = '91351c9ad1ef1c80704fdf84f40396f5';
const BASE_URL: string = 'https://api.openweathermap.org/data/3.0/onecall?';

export const fetchForecastWithLocation = createAsyncThunk<
	ForecastResponse,
	searchParams,
	{ rejectValue: string }
>('forecast/fetchForecastWithLocation', async function (searchParams, { rejectWithValue }) {
	const { name, nameUA } = await fetch(
		`http://api.openweathermap.org/geo/1.0/reverse?lat=${searchParams.lat}&lon=${searchParams.lon}&appid=${API_KEY}`
	)
		.then(response => response.json())
		.then(response => {
			return {
				name: response[0].name,
				nameUA: response[0].local_names.uk,
			};
		});

	const url = new URL(BASE_URL);
	url.search = new URLSearchParams({
		...searchParams,
		appid: API_KEY,
		exclude: 'minutely',
	}).toString();

	const response = await fetch(url);
	const data = await response.json();
	const lastFetchedCity = name;

	if (!response.ok) {
		return rejectWithValue('Server Error!');
	}

	return { ...data, name, nameUA, lastFetchedCity };
});

export const fetchForecast = createAsyncThunk<
	ForecastResponse,
	[string, searchParams],
	{ rejectValue: string }
>('forecast/fetchForecast', async function ([city, searchParams], { rejectWithValue }) {
	const { lat, lon, name, nameUA } = await fetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
	)
		.then(response => response.json())
		.then(response => {
			return {
				lat: response[0].lat,
				lon: response[0].lon,
				name: response[0].name,
				nameUA: response[0].local_names.uk,
			};
		});

	const url = new URL(BASE_URL);
	url.search = new URLSearchParams({
		lat,
		lon,
		...searchParams,
		appid: API_KEY,
		exclude: 'minutely',
	}).toString();

	const response = await fetch(url);
	const data = await response.json();
	const lastFetchedCity = city;

	if (!response.ok) {
		return rejectWithValue('Server Error!');
	}

	return { ...data, name, nameUA, lastFetchedCity };
});

const initialState: ForecastState = {
	timeAndLocation: {
		timezone: '',
		name: '',
		nameUA: '',
	},
	currentForecast: {
		name: '',
		image: '',
		temp: 0,
		feels_like: 0,
		humidity: 0,
		wind: 0,
		sunrise: 0,
		sunset: 0,
		temp_max: 0,
		temp_min: 0,
	},
	hourlyForecast: [{ time: 0, temp: 0, image: '' }],
	dailyForecast: [{ time: 0, temp: 0, image: '' }],
	lastFetchedCity: 'Kyiv',
	loading: false,
	error: null,
};

const forecastSlice = createSlice({
	name: 'forecast',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addMatcher(isPending, state => {
				state.loading = true;
				state.error = null;
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.loading = false;
			})
			.addMatcher(isFulfilled, (state, action: PayloadAction<ForecastResponse>) => {
				const formattedTimeAndLocation: TimeAndLocation = {
					name: action.payload.name,
					nameUA: action.payload.nameUA,
					timezone: action.payload.timezone,
				};

				const formattedCurrentForecast: currentForecast = {
					name: action.payload.current.weather[0].main,
					image: action.payload.current.weather[0].icon,
					temp: action.payload.current.temp,
					feels_like: action.payload.current.feels_like,
					humidity: action.payload.current.humidity,
					wind: action.payload.current.wind_speed,
					sunrise: action.payload.current.sunrise,
					sunset: action.payload.current.sunset,
					temp_max: action.payload.daily[0].temp.max,
					temp_min: action.payload.daily[0].temp.min,
				};

				const formattedHourlyForecast: hourlyAndDailyForecast[] = action.payload.hourly
					.slice(1, 6)
					.map(hour => {
						return {
							time: hour.dt,
							temp: hour.temp,
							image: hour.weather[0].icon,
						};
					});

				const formattedDailyForecast: hourlyAndDailyForecast[] = action.payload.daily
					.slice(1, 6)
					.map(day => {
						return {
							time: day.dt,
							temp: day.temp.day,
							image: day.weather[0].icon,
						};
					});

				state.timeAndLocation = formattedTimeAndLocation;
				state.currentForecast = formattedCurrentForecast;
				state.hourlyForecast = formattedHourlyForecast;
				state.dailyForecast = formattedDailyForecast;
				state.lastFetchedCity = action.payload.lastFetchedCity;
				state.loading = false;
				state.error = null;
			});
	},
});

function isPending(action: AnyAction) {
	return action.type.endsWith('pending');
}
function isFulfilled(action: AnyAction) {
	return action.type.endsWith('fulfilled');
}
function isError(action: AnyAction) {
	return action.type.endsWith('rejected');
}

export default forecastSlice.reducer;
