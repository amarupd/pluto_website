import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { influencer } from "../../services";

const Earn = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    from: null,
    to: null,
    contest_id: null,
  });

  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (!router.isReady) return;
    let { from, to, token, contest_id, game_id } = router.query;
    let obj = {
      from,
      to,
      contest_id,
      game_id,
    };
    setValues(obj);
    influencer.teams(
      obj,
      (d) => {
        setData(d?.data);
        setMeta(d?.meta);
        setLoading(false)
      },
      token
    );
  }, [router.isReady]);

  const getDetails = () => {
    if (!router?.query?.token) {
      return;
    }
    router.push(
      `/influencer/contests?from=${values.from}&to=${values.to}&fixture_id=${values.fixture_id}&token=${router?.query?.token}&game_id=${router?.query?.game_id}`
    );
  };

  return (
    <main>
      <div className="mobileview">
        <div className="mobile-header">
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => {
              router.back();
            }}
          />

          <h6 className="mx-auto">
            {meta?.fixture?.teama_short_name} VS{" "}
            {meta?.fixture?.teamb_short_name}
          </h6>
        </div>
        <div className="affiliate-main pt-0 position-sticky top-0">
          <div className="view-card-affiliate rounded-0 mb-0">
            <div className="content-main">
              <div className="heading">
                <div className="head-card">
                  <h2>₹{meta?.contest?.prize}</h2>
                  <p>Pool Prize</p>
                </div>
                <div className="head-card text-center">
                  <h2>{meta?.contest?.total_teams}</h2>
                  <p>Slot</p>
                </div>
                <div className="head-card text-end">
                  <h2>₹{meta?.contest?.entry_fee}</h2>
                  <p>Entry Fee</p>
                </div>
              </div>
              <div className="content">
                <div className="left-c">
                  <h5>{data?.length} Joined</h5>
                </div>
                <div className="left-c">{/* <h5>Used Bonus ₹0</h5> */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-main">
          {data?.length
            ? data?.map((d) => {
              let user = d?.earn_by_user;
              return (
                <div className="earn-card">
                  <div className="left-card">
                    <img
                      src={user?.photo || "/img/hero-player-5.png"}
                      className="img-fluid"
                      alt
                    />
                    <h6>{user?.username}</h6>
                  </div>
                  <div className="right-card">
                    <h6>Earn ₹{(parseFloat(d?.amount) || 0)?.toFixed(2)}</h6>
                  </div>
                </div>
              );
            })
            : loading ? (
              <div className='match-loading'>
                <div class='lds-ring'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : <></>}
        </div>
      </div>
    </main>
  );
};

export default Earn;
