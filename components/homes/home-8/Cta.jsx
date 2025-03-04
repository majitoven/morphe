"use client";
import Socials from "@/components/footers/component/Socials";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Cta() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="cta-area-1 overflow-hidden bg-theme space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-10">
            <div className="title-area mb-xl-0 mb-40">
              <h2 className="sec-title">Trabajemos juntos :)</h2>
              <p className="sec-text mt-30 mb-n2">
                Escribinos para contarnos cómo podemos ayudarte y conocernos un poco más.
              </p>
              <div style={{ marginTop: "6rem" }}>
                <Image
                  width={146}
                  height={84}
                  src="/assets/img/morpheBlack.png"
                  alt="Ovation"
                  style={{ marginRight: "0.5rem", height: "7rem", width: "11rem" }}
                />
                <div style={{ marginTop: "0rem", display: isMobile ? "none" : "block" }}>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-wrap">
              <form onSubmit={handleSubmit} className="contact-form ajax-contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Nombre completo*"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20" disabled={status === "loading"}>
                    <span className="link-effect">
                      <span className="effect-1">
                        {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                      </span>
                      <span className="effect-1">
                        {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                      </span>
                    </span>
                  </button>
                  {status === "success" && (
                    <p style={{ color: "green", marginTop: "10px" }}>Mensaje enviado con éxito!</p>
                  )}
                  {status === "error" && (
                    <p style={{ color: "red", marginTop: "10px" }}>
                      Ocurrió un error. Inténtalo nuevamente.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
