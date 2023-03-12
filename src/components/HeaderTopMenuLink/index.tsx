// react router dom
import { Link } from 'react-router-dom';
// chakra UI
import { Text, useColorMode } from '@chakra-ui/react';

interface IHeaderTopMenuLink {
	link: string;
	label: string;
}

export const HeaderTopMenuLink: React.FC<IHeaderTopMenuLink> = ({ link, label }) => {
	const { colorMode } = useColorMode();

	return (
		<Text
			transition='0.25s'
			borderBottom='2px solid transparent'
			_hover={{
				borderColor: colorMode === 'light' ? 'gray.700' : 'gray.100',
			}}>
			<Link to={link}>{label}</Link>
		</Text>
	);
};
