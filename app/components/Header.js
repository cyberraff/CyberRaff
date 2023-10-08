import { Box, Center, Container, Heading, Stack } from '@chakra-ui/react';

export default function Header() {
	return (
		<Box
			bgImage="linear(to-b, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('/IMG_1430.JPG') "
			w='full'
			h={'42rem'}
			bgSize={'cover'}
			bgRepeat={'no-repeat'}
			bgPosition={'center'}>
			<Stack h={'full'} textColor={'white'} fontFamily='comicSans'>
				<Heading as='h3'>Hello, I am</Heading>
				<Heading as='h1'> Ejeogo Raphael</Heading>
				<Heading as='h6'>Full Stack Developer | Engineer</Heading>
			</Stack>
		</Box>
	);
}
