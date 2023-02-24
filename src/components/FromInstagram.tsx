import Image from 'next/image';
import Link from 'next/link';

const INSTAGRAM_PHOTOS = [
	'/images/ig_01.jpg',
	'/images/ig_02.jpg',
	'/images/ig_03.jpg',
	'/images/ig_04.jpg',
	'/images/ig_05.jpg',
];

export default function FromInstagram() {
	return (
		<section>
			<h1 className='pt-14 text-center font-secondary text-4xl'>Popular Instagram photos</h1>
			<ul className='flex snap-x snap-mandatory justify-start overflow-x-auto py-14 xl:justify-center'>
				{INSTAGRAM_PHOTOS.map((photo, index) => (
					<li className='group relative shrink-0 snap-center xl:shrink' key={index}>
						<Image width={320} height={320} alt='instagram photo' src={photo} quality={100} />
						<div className='absolute bottom-5 z-20 flex w-full translate-y-5 justify-center gap-4 text-lg opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
							<Link
								href='/not-implemented'
								className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-black duration-300 hover:bg-black hover:text-white'
							>
								<i className='ri-instagram-fill' />
							</Link>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
