'use client';

import { IProduct } from '@/common/interfaces';
import { favoriteItemsState } from '@/recoil/atoms';
import { getDiscountedValue } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function FavoriteItem({ favoriteItem }: { favoriteItem: IProduct }) {
	const setFavoriteItems = useSetRecoilState(favoriteItemsState);
	const removeItem = () =>
		setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== favoriteItem.id));

	return (
		<li className='relative w-[28rem] rounded border-2 p-5 shadow-lg'>
			<button
				onClick={removeItem}
				className='absolute top-2 right-2 h-7 w-7 items-center justify-center rounded-full bg-red-400 text-lg text-white'
			>
				<i className='ri-close-fill'></i>
			</button>
			<div className='flex items-center gap-x-10'>
				<Link href={`/products/${favoriteItem.category}/${favoriteItem.id}`} className='contents'>
					<Image
						src={favoriteItem.image}
						alt='product image'
						placeholder='blur'
						className='h-56 w-auto rounded'
					/>
				</Link>

				<ul className='flex flex-col gap-y-1 font-semibold'>
					<li className='font-secondary text-xl'>{favoriteItem.name}</li>
					<li className='capitalize text-gray-400'>Color: {favoriteItem.color}</li>
					<li className='space-x-2'>
						<span>Price:</span>
						<span className={favoriteItem.discount ? 'text-gray-400 line-through' : ''}>
							${favoriteItem.price.toFixed(2)}
						</span>
						<span>
							{Boolean(favoriteItem.discount) &&
								'$' + getDiscountedValue(favoriteItem.price, favoriteItem.discount).toFixed(2)}
						</span>
					</li>
				</ul>
			</div>
		</li>
	);
}

export default function FavoriteItems() {
	const favoriteItems = useRecoilValue(favoriteItemsState);
	const [showCartItems, setShowCartItems] = useState(false);
	useEffect(() => setShowCartItems(Boolean(favoriteItems.length)), [favoriteItems.length]);

	return (
		<>
			{showCartItems && (
				<ul className='flex flex-wrap justify-center gap-5'>
					{Array.from(favoriteItems.values()).map((cartItem, index) => (
						<FavoriteItem key={index} favoriteItem={cartItem} />
					))}
				</ul>
			)}
		</>
	);
}
