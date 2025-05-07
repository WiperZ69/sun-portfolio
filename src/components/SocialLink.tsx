'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface SocialLinkProps {
	icon: string
	href: string
	alt: string
}

export default function SocialLink({ icon, href, alt }: SocialLinkProps) {
	const [isHovered, setIsHovered] = useState(false)

	const hoverIcon = icon.replace('.svg', '-hover.svg') // автоматическое определение иконки при наведении

	return (
		<Link href={href} target='_blank' rel='noopener noreferrer'>
			<div
				className='flex items-center gap-4 md:gap-8 hover:text-[#8387C4] transition-all'
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className='w-[40px] h-[40px] md:w-auto md:h-auto'>
					<Image
						src={isHovered ? hoverIcon : icon}
						alt={alt}
						width={80}
						height={80}
					/>
				</div>
				<span className='text-2xl md:text-4xl'>{alt}</span>
			</div>
		</Link>
	)
}
