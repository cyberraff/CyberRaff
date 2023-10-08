import Image from 'next/image';
import { Box, Heading } from '@chakra-ui/react';
import Header from './components/Header';

export default function Home() {
	return (
		<main fontFamily='comicSans'>
			<Box>
				<Header />
				<Heading>hello</Heading>
			</Box>
		</main>
	);
}
