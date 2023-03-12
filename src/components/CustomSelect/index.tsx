// chakra UI
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button, useToast } from '@chakra-ui/react';
// locales
import { useTranslation } from 'react-i18next';

export interface ICustomSelectProps {
	items: { value: any; label: string }[];
	value: any;
	onChange: (newValue: any) => void;
}

export const CustomSelect: React.FC<ICustomSelectProps> = props => {
	const toast = useToast();
	const { t } = useTranslation();

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{props.items.find(item => {
					if (typeof item.value === 'object') {
						return item.value.units === props.value.units;
					} else {
						return item.value === props.value;
					}
				})?.label || 'Choose...'}
			</MenuButton>
			<MenuList>
				{props.items.map((item, index) => {
					return (
						<MenuItem
							key={index}
							onClick={() => {
								props.onChange(item.value);
								if (typeof item.value === 'object') {
									if (item.value.units !== props.value.units) {
										toast({
											position: 'bottom',
											description: t('settingsToast'),
											status: 'success',
											duration: 800,
											isClosable: false,
										});
									}
								} else {
									if (item.value !== props.value) {
										toast({
											position: 'bottom',
											description: t('settingsToast'),
											status: 'success',
											duration: 800,
											isClosable: false,
										});
									}
								}
							}}>
							{item.label}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};
