import { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/layout';

const SiteMap: NextPage = () => {
  const basePath = '/new';

  return (
    <Layout>
      <section
        className="bluebg nopadding privacy"
        style={{ paddingBottom: 10 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 breadcrumbs">
              <Link href={basePath}>HJEM</Link>{' '}
              <span className="divider">{'//'}</span>
              <span className="CMSBreadCrumbsCurrentItem">Sidekart</span>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-section1" style={{ minHeight: 600 }}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                Blanchard Norway <span className="green-bg">SIDEKART</span>
              </h2>
            </div>
          </div>
          <div className="sitemap">
            <ul className="CMSSiteMapList">
              <li className="CMSSiteMapListItem">
                <Link href={basePath} className="CMSSiteMapLink" title="Home">
                  HJEM
                </Link>
              </li>
              <li className="CMSSiteMapListItem">
                <Link
                  href={`${basePath}/products`}
                  className="CMSSiteMapLink"
                  title="Products &amp; Services"
                >
                  Produkter og tjenester
                </Link>
                <ul className="CMSSiteMapList">
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/sl`}
                      className="CMSSiteMapLink"
                      title="SLII&lt;sup&gt;®&lt;/sup&gt; II"
                    >
                      <a>
                        SLII<sup>®</sup> . POWERING INSPIRED LEADERS<sup>™</sup>
                      </a>
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/manager`}
                      className="CMSSiteMapLink"
                      title="First-time Manager"
                    >
                      Grunnleggende ledelse
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/self-leadership`}
                      className="CMSSiteMapLink"
                      title="Self Leadership"
                    >
                      Selvledelse
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/coaching`}
                      className="CMSSiteMapLink"
                      title="Coaching Essentials"
                    >
                      Grunnleggende coaching
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/trust`}
                      className="CMSSiteMapLink"
                      title="Building Trust"
                    >
                      Tillitsledelse
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/change`}
                      className="CMSSiteMapLink"
                      title="Leading People Through Change"
                    >
                      Endringsledelse
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/teamleadership`}
                      className="CMSSiteMapLink"
                      title="Team Leadership"
                    >
                      Teamledelse
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/optimal-motivation`}
                      className="CMSSiteMapLink"
                      title="Optimal Motivation"
                    >
                      Optimal motivasjon
                    </Link>
                  </li>
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/product/service`}
                      className="CMSSiteMapLink"
                      title="Legendary Service"
                    >
                      Legendarisk kundeservice
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="CMSSiteMapListItem">
                <Link href={`${basePath}/how`} title="How We Work With You">
                  Hvordan vi arbeider med deg
                </Link>
              </li>
              <li className="CMSSiteMapListItem">
                <Link
                  href={`${basePath}/events-workshops`}
                  className="CMSSiteMapLink"
                  title="Events &amp; Workshops"
                >
                  Kurs
                </Link>
              </li>
              <li className="CMSSiteMapListItem">
                <Link
                  href={`${basePath}/resources`}
                  className="CMSSiteMapLink"
                  title="Resources"
                >
                  Ressurser
                </Link>
              </li>
              <li className="CMSSiteMapListItem">
                <Link
                  href={`${basePath}/about-us`}
                  className="CMSSiteMapLink"
                  title="About Us"
                >
                  Om oss
                </Link>
                <ul className="CMSSiteMapList">
                  <li className="CMSSiteMapListItem">
                    <Link
                      href={`${basePath}/about-team-ken`}
                      className="CMSSiteMapLink"
                      title="Meet Ken Blanchard"
                    >
                      Møt Ken Blanchard
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="CMSSiteMapListItem">
                <Link
                  href={`${basePath}/get-started`}
                  className="CMSSiteMapLink"
                  title="Get Started"
                >
                  Kom i gang
                </Link>
              </li>
            </ul>
            <div className="clear"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SiteMap;
