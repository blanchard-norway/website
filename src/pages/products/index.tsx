import type { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Layout } from '../../components/layout';
import { GetStartedContainer } from '../../components/products/get-started';

const ProductsPage: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    adaptiveHeight: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="products">
        <div className="container">
          <h1 className="green  animated slideInRight" id="great">
            DINE BEHOV, <span className="green-bg">VÅRE LØSNINGER</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach products">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href="/">HJEM</Link> <span className="divider">{'//'}</span>
                produkter og tjenester
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h2>
                    HVA er din STØRSTE LEDELSES-
                    <span className="green-bg">UTFORDRING?</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 col-lg-offset-1 col-md-12">
                  <p className="eightyfivepercent">
                    Det er ofte vanskelig å finne løsninger som virkelig
                    påvirker bunnlinjen. Blanchards lederutdanningsprogrammer er
                    utviklet for å utvikle proaktive ledere som leverer økt
                    engasjement og styrke, forbedret ytelse og bedre resultater
                    for organisasjonen.
                  </p>
                </div>
              </div>
              <div className="row margins-20">
                <div className="col-sm-6 col-sm-offset-3 text-center">
                  <p className="blue">
                    Vi kan hjelpe organisasjonen din med å…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Slider className="productstop" {...settings}>
                <div className="lt-blue-box">
                  <div>ØKE PRODUKTIVITET OG YTELSE</div>
                </div>
                <div className="blue-box">
                  <div>UTVIKLE LEDERENS STYRKE</div>
                </div>
                <div className="lt-blue-box">
                  <div>ØKE DE ANSATTES ENGASJEMENT</div>
                </div>
                <div className="blue-box">
                  <div>Fremskynde ledermestring for førstegangsledere</div>
                </div>
                <div className="lt-blue-box">
                  <div>Addressere kritiske kunnskaps- og ferdighetsmangler</div>
                </div>
                <div className="blue-box">
                  <div>Investere i organisasjonskultur</div>
                </div>
                <div className="lt-blue-box">
                  <div>Lede suksessfulle endringsiniativ</div>
                </div>
                <div className="blue-box">
                  <div>Maksimere ledelseseffektivitet</div>
                </div>
                <div className="lt-blue-box">
                  <div>Beholde topptalenter</div>
                </div>
                <div className="blue-box">
                  <div>Forbedre ansattes motivasjon og styrke</div>
                </div>
                <div className="lt-blue-box">
                  <div>lede vekst</div>
                </div>
                <div className="blue-box">
                  <div>Øke utførelseskapasitet</div>
                </div>
                <div className="lt-blue-box">
                  <div>Oppmuntre til samarbeid og teamarbeid</div>
                </div>
                <div className="blue-box">
                  <div>Utvikle selvhjulpne problemløsere</div>
                </div>
                <div className="lt-blue-box">
                  <div>Øke kreativitet og innovasjon</div>
                </div>
                <div className="blue-box">
                  <div>Etablere tillitsfulle relasjoner</div>
                </div>
                <div className="lt-blue-box">
                  <div>Skape en kultur for legendarisk kundeservice</div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="container">
            <div className="row margin-50">
              <div className="col-sm-4 col-sm-offset-4 text-center">
                <Link href={`${basePath}/get-started`}>
                  <a className="btn btn-primary btn-lg">Kom i gang</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnersleadership">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="green">DIN PARTNER FOR</h1>
              <h1 className="white">
                <span className="green-bg">LEDERTRENING</span>
              </h1>
              <p className="eightyfivepercent">
                I nesten fire tiår har The Ken Blanchard Companies utviklet
                verdens beste ledere. Vi er eksperter i operativt lederskap,
                opplæringsledere som vet hvordan de skal få resultater, samtidig
                som de dyrker et miljø som engasjerer og inspirerer sine
                ansatte.
              </p>
              <p className="eightyfivepercent">
                Hver organisasjons mål er mangfoldig: Bygge lederstyrke, skape
                individer som er selvgående, forbedrer ansattes engasjement
                eller leder et endringsinitiativ. Uansett hva du jobber med, har
                vi en løsning som hjelper deg med å møte disse behovene på en
                måte som oppnår varige resultater.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="empower">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                Alle kan bli <span className="green-bg">EN BRA LEDER</span>
              </h2>
            </div>
          </div>
          <div className="row row-eq-height productsboxes">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 box">
              <div className="content-show">
                <Image
                  src="/img/products-home/p-sl2-development-training.jpg"
                  width={256}
                  height={172}
                  alt="The most widely taught leadership development training for managers model in the world | Ken Blanchard"
                  className="img-responsive"
                />
                <h3>
                  SLII<sup>®</sup>
                </h3>
              </div>
              <div className="content-rollover">
                <strong>
                  SLII<sup>®</sup>,
                </strong>
                er den mest lærte ledelsesmodellen verden over. Den lærer ledere
                hvordan de skal gi sine medarbeidere det de trenger, akkurat til
                rett tid for å øke medarbeider- utviklingen og bygge en mer
                produktiv og lidenskapelig arbeidsstyrke.
                <Link href={`${basePath}/products/sl`}>LES MER</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 box">
              <div className="content-show">
                <Image
                  src="/img/products-home/p-self-leadership-training-programs.jpg"
                  width={256}
                  height={172}
                  alt="Leadership training programs for creating proactive self leaders | Ken Blanchard"
                  className="img-responsive"
                />
                <h3>Selvledelse</h3>
              </div>
              <div className="content-rollover">
                <strong>Selvledelse</strong> lærer individer tankesett og
                ferdigheter som kreves for å bli autoriserte, proaktive
                selvledere, ta ansvar for sin egen suksess og forplikte seg til
                å oppnå resultater for sine organisasjoner.
                <Link href={`${basePath}/products/self-leadership`}>
                  LES MER
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 box">
              <div className="content-show">
                <Image
                  src="/img/products-home/p-first-time-manager-leadership-development-training.jpg"
                  width={256}
                  height={172}
                  alt="First-time manager leadership development training | Ken Blanchard"
                  className="img-responsive"
                />
                <h3>Kommunikasjon i ledelse</h3>
              </div>
              <div className="content-rollover">
                <strong>Kommunikasjon i ledelse</strong> setter i gang nye
                ledere på vei til suksess ved å gi dem den nødvendige trening og
                ferdigheter som kreves for å være effektive ledere.
                <Link href={`${basePath}/products/managers`}>LES MER</Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 box">
              <div className="content-show">
                <Image
                  src="/img/products-home/p-tl-team-development-training.jpg"
                  width={256}
                  height={172}
                  alt="Team Leadership training programs and leadership consulting services | Ken Blanchard"
                  className="img-responsive"
                />
                <h3>Teamledelse</h3>
              </div>
              <div className="content-rollover">
                <strong>Teamledelse</strong> lærer ledere hvordan man velger og
                bruker riktig lederstil for et teams utviklingsstadium, slik at
                de med hell kan lede teaminitiativer.
                <Link href={`${basePath}/team-leadership`}>LES MER</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white" id="productboxes">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                Endre din lederstil og
                <span className="green-bg">organisasjonskultur</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1-and-half">
              <div className="row row-eq-height productsboxes center-block">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 box">
                  <div className="content-show">
                    <Image
                      src="/img/products-home/p-building-trust-leadership-training.jpg"
                      alt="Leadership development training to help build trust between managers and employees | Ken Blanchard"
                      className="img-responsive"
                      width={256}
                      height={172}
                    />
                    <h3>Tillitsledelse</h3>
                  </div>
                  <div className="content-rollover">
                    <strong>Tillitsledelse</strong> lærer dine ledere hvordan de
                    bygger tillitsfulle relasjoner på arbeidsplassen og hvordan
                    de reparerer dem når de er brutt, med mål om å øke
                    engasjement, kreativitet og engasjement.
                    <Link href={`${basePath}/products/trust`}>LES MER</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 box">
                  <div className="content-show">
                    <Image
                      src="/img/products-home/p-coaching-essentials-leadership-development-training.jpg"
                      alt="Coaching Essentials leadership training programs teach managers how to effectively coach their employees | Ken Blanchard"
                      className="img-responsive"
                      width={256}
                      height={172}
                    />
                    <h3>Grunnleggende coaching</h3>
                  </div>
                  <div className="content-rollover">
                    <strong>Grunnleggende coaching</strong> lærer lederene dine
                    hvordan de går utover grunnleggende ledelse, for å være
                    effektiv til å coache deres ansatte, fremme samarbeid, øke
                    tillit og hjelpe dem å prestere på sitt beste.
                    <Link href={`${basePath}/products/coaching`}>LES MER</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 box">
                  <div className="content-show">
                    <Image
                      src="/img/products-home/p-optimal-motivation-leadership-consulting-services.jpg"
                      alt="Optimal Motivation leadership development training teaches managers how to motivate their employees | Ken Blanchard"
                      className="img-responsive"
                      width={256}
                      height={172}
                    />
                    <h3>Optimal motivasjon</h3>
                  </div>
                  <div className="content-rollover">
                    <strong>
                      OPTIMAL MOTIVATION<sup>®</sup>
                    </strong>
                    lærer dine ledere hvordan de kan dyrke en arbeidsplass med
                    høy ytelse ved å aktivere høyere nivåer av motivasjon i sine
                    ansatte.
                    <Link href={`${basePath}/products/optimal-motivation`}>
                      LES MER
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="row row-eq-height productsboxes second-row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box">
                  <div className="content-show">
                    <Image
                      src="/img/products-home/p-legendary-service-leadership-consulting-services.jpg"
                      alt="Legendary Service leadership consulting services program for delivering optimal service to your customers | Ken Blanchard"
                      className="img-responsive"
                      width={256}
                      height={172}
                    />
                    <h3>LEGENDARISK KUNDESERVICE</h3>
                  </div>
                  <div className="content-rollover">
                    <strong>LEGENDARISK KUNDESRVICE</strong> lærer dine ledere
                    og dine medarbeidere i kundeservice hvordan man konsekvent
                    kan levere optimal service som overgår forventningene til
                    kundene, både internt og eksternt.
                    <Link href={`${basePath}/products/service`}>LES MER</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 box">
                  <div className="content-show">
                    <Image
                      src="/img/products-home/p-organizational-change-leadership-training-programs.jpg"
                      alt="Leadership development training to help managers lead successful organizational change efforts | Ken Blanchard"
                      className="img-responsive"
                      width={256}
                      height={172}
                    />
                    <h3>Endringsledelse</h3>
                  </div>
                  <div className="content-rollover">
                    <strong>
                      ENDRINGSLEDELSE<sup>®</sup>
                    </strong>
                    lærer dine ledere hvordan de kan lede vellykket
                    organisasjonsendringsarbeid ved å forstå de ulike stadiene
                    av bekymring og hvordan de tilpasser deres lederskapsstil
                    for å øke innkjøpet og engasjementet.
                    <Link href={`${basePath}/products/change`}>LES MER</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetStartedContainer />
    </Layout>
  );
};

export default ProductsPage;
