// i118n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// locales
import en from './locales/en.json';
import ua from './locales/ua.json';
// types
import { SettingsState } from './types/settings';

const getLanguage = (): string => {
	const storageData = localStorage.getItem('persist:root');

	if (typeof storageData === 'string') {
		const settings = JSON.parse(storageData);
		const languageSettings: SettingsState = JSON.parse(settings.settings);
		return languageSettings.language;
	}
	return 'en';
};

i18n.use(initReactI18next).init({
	lng: getLanguage(),
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: en,
		},
		ua: {
			translation: ua,
		},
	},
});

export default i18n;
