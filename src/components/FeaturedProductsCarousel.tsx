'use client';

import { SLIDES } from '@/mocks';
import { tw } from '@/utils';
import { Transition } from '@headlessui/react';
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useState } from 'react';

const PAUSE_DURATION = 2 * 1000;
const ANIMATION_DURATION = 1 * 1000;

const autoPlaySliderPlugin: KeenSliderPlugin = (slider) => {
	let timeout: NodeJS.Timeout | undefined;
	let mouseOver = false;
	function clearNextTimeout() {
		clearTimeout(timeout);
	}
	function nextTimeout() {
		clearTimeout(timeout);
		if (mouseOver) return;
		timeout = setTimeout(() => slider.next(), PAUSE_DURATION);
	}
	slider.on('created', () => {
		slider.container.addEventListener('mouseover', () => {
			mouseOver = true;
			clearNextTimeout();
		});
		slider.container.addEventListener('mouseout', () => {
			mouseOver = false;
			nextTimeout();
		});
		nextTimeout();
	});
	slider.on('dragStarted', clearNextTimeout);
	slider.on('animationEnded', nextTimeout);
	slider.on('updated', nextTimeout);
};

export default function FeaturedProductsCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [opacities, setOpacities] = useState<number[]>([]);

	const [sliderRef, instanceRef] = useKeenSlider(
		{
			slides: 3,
			loop: true,
			renderMode: 'performance',
			defaultAnimation: {
				duration: ANIMATION_DURATION,
			},
			detailsChanged(slider) {
				const new_opacities = slider.track.details.slides.map((slide) => slide.portion);
				setOpacities(new_opacities);
			},
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
		},

		[autoPlaySliderPlugin]
	);

	const slideButtonClasses = (index: number) =>
		currentSlide === index ? tw`h-2 w-2 bg-black` : tw`h-4 w-4 bg-transparent`;

	return (
		<section>
			<div className='relative flex flex-col md:h-[calc(100vh-80px)]' ref={sliderRef}>
				<div className='relative h-80 md:h-[calc(100vh-80px)]'>
					{SLIDES.map((slide, index) => (
						<Image
							key={index}
							src={slide.image}
							width={1905}
							height={859}
							alt='slider image'
							style={{ opacity: opacities[index] }}
							className='absolute h-80 object-cover md:h-[calc(100vh-80px)]'
						/>
					))}
				</div>

				{SLIDES.map((slide, index) => (
					<Transition
						key={index}
						show={index === currentSlide}
						className='mx-auto flex w-screen -translate-y-10 flex-col items-center gap-10 text-center text-white md:max-w-lg md:-translate-y-14'
					>
						<Transition.Child
							as='span'
							enter='duration-700'
							enterFrom='translate-y-12 opacity-0'
							enterTo='translate-y-0 opacity-100'
							className='flex h-20 w-20 items-center justify-center rounded-full bg-teal-400 text-3xl'
						>
							{slide.price}
						</Transition.Child>
						<Transition.Child
							as='h3'
							enter='delay-500 duration-700'
							enterFrom='translate-y-12 opacity-0'
							enterTo='translate-y-0 opacity-100'
							className='font-secondary text-4xl text-black dark:text-white md:text-6xl md:text-white'
						>
							{slide.title}
						</Transition.Child>
						<Transition.Child
							enter='delay-700 duration-700'
							enterFrom='translate-y-12 opacity-0'
							enterTo='translate-y-0 opacity-100'
						>
							<div className='cursor-pointer rounded border-2 border-black py-3 px-6 font-semibold text-black duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white md:border-white md:text-white md:hover:bg-white md:hover:text-black'>
								SHOP NOW
							</div>
						</Transition.Child>
					</Transition>
				))}

				<ul className='absolute right-3 top-40 -translate-y-1/2 space-y-3 md:top-1/2'>
					{SLIDES.map((_, index) => (
						<li
							key={index}
							className='flex h-4 w-4 items-center justify-center'
							onClick={() => instanceRef.current?.moveToIdx(index)}
						>
							<span
								className={`${slideButtonClasses(
									index
								)} cursor-pointer rounded-full border border-black bg-black duration-300`}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
