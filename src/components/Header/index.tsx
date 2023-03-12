// chakra UI
import { Box } from '@chakra-ui/react';
// components
import { HeaderTop } from '../HeaderTop';
import { HeaderBottom } from '../HeaderBottom';

export const Header: React.FC = () => {
	return (
		<Box as='header' mb={5}>
			<HeaderTop />
			<HeaderBottom />
		</Box>
	);
};
