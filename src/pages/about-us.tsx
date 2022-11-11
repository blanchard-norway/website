import { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../components/layout';

const AboutUs: NextPage = () => {
  const trust = createRef<HTMLHeadingElement>();

  const greatEnd = () => {
    trust.current?.classList.toggle('animated');
    trust.current?.classList.toggle('slideInLeft');
  };

  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  return (
    <Layout>
      <div className="container-fluid header product" id="about-us">
        <div className="container">
          <h1
            className="green animated slideInRight"
            id="great"
            onAnimationEnd={greatEnd}
          >
            GODE LEDERE
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            Leder <span className="green-bg">GODE VIRKSOMHETER</span>
          </h1>
        </div>
      </div>

      <section className="white nopadding" style={{ marginBottom: 0 }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href="/">HJEM</Link>
                <span className="divider">{'//'}</span>OM OSS
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>
                Fordi alle fortjener en god{' '}
                <span className="green-bg">LEDER</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="medium-container margin-30">
                <p>
                  Ekspertisen til dine ledere påvirker alle aspekter ved din
                  virksomhet: Medarbeider engasjement, produktivitet, omsetning
                  og resultat. God ledelse skjer som regel ikke av seg selv.
                  Ledere er ikke født til å vite hvordan de skal støtte, utvikle
                  og motivere deres ansatte.
                </p>

                <p>
                  Hos The Ken Blanchard Companies tror vi på at alle fortjener å
                  arbeide med gode ledere. Vi er en ledertrenings- og
                  utvikligsbedrift med over 35 år med erfaring med å trene
                  millioner av verdens beste ledere som vet hvordan de skal
                  trekke frem det beste hos sine medarbeidere, skape en god
                  arbeidsplass og levere resultater på bunnlinjen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-section2 nopadding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">
                Hvorfor <span className="green-bg">blanchard?</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="medium-container margin-20">
                <p className="text-center">
                  Vårt oppdrag er å få bra ting til å skje for våre klienter. På
                  hvert nivå i vår organisasjon går vi langt og lengre for å
                  overgå våre klienters forventninger.
                </p>
              </div>
            </div>
          </div>
          <div className="row margins-50">
            <div className="col-md-6 visible-md visible-lg left"></div>
            <div className="col-md-6 right">
              <ul className="list-big-icon">
                <li className="certificate">
                  <h6>Kursinnhold bevist med forskning og testet over tid</h6>
                  Med to av verdens mest brukte rammer for ledelse, SLII og{' '}
                  <em>The One Minute Manager</em>, sammen med tankelederskap
                  innen tillit, motivasjon, endring og kundeservice, har vårt
                  innhold blitt påvist igjen og igjen for å levere verdifull
                  avkastning for investeringen din.{' '}
                </li>
                <li className="chart">
                  <h6>Enkle og robuste modeller</h6>
                  Støttet av mange års forskning og erfaring, tilbyr våre
                  lederrtreningsprogrammer enkle modeller og robuste sannheter
                  som er enkle å forstå, lett å huske og enkle å anvende
                  umiddelbart.
                </li>
                <li className="people">
                  <h6>Et fokus på ledere</h6>
                  Ledere er kjernen i bedriften din. Vår ledertrening kan hjelpe
                  dem til å være effektive operasjonelle ledere, mens de fremmer
                  en god arbeidsplassopplevelse for sine ansatte.
                </li>
                <li className="book">
                  <h6>Bredde og dybde av erfaring</h6>
                  Vårt team av tankeledere og eksperter leverer relevant
                  lederutviklingstrening for å hjelpe bedrifter med å bygge en
                  arbeidsstyrke som er lidenskapelig og produktiv, og produserer
                  resultater.
                </li>
              </ul>
              <div className="text-left">
                <Link href={`${basePath}/how`}>
                  <div className="btn btn-primary btn-lg">
                    Arbeid sammen med oss
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white" id="aus-team-leaders">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2>
                Møt vårt talentfulle <span className="green-bg">Team</span>
              </h2>
              <p>
                Vårt team er dedikert til å levere ledertreningssprogrammer som
                går utover kundenes forventninger til å hjelpe dem med å nå sine
                mål.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 center-block">
              <div className="aus-photo">
                <div className="content-show">
                  <Image
                    src="/img/global-partners-norway-v2/geir.jpg"
                    width={1383}
                    height={1608}
                    alt="Geir"
                    className="img-responsive"
                  />
                  <div className="blue-bg-title text-center arialbold18">
                    Geir Joa Håland
                    <br />
                    Daglig leder
                  </div>
                </div>
                <div className="content-rollover" id="first">
                  Geir Joa Håland har lang kommersiell erfaring innen kurs og
                  kompetanse og har hatt flere lederroller i ulike selskaper.
                  Har flere år på høyskole innen ledelse, HMS og medisin. Har
                  også mange års erfaring fra Sjøforsvaret og Tollvesenet.
                </div>
              </div>
            </div>
            <div className="col-lg-4 center-block">
              <div className="aus-photo">
                <div className="content-show">
                  <Image
                    src="/img/global-partners-norway-v2/team-photo-2.jpg"
                    width={1383}
                    height={1608}
                    alt="Team photo 2"
                    className="img-responsive"
                  />
                  <div className="blue-bg-title text-center arialbold18">
                    Pål Lillebø
                    <br />
                    Instruktør
                  </div>
                </div>
                <div className="content-rollover" id="second">
                  Pål Lillebø er Siviløkonom fra NHH og Masterfag i HMS ledelse.
                  Han har lang ledererfaring, og vært kursholder innen HMS og
                  Ledelse nærmere 20 år. Lang erfaring med kundekontakt og
                  oppfølging.{' '}
                </div>
              </div>
            </div>
            <div className="col-lg-4 center-block">
              <div className="aus-photo">
                <div className="content-show">
                  <Image
                    src="/img/global-partners-norway-v2/team-photo-3.jpg"
                    width={1383}
                    height={1608}
                    alt="Team photo 3"
                    className="img-responsive"
                  />
                  <div className="blue-bg-title text-center arialbold18">
                    Rune Haugen
                    <br />
                    Instruktør
                  </div>
                </div>
                <div className="content-rollover" id="third">
                  Rune Haugen er frofatter, foredragsholder og prosessveileder.
                  Medforfatter av boken Helsefremmende Lederskap- slik leder de
                  beste (Gyldendal 2010). 10 år med lederutviklingsprogram, kurs
                  og inspirasjonsforedrag for tusentalls ledere og medarbeidere.{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 center-block">
            <div className="aus-photo">
              <div className="content-show">
                <Image
                  src="/img/global-partners-norway-v2/team-photo-4.jpg"
                  width={1383}
                  height={1608}
                  alt="Team photo 4"
                  className="img-responsive"
                />
                <div className="blue-bg-title text-center arialbold18">
                  Ken Ditlefsen
                  <br />
                  Møtebooker
                </div>
              </div>
              <div className="content-rollover" id="third">
                Ken Ditlefsen har kompetanse i fra salg og idrett. Jobbet 10 år
                i Bisnode Norge.{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
