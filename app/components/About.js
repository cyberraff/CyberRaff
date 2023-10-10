import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<>
			<Box>
				<Stack direction={{ sm: 'column', lg: 'row' }}>
					<Box p={'20'}>
						<Heading as={'h3'} fontWeight={'thin'}>
							Who am I ?
						</Heading>
						<Box
							border={'1px'}
							w={'2rem'}
							borderColor={'gray.400'}
						/>
						<Heading as={'h5'} fontSize={'xl'} pt={'10'}>
							A Full Stack Web Developer | Software Engineer
						</Heading>
						<Text fontSize={'lg'} pt={'5'}>
							Raphael Ejeogo (Cyber-Raff) is a Self-Taught Web
							Developer currently finishing his Computer Science
							Degree at the University of Port Harcourt
						</Text>
						<Button
							border={'1px'}
							mt={'5'}
							borderColor={'gray.400'}
							_hover={{ bg: 'gray.400', textColor: 'white' }}>
							Download My CV
						</Button>
					</Box>
					<Box p={'20'}>2</Box>
					<Box p={'20'}>3</Box>
				</Stack>
			</Box>
		</>
	);
}
