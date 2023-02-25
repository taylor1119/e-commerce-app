import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/Header/SearchBar';
import Sidebar from '@/components/Sidebar';
import ThemeButton from '@/components/ThemeButton';
import { primaryFont, secondaryFont } from '@/fonts';
import { RecoilProvider } from '@/providers/recoil-provider';
import type { Metadata } from 'next';
import { NextThemeProvider } from '../providers/theme-provider';
import './globals.css';

export const metadata: Metadata = {
	title: 'EStore',
	description: 'E-Commerce app demo using NextJS and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${primaryFont.variable} ${secondaryFont.variable}`}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head>
				{/* RemixIcon */}
				<link
					href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
					rel='stylesheet'
					crossOrigin='anonymous'
				/>
			</head>

			<body className='flex min-h-screen flex-col font-primary'>
				<NextThemeProvider>
					<RecoilProvider>
						<Header />
						<SearchBar />
						<Sidebar />
						{children}
						<Footer />
						<ThemeButton />
					</RecoilProvider>
				</NextThemeProvider>
			</body>
		</html>
	);
}
