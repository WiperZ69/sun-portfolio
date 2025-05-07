'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ExpandableGalleryProps {
	title: string
	images: string[]
}

export default function ExpandableGallery({
	title,
	images,
}: ExpandableGalleryProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [lightboxImage, setLightboxImage] = useState<string | null>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (isOpen && contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}, [isOpen])

	const closeLightbox = () => setLightboxImage(null)

	return (
		<div className='mt-6'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='w-full text-left text-2xl md:text-4xl font-semibold bg-gray-200 font-[Russo_One] px-4 py-3 rounded-lg transition-all hover:bg-gray-300 cursor-pointer'
			>
				{title}
				<span className='float-left'>{isOpen ? '▲' : '▼'}</span>
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						ref={contentRef}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						className='overflow-hidden'
					>
						<div className='mt-4 grid grid-cols-1 gap-4'>
							{images.map((src, index) => (
								<div
									key={index}
									className='relative w-full h-auto cursor-pointer'
									onClick={() => setLightboxImage(src)}
								>
									<Image
										src={src}
										alt={`Изображение-${index}`}
										width={960}
										height={540}
										quality={100}
										className='object-cover rounded-lg'
									/>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Lightbox */}
			<AnimatePresence>
				{lightboxImage && (
					<>
						{/* Задний фон */}
						<motion.div
							className='fixed inset-0 backdrop-brightness-1 backdrop-opacity-80 z-50'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeLightbox}
						/>
						{/* Изображение */}
						<motion.div
							className='fixed inset-0 z-50 flex items-center justify-center p-4'
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
						>
							<div className='relative w-full max-w-4xl h-[80vh]'>
								<Image
									src={lightboxImage}
									alt='Увеличенное изображение'
									width={960}
									height={540}
									quality={100}
									className='object-contain rounded-lg'
								/>
								<button
									onClick={closeLightbox}
									className='absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80'
								>
									×
								</button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}
