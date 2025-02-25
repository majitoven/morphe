import { portfolioData5 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects3() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="title-area text-center">
              <h2 className="sec-title">Nuestros proyectos favoritos :) </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {portfolioData5.map((elm, i) => (
            <div key={i} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <Image
                    width={618}
                    height={470}
                    src={elm.imageSrc}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3">{elm.title}</h3>
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
