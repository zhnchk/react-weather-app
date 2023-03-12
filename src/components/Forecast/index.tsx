// chakra UI
import { Text, useColorMode } from '@chakra-ui/react';
//types
import { hourlyAndDailyForecast } from '../../types/forecast';
// locales
import { useTranslation } from 'react-i18next';
// components
import { ForecastList } from '../ForecastList';

export type ForecastType = 'hourly' | 'daily';

interface IForecastProps {
	type: ForecastType;
	data: hourlyAndDailyForecast[];
}

export const Forecast: React.FC<IForecastProps> = ({ type, data }) => {
	const { colorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<>
			<Text
				textTransform='uppercase'
				fontSize='xl'
				borderBottom={colorMode === 'light' ? '1px solid black' : '1px solid white'}
				pb={1}>
				{type === 'daily' ? t('forecastType.daily') : t('forecastType.hourly')}
			</Text>
			<ForecastList data={data} type={type} />
		</>
	);
};
