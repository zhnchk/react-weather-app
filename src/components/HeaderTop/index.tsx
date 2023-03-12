// react router dom
import { Link } from 'react-router-dom';
// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// chakra UI
import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react';
// images
import { HeaderTopMenuLink } from '../HeaderTopMenuLink';
// locales
import { useTranslation } from 'react-i18next';
// components
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const HeaderTop: React.FC = () => {
	const language = useAppSelector(state => state.settings.language);
	const { colorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<Box py={2} bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>
			<Container maxW={'container.lg'}>
				<Flex justify='space-between' align='center'>
					<Link to='/'>
						<Image
							src='http://openweathermap.org/img/wn/02d@2x.png'
							alt='logo'
							boxSize={75}
							objectFit='cover'
							cursor='pointer'
						/>
					</Link>
					<Flex
						as='nav'
						fontSize={language === 'en' ? ['lg', 'xl', '2xl'] : ['md', 'xl', '2xl']}
						justify='space-evenly'
						align='center'
						fontWeight={500}
						w={[200, 350, 500]}>
						<HeaderTopMenuLink link='/react-weather-app/' label={t('headerMenu.home')} />
						<HeaderTopMenuLink
							link='/react-weather-app/settings'
							label={t('headerMenu.settings')}
						/>
					</Flex>
					<ColorModeSwitcher px={2} />
				</Flex>
			</Container>
		</Box>
	);
};
