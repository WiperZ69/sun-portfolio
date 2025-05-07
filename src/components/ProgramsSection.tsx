'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const tools = [
	{
		name: 'Figma',
		icon: '/icons/figma.svg',
		description:
			'Инструмент для создания интерфейсов, прототипов и дизайна веб-продукции. Подходит для командной работы, поддерживает векторную графику и адаптивный дизайн.',
	},
	{
		name: 'Adobe Illustrator',
		icon: '/icons/illustrator.svg',
		description:
			'Программа для работы с векторной графикой. Используется для создания логотипов, иконок, иллюстраций и печатных материалов.',
	},
	{
		name: 'Adobe Photoshop',
		icon: '/icons/photoshop.svg',
		description:
			'Редактор для работы с растровой графикой. Подходит для обработки фото, создания коллажей, дизайна баннеров и сложных визуальных композиций.',
	},
	{
		name: 'Power Point',
		icon: '/icons/powerpoint.svg',
		description:
			'Инструмент для создания презентаций. Позволяет разрабатывать слайды с графиками, анимацией и интерактивными элементами.',
	},
]

export default function Tools() {
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
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
	}

	return (
		<section className='px-4 py-6 sm:py-12 mx-auto max-w-5xl'>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className='text-2xl md:text-5xl font-bold mb-8 font-[Russo_One]'
			>
				Программы, в которых я работаю:
			</motion.h2>

			<motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='grid grid-cols-1 sm:grid-cols-2 gap-6 group'
			>
				{tools.map(tool => (
					<motion.div
						key={tool.name}
						variants={cardVariants}
						className='
							bg-[#C6C6DB] text-black p-6 rounded-2xl flex flex-col gap-2 
							transition-all duration-300 ease-in-out 
							group-hover:blur-[3px] hover:!blur-none
						'
					>
						<div className='h-[48px] w-[48px] md:w-auto md:h-auto'>
							<Image
								src={tool.icon}
								alt={tool.name}
								width={70}
								height={70}
								className='transition-all duration-200 ease-in-out'
							/>
						</div>
						<h3 className='py-3 md:py-8 font-semibold text-xl md:text-4xl'>
							{tool.name}
						</h3>
						<p className='text-base md:text-3xl text-[#333]'>
							{tool.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
