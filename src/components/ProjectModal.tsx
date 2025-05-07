import { X } from 'lucide-react'
import Image from 'next/image'

interface ProjectModalProps {
	project: {
		uptitle: string
		title: string
		description: string
		image: string
		task1: string
		task2: string
		task3: string
		role: string
		link: string
	}
	onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
	return (
		<div className='fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm'>
			<div className='w-full max-w-md bg-white text-black p-6 overflow-y-auto relative shadow-2xl rounded-l-2xl'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-black'
				>
					<X size={30} />
				</button>

				<div className='flex flex-col gap-4'>
					<Image
						src={project.image}
						alt='Project Image'
						width={600}
						height={300}
						className='rounded-lg'
					/>

					<Image
						src={project.title}
						alt={project.uptitle}
						width={300}
						height={56}
					/>

					<p className='text-lg leading-relaxed'>{project.description}</p>

					<a
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 underline mt-4'
					>
						Перейти на сайт проекта
					</a>
				</div>
			</div>
		</div>
	)
}
