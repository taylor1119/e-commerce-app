import { IProduct } from '@/common/interfaces';
import { TCartItems, TShippingPlan } from '@/common/types';
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

export const shippingPlanState = atom<TShippingPlan>({
	key: 'ShippingPlan',
	default: 'free',
});

export const cartItemsState = atom<TCartItems>({
	key: 'CartItems',
	default: new Map(),
	effects: [cartItemsPersistEffect],
});
