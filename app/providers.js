'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
// import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import { extendTheme } from '@chakra-ui/react';

// const rubik = Rubik({ subsets: ['latin'] });

const comicSans = localFont({
	src: [
		{
			path: '../public/fonts/ComicSansMS3.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/design.graffiti.comicsansmsgras.ttf',
			weight: '400',
			style: 'italic',
		},
	],
});
export const theme = extendTheme({
	fonts: {
		heading: 'var(--font-comicSans)',
		body: 'var(--font-comicSans)',
	},
});

export function Providers({ children }) {
	return (
		<CacheProvider>
			<style jsx global>
				{`
					:root {
						--font-comicSans: ${comicSans.style.fontFamily};
					}
				`}
			</style>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	);
}
