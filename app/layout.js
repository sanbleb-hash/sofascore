import './globals.css';
import { Noto_Sans_Miao } from 'next/font/google';
import TopNav from './components/navigation/Top-Nav';

const NotoSans = Noto_Sans_Miao({ subsets: ['latin'], weight: '400' });

export const metadata = {
	title: 'sofascore clone',
	description: 'curalted sports app ',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`bg-slate-100  w-screen min-h-screen font-${NotoSans.className}`}
			>
				<TopNav />
				<main className=' min-h-screen'>{children}</main>
			</body>
		</html>
	);
}
