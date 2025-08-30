import axios from "axios";
import React from "react";
import { baseUrl, pageId } from "../config";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
// import Image from "next/image";
import Link from "next/link";
import { getPublicUrl } from "../helpers/common";
import Head from "next/head";

function Opinion() {
    const router = useRouter();

    return (
        <main>
            {/* <Head> */}
                {/* <link rel="canonical" href="https://www.mymaster11.com/opinion" /> Set your canonical URL */}
            {/* </Head> */}
            <section className="inner_hero_sec padding-top padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1> Opinion </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="point-system">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="point-styem-in"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center', // Centers horizontally
                                    alignItems: 'center',      // Centers vertically
                                    height: '100%',            // Adjust height if needed
                                    textAlign: 'center'
                                }}
                            >
                                <h6>How to Play Opinion on Mymaster11</h6>
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
                                                src={getPublicUrl("/img/opinion1.png")}
                                                alt="My Master11 SELECT A MATCH"
                                                className="img-fluid-howtoplay"
                                                style={{ width: "700px", height: "auto" }} // Add your desired width and height here
                                            />
                                        </div>
                                        <div className="text">
                                            <h3>Select a Match</h3>
                                            <p>
                                                Choose the match you want to place the trade and show-off your
                                                skills.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img
                                                src={getPublicUrl("/img/opinion2.png")}
                                                alt="My Master11 SELECT YOUR PLAYING XI"
                                                className="img-fluid-howtoplay"
                                                style={{ width: "700px", height: "auto" }}
                                            />
                                        </div>
                                        <div className="text" style={{ textAlign: "left" }}>
                                            <h3 >SELECT THE OPTION</h3>
                                            <p>
                                                Each question presents two options, each linked to a unique trading amount.
                                            </p>
                                            <p>
                                                The total number of participants (traders) will be shown in the top-left corner of the question screen.
                                            </p>
                                            <p>
                                                Example question: Who Will win the match ? A. SL B. NZ
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img
                                                src={getPublicUrl("/img/opinion4.png")}
                                                alt="My Master11 CHOOSE YOUR CAPTAIN & VICE CAPTAIN"
                                                className="img-fluid-howtoplay"
                                                style={{ width: "700px", height: "auto" }}
                                            />
                                        </div>
                                        <div className="text">
                                            <h3>Order Placement</h3>
                                            <p>The question will be displayed alongside the user's selected answer.</p>

                                            <p>A price range slider will be provided, allowing the user to select a maximum amount of up to ₹9.5.</p>

                                            <p>Users should remember that the total number of available trades should not be zero. The greater the number of trades available, the higher the chances of finding a match.</p>

                                            <p>The window displays options for "Your Investment," "You Receive," and "Swipe to Pay."</p>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="image">
                                            <img
                                                src={getPublicUrl("/img/opinion5.png")}
                                                alt="My Master11 ONE LEAGUE, MULTIPLE TEAMS"
                                                className="img-fluid-howtoplay"
                                                style={{ width: "700px", height: "auto" }}
                                            />
                                        </div>
                                        <div className="text" style={{ textAlign: "left" }}>
                                            <h3>Trade Order Placed</h3>
                                            <p>
                                                Users can go to the "Go to Question Details" tab to view their joined trades.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img
                                                src={getPublicUrl("/img/opinion3.png")}
                                                alt="My Master11 ONE LEAGUE, MULTIPLE TEAMS"
                                                className="img-fluid-howtoplay"
                                                style={{ width: "700px", height: "auto" }}
                                            />
                                        </div>
                                        <div className="text">
                                            <h3>Unmatched, Matched, and Sold Trades</h3>
                                            <p>
                                                Trades that do not have available matches are labeled as "Unmatched."
                                            </p>
                                            <p>
                                                This section displays the total investment and current earnings from all live contests the user has participated in.
                                            </p>
                                            <p>
                                                You can also sell your trades at any time to secure your profits.
                                            </p>
                                        </div>
                                    </li>
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

export default Opinion;
