// redux
import { useAppSelector } from '../../hooks/reduxHooks';
// react router dom
import { Outlet } from 'react-router-dom';
// chakra UI
import { Box, Flex, Spacer, Container } from '@chakra-ui/react';
// components
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CustomSpinner } from '../CustomSpinner';
import { ErrorAlert } from '../ErrorAlert';

export const Layout: React.FC = () => {
	const loading = useAppSelector(state => state.forecast.loading);
	const error = useAppSelector(state => state.forecast.error);

	return (
		<Flex direction='column' h='100vh'>
			<Header />
			<Spacer />
			<Box as='main'>
				<Container maxW={'container.lg'}>
					{loading && <CustomSpinner />}
					{typeof error === 'string' && <ErrorAlert error={error} />}
					{!loading && typeof error !== 'string' && <Outlet />}
				</Container>
			</Box>
			<Spacer />
			<Footer />
		</Flex>
	);
};
