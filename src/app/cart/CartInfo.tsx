import CostDetails from '@/components/common/CostDetails';
import Link from 'next/link';

export default function CartInfo() {
	return (
		<section className='mx-auto max-w-lg space-y-5 p-5 text-lg'>
			<CostDetails />
			<div className='space-y-3 font-semibold'>
				<Link
					href='/checkout'
					type='button'
					className='ml-auto flex w-40 items-center justify-center rounded bg-teal-400 py-2 text-white'
				>
					Checkout
				</Link>
			</div>
		</section>
	);
}
