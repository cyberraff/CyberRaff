import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<>
			<Box>
				<Stack direction={{ sm: 'column', lg: 'row' }}>
					<Box p={'20'}>
						<Heading as={'h3'} fontWeight={'bold'}>
							Who am I ?
						</Heading>
						<Box
							border={'1px'}
							w={'2rem'}
							borderColor={'gray.400'}
						/>
						<Heading
							as={'h5'}
							fontWeight={'bold'}
							fontSize={'xl'}
							pt={'10'}>
							A Full Stack Web Developer | Software Engineer
						</Heading>
						<Text fontSize={'lg'}>
							Raphael Ejeogo (Cyber-Raff) is a Self-Taught Web
							Developer currently finishing his Computer Science
							Degree at the University of Port Harcourt
						</Text>
					</Box>
					<Box p={'20'}>2</Box>
					<Box p={'20'}>3</Box>
				</Stack>
			</Box>
		</>
	);
}
