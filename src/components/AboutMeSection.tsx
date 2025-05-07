'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutMeSection() {
	return (
		<section className='py-8 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12'>
			<div className='max-w-5xl mx-auto flex flex-col gap-20'>
				{/* Блок 1: Приветствие */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true }}
					className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20'
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='md:min-w-118 w-2/12 lg:w-1/2 flex md:flex-col items-center justify-center lg:items-center text-center lg:text-left gap-6 md:gap-30'
					>
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
					</motion.div>

					<motion.p
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
						className='lg:w-1/2 text-xl sm:text-3xl text-secondary leading-relaxed font-inter text-center lg:text-left'
					>
						Я — дизайнер из Иркутска, создающий визуальные решения для цифровых
						продуктов. Специализируюсь на инфографике, веб-интерфейсах и
						презентациях.
						<br />
						<br />
						Моя философия: баланс эстетики и функциональности. Работаю, чтобы
						продукты не только привлекали внимание, но и превращали сложное в
						простое.
					</motion.p>
				</motion.div>

				{/* Блок 2: Факты обо мне */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true }}
					className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20'
				>
					<motion.div
						initial={{ rotate: -5, opacity: 0 }}
						whileInView={{ rotate: 0, opacity: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='w-2/12 lg:w-1/2 flex md:flex-col items-center lg:items-center justify-center text-center lg:text-left gap-6 md:gap-30'
					>
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
					</motion.div>

					<motion.ul
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
						className='lg:w-1/2 text-xl sm:text-3xl text-secondary space-y-6 font-inter'
					>
						{[
							{ img: '/one.png', text: 'Визуализирую даже списки покупок' },
							{
								img: '/two.png',
								text: 'В детстве рисовала на обоях… Теперь это называется UX-скетчинг',
							},
							{
								img: '/three.png',
								text: 'Калининград-Москва: собираю города по кусочкам, как арт-проект',
							},
							{
								img: '/four.png',
								text: 'Могу выписывать узоры неделю, но собрать чемодан — за час',
							},
						].map((item, index) => (
							<motion.li
								key={index}
								className='flex gap-5 items-center'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
								viewport={{ once: true }}
							>
								<Image
									src={item.img}
									alt={`num-${index}`}
									width={40}
									height={77}
								/>
								<span>{item.text}</span>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</div>
		</section>
	)
}
