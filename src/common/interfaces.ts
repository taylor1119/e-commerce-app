import { StaticImageData } from 'next/image';
import { TCategory } from './types';

export interface IProduct {
	id: number;
	name: string;
	price: number;
	discount: number;
	color: string;
	category: Exclude<TCategory, 'all'>;
	image: StaticImageData;
	altImage: StaticImageData;
	slide: StaticImageData;
}
