// chakra UI
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
// images
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			size='md'
			fontSize='3xl'
			color='current'
			variant='unstyled'
			_hover={{ transform: 'scale(1.25)', transition: '0.25' }}
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}
		/>
	);
};

