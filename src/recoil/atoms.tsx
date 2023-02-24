import { atom } from 'recoil';

export const searchBarOpenState = atom({
	key: 'SearchBarOpen',
	default: false,
});

export const sidebarOpenState = atom({
	key: 'SidebarOpen',
	default: false,
});