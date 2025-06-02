import { inter } from '@/app/ui/fonts'
import type { Metadata } from 'next'
import './globals.css'

import Footer from '@/components/Footer'
import Hero from '@/components/Top'

export const metadata: Metadata = {
	title: 'Моё Портфолио | Web Designer',
	description: 'Дизайнер интерфейсов, инфографики и визуализаций.',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
		other: {
			rel: 'mask-icon',
			url: '/favicon.svg',
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru' className={`${inter.className}`}>
			<body>
				<Hero />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
