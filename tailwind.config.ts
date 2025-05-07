import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0F172A',
				secondary: '#64748B',
				accent: '#3B82F6',
				background: '#F8FAFC',
			},
			fontFamily: {
				inter: ['var(--font-inter)', 'sans-serif'], // класс: font-inter
				russo: ['var(--font-russo)', 'sans-serif'], // класс: font-russo
			},
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(322deg, rgba(137, 140, 171, 0) 0%, #8387c4 100%)',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
		},
	},
	plugins: [],
}

export default config
