import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const LeadingVirtually: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const trust = createRef<HTMLHeadingElement>();
  const secondIcon = createRef<HTMLDivElement>();
  const thirdIcon = createRef<HTMLDivElement>();

  const onFirstIconEnd = () => {
    secondIcon.current?.classList.add('animated', 'slideInUp');
  };

  const onSecondIconEnd = () => {
    thirdIcon.current?.classList.add('animated', 'slideInUp');
  };

  const onGreatEnd = () => {
    trust.current?.classList.add('animated', 'slideInLeft');
  };
  return (
    <Layout>
      <div
        className="container-fluid header product"
        id="product-leading-virtualy"
      >
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            MEDARBEIDERE som&nbsp;
          </h1>
          <h1 className="green">jobber hjemmefra</h1>
          <h1 className="green" id="trust" ref={trust}>
            FORTJENER <span className="green-bg">DYKTIGE LEDERE</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href={basePath}>HJEM</Link>
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>
                  produkter og tjenester
                </Link>
                <span className="divider">{'//'}</span>Å lede virtuelt
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  DYKTIGE LEDERE KAN BYGGE STERKE RELASJONER MEd&nbsp;
                  MEDARBEIDERE SOM jobber hjemmefra
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p>
                  Dagens medarbeidere jobber i økende grad hjemmefra eller borte
                  fra hovedkontorene, med team på tvers av landegrenser og
                  tidssoner. Ledere sliter med å få kontakt med sine
                  medarbeidere på grunn av tidsforsinkelser og teknologi. Dette
                  er den nye normalen, og den kommer med både nye muligheter og
                  nye utfordringer. Å lede i dette miljøet er vanskelig. Det kan
                  være vanskelig å forstå hva som egentlig skjer, og enda
                  vanskeligere å bygge gode rapporteringsrutiner og tillit over
                  lange avstander. Men med riktige kunnskaper kan ledere øke
                  effektiviteten og produktiviteten til ansatte som jobber
                  hjemmefra.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-9 col-lg-10 step-left">
                      <p>
                        Medarbeidere som jobber hjemmefra er gjennomsnittlig
                        <span className="blue">20% mer produktive </span> og
                        <span className="blue">
                          bare havlvparten Så Stor sannsynlighet for å søke
                          andre jobber
                        </span>
                        sammenlignet med dem som jobber i en tradisjonell
                        setting.<sup>*</sup>
                      </p>
                    </div>
                    <div className="col-sm-3 col-lg-2 step hidden-xs">
                      <FutureImage
                        width={95}
                        height={84}
                        alt="Growth Computer"
                        src="/images/growth-computer.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4 text-center">
                <Link href={`${basePath}/get-started`}>
                  <a className="btn btn-primary btn-lg">
                    Kom i gang
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white trust">
        <div className="container mobile-full">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>
                Å Utøve virtuell ledelse ER
                <span className="green-bg">EN FERDIGHET</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Ledere som trener på å være oppmerksomme og til stede og som,
                fremmer felleskap og øker prestasjon og utvikling, vil se høyere
                tilfredshet, engasjement og produktivitet hos sine medarbeidere
                som jobber hjemmefra.
              </p>
            </div>
          </div>
          <div className="row icons" id="animateIcons">
            <div
              className="text-center icon-block col-md-4 animated slideInUp"
              onAnimationEnd={onFirstIconEnd}
              id="icon1"
            >
              <div className="icon">
                <Image
                  src="/images/icon-products-3-ties.png"
                  alt="Products 3 Ties"
                  width={124}
                  height={124}
                />
              </div>
              <h4>ØK BEDRET RELASJONEN MED ANSATTE</h4>
              <p>
                Gjennom mer intensjon og strukturert kommunikasjon kan dyktige
                ledere som utøver virtuell ledelse styrke relasjonen med sine
                medarbeidere.
              </p>
            </div>
            <div
              className="text-center icon-block col-md-4"
              id="icon2"
              onAnimationEnd={onSecondIconEnd}
              ref={secondIcon}
            >
              <div className="icon">
                <Image
                  src="/images/icon-products-walking-up.png"
                  width={124}
                  height={124}
                  alt="Products Walking Up"
                />
              </div>
              <h4>ØKT SELVBESTEMMELSE OG MYNDIGGJØRING</h4>
              <p>
                Effektive ledere som utøver virtuell ledelse øker ressursstyrke
                og selvbestemmelse hos sine medarbeidere, slik at de konsekvent
                oppfyller mål og leverer resultater.
              </p>
            </div>
            <div
              className="text-center icon-block col-md-4"
              id="icon3"
              ref={thirdIcon}
            >
              <div className="icon">
                <Image
                  src="/images/icon-heart-lv.png"
                  width={124}
                  height={124}
                  alt="Heart LV"
                />
              </div>
              <h4>FORBEDRE MEDARBEIDERNES ENGASJEMENT</h4>
              <p>
                Ledere som utøver virtuell ledelse kobler medarbeidere til
                organisasjonen ved å aktivt å legge til rette for samarbeid,
                skape teamkultur og bygge fellesskap.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="howto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left">
              <h1 className="smaller">
                OPPSKRIFTEN FOR EN ENGASJERT
                <br />
                <span className="green-bg">
                  MEDARBEIDER SOM JOBBER HJEMMEFRA
                </span>
              </h1>
              <p>
                Kurset <strong>Lede virtuelt</strong> kurset tilbyr deltakerne
                en svært engasjerende opplevelse som inkluderer instruksjon,
                respons, refleksjon, gruppeaktiviteter og muligheter til å øve
                på nye ferdigheter i trygge omgivelser. Basert på nesten 20 års
                erfaring med å hjelpe ledere med å lede virtuelt, fokuserer
                dette programmet på tre viktige ferdigheter som har vist seg å
                øke lederens effektivitet i et virtuelt miljø.
              </p>
              <p>
                Ledere lærer først <i>å være til stede og oppmerksomme</i> ved å
                kommunisere med intensjon med sine eksterne medarbeidere,
                strukturere samtalene for maksimal påvirkning og ved å
                respektere hverandres arbeidspreferanser.
              </p>
              <p>
                Ledere lærer seg hvordan de kan <i>fremme fellesskapet</i> ved å
                bygge tillitsfulle og støttende relasjoner som forblir positive
                og involverer alle sine medarbeidere ved hjelp av den
                tilgjengelige teknologien.
              </p>
              <p>
                Til slutt lærer lederne hvordan man kan
                <i>øke prestasjon og utvikling</i> ved å bygge medarbeidernes
                ressursstyrke og selvstendighet, og hjelpe dem å komme videre i
                karrieren.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right">
                <Image
                  src="/images/products-leading-vir-process.png"
                  className="img-responsive"
                  width={7468}
                  height={9739}
                  alt="Products Leading VIR Process"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-sm-12 text-center">
              <h3>Vil du vite mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                width={521}
                height={299}
                alt="Global Download Images"
                src="/images/global_product_download_images/global_download_images-5.jpg"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/lede_virtuelt_oversikt.pdf">
                    <FutureImage
                      width={36}
                      height={26}
                      alt="Download Icon"
                      src="/images/icon-download-bright-green.png"
                    />
                    Mer om å lede virtuelt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetStartedContainer />

      <div className="clearfix" />
      <div className="container">
        <div className="col-xs-12">
          <div className="footnotes">
            <div className="footnote">
              <sup>*</sup> High-Impact Performance Management: Maximizing
              Performance Coaching, 2011, Bersin &amp; Associates
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadingVirtually;
