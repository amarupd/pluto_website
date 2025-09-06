import { useRouter } from "next/router";
import React from "react";
import { Sports } from "../../helpers/common";

function PointsHeader() {
  const router = useRouter();

  return (
    <div className="container">
      <div class="htp_tab_outer">
        <div class="htp_tab_box">
          {Sports.map((s) => {
            return (
              <div
                className={`sport-icon ${router.pathname == s.route ? "active" : ""
                  } text-center`}
                onClick={() => {
                  if (s.route) {
                    router.replace(s.route);
                  }
                }}
              >
                {s.svg ? s.svg(router.pathname == s.route ? '#B20201' : "") : s.img ? <img src={s.img} /> : <i class={s.className}></i>}
                <h6
                  className={`${router.pathname == s.route ? "border-cricket " : ""
                    }`}
                >
                  {s.name}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PointsHeader;