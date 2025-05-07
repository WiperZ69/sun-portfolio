import AboutMe from '@/components/AboutMeSection'
import PortfolioSection from '@/components/PortfolioSection'
import Tools from '@/components/ProgramsSection'
import Services from '@/components/ServicesSection'

export default function HomePage() {
	return (
		<div>
			<AboutMe />
			<Services />
			<Tools />
			<PortfolioSection />
		</div>
	)
}
