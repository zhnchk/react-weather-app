// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// components
import { TimeAndLocation } from '../../components/TimeAndLocation/index';
import { MainForecast } from '../../components/MainForecast/index';
import { Forecast } from '../../components/Forecast/index';

export const HomePage: React.FC = () => {
	const hourly = useAppSelector(state => state.forecast.hourlyForecast);
	const daily = useAppSelector(state => state.forecast.dailyForecast);

	return (
		<>
			<TimeAndLocation />
			<MainForecast />
			<Forecast type='hourly' data={hourly} />
			<Forecast type='daily' data={daily} />
		</>
	);
};
