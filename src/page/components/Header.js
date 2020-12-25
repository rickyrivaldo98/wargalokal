import React, { useState, useEffect } from "react";
import bg2 from "../images/bg2.jpg";
import rectangle1 from "../images/rectangle1.png";

const Header = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex align-items-center position-relative vh-100 cover hero"
        style={{
          backgroundImage: `url(${rectangle1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              {/* <img
                src={rectangle1}
                class="rounded mx-auto d-block"
                style={{ width: "50%" }}
              /> */}
              <h1 data-aos="fade-up" className="text-white text-header">
                <strong>WargaLokal</strong>
              </h1>
              <div className="mt-3 ">
                {/* <button
                  href=""
                  className="btn bg-button text-white button-header"
                >
                  Read More
                </button> */}
                {/* <a href=""></a> */}
                <h5 data-aos="fade-down" className="tagline text-white">
                  Bergerak Wujudkan Desa Mandiri!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
