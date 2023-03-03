'use client';

import { ICartItem } from '@/common/interfaces';
import { cartItemsState } from '@/recoil/atoms';
import { getDiscountedValue } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function CartItem({ cartItem }: { cartItem: ICartItem }) {
	const setCartItems = useSetRecoilState(cartItemsState);

	const handleChangeQuantity = (quantity: number) => {
		setCartItems((prevItems) => {
			const newItems = new Map(prevItems);
			cartItem.quantity <= 0
				? newItems.delete(cartItem.id)
				: newItems.set(cartItem.id, { ...cartItem, quantity });
			return newItems;
		});
	};

	const removeItem = () =>
		setCartItems((prevItems) => {
			const newItems = new Map(prevItems);
			newItems.delete(cartItem.id);
			return newItems;
		});

	return (
		<li className='w-[28rem] divide-y rounded border-2 p-5 shadow-lg'>
			<div className='flex items-center gap-x-10 pb-3'>
				<Link href={`/products/${cartItem.category}/${cartItem.id}`} className='contents'>
					<Image
						src={cartItem.image}
						alt='product image'
						placeholder='blur'
						className='h-56 w-auto rounded'
					/>
				</Link>

				<ul className='flex flex-col gap-y-1 font-semibold'>
					<li className='font-secondary text-xl'>{cartItem.name}</li>
					<li className='capitalize text-gray-400'>Color: {cartItem.color}</li>
					<li className='text-gray-400'>Size: L</li>
					<li className='space-x-2'>
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
			</div>

			<div className='flex items-center justify-between pt-3'>
				<div className='flex items-center rounded bg-gray-200 text-black'>
					<button
						disabled={cartItem.quantity <= 0}
						onClick={() => handleChangeQuantity(cartItem.quantity - 1)}
						className='h-8 w-8'
					>
						-
					</button>
					<span className='h-8 w-8 bg-gray-200 flex items-center justify-center'>
						{cartItem.quantity}
					</span>
					<button onClick={() => handleChangeQuantity(cartItem.quantity + 1)} className='h-8 w-8'>
						+
					</button>
				</div>

				<span className='font-semibold'>
					Total: $
					{(getDiscountedValue(cartItem.price, cartItem.discount) * cartItem.quantity).toFixed(2)}
				</span>

				<button
					onClick={removeItem}
					className='flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white'
				>
					<i className='ri-close-fill text-lg'></i>
				</button>
			</div>
		</li>
	);
}

export default function CartItems() {
	const cartItems = useRecoilValue(cartItemsState);
	return (
		<div>
			<h1 className='my-10 text-center font-secondary text-5xl'>Cart</h1>
			<ul className='flex flex-wrap justify-center gap-5'>
				{Array.from(cartItems.values()).map((cartItem, index) => (
					<CartItem key={index} cartItem={cartItem} />
				))}
			</ul>
		</div>
	);
}
