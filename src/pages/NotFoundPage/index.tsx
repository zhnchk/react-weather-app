// react router dom
import { Link } from 'react-router-dom';
// chakra UI
import { Text, Image, Flex, useColorMode } from '@chakra-ui/react';
// images
import NotFoundBlackIcon from './notFoundBlack.svg';
import NotFoundWhiteIcon from './notFoundWhite.svg';

export const NotFoundPage: React.FC = () => {
	const { colorMode } = useColorMode();
	return (
		<Flex justify='center' direction='column' align='center'>
			<Image
				src={colorMode === 'light' ? NotFoundBlackIcon : NotFoundWhiteIcon}
				alt='not found'
				boxSize={125}
				objectFit='cover'
			/>
			<Text fontSize='xl' mt={3}>
				Page not found. Please return to the{' '}
				<Link to='/react-weather-app/' style={{ textDecoration: 'underline' }}>
					home page
				</Link>
			</Text>
		</Flex>
	);
};
