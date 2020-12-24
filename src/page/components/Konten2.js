import React from "react";
import bg1 from "../images/bg1.jpg";

const Konten2 = () => {
  return (
    <>
      <section
        className="d-flex align-items-center position-relative vh-100"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6 ml-auto">
              <h1 className="text-white text-header2 text-dark">
                <strong>Connecting The Dots</strong>
              </h1>
              <div className="konten2-detail">
                <h5>Penjelasan</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Konten2;
