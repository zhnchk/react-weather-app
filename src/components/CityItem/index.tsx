// redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchForecast } from '../../redux/slices/forecastSlice';
// react router dom
import { useNavigate } from 'react-router-dom';
// chakra UI
import { Text, useColorMode } from '@chakra-ui/react';

interface ICityItem {
	city: string;
}

export const CityItem: React.FC<ICityItem> = ({ city }) => {
	const units = useAppSelector(state => state.settings.units.units);

	const { colorMode } = useColorMode();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<Text
			onClick={() => {
				dispatch(fetchForecast([city, { units }]));
				navigate('/react-weather-app/');
			}}
			cursor='pointer'
			transition='0.25s'
			borderBottom='2px solid transparent'
			_hover={{
				borderColor: colorMode === 'light' ? 'gray.700' : 'gray.100',
			}}>
			{city}
		</Text>
	);
};
