// redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeLanguage, changeUnits, changeTimeFormat } from '../../redux/slices/settingsSlice';
// chakra UI
import { Flex } from '@chakra-ui/react';
// locales
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
// types
import { Language, TimeFormat, Units } from '../../types/settings';
// components
import { SettingsOption } from '../../components/SettingsOption';

interface ILanguageSelectItems {
	value: Language;
	label: string;
}

interface IUnitsSelectItems {
	value: Units;
	label: string;
}

interface ITimeFormatSelectItems {
	value: TimeFormat;
	label: string;
}

export const SettingsPage: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const language = useAppSelector(state => state.settings.language);
	const units = useAppSelector(state => state.settings.units);
	const timeFormat = useAppSelector(state => state.settings.timeFormat);

	const languageSelectItems: ILanguageSelectItems[] = [
		{
			value: 'en',
			label: t('settings.value.language.en'),
		},
		{
			value: 'ua',
			label: t('settings.value.language.ua'),
		},
	];

	const unitsSelectItems: IUnitsSelectItems[] = [
		{
			value: { units: 'metric', sign: '°C', speed: 'm/s' },
			label: t('settings.value.units.c'),
		},
		{
			value: { units: 'standard', sign: '°K', speed: 'm/s' },
			label: t('settings.value.units.k'),
		},
		{
			value: { units: 'imperial', sign: '°F', speed: 'mi/h' },
			label: t('settings.value.units.f'),
		},
	];

	const timeFormatSelectItems: ITimeFormatSelectItems[] = [
		{
			value: '12h',
			label: t('settings.value.timeFormat.h12'),
		},
		{
			value: '24h',
			label: t('settings.value.timeFormat.h24'),
		},
	];

	const handleChangeLanguage = (newLanguage: Language): void => {
		dispatch(changeLanguage(newLanguage));
		i18n.changeLanguage(newLanguage);
	};

	return (
		<Flex direction='column' gap='15px'>
			<SettingsOption
				title={t('settings.title.language')}
				select={{
					items: languageSelectItems,
					value: language,
					onChange: handleChangeLanguage,
				}}
			/>
			<SettingsOption
				title={t('settings.title.units')}
				select={{
					items: unitsSelectItems,
					value: units,
					onChange: newUnits => dispatch(changeUnits(newUnits)),
				}}
			/>
			<SettingsOption
				title={t('settings.title.timeFormat')}
				select={{
					items: timeFormatSelectItems,
					value: timeFormat,
					onChange: newTimeFormat => dispatch(changeTimeFormat(newTimeFormat)),
				}}
			/>
		</Flex>
	);
};
