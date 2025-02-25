import { socialMediaLinks } from "@/data/socials";
import React from "react";

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((link) => (
        <a key={link.id} href={link.href}>
          <span >
            <span style={{color: 'black'}}>
             Encontranos en 
              <i className={link.iconClass} style={{marginLeft: '0.5rem'}}></i>
            </span>
            {/* <span className="effect-1">
              <i className={link.iconClass}></i>
            </span> */}
          </span>
        </a>
      ))}
    </>
  );
}
