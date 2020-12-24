import React from "react";
const Konten1 = () => {
  return (
    <>
      <section className="d-flex align-items-center position-relative vh-100">
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7 col-xl-7">
              <h1 className="text-white text-header text-dark">
                <strong>Tentang Kami</strong>
              </h1>
              <div className="konten1-detail">
                <h5>Penjelasan</h5>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-5 col-xl-5">
              <img
                src="https://dummyimage.com/vga"
                class="rounded mx-auto d-block"
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
