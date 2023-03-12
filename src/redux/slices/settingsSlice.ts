// redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// types
import { SettingsState, Language, Units, TimeFormat } from '../../types/settings';

const initialState: SettingsState = {
	language: 'en',
	units: { units: 'metric', sign: '°C', speed: 'm/s' },
	timeFormat: '24h',
};

const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeLanguage(state, action: PayloadAction<Language>) {
			state.language = action.payload;
		},
		changeUnits(state, action: PayloadAction<Units>) {
			state.units = action.payload;
		},
		changeTimeFormat(state, action: PayloadAction<TimeFormat>) {
			state.timeFormat = action.payload;
		},
	},
});

export const { changeLanguage, changeUnits, changeTimeFormat } = settingsSlice.actions;

export default settingsSlice.reducer;
