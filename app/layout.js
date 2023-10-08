import { extendTheme } from '@chakra-ui/react';
import { Providers } from './providers';

export const metadata = {
	title: 'Cyber Raff',
	description:
		'Ejeogo Olisaeloka Raphael (CyberRaff) | Fullstack Web Developer | ',
};
const theme = extendTheme({
	fonts: {
		comicSans: 'comicSans',
	},
});
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Providers fontFamily='comicSans'>{children}</Providers>
			</body>
		</html>
	);
}
