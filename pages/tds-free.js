import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../config";
import Head from "next/head";

function Legality({ data }) {
	return (
		<main>
			<Head>
				<link rel="canonical" href="https://www.mymaster11.com/tds-free" /> Set your canonical URL
			</Head>
			<section className='inner_hero_sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h1>MyMaster11 TDS Free</h1>
							</div>

						</div>
					</div>
				</div>
			</section>
			<section className='about-sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h2>
									<span>MyMaster11 TDS Free</span>
								</h2>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-md-10'>
							<div className='content'>
								{data && <div dangerouslySetInnerHTML={{ __html: data }} />}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Legality;
export async function getStaticProps(context) {
	const id = pageId.TdsFree;
	const response = await axios.get(`${baseUrl}/slug/${id}`);
	// console.log(response);

	if (response.data.status) {
		return {
			props: {
				data: response.data.data,
			}, // will be passed to the page component as props
			revalidate: 10,
		};
	}

	return {
		props: {
			data: false,
		},
		revalidate: 10,
	};
}
