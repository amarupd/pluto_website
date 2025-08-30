import Layout from "../layouts/default";

import "../styles/css/bootstrap.min.css";
import "../styles/globals.css";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { getPublicUrl } from "../helpers/common";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<NextSeo
				title="Best Fantasy App in India | Fantasy Cricket App | MyMaster11"
				description="Elevate your fantasy sports experience with MyMaster11, the best fantasy app in India, and play fantasy sports and Opinion trading. Join now for cricket and more, and win big!"

				openGraph={{
					url: "https://www.mymaster11.com/", title: "Best Fantasy App in India | Fantasy Cricket App | MyMaster11", description: "Elevate your fantasy sports experience with MyMaster11, the best fantasy app in India, and play fantasy sports and Opinion trading. Join now for cricket and more, and win big!", rel:"canonical",
					images: [
						{
							url: "https://www.mymaster11.com/share.png",
							width: 800,
							height: 600,
							alt: 'MyMaster11 Share',
							type: 'image/png',

						}
					]

				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}


			/>
			<Head>
				<meta name="google-site-verification" content="tCdcX8Hc3WDeFSN4icNjCnAn9lrxrMg06650ktDpazs" />
				<meta name="keywords" content="Fantasy cricket, Fantasy cricket app, fantasy premier league, ipl fantasy league, fantasy league, Fantasy league for IPL, fantasy iplt20, best fantasy cricket app, fantasy cricket game, cricket fantasy league, fantasy champions league, Opinion trading, Opinion, Opinion App" />
				<meta name="google-site-verification" content="jrOyajoqY-T7_pps7-wtbBFQ8pB4LchM96kC8joUjB8" />
				<link rel="canonical" href="https://www.mymaster11.com/" />
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
					rel="stylesheet"
				/>
				<script src={getPublicUrl('/js/bootstrap.bundle.min.js')}></script>



			</Head>
			<Component {...pageProps} />
			<Toaster />
		</Layout>
	);
}

export default MyApp;