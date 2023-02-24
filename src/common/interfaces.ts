import { TTag } from './types';

export interface IProduct {
	id: string;
	name: string;
	price: number;
	image1: string;
	image2: string;
	discount: number;
	tags: TTag[];
}
