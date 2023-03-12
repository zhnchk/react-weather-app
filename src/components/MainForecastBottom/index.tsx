// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// chakra UI
import { Flex, Text } from '@chakra-ui/react';
// images
import { BiSun } from 'react-icons/bi';
import { FiSunset } from 'react-icons/fi';
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';
// luxon
import { DateTime } from 'luxon';
// locales
import { useTranslation } from 'react-i18next';
// components
import { ForecastRow } from '../ForecastRow';

export const MainForecastBottom: React.FC = () => {
	const { t } = useTranslation();
	const unitsSign = useAppSelector(state => state.settings.units.sign);
	const timezone = useAppSelector(state => state.forecast.timeAndLocation.timezone);
	const timeFormat = useAppSelector(state => state.settings.timeFormat);
	const { sunrise, sunset, temp_max, temp_min } = useAppSelector(state => state.forecast.currentForecast);

	return (
		<Flex
			align='center'
			justify={['space-between', 'space-around', 'space-evenly']}
			mb={['20px', '35px', '50px']}
			mt={['10px', '25px', '40px']}
			fontSize={['13px', '15px', '16px']}>
			{window.innerWidth <= 479 ? (
				<Flex direction='column' align='center' justify='center' w='100%'>
					<Flex w='100%' justify='space-around' mb={2}>
						<ForecastRow
							icon={BiSun}
							title={t('forecast.rise')}
							data={DateTime.fromSeconds(sunrise)
								.setZone(timezone)
								.toFormat(`${timeFormat === '24h' ? 'HH:mm' : 'hh:mm a'}`)}
						/>
						<ForecastRow
							icon={FiSunset}
							title={t('forecast.set')}
							data={DateTime.fromSeconds(sunset)
								.setZone(timezone)
								.toFormat(`${timeFormat === '24h' ? 'HH:mm' : 'hh:mm a'}`)}
						/>
					</Flex>
					<Flex w='100%' justify='space-around'>
						<ForecastRow
							icon={HiArrowUp}
							title={t('forecast.high')}
							data={Math.ceil(temp_max) + unitsSign}
						/>
						<ForecastRow
							icon={HiArrowDown}
							title={t('forecast.low')}
							data={Math.floor(temp_min) + unitsSign}
						/>
					</Flex>
				</Flex>
			) : (
				<>
					<ForecastRow
						icon={BiSun}
						title={t('forecast.rise')}
						data={DateTime.fromSeconds(sunrise)
							.setZone(timezone)
							.toFormat(`${timeFormat === '24h' ? 'HH:mm' : 'hh:mm a'}`)}
					/>
					<Text>|</Text>
					<ForecastRow
						icon={FiSunset}
						title={t('forecast.set')}
						data={DateTime.fromSeconds(sunset)
							.setZone(timezone)
							.toFormat(`${timeFormat === '24h' ? 'HH:mm' : 'hh:mm a'}`)}
					/>
					<Text>|</Text>
					<ForecastRow
						icon={HiArrowUp}
						title={t('forecast.high')}
						data={Math.ceil(temp_max) + unitsSign}
					/>
					<Text>|</Text>
					<ForecastRow
						icon={HiArrowDown}
						title={t('forecast.low')}
						data={Math.floor(temp_min) + unitsSign}
					/>
				</>
			)}
		</Flex>
	);
};
