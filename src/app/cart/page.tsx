import Link from 'next/link';
import CartInfo from './CartInfo';
import CartItems from './CartItems';

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
				<CartItems />
			</section>
			<CartInfo />
		</main>
	);
}
