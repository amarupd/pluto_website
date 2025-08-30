import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../config";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { getPublicUrl } from "../helpers/common";



function HowToPlay() {
  const router = useRouter();


  return (
    <main>
      <Head>
        <link rel="canonical" href="https://www.mymaster11.com/how-to-play" /> {/* Set your canonical URL */}
      </Head>
      <section className="inner_hero_sec padding-top padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h1> How To Play</h1>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="point-system">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="point-styem-in">
                <h6>Confused about scoring? Check out our Points System & clear all your doubts.</h6>


                <Link href="fantasy-points-system">
                  <a className="btn btn-primary">FANTASY POINTS SYSTEM</a>
                </Link>


              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="howToPlaySec padding-top padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="howTocolumn">
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_step_1.png")}
                        alt="My Master11 SELECT A MATCH"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text">
                      <h3>Select a Match</h3>
                      <p>
                        Choose the match you want to play and show-off your
                        skills.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_step_2.png")}
                        alt="My Master11 SELECT YOUR PLAYING XI"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text" style={{ textAlign: "left" }}>
                      <h3>SELECT YOUR PLAYING XI</h3>
                      <p>
                        Create your own team by selecting different players
                        within a defined virtual credit points.
                      </p>
                      <p>
                        {/* <strong>
                          <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#more_em_creat"
                          >
                            More About Team Creating
                          </a>
                        </strong> */}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_step_3.png")}
                        alt="My Master11 CHOOSE YOUR CAPTAIN & VICE CAPTAIN"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text">
                      <h3>CHOOSE YOUR CAPTAIN &amp; VICE CAPTAIN</h3>
                      <p>
                        Once you choose your playing 11 it’s time to choose your
                        captain &amp; vice-captain that will help you earn extra
                        points.
                      </p>
                      <p>
                        2x points for the Captain &amp; 1.5x points for the
                        Vice-Captain based on their on-field performance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_step_4.png")}
                        alt="My Master11 ONE LEAGUE, MULTIPLE TEAMS"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text" style={{ textAlign: "left" }}>
                      <h3>ONE LEAGUE, MULTIPLE TEAMS</h3>
                      <p>
                        Increase your winning chances with Multiple Entries.
                        Join a “Multiple Entry” League with a maximum of 15
                        different teams
                        {/* <sup>
                          <a href="/term-conditions">
                            T&amp;C Apply
                          </a>
                        </sup> */}
                        .
                      </p>
                      <p>
                        {/* <strong>
                          <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#more_em_mange"
                          >
                            More About Managing your Team
                          </a>
                        </strong> */}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_step_5.png")}
                        alt="My Master11 BECOME A PART OF A LEAGUE"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text">
                      <h3>BECOME A PART OF A LEAGUE</h3>
                      <p>
                        With your playing XI join a league or contest organized
                        by MYMASTER11 to compete with other users or compete with
                        your friends through a private league created by you or
                        your friends.
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="image">
                      <img
                        src={getPublicUrl("/img/how_to_use_discount_wallet.jpg ")}
                        alt="My Master11 BECOME A PART OF A LEAGUE"
                        className="img-fluid-howtoplay"
                      />
                    </div>
                    <div className="text" style={{ textAlign: "left" }}>
                      <h3>HOW TO USE YOUR DISCOUNT BALANCE??</h3>
                      <p>
                        In every discount dhamaka contest you can use only certain amount from your discount wallet and rest amount you will add via deposit wallet. Please check the amount in the Discount Dhamaka contest accordingly and the usable amounts.


                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media only screen and (max-width: 768px) {
          .heading h1 {
            font-size: 24px;
          }
          .point-styem-in h6 {
            font-size: 16px;
          }
          .img-fluid-howtoplay {
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}

export default HowToPlay;
