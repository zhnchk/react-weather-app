// chakra UI
import { Flex } from '@chakra-ui/react';
//types
import { hourlyAndDailyForecast } from '../../types/forecast';
import { ForecastType } from '../Forecast';
// components
import { ForecastListItem } from '../ForecastListItem';

interface IForecastListProps {
	data: hourlyAndDailyForecast[];
	type: ForecastType;
}

export const ForecastList: React.FC<IForecastListProps> = ({ data, type }) => {
	return (
		<Flex justify='space-between' align='center' my={3}>
			{data.map((forecast, index) => {
				return <ForecastListItem forecast={forecast} type={type} key={index} />;
			})}
		</Flex>
	);
};
