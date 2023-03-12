// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// charka UI
import { Flex, Text } from '@chakra-ui/react';
// locales
import { useTranslation } from 'react-i18next';
// luxon
import { DateTime } from 'luxon';

export const TimeAndLocation: React.FC = () => {
	const { t } = useTranslation();
	const name = useAppSelector(state => state.forecast.timeAndLocation.name);
	const nameUA = useAppSelector(state => state.forecast.timeAndLocation.nameUA);
	const timezone = useAppSelector(state => state.forecast.timeAndLocation.timezone);
	const timeFormat = useAppSelector(state => state.settings.timeFormat);
	const language = useAppSelector(state => state.settings.language);

	const getFormattedDay = (): string => {
		switch (DateTime.now().setZone(timezone).toFormat(`cccc`)) {
			case 'Monday':
				return t('weekDaysLong.Mon');
			case 'Tuesday':
				return t('weekDaysLong.Tue');
			case 'Wednesday':
				return t('weekDaysLong.Wed');
			case 'Thursday':
				return t('weekDaysLong.Thu');
			case 'Friday':
				return t('weekDaysLong.Fri');
			case 'Saturday':
				return t('weekDaysLong.Sat');
			case 'Sunday':
				return t('weekDaysLong.Sun');
		}
		return DateTime.now().setZone(timezone).toFormat('cccc');
	};

	const getFormattedMonth = (): string => {
		switch (DateTime.now().setZone(timezone).toFormat(`LLLL`)) {
			case 'January':
				return t('month.January');
			case 'February':
				return t('month.February');
			case 'March':
				return t('month.March');
			case 'April':
				return t('month.April');
			case 'May':
				return t('month.May');
			case 'June':
				return t('month.June');
			case 'July':
				return t('month.July');
			case 'August':
				return t('month.August');
			case 'September':
				return t('month.September');
			case 'October':
				return t('month.October');
			case 'November':
				return t('month.November');
			case 'December':
				return t('month.December');
		}
		return DateTime.now().setZone(timezone).toFormat('LLLL');
	};

	return (
		<Flex justify='center' align='center' direction='column' fontSize={['sm', 'xl']}>
			<Text>
				{DateTime.now()
					.setZone(timezone)
					.toFormat(`'${getFormattedDay()}, 'dd' ${getFormattedMonth()} 'yyyy'`)}
			</Text>
			<Text mt={1} mb={['10px', '15px', '20px']}>
				{DateTime.now()
					.setZone(timezone)
					.toFormat(`'${t('localTime')}'${timeFormat === '24h' ? 'HH:mm' : 'hh:mm a'}`)}
			</Text>
			<Text fontSize={['2xl', '3xl']} mb={['10px', '20px', '30px']}>
				{language === 'en' ? name : nameUA}
			</Text>
		</Flex>
	);
};
