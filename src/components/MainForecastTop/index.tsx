// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// charka UI
import { Flex, Text, Center, Image } from '@chakra-ui/react';
// locales
import { useTranslation } from 'react-i18next';
// images
import { FaTemperatureHigh } from 'react-icons/fa';
import { BiWind, BiDroplet } from 'react-icons/bi';

// components
import { ForecastRow } from '../ForecastRow';

export const MainForecastTop: React.FC = () => {
	const { t } = useTranslation();
	const unitsSign = useAppSelector(state => state.settings.units.sign);
	const unitsSpeed = useAppSelector(state => state.settings.units.speed);
	const { name, image, temp, humidity, feels_like, wind } = useAppSelector(
		state => state.forecast.currentForecast
	);

	const getWeatherName = (name: string): string => {
		switch (name) {
			case 'Thunderstorm':
				return t('weatherName.Thunderstorm');
			case 'Drizzle':
				return t('weatherName.Drizzle');
			case 'Rain':
				return t('weatherName.Rain');
			case 'Snow':
				return t('weatherName.Snow');
			case 'Clear':
				return t('weatherName.Clear');
			case 'Clouds':
				return t('weatherName.Clouds');
			case 'Mist':
				return t('weatherName.Mist');
			case 'Smoke':
				return t('weatherName.Smoke');
			case 'Haze':
				return t('weatherName.Haze');
			case 'Fog':
				return t('weatherName.Fog');
			case 'Sand':
				return t('weatherName.Sand');
			case 'Dust':
				return t('weatherName.Dust');
			case 'Ash':
				return t('weatherName.Ash');
			case 'Squall':
				return t('weatherName.Squall');
			case 'Tornado':
				return t('weatherName.Tornado');
		}
		return name;
	};

	return (
		<>
			<Center fontSize='2xl' my={2}>
				<Text>{getWeatherName(name)}</Text>
			</Center>
			{window.innerWidth <= 379 ? (
				<>
					<Flex justify='space-around' align='center'>
						<Image
							src={`http://openweathermap.org/img/wn/${image}@2x.png`}
							alt='forecast picture'
							w='120px'
						/>
						<Text fontSize='5xl'>{Math.round(temp) + unitsSign}</Text>
					</Flex>
					<Flex
						direction='column'
						justify='center'
						align='center'
						fontSize={['13px', '15px', '16px']}
						mb={4}>
						<ForecastRow
							icon={FaTemperatureHigh}
							title={t('forecast.realFeel')}
							data={Math.round(feels_like) + unitsSign}
						/>
						<ForecastRow icon={BiDroplet} title={t('forecast.humidity')} data={humidity + '%'} />
						<ForecastRow
							icon={BiWind}
							title={t('forecast.wind')}
							data={
								wind.toFixed(1) +
								' ' +
								(unitsSpeed === 'm/s' ? t('forecast.windSpeed') : t('forecast.windSpeedImp'))
							}
						/>
					</Flex>
				</>
			) : (
				<Flex justify='space-between' align='center'>
					<Image
						src={`http://openweathermap.org/img/wn/${image}@2x.png`}
						alt='forecast picture'
						w={['100px', '120px', '120px']}
					/>
					<Text fontSize={['4xl', '5xl', '5xl']}>{Math.round(temp) + unitsSign}</Text>
					<Flex
						direction='column'
						justify='center'
						align='center'
						fontSize={['13px', '15px', '16px']}>
						<ForecastRow
							icon={FaTemperatureHigh}
							title={t('forecast.realFeel')}
							data={Math.round(feels_like) + unitsSign}
						/>
						<ForecastRow icon={BiDroplet} title={t('forecast.humidity')} data={humidity + '%'} />
						<ForecastRow
							icon={BiWind}
							title={t('forecast.wind')}
							data={
								wind.toFixed(1) +
								' ' +
								(unitsSpeed === 'm/s' ? t('forecast.windSpeed') : t('forecast.windSpeedImp'))
							}
						/>
					</Flex>
				</Flex>
			)}
		</>
	);
};
