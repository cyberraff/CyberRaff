// import { Box } from '@chakra-ui/react';

// export default function Navbar() {
// 	return <Box></Box>;
// }

'use client';

import {
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = (props) => {
	const { children } = props;

	return (
		<Box
			as='a'
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={'#'}>
			{children}
		</Box>
	);
};

export default function Simple() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				bg={useColorModeValue('gray.100', 'gray.900')}
				px={4}
				shadow={'lg'}>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Logo</Box>
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<Avatar
							display={{ base: 'none', lg: 'block' }}
							size={'2xl'}
							border={'4px'}
							src={
								'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
							}
						/>
					</Flex>
					<IconButton
						border={'1px'}
						borderColor={'gray.400'}
						px={'3.5'}
						fontSize={'1.7rem'}
						icon={isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map((link) => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
