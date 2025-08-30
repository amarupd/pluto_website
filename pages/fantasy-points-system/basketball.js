import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, pageId } from "../../config";
import {  fetchBkbPoints, fetchPoints } from "../../services";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import PointsHeader from "../../components/Header/PointsHeader";

const Types = [];

function FantasyPoint() {
    const router = useRouter();

    const [data, setData] = useState("");
    const [type, setType] = useState("T20");

    useEffect(() => {
        fetchBkbPoints({ setData });

        // console.log(data);
    }, []);

    return (
        <main>
            <section className="inner_hero_sec padding-top padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading">
                                <h1>FANTASY POINTS SYSTEM BASKETBALL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PointsHeader />

            <section className="how-to-play-sec padding-top padding-bottom">
                <div className="container">
                    {/* <div className='row'>
<div className='col-md-12'>
<div className='heading'>
<h2>

Cricket
</h2>
</div>
</div>
</div> */}
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="how-to-main">
                                <div className="how-to-header">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        {Types.map((t) => {
                                            return (
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`nav-link ${t === type ? "active" : ""}`}
                                                        id="home-tab"
                                                        data-bs-toggle="tab"
                                                        data-bs-target="#home"
                                                        type="button"
                                                        role="tab"
                                                        onClick={(e) => {
                                                            setType(t);
                                                        }}
                                                        aria-controls="home"
                                                        aria-selected="true"
                                                    >
                                                        {t}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="tab-content main-tab">
                                    <div
                                        className="tab-pane active"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                    >
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="cricket-main">
                                                    <div className="accordion" id="accordionExample">
                                                        {/* <div className='accordion-item'>
<h2 className='accordion-header' id='headingtwo2'>
<button
className='accordion-button'
type='button'
data-bs-toggle='collapse'
data-bs-target='#collapsetwo2'
aria-expanded='true'
aria-controls='collapsetwo'>
Creating Your Team
</button>
</h2>
<div
id='collapsetwo2'
className='accordion-collapse collapse show'
aria-labelledby='headingtwo2'
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
<strong>
{" "}
Rules about substitutes:
</strong>
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
</div> */}

                                                        <div className="accordion-body">
                                                            <div className="tab-content point-content">
                                                                <div
                                                                    className="tab-pane active"
                                                                    id="home1"
                                                                    role="tabpanel"
                                                                    aria-labelledby="point-tab"
                                                                >
                                                                    <div className="points-body">
                                                                        <div
                                                                            className="point-image"
                                                                            style={{
                                                                                backgroundImage: `url('/basketball.png')`,
                                                                                backgroundSize: "contain",
                                                                            }}
                                                                        ></div>
                                                                        <div className="table-responsive">
                                                                            <table className="table">
                                                                                <thead>
                                                                                    {data && data.length
                                                                                        ? data.map((d, i) => {
                                                                                            return (
                                                                                                <tr>
                                                                                                    <th scope="col">
                                                                                                        <h6>
                                                                                                            {d.name}
                                                                                                        </h6>
                                                                                                    </th>
                                                                                                    <th scope="col">
                                                                                                        <h6>
                                                                                                            {d.code || ""}
                                                                                                        </h6>
                                                                                                    </th>
                                                                                                    <td scope="col">
                                                                                                        <span>
                                                                                                            {d.point}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            );
                                                                                        })
                                                                                        : ""}
                                                                                </thead>
                                                                            </table>
                                                                        </div>
                                                                        {/* <div className='points-data-content'>
<ul>
<li>
Any player scoring a century will
only get points for the century.
No points will be awarded as their
30 run Bonus or Half-century
Bonus. Additionally, no points are
awarded for centuries in T10
matches.
</li>
<li>
If any runs are scored on an
overthrow, points for those runs
will be credited to the batter on
strike for that ball. However, if
the overthrow goes for a boundary,
the batter will not receive extra
Boundary Bonus points.
</li>
</ul>
</div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingtwo">
                                                                <button
                                                                    className="accordion-button"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#collapsetwo"
                                                                    aria-expanded="false"
                                                                    aria-controls="collapsetwo"
                                                                >
                                                                    Other Important Points
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id="collapsetwo"
                                                                className="accordion-collapse collapse"
                                                                aria-labelledby="headingOne"
                                                                data-bs-parent="#accordionExample"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div className="tab-content point-content">
                                                                        <div
                                                                            className="tab-pane active"
                                                                            id="home1"
                                                                            role="tabpanel"
                                                                            aria-labelledby="point-tab"
                                                                        >
                                                                            <div className="points-body">
                                                                                <div className="points-data-content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <strong>
                                                                                                {" "}
                                                                                                Rules about substitutes:
                                                                                            </strong>
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
