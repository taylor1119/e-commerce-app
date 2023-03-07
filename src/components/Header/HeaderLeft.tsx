'use client';

import { sidebarOpenState, wishlistItemsState } from '@/recoil/atoms';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function HeaderLeft() {
	const setSidebarOpen = useSetRecoilState(sidebarOpenState);
	const openSidebar = () => setSidebarOpen(true);
	const wishlistItemsNumber = useRecoilValue(wishlistItemsState).length;
	const [hasWishlistItems, setHasWishlistItems] = useState(false);
	useEffect(() => setHasWishlistItems(Boolean(wishlistItemsNumber)), [wishlistItemsNumber]);

	return (
		<ul className='flex w-16 items-center justify-start gap-4 text-xl'>
			<li className='cursor-pointer hover:opacity-50 md:hidden' onClick={openSidebar}>
				<i className='ri-menu-line' />
			</li>
			<li className='hidden cursor-pointer hover:opacity-50 md:block'>
				<i className='ri-user-line' />
			</li>
			<li className='relative cursor-pointer hover:opacity-50 md:block'>
				<Link href='/wishlist'>
					{hasWishlistItems && (
						<span className='absolute left-3 bottom-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
							{wishlistItemsNumber}
						</span>
					)}
					<i className='ri-star-line' />
				</Link>
			</li>
		</ul>
	);
}
