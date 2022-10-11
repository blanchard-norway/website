import Image from 'next/image';
import Link from 'next/link';
import React, { createRef, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const dropdownMenu = createRef<HTMLDivElement>();
  const caret = createRef<HTMLDivElement>();

  const basePath = '/new';

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
            <Link className="navbar-brand" href={basePath}>
              <Image
                src="/images/global-mini/global-mini-logo.png"
                width="330"
                height="72"
                alt="Mini Logo"
              />
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
                <a
                  href="products.html"
                  className="dropdown-toggle"
                  onClick={onDropdownClick}
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kurs og tjenester <b className="caret" ref={caret}></b>
                </a>
                <ul className="dropdown-menu">
                  <li className="hidden-lg">
                    <a href="products.html">Oversikt</a>
                  </li>
                  <li>
                    <a href="product-sl.html">
                      SLII<sup>&reg; </sup>. POWERING INSPIRED LEADERS
                      <sup>&trade; </sup>
                    </a>
                  </li>
                  <li>
                    <a href="product-change.html">Endringsledelse</a>
                  </li>
                  <li>
                    <a href="product-coaching.html">Grunnleggende coaching</a>
                  </li>
                  <li>
                    <a href="product-managers.html">Kommunikasjon i ledelse</a>
                  </li>
                  <li>
                    <a href="product-leading-virtualy.html">Lede virtuelt</a>
                  </li>
                  <li>
                    <a href="product-service.html">Legendarisk kundeservice</a>
                  </li>
                  <li>
                    <a href="product-optimal-motivation.html">
                      Optimal motivasjon
                    </a>
                  </li>
                  <li>
                    <a href="product-self-leadership.html">Selvledelse</a>
                  </li>
                  <li>
                    <a href="product-teamleadership.html">Teamledelse</a>
                  </li>
                  <li>
                    <a href="product-trust.html">Tillitsledelse</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="how.html">Hvordan vi arbeider med deg</a>
              </li>
              <li>
                <Link href={`${basePath}/events-workshops`}>Kurskalender</Link>
              </li>
              <li>
                <a href="resources.html">Ressurser</a>
              </li>
              <li>
                <a href="about-us.html">Om oss</a>
              </li>
              <li>
                <a href="get-started.html">Kom i gang</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="mobile-logo center-block">
          <a href="/images/Blanchard-Norway-Logo-Black.png">
            <Image
              src="/images/Blanchard-Norway-Logo-Black.png"
              width="330"
              height="167"
              alt="Secondary logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};
