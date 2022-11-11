import type { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import Slider from 'react-slick';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  const trained = createRef<HTMLDivElement>();
  const chart = createRef<HTMLDivElement>();
  const medal = createRef<HTMLDivElement>();

  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const greatEnd = () => {
    trained.current?.classList.toggle('animated');
    trained.current?.classList.toggle('slideInLeft');
  };

  const menEnd = () => {
    chart.current?.classList.toggle('animated');
    chart.current?.classList.toggle('slideInRight');
  };

  const chartEnd = () => {
    medal.current?.classList.toggle('animated');
    medal.current?.classList.toggle('slideInRight');
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
  };

  return (
    <Layout>
      <div className="container-fluid header" id="global-mini-home">
        <div className="container">
          <h1
            className="green animated slideInRight"
            id="great"
            onAnimationEnd={greatEnd}
          >
            GODE
            <br />
            LEDERE
            <br />
            BLIR IKKE
            <br />
            FØDT GODE,
          </h1>
          <h1 className="white" id="trained" ref={trained}>
            <span className="green-bg">DE BLIR</span>
            <br />
            <span className="green-bg"> TRENT OPP</span>
          </h1>
          <div className="mobile-center">
            <Link href={`${basePath}/products`}>
              <a className="btn btn-primary btn-lg">Se hvordan vi gjør det</a>
            </Link>
          </div>
        </div>
      </div>

      <section className="white">
        <div className="container mobile-full">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>
                Trener 150,000 ledere <span className="green-bg">hvert år</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <p className="text-center">
                Hos The Ken Blanchard Companies, trener vi opp verdens beste
                ledere. Vi tilbyr de mest brukte treningsprogrammene og
                tjenestene for ledelse og ledelsesutvikling, og garanterer
                avkastning på din investering i ledertrening.
              </p>
            </div>
          </div>
          <div className="row photo-boxes row-eq-height center-block">
            <div className="col-md-4">
              <div className="photo-box">
                <div className="photo">
                  <Image
                    src="/img/home-box-1.jpg"
                    width={324}
                    height={224}
                    layout="responsive"
                    alt="SLII folk"
                  />
                </div>
                <div className="text-box">
                  <div className="text">
                    <h4>
                      SLII<sup>&reg;</sup> Opplevelsen
                    </h4>
                    <p>
                      Lær ledere hvor viktig det er å benytte riktig lederstil
                      for å øke produktiviteten hos medarbeiderne i
                      virksomheten.
                    </p>
                    <Link href={`${basePath}/products/sl`}>LÆR MER</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 center-block">
              <div className="photo-box center-block">
                <div className="photo">
                  <Image
                    src="/img/home-box-2.jpg"
                    width={324}
                    height={224}
                    layout="responsive"
                    alt="SLII folk"
                  />
                </div>
                <div className="text-box">
                  <div className="text">
                    <h4>Kommunikasjon i ledelse</h4>
                    <p>
                      Hjelp de nye lederene i virksomheten inn på riktig spor
                      ved å gi dem de lederferdighetene som trengs for å bli en
                      effektiv leder.
                    </p>
                    <Link href={`${basePath}/products/managers`}>LÆR MER</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-right">
              <div className="photo-box">
                <div className="photo">
                  <Image
                    src="/img/home-box-3.jpg"
                    width={324}
                    height={224}
                    layout="responsive"
                    alt="SLII folk"
                  />
                </div>
                <div className="text-box">
                  <div className="text">
                    <h4>SELVLEDELSE</h4>
                    <p>
                      Bemyndiggjør alle medarbeidere til å bli selvledere som
                      tar ansvar og eierskap for å oppnå sine mål.
                    </p>
                    <Link href={`${basePath}/products/self-leadership`}>
                      LÆR MER
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row green home">
            <div className="col-sm-4 col-sm-offset-4 text-center">
              <Link href={`${basePath}/products`}>
                <a className="btn btn-primary btn-lg">Se alle programmene</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="managers">
        <div className="container-full">
          <div className="row no-gutters">
            <div className="col-md-6 left visibile-lg hidden-md hidden-sm hidden-xs"></div>
            <div className="col-lg-6 right col-md-12">
              <h2>
                Hvorfor trenger man <br />
                <span className="green-bg"> gode ledere?</span>
              </h2>
              <p className="center-block">
                Ledere er kraften som driver virksomheten. De har en essensiell,
                sentral rolle som sikrer operasjonell suksess gjennom hele
                organisasjonen.
              </p>

              <p>
                Ledere må oversette den strategiske visjonen og målene fra
                øverste ledelse inn i de operasjonelle planene for
                medarbeiderne. De må vite hvordan de skal engasjere og styrke
                sine ansatte for å oppnå resultater. Til slutt må de fremme
                utviklingen av medarbeiderne for å sikre en langsiktig suksess
                for virksomheten og etablere sitt fremtidige lederskap.
              </p>

              <div className="bottom-line-title">BUNNLINJEN</div>
              <div className="bottom-line-box">
                HVis du ikke har gode ledere, har du et seriøst problem. dårlige
                ledere koster tid, kompetanse og penger for virksomheten.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="great white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="green larger">Gode ledere</h1>
              <h1 className="white larger">
                <span className="green-bg">endrer </span>
                <span className="green-bg">alt</span>
              </h1>
            </div>
            <div className="col-lg-6 right" id="animateIcons">
              <div
                className="row icon animated slideInRight"
                id="men"
                onAnimationEnd={menEnd}
              >
                <div className="col-xs-3 col-sm-2 center-block">
                  <Image
                    src="/img/icon-men.png"
                    width={59}
                    height={64}
                    alt="Men"
                  />
                </div>
                <div className="col-xs-9 col-sm-10">
                  <h4>BYGG PRODUKTIVE MEDARBEIDERE SOM BRENNER FOR ARBEIDET</h4>
                  <p>
                    Gode ledere vet hvordan de skal motivere og inspirere
                    medarbeiderne sine, ved å samle de rundt virksomhetens
                    visjoner og mål.
                  </p>
                </div>
              </div>
              <div
                className="row icon"
                id="chart"
                ref={chart}
                onAnimationEnd={chartEnd}
              >
                <div className="col-xs-3 col-sm-2 center-block">
                  <Image
                    src="/img/icon-chart.png"
                    width={66}
                    height={63}
                    alt="Chart"
                  />
                </div>
                <div className="col-xs-9 col-sm-10">
                  <h4>GI RESULTATER</h4>
                  <p>
                    Gode ledere er nøkkelen for å øke de ansattes engasjement og
                    minne dem på hvordan de har gjort det bra tidligere,
                    forbedre produktivitet og bedre resultatet på bunnlinjen.
                  </p>
                </div>
              </div>
              <div className="row icon" id="medal" ref={medal}>
                <div className="col-xs-3 col-sm-2 center-block">
                  <Image
                    src="/img/icon-medal.png"
                    width={54}
                    height={67}
                    alt="Medal"
                  />
                </div>
                <div className="col-xs-9 col-sm-10">
                  <h4>BYGG EN GOD ARBEIDSPLASS</h4>
                  <p>
                    Gode ledere etablerer en kultur sentrert rundt tillit,
                    samarbeid og kontinuerlig læring, som hjelper deg å
                    tiltrekke og beholde de beste talentene.
                  </p>
                </div>
              </div>
              <div className="row get-started">
                <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4 col-lg-5 col-lg-offset-2">
                  <Link href={`${basePath}/get-started`}>
                    <a className="btn btn-primary btn-lg">Kom i gang</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="results-clients">
        <div className="container-full">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  RESULTATER FOR{' '}
                  <span className="green-bg nobreak">våre KUNDER</span>
                </h2>
              </div>
            </div>
            <Slider className="product-client-slides" {...settings}>
              <div className="client1">
                <div className="row">
                  <div className="col-lg-3 visible-lg">
                    <Image
                      src="/img/logo-wd-40.png"
                      width={220}
                      height={162}
                      alt="WD-40 Logo"
                    />
                  </div>
                  <div className="col-lg-9">
                    <p className="italics">
                      &ldquo;Siden vi begynte med treningen av kursene SLII og
                      tillitsledelse fra Blanchard, har vi sett en enorm
                      innvirkning på bedriftskulturen og resultatene på
                      bunnlinjen.&rdquo;
                    </p>
                    <div>- Garry Ridge, daglig leder WD-40 Company</div>
                  </div>
                </div>
              </div>
              <div className="client2">
                <div className="row">
                  <div className="col-lg-3 visible-lg">
                    <Image
                      src="/img/logo-mtn-sm.png"
                      width={212}
                      height={201}
                      alt="Mtn Logo"
                    />
                  </div>
                  <div className="col-lg-9">
                    <p className="italics">
                      &ldquo;Vår lange og tillitsbaserte partnerskap med The Ken
                      Blanchard Companies har gitt oss mulighet til å gjøre
                      transformasjonsendringer som holder oss konkurransedyktige
                      i den stadig skiftende telekomsindustrien&rdquo;
                    </p>
                    <div>
                      - Charl Cuyler Daglig leder: Talent og læring MTN
                      Group--South Africa
                    </div>
                  </div>
                </div>
              </div>
              <div className="client3">
                <div className="row">
                  <div className="col-lg-3 visible-lg">
                    <Image
                      src="/img/logo-fosterfarmschicken.png"
                      width={192}
                      height={172}
                      alt="Foster Farms Chicken Logo"
                    />
                  </div>
                  <div className="col-lg-9">
                    <p className="italics">
                      &ldquo;Kontinuerlig forbedring for våre interne prosesser
                      pågår. The Ken Blanchard Companies har gitt oss en metode
                      for kontinuerlig forbedring av våre ansatte. Ingenting
                      mindre enn fremragende!&rdquo;
                    </p>
                    <div>
                      - Marty Jakosa, Leder, HR og Organisasjonell utvikling
                      Foster Farms
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="white work">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>
                HVORDAN VI samarbeider <span className="green-bg">MED DEG</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <p className="text-center">
                Du forteller oss om dine kritiske utfordringer og så arbeider vi
                med å designe en plan for å oppnå suksess på disse områdene, vi
                hjelper deg på hvert steg av veien.
              </p>
            </div>
          </div>

          <div className="row visible-lg text-center chart margins-20">
            <div className="visible-lg text-center chart col-sm-12 center-block manager-path">
              <Image
                src="/img/manager-path.png"
                width={1100}
                height={323}
                alt="Manager Path"
              />
            </div>
          </div>
          <div className="row visible-md visible-sm manager-path text-center chart">
            <div className="col-md-12 manager-path">
              <Image
                src="/img/manager-path-tablet.png"
                width={638}
                height={828}
                alt="Manager Tablet"
              />
            </div>
          </div>
          <div className="row visible-xs manager-path text-center no-gutters chart center">
            <div className="col-sm-12 center-block manager-path">
              <Image
                src="/img/manager-path-mobile.png"
                width={374}
                height={828}
                alt="Manager Path Mobile"
              />
            </div>
          </div>
        </div>
        <div className="row center-block">
          <div className="col-md-2 col-md-offset-5">
            <Link href={`${basePath}/how`}>
              <a className="btn btn-primary btn-lg center-block">Lær mer</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="founder">
        <div className="container-full">
          <div className="col-lg-6 left"></div>
          <div className="col-lg-6 right">
            <h2>
              Møt vår
              <br />
              <span className="green-bg">grunnlegger</span>
            </h2>
            <p>
              Ken Blanchard har påvirket den daglige ledelsen av mennesker og
              bedrifter over hele verden på en unik måte. Han er en fremtredende
              forfatter, foredragsholder og forretningskonsulent, beundret for
              sin banebrytende forskning og tanker om lederskap.
            </p>
            <Link href="about-team-ken">
              <a className="btn btn-primary btn-lg">Møt Ken</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="white form">
        <div className="container">
          <div className="row row-eq-height">
            <div className="col-lg-6 green-form">
              <form
                method="post"
                action="mailto:info@blanchard.no"
                className="leadership-insights"
              >
                <h2 className="text-center">
                  SPØRSMÅL OM VÅRE ÅPNE KURS ELLER BEDRIFTSINTERNT KURS?{' '}
                </h2>
                <p className="text-center">Kontakt oss med dine spørsmål!</p>
                <div className="form-group"></div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-12"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 text">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg center-block"
                    >
                      SEND OSS EN E-POST
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 upcoming-events">
              <h2>Kommende kurs/event</h2>
              <div className="events">
                <div className="row workshop">
                  <div className="hidden-xs col-sm-3 col-md-2 col-lg-3">
                    <Image
                      src="/img/event-1-vir.jpg"
                      alt="Event"
                      width={256}
                      height={172}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-10 col-lg-9">
                    <div className="date">VIRTUELT OG I KLASSEROM</div>
                    <div className="title">
                      SLII<sup>&reg;</sup>
                    </div>
                    <p>
                      SLII<sup>&reg;</sup>. er verdens mest underviste
                      ledelsesmodell. Det er basert på en modell som lærer en å
                      bruke den riktige ledelsesstilen i forhold til
                      medarbeideren og situasjonen. SLII<sup>&reg;</sup>.
                      Opplevelsen bruker nyskapende teknikker som gjør at en
                      lærer seg SLII<sup>&reg;</sup>. raskere, dypere og mer
                      effektivt. I dette programmet vil du lære deg et nytt
                      språk for ditt lederskap som vil hjelpe deg å øke
                      kvaliteten og kvantiteten på de samtalene som du har med
                      dine medarbeidere, øke utviklingen og ytelsen deres samt
                      gjøre dem mer selvstendige. Å bli en situasjonsbestemt
                      leder vil gjøre deg til en god samarbeidspartner til dem
                      du ledere samt å gi dem det de trenger. Programmet er delt
                      opp i 5 virtuelle økter på 2 timer, eller over 2 dager i
                      klasserom.
                    </p>
                    <p>Se dato og tidspunkt under påmelding. kr. 16.990,-</p>
                    <a href="https://www.absentia.no/CourseiFrameRegister2.aspx?kursID=85#pamelding">
                      {' '}
                      MER INFO
                    </a>
                  </div>
                </div>

                <div className="row workshop">
                  <div className="hidden-xs col-sm-3 col-md-2 col-lg-3">
                    <Image
                      src="/img/event-1-sl.jpg"
                      alt="Second Event"
                      width={324}
                      height={224}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-9 col-md-10 col-lg-9">
                    <div className="date">VIRTUELT ELLER I KLASSEROM</div>
                    <div className="title">Kommunikasjon i ledelse</div>
                    <p>
                      Programmet Kommunikasjon i ledelse bygger på de
                      gjennomtestede hemmelighetene i Ken Blanchards bok The New
                      One Minute Manager og introduserer samtalene og
                      ferdighetene som nye ledere trenger for å raskt oppnå
                      suksess samt bygge positive relasjoner med teamene sine.
                      Programmet er delt opp i 3 virtuelle økter på 2 timer
                      eller over 1 dag i klasserom.
                    </p>
                    <p>Se dato og tidspunkt under påmelding. kr. 7.990,-</p>
                    <a href="https://www.absentia.no/CourseiFrameRegister2.aspx?kursID=XXX#pamelding">
                      {' '}
                      MER INFO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-sm-6 col-sm-offset-3 col-md-3 col-md-offset-8">
              <Link href={`${basePath}/events-workshops`}>
                <a className="btn btn-primary btn-lg center-block">
                  Se alle kurs
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="connect-with-us">
        <div className="container box">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>BLI MED OSS</h2>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-xs-12 col-sm-6">
              <div className="pull-right" style={{ marginRight: '15px' }}>
                <a
                  href="http://leaderchat.org"
                  className="btn btn-primary btn-lg center-block"
                >
                  Besøk bloggen
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div id="connect-social" className="center-block">
                <span className="icon" style={{ marginRight: '15px' }}>
                  <a
                    href="https://www.facebook.com/blanchardnorway"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/img/icon-fb.png"
                      width={49}
                      height={48}
                      alt="Facebook"
                    />
                  </a>
                </span>
                <span className="icon" style={{ marginRight: '15px' }}>
                  <a
                    href="https://twitter.com/leaderchat/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/img/icon-twitter.png"
                      width={49}
                      height={48}
                      alt="Twitter"
                    />
                  </a>
                </span>
                <span className="icon" style={{ marginRight: '15px' }}>
                  <a
                    href="https://www.linkedin.com/company/28662337"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/img/icon-linkedin.png"
                      width={49}
                      height={48}
                      alt="LinkedIn"
                    />
                  </a>
                </span>
                <span className="icon">
                  <a
                    href="https://www.youtube.com/user/KenBlanchardCos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/img/icon-youtube.png"
                      width={49}
                      height={48}
                      alt="YouTube"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
