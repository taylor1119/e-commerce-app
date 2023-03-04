'use client';

import { shippingPlanState } from '@/recoil/atoms';
import { cartStatsState } from '@/recoil/selectors';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function CostDetails() {
	const cartStats = useRecoilValue(cartStatsState);
	const [shippingPlan, setShippingPlan] = useRecoilState(shippingPlanState);

	return (
		<>
			<div className='flex justify-between rounded border bg-white p-2 dark:bg-dark'>
				<input type='text' placeholder='Coupon' className='w-40 bg-transparent outline-none' />
				<button className='rounded bg-slate-500 px-5 py-1 text-white'>Apply</button>
			</div>
			<div className='divide-y px-2'>
				<ul className='space-y-1 pb-5 text-gray-400'>
					<li className='flex justify-between'>
						<span>Sub-Total</span>
						<span>${cartStats.subTotal.toFixed(2)}</span>
					</li>
					<li className='space-y-1'>
						<span>Shipping</span>
						<ul className='ml-10'>
							<li className='flex justify-between'>
								<span className='flex items-center gap-x-1'>
									<input
										type='radio'
										name='free'
										value='free'
										checked={shippingPlan === 'free'}
										onClick={() => setShippingPlan('free')}
									/>
									<label>Free</label>
								</span>
								<span>-$0</span>
							</li>
							<li className='flex justify-between'>
								<span className='flex items-center gap-x-1'>
									<input
										type='radio'
										name='express'
										value='express'
										checked={shippingPlan === 'express'}
										onClick={() => setShippingPlan('express')}
									/>
									<label>Express</label>
								</span>
								<span>$30</span>
							</li>
						</ul>
					</li>
					<li className='flex justify-between'>
						<span>Discount</span>
						<span>{cartStats.totalDiscount}</span>
					</li>
				</ul>
				<span className='flex justify-between pt-5 font-semibold'>
					<span>Total</span>
					<span>${cartStats.totalPrice.toFixed(2)}</span>
				</span>
			</div>
		</>
	);
}
