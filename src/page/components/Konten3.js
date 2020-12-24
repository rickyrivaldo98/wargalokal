import React from "react";
import gambar1 from "../images/grad.png";
import gambar2 from "../images/hand.png";
import gambar3 from "../images/loc.png";
import gambar4 from "../images/tree.png";

const Konten3 = () => {
  return (
    <>
      <div className="text-dark">
        <h1 className="text-header3 text-center mt-5 mb-3">
          <strong>PROGRAM KAMI</strong>
        </h1>
      </div>
      <div className="mb-3 bg-program">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-program">
            <div className="program">
              <img
                src={gambar1}
                style={{ width: "70%", marginBottom: "20%", marginTop: "10%" }}
              />
              <h1>PENDIDIKAN</h1>
            </div>
            <h5 className="text-white">Penjelasan tiap Kategori</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-3  col-program">
            <div className="program">
              <img
                src={gambar3}
                style={{ width: "70%", marginBottom: "20%", marginTop: "10%" }}
              />
              <h1>PENDIDIKAN</h1>
            </div>
            <h5 className="text-white">Penjelasan tiap Kategori</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-program">
            <div className="program">
              <img
                src={gambar2}
                style={{ width: "70%", marginBottom: "20%", marginTop: "10%" }}
              />
              <h1>PENDIDIKAN</h1>
            </div>
            <h5 className="text-white">Penjelasan tiap Kategori</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-program">
            <div className="program">
              <img
                src={gambar4}
                style={{ width: "70%", marginBottom: "20%", marginTop: "10%" }}
              />
              <h1>PENDIDIKAN</h1>
            </div>
            <h5 className="text-white">Penjelasan tiap Kategori</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Konten3;
