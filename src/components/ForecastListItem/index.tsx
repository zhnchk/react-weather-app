// chakra UI
import { Flex, Text, Image } from '@chakra-ui/react';
// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// luxon
import { DateTime } from 'luxon';
// locales
import { useTranslation } from 'react-i18next';
//types
import { hourlyAndDailyForecast } from '../../types/forecast';
import { ForecastType } from '../Forecast';

interface IForecastListItemProps {
	forecast: hourlyAndDailyForecast;
	type: ForecastType;
}

export const ForecastListItem: React.FC<IForecastListItemProps> = ({ forecast, type }) => {
	const { t } = useTranslation();
	const unitsSign = useAppSelector(state => state.settings.units.sign);
	const timezone = useAppSelector(state => state.forecast.timeAndLocation.timezone);
	const timeFormat = useAppSelector(state => state.settings.timeFormat);

	const getFormattedTime = (format: string) => {
		switch (DateTime.fromSeconds(forecast.time).setZone(timezone).toFormat(format)) {
			case 'Mon':
				return t('weekDaysShort.Mon');
			case 'Tue':
				return t('weekDaysShort.Tue');
			case 'Wed':
				return t('weekDaysShort.Wed');
			case 'Thu':
				return t('weekDaysShort.Thu');
			case 'Fri':
				return t('weekDaysShort.Fri');
			case 'Sat':
				return t('weekDaysShort.Sat');
			case 'Sun':
				return t('weekDaysShort.Sun');
		}
		return DateTime.fromSeconds(forecast.time).setZone(timezone).toFormat(format);
	};

	return (
		<Flex
			direction='column'
			align='center'
			justify='center'
			fontSize={timeFormat === '24h' ? 'md' : 'sm'}>
			<Text fontWeight='light'>
				{type === 'hourly'
					? timeFormat === '24h'
						? getFormattedTime('HH:mm')
						: getFormattedTime('hh:mm a')
					: getFormattedTime('ccc')}
			</Text>
			<Image
				src={`http://openweathermap.org/img/wn/${forecast.image}@2x.png`}
				alt='forecast picture'
				w='80px'
			/>
			<Text>{Math.round(forecast.temp) + unitsSign}</Text>
		</Flex>
	);
};
