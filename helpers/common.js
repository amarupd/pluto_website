export function createMarkup(html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export const DateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

export function DatetoString(date) {
    return new Date(date).toLocaleDateString(
        "en-US",
        DateOptions
    );
}

export const socialShare = {
    twitter: (window) => {
        window.location.assign(
            `https://twitter.com/intent/tweet?url=${window?.location?.href}/&text=Hey!%20Check%20this%20awesome%20Blog%20from%MyMaster11`
        );
    },
    facebook: (window) => {
        window.location.assign(
            `https://www.facebook.com/sharer/sharer.php?u=${window?.location?.href}`
        );
    },
    whatsapp: (window) => {
        window.location.assign(`whatsapp://send?text=${window?.location?.href}\n%20Hey!%20Check%20this%20awesome%20Blog%20from%MyMaster11`)
    },
    teleGram: (window) => {
        window.location.assign(`https://t.me/share/url?url=${window?.location?.href}&text=Hey!%20Check%20this%20awesome%20Blog%20from%20MyMaster11`)

    },
}

export function isNotEmpty(object) {
    for (const property in object) {
        return true;
    }
    return false;
}


export const Sports = [
    {
        name: "Cricket",
        route: "/fantasy-points-system",
        className: "far fa-basketball-ball"
    },
    {
        name: "Football",
        route: "/fantasy-points-system/football",
        className: "far fa-futbol"
    },
    {
        name: "Kabaddi",
        route: "/fantasy-points-system/kabaddi",
        className: "far fa-kabaddi",
        img: "/img/kabaddi.png",
        svg: (color = 'none') => {
            return (
                <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_469)">
                        <path d="M238.933 226.133C260.267 247.467 285.867 258.133 315.733 258.133L317.867 302.933C277.333 302.933 241.067 288 209.067 258.133L194.133 243.2L145.067 294.4L192 339.2V467.2H149.333V356.267L121.6 330.667V377.6L32 469.333L2.13333 439.467L78.9333 362.667L53.3333 288C49.0667 275.2 55.4667 264.533 66.1333 256L136.533 185.6C145.067 174.933 155.733 170.667 166.4 170.667C177.067 170.667 183.467 172.8 189.867 177.067L238.933 226.133ZM512 253.867H469.333V181.333L430.933 166.4L450.133 260.267L471.467 371.2L490.667 465.067H445.867L407.467 294.4L362.667 337.067V465.067H320V305.067L364.8 262.4L352 198.4C339.2 211.2 324.267 224 307.2 232.533C288 230.4 268.8 221.867 253.867 206.933C288 200.533 311.467 183.467 326.4 157.867L347.733 123.733C360.533 102.4 379.733 96 403.2 106.667L512 153.6V253.867ZM243.2 93.8667C266.667 93.8667 285.867 113.067 285.867 136.533C285.867 160 266.667 179.2 243.2 179.2C219.733 179.2 200.533 160 200.533 136.533C200.533 113.067 219.733 93.8667 243.2 93.8667ZM352 6.39999C375.467 6.39999 394.667 25.6 394.667 49.0667C394.667 72.5333 375.467 91.7333 352 91.7333C328.533 91.7333 309.333 72.5333 309.333 49.0667C309.333 25.6 328.533 6.39999 352 6.39999Z" fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_469">
                            <rect width="512" height="512" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        }
    },
    {
        name: "Baseball",
        route: "/fantasy-points-system/baseball"
        , className: "fas fa-baseball-ball"
    },
    {
        name: "Basketball",
        route: "/fantasy-points-system/basketball"
        , className: "far fa-basketball-ball"
    },
    {
        name: "NFL",
        route: ""
        , className: "fas fa-football-ball"
    },

    {
        name: "Hockey",
        route: "/fantasy-points-system/hockey",
        className: "",
        img: "/img/hockey.png"
    },

    {
        name: "Handball",
        route: "",
        className: "fas fa-baseball-ball"
    },
    {
        name: "Volleyball",
        route: "",
        className: "fas fa-volleyball-ball"
    },


]

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
export function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}


export const getPublicUrl = (path = "") => {
    if (path.split("")[0] != "/") {
        path = "/" + path;
    }
    const url = 'https://s3pluto143.s3.us-east-1.amazonaws.com/web-assets/public' + path;
    return url;
}