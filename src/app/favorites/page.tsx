import Link from 'next/link';
import FavoriteItems from './FavoriteItems';

export default function page() {
	return (
		<main>
			<section className='py-14'>
				{/*TODO Change to ul */}
				<div className='text flex justify-center gap-x-3 px-5 pb-5 capitalize'>
					<Link href='/'>Home</Link>
					<i className='ri-arrow-right-s-line'></i>
					<span className='overflow-hidden text-ellipsis whitespace-nowrap'>Favorites</span>
				</div>
				<h1 className='my-10 text-center font-secondary text-5xl'>Favorites</h1>
				<FavoriteItems />
			</section>
		</main>
	);
}
