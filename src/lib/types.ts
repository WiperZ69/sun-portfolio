// lib/types.ts

export type Project = {
	id: number
	uptitle: string
	title: string
	name?: string
	image: string
	description: string
	task1: string
	task2: string
	task3?: string
	role: string
	link: string
	galleryImages?: string[]
}
