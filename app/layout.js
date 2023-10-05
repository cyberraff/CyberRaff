import './globals.css';
import { Inter } from 'next/font/google';

import localFont from 'next/font/local';

const comicSans = localFont({
	src: [
		{
			path: '../public/ComicSansMS3.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/design.graffiti.comicsansmsgras.ttf',
			weight: '700',
			style: 'bold',
		},
	],
	variable: '--font-comicSans',
});

export const metadata = {
	title: 'Cyber Raff',
	description: 'Full Stack Web Developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={comicSans.className}>{children}</body>
		</html>
	);
}
