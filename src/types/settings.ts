export type Language = 'ua' | 'en';
export type TimeFormat = '12h' | '24h';
export type Units =
	| { units: 'standard'; sign: '°K'; speed: 'm/s' }
	| { units: 'metric'; sign: '°C'; speed: 'm/s' }
	| { units: 'imperial'; sign: '°F'; speed: 'mi/h' };

export type SettingsState = {
	language: Language;
	units: Units;
	timeFormat: TimeFormat;
};
