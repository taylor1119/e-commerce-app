'use client';

import { searchBarOpenState, shoppingCartOpenState } from '@/recoil/atoms';
import { cartStatsState } from '@/recoil/selectors';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function HeaderRight() {
	const SearchBarOpen = useSetRecoilState(searchBarOpenState);
	const setShoppingCartOpen = useSetRecoilState(shoppingCartOpenState);
	const openShoppingCart = () => setShoppingCartOpen(true);
	const cartStats = useRecoilValue(cartStatsState);

	return (
		<ul className='flex w-16 items-center justify-end gap-4 text-xl'>
			<li className='cursor-pointer hover:opacity-50'>
				<i className='ri-search-line' onClick={() => SearchBarOpen(true)} />
			</li>
			<li className='relative cursor-pointer hover:opacity-50' onClick={openShoppingCart}>
				{Boolean(cartStats.itemsNumber) && (
					<span className='absolute left-3 bottom-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
						{cartStats.itemsNumber}
					</span>
				)}
				<i className='ri-shopping-bag-line' />
			</li>
		</ul>
	);
}
