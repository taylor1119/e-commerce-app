'use client';

import { compareItemsState } from '@/recoil/atoms';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Tooltip from './common/Tooltip';

export default function CompareHoverButton() {
	const [hasCompareItems, setHasCompareItems] = useState(false);
	const compareItemsNumber = useRecoilValue(compareItemsState).length;
	useEffect(() => setHasCompareItems(Boolean(compareItemsNumber)), [compareItemsNumber]);

	if (!hasCompareItems) return null;
	return (
		<Tooltip title='Compare' postilion='top'>
			<Link
				href='/compare'
				className='group fixed bottom-2 left-2 hidden h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-xl text-white sm:flex'
			>
				<i className='ri-arrow-left-right-fill' />
			</Link>
			<span className='fixed bottom-8 left-9 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs font-semibold text-white'>
				{compareItemsNumber}
			</span>
		</Tooltip>
	);
}
