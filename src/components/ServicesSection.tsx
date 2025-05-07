'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	}

	return (
		<section className='py-8 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12'>
			<div className='max-w-5xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-2xl md:text-5xl font-[Russo_One] text-primary mb-10'
				>
					Что я предлагаю:
				</motion.h2>

				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 gap-6'
				>
					{/* Карточка 1 */}
					<motion.div
						variants={cardVariants}
						whileHover={{ scale: 1 }}
						className='group bg-[#898CAB] text-[#e6e7f3] rounded-2xl p-6 shadow-lg relative hover:bg-[#8387C4] transition-all duration-300'
					>
						<h3 className='text-[#F5F5F8] text-lg md:text-4xl font-medium mb-4'>
							WEB дизайн
						</h3>
						<p className='mb-3 text-base md:text-3xl'>
							Создаю удобные и{'\u00A0'}стильные сайты, которые работают на
							{'\u00A0'}любом устройстве.
						</p>
						<p className='text-base md:text-3xl'>
							Специализируюсь на{'\u00A0'}лендингах, корпоративных сайтах и
							{'\u00A0'}интернет-магазинах — делаю их{'\u00A0'}не{'\u00A0'}
							только красивыми, но{'\u00A0'}и{'\u00A0'}по-настоящему удобными
							для{'\u00A0'}пользователей.
						</p>
						<Image
							className='absolute -bottom-5.5 -right-0.5 md:-bottom-7 md:-right-7 group-hover:bg-[url(/fArrow.svg)] transition-all duration-300 bg-no-repeat bg-bottom pointer-events-none'
							src='/gArrow.svg'
							alt='arrow'
							width={54}
							height={54}
						/>
					</motion.div>

					{/* Карточка 2 */}
					<motion.div
						variants={cardVariants}
						whileHover={{ scale: 1 }}
						className='group bg-[#898CAB] text-[#e6e7f3] rounded-2xl p-6 shadow-lg relative hover:bg-[#8387C4] transition-all duration-300'
					>
						<h3 className='text-[#F5F5F8] text-lg md:text-4xl font-medium mb-4'>
							Инфографика и{'\u00A0'}визуализация
						</h3>
						<p className='mb-3 text-base md:text-3xl'>
							Беру скучные цифры и{'\u00A0'}превращаю их{'\u00A0'}в{'\u00A0'}
							яркие визуальные истории. Делаю инфографику, которая действительно
							работает — для{'\u00A0'}маркетплейсов, сайтов и{'\u00A0'}
							презентаций.
						</p>
						<p className='text-base md:text-3xl'>
							Мои диаграммы и{'\u00A0'}схемы говорят сами за{'\u00A0'}себя,
							причём одинаково хорошо смотрятся и{'\u00A0'}на{'\u00A0'}экране, и
							{'\u00A0'}на{'\u00A0'}бумаге.
						</p>
						<Image
							className='absolute -bottom-5.5 -right-0.5 md:-bottom-7 md:-right-7 group-hover:bg-[url(/fArrow.svg)] transition-all duration-300 bg-no-repeat bg-bottom pointer-events-none'
							src='/gArrow.svg'
							alt='arrow'
							width={54}
							height={54}
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
