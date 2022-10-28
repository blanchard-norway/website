import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const TeamLeadership: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const secondIcon = createRef<HTMLDivElement>();
  const thirdIcon = createRef<HTMLDivElement>();
  const fourthIcon = createRef<HTMLDivElement>();

  const onFirstIconEnd = () => {
    secondIcon.current?.classList.add('animated', 'slideInUp');
  };

  const onSecondIconEnd = () => {
    thirdIcon.current?.classList.add('animated', 'slideInUp');
  };

  const onThirdIconEnd = () => {
    fourthIcon.current?.classList.add('animated', 'slideInUp');
  };

  return (
    <Layout>
      <div
        className="container-fluid header product"
        id="product-teamleadership"
      >
        <div className="container">
          <h1 className="green animated slideInRight" id="great">
            Styrken av <span className="green-bg">OSS</span>
          </h1>
        </div>
      </div>

      <section className="lackoftrust teamleadership">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">HJEM</a> <span className="divider">{'//'}</span>
                <a href="products.html">produkter og tjenester</a>
                <span className="divider">{'//'}</span>TEAMLEDELSE
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12"></div>{' '}
              <h2>TRENING I TEAMLEDELSE FOR EFFEKTIVE TEAM</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Team feiler i 60% av tilfellene. De mislykkes ofte med å oppnå
                sine mål av flere årsaker: ingen forståelse av felles formål,
                uklare roller, mangel av felles ansvar eller ineffektiv ledelse.
                Vårt <strong>Teamleder</strong> kurs lærer ledere hvordan de
                skal diagnostisere utviklingen i team og hvilken lederstil som
                skal benyttes for å forbedre kommunikasjonen, øke
                produktiviteten og lede team på varig og vellykket måte.{' '}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <div className="box">
                <div className="row row-eq-height">
                  <div className="col-sm-9 chain-left text-left">
                    <p>
                      <span className="blue">54% medarbeidere</span> bruker
                      opptil{' '}
                      <span className="blue">43% av dagen sin i teammøter</span>{' '}
                      og videre<span className="blue">34%</span> bruker opptil{' '}
                      <span className="blue">50% av tiden i teammøter*.</span>
                    </p>
                  </div>
                  <div className="col-sm-3 clock-right hidden-xs">
                    <Image
                      width={87}
                      height={87}
                      src="/images/st-team-meetings-team-leadership-model.png"
                      alt="Team leadership model for improved team meetings | Ken Blanchard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <div className="box">
                <div className="row row-eq-height">
                  <div className="col-sm-3 handshake-left vcenter hidden-xs">
                    <Image
                      width={65}
                      height={69}
                      src="/images/st-team-leadership-training-for-organizations.png"
                      alt="Team leadership training is often missing from organizations | Ken Blanchard"
                    />
                  </div>
                  <div className="col-sm-9 handshake-right vcenter">
                    <p>
                      Alikevel får kun{' '}
                      <span className="blue">
                        42% sjeldent eller aldri opplæring i
                      </span>
                      <br /> hvordan man skal lede team*.
                    </p>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>
          <div className="row margins-20">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Å ha evnen til å lede produktive team og effektive er avgjørende
                for å utnytte styrken til de enkelte teammedlemmer, adressere
                tverrfunksjonelle utfordringer, og få jobben gjort i ethvert
                selskap.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4 text-center margin-20">
              <Link href={`${basePath}/get-started`}>
                <a className="btn btn-primary btn-lg">Kom i gang</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="white trust">
        <div className="container mobile-full">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>
                Bruk effektive team som et
                <br />
                <span className="green-bg">konkurransefortrinn</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="text-center eightyfivepercent">
                Høyt presterende team tillater organisasjonen å utnytte flere
                ferdigheter, styrker, og erfaringer hos teamets medlemmer for å
                løse komplekse organisatoriske problemer., De utfører oppgaver
                raskere, tar bedre beslutninger øker kreativiteten og leverer
                konsekvent overlegne resultater.
              </p>
            </div>
          </div>
          <section className="white trust">
            <div className="container mobile-full">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2>
                    SKAP RESULTATER VED HJELP AV ET OPPLÆRINGSPROGRAM FOR
                    <br />
                    <span className="green-bg">TEAM LEDERE</span>
                  </h2>
                </div>
              </div>
              <div className="row icons" id="animateIcons">
                <div
                  className="col-md-3 text-center icon-block animated slideInUp"
                  id="icon1"
                  onAnimationEnd={onFirstIconEnd}
                >
                  <div className="icon">
                    <Image
                      src="/images/st-high-performing-team-leadership-styles.png"
                      alt="High performing team leadership styles improve team collaboration” width="
                      height={124}
                      width={124}
                    />
                  </div>
                  <h4>
                    FORBEDRE
                    <br />
                    SAMARBEIDET
                  </h4>
                  <p>
                    Høy-presterende team samler sammen utfyllende ferdigheter,
                    styrker og erfaringer, som resulterer i en sum som er mye
                    større enn det enkelte medlems individuelle del.
                  </p>
                </div>
                <div
                  className="col-md-3 text-center icon-block"
                  id="icon2"
                  onAnimationEnd={onSecondIconEnd}
                  ref={secondIcon}
                >
                  <div className="icon">
                    <Image
                      src="/images/st-team-leadership-model-superior-results.png"
                      alt="Adopt a team leadership model to achieve superior results | Ken Blanchard” width="
                      height={124}
                      width={124}
                    />
                  </div>
                  <h4>
                    OPPNÅ OVERLEGNE
                    <br />
                    RESULTATER
                  </h4>
                  <p>
                    Effektive team som er bemyndiget og ansvarlige møter
                    konsekvent de oppsatte målene og leverer overlegene
                    resultater.
                  </p>
                </div>
                <div
                  className="col-md-3 text-center icon-block"
                  id="icon3"
                  onAnimationEnd={onThirdIconEnd}
                  ref={thirdIcon}
                >
                  <div className="icon">
                    <Image
                      src="/images/st-situational-team-leadership-skills%20teamwork.png"
                      alt="Situational team leadership skills can increase teamwork and innovation” width="
                      height={124}
                      width={124}
                    />
                  </div>
                  <h4>
                    ØKE
                    <br />
                    INNOVASJON
                  </h4>
                  <p>
                    Ved å jobbe sammen, deler teammedlemmene talent og synspunkt
                    for å levere kreative løsninger på komplekse
                    problemstillinger.
                  </p>
                </div>
                <div
                  className="col-md-3 text-center icon-block"
                  id="icon4"
                  ref={fourthIcon}
                >
                  <div className="icon">
                    <Image
                      src="/images/st-high-performing-teams-team-leadership%20training.png"
                      alt="Team leadership training leads to consistently high performing teams” width="
                      height={124}
                      width={124}
                    />
                  </div>
                  <h4>
                    KONSEKVENT HØY
                    <br />
                    PRESTASJON
                  </h4>
                  <p>
                    Medarbeidere som har arbeidet med et sammenhengende, høyt
                    fungerende team sprer ferdigheter og drar fordeler med
                    samarbeid på tvers av organisasjonen din.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="howto teamleadership">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left">
              <h1 className="smaller">
                INVESTER I DINE <br />
                <span className="green-bg">TEAMS PRESTASJONER</span>
              </h1>
              <p>
                Vi vet at du ønsker at teamene dine skal arbeide effektivt
                sammen på tvers av hele organisasjonen din, og vårt{' '}
                <strong>Teamleder</strong> kurs kan hjelpe din virksomhet med å
                bygge høytpresterende team.
              </p>
              <p>
                <strong>Teamledelse</strong> er et ferdighetsbasert og praktisk
                kurs designet for å tilby dine teamledere de prosessene,
                verktøyene og lederegenskapene de trenger for å styrke
                teammedlemmene, øke produktiviteten og øke suksessen for
                teaminitiativer. Vi kan levere kurset som vanlig
                klasseromsundervisning eller virtuelt.
              </p>
              <p>
                Basert på grundig forskning om hvordan et velfungerende team
                arbeider, lærer <strong>Teamledelse</strong> dine ledere de
                forutsigbare stadiene av teamutvikling og teamledelse de har
                behov for, for å kunne bringe et team raskt og vellykket
                fremover.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right team-performance">
                <Image
                  width={484}
                  height={497}
                  src="/images/team-leadership-model.png"
                  alt="Team performance process team leadership model | Ken Blanchard"
                  className="img-responsive"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
          <div className="row margin-30">
            <div className="col-sm-12 text-center">
              <h3>Vil dU VITE mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                width={521}
                height={299}
                src="/images/global_product_download_images/global_download_images-8.jpg"
                className="img-responsive"
                alt="Global Download"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="#">
                    <FutureImage
                      width={36}
                      height={24}
                      src="/images/icon-download-bright-green.png"
                      alt="Download Icon"
                    />{' '}
                    Mer om Teamledelse (kommer)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetStartedContainer />

      <div>
        <div className="clearfix" />
        <div className="container">
          <div style={{}}>
            <div className="footnotes">
              <div className="footnote">
                <sup>*</sup> High-Impact Performance Management: Maximizing
                Performance Coaching, 2011, Bersin &amp; Associates
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamLeadership;
