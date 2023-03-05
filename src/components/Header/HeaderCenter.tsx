import Link from 'next/link';
import ProductsMenu from './ProductsMenu';

export default function HeaderCenter() {
	return (
		<nav className='flex items-center font-semibold'>
			<ul className='hidden w-60 items-center justify-end gap-4 uppercase md:flex'>
				<ProductsMenu />
				<li>
					<Link href='/not-implemented'>
						<span>Discounts</span>
					</Link>
				</li>
			</ul>
			<Link className='px-8 font-secondary text-3xl' href='/'>
				EStore
			</Link>
			<ul className='hidden w-60 items-center gap-4 uppercase md:flex'>
				<li className='group/specials'>
					<div className='flex cursor-pointer gap-1 py-7'>
						<span>Specials</span>
						<i className='ri-arrow-down-s-line' />
					</div>

					<ul className='invisible fixed top-20 z-20 translate-y-2 space-y-4 bg-white py-4 px-7 text-sm capitalize text-gray-400 opacity-0 shadow-lg duration-300 ease-in-out group-hover/specials:visible group-hover/specials:translate-y-0 group-hover/specials:opacity-100 dark:bg-dark'>
						<li className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								Dolce & Gabbana
							</Link>
						</li>
						<li className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								Louis Vuitton
							</Link>
						</li>
						<li className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								Versace
							</Link>
						</li>
						<li className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								Dior
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link href='/not-implemented'>
						<span>Sales</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
