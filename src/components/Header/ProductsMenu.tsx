import { APPARELS, PERFUMES, SHOES } from '@/constants/brands';
import { PRODUCTS } from '@/mocks';
import Link from 'next/link';
import ProductCard from '../common/ProductCard';

export default function ProductsMenu() {
	return (
		<div className='invisible fixed right-0 top-20 z-20 flex w-screen translate-y-2 justify-center gap-10 bg-white p-4 text-sm capitalize opacity-0 shadow-lg duration-300 ease-in-out group-hover/products:visible group-hover/products:translate-y-0 group-hover/products:opacity-100 dark:bg-dark'>
			<div className='flex max-h-[calc(100vh-80px-2rem)] flex-wrap justify-center gap-10 overflow-y-auto'>
				{PRODUCTS.slice(0, 3).map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</div>

			<div className='flex flex-wrap gap-10 text-gray-400'>
				<ul className='w-32 space-y-4'>
					<li className='text-black dark:text-white'>Apparel</li>
					{APPARELS.map((apparel, index) => (
						<li key={index} className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{apparel}
							</Link>
						</li>
					))}
				</ul>

				<ul className='w-32 space-y-4'>
					<li className='text-black dark:text-white'>Shoes</li>
					{SHOES.map((shoe, index) => (
						<li key={index} className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{shoe}
							</Link>
						</li>
					))}
				</ul>

				<ul className='w-32 space-y-4'>
					<li className='text-black dark:text-white'>Perfumes</li>
					{PERFUMES.map((perfume, index) => (
						<li key={index} className='hover:text-black dark:hover:text-white'>
							<Link href='/not-implemented' className='group flex items-center gap-2'>
								<span className='-ml-4 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
								{perfume}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
