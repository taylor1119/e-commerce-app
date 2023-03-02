import { IProduct } from '@/common/interfaces';
import PRODUCTS from '@/mocks/products';
import Image from 'next/image';
import Link from 'next/link';

const MIN_QYT = 1;
const MAX_QTY = 5;

function CartItem({ product }: { product: IProduct }) {
	const qty = Math.floor(Math.random() * (MAX_QTY - MIN_QYT) + MIN_QYT);
	return (
		<li className='w-[28rem] divide-y rounded border-2 p-5 shadow-lg'>
			<div className='flex items-center gap-x-10 pb-3'>
				<Link href={`/products/${product.category}/${product.id}`} className='contents'>
					<Image
						src={product.image}
						alt='product image'
						placeholder='blur'
						className='h-56 w-auto rounded'
					/>
				</Link>

				<ul className='flex flex-col gap-y-1 font-semibold'>
					<li className='font-secondary text-xl'>{product.name}</li>
					<li className='capitalize text-gray-400'>Color: {product.color}</li>
					<li className='text-gray-400'>Size: L</li>
					<li>Price: ${product.price.toFixed(2)}</li>
				</ul>
			</div>

			<div className='flex items-center justify-between pt-3'>
				<div className='flex items-center rounded bg-gray-200 text-black'>
					<button className='h-8 w-8'>-</button>
					<input
						className='h-8 w-8 bg-slate-200 text-center outline-none'
						type='text'
						defaultValue={qty}
					/>
					<button className='h-8 w-8'>+</button>
				</div>

				<span className='font-semibold'>Total: ${(qty * product.price).toFixed(2)}</span>

				<button className='flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white'>
					<i className='ri-close-fill text-lg'></i>
				</button>
			</div>
		</li>
	);
}

export default function page() {
	return (
		<main>
			<section className='py-14'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>Cart</span>
				</div>
				<div>
					<h1 className='my-10 text-center font-secondary text-5xl'>Cart</h1>
					<ul className='flex flex-wrap justify-center gap-5'>
						{PRODUCTS.map((product) => (
							<CartItem key={product.id} product={product} />
						))}
					</ul>
				</div>
			</section>
			<section className='mx-auto max-w-lg space-y-5 p-5 text-lg'>
				<div className='flex justify-between rounded border bg-white p-2 dark:bg-dark'>
					<input type='text' placeholder='Coupon' className='w-40 bg-transparent outline-none' />
					<button className='rounded bg-slate-500 px-5 py-1 text-white'>Apply</button>
				</div>
				<div className='divide-y px-2'>
					<ul className='space-y-1 pb-5 text-gray-400'>
						<li className='flex justify-between'>
							<span>Sub-Total</span>
							<span>$120.00</span>
						</li>
						<li className='space-y-1'>
							<span>Shipping</span>
							<ul className='ml-10'>
								<li className='flex justify-between'>
									<span className='flex items-center gap-x-1'>
										<input type='radio' name='shipping' />
										<label>Free</label>
									</span>
									<span>-$0</span>
								</li>
								<li className='flex justify-between'>
									<span className='flex items-center gap-x-1'>
										<input type='radio' name='shipping' />
										<label>Express</label>
									</span>
									<span>$30</span>
								</li>
							</ul>
						</li>
						<li className='flex justify-between'>
							<span>Discount</span>
							<span>-$25</span>
						</li>
					</ul>
					<span className='flex justify-between pt-5 font-semibold'>
						<span>Total</span>
						<span>$147.00</span>
					</span>
				</div>
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
		</main>
	);
}
