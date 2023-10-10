import {
	Box,
	Button,
	Center,
	Container,
	Heading,
	Stack,
	Text,
	HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { GoMail } from 'react-icons/go';

export default function Header() {
	return (
		<Box
			bgImage="linear(to-b, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('/IMG_1430.JPG') "
			w='full'
			h={'42rem'}
			bgSize={'cover'}
			bgRepeat={'no-repeat'}
			bgPosition={'center'}>
			<Stack
				// h={'full'}
				textColor={'white'}
				fontFamily='comicSans'
				justify={'center'}>
				<HStack
					justifyContent={'center'}
					alignItems={'top'}
					mt={'1.5rem'}
					fontSize={'3xl'}
					spacing={'1.5rem'}>
					<Link href={'#'}>
						<FaXTwitter />
					</Link>
					<Link href={'#'}>
						<FaLinkedin />
					</Link>
					<Link href={'#'}>
						<FaInstagram />
					</Link>
					<Link href={'#'}>
						<GoMail />
					</Link>
				</HStack>
				<Stack pl={'2rem'}>
					<Heading as='h3' pt={'12rem'} fontWeight={'thin'}>
						Hello, I am
					</Heading>
					<Heading as='h1' fontSize={'6xl'}>
						Ejeogo Raphael
					</Heading>
					<Heading
						as='h6'
						mb={'8'}
						fontSize={'xl'}
						fontWeight={'thin'}>
						Full Stack Developer | Engineer
					</Heading>
					<Button
						p={'4'}
						rounded={'full'}
						w={'10rem'}
						textColor={'white'}
						bg={'gray.600'}>
						Button
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
}
