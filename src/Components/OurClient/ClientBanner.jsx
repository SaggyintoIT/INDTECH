import React from "react";

const ClientBanner = () => {
  return (
    <>
      <section className="banner text-white pt-5">
        <div className="position-relative our_client">
          <div className="slidoverlay bodypx">
            <div className="container-fluid h-100">
              <div className="row align-items-center py-md-5 h-100">
                <div className="col-md-12 tracking-in-expand text-center py-5">
                  <h2 className="text-white fs-50 fw-bold">Our Clients</h2>
                  <p className="text-white pe-md-5 mb-4">
                    We’re recommended by companies around the world- from
                    close-knit startups to fortune 500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientBanner;
