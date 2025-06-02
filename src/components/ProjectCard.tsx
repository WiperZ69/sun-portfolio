import Image from 'next/image'

interface ProjectCardProps {
	uptitle: string
	title: string
	description: string
	image: string
	task1: string
	task2: string
	task3: string
	role: string
	link: string
	onClick?: () => void
}

export default function ProjectCard({
	title,
	uptitle,
	image,
	onClick,
}: ProjectCardProps) {
	return (
		<div onClick={onClick} className='cursor-pointer min-h-auto md:min-h-105'>
			<div className='bg-[#bfc3d3] rounded-2xl shadow-lg pt-8 hover:blur-[1px] hover:scale-102 transition-all duration-300'>
				<Image
					src={image}
					alt={uptitle}
					width={400}
					height={250}
					className='object-cover w-full h-auto pb-8 px-8'
				/>
				<div className='flex items-center min-h-20 rounded-br-2xl rounded-bl-2xl bg-[#3b414f]'>
					<Image
						src={title}
						alt={uptitle}
						width={260}
						height={56}
						className='object-cover w-auto h-auto px-6 max-h-14'
					/>
				</div>
			</div>
		</div>
	)
}
