import { TCategory } from '@/common/types';
import ProductCard from '@/components/common/ProductCard';
import PRODUCTS from '@/mocks/products';
import { capitalize } from '@/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import FilterSidebar from './FilterSidebar';

interface IProps {
	params: { category: TCategory };
}

export function generateMetadata({ params }: IProps): Metadata {
	return { title: `${capitalize(params.category)}` };
}

export default function page({ params }: IProps) {
	return (
		<main>
			<section className='py-14'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 pb-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link href='/products/all'>Products</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>{params.category}</span>
				</div>
				<div>
					<h1 className='my-8 text-center font-secondary text-5xl capitalize'>{params.category}</h1>
					<div className='flex gap-x-2'>
						<FilterSidebar />
						<div className='px-8'>
							<div className='mb-8 flex flex-wrap justify-center gap-5 pt-5 font-semibold md:justify-between'>
								<span>
									Showing {PRODUCTS.length} of {PRODUCTS.length} items
								</span>
								<div>
									{/*TODO add sort submenu */}
									<span className='flex items-center gap-x-1'>
										<span>SORT BY: </span>
										<span>NEWEST</span>
										<i className='ri-arrow-down-s-line'></i>
									</span>
								</div>
							</div>
							<ul className='flex flex-wrap justify-center gap-8'>
								{PRODUCTS.map((product) => (
									<li key={product.id}>
										<ProductCard product={product} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
