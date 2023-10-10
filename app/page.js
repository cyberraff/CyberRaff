import Image from 'next/image';
import { Box, Heading } from '@chakra-ui/react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';

export default function Home() {
	return (
		<main fontFamily='comicSans'>
			<Box>
				<Header />
				<Navbar />
				<About />
			</Box>
		</main>
	);
}
