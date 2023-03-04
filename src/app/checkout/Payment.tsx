import CostDetails from '@/components/common/CostDetails';

export default function Payment() {
	return (
		<section className='p-5 space-y-5 bg-black text-white'>
			<h1 className='text-center font-semibold'>Select Payment Method</h1>
			<ul className='flex gap-x-3 justify-center'>
				<li className='h-10 w-10 bg-teal-400 rounded-full flex justify-center items-center text-white'>
					<i className='ri-bank-card-line'></i>
				</li>
				<li className='h-10 w-10 bg-teal-400 rounded-full flex justify-center items-center text-white'>
					<i className='ri-paypal-line'></i>
				</li>
				<li className='h-10 w-10 bg-teal-400 rounded-full flex justify-center items-center text-white'>
					<i className='ri-hand-coin-line'></i>
				</li>
			</ul>
			<CostDetails />
		</section>
	);
}
