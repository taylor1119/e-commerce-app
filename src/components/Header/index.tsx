import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default function Header() {
	return (
		<>
			<header className='fixed z-20 flex h-20 w-full items-center justify-around bg-white px-5 shadow-lg dark:bg-dark'>
				<HeaderLeft />
				<HeaderCenter />
				<HeaderRight />
			</header>
			<div className='h-20' />
		</>
	);
}
