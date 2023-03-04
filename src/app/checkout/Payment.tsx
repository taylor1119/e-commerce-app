import CostDetails from '@/components/common/CostDetails';

export default function Payment() {
	return (
		<section className='space-y-5 bg-black p-5 text-white'>
			<h1 className='text-center font-semibold'>Select Payment Method</h1>
			<ul className='flex justify-center gap-x-3'>
				<li className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-white'>
					<i className='ri-bank-card-line'></i>
				</li>
				<li className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-white'>
					<i className='ri-paypal-line'></i>
				</li>
				<li className='flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-white'>
					<i className='ri-hand-coin-line'></i>
				</li>
			</ul>
			<CostDetails />
		</section>
	);
}
