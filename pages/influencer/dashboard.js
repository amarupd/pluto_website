import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import { influencer } from "../../services";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";

const AffiliateProgram = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(moment().toDate());
  const [values, setValues] = useState({ from: null, to: null });
  const [applied, setApplied] = useState(false);
  const [game_id, setGame_id] = useState("0");
  const [_game_id, _setGame_id] = useState("0");
  const [data, setData] = useState(null);

  useEffect(() => {
    setApplied(false);
    let diffDays = moment(endDate).diff(moment(startDate), 'days');
    if (diffDays > 30) {
      setEndDate(moment(startDate).add(30, 'days').toDate());
      toast.error("You can only select a maximum date of 30 days.");
    } else {
      setValues({
        from: moment(startDate).format("YYYY-MM-DD"),
        to: moment(endDate).format("YYYY-MM-DD 23:59:59"),
      });
    }
  }, [startDate, endDate]);



  useEffect(() => {
    setValues({
      from: null,
      to: null,
    })
  }, []);


  useEffect(() => {
    if (!router.isReady) return;
    try{
    influencer.dashboard(
      null,
      (d) => {
        // console.log(
        //   "🚀 ~ file: dashboard.js ~ line 25 ~ influencer.dashboard ~ d",
        //   d
        // );
        setData(d?.data);
      },
      router?.query?.token
    );}
    catch
      (d){
        // console.log('..................infdashboard',d)
      }
  }, [router.isReady]);

  const handle_reset = () => {
    if (!router?.query?.token) {
      return;
    }
    setApplied(false)
    setGame_id("0")
    _setGame_id("0")
    setValues({
      from: null,
      to: null,
    })
    try {
      
    
    influencer.dashboard(
      null,
      (d) => {
        // console.log(
        //   "🚀 ~ file: dashboard.js ~ line 25 ~ influencer.dashboard ~ d",
        //   d
        // );
        setData(d?.data);
      },
      router?.query?.token
    );
  } catch (error) {
      console.log('test.......',error.message)
  }
  }

  const handleSubmit = (e, p) => {
    let obj = {
      from: p.startDate.format("YYYY-MM-DD"),
      to: p.endDate.format("YYYY-MM-DD 23:59:59"),
    };
try {
  

    influencer.dashboard(
      obj,
      (d) => {
        // console.log(
        //   "🚀 ~ file: dashboard.js ~ line 25 ~ influencer.dashboard ~ d",
        //   d
        // );
        setData(d?.data);
        // console.log('....................................',data)
      },
      router?.query?.token
    );
  } catch (error) {
    console.log('test 1.......',error.message)
  }
  };

  const getDetails = () => {
    if (!router?.query?.token) {
      return;
    }
 if (values.from === null || values.to === null) {
    toast.error("Please select a date range before viewing details.");
    return; 
  }
    if (!data || (data.matches === 0 && data.team_joins === 0 && data.deposit === 0 && data.winning === 0)) {
      toast.error("No user found. Unable to view details.");
    } else {

      router.push(`/influencer/matches?from=${values.from || ""}&to=${values.to || ""}&token=${router?.query?.token}&game_id=${game_id}`);
    }
  };

  const handle_select = (e) => {
    let val = e.target.value;
    setApplied(false);
    setGame_id(val);
  };

  const handle_apply = () => {


    let t = toast.loading("loading...", { duration: 3000 });
    let obj = {
      from: values.from,
      to: values.to,
      game_id: game_id,
    };
try {
  

    influencer.dashboard(
      obj,
      (d) => {
        toast.dismiss(t);

        _setGame_id(game_id);
        setData(d?.data);
        setApplied(true)
      },
      router?.query?.token,
      () => {
        toast.dismiss(t);
        _setGame_id(game_id);
        setData(null);
        setApplied(true)
      }
    );
  } catch (error) {
    console.log('test 2.......',error.message)
  }
  };

  return (
    <main>
      <div className="mobileview">
        <div className="mobile-header">
          {/* <i className="fa-solid fa-arrow-left" onClick={() => { router.back }} /> */}
          <h6 className="mx-auto">AFFILIATE PROGRAM</h6>
        </div>
        <div className="mobile-main">
          <div className="filter-section" >
            <div className="Choose-team-select">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handle_select}
              >
                <option selected value={"0"}>
                  All Games
                </option>
                <option value={"1"}>
                  Cricket
                </option>
                <option value="5">Football</option>
                <option value="6">Kabaddi</option>
                <option value="69">Opinion</option>
              </select>
            </div>
            <div className="start-end-btn">
              {/* <input type={"date"} /> */}
              {/* <DateRangePicker onApply={handleSubmit} initialSettings={{ startDate: moment().subtract(6, 'days').format("MM/DD/YYYY"), endDate: moment().format("MM/DD/YYYY") }} > */}
              {/* <label htmlFor="start_date" className="btn btn-primary" >START DATE</label> */}
              {/* <input type="date" id="start_date" style={{ display: "block" }} /> */}
              <div className="btn btn-primary start_date_btn">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                  className="start_date_btn_input"
                />
                {values.from ?? "START DATE"}
              </div>
              {/* </DateRangePicker> */}

              <div className="end-btn btn start_date_btn">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  className="start_date_btn_input"
                />
                {values.to ? moment(endDate).format("YYYY-MM-DD") : "END DATE"}
              </div>
              {/* <button className="end-btn btn">END DATE</button> */}
            </div>
            <div className="get-btn alskjglksd">
              <button className={`cmn-btn apply-filter-btn ${applied ? "applied-filter-btn" : ""}`} onClick={handle_apply}>

                {
                  applied ? "APPLIED" : "APPLY"
                }

              </button>
              <button className="cmn-btn reset-filter-btn" onClick={handle_reset} >
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>

          </div>

          <div className="row">
            <div className="col-6">
              <div className="match-content">
                <div className="match-icon">
                  <img
                    src={
                      _game_id == "1"
                        ? "/img/bat.png"
                        : _game_id == "5"
                          ? "/img/ftb-ball.png"
                          : _game_id == "6"
                            ? "/img/kabaddi.svg"
                            : "/img/multi-sports.png"
                    }
                    alt="#"
                    width={45}
                    height={44}
                  />
                  <h6>MATCH</h6>
                  <h5>{data?.matches || 0}</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="match-content">
                <div className="match-icon">
                  <img src="/img/Hand.png" alt="#" />
                  <h6>TEAM JOINED</h6>
                  <h5>{data?.team_joins || 0}</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="match-content">
                <div className="match-icon">
                  <img src="/img/deposit.png" alt="#" />
                  <h6>DEPOSIT</h6>
                  <h5>₹{(data?.deposit || 0).toFixed(2)}</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="match-content">
                <div className="match-icon">
                  <img src="/img/trophy.png" alt="#" />
                  <h6>WINNING</h6>
                  <h5>₹{(data?.winning || 0).toFixed(2)}</h5>
                </div>
              </div>
            </div>
            <div className="mobile-blance d-flex justify-content-between">
              <h5 className>AFFILIATION BALANCE:</h5>
              <h5>₹{(data?.balance || 0).toFixed(2)}</h5>
            </div>
            <div className="col-12 mt-2">
              <div className="get-btn">
                <button className="btn get" onClick={getDetails}>
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default AffiliateProgram;