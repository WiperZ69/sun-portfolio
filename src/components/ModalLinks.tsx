import Image from 'next/image'
import Link from 'next/link'

export default function ModalLinks() {
	return (
		<div className='bg-[#E6E7F3] p-1 flex flex-col-reverse md:flex-row gap-4 justify-between items-center rounded-2xl'>
			<h5 className='font-[Russo_One] text-[#3B414F] text-xl md:text-4xl'>
				Хочу такой же!
			</h5>
			<div className='flex gap-4'>
				<Link href='tel:+79642238303' target='_blank'>
					<Image
						src='/icons/pn.svg'
						alt='project link'
						width={60}
						height={60}
						className='h-auto hover:bg-[#8387C4] rounded-full'
					/>
				</Link>
				<Link href='https://t.me/Kkratskina' target='_blank'>
					<Image
						src='/icons/tg.svg'
						alt='project link'
						width={60}
						height={60}
						className='h-auto hover:bg-[#8387C4] rounded-full'
					/>
				</Link>
				<Link href='https://wa.me/79642238303' target='_blank'>
					<Image
						src='/icons/wa.svg'
						alt='project link'
						width={60}
						height={60}
						className='h-auto hover:bg-[#8387C4] rounded-full'
					/>
				</Link>
			</div>
		</div>
	)
}
