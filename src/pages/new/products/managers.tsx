import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const ProductManagers: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const trust = createRef<HTMLDivElement>();
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
      <div className="container-fluid header product" id="product-managers">
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            BASISKUNNSKAPENE FOR
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            <span className="green-bg">ENHVER LEDER</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach first-time-managers">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href={`${basePath}`}>HJEM</Link>{' '}
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>
                  Produkter og Tjenester
                </Link>
                <span className="divider">{'//'}</span>Kommunikasjon i ledelse
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  FÅ DINE LEDERE TIL Å LYKKES VED Å GI DEM KURSET I&nbsp;{' '}
                  <span className="green-bg">INSPIRERENDE LEDELSE</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p>
                  De fleste nye ledere sliter, og resultatet av dette er
                  betydelige: høy turn-over, lav moral, for lav produktivetet og
                  annet. Det er fordi de fleste ikke har blitt lært opp i de
                  ferdighetene de trenger for å lykkes. Derfor laget vi&nbsp;
                  <strong>Kommunikasjon i ledelse,</strong> &nbsp;som er et
                  inspirerende treningsprogram for nye ledere og for dem som
                  trenger oppfriskning i hvordan man bygger positivie relasjoner
                  til sine kolleger, øker engasjement og produktivitet.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-3 arrow-right hidden-xs">
                      <Image
                        width={91}
                        height={96}
                        alt="Products down arrow"
                        src="/images/icon-products-down-arrow.png"
                      />
                    </div>
                    <div className="col-sm-9 arrow">
                      <p>
                        <span className="blue">85% av LEDERNE&nbsp;</span>{' '}
                        &nbsp;sier de ikke har fått noen ledertrening. *
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-10 question-left">
                      <p>
                        <span className="blue">98% av lederne</span> føler de
                        vil ha utbytte av mer opplæring.*
                      </p>
                    </div>
                    <div className="col-sm-2 question-right hidden-xs">
                      <Image
                        width={61}
                        height={73}
                        alt="Products question"
                        src="/images/icon-products-question.png"
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
                  Er dine nye ledere klare for å lede?
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
                Fordelene ved å lære opp dine&nbsp;{' '}
                <span className="green-bg">NYE LEDERE </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Førstegangs ledere som får de riktige verktøyene og treningen
                fra starten av, og gjør ledere som strever om til inspirerende
                ledere. Dette gjør vi ved å lære dem&nbsp; hvordan de skal
                kommunisere effektivt, sette mål, være empatiske og gi gode
                tilbakemeldinger. Dette gjør dem bedre rustet ti lå bli
                effektive ledere som kan skape engasjerte og produktive
                medarbeidere, noe som igjen gir bedre resultater for din
                virksomhet.
              </p>
            </div>
          </div>
          <div className="row icons" id="animateIcons">
            <div
              className="col-md-4 text-center icon-block animated slideInUp"
              onAnimationEnd={onFirstIconEnd}
              id="icon1"
            >
              <div className="icon">
                <Image
                  width={124}
                  height={124}
                  alt="Products Walking Up"
                  src="/images/icon-products-walking-up.png"
                />
              </div>
              <h4>FÅ RASKERE FREMGANG</h4>
              <p>
                Trening hjelper ledere å få en mykere og mer suksessfull
                overgang, samt at de får mer selvtillit i den nye rollen.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              id="icon2"
              onAnimationEnd={onSecondIconEnd}
              ref={secondIcon}
            >
              <div className="icon">
                <Image
                  width={124}
                  height={124}
                  alt="Products Cup"
                  src="/images/icon-products-cup.png"
                />
              </div>
              <h4>SKAPE HØY-PRESTASJONS TEAM</h4>
              <p>
                Trente ledere vet hvordan de skal støtte, motivere og styrke
                medlemmene for å skape prestasjon og resultater.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              id="icon3"
              ref={thirdIcon}
            >
              <div className="icon">
                <Image
                  width={124}
                  height={124}
                  alt="Products 3 Ties"
                  src="/images/icon-products-3-ties.png"
                />
              </div>
              <h4>UTVIKLE FREMTIDENS LEDERE</h4>
              <p>
                Trente nye ledere utvikler positive og effektive lederstiler og
                ferdigheter fra starten, som vil tjene dem hele karrieren deres.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="setupsuccess">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                OPPLÆRING FOR LEDERE SOM ER <br />
                <span className="green-bg">NYE I ROLLEN</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
              <p className="eightyfivepercent">
                Du ønsker suksess for din nye leder, og vi kan hjelpe deg med
                den riktige starten med vårt{' '}
                <strong>Kommunikasjon i ledelse</strong> treningsprogram.
              </p>
              <p className="eightyfivepercent">
                <strong>Kommunikasjon i ledelse</strong> kapitaliserer på den
                bestselgende bokens påviste hemmeligheter,{' '}
                <em>
                  The New One Minute Manager<sup>®</sup>
                </em>
                , boken er midt i blinken for både opplæring av nye ledere som
                ønsker en oppfriskning. Den introduserer tankegangen,
                kjernesamtalene og kommunikasjonsferdighetene som fører til at
                nye ledere raskt måtte oppnår suksess i sin nye rolle og bygge
                positive relasjoner med sine medarbeidere.
              </p>
            </div>
          </div>
          <div className="row row-eq-height side-by-side-graphics">
            <div className="col-md-6 left">
              <Image
                width={2071}
                height={3120}
                alt="4 Core Conversations"
                src="/images/products-managers-4-core-conversations.png"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right">
                <Image
                  width={2075}
                  height={2518}
                  alt="4 Essential Skills"
                  src="/images/products-managers-4-essential-skills.png"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>Vil dere lære mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                width={521}
                height={299}
                alt="Global Download Images"
                src="/images/global_product_download_images/global_download_images-10.jpg"
                className="img-responsive"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/Kommunikasjon_i_ledelse.pdf">
                    <FutureImage
                      width={36}
                      height={26}
                      alt="Download Icon"
                      src="/images/icon-download-bright-green.png"
                    />
                    Mer om Kommunikasjon i ledelse
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetStartedContainer />

      <div className="container margin-30">
        <div className="col-xs-12">
          <div className="footnotes">
            <div className="footnote">
              *Corporate Executive Board; First Time Manager Survey, The Ken
              Blanchard Companies, 2015.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductManagers;
