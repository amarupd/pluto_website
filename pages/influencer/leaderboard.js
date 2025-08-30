import React, { useEffect, useState } from 'react'


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/router';
import { influencer } from '../../services';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { getPublicUrl } from '../../helpers/common';

const styles = {
    tabs: {
        background: '#fff',
        height: "40px"
    },
    tab: {
        width: "50%"
    },
    slide: {

        minHeight: '80vh',

    },
    slide1: {

    },
    slide2: {

    },
    slide3: {

    },
};

function HgGames() {

    const router = useRouter();

    const [data, setData] = useState(null)

    const [seriesList, setSeriesList] = useState([]);
    const [series, setSeries] = useState(null);
    const [selectedSeries, setselectedSeries] = useState('');

    const handleChangeSeries = (event) => {
        setselectedSeries(event.target.value);
        let { token } = router.query;


        if (!token) return;
        influencer.leaderboard_by_series({ series_id: event.target.value }, (d) => {
            setSeries(d.data);
        }, token)
    };




    const [index, setIndex] = useState((0));

    useEffect(() => {
        if (!router.isReady) return;
        let { token } = router.query;


        if (!token) return;

        influencer.leaderboard({}, (d) => {
            setData(d?.data);

        }, token)

    }, [router.isReady])



    const handleChange = (event, value) => {
        // console.log(value);

        setIndex(value);
        let { token } = router.query;


        if (!token) return;
        if (value == 1) {
            // console.log(value)

            influencer.seriesList({}, (d) => {
                setSeriesList(d?.data);
                setselectedSeries(d?.data[0]?.id);

                const val = document.getElementById("demo-simple-select")
                // console.log(val);
                val.innerHTML = d?.data[0]?.title
                influencer.leaderboard_by_series({ series_id: d.data[0].id }, (d) => {
                    setSeries(d.data)
                }, token)
            }, token)
        }
    };

    const handleChangeIndex = index => {
        // console.log(index);
        setIndex(index);

        let { token } = router.query;


        if (!token) return;

        if (index == 1) {

            influencer.seriesList({}, (d) => {
                setSeriesList(d.data);
                setselectedSeries(d?.data[0]?.id);

                const val = document.getElementById("demo-simple-select")
                // console.log(val);
                val.innerHTML = d?.data[0]?.title
                influencer.leaderboard_by_series({ series_id: d.data[0].id }, (d) => {
                    setSeries(d.data)
                }, token)
            }, token)
        }
    };


    return (
        <>
            <div className="mobileview">
                <div className="mobile-header">
                    <div className="prize-heading">
                        <div className="left-arrow">
                            <img src={getPublicUrl("/img/left-arrow.png")} alt="" />
                        </div>
                        <div className="tournament">
                            <div className="tour-img">
                                <img src={getPublicUrl("/img/trophy_2.png")} alt="" />
                            </div>
                        </div>
                        <div className='ph-3' >
                            <h6>Leaderboard</h6>
                            <small>Influencers</small>
                        </div>
                    </div>
                </div>
                <div>
                    <Tabs value={index} fullWidth onChange={handleChange} style={styles.tabs}>
                        <Tab label="Global" style={styles.tab} />
                        <Tab label="By Series" style={styles.tab} />
                    </Tabs>
                    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>

                        <div style={Object.assign({}, styles.slide, styles.slide2)}>
                            <div className="leaderboard-rank">
                                <div className="rank-list">
                                    <div className="first-rank">
                                        <h5>2</h5>
                                        <img src={data?.second?.user?.photo || '/img/user_image.png'} alt="" className='rank-dp' />
                                        <h6 className='points'>₹{data?.second?.amount} </h6>
                                        <h6 className='name-win'>{data?.second?.user?.username}</h6>
                                    </div>
                                </div>
                                <div className="rank-list">
                                    <div className="first-rank">
                                        <img src={getPublicUrl("/img/crown.png")} alt="" className='crown' />
                                        <img src={data?.first?.user?.photo || '/img/user_image.png'} alt="" className='firstrank-dp' />
                                        <h6 className='points'>₹{data?.first?.amount}</h6>
                                        <h6 className='name-win'>{data?.first?.user?.username}</h6>
                                    </div>
                                </div>
                                <div className="rank-list">
                                    <div className="first-rank">
                                        <h5>3</h5>
                                        <img src={data?.third?.user?.photo || '/img/user_image.png'} alt="" className='rank-dp' />
                                        <h6 className='points'> ₹{data?.third?.amount || "0"} </h6>
                                        <h6 className='name-win'>{data?.third?.user?.username || "No user"}</h6>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="teams-main">
                                <div className="team">
                                    <h6>Teams</h6>
                                </div>
                                <div className="team-rank">
                                    <h6>Rank</h6>
                                </div>
                            </div> */}


                            <div className="teamname">
                                <div className='team-bg tb-mine'>
                                    <span className='tb-l' >
                                        <div className="teamane-main">
                                            <div className="team-img">
                                                <img src={data?.my_rank?.user?.photo || '/img/user_image.png'} alt="" className='team-dp' />
                                            </div>
                                            <div className="tename">
                                                <h5>{data?.my_rank?.user?.username}</h5>
                                                <h6>₹{data?.my_rank?.amount}</h6>
                                            </div>
                                        </div>
                                    </span>
                                    <span className='tb-r' >
                                        <h5 className='rankt'>{data?.my_rank?.rank}</h5>
                                    </span>

                                </div>

                                {
                                    data?.ranks?.length ?
                                        data?.ranks?.map((d) => {
                                            return (
                                                <div className='team-bg' key={d?.user?.id || d?.rank}>
                                                    <span className='tb-l' >
                                                        <div className="teamane-main">
                                                            <div className="team-img">
                                                                <img src={d?.user?.photo || '/img/user_image.png'} alt="" className='team-dp' />
                                                            </div>
                                                            <div className="tename">
                                                                <h5>{d?.user?.username}</h5>
                                                                <h6>₹{d?.amount}</h6>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <span className='tb-r' >
                                                        <h5 className='rankt'>{d?.rank}</h5>
                                                    </span>

                                                </div>
                                            )
                                        }) : ""
                                }

                            </div>

                        </div>
                        <div style={Object.assign({}, styles.slide, styles.slide2)}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Series</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedSeries}
                                    label="Series"
                                    onChange={handleChangeSeries}
                                >
                                    {
                                        seriesList.length ?
                                            seriesList.map(d => {
                                                return (
                                                    <MenuItem key={d?.id}>{d?.title}</MenuItem>
                                                )
                                            })
                                            : ""
                                    }

                                </Select>
                            </FormControl>
                            {
                                series?.first ?
                                    <div className="leaderboard-rank">

                                        <div className="rank-list">
                                            <div className="first-rank">
                                                <h5>2</h5>
                                                <img src={series?.second?.user?.photo || '/img/user_image.png'} alt="" className='rank-dp' />
                                                <h6 className='points'>₹{series?.second?.amount} </h6>
                                                <h6 className='name-win'>{series?.second?.user?.username}</h6>
                                            </div>
                                        </div>
                                        <div className="rank-list">
                                            <div className="first-rank">
                                                <img src={getPublicUrl("/img/crown.png")} alt="" className='crown' />
                                                <img src={series?.first?.user?.photo || '/img/user_image.png'} alt="" className='firstrank-dp' />
                                                <h6 className='points'>₹{series?.first?.amount}</h6>
                                                <h6 className='name-win'>{series?.first?.user?.username}</h6>
                                            </div>
                                        </div>
                                        <div className="rank-list">
                                            <div className="first-rank">
                                                <h5>3</h5>
                                                <img src={series?.third?.user?.photo || '/img/user_image.png'} alt="" className='rank-dp' />
                                                <h6 className='points'> ₹{series?.third?.amount || "0"} </h6>
                                                <h6 className='name-win'>{series?.third?.user?.username || "No user"}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    : <div className='no-data' >
                                        <img src={getPublicUrl('/404-data.png')} />
                                        <br />
                                        <p>No Data Found</p>
                                    </div>
                            }
                            {
                                /* <div className="teams-main">
                                    <div className="team">
                                        <h6>Teams</h6>
                                    </div>
                                    <div className="team-rank">
                                        <h6>Rank</h6>
                                    </div>
                                </div> */
                            }


                            <div className="teamname">
                                {
                                    series?.my_rank ?


                                        <div className='team-bg tb-mine'>
                                            <span className='tb-l' >
                                                <div className="teamane-main">
                                                    <div className="team-img">
                                                        <img src={series?.my_rank?.user?.photo || '/img/user_image.png'} alt="" className='team-dp' />
                                                    </div>
                                                    <div className="tename">
                                                        <h5>{series?.my_rank?.user?.username}</h5>
                                                        <h6>₹{series?.my_rank?.amount}</h6>
                                                    </div>
                                                </div>
                                            </span>
                                            <span className='tb-r' >
                                                <h5 className='rankt'>{series?.my_rank?.rank}</h5>
                                            </span>

                                        </div>
                                        : ""
                                }

                                {
                                    series?.ranks?.length ?
                                        series?.ranks?.map((d) => {
                                            return (
                                                <div className='team-bg' key={d?.user?.id || d?.rank}>
                                                    <span className='tb-l' >
                                                        <div className="teamane-main">
                                                            <div className="team-img">
                                                                <img src={d?.user?.photo || '/img/user_image.png'} alt="" className='team-dp' />
                                                            </div>
                                                            <div className="tename">
                                                                <h5>{d?.user?.username}</h5>
                                                                <h6>₹{d?.amount}</h6>
                                                            </div>
                                                        </div>
                                                    </span>
                                                    <span className='tb-r' >
                                                        <h5 className='rankt'>{d?.rank}</h5>
                                                    </span>

                                                </div>
                                            )
                                        }) : ""
                                }

                            </div>

                        </div>


                    </SwipeableViews>
                </div>
            </div>





        </>
    )
}

export default HgGames