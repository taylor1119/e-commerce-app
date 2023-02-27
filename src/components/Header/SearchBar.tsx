'use client';

import { searchBarOpenState } from '@/recoil/atoms';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { useRecoilState } from 'recoil';

//TODO use dialog headless comp to get keyboard shortcuts
export default function SearchBar() {
	const [searchBarOpen, setSearchBarOpen] = useRecoilState(searchBarOpenState);
	const closeSearchBar = () => setSearchBarOpen(false);

	useEffect(() => {
		const style = document.body.style;
		if (searchBarOpen) style.overflow = 'hidden';
		else style.overflow = 'auto';

		return () => {
			style.overflow = 'auto';
		};
	}, [searchBarOpen]);

	return (
		<Transition
			as={Fragment}
			show={searchBarOpen}
			enterFrom='opacity-0'
			enterTo='opacity-100'
			enter='duration-300'
			leave='duration-300'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className='fixed top-0 left-0 z-20 h-screen w-screen text-xl'>
				<form className='flex h-20 items-center gap-4 rounded bg-white p-5 dark:bg-dark'>
					<i className='ri-search-line' />
					<input
						className='flex-grow rounded bg-transparent focus:outline-0'
						type='text'
						placeholder='Search Products'
					/>
					<i className='ri-close-line cursor-pointer' onClick={closeSearchBar} />
				</form>
				<div className='z-20 h-full bg-black/75' />
			</div>
		</Transition>
	);
}
