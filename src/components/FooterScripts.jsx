import React, { useEffect } from "react";

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      console.log("✅ Skip if already loaded");
      resolve(); // Skip if already loaded
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = resolve; // Resolve when script loads
    script.onerror = reject; // Reject if there's an error
    document.body.appendChild(script);
  });
};

const loadFooterScripts = async () => {
  try {
    // Load jQuery first
    await loadScript("/assets/js/vendors/jquery-3.6.0.min.js");
    console.log("✅ jQuery loaded");

    // Load Bootstrap & dependencies
    await loadScript("/assets/js/vendors/bootstrap.bundle.min.js");

    // Load Swiper.js **after jQuery & Bootstrap**
    //delete dipi //delete dipi
    await loadScript("/assets/js/vendors/swiper-bundle.min.js");
    console.log("✅ Swiper loaded"); // Load remaining scripts

    /* npm install swiper */ const scripts = [
      "/assets/js/vendors/jquery-migrate-3.3.0.min.js",
      "/assets/js/vendors/waypoints.js",
      "/assets/js/vendors/wow.js",
      "/assets/js/vendors/magnific-popup.js",
      "/assets/js/vendors/perfect-scrollbar.min.js",
      "/assets/js/vendors/select2.min.js",
      "/assets/js/vendors/isotope.js",
      "/assets/js/vendors/scrollup.js",
      "/assets/js/vendors/noUISlider.js",
      "/assets/js/vendors/slider.js",
      "/assets/js/vendors/counterup.js",
      "/assets/js/vendors/jquery.countdown.min.js",
      "/assets/js/vendors/jquery.elevatezoom.js",
      "/assets/js/vendors/slick.js",
      "/assets/js/main.js?v=3.0.0",
      "/assets/js/shop.js?v=1.2.1",
    ];

    await Promise.all(scripts.map(loadScript));
    console.log("✅ All footer scripts loaded successfully");
  } catch (err) {
    console.error("❌ Error loading footer scripts:", err);
  }
};

const FooterScripts = () => {
  useEffect(() => {
    let isMounted = true;

    loadFooterScripts()
      .then(() => {
        if (isMounted) {
          console.log("✅ Footer scripts executed");
        }
      })
      .catch((error) => {
        console.error("❌ Error executing footer scripts:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom mt-20">
          <div className="row">
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <span className="color-gray-900 font-sm">
                Copyright &copy; {new Date().getFullYear()} Gamma Scientific.
                All rights reserved.
              </span>
            </div>
            <div className="col-lg-6 col-md-12 text-center text-lg-end">
              <ul className="menu-bottom">
                <li>
                  <a className="font-sm color-gray-900" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterScripts;
