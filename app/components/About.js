import { Box, Flex, Stack, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<>
			<Box>
				<Stack direction={{ sm: 'column', lg: 'row' }}>
					<Box p={'20'}>
						<Text fontSize={'3xl'}>Who am I ?</Text>
						<Box
							border={'1px'}
							w={'2rem'}
							borderColor={'gray.400'}
						/>
						<Text fontSize={'2xl'} pt={'10'}>
							A Full Stack Web Developer | Software Engineer
						</Text>
					</Box>
					<Box p={'20'}>2</Box>
					<Box p={'20'}>3</Box>
				</Stack>
			</Box>
		</>
	);
}
