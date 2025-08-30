import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { influencer } from "../../services";

const EnteryView = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    from: null,
    to: null,
    fixture_id: null,
  });

  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (!router.isReady) return;
    let { from, to, token, fixture_id, game_id } = router.query;
    let obj = {
      from,
      to,
      fixture_id,
      game_id,
    };
    setValues(obj);
    influencer.contests(
      obj,
      (d) => {
        setData(d?.data);
        setMeta(d?.meta);
        setLoading(false)

      },
      token
    );
  }, [router.isReady]);

  const getDetails = (contest_id) => () => {
    if (!router?.query?.token) {
      return;
    }
    router.push(
      `/influencer/teams?from=${values.from}&to=${values.to}&contest_id=${contest_id}&token=${router?.query?.token}&game_id=${router?.query?.game_id}`
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
        <div className="mobile-main ksdjgkljsd">
          <div className="affiliate-main">
            {data.length
              ? data.map((d) => {
                let contest = d?.contest;
                let fixture = d?.fixture;
                let winning = d?.winning;
                return (
                  <div
                    key={d?.contest_id}
                    className="view-card-affiliate"
                    onClick={getDetails(d?.contest_id)}
                  >
                    <div className="content-main">
                      <div className="heading">
                        <div className="head-card">
                          <h2>₹{contest?.prize}</h2>
                          <p>Pool Prize</p>
                        </div>
                        <div className="head-card text-center">
                          <h2>{contest?.total_teams}</h2>
                          <p>Slot</p>
                        </div>
                        <div className="head-card text-end">
                          <h2>₹{contest?.entry_fee}</h2>
                          <p>Entry Fee</p>
                        </div>
                      </div>
                      <div className="content">
                        <div className="left-c">
                        <h5>
                            {router?.query?.game_id== 69
                              ? `${d?.joined_users || 0 } Quantity`
                              : `${d?.joined_users || 0} Joined`}
                          </h5>
                        </div>
                        <div className="left-c">
                          {/* <h5>Used Bonus ₹0</h5> */}
                        </div>
                      </div>
                    </div>
                    <div className="footer-cards">
                      <h3 className="green-txt">
                        Earn ₹{(winning || 0).toFixed(2)}
                      </h3>
                      <h3 className="red-text">
                        View Teams
                        <svg
                          width={12}
                          height={13}
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_16_193)">
                            <path
                              d="M4.70564 5.88896L0.247428 1.43443C0.169088 1.3565 0.106922 1.26385 0.0645018 1.16182C0.0220818 1.05979 0.000244141 0.950376 0.000244141 0.839876C0.000244141 0.729376 0.0220818 0.619966 0.0645018 0.517932C0.106922 0.415899 0.169088 0.323255 0.247428 0.245325C0.406307 0.0884888 0.620571 0.000549316 0.84382 0.000549316C1.06707 0.000549316 1.28133 0.0884888 1.44021 0.245325L6.49114 5.29257C6.64392 5.44575 6.73171 5.65196 6.73624 5.86826C6.74076 6.08455 6.66167 6.29426 6.51544 6.45369L1.44316 11.5341C1.28436 11.6868 1.07203 11.7712 0.851719 11.7692C0.631403 11.7673 0.420632 11.679 0.264599 11.5235C0.108565 11.3679 0.0196904 11.1574 0.0170311 10.9371C0.0143719 10.7168 0.0981395 10.5042 0.250373 10.345L4.70564 5.88896Z"
                              fill="#E10000"
                            />
                            <path
                              opacity="0.6"
                              d="M9.96932 6.25623L5.51037 1.80169C5.43203 1.72376 5.36986 1.63112 5.32744 1.52908C5.28502 1.42705 5.26318 1.31764 5.26318 1.20714C5.26318 1.09664 5.28502 0.987229 5.32744 0.885196C5.36986 0.783163 5.43203 0.690519 5.51037 0.612588C5.66925 0.455753 5.88351 0.367813 6.10676 0.367813C6.33001 0.367813 6.54427 0.455753 6.70315 0.612588L11.7548 5.66057C11.9076 5.81375 11.9954 6.01996 11.9999 6.23626C12.0044 6.45255 11.9253 6.66226 11.7791 6.82169L6.70683 11.9021C6.54803 12.0548 6.33571 12.1392 6.11539 12.1372C5.89508 12.1353 5.68431 12.047 5.52827 11.8915C5.37224 11.7359 5.28337 11.5254 5.28071 11.3051C5.27805 11.0848 5.36181 10.8722 5.51405 10.713L9.96932 6.25623Z"
                              fill="#E10000"
                              fillOpacity="0.3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_16_193">
                              <rect
                                width={12}
                                height="12.1495"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </h3>
                    </div>
                  </div>
                );
              })
              : loading ? (
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
        <div className="footer-bars d-flex justify-content-between align-items-center text-center">
          <div className="contest">
            <h6>Joined</h6>
            <h6>{data.reduce((a, b) => a + parseFloat(b.joined_users), 0)}</h6>
          </div>
          <div className="contest">
            <h6>Total Contest</h6>
            <h6>{data.length}</h6>
          </div>
          <div className="contest">
            <h6>Earn</h6>
            <h6>
              ₹
              {(
                data.reduce((a, b) => a + parseFloat(b.winning), 0) || 0
              ).toFixed(2)}
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnteryView;
