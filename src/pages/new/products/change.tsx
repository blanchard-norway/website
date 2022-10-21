import { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const ProductChange: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const secondIcon = createRef<HTMLDivElement>();
  const thirdIcon = createRef<HTMLDivElement>();

  const onFirstIconEnd = () => {
    secondIcon.current?.classList.add('animated', 'slideInUp');
  };

  const onSecondIconEnd = () => {
    thirdIcon.current?.classList.add('animated', 'slideInUp');
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="product-change">
        <div className="container">
          <h1 className="green animated slideInRight" id="great">
            SKAFF DEG KOMPETANSEN SOM KAN DOKUMENTERE AT DEN FUNGERER VED{' '}
            <span className="green-bg">ORGANISATORISKE ENDRINGER</span>
          </h1>
        </div>
      </div>

      <section className="change">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">Hjem</a> <span className="divider">{'//'}</span>
                <a href="products.html">produkt og tjenester</a>
                <span className="divider">{'//'}</span>ENDRINGSLEDELSE
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  Arbeid gjennom <span className="green-bg">ENDRING</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent">
                  De fleste initiativer som tas i forbindelse med
                  endringsprosesser lykkes ikke, og dette viser seg å ha sin
                  årsak i at 80% av selskapene kjører prosesser som er initiert
                  på toppen og som ikke tar hensyn til bekymringene fra de
                  ansatte som blir berørt. I kurset Endringsledelse er ryggraden
                  prosesser som innebærer høy grad av involvering og samarbeid
                  for alle berørte.
                </p>
                <p>
                  Denne inkluderende tilnærmingen bygger på forskning og mer enn
                  30 års erfaring fra området.
                </p>
                <p>
                  Nyere forskning viser at ved å benytte høy grad av involvering
                  og dialog mellom ansatte og de som er ansvarlige for
                  endringsledelsen, så kan graden av suksess økes fra 34% til
                  58%. Videre økes de ansattes engasjement med 38%.
                </p>
                <p>
                  Organisatorisk endring er gitt i forretningsverdenen.
                  Virksomheter omorganiserer, fusjonerer, anskaffer eller
                  erverver, reduserer, utvider og introduserer nye tiltak, som
                  alle forstyrrer den normale arbeidsflyten. Vårt kurs{' '}
                  <strong>Endringsledelse</strong> lærer lederne dine hvordan de
                  effektivt skal lede endringen i organisasjonen ved å forstå de
                  ulike stadiene av bekymring og tilpasse lederstilen for å
                  opprettholde produktivitet og moral.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-9 col-lg-10 thumbs-down-left">
                      <p>
                        <span className="blue">
                          70% av alle tiltak feiler.*
                        </span>{' '}
                        Feilet eller stoppet endringsiniativer{' '}
                        <span className="blue">
                          kaster bort penger, redusererer produktivitet og
                          moral, og øker gjennomtrekk av ansatte.
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-3 col-lg-2 thumbs-down-right hidden-xs">
                      <Image
                        src="/images/pc-icon-organization-change-failure.png"
                        width={77}
                        height={74}
                        alt="Organization development and change usually fails"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="margins-20">
                  Å ha ledere som er effektive til å lede medarbeidere gjennom
                  endring i organisasjonen er kritisk for den videre suksessen
                  for virksomheten.
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
                LEDE EN KULTUR I <span className="green-bg">ENDRING</span>{' '}
                Krever nye ferdigheter
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Vellykkede virksomheter er smidige virksomheter som omfavner
                endring som en del av deres kultur for å holde seg foran
                konkurrentene. Når lederne dine er trent i å tilrettelegge for
                endring, forventer motstand fra ansatte og tar proaktivt hensyn
                til dette og til deres bekymringer. De involverer dem i
                prosessen og sørger derved for å sikre positiv gjennomføring og
                fremgang.
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
                  src="/images/pc-managing-change-in-organizations-buy-in.png"
                  width={124}
                  height={124}
                  alt="Increase buy-in while managing change in organizations | Ken Blanchard"
                />
              </div>
              <h4>ØKE AKSEPT OG ROBUSTHET</h4>
              <p>
                Ledere som kan forutse, diagnostisere og adressere bekymringene
                medarbeiderne har, har sjansen til å redusere motstanden til
                endringen og øke deres aksept og forpliktelse.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              onAnimationEnd={onSecondIconEnd}
              ref={secondIcon}
              id="icon2"
            >
              <div className="icon">
                <Image
                  src="/images/pc-fast-organizational-change-results.png"
                  width={124}
                  height={124}
                  alt="Leading organizational change to get faster results | Ken Blanchard"
                />
              </div>
              <h4>FÅ RESULTATER RASKERE</h4>
              <p>
                Når organisatoriske endringsinitiativer blir presentert
                effektivt og ledet godt, bygger det drivkraften for å oppnå
                viktige organisatoriske mål.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              id="icon3"
              ref={thirdIcon}
            >
              <div className="icon">
                <Image
                  src="/images/pc-organizational-development-capacity.png"
                  width={124}
                  height={124}
                  alt="Build organization development and change capacity in your organization"
                />
              </div>
              <h4>
                BYGG EVNEN TIL
                <br />
                ENDRINGSLEDELSE
              </h4>
              <p>
                Vellykkede virksomhter som bygger evnen for endring inn i
                arbeidskulturen, skaper robusthet med evnen til å implementere
                endringer fortløpende.
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
                LEDE ENDRINGSINITIATIVER{' '}
                <span className="green-bg">SOM ER VELLYKKEDE</span>
              </h2>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-md-6 left">
              <p className="margin-50">
                Vi vet at endring i organisasjoner kan være svart nedbrytende,
                og vi vet hvordan vi kan hjelpe deg med å bevare ansattes moral
                og produktivitet under prosessen for å oppnå de ønskede
                resultatene.
              </p>
              <p>
                Kurset <strong>Endringsledelse</strong> lærer dine ledere å
                effektivt lede høy involvering i endringsinitiativ. Ledere lærer
                å identifisere og svare på medarbeidernes spørsmål i forkant av
                prosessen , berolige bekymringene deres, og ved hjelp av det øke
                forpliktelsen og engasjementet.
              </p>
              <p>
                Kurset er basert på 30 år konsulenterfaring i endringsledelse
                samt forskning som viser at folk er mindre motstandsdyktige
                overfor endring når de føler at bekymringene deres blir hørt og
                de kan være aktivt involvert i endringsprosessen på hvert skritt
                av veien.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right tablet-50">
                <Image
                  src="/images/pc-leading-organizational-change-diagram.png"
                  className="img-responsive"
                  width={524}
                  height={401}
                  alt="Leading organizational change requires diagnosis, flexibility and partnership | Ken Blanchard"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
          <div className="row margin-30">
            <div className="col-sm-12 text-center">
              <h3>Vil dere lære mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                src="/images/global_product_download_images/global_download_images-6.jpg"
                width={521}
                height={299}
                className="img-responsive"
                alt="Global Product Download"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="#">
                    <Image
                      alt="Download Icon"
                      src="/images/icon-download-bright-green.png"
                      width={23}
                      height={26}
                    />
                    MER OM ENDRINGSLEDELSE (KOMMER)
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
              *Cracking the Code of Change, <em>Harvard Business Review</em>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductChange;
