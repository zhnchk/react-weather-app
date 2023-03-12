// react
import { useState, useRef } from 'react';
// react router dom
import { useNavigate } from 'react-router-dom';
// redux
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchForecast, fetchForecastWithLocation } from '../../redux/slices/forecastSlice';
// chakra UI
import { HStack, Input, IconButton } from '@chakra-ui/react';
// images
import { BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
// locales
import { useTranslation } from 'react-i18next';

export const HeaderForm: React.FC = () => {
	const { t }: any = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	const [text, setText] = useState('');
	const units = useAppSelector(state => state.settings.units.units);

	const handleClickLocation = (): void => {
		navigator.geolocation.getCurrentPosition(position => {
			const lat = position.coords.latitude.toString();
			const lon = position.coords.longitude.toString();
			dispatch(fetchForecastWithLocation({ lat, lon, units }));
			navigate('/react-weather-app/');
		});
	};

	const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
		setText(event.currentTarget.value);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (text.trim().length) {
			dispatch(fetchForecast([text, { units }]));
			navigate('/react-weather-app/');
			setText('');
			if (inputRef.current) {
				inputRef.current.value = '';
				inputRef.current.blur();
			}
		}
	};

	return (
		<form onSubmit={handleFormSubmit} action='#'>
			<HStack pt={2} pb={4}>
				<Input ref={inputRef} placeholder={t('inputPlaceholder')} onChange={handleInputChange} />
				<IconButton
					type='submit'
					px={3}
					fontSize='2xl'
					color='current'
					variant='unstyled'
					_hover={{ transform: 'scale(1.25)', transition: '0.25' }}
					icon={<BiSearch />}
					aria-label='search city'
				/>
				<IconButton
					px={3}
					fontSize='xl'
					color='current'
					variant='unstyled'
					_hover={{ transform: 'scale(1.25)', transition: '0.25' }}
					icon={<GoLocation />}
					aria-label='location'
					onClick={handleClickLocation}
				/>
			</HStack>
		</form>
	);
};
