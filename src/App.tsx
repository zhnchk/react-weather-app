// react
import { useEffect } from 'react';
// react router dom
import { Routes, Route } from 'react-router-dom';
// redux
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { fetchForecast } from './redux/slices/forecastSlice';
// chakra UI
import { ChakraProvider, theme } from '@chakra-ui/react';
// components
import { SettingsPage } from './pages/SettingsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

export const App: React.FC = () => {
	const lastCity = useAppSelector(state => state.forecast.lastFetchedCity);
	const units = useAppSelector(state => state.settings.units.units);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchForecast([lastCity, { units }]));
	}, [dispatch, lastCity, units]);

	return (
		<ChakraProvider theme={theme}>
			<Routes>
				<Route path='/react-weather-app/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='/react-weather-app//settings' element={<SettingsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</ChakraProvider>
	);
};
