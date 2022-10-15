import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import getConfig from "next/config";

export const Footer: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  return (
    <div className="footer container-full">
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 footer-logo">
              <div className="hidden-xs">
                <Image
                  src="/images/global-mini/global-mini-logo-white.png"
                  alt="Logo White"
                  width={330}
                  height={72}
                />
              </div>
              <div className="visible-xs center-block">
                <Image
                  src="/images/Blanchard-Norway-Logo-White.png"
                  alt="Logo"
                  width={300}
                  height={167}
                />
              </div>
              <div className="copyright copy">
                A global licensee of The Ken Blanchard Companies&reg;
              </div>
            </div>
            <div className="col-sm-3 address">
              <div className="footer-title">BLANCHARD NORWAY</div>
              Laberget 44
              <br />
              N-4020 Stavanger
              <br />
              <p>
                <Image
                  src="/images/top-nav-icon-phone.png"
                  alt="Phone"
                  width={12}
                  height={12}
                />{' '}
                23 65 39 39
              </p>
              <p className="visible-xs">
                <Image
                  src="/images/top-nav-icon-email.png"
                  width={16}
                  height={12}
                  alt="Email"
                />{' '}
                <a href="mailto:info@blanchard.no">info@blanchard.no</a>
              </p>
            </div>
            <div className="col-sm-3 social visible-lg">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/BlanchardNorway/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/footer-icon-fb.png"
                      width={31}
                      height={29}
                      alt="Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/leaderchat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/footer-icon-twitter.png"
                      width={31}
                      height={29}
                      alt="Twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/12169/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/footer-icon-linkedin.png"
                      width={31}
                      height={29}
                      alt="LinkedIn"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/KenBlanchardCos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/footer-icon-youtube.png"
                      width={31}
                      height={29}
                      alt="YouTube"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-sm-6 copy"></div>
            <div className="col-sm-3 email hidden-xs">
              <Image
                src="/images/top-nav-icon-email.png"
                width={16}
                height={12}
                alt="Email"
              />{' '}
              <a href="mailto:info@blanchard.no">info@blanchard.no</a>
            </div>
          </div>
          <div className="row copyright bottom">
            <div className="col-sm-9 copy">
              &copy; Copyright 2017 The Ken Blanchard Companies. All Rights
              Reserved.
            </div>
            <div className="col-sm-3">
              <p className="privacy-map text-right">
                <span className="privacy">
                  <Link href={`${basePath}/privacy-policy`}>Personvernserklæring</Link>
                </span>
                <span className="map">
                  <Link href={`${basePath}/site-map`}>Sidekart</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
