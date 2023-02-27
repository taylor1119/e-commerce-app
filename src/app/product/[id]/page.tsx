import ProductsCarousel from '@/components/ProductsCarousel';
import { PRODUCTS } from '@/mocks';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Actions from './Actions';
import TabGroup from './TabGroup';
import ThumbnailSlider from './ThumbnailSlider';

interface IProps {
	params: { id: string };
}

const getProduct = (id: string) => PRODUCTS[parseInt(id) - 1];

export function generateMetadata({ params }: IProps) {
	const product = getProduct(params.id);
	if (!product) notFound();
	return { title: product.name };
}

export default function page({ params }: IProps) {
	const index = parseInt(params.id) - 1;
	const product = PRODUCTS[index];
	if (!product) notFound();
	return (
		<main>
			<section className='py-14'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 pb-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link href='/product'>Product</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link href={`/product/${product.tags[0]}`}>{product.tags[0]}</Link>
					<i className='ri-arrow-right-s-line'></i>
					<Link
						href={`/product/${product.id}`}
						className='overflow-hidden text-ellipsis whitespace-nowrap'
					>
						{product.name}
					</Link>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-10'>
					<ThumbnailSlider />
					<Actions product={product} />
				</div>
			</section>
			<TabGroup product={product} />
			<ProductsCarousel />
		</main>
	);
}
