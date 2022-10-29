import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const SelfLeadership: NextPage = () => {
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
      <div className="container-fluid header product" id="selfleadership">
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            SKAP en arbeidsstyrke MED{' '}
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            {' '}
            <span className="green-bg">proaktive ledere</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach selfleadership">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href={basePath}>HJEM</Link>{' '}
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>
                  produkter og tjenester
                </Link>
                <span className="divider">{'//'}</span>SELVLEDLESE
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  {' '}
                  KURS I SELVELEDELSE SOM ØKER MEDARBEIDERNES&nbsp;
                  <span className="green-bg">POTENSIALE</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent">
                  Hvem bruker arbeidsdagen sin med kunder og holder hjulene i
                  gang i virksomheten? Det er dine individuelle bidragsytere. De
                  er ofte en oversett majoritet i organisasjonen din, men
                  likevel er det ingenting som blir gjort uten deres motivasjon
                  og engasjement. Vårt kurs <strong>Selvledelse,</strong> som er
                  et utviklingskurs, lærer individer det tankesettet og de
                  ferdigheter de trenger for å bli bemyndiget og proaktive
                  selvledere. De lærer å ta kontroll over sin egen suksess og
                  forplikter seg til å skape resultater for din organisasjon.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-10 step-left left-aligned">
                      <p>
                        Den viktigste enkeltfaktoren for suksess i
                        organisasjonen er proaktiv atferd fra de individuelle
                        bidragsyterne. Men{' '}
                        <span className="blue">50% av medarbeiderne</span> føler
                        at arbeidet deres har stagnert*.{' '}
                        <span className="blue">1/3 bare gjør jobben sin,</span>{' '}
                        og ikke noe mer**.
                      </p>
                    </div>
                    <div className="col-sm-2 step hidden-xs">
                      <Image
                        width={87}
                        height={87}
                        src="/images/sl-organizational-success-self-leadership-development.png"
                        alt="Self leadership development is key for organizational success | Ken Blanchard"
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
                  Hva kunne virksomheten din oppnådd hvis alle var selvledere?
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-sm-offset-4 text-center">
                <Link href={`${basePath}/get-started`}>
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
                Din investering i selvledere{' '}
                <span className="green-bg">gir høy avkastning</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Hvorvidt bedriftens strategiske tiltak skal lykkes avhenger av
                engasjementet og initiativet til de ansatte i første rekke; de
                individuelle bidragsyterne som har ansvar for å gjennomføre og
                få ting til å skje. Når du gir de ansatte ferdigheter i
                selvledelse og tilhørende tankegang, bygger du en myndiggjort
                arbeidsstyrke som tar ansvar og som er nyskapende og effektiv.
              </p>
            </div>
          </div>
          <div className="row icons" id="animateIcons">
            <div
              className="col-md-3 text-center icon-block animated slideInUp"
              onAnimationEnd={onFirstIconEnd}
              id="icon1"
            >
              <div className="icon">
                <Image
                  src="/images/sl-self-leadership-skills-accelerator.png"
                  alt="Self leadership skills accelerate development | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Raskere utvikling</h4>
              <p>
                Selvledere tar ansvar for sin egen utvikling—de spør etter
                instrukser og støtten de trenger så de kan mestre raskerere{' '}
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
                  src="/images/sl-self-leadership-skills-performance-improvements.png"
                  alt="Create higher performance with self leadership skills | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Forbedre prestasjon</h4>
              <p>
                Myndiggjorte selvledere er mer engasjert og forpliktet, og de
                jobber konsekvent med å øke prestasjonen i hele organisasjonen.
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
                  src="/images/sl-self-development-accountability-programs.png"
                  alt="Improve employee personal accountability with self development programs | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Dyrk personlig ansvar</h4>
              <p>
                Selvledere . trenger ikke holdes ansvarlige, de holder seg selv
                ansvarlige for å oppnå sine mål og vellykket implementering av
                organisasjonens iniativer
              </p>
            </div>
            <div
              className="col-md-3 text-center icon-block"
              id="icon4"
              ref={fourthIcon}
            >
              <div className="icon">
                <Image
                  src="/images/sl-self-leadership-development-innovation.png"
                  alt="Self leadership development increases innovation | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Økt innovasjon</h4>
              <p>
                Myndiggjorte selvledere vet hvordan de skal passere grenser som
                hindrer evnene deres til å tenke utenfor boksen når de løser
                problemer og utfordringer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="empower">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">HVORDAN STYRKE SELVLEDERE</h2>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
              <p className="eightyfivepercent">
                Vi vet hvor kritisk det er for din organisasjons suksess at alle
                medarbeiderne er myndiggjort, proaktive og dedikeerte til å
                oppnå resultater. Vårt utviklingskurs{' '}
                <strong>Selvledelse</strong> lærer medarbeidere på alle nivåer i
                organisasjonen din hvordan de blir bemyndigede selvledere som
                tar ansvar og eierskap for sin egen suksess.
              </p>
              <p className="eightyfivepercent">
                Blanchards <strong>Selvledelse</strong> bruker verdens mest
                underviste ledelsesmodell, SLII®. modellen, som fundament og
                integrerer den nyeste læring om proaktive ferdigheter med de
                ferdigheter som enkeltpersoner trenger for å være maksimalt
                effektive. Medarbeidere i teamet lærer et felles språk for å
                kunne diskutere den enkeltes personlige utvikling og prestasjon,
                slik at samtaler med deres ledere kan bli mer effektive og
                derved bygge mer tillitsfulle og åpne relasjoner
              </p>
              <p className="eightyfivepercent">
                <strong>Selvledelse</strong> lærer dine medarbeidere det
                tankesettet og de ferdighetene som trengs for å bli proaktive
                selvstartere som vet hvem de skal spørre om instrukser og
                tilbakemeldinger og hvordan de skal ssikre aksept for sine
                innovative løsninger.
              </p>
            </div>
          </div>
          <div className="row row-eq-height side-by-side-graphics">
            <div className="col-md-6 left">
              <Image
                width={483}
                height={434}
                src="/images/sl-self-leadership-development-mindset-chart.png"
                alt="Self leadership development mindset diagram | Ken Blanchard"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right">
                <Image
                  width={483}
                  height={432}
                  src="/images/sl-self-leadership-skills-diagram.png"
                  alt="Situational self leadership skills diagram | Ken Blanchard"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Vil du lære mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                width={521}
                height={299}
                alt="Global Download Images"
                src="/images/global_product_download_images/global_download_images-11.jpg"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="#">
                    <FutureImage
                      width={36}
                      height={24}
                      alt="Download Icon"
                      src="/images/icon-download-bright-green.png"
                    />
                    MER OM SELVLEDELSE (kommer)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetStartedContainer />

      <div className="clearfix"></div>
      <div className="container">
        <div className="col-xs-12">
          <div className="footnotes">
            <div className="footnote">
              <sup>*</sup>DDI Pulse of the Workforce Survey
              <br />
              <sup>**</sup>Gallup 2015 Engagement Survey
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SelfLeadership;
