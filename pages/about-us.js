import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../config";

function AboutUs({ data }) {
	return (
		<main>
			<section className='inner_hero_sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h1>About Us</h1>
							</div>
							{/* <div className='bred-crumb'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<a href='#'>Home</a>
										</li>
										<li className='breadcrumb-item active' aria-current='page'>
											About
										</li>
									</ol>
								</nav>
							</div> */}
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
									{" "}
									About <span>MyMaster11</span>
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

export default AboutUs;
export async function getStaticProps(context) {
	const id = pageId.AboutUs;
	const response = await axios.get(`${baseUrl}/slug/${id}`);
	if (response.data.status) {
		return {
			props: {
				data: response.data.data,
			},
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
