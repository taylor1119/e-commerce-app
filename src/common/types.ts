import { CATEGORIES } from '@/constants';
import { ICartItem } from './interfaces';

export type TCategory = (typeof CATEGORIES)[number];

export type TCartItems = Map<number, ICartItem>;
