'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

export default function AboutMeSection() {
	return (
		<section className='py-8 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12'>
			<motion.div
				className='max-w-5xl mx-auto flex flex-col gap-8 md:gap-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
			>
				{/* Блок 1: Приветствие */}
				<motion.div
					className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20'
					variants={fadeUp}
				>
					<div className='md:min-w-118 w-2/12 lg:w-1/2 flex md:flex-col items-center justify-center lg:items-center text-center lg:text-left gap-6 md:gap-30'>
						<Image
							src='/emoji_hello.png'
							alt='emoji hello'
							width={240}
							height={243}
							quality={100}
						/>
						<h2 className='order-first text-2xl md:text-[46px] font-bold text-primary font-["Russo_One"]'>
							Давай{'\u00A0'}знакомиться
						</h2>
					</div>

					<p className='lg:w-1/2 text-xl sm:text-3xl text-secondary leading-relaxed font-inter text-center lg:text-left'>
						Я — дизайнер из Иркутска, создающий визуальные решения для цифровых
						продуктов. Специализируюсь на инфографике, веб-интерфейсах и
						презентациях.
						<br />
						<br />
						Моя философия: баланс эстетики и функциональности. Работаю, чтобы
						продукты не только привлекали внимание, но и превращали сложное в
						простое.
					</p>
				</motion.div>

				{/* Блок 2: Факты обо мне */}
				<motion.div
					className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20'
					variants={fadeUp}
				>
					<div className='w-2/12 lg:w-1/2 flex md:flex-col items-center lg:items-center justify-center text-center lg:text-left gap-6 md:gap-30'>
						<Image
							src='/emoji_peek.png'
							alt='emoji peek'
							width={220}
							height={280}
							quality={100}
						/>
						<h2 className='order-first text-xl sm:text-5xl font-bold text-primary font-["Russo_One"]'>
							Факты{'\u00A0'}обо{'\u00A0'}мне
						</h2>
					</div>

					<ul className='lg:w-1/2 text-xl sm:text-3xl text-secondary space-y-6 font-inter'>
						{[
							'Визуализирую даже списки покупок',
							'В детстве рисовала на обоях… Теперь это называется UX-скетчинг',
							'Калининград-Москва: собираю города по кусочкам, как арт-проект',
							'Могу выписывать узоры неделю, но собрать чемодан — за час',
						].map((text, index) => (
							<motion.li
								key={index}
								className='flex gap-5 items-center'
								variants={fadeUp}
							>
								<Image
									src={`/${['one', 'two', 'three', 'four'][index]}.png`}
									alt={`number ${index + 1}`}
									width={40}
									height={77}
									className='w-[22px] h-[30px] md:w-auto md:h-auto object-contain'
								/>
								<span>{text}</span>
							</motion.li>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</section>
	)
}
