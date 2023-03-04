'use client';

import { ICartItem } from '@/common/interfaces';
import { cartItemsState } from '@/recoil/atoms';
import { getDiscountedValue } from '@/utils';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

function OrderItem({ cartItem }: { cartItem: ICartItem }) {
	return (
		<li className='flex gap-x-5'>
			<div className='relative'>
				<Image
					src={cartItem.image}
					alt='product image'
					placeholder='blur'
					className='h-36 w-auto rounded'
				/>
				<span className='absolute -top-3 -right-3 h-6 w-6 bg-teal-400 rounded-full flex justify-center items-center text-white'>
					{cartItem.quantity}
				</span>
			</div>

			<ul className='flex flex-col'>
				<li className='font-semibold'>{cartItem.name}</li>
				<li className='text-gray-400 capitalize'>Color: {cartItem.color}</li>
				<li className='text-gray-400'>Size: {cartItem.size}</li>
				<li className='mt-auto space-x-1'>
					<span>Price:</span>
					<span className={cartItem.discount ? 'text-gray-400 line-through' : ''}>
						${cartItem.price.toFixed(2)}
					</span>
					<span>
						{Boolean(cartItem.discount) &&
							'$' + getDiscountedValue(cartItem.price, cartItem.discount).toFixed(2)}
					</span>
				</li>
			</ul>
		</li>
	);
}

export default function OrderSummary() {
	const cartItems = useRecoilValue(cartItemsState);

	return (
		<section className='border border-gray-50 bg-gray-100 dark:border-slate-800 dark:bg-slate-900 p-5'>
			<ul className='space-y-5'>
				{Array.from(cartItems.values()).map((cartItem, index) => (
					<OrderItem key={index} cartItem={cartItem} />
				))}
			</ul>
		</section>
	);
}
