import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../components/layout';
import { GetStartedContainer } from '../../components/products/get-started';

const Trust: NextPage = () => {
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
      <div className="container-fluid header product" id="product-trust">
        <div className="container">
          <h1
            className="green animated slideInRight"
            id="great"
            onAnimationEnd={onGreatEnd}
          >
            GODT LEDERSKAP
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            BYGGER PÅ <span className="green-bg">TILLIT</span>
          </h1>
        </div>
      </div>

      <div>
        <section className="lackoftrust">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 breadcrumbs">
                  <Link href="/">HJEM</Link>{' '}
                  <span className="divider">{'//'}</span>
                  <Link href={`${basePath}/products`}>
                    produkter og tjenester
                  </Link>
                  <span className="divider">{'//'}</span>TILLITSLEDELSE
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h2>
                    Lider din bedrift av
                    <br /> <span className="green-bg">mangel på tillit?</span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 col-lg-offset-1 col-md-12">
                  <p className="eightyfivepercent">
                    Tillit er kjernen i enhver relasjon, og det er spesielt
                    viktig på arbeidsplassen. Hvorvidt lederen og medarbeiderne
                    har et tillitsfullt forhold er faktisk er det den faktoren
                    som i størst grad påvirker om ansatte ser seg om etter ny
                    jobb. Vårt kurs i
                    <strong>
                      tilliitsledelse lærer lederene dine hvordan de bygger
                      tillit til sine ansatte for å øke lojalitet og
                      engasjementet.
                    </strong>
                  </p>
                  <strong></strong>
                </div>
                <strong></strong>
              </div>
              <strong>
                <div className="row">
                  <div className="col-lg-10 col-lg-offset-1 col-md-12">
                    <div className="box">
                      <div className="row row-eq-height">
                        <div className="col-sm-9 chain-left">
                          <p>
                            <span className="blue">82% av ansatte</span> sier de
                            ikke har nok tillit til lederen til at de tør
                            fortelle sannheten, og{' '}
                            <span className="blue">45% av ansatte </span> sier
                            at mangel på tillit til ledelsen er den
                            enkeltfaktoren som i størst grad påvirker deres
                            arbeidsprestasjon*.
                          </p>
                        </div>
                        <div className="col-sm-3 chain-right hidden-xs">
                          <Image
                            src="/img/icon-products-chain.png"
                            width={98}
                            height={108}
                            alt="Products Chain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 col-lg-offset-1 col-md-12">
                    <p className="eightyfivepercent">
                      Dessverre kjenner mange av oss kjennetegnene til en
                      arbeidsplass som mangler tillit: Ledere holder tilbake
                      informasjon, ansatte snakker bak ryggen på hverandre, folk
                      er redde for å dele bekymringer og ingen tar ansvar. Alt
                      dette resulterer i lav moral og lav produktivitet, høyere
                      turn-over og et usunt arbeidsmiljø.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 col-lg-offset-1 col-md-12">
                    <div className="box">
                      <div className="row row-eq-height">
                        <div className="col-sm-3 handshake-left vcenter hidden-xs">
                          <Image
                            src="/img/icon-products-handshake.png"
                            width={96}
                            height={66}
                            alt="Handshake"
                          />
                        </div>
                        <div className="col-sm-9 handshake-right vcenter">
                          <p>
                            I motsetning opplever organisasjoner med høy tillit{' '}
                            <span className="blue">
                              32x større risikovilje, 11x mer innovasjon og 6x
                              høyere prestasjon.
                            </span>
                            <sup>**</sup>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-sm-offset-4 text-center">
                    <Link href={`${basePath}/get-started`}>
                      <a className="btn btn-primary btn-lg">KOM I GANG</a>
                    </Link>
                  </div>
                </div>
              </strong>
            </div>
            <strong></strong>
          </div>
          <strong></strong>
        </section>
        <strong></strong>
      </div>

      <section className="white trust">
        <div className="container mobile-full">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>
                Gjør tillit til <span className="green-bg">fundamentet</span>
              </h2>
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
                  src="/img/icon-products-chart.png"
                  width={124}
                  height={124}
                  alt="Products Chart"
                />
              </div>
              <h4>
                ØKT
                <br />
                PRESTASJON
              </h4>
              <p>
                Ansatte som stoler på sine ledere har høyere grad av engasjement
                og legger frem mer skjønnsmessige innsats.
              </p>
            </div>
            <div
              className="col-md-3 text-center icon-block"
              ref={secondIcon}
              onAnimationEnd={onSecondIconEnd}
              id="icon2"
            >
              <div className="icon">
                <Image
                  src="/img/icon-products-group.png"
                  width={124}
                  height={124}
                  alt="Products Group"
                />
              </div>
              <h4>
                TA VARE PÅ
                <br />
                TALENTENE
              </h4>
              <p>
                Det er mer sannsynlig at ansatte vil forbli i selskapet og se på
                det som et godt sted å jobbe.
              </p>
            </div>
            <div
              className="col-md-3 text-center icon-block"
              ref={thirdIcon}
              onAnimationEnd={onThirdIconEnd}
              id="icon3"
            >
              <div className="icon">
                <Image
                  src="/img/icon-products-brain.png"
                  width={124}
                  height={124}
                  alt="Products Brain"
                />
              </div>
              <h4>
                Dyrk kreatvitet
                <br />
                og innovasjon
              </h4>
              <p>
                Ansatte føler seg trygge til å kommunisere mer åpenlyst og er
                villige til å dele sine beste ideer og tar initiativ.
              </p>
            </div>
            <div
              className="col-md-3 text-center icon-block"
              ref={fourthIcon}
              id="icon4"
            >
              <div className="icon">
                <Image
                  src="/img/icon-products-men-ties.png"
                  width={124}
                  height={124}
                  alt="Products Men Ties"
                />
              </div>
              <h4>
                Fremme
                <br />
                SAMARBEID
              </h4>
              <p>
                Et tillitsfullt arbeidsmiljø fører til at enkeltkollegaer og
                grupper hjelper hverandre og jobber sammen for å få ting gjort.
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
                hvordan utvikle
                <br />
                tillitsfulle
                <br />
                <span className="green-bg">relasjoner</span>
              </h1>
              <p>
                Vi vet hvor viktig tillit er for enhver god relasjon. Vårt kurs
                i <strong>tillitsledelse</strong> kan hjelpe dine ledere med å
                bygge opp tillitsfulle relasjoner til sine ansatte på
                arbeidsplassen og hvordan å reparere den tilliten hvis dersom
                den er blitt brutt.
              </p>
              <p>
                Basert på mer enn tre tiår med forskning har våre eksperter på
                tillit utviklet en enkel men likevel kraftig tillitsmodell som
                gir et felles språk og ramme for alle ansatte, som fokuserer på
                de spesifikke atferdene som bygger tillit.
              </p>
              <p>
                Gjennom kurset <strong>tillitsledelse</strong> blir
                enkeltpersoner i stand til å forstå at deres oppførsel enten
                øker eller senker tillit, og de kan identifisere de områdene
                hvor det trenges forbedring.
              </p>
              <p />
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right">
                <Image
                  src="/img/products-trust-chain.png"
                  className="img-responsive"
                  width={482}
                  height={550}
                  alt="Products Trust Chain"
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
                src="/img/global_product_download_images/global_download_images-7.jpg"
                className="img-responsive"
                width={521}
                height={299}
                alt="Global Download Images"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/Tillitsledelse.pdf">
                    <FutureImage
                      width={36}
                      height={24}
                      alt="Download Icon"
                      src="/img/icon-download-bright-green.png"
                    />{' '}
                    Mer om Tillitsledelse
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
        <div style={{}}>
          <div className="footnotes">
            <div className="footnote">*Edelman Trust Barometer, 2013</div>
            <div className="footnote">** The How Report, 2016</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trust;
