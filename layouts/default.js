import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

function Layout({ children }) {
	const router = useRouter();
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		// Capture the header height when the component mounts, only on mobile devices
		if (isMobile) {
			const headerElement = document.querySelector(".navbar");
			if (headerElement) {
				setHeaderHeight(headerElement.offsetHeight);
			}
		}
	}, []);

	const isHomePage = router.pathname === "/"; // Check if it's the Home page

	return (
		<>
			{/* Render the Header, which should always take priority on mobile devices */}
			<Header setHeaderHeight={setHeaderHeight} />

			{/* Adjust the content below the header on mobile devices, excluding Home page */}
			<main
				style={{
					paddingTop: isMobile && !isHomePage ? `${headerHeight}px` : null, // Apply padding only if it's not the Home page
					backgroundColor: "transparent", // Make the background transparent
					minHeight: "100vh" // Ensure the content takes up at least the full height of the screen
				}}
			>
				{children}
			</main>

			{/* Conditionally render the Footer based on device type and current route */}
			{!isMobile || router.pathname === "/" ? <Footer /> : null}
		</>
	);
}

export default Layout;
