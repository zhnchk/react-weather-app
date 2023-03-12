// chakra UI
import { Flex, Text } from '@chakra-ui/react';
// types
import { ICustomSelectProps } from '../CustomSelect';
// components
import { CustomSelect } from '../CustomSelect';

interface ISettingsOption {
	title: string;
	select: ICustomSelectProps;
}

export const SettingsOption: React.FC<ISettingsOption> = ({ title, select }) => {
	return (
		<Flex justify='space-between' align='center'>
			<Text fontWeight='medium'>{title}</Text>
			<CustomSelect items={select.items} onChange={select.onChange} value={select.value} />
		</Flex>
	);
};
