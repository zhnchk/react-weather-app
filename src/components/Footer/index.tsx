// chakra UI
import { Text, Box, Container, Flex, Link, useColorMode, IconButton } from '@chakra-ui/react';
// images
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
// locales
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
	const { colorMode } = useColorMode();
	const { t } = useTranslation();

	return (
		<Box as='footer' py={4} bg={colorMode === 'light' ? 'gray.200' : 'gray.700'} mt={5}>
			<Container maxW={'container.lg'}>
				<Flex pb={1}>
					<Link href='https://www.instagram.com/zhn.chk' target='_blank' mr={4}>
						<IconButton
							color='current'
							variant='unstyled'
							_hover={{ transform: 'scale(1.25)', transition: '0.25' }}
							icon={<AiFillInstagram size={30} />}
							aria-label='instagram'
						/>
					</Link>
					<Link href='https://github.com/zhnchk' target='_blank'>
						<IconButton
							color='current'
							variant='unstyled'
							_hover={{ transform: 'scale(1.25)', transition: '0.25' }}
							icon={<AiFillGithub size={30} />}
							aria-label='github'
						/>
					</Link>
				</Flex>
				<Text fontSize={['xs', 'sm', 'md']}>{t('footerText')}</Text>
			</Container>
		</Box>
	);
};
