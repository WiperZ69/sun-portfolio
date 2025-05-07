'use client'

import { contacts } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SocialLink from './SocialLink'

export default function Contact() {
	const containerVariants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	}

	return (
		<section
			className='pt-0 mb-12 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12'
			id='contact'
		>
			<motion.h2
				variants={itemVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='text-2xl sm:text-5xl md:text-6xl font-[Russo_One] font-bold mb-12 text-center'
			>
				Давайте поработаем вместе!
			</motion.h2>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center'
			>
				{/* Картинка слева */}
				<motion.div variants={itemVariants}>
					<Image
						src='/emoji_contact.png'
						alt='emoji contact'
						width={200}
						height={240}
						className='w-[160px] sm:w-[200px] h-auto'
					/>
				</motion.div>

				{/* Контакты */}
				<motion.div
					variants={itemVariants}
					className='flex flex-col items-center gap-6 sm:gap-8'
				>
					{contacts.map((contact, index) => (
						<SocialLink
							key={index}
							icon={contact.icon}
							href={contact.href}
							alt={contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
						/>
					))}
				</motion.div>
			</motion.div>
		</section>
	)
}
