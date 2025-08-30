import Layout from "../layouts/default";

import "../styles/css/bootstrap.min.css";
import "../styles/globals.css";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { getPublicUrl } from "../helpers/common";


function MyApp({ Component, pageProps }) {
	return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col items-center justify-center p-8">
      {/* Logo and Title */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center text-3xl font-bold">
          MM
        </div>
        <h1 className="text-3xl font-bold">MyMaster11</h1>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-extrabold mb-4 text-center">
        WE'RE EVOLVING!
      </h2>

      {/* Description */}
      <p className="text-center max-w-2xl text-lg mb-10">
        As per the Online Gaming Bill, 2025, MyMaster11 has discontinued cash
        games and contests. But don’t worry — this is just the beginning of
        something new and extraordinary! Our website is currently undergoing
        maintenance while we work on a bigger, better, and more thrilling
        experience for you.
      </p>

      {/* Footer Text */}
      <p className="text-center text-base font-semibold">
        STAY CONNECTED — THE FUTURE OF MYMASTER11 IS ON ITS WAY!
      </p>
    </div>
  );
}
// function MyApp({ Component, pageProps }) {
// 	return (
// 		<Layout>
// 			<NextSeo
// 				title="Best Fantasy App in India | Fantasy Cricket App | MyMaster11"
// 				description="Elevate your fantasy sports experience with MyMaster11, the best fantasy app in India, and play fantasy sports and Opinion trading. Join now for cricket and more, and win big!"

// 				openGraph={{
// 					url: "https://www.mymaster11.com/", title: "Best Fantasy App in India | Fantasy Cricket App | MyMaster11", description: "Elevate your fantasy sports experience with MyMaster11, the best fantasy app in India, and play fantasy sports and Opinion trading. Join now for cricket and more, and win big!", rel:"canonical",
// 					images: [
// 						{
// 							url: "https://www.mymaster11.com/share.png",
// 							width: 800,
// 							height: 600,
// 							alt: 'MyMaster11 Share',
// 							type: 'image/png',

// 						}
// 					]

// 				}}
// 				twitter={{
// 					handle: '@handle',
// 					site: '@site',
// 					cardType: 'summary_large_image',
// 				}}


// 			/>
// 			<Head>
// 				<meta name="google-site-verification" content="tCdcX8Hc3WDeFSN4icNjCnAn9lrxrMg06650ktDpazs" />
// 				<meta name="keywords" content="Fantasy cricket, Fantasy cricket app, fantasy premier league, ipl fantasy league, fantasy league, Fantasy league for IPL, fantasy iplt20, best fantasy cricket app, fantasy cricket game, cricket fantasy league, fantasy champions league, Opinion trading, Opinion, Opinion App" />
// 				<meta name="google-site-verification" content="jrOyajoqY-T7_pps7-wtbBFQ8pB4LchM96kC8joUjB8" />
// 				<link rel="canonical" href="https://www.mymaster11.com/" />
// 				<link
// 					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
// 					rel="stylesheet"
// 				/>
// 				<script src={getPublicUrl('/js/bootstrap.bundle.min.js')}></script>



// 			</Head>
// 			<Component {...pageProps} />
// 			<Toaster />
// 		</Layout>
// 	);
// }

export default MyApp;


import React, { useEffect } from "react";

// const infoImage = "/img/image-for-mm11-banned.jpg";

// const styles = {
//   root: {
//     minHeight: "auto",
//     minWidth: "auto",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "#fff",
//     margin: 0,
//     padding: 0,
//     overflow: "hidden",
//   },
//   infoImage: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   footer: {
//     position: "fixed",
//     left: 0,
//     bottom: 0,
//     width: "100%",
//     height: 48,
//     background: "#203a79",
//     color: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 18,
//     fontWeight: 700,
//     boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
//     letterSpacing: 1,
//   },
//   // Mobile style (you can use CSS media queries via JS)
//   mobileRoot: {
//     background: "linear-gradient(rgba(32, 58, 121, 0.75), rgba(185, 44, 44, 0.8))",
//     minHeight: "80vh",
//     minWidth: "80vw",
//   },
// };

// function HomePage() {
//   useEffect(() => {
//     // Remove default browser margins
//     document.body.style.margin = "0";
//     document.body.style.padding = "0";
//   }, []);

//   // Detect mobile screen width
//   const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

//   return (
//     <div
//       style={{
//         ...styles.root,
//         ...(isMobile ? styles.mobileRoot : {}),
//       }}
//     >
//       <img src={infoImage} alt="Information" style={styles.infoImage} />
//       <div style={styles.footer}>MyMaster11</div>
//     </div>
//   );
// }

// export default HomePage;
