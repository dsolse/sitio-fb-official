import { motion, useScroll } from "framer-motion"
import { nanoid } from "nanoid"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Navbar({routes} : {routes : {route:string, id:string}[]}) {
	const { scrollY } = useScroll()
	const [show, setShow] = useState(true)
	scrollY.on("change", () => {
		setShow((scrollY.getPrevious() > scrollY.get()))
	})
	return (
		<motion.nav
		animate={{opacity: show ? 1 : 0}}
		className="fixed w-full bg-white z-50 top-0 flex flex-row justify-between items-center px-12 py-6 shadow-slate-50 shadow-xl ">
			<div>
				<Image
					src="/logo.png"
					alt="logo"
					width={80}
					height={50}
				/>
			</div>
			<ul className="hidden flex-row space-x-7 mx-auto h-full items-center text-lg lg:space-x-10 lg:mx-0 md:flex">
				{routes.map(({route, id}) => {
					if(route == "Contact us") {
						return (
							<li className="bg-blue-600 text-white px-4 py-3 rounded-3xl hover:bg-blue-800" key={nanoid()}>
								<a href={id}>{route}</a>
							</li>
						)
					}

					return (
						<li key={nanoid()}>
							<Link className="transition duration-300 ease-out hover:underline hover:decoration-blue-800 hover:text-blue-800" href={id} scroll={false}>{route}</Link>
						</li>
					)
				})}
			</ul>
			<div className="md:hidden flex">
				Open
			</div>
		</motion.nav>
	)
}

export default Navbar
