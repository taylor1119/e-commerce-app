import { TCartItems } from '@/common/types';
import { AtomEffect } from 'recoil';

export const cartItemsPersistEffect: AtomEffect<TCartItems> = ({ setSelf, onSet }) => {
	if (typeof window !== 'undefined') {
		const savedValue = localStorage.getItem('cartItems');
		if (savedValue != null) {
			setSelf(new Map(JSON.parse(savedValue)));
		}

		onSet((newValue, _, isReset) => {
			isReset
				? localStorage.removeItem('cartItems')
				: localStorage.setItem('cartItems', JSON.stringify(Array.from(newValue.entries())));
		});
	}
};
