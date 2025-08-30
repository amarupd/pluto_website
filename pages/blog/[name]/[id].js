import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, pageId } from "../../../config/index";
import Link from "next/link";
import { getBlogDetails, getRecentBlogs } from "../../../services";
import { useRouter } from "next/router";
import { createMarkup, DatetoString, isNotEmpty, socialShare } from "../../../helpers/common";


function AboutUs() {

	const router = useRouter()
	const [data, setData] = useState({})
	const [tags, setTags] = useState([])
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		// console.log(router)
		if (!router.isReady) return;


		getBlogDetails(router.query.id, (response) => {
			setData(response.data)
			let keywords = (response.data.meta_keyword ?? "").split(",").filter(f => f !== "")
			setTags(keywords)

		})

		getRecentBlogs(10, (response) => {
			setBlogs(response.data)
		})

	}, [router.isReady])



	return (
		<main>
			{/**<section className='inner_hero_sec padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h1>Blog Details</h1>
							</div>

						</div>
					</div>
				</div>
			</section> */}
			<br /><br /> <br />  <br />
			
			{isNotEmpty(data) ? <section className='blog-listing padding-top padding-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h2>

									{/* Blog <span>Details</span> */}
									{data.title}

								</h2>
							</div>
						</div>
					</div>
					<div className='row '>
						<div className='col-lg-8 col-md-7 col-12'>
							<div className="blog-details-card">
								<div className="post-thumbnils">
									<img src={data.photo} className="img-fluid w-100" alt={data.meta_title} />

								</div>
								<div className="post-details">
									<div className="detail-inner">
										<h2 className="post-title">
											<a href="#">{data.title}</a>
										</h2>

										<ul className="custom-flex post-meta">
											<li>
												<a href="#">
													<i className="fas fa-calendar-alt"></i>
													{DatetoString(data.created_at)}
												</a>
											</li>

											<li>
												<a href="#">
													<i className="fas fa-eye"></i>
													{data.views}
												</a>
											</li>
										</ul>
										{createMarkup(data.description)}

										<div className="post-tags-media">
											<div className="post-tags popular-tag-widget mb-xl-40">
												<h5 className="tag-title">Related Tags</h5>
												<div className="tags">
													{
														tags.length ?
															tags.map((d) => {

																return (<a href="#">{d.trim()}</a>)
															}) : ""
													}

												</div>
											</div>
											<div className="post-social-media">
												<h5 className="share-title">Social Share</h5>
												<ul className="custom-flex">
													{/* <li>
														<a href="#" onClick={(e) => {
															e.preventDefault();
															socialShare.twitter(window)
														}}>
															<i className="fab fa-twitter"></i>
														</a>
													</li> */}
													<li>
														<a href="#" onClick={(e) => {
															e.preventDefault();
															socialShare.facebook(window)
														}} >
															<i className="fab fa-facebook-f"></i>
														</a>
													</li>
													{/*<li>
														<a href="#">
															<i className="fab fa-instagram"></i>
														</a>
													</li>*/}
													<li>
														<a href={"#"} onClick={(e) => {
															e.preventDefault();
															socialShare.whatsapp(window)
														}} data-action="share/whatsapp/share">
															<i className="fab fa-whatsapp"></i>
														</a>
													</li>
													<li>
														<a href="#" onClick={e => {
															e.preventDefault()
															socialShare.teleGram(window)
														}} >
															<i className="fab fa-telegram-plane"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>

								</div>
							</div>



						</div>
						<aside className="col-lg-4 col-md-5 col-12">
							<div className="sidebar">
								{
									/**
									 * <div className="widget search-widget">
									<h5 className="widget-title">Search Objects</h5>
									<form action="#">
										<input type="text" placeholder="Search Here..." />
										<button type="submit"><i className="fas fa-search"></i></button>
									</form>
								</div>
									 */
								}
								<div className="widget search-widget ">
                                        <h5 className="widget-title">HOW TO USE</h5>
                                        <div className="row">
                                            <img src="/img/200 bonu 2.1.png" alt="mymaster11 200 bonus" />
                                        </div>
                                    </div>


								<div className="widget popular-feeds">
									<h5 className="widget-title">Popular Feeds</h5>
									<div className="popular-feed-loop">
										{
											blogs.length ?

												blogs.filter(f => f.id !== data.id).map((b) => {
													let title = b?.title.split(" ").join("-")
													title = title.toLowerCase()

													return (<div className="single-popular-feed">
														<div className="feed-desc">
														
															<a href={`/blog/${b?.slug}/${b.id}`}>
															<img src={b?.photo} className="img-fluid w-100" alt="#" />
															
															{b.title}</a>
															<span className="time"><i className="fas fa-calendar-alt"></i>{DatetoString(b.created_at)}</span>
														</div>
													</div>)
												}) : ""
										}


									</div>
								</div>
								{
									/**<div className="widget categories-widget">
									<h5 className="widget-title">Categories</h5>
									<ul className="custom">
										<li>
											<a href="#">Business<span>26</span></a>
										</li>
										<li>
											<a href="#">Consultant<span>30</span></a>
										</li>
										<li>
											<a href="#">Creative<span>71</span></a>
										</li>
										<li>
											<a href="#">UI/UX<span>56</span></a>
										</li>
										<li>
											<a href="#">Technology<span>60</span></a>
										</li>
									</ul>
								</div>
								<div className="widget popular-tag-widget">
									<h5 className="widget-title">Popular Tags</h5>
									<div className="tags">
										<a href="#">Popular Template</a>
										<a href="#">Design</a>
										<a href="#">UX</a>
										<a href="#">Icon</a>
										<a href="#">Usability</a>
										<a href="#">Tech</a>
										<a href="#">Mouse</a>
										<a href="#">Kit</a>
										<a href="#">Consult</a>
										<a href="#">Business</a>
										<a href="#">Keyboard</a>
										<a href="#">Develop</a>
									</div>
								</div> */
								}
							</div>
						</aside>
					</div>
				</div>
			</section> : <section className='blog-listing padding-top padding-bottom' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> <div class="loader"></div></section>
			}
		</main>
	);
}

export default AboutUs;
// export async function getStaticProps(context) {
// 	const id = pageId.AboutUs;
// 	const response = await axios.get(`${baseUrl}/slug/${id}`);
// 	if (response.data.status) {
// 		return {
// 			props: {
// 				data: response.data.data,
// 			},
// 			revalidate: 10,
// 		};
// 	}

// 	return {
// 		props: {
// 			data: false,
// 		},
// 		revalidate: 10,
// 	};
// }
