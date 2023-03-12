// chakra UI
import { Box, Container, useColorMode } from '@chakra-ui/react';
// components
import { CityList } from '../CityList';
import { HeaderForm } from '../HeaderForm';

export const HeaderBottom: React.FC = () => {
	const { colorMode } = useColorMode();

	return (
		<Box bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}>
			<Container maxW={'container.lg'}>
				<CityList />
				<HeaderForm />
			</Container>
		</Box>
	);
};
