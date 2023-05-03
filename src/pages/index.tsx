import Layout from '@/components/_layout/Layout'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Portafolio from '@/components/sections/Portafolio'
import Services from '@/components/sections/Service'
import Team from '@/components/sections/Team'

export default function Home() {
	return (
		<Layout>
				<Hero/>
				<Services/>
				<About/>
				<Portafolio/>
				<Team/>
				<Contact/>
			
		</Layout>
	)
}
