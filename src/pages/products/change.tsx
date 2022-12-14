import { NextPage } from 'next';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../components/layout';
import { GetStartedContainer } from '../../components/products/get-started';

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
                <Link href={basePath}>Hjem</Link>{' '}
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>produkt og tjenester</Link>
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
                  endringsprosesser lykkes ikke, og dette viser seg ?? ha sin
                  ??rsak i at 80% av selskapene kj??rer prosesser som er initiert
                  p?? toppen og som ikke tar hensyn til bekymringene fra de
                  ansatte som blir ber??rt. I kurset Endringsledelse er ryggraden
                  prosesser som inneb??rer h??y grad av involvering og samarbeid
                  for alle ber??rte.
                </p>
                <p>
                  Denne inkluderende tiln??rmingen bygger p?? forskning og mer enn
                  30 ??rs erfaring fra omr??det.
                </p>
                <p>
                  Nyere forskning viser at ved ?? benytte h??y grad av involvering
                  og dialog mellom ansatte og de som er ansvarlige for
                  endringsledelsen, s?? kan graden av suksess ??kes fra 34% til
                  58%. Videre ??kes de ansattes engasjement med 38%.
                </p>
                <p>
                  Organisatorisk endring er gitt i forretningsverdenen.
                  Virksomheter omorganiserer, fusjonerer, anskaffer eller
                  erverver, reduserer, utvider og introduserer nye tiltak, som
                  alle forstyrrer den normale arbeidsflyten. V??rt kurs{' '}
                  <strong>Endringsledelse</strong> l??rer lederne dine hvordan de
                  effektivt skal lede endringen i organisasjonen ved ?? forst?? de
                  ulike stadiene av bekymring og tilpasse lederstilen for ??
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
                          moral, og ??ker gjennomtrekk av ansatte.
                        </span>
                      </p>
                    </div>
                    <div className="col-sm-3 col-lg-2 thumbs-down-right hidden-xs">
                      <Image
                        src="/img/pc-icon-organization-change-failure.png"
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
                  ?? ha ledere som er effektive til ?? lede medarbeidere gjennom
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
                endring som en del av deres kultur for ?? holde seg foran
                konkurrentene. N??r lederne dine er trent i ?? tilrettelegge for
                endring, forventer motstand fra ansatte og tar proaktivt hensyn
                til dette og til deres bekymringer. De involverer dem i
                prosessen og s??rger derved for ?? sikre positiv gjennomf??ring og
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
                  src="/img/pc-managing-change-in-organizations-buy-in.png"
                  width={124}
                  height={124}
                  alt="Increase buy-in while managing change in organizations | Ken Blanchard"
                />
              </div>
              <h4>??KE AKSEPT OG ROBUSTHET</h4>
              <p>
                Ledere som kan forutse, diagnostisere og adressere bekymringene
                medarbeiderne har, har sjansen til ?? redusere motstanden til
                endringen og ??ke deres aksept og forpliktelse.
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
                  src="/img/pc-fast-organizational-change-results.png"
                  width={124}
                  height={124}
                  alt="Leading organizational change to get faster results | Ken Blanchard"
                />
              </div>
              <h4>F?? RESULTATER RASKERE</h4>
              <p>
                N??r organisatoriske endringsinitiativer blir presentert
                effektivt og ledet godt, bygger det drivkraften for ?? oppn??
                viktige organisatoriske m??l.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              id="icon3"
              ref={thirdIcon}
            >
              <div className="icon">
                <Image
                  src="/img/pc-organizational-development-capacity.png"
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
                arbeidskulturen, skaper robusthet med evnen til ?? implementere
                endringer fortl??pende.
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
                Vi vet at endring i organisasjoner kan v??re svart nedbrytende,
                og vi vet hvordan vi kan hjelpe deg med ?? bevare ansattes moral
                og produktivitet under prosessen for ?? oppn?? de ??nskede
                resultatene.
              </p>
              <p>
                Kurset <strong>Endringsledelse</strong> l??rer dine ledere ??
                effektivt lede h??y involvering i endringsinitiativ. Ledere l??rer
                ?? identifisere og svare p?? medarbeidernes sp??rsm??l i forkant av
                prosessen , berolige bekymringene deres, og ved hjelp av det ??ke
                forpliktelsen og engasjementet.
              </p>
              <p>
                Kurset er basert p?? 30 ??r konsulenterfaring i endringsledelse
                samt forskning som viser at folk er mindre motstandsdyktige
                overfor endring n??r de f??ler at bekymringene deres blir h??rt og
                de kan v??re aktivt involvert i endringsprosessen p?? hvert skritt
                av veien.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right tablet-50">
                <Image
                  src="/img/pc-leading-organizational-change-diagram.png"
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
              <h3>Vil dere l??re mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                src="/img/global_product_download_images/global_download_images-6.jpg"
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
                      src="/img/icon-download-bright-green.png"
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
