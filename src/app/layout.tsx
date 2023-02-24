import Header from '@/components/Header';
import SearchBar from '@/components/Header/SearchBar';
import Sidebar from '@/components/Sidebar';
import { primaryFont, secondaryFont } from '@/fonts';
import { RecoilProvider } from '@/providers/recoil-provider';
import { NextThemeProvider } from '../providers/theme-provider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={`${primaryFont.variable} ${secondaryFont.variable}`}
			suppressHydrationWarning
		>
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

			<body className='font-primary'>
				<NextThemeProvider>
					<RecoilProvider>
						<Header />
						<SearchBar />
						<Sidebar />
						{children}
					</RecoilProvider>
				</NextThemeProvider>
			</body>
		</html>
	);
}
