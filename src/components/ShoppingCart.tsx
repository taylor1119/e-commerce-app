'use client';

import { ICartItem } from '@/common/interfaces';
import { cartItemsState, shippingPlanState, shoppingCartOpenState } from '@/recoil/atoms';
import { cartStatsState } from '@/recoil/selectors';
import { getDiscountedValue } from '@/utils';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

//TODO use dialog headless comp to get keyboard shortcuts
export default function ShoppingCart() {
	const [sidebarOpen, setSidebarOpen] = useRecoilState(shoppingCartOpenState);
	const [shippingPlan, setShippingPlan] = useRecoilState(shippingPlanState);
	const cartStats = useRecoilValue(cartStatsState);
	const [cartItems, setCartItems] = useRecoilState(cartItemsState);

	const closeSidebar = () => setSidebarOpen(false);

	const handleChangeQuantity = (cartItem: ICartItem, quantity: number) => {
		setCartItems((prevItems) => {
			const newItems = new Map(prevItems);
			cartItem.quantity <= 0
				? newItems.delete(cartItem.id)
				: newItems.set(cartItem.id, { ...cartItem, quantity });
			return newItems;
		});
	};

	return (
		<Transition show={sidebarOpen}>
			<Transition.Child
				as={Fragment}
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<div
					className='fixed top-0 left-0 z-30 h-screen w-screen bg-black/75 text-xl'
					onClick={closeSidebar}
				/>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='opacity-0'
				enterTo='opacity-100'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<div
					className='fixed right-80 top-3 z-30 mr-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-400 text-xl text-white'
					onClick={closeSidebar}
				>
					<i className='ri-close-line' />
				</div>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='translate-x-80'
				enterTo='translate-x-0'
				leaveFrom='translate-x-0'
				leaveTo='translate-x-80'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<aside className='fixed top-0 right-0 z-30 flex h-screen w-80 flex-col gap-y-5 overflow-y-auto bg-white text-base shadow-lg dark:bg-dark'>
					<h3 className='px-5 pt-5 font-secondary text-3xl'>Shopping Cart</h3>
					<ul className='space-y-3 overflow-auto pl-5'>
						{Array.from(cartItems.values()).map((cartItem, index) => (
							<li key={index} className='flex gap-x-3 text-sm'>
								<div className='flex flex-col items-center text-lg text-black'>
									<button
										disabled={cartItem.quantity <= 0}
										onClick={() => handleChangeQuantity(cartItem, cartItem.quantity - 1)}
										className='h-8 w-8 rounded-t bg-gray-200'
									>
										-
									</button>
									<span className='h-8 w-8 bg-gray-200 flex items-center justify-center'>
										{cartItem.quantity}
									</span>
									<button
										onClick={() => handleChangeQuantity(cartItem, cartItem.quantity + 1)}
										className='h-8 w-8 rounded-b bg-gray-200'
									>
										+
									</button>
								</div>
								<Image
									src={cartItem.image}
									alt='product image'
									placeholder='blur'
									className='h-24 w-auto rounded'
								/>
								<ul className='flex flex-col'>
									<li className='font-semibold'>{cartItem.name}</li>
									<li className='text-gray-400 capitalize'>Color: {cartItem.color}</li>
									<li className='text-gray-400'>Size: L</li>
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
						))}
					</ul>
					{/*TODO revert color on hover */}
					<div className='mt-auto space-y-3 border border-gray-50 bg-gray-100 p-5 dark:border-slate-800 dark:bg-slate-900'>
						<div className='flex justify-between rounded border bg-white p-2 dark:bg-dark'>
							<input
								type='text'
								placeholder='Coupon'
								className='w-40 bg-transparent outline-none'
							/>
							<button className='rounded bg-slate-500 px-5 py-1 text-white'>Apply</button>
						</div>
						<div className='divide-y px-2'>
							<ul className='space-y-1 pb-3 text-gray-400'>
								<li className='flex justify-between'>
									<span>Sub-Total</span>
									<span>{cartStats.subTotal}</span>
								</li>
								<li className='space-y-1'>
									<span>Shipping</span>
									<ul className='ml-10'>
										<li className='flex justify-between'>
											<span className='flex items-center gap-x-1'>
												<input
													type='radio'
													name='shipping'
													value='free'
													checked={shippingPlan === 'free'}
													onClick={() => setShippingPlan('free')}
												/>
												<label>Free</label>
											</span>
											<span>$0</span>
										</li>
										<li className='flex justify-between'>
											<span className='flex items-center gap-x-1'>
												<input
													type='radio'
													name='shipping'
													value='express'
													checked={shippingPlan === 'express'}
													onClick={() => setShippingPlan('express')}
												/>
												<label>Express</label>
											</span>
											<span>$30</span>
										</li>
									</ul>
								</li>
								<li className='flex justify-between'>
									<span>Discount</span>
									<span>-${cartStats.totalDiscount}</span>
								</li>
							</ul>
							<span className='flex justify-between pt-3 font-semibold'>
								<span>Total</span>
								<span>${cartStats.totalPrice}</span>
							</span>
						</div>
						<div className='space-y-3 font-semibold'>
							<Link
								href='/checkout'
								type='button'
								className='flex w-full items-center justify-center rounded bg-teal-400 py-2 text-white'
								onClick={closeSidebar}
							>
								Checkout
							</Link>

							<Link
								href='/cart'
								type='button'
								className='flex w-full items-center justify-center rounded border border-black py-2 dark:border-white'
								onClick={closeSidebar}
							>
								View Cart
							</Link>
						</div>
					</div>
				</aside>
			</Transition.Child>
		</Transition>
	);
}
