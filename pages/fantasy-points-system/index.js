import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, pageId } from "../../config";
import { fetchPoints } from "../../services";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import PointsHeader from "../../components/Header/PointsHeader";

const Types = ["T20", "ODI", "TEST", "T10", "THE HUNDRED"];

function FantasyPoint() {
	const router = useRouter();

	const [data, setData] = useState("");
	const [type, setType] = useState("T20");

	useEffect(() => {
		fetchPoints({ type, setData });
	}, [type]);

	return (
		<main>

			<section className="inner_hero_sec padding-top padding-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading">
								<h1>FANTASY POINTS SYSTEM CRICKET
								</h1>

							</div>

						</div>
					</div>
				</div>
			</section>
			<PointsHeader />


			<section className='how-to-play-sec padding-top padding-bottom'>
				<div className='container'>
					{/* <div className='row'>
						<div className='col-md-12'>
							<div className='heading'>
								<h2>
								
									Cricket
								</h2>
							</div>
						</div>
					</div> */}
					<div className='row justify-content-center'>
  <div className='col-md-10'>
    <div className='how-to-main'>
      <div className='how-to-header'>
        <div className='scrollable-nav'>
          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            {Types.map((t) => {
              return (
                <li className='nav-item' role='presentation' key={t}>
                  <button
                    className={`nav-link ${t === type ? "active" : ""}`}
                    id='home-tab'
                    data-bs-toggle='tab'
                    data-bs-target='#home'
                    type='button'
                    role='tab'
                    onClick={() => setType(t)}
                    aria-controls='home'
                    aria-selected={t === type ? "true" : "false"}>
                    {t}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='tab-content main-tab'>
        <div
          className='tab-pane active'
          id='home'
          role='tabpanel'
          aria-labelledby='home-tab'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='cricket-main'>
                <div className='accordion' id='accordionExample'>
                  {data && data.length ? data.map((d, i) => (
                    <div className='accordion-item' key={d.id}>
                      <h2 className='accordion-header' id={`headingOne${d.id}`}>
                        <button
                          className='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#collapseOne${d.id}`}
                          aria-expanded={i === 0 ? "true" : "false"}
                          aria-controls={`collapseOne${d.id}`}>
                          {d.name}
                        </button>
                      </h2>
                      <div
                        id={`collapseOne${d.id}`}
                        className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                        aria-labelledby={`headingOne${d.id}`}
                        data-bs-parent='#accordionExample'>
                        <div className='accordion-body'>
                          <div className='tab-content point-content'>
                            <div
                              className='tab-pane active'
                              id='home1'
                              role='tabpanel'
                              aria-labelledby='point-tab'>
                              <div className='points-body'>
                                <div
                                  className='point-image'
                                  style={{
                                    backgroundImage: `url('img/cricket-sport-img.jpg')`,
                                  }}></div>
                                <div className='table-responsive'>
                                  <table className='table'>
                                    <thead>
                                      {d.fantasy_points.length ? d.fantasy_points.map((f) => (
                                        <tr key={f.name}>
                                          <th scope='col'>
                                            <h6>{f.name}</h6>
                                          </th>
                                          <td scope='col'>
                                            <span>{f.point}</span>
                                          </td>
                                        </tr>
                                      )) : ""}
                                    </thead>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )) : ""}

                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingtwo'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsetwo'
                        aria-expanded='false'
                        aria-controls='collapsetwo'>
                        Other Important Points
                      </button>
                    </h2>
                    <div
                      id='collapsetwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                        <div className='tab-content point-content'>
                          <div
                            className='tab-pane active'
                            id='home1'
                            role='tabpanel'
                            aria-labelledby='point-tab'>
                            <div className='points-body'>
                              <div className='points-data-content'>
                                <ul>
                                  <li>
                                    <strong> Rules about substitutes:</strong>
                                  </li>
                                  <li>
                                    All the X-Factor substitutes will
                                    get 4 points for being announced
                                    and will also score points for any
                                    contributions they make as per our
                                    Fantasy Point System.
                                  </li>
                                  <li>
                                    Concussion & COVID-19 Substitutes,
                                    if permitted as per the applicable
                                    rules and regulations of the
                                    tournament, will be awarded 4
                                    points for making an appearance
                                    (only for T20s, ODs, Tests, T10s
                                    and The Hundred) and will be
                                    awarded points for all the
                                    contributions they make as per the
                                    Fantasy Point System.
                                  </li>
                                  <li>
                                    Substitutes other than Concussion
                                    substitutes, COVID-19 substitutes
                                    or X-Factor substitutes will not
                                    be awarded points for any
                                    contribution they make.
                                  </li>
                                  <li>
                                    In the Big Bash League, if a
                                    player gets replaced by an
                                    X-Factor substitute, but later
                                    comes back on field, he will get
                                    points for his contributions.
                                    However, if a player, who was not
                                    a part of the announced lineups,
                                    comes to the field as a
                                    substitute, he will not get points
                                    for any of his contributions
                                    (except Concussion and COVID-19
                                    substitutes).
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

				</div>
			</section>

		</main>
	);
}

export default FantasyPoint;
