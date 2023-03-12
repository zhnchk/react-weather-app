// chakra UI
import { Flex } from '@chakra-ui/react';
// locales
import { useTranslation } from 'react-i18next';
// components
import { CityItem } from '../CityItem';

export const CityList: React.FC = () => {
	const { t } = useTranslation();
	const defaultCities: string[] = [
		t('defaultCities.Miami'),
		t('defaultCities.London'),
		t('defaultCities.Kyiv'),
		t('defaultCities.Tokyo'),
		t('defaultCities.Sydney'),
	];

	return (
		<Flex justify='space-evenly' align='center' fontSize={['md', 'xl', '2xl']} py={2}>
			{defaultCities.map((city, index) => (
				<CityItem city={city} key={index} />
			))}
		</Flex>
	);
};
