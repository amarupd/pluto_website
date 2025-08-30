import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { influencer } from "../../services";
import moment from "moment";
const Affilate = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    from: null,
    to: null,
  });

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    let { from, to, token, game_id } = router.query;
    let obj = {
      from,
      to,
      game_id,
    };
    setValues(obj);
    influencer.matches(
      obj,
      (d) => {
        let fixture = d?.data?.sort((a, b) => {
          return (
            new Date(b?.fixture?.starting_at) -
            new Date(a?.fixture?.starting_at)
          );
        });
        setData(fixture);
        setLoading(false)
      },
      token,
      console.log('..............',token)
    );
  }, [router.isReady]);

  const getDetails = (fixture_id) => () => {
    if (!router?.query?.token) {
      return;
    }
    router.push(
      `/influencer/contests?from=${values.from}&to=${values.to}&fixture_id=${fixture_id}&token=${router?.query?.token}&game_id=${router?.query?.game_id}`,
    );
  };

  return (
    <main>
      <div className='mobileview'>
        <div className='mobile-header'>
          <i
            className='fa-solid fa-arrow-left'
            onClick={() => {
              router.back();
            }}
          />
          <h6 className='mx-auto'>AFFILIATE</h6>
        </div>
        <div className='mobile-main'>
          <div className='affiliate-main'>


            {data.length ? (
              data.map((d) => {
                let fixture = d?.fixture;
                let winning = d?.winning;
                return (
                  <div
                  key={d.fixture_id}
                    className='affliliate-card'
                    onClick={getDetails(d?.fixture_id)}>
                    <div className='heading'>
                      <h6>{fixture?.competition_name} </h6>
                      <h6 style={{ fontSize: 12 }}>
                        {moment(fixture?.starting_at).format("DD MMM YYYY")}{" "}
                      </h6>
                    </div>
                    <div className='content'>
                      <div className='left-c'>
                        <h5>{fixture?.teama?.substr(0, 10)}</h5>
                        <img
                          src={fixture?.teama_image || "/img/ind.png"}
                          className='img-fluid flag-ico'
                          alt
                        />
                        <strong className='team-name ms-1'>
                          {fixture?.teama_short_name}
                        </strong>
                      </div>
                      <div className='center-text'>
                        <h4>Winner Declared</h4>
                      </div>
                      <div className='left-c'>
                        <h5>{fixture?.teamb?.substr(0, 10)}</h5>
                        <strong className='team-name me-1'>
                          {fixture?.teamb_short_name}
                        </strong>
                        <img
                          src={fixture?.teamb_image || "/img/ind.png"}
                          className='img-fluid flag-ico'
                          alt
                        />
                      </div>
                    </div>
                    <div className='footer-cards'>
                      <h3>TOTAL AFFLLIATION: ₹{(winning || 0).toFixed(2)}</h3>
                      {d?.pending_winning > 0 ? (
                        <span className='pending-winning'>PENDING</span>
                      ) : (
                        <span className='pending-winning success'>
                          COMPLETE
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : loading ? (
              <div className='match-loading'>
                <div className='lds-ring'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : <></>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Affilate;
