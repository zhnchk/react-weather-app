// chakra UI
import { Spinner, Center, useColorMode } from '@chakra-ui/react';

export const CustomSpinner: React.FC = () => {
	const { colorMode } = useColorMode();

	return (
		<Center>
			<Spinner
				thickness='3px'
				speed='0.5s'
				color={colorMode === 'light' ? 'gray.700' : 'gray.200'}
				size='xl'
			/>
		</Center>
	);
};
