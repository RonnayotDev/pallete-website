import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import { useWindowResize } from "../hooks/useWindowSize";

export default function Layout({ children }) {
	const [width] = useWindowResize();
	const [size, setSize] = useState('desktop')

	useEffect(() => {
		if (width > 1024) {
			size !== 'desktop' && setSize('desktop')
		} else {
			size !== 'mobile' && setSize('mobile')
		}
	}, [width])

	return (
		<>
			{size === 'desktop' ? <Navbar /> : <NavbarMobile/>}
			{children}
			<Footer />
		</>
	)
}