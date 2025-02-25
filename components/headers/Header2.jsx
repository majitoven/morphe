"use client";
import SideMenu from "./component/SideMenu";
import MobileNav from "./component/MobileNav";
import MobileMenuSocials from "./component/MobileMenuSocials";
import Nav from "./component/Nav";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");
      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`mobile-menu-wrapper ${mobileMenuOpen ? "body-visible" : ""}`}>
        <div className="mobile-menu-area">
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link scroll={false} href="/">
              <Image width={86} height={24} src="/assets/img/morphe.png" alt="Ovation" />
            </Link>
          </div>
          <div className="mobile-menu scrollable-content">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>Montevideo, Uruguay.</h6>
            <h6>Buenos Aires, Argentina.</h6>
          </div>
          <div className="sidebar-wrap">
            <h6><a href="tel+59895013550"> +598 95 013 550</a></h6>
            <h6><a href="mailto:hola@morphe.com.uy">hola@morphe.com.uy</a></h6>
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>
      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""}`}>
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link scroll={false} href="/">
                      <Image width={86} height={24} src="/assets/img/morphe.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul><Nav /></ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button onClick={() => setMobileMenuOpen(true)} type="button" className="menu-toggle sidebar-btn">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}