'use client';

import { IProduct } from '@/common/interfaces';
import { TSize } from '@/common/types';
import { cartItemsState } from '@/recoil/atoms';
import { getDiscountedValue, tw } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Actions({ product }: { product: IProduct }) {
	const price = product.price.toFixed(2);
	const discountedPrice = getDiscountedValue(product.price, product.discount).toFixed(2);

	const [cartItems, setCartItems] = useRecoilState(cartItemsState);
	const [size, setSize] = useState<TSize>('M');
	const [quantity, setQuantity] = useState(cartItems.get(`${size}.${product.id}`)?.quantity ?? 0);

	const handleAddToCart = () =>
		setCartItems((prev) => {
			const newItems = new Map(prev);
			newItems.set(`${size}.${product.id}`, { ...product, quantity, size });
			return newItems;
		});

	useEffect(() => {
		setQuantity(cartItems.get(`${size}.${product.id}`)?.quantity ?? 0);
	}, [cartItems, product.id, size]);

	const sizeButtonClasses = (btnSize: TSize) =>
		btnSize === size
			? tw`bg-black text-white dark:text-black dark:bg-white`
			: tw`hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`;

	return (
		<div className='space-y-3 px-5'>
			<div>
				<h1 className='font-secondary text-5xl'>{product.name}</h1>

				<div className='flex gap-x-3 font-semibold'>
					<span className='flex gap-x-2'>
						<i className='ri-star-fill my-auto text-yellow-400'></i>
						<span>4.5</span>
					</span>
					<span className='text-blue-400'> 5 Reviews</span>
				</div>
			</div>

			<div className='flex items-center'>
				<span className='text-3xl'>${product.discount ? discountedPrice : price}</span>
				{Boolean(product.discount) && (
					<div className='before:content-[" "] relative pl-8 before:absolute before:top-0 before:left-3 before:h-full before:w-px before:rotate-[25deg] before:bg-slate-400'>
						<h3 className='text-gray-400 line-through'>${price}</h3>
						<h3 className='text-red-400'>-{product.discount}%</h3>
					</div>
				)}
			</div>

			<div className='space-y-1'>
				<span className='font-semibold'>Colors:</span>
				<ul className='flex gap-x-3'>
					{product.relatedProducts?.map(({ color, id }, index) => (
						<li key={index}>
							<Link
								href={`/products/${product.category}/${id}`}
								className={`block h-10 w-10 rounded-full border-2 ${color} duration-300 hover:shadow-[inset_0_0_0_4px_white]`}
							></Link>
						</li>
					))}
				</ul>
			</div>

			<div className='space-y-1'>
				<span className='font-semibold'>Size:</span>
				<div className='space-x-3 text-lg font-semibold'>
					<button
						onClick={() => setSize('S')}
						className={`${sizeButtonClasses(
							'S'
						)} h-10 w-10 rounded border border-black duration-300 dark:border-white`}
					>
						S
					</button>
					<button
						onClick={() => setSize('M')}
						className={`${sizeButtonClasses(
							'M'
						)} h-10 w-10 rounded border border-black duration-300 dark:border-white`}
					>
						M
					</button>
					<button
						onClick={() => setSize('L')}
						className={`${sizeButtonClasses(
							'L'
						)} h-10 w-10 rounded border border-black duration-300 dark:border-white`}
					>
						L
					</button>
					<button
						onClick={() => setSize('XL')}
						className={`${sizeButtonClasses(
							'XL'
						)} h-10 w-10 rounded border border-black duration-300 dark:border-white`}
					>
						XL
					</button>
				</div>
			</div>

			<div className='flex items-center gap-x-3'>
				<span>
					<strong>201</strong> in stock
				</span>
				<i className='ri-checkbox-circle-line text-green-400' />
			</div>

			<div className='flex flex-wrap gap-3'>
				<div className='flex items-center text-xl text-black'>
					<button
						disabled={!quantity}
						onClick={() => setQuantity((prev) => prev - 1)}
						className='h-10 w-10 rounded-l bg-gray-200'
					>
						-
					</button>
					<span className='flex h-10 w-10 items-center justify-center bg-gray-200'>{quantity}</span>
					<button
						onClick={() => setQuantity((prev) => prev + 1)}
						className='h-10 w-10 rounded-r bg-gray-200'
					>
						+
					</button>
				</div>
				<button
					onClick={handleAddToCart}
					className='h-10 flex-grow rounded border-2 align-middle font-semibold'
				>
					ADD TO CART
				</button>
				<button className='h-10 w-full rounded bg-black font-semibold text-white dark:bg-white dark:text-black'>
					BUY NOW
				</button>
			</div>

			<div className='divide-y'>
				<ul className='flex flex-wrap gap-x-5 gap-y-1 pb-3'>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-heart-line text-xl'></i>
						<span>Add to wishlist</span>
					</li>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-arrow-left-right-fill text-xl'></i>
						<span>Compare</span>
					</li>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-share-line text-xl'></i>
						<span>Share</span>
					</li>
					<li className='flex items-center gap-x-2 hover:opacity-50'>
						<i className='ri-question-line text-xl'></i>
						<span>Ask Question</span>
					</li>
				</ul>

				<ul className='pt-3'>
					<li className='flex items-center gap-x-2'>
						<i className='ri-gift-line'></i>
						<span>Free shipping & return </span>
						<span className='text-gray-400'>On orders over $60</span>
					</li>
					<li className='flex items-center gap-x-2'>
						<i className='ri-truck-line'></i>
						<span>Estimate delivery: </span>
						<span className='text-gray-400'>05 - 12 Aug 2023</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
