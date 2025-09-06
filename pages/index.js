import Link from "next/link";
import { app_debug_url, app_ios_url } from "../config";
// import InstagramPost from './instagram'
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  DatetoString,
  getMobileOperatingSystem,
  getPublicUrl
} from "../helpers/common";
import {
  InviteUser,
  getRecentBlogs,
  getUserIp,
  shareAppLink,
} from "../services";

export default function Home({ }) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let isCodeExist = router.query.invite_code;
    // console.log(router.query);
    if (isCodeExist) {
      getUserIp().then((ip) => {
        InviteUser(isCodeExist, ip).then((d) => {
          if (d.status) {
            // check device OS
            let platform = getMobileOperatingSystem();
            // console.log("platform: ", platform);

            var file_path = app_debug_url;

            if (d?.data?.influencer_apk) {
              file_path = d?.data?.influencer_apk;
            }

            if (platform == "Android") {
              file_path = app_debug_url;

              // console.log("d?.data?.influencer_apk: ", d?.data?.influencer_apk);

              if (d?.data?.influencer_apk) {
                file_path = d?.data?.influencer_apk;
              }
            } else if (platform == "iOS") {
              file_path = app_ios_url;
            }
            // console.log("file_path: ", file_path);

            var a = document.createElement("A");
            a.href = file_path;
            a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
        });
      });
    }
  }, [router]);

  useEffect(() => {
    getRecentBlogs(3, (response) => {
      setBlogs(response.data);
    });
  }, []);

  const handleSendLink = async () => {
    if (phone.length == 0) return;
    shareAppLink(phone).then((d) => {
      // console.log(d);
    });
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main>
        <Head>
          <link rel="canonical" href="https://www.mymaster11.com" /> {/* Set your canonical URL */}
        </Head>
        <section className="hero-sec ">
          <div className="hero-main">

            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
            >
              <div className="hidden-text">
                BEST Fantasy App in India MyMaster11
              </div>
              <div className="carousel-inner">
                {/* Slide 1 */}

                <div className="carousel-item active">

                  <img
                    src={getPublicUrl("img/banner_pluto1.jpg")}
                    className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block"
                    alt=" My Master11 Banner 1"
                  />

                  {/* <img src={getPublicUrl("/img/hero-banner.jpg")} className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block" alt="" /> */}
                  <img
                    src={getPublicUrl("/img/hero-mobile-banner-1.png")}
                    className="img-fluid w-100 desktop-hero  d-block d-sm-block  d-md-none"
                    alt=" My Master11 Banner 1"
                  />
                </div>

                {/* Slide 2 */}
                {/* <div className="carousel-item">
                  <img
                    src={getPublicUrl("/img/hero-banner-2.png")}
                    className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block"
                    alt="My Master11 Banner 2"
                  />
                  <img
                    src={getPublicUrl("/img/hero-mobile-banner-2.png")}
                    className="img-fluid w-100 desktop-hero  d-block d-sm-block  d-md-none"
                    alt="My Master11 Banner 2"
                  />
                </div> */}

                {/* Slide 3 */}
                {/* <div className="carousel-item">
                  <img
                    src={getPublicUrl("/img/hero-banner-3.png")}
                    className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block"
                    alt="My Master11 Banner 3"
                  />
                  <img
                    src={getPublicUrl("/img/hero-mobile-banner-3.png")}
                    className="img-fluid w-100 desktop-hero  d-block d-sm-block  d-md-none"
                    alt="My Master11 Banner 3"
                  />
                </div> */}
                {/* Slide 4 */}
                {/* <div className="carousel-item">
                  <img
                    src={getPublicUrl("/img/hero-banner-4.png")}
                    className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block"
                    alt="My Master11 Banner 4"
                  />
                  <img
                    src={getPublicUrl("/img/hero-mobile-banner-4.png")}
                    className="img-fluid w-100 desktop-hero  d-block d-sm-block  d-md-none"
                    alt="My Master11 Banner 4"
                  />
                </div> */}
                {/* Slide 5 */}
                {/* <div className="carousel-item">
                  <img
                    src={getPublicUrl("/img/hero-banner-5.png")}
                    className="img-fluid w-100 desktop-hero d-none d-sm-none d-md-block"
                    alt="My Master11 Banner 5"
                  />
                  <img
                    src={getPublicUrl("/img/hero-mobile-banner-5.png")}
                    className="img-fluid w-100 desktop-hero  d-block d-sm-block  d-md-none"
                    alt="My Master11 Banner 5"
                  />
                </div> */}

              </div>
              {/* <ol id="myCarousel-indicators" className="carousel-indicators">
                <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="4"></li>
              </ol> */}

              {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
            </div>
          </div>


          <div className="hero-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="hero-ft-content">
                    <ul>
                      <li>
                        <div className="ratings">
                          <div className="star">
                            <div className="icons">
                              <i className="fas fa-users"></i>
                            </div>
                          </div>
                          <div className="contnet">
                            <h3>10 Million+</h3>
                            <h5 className="text-center"> Active Users</h5>
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div className="ratings">
                          <div className="star">
                            <div className="icons">
                              <i className="fas fa-money-check-alt"></i>
                            </div>
                          </div>
                          <div className="contnet">
                            <h3>1 Crores+</h3>
                            <h5>Daily Winnings</h5>
                          </div>
                        </div>
                      </li> */}
                      {/* <li>
                        <div className="ratings">
                          <div className="star">
                            <div className="icons">
                              <i className="fas fa-bullseye"></i>
                            </div>
                          </div>
                          <div className="contnet">
                            <h3>1 Crores+</h3>
                            <h5>Contests Played</h5>
                          </div>
                        </div>
                      </li> */}
                      <li>
                        <div className="ratings">
                          <div className="star">
                            <div className="icons">
                              <i className="fa-solid fa-gift"></i>
                            </div>
                          </div>
                          <div className="contnet">
                            <h3>Free Contests</h3>
                            <h5>Daily Free Contests</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="howToinstall-sec padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h2>
                    Downloading the <span> MYMASTER11 App is Easy!</span>
                  </h2>
                  <p>
                    iOS users can download MYMASTER11 from the App Store while
                    for Android users online <br /> fantasy sports are offered
                    as apk. Here’s how to download & install.
                  </p>
                </div>
              </div>
            </div>

            <div className="row howtoinstallrow justify-content-center">
              <div className="col-md-4">
                <div className="howToinstallmain">
                  <div className="howToinstall-card">
                    <span className="number-icon">1</span>
                    <img
                      src={getPublicUrl("/img/install01.png")}
                      className="img-fluid"
                      alt="My Master11 How to Download 1"
                    />
                  </div>
                  <h4>
                    Open MYMASTER11.com &amp; click on{" "}
                    <strong>“Download for Android”</strong> button
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howToinstallmain">
                  <div className="howToinstall-card">
                    <span className="number-icon">2</span>
                    <img
                      src={getPublicUrl("/img/install02.png")}
                      className="img-fluid"
                      alt="My Master11 How to Download 2"
                    />
                  </div>
                  <h4>
                    Wait for the apk to download &amp; click on{" "}
                    <strong>“Open”</strong>{" "}
                  </h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="howToinstallmain">
                  <div className="howToinstall-card">
                    <span className="number-icon">3</span>
                    <img
                      src={getPublicUrl("/img/install03.png")}
                      className="img-fluid"
                      alt="My Master11 How to Download 3"
                    />
                  </div>

                  <h4>
                    Click <strong>“Allow for this Source”</strong> when prompted
                    &amp; then click on Install
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="select_match_sec padding-top padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h2>
                    Experience <span> Lightning Fast Victories </span> Through{" "}
                    <span>Effortlessly Enjoyable Game</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="content">
                  <div className="head">
                    {/* <div className="icon">1</div>
                    <div className="right-content">
                      <h5>Select A Match</h5>
                      <p>Choose an upcoming match that you want to play</p>
                    </div> */}
                  </div>
                  <div className="">
                    <img
                      src={getPublicUrl("img/how-1.png")}
                      className="img-fluid w-100"
                      alt="My Master11 Select A Match"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="content">
                  <div className="head">
                    {/* <div className="icon">2</div>
                    <div className="right-content">
                      <h5>Create Team </h5>
                      <p>Use your skills to pick the right players </p>
                    </div> */}
                  </div>
                  <div className="">
                    <img
                      src={getPublicUrl("img/how-2.png")}
                      className="img-fluid w-100 team-player"
                      alt="My Master11 Create Team"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="content">
                  <div className="head">
                    {/* <div className="icon">3</div>
                    <div className="right-content">
                      <h5>Join Contest </h5>
                      <p>Choose between different contests and win money </p>
                    </div> */}
                  </div>
                  <div className="">
                    <img
                      src={getPublicUrl("img/how-3.png")}
                      className="img-fluid w-100"
                      alt="My Master11 Join Contest"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="mm11-btn">
                  <Link href="/how-to-play">
                    <a className="btn btn-primary">How to Play</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="welcome-sec ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-2">
                <div className="content">
                  <div className="heading">
                    <h2>
                      A Super <span className="head-text">Welcome Bonus</span>
                    </h2>
                    <h6>DOWNLOAD & REGISTER TO GET</h6>
                    <h5>
                      <span>₹200</span> Sign up bonus
                    </h5>
                  </div>

                  <div className="welcome_btn">
                    <Link href={app_debug_url}>
                      <a>
                        <img
                          src={getPublicUrl("img/andoid-btn.png")}
                          className="img-fluid w-100"
                          alt=" My Master11 Playstore "
                        />
                      </a>
                    </Link>
                    <Link href={app_ios_url}>
                      <a>
                        <img
                          src={getPublicUrl("img/apple-btn.png")}
                          className="img-fluid w-100"
                          alt="My Master11 App Store"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    <small>
                      *As per Google policies, we cannot offer Cash Contests on
                      the Play Store.
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welcome_img">
                  <img
                    src={getPublicUrl("img/about-img.png")}
                    className="img-fluid"
                    alt="My Master11 Match Screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* <InstagramPost /> */}

        {/* {blogs.length ? (
          <section className="blog-section padding-top">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading">
                    <h2>
                      Latest News & <span>Blogs</span>
                    </h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      575: {
                        slidesPerView: 2,
                      },

                      991: {
                        slidesPerView: 3,
                      },
                    }}
                    modules={[Pagination]}
                    className="blogSwiper"
                  >
                    {blogs.map((b) => {
                      let title = b?.title.split(" ").join("-");
                      title = title.toLowerCase();
                      return (
                        <SwiperSlide>
                          <div className="single-news ">
                            <Link href={`/blog/${b?.slug}/${b?.id}`}>
                              <a>
                                <div className="image">
                                  <img
                                    src={b?.photo}
                                    className="img-fluid w-100"
                                    alt={b?.meta_title}
                                  />
                                </div>
                                <div className="content-body">
                                  <h4 className="title">{b?.title}</h4>
                                  <p>{b?.meta_description}</p>
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
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="col-md-12">
                  <div className="mm11-btn">
                    <Link href="/blog">
                      <a className="btn btn-primary">View More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          ""
        )} */}

        <div className="floting-button">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="floting-column">
                  <div className="floing-in">
                    <Link href={`https://play.google.com/store/apps/details?id=com.mymaster11.android&hl=en_IN`}>
                      <a>
                        <img
                          src={getPublicUrl("/img/andoid-btn-11.png")}
                          className="img-fluid w-100 android-btns"
                          alt="My Master11 Playstore "
                        />
                      </a>
                    </Link>
                    {/* <Link href={app_ios_url}>
                      <a>
                        <img
                          src={getPublicUrl("/img/apple-btn-2.png")}
                          className="img-fluid w-100 android-btns"
                          alt="My Master11 App Store"
                        />
                      </a>
                    </Link> */}

                    {/* <Link href={"https://dqotsolutions.com/"}>
                      <a
                        className="fw-bold text-dqot"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-div"> </div>
      </main>
    </>
  );
}
