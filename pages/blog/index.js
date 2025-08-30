import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, pageId } from "../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import { getBlogList, getBlogPages } from "../../services";
import { DatetoString } from "../../helpers/common";
function AboutUs({ data }) {
    const router = useRouter()
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(15)

    const [blogs, setBlogs] = useState([])
    const [list, setList] = useState([])


    useEffect(() => {
        getBlogList(page, size, (response) => {

            setBlogs(response.data)
        })
        getBlogPages(size, (response) => {
            let _list = []
            for (let i = 0; i < response.data; i++) {
                _list.push(i)
            }
            setList(_list)

        })
    }, [page])


    return (
        <main>
            <section className='inner_hero_sec padding-top padding-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='heading'>
                                <h1>Latest News & Blogs</h1>
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

                                    Latest News & <span>Blogs</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-lg-8'>
                            <div className="row">
                                {
                                    blogs.length ?
                                        blogs.map((b) => {

                                            let title = b?.title.split(" ").join("-")
                                            title = title.toLowerCase()

                                            return (
                                                <div className=" col-sm-6 ">
                                                    <div className="single-news ">
                                                        <Link href={`/blog/${b?.slug}/${b?.id}`}>
                                                            <a>
                                                                <div className="image">
                                                                    <img src={b?.photo} className="img-fluid w-100" alt="#" />
                                                                </div>
                                                                <div className="content-body">
                                                                    <h4 className="title">{b?.title}
                                                                    </h4>
                                                                    <p>{b?.meta_description}
                                                                    </p>
                                                                    <ul className="custom-flex post-meta">
                                                                        <li>
                                                                            <span>
                                                                                <i className="fas fa-calendar-alt"></i>
                                                                                {DatetoString(b?.created_at)}
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </div>

                                                </div>
                                            )
                                        }) : ""
                                }



                            </div>
                            <div className="pagination center">
                                <ul className="pagination-list">
                                    {/* <li><a href="#"><i className="fas fa-angle-left"></i></a></li> */}
                                    {
                                        list.map((l, i) => {

                                            return (

                                                <li className={i === page ? "active" : ""}><a href="#" onClick={e => {
                                                    e.preventDefault()
                                                    setPage(i)
                                                }} >{l + 1}</a></li>

                                            )
                                        })
                                    }
                                    {/* <li><a href="#"><i className="fas fa-angle-right"></i></a></li> */}
                                </ul>
                            </div>

                        </div>
                        {
                            <aside className="col-lg-4">
                                <div className="sidebar">
                                    <div className="widget search-widget ">
                                        <h5 className="widget-title">HOW TO USE</h5>
                                        <div className="row">
                                            <img src="/img/200 bonu 2.1.png" alt="mymaster11 200 bonus" />
                                        </div>
                                    </div>
                                    <div className="widget popular-feeds">
                                        <h5 className="widget-title">Popular Feeds</h5>
                                        <div className="row">
                                            {blogs.length > 0 && blogs.slice(0, 4).map((b) => (
                                                <div className="col-sm-12" key={b.id} style={{ marginBottom: '20px' }}> {/* Added inline style for margin-bottom */}
                                                    <Link href={`/blog/${b?.slug}/${b?.id}`}>
                                                        <a>
                                                            <div className="image">
                                                                <img src={b?.photo} className="img-fluid w-100" alt="#" />
                                                            </div>
                                                            <div className="content-body">
                                                                {b?.title}
                                                                <ul className="custom-flex post-meta">
                                                                    <li>
                                                                        <span>
                                                                            <i className="fas fa-calendar-alt"></i>
                                                                            {DatetoString(b?.created_at)}
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    {/* <div className="widget categories-widget">
                                        <h5 className="widget-title">Categories</h5>
                                        <img src="/img/200 bonu 2.1.png" alt="mymaster11 200 bonus" width="330" height="240" />
                                    </div> */}
                                    <div className="widget popular-tag-widget" style={{ padding: '20px', borderRadius: '8px' }}>
                                        <h5 className="widget-title" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px', color: '#333' }}>FOLLOW US ON</h5>
                                        <br></br>
                                        <div className="social-links" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <a href="https://www.facebook.com/mymaster11official" target="_blank" className="facebook" style={{ color: '#3b5998', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-facebook-f fa-2x" style={{ marginRight: '62px' }}></i> Facebook</a>
                                            <a href="https://instagram.com/mymaster11official" target="_blank" className="telegram" style={{ color: '#0088cc', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-telegram fa-2x" style={{ marginRight: '45px' }}></i> Telegram</a>
                                            <a href="https://instagram.com/mymaster11official" target="_blank" className="instagram" style={{ color: '#c13584', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-instagram fa-2x" style={{ marginRight: '50px' }}></i> Instagram</a>
                                            <a href="https://youtube.com/channel/UCRpWQLyegH4SXLZOCLz4z_g" target="_blank" className="youtube" style={{ color: '#c4302b', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-youtube fa-2x" style={{ marginRight: '42px' }}></i> YouTube</a>
                                            <a href="https://twitter.com/MM11official" target="_blank" className="twitter" style={{ color: '#1da1f2', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-twitter fa-2x" style={{ marginRight: '45px' }}></i> Twitter</a>
                                            <a href="https://www.linkedin.com/company/mymaster11/" target="_blank" className="linkedin" style={{ color: '#0077b5', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-linkedin-in fa-2x" style={{ marginRight: '50px' }}></i> LinkedIn</a>
                                            <a href="https://in.pinterest.com/mymaster11official/" target="_blank" className="pinterest" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center', marginBottom: '10px' }}><i className="fab fa-pinterest fa-2x" style={{ marginRight: '50px' }}></i> Pinterest</a>

                                        </div>
                                    </div>


                                </div>
                            </aside>
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutUs;
