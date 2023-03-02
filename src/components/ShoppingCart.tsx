'use client';

import PRODUCTS from '@/mocks/products';
import { shoppingCartOpenState } from '@/recoil/atoms';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

//TODO use dialog headless comp to get keyboard shortcuts
export default function ShoppingCart() {
	const [sidebarOpen, setSidebarOpen] = useRecoilState(shoppingCartOpenState);
	const closeSidebar = () => setSidebarOpen(false);

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
						{PRODUCTS.map((product) => (
							<li key={product.id} className='flex gap-x-3'>
								<div className='flex flex-col items-center text-lg text-black'>
									<button className='h-8 w-8 rounded-t bg-gray-200'>-</button>
									<input
										className='h-8 w-8 bg-gray-200 text-center outline-none'
										type='text'
										defaultValue={1}
									/>
									<button className='h-8 w-8 rounded-b bg-gray-200'>+</button>
								</div>
								<Image
									src={product.image}
									alt='product image'
									placeholder='blur'
									className='h-24 w-auto rounded'
								/>
								<ul>
									<li className='font-semibold'>Tosca Sweater</li>
									<li className='text-gray-400'>Color: Blue</li>
									<li className='text-gray-400'>Size: L</li>
									<li>Price: $46.50</li>
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
									<span>$120.00</span>
								</li>
								<li className='space-y-1'>
									<span>Shipping</span>
									<ul className='ml-10'>
										<li className='flex justify-between'>
											<span className='flex items-center gap-x-1'>
												<input type='radio' name='shipping' />
												<label>Free</label>
											</span>
											<span>-$0</span>
										</li>
										<li className='flex justify-between'>
											<span className='flex items-center gap-x-1'>
												<input type='radio' name='shipping' />
												<label>Express</label>
											</span>
											<span>$30</span>
										</li>
									</ul>
								</li>
								<li className='flex justify-between'>
									<span>Discount</span>
									<span>-$25</span>
								</li>
							</ul>
							<span className='flex justify-between pt-3 font-semibold'>
								<span>Total</span>
								<span>$147.00</span>
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
