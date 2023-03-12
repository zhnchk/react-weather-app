// charka UI
import { Text, Icon, Flex } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface IForecastRow {
	icon: IconType;
	title: string;
	data: string;
}

export const ForecastRow: React.FC<IForecastRow> = ({ icon, title, data }) => {
	return (
		<Flex align='center'>
			<Icon as={icon} size='15px' />
			<Text fontWeight='light' mx={1}>
				{title}
			</Text>
			<Text>{data}</Text>
		</Flex>
	);
};
