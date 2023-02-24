'use client';

import { APPARELS, PERFUMES, SHOES, SPECIALS } from '@/constants/brands';
import { sidebarOpenState } from '@/recoil/atoms';
import { tw } from '@/utils';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Sidebar() {
	const [productsMenuOpen, setProductsMenuOpen] = useState(false);
	const [specialsMenuOpen, setSpecialsMenuOpen] = useState(false);
	const toggleProductsMenu = () => {
		setProductsMenuOpen((prev) => !prev);
		setSpecialsMenuOpen(false);
	};
	const toggleSpecialsMenu = () => {
		setSpecialsMenuOpen((prev) => !prev);
		setProductsMenuOpen(false);
	};

	const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenState);
	const closeSidebar = () => setSidebarOpen(false);

	const specialsMenuRotate = specialsMenuOpen ? tw`rotate-0` : tw`rotate-90`;
	const productsMenuRotate = productsMenuOpen ? tw`rotate-0` : tw`rotate-90`;

	useEffect(() => {
		const style = document.body.style;
		if (sidebarOpen) style.overflow = 'hidden';
		else style.overflow = 'auto';

		return () => {
			style.overflow = 'auto';
		};
	}, [sidebarOpen]);

	return (
		<Transition show={sidebarOpen}>
			<Transition.Child
				as={Fragment}
				enterFrom='opacity-0'
				enterTo='opacity-75'
				leaveFrom='opacity-75'
				leaveTo='opacity-0'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<div
					className='fixed top-0 left-0 z-30 h-screen w-screen bg-dark text-xl'
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
					className='fixed left-72 top-3 z-30 ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-teal-400 text-xl text-white'
					onClick={closeSidebar}
				>
					<i className='ri-close-line' />
				</div>
			</Transition.Child>
			<Transition.Child
				as={Fragment}
				enterFrom='-translate-x-72'
				enterTo='translate-x-0'
				leaveFrom='translate-x-0'
				leaveTo='-translate-x-72'
				leave='duration-300 ease-in-out'
				enter='duration-300 ease-in-out'
			>
				<aside className='fixed top-0 left-0 z-30 flex h-screen w-72 flex-col overflow-y-auto bg-white p-5 text-base font-semibold shadow-lg dark:bg-dark'>
					<ul className='space-y-5'>
						<li>
							<Link href='/'>
								<span>Home</span>
							</Link>
						</li>
						<li>
							<div className='flex items-center justify-between'>
								<span>Products</span>
								<i
									className={`ri-arrow-down-s-line ${productsMenuRotate} cursor-pointer transition-transform duration-500`}
									onClick={toggleProductsMenu}
								/>
							</div>

							<Transition
								as={Fragment}
								show={productsMenuOpen}
								unmount={false}
								enterFrom='max-h-0'
								enterTo='max-h-[800px]'
								leaveFrom='max-h-[800px]'
								leaveTo='max-h-0'
								leave='duration-500 ease-in-out'
								enter='duration-500 ease-in-out'
							>
								<div className='space-y-5 overflow-hidden pl-10'>
									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 mt-3 text-black dark:text-white'>Apparel</li>
										{APPARELS.map((apparel, index) => (
											<li key={index} className='text-sm hover:text-black dark:hover:text-white'>
												<Link href='/not-implemented' className='group flex items-center gap-2'>
													<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
													{apparel}
												</Link>
											</li>
										))}
									</ul>

									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 text-black dark:text-white'>Shoes</li>
										{SHOES.map((shoe, index) => (
											<li key={index} className='text-sm hover:text-black dark:hover:text-white'>
												<Link href='/not-implemented' className='group flex items-center gap-2'>
													<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
													{shoe}
												</Link>
											</li>
										))}
									</ul>

									<ul className='space-y-3 text-gray-400'>
										<li className='-ml-5 text-black dark:text-white'>Perfumes</li>
										{PERFUMES.map((perfume, index) => (
											<li key={index} className='text-sm hover:text-black dark:hover:text-white'>
												<Link href='/not-implemented' className='group flex items-center gap-2'>
													<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
													{perfume}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</Transition>
						</li>
						<li>
							<Link href='/not-implemented'>
								<span>Discounts</span>
							</Link>
						</li>
						<li>
							<div className='flex items-center justify-between gap-1'>
								<span>Specials</span>
								<i
									className={`ri-arrow-down-s-line ${specialsMenuRotate} cursor-pointer transition-transform duration-500`}
									onClick={toggleSpecialsMenu}
								/>
							</div>
							<Transition
								as={Fragment}
								show={specialsMenuOpen}
								unmount={false}
								enterFrom='max-h-0'
								enterTo='max-h-[800px]'
								leaveFrom='max-h-[800px]'
								leaveTo='max-h-0'
								leave='duration-500 ease-in-out'
								enter='duration-500 ease-in-out'
							>
								<ul className='overflow-hidden text-gray-400'>
									{SPECIALS.map((perfume, index) => (
										<li
											key={index}
											className='dark:hover:text-whit mt-3 pl-5 text-sm hover:text-black'
										>
											<Link href='/not-implemented' className='group flex items-center gap-2'>
												<span className='-ml-5 h-2 w-2 rounded-full bg-dark opacity-0 duration-300 group-hover:opacity-100 dark:bg-white' />
												{perfume}
											</Link>
										</li>
									))}
								</ul>
							</Transition>
						</li>
						<li>
							<Link href='/not-implemented'>
								<span>Sales</span>
							</Link>
						</li>
					</ul>
					{/* revert color on hover */}
					<div className='mt-auto space-y-3 pt-5 text-center'>
						<div className='cursor-pointer rounded bg-black py-3 px-6 text-white dark:bg-white dark:text-black'>
							LOGIN
						</div>
						<div className='cursor-pointer rounded border-2 border-black py-3 px-6 dark:border-white'>
							REGISTER
						</div>
					</div>
				</aside>
			</Transition.Child>
		</Transition>
	);
}
