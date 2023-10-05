import { AiOutlinePrinter } from 'react-icons/ai';
import HeaderIcons from './HeaderIcons';

export default function Header() {
	return (
		<>
			<header className='font-extrabold  h-[41rem] bg-hero-img bg-blend-darker bg-cover bg-center'>
				<HeaderIcons />
				<h1 className='ml-8 text-4xl font-normal text-white pt-60 text'>
					Hello, I am <br />
					<span className='font-bold text-7xl'> Ejeogo Raphael</span>
				</h1>
				<p className='pt-6 ml-8 text-lg font-normal '>
					Full Stack Developer
				</p>
				{/* </div> */}
				<button className='flex items-center px-6 py-2 mt-12 ml-8 text-lg font-normal rounded-full bg-gray-950 '>
					<AiOutlinePrinter className='mr-2 ' />
					Print Resume
				</button>
			</header>
		</>
	);
}
