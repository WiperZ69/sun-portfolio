'use client'

import { projects } from '@/lib/data'
import { Project } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ExpandableGallery from './Gallery'
import ModalLinks from './ModalLinks'
import ProjectCard from './ProjectCard'

export default function PortfolioSection() {
	const [activeProject, setActiveProject] = useState<Project | null>(null)

	const closeModal = () => setActiveProject(null)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal()
		}

		if (activeProject) {
			document.body.style.overflow = 'hidden'
			document.addEventListener('keydown', handleKeyDown)
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [activeProject])

	return (
		<section
			className='py-6 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12'
			id='portfolio'
		>
			<div className='container mx-auto max-w-5xl relative'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-2xl md:text-5xl font-[Russo_One] font-bold mb-8'
				>
					Мои работы (нажмите на{'\u00A0'}проект):
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 gap-8'
				>
					{projects.map(project => (
						<div key={project.id} onClick={() => setActiveProject(project)}>
							<ProjectCard
								uptitle={project.uptitle}
								title={project.title}
								description={project.description}
								image={project.image}
								task1={project.task1}
								task2={project.task2}
								task3={project.task3}
								role={project.role}
								link={project.link}
							/>
						</div>
					))}
				</motion.div>

				{/* Модальное окно */}
				<AnimatePresence>
					{activeProject && (
						<>
							{/* Задний фон */}
							<motion.div
								className='fixed inset-0 backdrop-brightness-0 backdrop-blur-sm backdrop-opacity-20 z-40'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={closeModal}
							/>

							{/* Модальное содержимое */}
							<motion.div
								className='fixed top-0 right-0 h-full w-full sm:w-4/12 bg-[#E6E7F3] z-50 p-6 overflow-y-auto shadow-[1px]'
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ type: 'spring', stiffness: 300, damping: 30 }}
								onClick={e => e.stopPropagation()}
							>
								<button
									onClick={closeModal}
									className='absolute top-4 right-4 text-black text-6xl cursor-pointer rounded-full transition-all duration-200 ease-in-out hover:bg-[#B5B7DC] hover:backdrop-blur-xs pb-1 px-3'
								>
									×
								</button>
								<div className='space-y-4'>
									<h3 className='font-[Russo_One] text-2xl md:text-5xl'>
										{activeProject.uptitle}
									</h3>
									<Image
										src={activeProject.image}
										alt='project image'
										width={400}
										height={250}
										className='w-full h-auto rounded-xl'
									/>
									<h4 className='font-[Russo_One] md:pt-6 md:pb-2 text-2xl md:text-4xl'>
										О Проекте:
									</h4>
									<p className='md:text-xl font-inter'>
										{activeProject.description}
									</p>
									<h4 className='font-[Russo_One] md:pt-6 md:pb-2 text-2xl md:text-4xl'>
										Задача:
									</h4>
									<p className='md:text-xl font-inter'>
										• {activeProject.task1}
									</p>
									<p className='md:text-xl font-inter'>
										• {activeProject.task2}
									</p>
									{activeProject.task3 && (
										<p className='md:text-xl font-inter'>
											• {activeProject.task3}
										</p>
									)}
									<h4 className='font-[Russo_One] md:pt-6 md:pb-2 text-2xl md:text-4xl'>
										Моя роль в проекте:
									</h4>
									<p className='md:text-xl font-inter'>{activeProject.role}</p>
									<ExpandableGallery
										title='Узнать больше'
										images={activeProject.galleryImages || []}
									/>
									<a
										href={activeProject.link}
										target='_blank'
										className='inline-block mt-4 font-[Russo_One] text-[#8387C4] underline'
									>
										{activeProject.link ? 'Открыть проект' : ''}
									</a>
									<ModalLinks />
								</div>
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</div>
		</section>
	)
}
