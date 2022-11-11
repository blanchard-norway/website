import { NextPage } from 'next';
import Image from 'next/image';
import { createRef } from 'react';
import { Layout } from '../components/layout';

const Resources: NextPage = () => {
  const trust = createRef<HTMLHeadingElement>();

  const greatEnd = () => {
    trust.current?.classList.toggle('animated');
    trust.current?.classList.toggle('slideInLeft');
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="resources">
        <div className="container">
          <h1 className="green animated slideInRight" onAnimationEnd={greatEnd}>
            GODE LEDERE
          </h1>
          <h1 className="green" ref={trust} id="trust">
            <span className="green-bg">LÆRER ALLTID</span>
          </h1>
        </div>
      </div>

      <section className="white nopadding" style={{ marginBottom: 0 }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">HJEM</a>
                <span className="divider">{'//'}</span>RESSURSER
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white nopadding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                FORSKNING - <span className="green-bg">INNSIKT</span>
              </h2>
              <div className="subtitle text-center center-block">
                Se gjennom dataene bak Blanchard programmene.
              </div>
            </div>
          </div>
          <div className="row row-eq-height margins-20 ">
            <div className="col-md-4 green-box">
              <Image
                src="/img/resources/resources-insights1.jpg"
                width={324}
                height={196}
                alt="Insights 1"
                className="img-responsive"
              />
              <h4>COACHING FERDIGHETER: DEN SAVNEDE BRIKKEN FOR LEDERE</h4>
              <p>
                Dennee artikkelen viser at coaching er et kraftig
                ledelsesverktøy. Organisasjoner kan utvikle og legge til rette
                for den aktuelle kulturen, opplæringen og støtten som ledere
                trenger for å ta i bruk coachende atferd som vil gjøre dem mer
                effektive
              </p>

              <a
                href="/pdfs/coaching-skills-the-missing-link-for-leaders.pdf"
                target="external"
              >
                <div className="btn btn-primary">Last ned nå</div>
              </a>
            </div>
            <div className="col-md-4 green-box">
              <Image
                src="/img/resources/resources-insights2.jpg"
                width={324}
                height={196}
                alt="Insights 2"
                className="img-responsive"
              />
              <h4>TILLIT: EN VIKTIG INGREDIENS FOR LEDERSUKSESS</h4>
              <p>
                En nøkkelkomponent i vellykkede samarbeidsforhold mellom ledere
                og følgere, tillit muligjør samarbeid, oppfordrer til
                informasjonsdeling og øker åpenhet og gjensidig aksept.
              </p>
              <a
                href="/pdfs/trust-an-essential-ingredient-for-leadership-succes.pdf"
                target="external"
              >
                <div className="btn btn-primary">Last ned nå</div>
              </a>
            </div>
            <div className="col-md-4 green-box">
              <Image
                src="/img/resources/resources-insights3.jpg"
                width={324}
                height={196}
                alt="Insights 3"
                className="img-responsive"
              />
              <h4>Millenniums på arbeidsplassen</h4>
              <p>
                Milleniums generasjonen (født 1981-1995) er 76 millioner
                mennesker, og utgjør 36% av dagens arbeidskraft og vokser til
                46% innen 2020. Ledere som lærer å inspirere millennials å bidra
                med sine talenter, kan overgå konkurrentene sine.
              </p>
              <a
                href="/pdfs/millennials-in-the-workplace.pdf"
                target="exteranl"
              >
                <div className="btn btn-primary">Last ned nå</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="empower">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                LEDER <span className="green-bg">RESSURSER</span>
              </h2>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="subtitle text-center center-block">
                Utforsk verdifulle artikler, videoer og verktøy for å adressere
                dine ledere og lederutfordringer.
              </div>
            </div>
          </div>
          <div className="row margins-30">
            <div className="col-xs-12 text-center">
              <a
                href="https://resources.kenblanchard.com/research-insights"
                target="external"
              >
                <div className="btn btn-primary btn-lg">
                  Besøk det globale ressurssenteret
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
