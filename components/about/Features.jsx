import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="why-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="why-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", right: "0px", bottom: "140px" }}
      >
        <Image
          width={838}
          height={778}
          src="/assets/img/pic.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-45">
              <h2 className="sec-title">
                Fusionamos tecnología con creatividad
              </h2>
            </div>
            <div style={{background: 'white', display: 'ruby'}}>
              <h4>¿Qué hacemos?</h4>
            </div>
            <ul>
              <li style={{marginBottom: '1rem', marginTop: '0.5rem'}}>
                <h6 style={{margin: 0}}><strong>Diseño web a medida:</strong></h6> Tomamos tus ideas y las convertimos en un estilo que te represente 100%.
              </li>
              <li style={{marginBottom: '1rem', marginTop: '0.5rem'}}>
                <h6 style={{margin: 0}}><strong>Desarrollo web:</strong></h6> Código sólido y rápido para que tu sitio vuele.
              </li>
              <li style={{marginBottom: '1rem', marginTop: '0.5rem'}}>
                <h6 style={{margin: 0}}><strong>Fotografía y multimedia:</strong></h6> Fotos y banners que muestran quién sos (la estética es lo mío y se nota).
              </li>
              <li style={{marginBottom: '1rem', marginTop: '0.5rem'}}>
                <h6 style={{margin: 0}}><strong>SEO y analíticas:</strong></h6> Te hacemos visible en Google y te explicamos qué buscan tus visitas.
              </li>
              <li style={{marginBottom: '1rem', marginTop: '0.5rem'}}>
                <h6 style={{margin: 0}}><strong>Lo querés, lo tenés:</strong></h6> Tiendas online, sistemas de reservas o lo que necesites, lo armamos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}