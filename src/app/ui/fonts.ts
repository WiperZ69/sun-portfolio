// src/app/fonts.ts

import { Inter, Russo_One } from 'next/font/google'

export const russo = Russo_One({
	subsets: ['cyrillic', 'latin'],
	weight: ['400'],
	variable: '--font-russo',
	display: 'swap',
})

export const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-inter',
	display: 'swap',
})
