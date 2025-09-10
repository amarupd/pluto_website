import React, { useEffect, useState } from "react";
import Link from "next/link";
import { app_debug_url, app_ios_url, app_debug_url2 } from "../../config/index";
import { getMobileOperatingSystem, getPublicUrl } from "../../helpers/common";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [platform, setPlatform] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    setPlatform(getMobileOperatingSystem());
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.isReady]);

  return (
    <header>
      <nav
        className={`navbar navbar-light custom-navbar ${scrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: isMobile ? 9999 : 1000, // Higher zIndex for mobile
          boxShadow: scrolled ? "0 4px 8px rgba(216 119 119 / 44%) " : "none", // Shadow on scroll
        }}
      >
        <div className="container">
          <div className="nav-header d-flex justify-content-between align-items-center">
            <div>
              <Link href="/" rel="canonical">
                <a className="navbar-brand">
                  <img
                    src={getPublicUrl("/img/pluto.png")}
                    className="img-fluid w-100"
                    alt="My Master11 Logo"
                  />
                </a>
              </Link>
            </div>

            <div className="d-flex align-items-center">
            <Link
                rel="canonical"
                href={
                  platform === "Android"
                    ? app_debug_url
                    : platform === "iOS"
                      ? app_debug_url
                      : app_debug_url
                }
              >
                <a className="btn btn-primary ml-3">
                  <i className="fas fa-download"></i>
                  Download App
                </a>
              </Link>

              {/* Conditionally render the QR code image */}
              {/* {!isMobile && (
                <Link rel="canonical" href="/">
                  <img
                    src={getPublicUrl("img/qr3.png")}
                    className="qr-code-image ml-4"
                    alt="My Master11 Download the app"
                    style={{ marginLeft: "20px" }}
                  />
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .custom-navbar {
          transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
          background-color: rgba(173, 216, 230, 0.6); /* Light blue with transparency */
          backdrop-filter: blur(0px); /* No blur at the top */
        }

        .custom-navbar.scrolled {
          background-color: rgba(216 119 119 / 44%) !important; /* Very light blue background when scrolled */
          backdrop-filter: blur(8px); /* Add blur effect with a slight blur */
        }

        /* Additional styles for mobile */
        // @media (max-width: 768px) {
        //   .custom-navbar {
        //     z-index: 9999 !important; /* Ensure navbar stays on top on mobile */
        //   }
        }
      `}</style>
    </header>
  );
}

export default Header;
