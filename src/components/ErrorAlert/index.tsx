import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

interface IErrorAlert {
	error: string | null;
}

export const ErrorAlert: React.FC<IErrorAlert> = ({ error }) => {
	return (
		<Alert
			status='error'
			variant='subtle'
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
			textAlign='center'
			height='200px'>
			<AlertIcon boxSize='40px' mr={0} />
			<AlertTitle mt={4} mb={1} fontSize='xl'>
				An error occured!
			</AlertTitle>
			<AlertDescription fontSize='lg'>{error}</AlertDescription>
		</Alert>
	);
};
