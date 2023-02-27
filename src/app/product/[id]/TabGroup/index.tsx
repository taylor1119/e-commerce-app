'use client';

import avatar1 from '@/../public/images/ig_01.jpg';
import avatar2 from '@/../public/images/ig_02.jpg';
import avatar3 from '@/../public/images/ig_03.jpg';
import avatar4 from '@/../public/images/ig_04.jpg';
import avatar5 from '@/../public/images/ig_05.jpg';
import { IProduct } from '@/common/interfaces';
import { Tab } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';
import CustomTab from './CustomTab';
import DetailsTab from './DetailsTab';
import ReviewsTab from './ReviewsTab';
import ShippingTab from './ShippingTab';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

function Review({ image }: { image: StaticImageData }) {
	return (
		<div className='flex gap-5 px-5 pt-5'>
			<Image src={image} alt='user avatar' placeholder='blur' className='h-16 w-16 rounded-full' />
			<div className='space-y-3'>
				<div>
					{/* cSpell:disable */}
					<h3>Sawashiro</h3>
					<div className='space-x-2'>
						<i className='ri-star-fill' />
						<i className='ri-star-fill' />
						<i className='ri-star-fill' />
						<i className='ri-star-half-fill' />
					</div>
					<h6>On Aug 14, 2023</h6>
				</div>
				<div className='space-y-3'>
					<h3>Product name</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa dolores officiis,
						quis possimus molestiae accusamus nostrum ab animi, corrupti natus hic inventore et!
						Temporibus, corrupti quae? Quidem, nisi in?
					</p>
					{/* cSpell:enable */}
				</div>
			</div>
		</div>
	);
}

export default function TabGroup({ product }: { product: IProduct }) {
	return (
		<section className='border border-gray-50 bg-gray-100 py-14 dark:border-slate-800 dark:bg-slate-900'>
			<Tab.Group as='div' className='mx-auto max-w-5xl px-5'>
				<Tab.List
					as='nav'
					className='relative flex justify-center gap-x-10 pb-14 font-semibold sm:text-lg'
				>
					<Tab className='relative outline-none'>
						Product details
						<hr className='invisible absolute right-1/2 -bottom-[17px] z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
					</Tab>
					<Tab className='relative outline-none'>
						Custom
						<hr className='invisible absolute right-1/2 -bottom-[17px] z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
					</Tab>
					<Tab className='relative outline-none'>
						Reviews
						<span className='bg-black-400 absolute -right-4 bottom-5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-semibold text-white'>
							5
						</span>
						<hr className='invisible absolute right-1/2 -bottom-[17px] z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
					</Tab>
					<Tab className='relative outline-none'>
						Shipping
						<hr className='invisible absolute right-1/2 -bottom-[17px] z-10 w-0 translate-x-1/2 rounded border-2 border-black duration-300 ui-selected:visible ui-selected:w-full dark:border-white' />
					</Tab>
					<hr className='absolute bottom-10 w-full border border-gray-200 dark:border-gray-600' />
				</Tab.List>
				<Tab.Panels className='px-5'>
					<DetailsTab product={product} />
					<CustomTab />
					<ReviewsTab />
					<ShippingTab />
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
}
