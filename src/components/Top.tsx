'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
	return (
		<section className='min-h-screen bg-gradient-to-r from-[#8387c4] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-0'>
			<div className='max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0 relative'>
				{/* Левая часть: текст */}
				<motion.div
					className='text-center md:text-left w-full md:w-1/2 space-y-8 z-10'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#CDCFE7] drop-shadow-md'>
						WEB{' '}
						<span className='text-[#3A3E6D] font-["Inter"] text-4xl sm:text-5xl md:text-6xl'>
							portfolio
						</span>{' '}
						<br />
						DESIGNER
					</h1>
					<Link
						href='#about'
						className="inline-block bg-[#3A3E6D] text-[#E6E7F3] font-['Russo_One'] py-4 px-8 sm:py-5 sm:px-10 rounded-4xl hover:bg-[#8387C4] transition duration-300 text-2xl sm:text-3xl md:text-4xl hover:scale-105"
					>
						Узнать больше
					</Link>
				</motion.div>

				{/* Правая часть: изображение */}
				<motion.div
					className='w-full md:w-1/2 flex justify-center md:justify-end'
					initial={{ opacity: 0, x: 60 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
				>
					<Image
						src='/top_me.png'
						alt='Web Designer'
						className='drop-shadow-md w-[70%] sm:w-[60%] md:w-auto h-auto'
						priority
						width={676}
						height={686}
					/>
				</motion.div>
			</div>
		</section>
	)
}
