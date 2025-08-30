import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../../config";
import Link from "next/link";
import { getPublicUrl } from "../../helpers/common";

function AboutUs({ data }) {
  return (
    <main>
      <section className='inner_hero_sec padding-top padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <h1>Latest News &Accept</h1>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='blog-listing padding-top padding-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='heading'>
                <h2>

                  Latest News & <span>Accept</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='row '>
            <div className='col-lg-8 col-md-7 col-12'>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                  <div className="single-news ">
                    <Link href="/blog-details">
                      <a>
                        <div className="image">
                          <img src={getPublicUrl("img/blog-grid1.jpg")} className="img-fluid w-100" alt="#" />
                        </div>
                        <div className="content-body">
                          <h4 className="title">Make your team a Design driven
                            company
                          </h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard.
                          </p>
                          <ul className="custom-flex post-meta">
                            <li>
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                                20th March 2022
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </Link>
                  </div>

                </div>
              </div>
              <div className="pagination center">
                <ul className="pagination-list">
                  <li><a href="#"><i className="fas fa-angle-left"></i></a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i className="fas fa-angle-right"></i></a></li>
                </ul>
              </div>

            </div>
            <aside className="col-lg-4 col-md-5 col-12">
              <div className="sidebar">
                <div className="widget search-widget">
                  <h5 className="widget-title">Search Objects</h5>
                  <form action="#">
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit"><i className="fas fa-search"></i></button>
                  </form>
                </div>
                <div className="widget popular-feeds">
                  <h5 className="widget-title">Popular Feeds</h5>
                  <div className="popular-feed-loop">
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title"><a href="#">8 simple ways to utilize a blog to improve
                          SEO results</a></h6>
                        <span className="time"><i className="fas fa-calendar-alt"></i> 05th Nov 2023</span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title"><a href="#">7 most important SEO focus areas for colleges
                          and universities</a></h6>
                        <span className="time"><i className="fas fa-calendar-alt"></i> 24th March 2023</span>
                      </div>
                    </div>
                    <div className="single-popular-feed">
                      <div className="feed-desc">
                        <h6 className="post-title"><a href="#">How to drive conversions with on-brand SEO
                          copywriting</a></h6>
                        <span className="time"><i className="fas fa-calendar-alt"></i> 30th Jan 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget categories-widget">
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
                </div>
              </div>
            </aside>
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
