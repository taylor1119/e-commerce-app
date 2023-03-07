'use client';
import { IProduct } from '@/common/interfaces';
import { wishlistItemsState } from '@/recoil/atoms';
import { tw } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function ProductCardActions({ product }: { product: IProduct }) {
	const [wishlistItems, setWishlistItems] = useRecoilState(wishlistItemsState);
	const [isItemWished, setIsItemWished] = useState(false);
	useEffect(
		() => setIsItemWished(!wishlistItems.every(({ id }) => id !== product.id)),
		[wishlistItems, product]
	);

	const handleAddRemoveWishlistItems = () =>
		isItemWished
			? setWishlistItems((prev) => prev.filter((item) => item.id !== product.id))
			: setWishlistItems((prev) => [product, ...prev]);

	const wishlistIconClasses = isItemWished
		? tw`bg-yellow-400 text-white`
		: tw`bg-white text-black hover:bg-black hover:text-white`;

	return (
		<ul className='absolute bottom-5 z-20 flex w-full translate-y-5 justify-center gap-4 text-lg opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
			<li>
				<span className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'>
					<i className='ri-arrow-left-right-fill' />
				</span>
			</li>
			<li>
				<Link
					href={`products/${product.category}/${product.id}`}
					className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
				>
					<i className='ri-eye-line' />
				</Link>
			</li>
			<li>
				<button
					onClick={handleAddRemoveWishlistItems}
					className={`${wishlistIconClasses} flex h-10 w-10 items-center justify-center rounded-full duration-300`}
				>
					<i className='ri-star-line' />
				</button>
			</li>
		</ul>
	);
}
