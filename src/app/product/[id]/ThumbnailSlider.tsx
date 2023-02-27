'use client';

import prodImg1 from '@/../public/images/product_01.jpg';
import prodImg1b from '@/../public/images/product_01b.jpg';
import prodImg2 from '@/../public/images/product_02.jpg';
import prodImg2b from '@/../public/images/product_02b.jpg';
import prodImg3 from '@/../public/images/product_03.jpg';
import prodImg3b from '@/../public/images/product_03b.jpg';
import { tw } from '@/utils';
import { KeenSliderInstance, KeenSliderPlugin, useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { MutableRefObject, useState } from 'react';

function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove('active');
			});
		}
		function addActive(idx: number) {
			slider.slides[idx].classList.add('active');
		}

		function addClickEvents() {
			slider.slides.forEach((slide, idx) => {
				slide.addEventListener('click', () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx);
				});
			});
		}

		slider.on('created', () => {
			if (!mainRef.current) return;
			addActive(slider.track.details.rel);
			addClickEvents();
			mainRef.current.on('animationStarted', (main) => {
				removeActive();
				const next = main.animator.targetIdx || 0;
				addActive(main.track.absToRel(next));
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
			});
		});
	};
}

export default function ThumbnailSlider() {
	const arr = [prodImg1, prodImg1b, prodImg2, prodImg2b, prodImg3, prodImg3b, prodImg1b, prodImg2];
	const [currentSlide, setCurrentSlide] = useState(0);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
		initial: 0,
		slides: { perView: 1, spacing: 0 },
		renderMode: 'performance',
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
	});
	const [thumbnailRef] = useKeenSlider<HTMLUListElement>(
		{
			initial: 0,
			slides: { perView: 6, spacing: 12 },
			renderMode: 'performance',
			vertical: true,
		},
		[ThumbnailPlugin(instanceRef)]
	);

	const slideButtonClasses = (index: number) =>
		currentSlide === index ? tw`h-2 w-2 bg-black` : tw`h-4 w-4 bg-transparent`;

	const thumbnailClasses = (index: number) =>
		currentSlide === index ? tw`opacity-100` : tw`opacity-60`;

	return (
		<div className='flex h-[600px] flex-row-reverse justify-center gap-x-3'>
			<div className='relative'>
				<ul ref={sliderRef} className='flex w-[450px] overflow-hidden'>
					{arr.map((image, index) => (
						<li key={index} className='keen-slider__slide shrink-0'>
							<Image src={image} alt='product image' placeholder='blur' className='rounded' />
						</li>
					))}
				</ul>

				<ul className='absolute bottom-5 right-1/2 flex translate-x-1/2 gap-x-3'>
					{arr.map((_, index) => (
						<li key={index} className='flex h-4 w-4 items-center justify-center sm:hidden'>
							<span
								onClick={() => instanceRef.current?.moveToIdx(index)}
								className={`${slideButtonClasses(
									index
								)} cursor-pointer rounded-full border border-black bg-black duration-300`}
							/>
						</li>
					))}
				</ul>
			</div>
			<ul ref={thumbnailRef} className='hidden flex-col overflow-hidden sm:flex'>
				{arr.map((image, index) => (
					<li key={index} className={`${thumbnailClasses(index)} keen-slider__slide duration-300`}>
						<Image
							src={image}
							alt='product image'
							placeholder='blur'
							className='h-[90px] w-auto rounded'
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
