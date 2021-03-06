import React from "react";
const Konten1 = () => {
  return (
    <>
      <section className="d-flex align-items-center position-relative vh-100">
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7 col-xl-7">
              <h1
                data-aos="fade-right"
                className="text-white text-header text-dark"
              >
                <strong>Tentang Kami</strong>
              </h1>
              <div className="konten1-detail">
                <h5 data-aos="fade-right">
                  WargaLokal merupakan social network platform untuk
                  menjembatani Desa dengan jejaring sosial mereka.
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-5 col-xl-5">
              <img
                data-aos="fade-left"
                src="https://dummyimage.com/vga"
                className="rounded mx-auto d-block"
                style={{ width: "50%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Konten1;
