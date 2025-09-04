import Link from "next/link";
import React from "react";
import { getPublicUrl } from "../../helpers/common";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          {/* <div className="row row-cols-5  ustify-content-center header-row-ft">
            <div className="col">
              <div className="footer-heads-card">
                <div className="icon-card">
                  <div className="icon-in">
                    <i className="fas fa-gavel"></i>
                  </div>
                </div>
                <div className="content">
                  <h6>100% Legal & Secure</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-heads-card">
                <div className="icon-card">
                  <div className="icon-in">
                    <i className="fas fa-headset"></i>
                  </div>
                </div>
                <div className="content">
                  <h6>24x 7 Customer Support</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-heads-card">
                <div className="icon-card">
                  <div className="icon-in">
                    <i className="fas fa-handshake"></i>
                  </div>
                </div>
                <div className="content">
                  <h6>Strict Fairplay Policies</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-heads-card">
                <div className="icon-card">
                  <div className="icon-in">
                    <i className="fas fa-money-bill-alt"></i>
                  </div>
                </div>
                <div className="content">
                  <h6>Instant Withdrawals</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-heads-card">
                <div className="icon-card">
                  <div className="icon-in">
                    <i className="fas fa-award"></i>
                  </div>
                </div>
                <div className="content">
                  <h6>Exciting Cashbonus Offers</h6>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row ft_row">
            <div className="col-md-4 col-12">
              <div className="footer-logo">
                <Link rel="canonical" href="#">
                  <a className="navbar-brand">
                    <img
                      src={getPublicUrl("/img/logo_head.png")}
                      className="img-fluid w-100"
                      alt="My Master11 Logo"
                    />
                  </a>
                </Link>
                <ul className="contact_ul">
                  <li>
                    <Link rel="canonical" href="mailto:info@mymaster11.com">
                      <a>
                        <i className="fas fa-envelope"></i> Info@MyMaster11.com
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link rel="canonical" href="tel:9151025051">
                      <a>
                        <i className="fas fa-phone-alt"></i> +91 9151025051
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link rel="canonical" href="#">
                      <a>
                        <i className="fas fa-home-alt"></i> SUNSURYA FUN AND GAMES PRIVATE LIMITED <br /> SA 15/34-e, MAWAIYA
                        MANGALAM COLONY, SARNATH, VARANASI,UTTAR PRADESH,
                        221007
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="links">
                <h4>Our Services</h4>

                <ul className="links-ul">
                  <li>
                    <Link rel="canonical" href="how-to-play">
                      <a>How To Play</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link rel="canonical" href="/opinion">
                      <a>How To Play Opinion</a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link rel="canonical" href="/backups">
                      <a>BackUp Player</a>
                    </Link>
                  </li>
                  <li>
                    <Link rel="canonical" href="privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li> */}

                  <li>
                    <Link rel="canonical" href="fantasy-points-system">
                      <a>Fantasy Points System</a>
                    </Link>
                  </li>

                  <li>
                    <Link rel="canonical" href="contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-md-3 col-sm-6">
              <div className="links">
                <p className="text-white">Users who are 18 or older and do not reside in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana can register on our site.</p>
                <h4>Payment Partners</h4>

                <div className="payments-partner">
                  <img
                    src={getPublicUrl("/img/payment_partner.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="footer-bars-main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer_bar">
                  <div className="ft-left-bar">
                    <p>
                      <span className="span-copy">
                        Copyright © 2025 &nbsp;
                        <Link rel="canonical" href="/">
                          <a className="text-warning "> Pluto143.com, </a>
                        </Link>
                      </span>
                      &nbsp; Design & Developed By &nbsp;
                      <Link rel="canonical" href="https://xyz.com/">
                        <a className="text-warning" target="_blank">
                          xyz Technology Pvt Ltd
                        </a>
                      </Link>
                    </p>
                  </div>
                  <div className="ft-right-bar">
                    <ul className="social_ul">
                      <li>
                        <Link rel="canonical" href="https://www.facebook.com/mymaster11official">
                          <a>
                            <img
                              src={getPublicUrl("/img/fb1.png")}
                              className="img-fluid social-call"
                              alt=" My Master11 Facebook"
                            />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link rel="canonical" href="https://twitter.com/MM11official">
                          <a>
                            <img
                              src={getPublicUrl("img/tw2.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Twitter"
                            />
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link rel="canonical" href="https://instagram.com/mymaster11official">
                          <a>
                            <img
                              src={getPublicUrl("img/ins1.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Instagram"
                            />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link rel="canonical" href="https://youtube.com/channel/UCRpWQLyegH4SXLZOCLz4z_g">
                          <a>
                            <img
                              src={getPublicUrl("img/yt1.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Youtube"
                            />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link rel="canonical" href="https://wa.me/+919151025051">
                          <a>
                            <img
                              src={getPublicUrl("img/wt.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Whatsapp"
                            />
                          </a>
                        </Link>
                      </li>
                      {/* <li>
                        <Link rel="canonical" href="https://www.linkedin.com/company/mymaster11/">
                          <a>
                            <img
                              src={getPublicUrl("img/li.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Linkdin"
                            />
                          </a>
                        </Link>
                      </li> */}
                      <li>
                        <Link rel="canonical" href="https://t.me/mymaster11">
                          <a>
                            <img
                              src={getPublicUrl("img/tel.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Telegram"
                            />
                          </a>
                        </Link>
                      </li>
                      {/* <li> */}
                        {/* <Link rel="canonical" href="https://in.pinterest.com/mymaster11official/">
                          <a>
                            <img
                              src={getPublicUrl("img/pin.png")}
                              className="img-fluid social-call"
                              alt="My Master11 Pinterest"
                            />
                          </a>
                        </Link> */}
                      {/* </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="top_btn" id="scrolltop" title="Go to top">
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
}

export default Footer;
