import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

export default function HeaderIcons() {
	const socials = [
		{ icon: FaXTwitter, url: 'twitter.com' },
		{ icon: FaLinkedin, url: 'linkedin.com' },
		{ icon: FaGithub, url: 'github.com' },
		{ icon: FaInstagram, url: 'instagram.com' },
		{ icon: AiOutlineMail, url: 'mailto:cyberraff@gmail.com' },
	];
	return (
		<>
			<div className='flex justify-center pt-8 space-x-8 text-3xl font-normal'>
				{socials.map((social) => (
					<a
						className='pr-2'
						key={social.url}
						href={social.url}
						target='_blank'
						rel='noopener noreferrer nofollow'>
						{<social.icon />}
					</a>
				))}
			</div>
		</>
	);
}

0x9c1abc9286f005d4a6b3abd922f69fabe8d5807a;
