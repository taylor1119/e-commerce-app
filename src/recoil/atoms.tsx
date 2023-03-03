import { IProduct } from '@/common/interfaces';
import { TCartItems } from '@/common/types';
import { atom } from 'recoil';
import { cartItemsPersistEffect } from './effects';

export const searchBarOpenState = atom({
	key: 'SearchBarOpen',
	default: false,
});

export const sidebarOpenState = atom({
	key: 'SidebarOpen',
	default: false,
});

export const shoppingCartOpenState = atom({
	key: 'ShoppingCartOpen',
	default: false,
});

export const shippingPlanState = atom<'free' | 'express'>({
	key: 'shippingPlan',
	default: 'free',
});

export const cartItemsState = atom<TCartItems>({
	key: 'cartItems',
	default: new Map(),
	effects: [cartItemsPersistEffect],
});
