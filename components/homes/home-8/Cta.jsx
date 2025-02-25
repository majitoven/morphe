"use client";
import Socials from "@/components/footers/component/Socials";
import React from "react";

export default function Cta() {
  return (
    <div className="cta-area-1 overflow-hidden bg-theme space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-10">
            <div className="title-area mb-xl-0 mb-40">
              <h2 className="sec-title">Trabajemos juntos :)</h2>
              <p className="sec-text mt-30 mb-n2">
                Escribinos para contarnos de tu negocio y conocernos un poco más.
              </p>
              {/* <p className="copyright-text mt-4 mb-3">
                Copyright © 2025 */}
                {/* <a href="https://themeforest.net/user/ib-themes/portfolio"> */}
                  {/* Morphe */}
                {/* </a> */}
              {/* </p> */}
              <div className="social-btn style3 justify-content-center justify-content-center" style={{marginTop: '2rem'}}>
                <Socials />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-wrap">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Nombre completo*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Cómo podemos ayudarte?*"
                        id="contactForm"
                        className="form-control style-border style2"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">ENVIAR MENSAJE</span>
                      <span className="effect-1">ENVIAR MENSAJE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
