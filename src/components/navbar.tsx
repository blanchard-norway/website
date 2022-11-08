import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import React, { createRef, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();
  const dropdownMenu = createRef<HTMLDivElement>();
  const caret = createRef<HTMLDivElement>();

  const { basePath } = publicRuntimeConfig;

  useEffect(() => {
    ($('.dropdown-toggle') as any).dropdownHover();
  }, []);

  const onDropdownClick = () => {
    dropdownMenu.current?.classList.toggle('open');
    caret.current?.classList.toggle('caret');
    caret.current?.classList.toggle('caret-up');
  };

  return (
    <>
      <div className="top-nav">
        <div className="container">
          <ul id="tool-bar">
            <li>
              <a href="">Kontakt oss:</a>
            </li>
            <li className="social email">
              <a href="mailto:info@blanchard.no">
                <img
                  src="/images/top-nav-icon-email.png"
                  alt="mail icon"
                  width="16"
                  height="12"
                />
              </a>
              <a href="mailto:info@blanchard.no">info@blanchard.no</a>
            </li>
            <li className="social">
              <a>
                <img
                  src="/images/top-nav-icon-phone.png"
                  alt="phone icon"
                  width="12"
                  height="12"
                />{' '}
                23 65 39 39
              </a>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container logo">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <Link href={basePath}>
              <a className="navbar-brand">
                <Image
                  src="/images/global-mini/global-mini-logo.png"
                  width="330"
                  height="72"
                  alt="Mini Logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="container">
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="hidden-lg">
                <a href="index.html">Hjem</a>
              </li>
              <li className="dropdown">
                <Link href={`${basePath}/products`}>
                  <a
                    className="dropdown-toggle"
                    onClick={onDropdownClick}
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kurs og tjenester <b className="caret" ref={caret}></b>
                  </a>
                </Link>
                <ul className="dropdown-menu">
                  <li className="hidden-lg">
                    <Link href={`${basePath}/products`}>Oversikt</Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/sl`}>
                      <a>
                        SLII<sup>&reg; </sup>. POWERING INSPIRED LEADERS
                        <sup>&trade; </sup>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/change`}>
                      Endringsledelse
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/coaching`}>
                      Grunnleggende coaching
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/managers`}>
                      Kommunikasjon i ledelse
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/leading-virtually`}>
                      Lede virtuelt
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/service`}>
                      Legendarisk kundeservice
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/optimal-motivation`}>
                      Optimal motivasjon
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/self-leadership`}>
                      Selvledelse
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/team-leadership`}>
                      Teamledelse
                    </Link>
                  </li>
                  <li>
                    <Link href={`${basePath}/products/trust`}>Tillitsledelse</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={`${basePath}/how`}>
                  Hvordan vi arbeider med deg
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/events-workshops`}>Kurskalender</Link>
              </li>
              <li>
                <Link href={`${basePath}/resources`}>Ressurser</Link>
              </li>
              <li>
                <Link href={`${basePath}/about-us`}>Om oss</Link>
              </li>
              <li>
                <Link href={`${basePath}/get-started`}>Kom i gang</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="mobile-logo center-block">
          <Image
            src="/images/Blanchard-Norway-Logo-Black.png"
            width="330"
            height="167"
            alt="Secondary logo"
          />
        </div>
      </div>
    </>
  );
};
