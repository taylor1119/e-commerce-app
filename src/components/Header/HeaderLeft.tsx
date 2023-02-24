'use client';

import { sidebarOpenState } from '@/recoil/atoms';
import { useSetRecoilState } from 'recoil';

export default function HeaderLeft() {
	const setSidebarOpen = useSetRecoilState(sidebarOpenState);
	const openSidebar = () => setSidebarOpen(true);

	return (
		<div className='text-xl'>
			<div className='w-14 cursor-pointer hover:opacity-50 md:hidden' onClick={openSidebar}>
				<i className='ri-menu-line' />
			</div>

			<ul className='hidden w-16 items-center gap-4 md:flex'>
				<li className='cursor-pointer hover:opacity-50'>
					<i className='ri-user-line' />
				</li>
				<li className='relative cursor-pointer hover:opacity-50'>
					<span className='absolute left-3 bottom-4 flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-xs font-semibold text-white'>
						7
					</span>
					<i className='ri-star-line' />
				</li>
			</ul>
		</div>
	);
}
