import { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const ProductCoaching: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const trust = createRef<HTMLHeadingElement>();
  const secondIcon = createRef<HTMLDivElement>();
  const thirdIcon = createRef<HTMLDivElement>();
  const fourthIcon = createRef<HTMLDivElement>();

  const onGreatEnd = () => {
    trust.current?.classList.add('animated', 'slideInLeft');
  };

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
      <div className="container-fluid header product" id="product-coaching">
        <div className="container">
          <h1
            className="green animated slideInRight"
            id="great"
            onAnimationEnd={onGreatEnd}
          >
            BAK ENHVER DYKTIG MEDARBEIDER
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            STÅR EN <span className="green-bg">DYKTIG Coach</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">HJEM</a> <span className="divider">{'//'}</span>
                <a href="products.html">produkter og tjenester</a>
                <span className="divider">//</span>Grunnleggende Coaching
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  GRUNNLEGGENDE COACHING FERDIGHETER FOR{' '}
                  <span className="green-bg">LEDERE</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p>
                  Mange ledere forstår ikke hvor viktig coaching er for
                  utvikling, vekst og prestasjon for deres ansatte. Vårt kurs,{' '}
                  <strong>
                    Grunnleggende coaching<sup>®</sup>
                  </strong>
                  , lærer dine ledere hvordan man effektivt coacher
                  medarbeiderne—ikke bare leder dem — for å øke produktiviteten,
                  skape et miljø basert på tillit og selvstendighet, og derved
                  levere bedre resultater på bunnlinjen.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-9 col-lg-10 step-left">
                      <p>
                        Organisasjoner som effektivt trener sine ledere på
                        hvordan man skal coache sine ansatte har{' '}
                        <span className="blue">
                          130% større sannsynlighet for å oppnå bedre resultater{' '}
                        </span>{' '}
                        og se{' '}
                        <span className="blue">
                          39% bedre resultater fra de ansatte
                        </span>{' '}
                        gjennom engasjement, produktivitet og kundeservice.
                        <sup>*</sup>
                      </p>
                    </div>
                    <div className="col-sm-3 col-lg-2 step hidden-xs">
                      <Image
                        src="/images/icon-products-step.png"
                        alt="Products Step"
                        width={88}
                        height={98}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent bold18">
                  Så hvorfor har BARE 5% av organisasjonene ledere som har blitt
                  trent til å coachE&nbsp; sine medarbeidere? Lær hvordan
                  Blanchard kan lære dine ledere de grunnleggende coaching
                  ferdighetene.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4 text-center">
                <Link href="get-started.html">
                  <a className="btn btn-primary btn-lg">Kom i gang</a>
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
                HVORDAN FÅ DET BESTE UT AV DINE MEDARBEIDERE GJENNOm&nbsp;&nbsp;{' '}
                <span className="green-bg">
                  TRENING PÅ COACHING FERDIGHETER
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Ved å integrerer coaching kompetanse og ferdigheter i
                ledertreningen, vil du få svært effektive ledere som vet hvordan
                de skal coache sine medarbeidere for å skape relasjoner, øke
                tillit og hjelpe den enkelte ansatte å prestere på sitt beste.
              </p>
            </div>
          </div>
          <section className="white trust">
            <div className="container mobile-full">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <h2>
                    Hva vil KURSET GRUNNLEGGENDE COACHING FORBEDRE HOS
                    DINE&nbsp; LEDERE?
                  </h2>
                </div>
                <div className="row icons" id="animateIcons">
                  <div
                    className="col-md-3 text-center icon-block animated slideInUp"
                    onAnimationEnd={onFirstIconEnd}
                    id="icon1"
                  >
                    <div className="icon">
                      <Image
                        src="/images/icon-products-speed.png"
                        width={124}
                        height={124}
                        alt="Speed"
                      />
                    </div>
                    <h4>ØKT LÆRING OG UTVIKLING</h4>
                    <p>
                      Ledere som coacher gir akkurat den riktige mengden
                      veiledning og støtte, og hjelper sine ansatte til å lære
                      og vokse raskere.
                    </p>
                  </div>
                  <div
                    className="col-md-3 text-center icon-block"
                    onAnimationEnd={onSecondIconEnd}
                    ref={secondIcon}
                    id="icon2"
                  >
                    <div className="icon">
                      <Image
                        src="/images/icon-products-gear.png"
                        width={124}
                        height={124}
                        alt="Gear"
                      />
                    </div>
                    <h4>Skap selvgående problemløsere</h4>
                    <p>
                      Medarbeidere tilegner seg selvtillit gjennom å bli coachet
                      og blir selvhjulpne problemløsere, som er hjørnesteinen i
                      dagens smidige organisasjoner.
                    </p>
                  </div>
                  <div
                    className="col-md-3 text-center icon-block"
                    onAnimationEnd={onThirdIconEnd}
                    ref={thirdIcon}
                    id="icon3"
                  >
                    <div className="icon">
                      <Image
                        src="/images/icon-products-group.png"
                        width={124}
                        height={124}
                        alt="Group"
                      />
                    </div>
                    <h4>
                      BEHOLD TALENTENE
                      <br />
                      DINE
                    </h4>
                    <p>
                      Medarbeidere som blir coachet er mer engasjerte og det er
                      større sannsynlighet for at de vil støtte og bli værende i
                      virksomheten din.
                    </p>
                  </div>
                  <div
                    className="col-md-3 text-center icon-block"
                    ref={fourthIcon}
                    id="icon4"
                  >
                    <div className="icon">
                      <Image
                        src="/images/icon-products-3-people.png"
                        width={124}
                        height={124}
                        alt="People"
                      />
                    </div>
                    <h4>BYGG DIN LEDERSTYRKE</h4>
                    <p>
                      Ledere som lærer hvordan man coacher utvikler kompetente
                      og dyktige medarbeidere, som en dag vil bli fremtidens
                      ledere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="howto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left">
              <h1 className="smaller">
                SKAP EN KONSISTENT
                <br />
                <span className="green-bg">COACHING KULTUR</span>
              </h1>
              <p>
                Vi vet at du ønsker at dine lederene skal være så effektive som
                mulig når de utvikler sine medarbeidere. Vårt kurs{' '}
                <strong>Grunnleggende coaching</strong> kan hjelpe deg med
                dette.
              </p>
              <p>
                <strong>Grunnleggende coaching</strong> er et ferdighetsbasert,
                praktisk treningsprogram designet for å lære tankesettet, de
                viktigste ferdighetene og den strukturerte prosessen som dine
                ledere trenger for å få det beste ut av sine medarbeidere.
              </p>
              <p>
                Kurset <strong>Grunnleggende coaching</strong> samsvarer med
                kjernekompetansen for coaching definert av the International
                Coaching Federation. Utviklingen av kurset ble ledet av våre
                kolleger som er&nbsp; Blanchard’s Master Certified coacher, og
                som har har undervist i coachingferdigheter i over 20 år.
              </p>
              <p>
                Med en coachende lederstil vil lederene dine bli dyktige ledere
                som vet hvordan de kan utvikle sine medarbeidere og derved oppnå
                bedre resultater for virksomheten.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right">
                <Image
                  src="/images/products-coaching-process.png"
                  alt="Process"
                  width={7535}
                  height={9561}
                  className="img-responsive"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-sm-12 text-center">
              <h3>Vil dU vite mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                src="/images/global_product_download_images/global_download_images-5.jpg"
                alt="Global Download"
                width={521}
                height={299}
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/Grunnleggende_coaching.pdf">
                    <Image
                      src="/images/icon-download-bright-green.png"
                      width={23}
                      height={26}
                      alt="Download Icon"
                    />
                    Mer om Grunnleggende Coaching
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

export default ProductCoaching;
