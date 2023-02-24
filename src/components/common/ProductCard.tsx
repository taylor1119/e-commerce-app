import { IProduct } from '@/common/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface IProductCardProps {
	product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
	return (
		<div className='flex min-w-max flex-col items-center gap-4 font-semibold'>
			<div className='group relative overflow-hidden'>
				<Image
					width={225}
					height={300}
					alt='product image'
					src={product.image1}
					quality={100}
					className='rounded'
				/>
				<Image
					width={225}
					height={300}
					alt='product image'
					src={product.image2}
					quality={100}
					className='absolute top-0 right-0 rounded opacity-0 duration-700 ease-in-out hover:scale-105 hover:opacity-100'
				/>

				<ul className='absolute bottom-5 z-20 flex w-full translate-y-5 justify-center gap-4 text-lg opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
					<li>
						<Link
							href='/not-implemented'
							className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
						>
							<i className='ri-arrow-left-right-fill' />
						</Link>
					</li>
					<li>
						<Link
							href='/not-implemented'
							className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
						>
							<i className='ri-eye-line' />
						</Link>
					</li>
					<li>
						<Link
							href='/not-implemented'
							className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
						>
							<i className='ri-star-line' />
						</Link>
					</li>
				</ul>

				{Boolean(product.discount) && (
					<div className='absolute inset-x-0 bottom-5 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-white group-hover:opacity-0'>
						<span>-{product.discount}%</span>
					</div>
				)}
			</div>

			<div>
				<h3>{product.name}</h3>
				<h3 className='flex justify-center gap-2'>
					<span className={product.discount ? 'text-gray-400 line-through' : ''}>
						${product.price.toFixed(2)}
					</span>
					{Boolean(product.discount) &&
						'$' + (product.price - (product.price * product.discount) / 100).toFixed(2)}
				</h3>
			</div>
		</div>
	);
}
