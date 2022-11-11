import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../components/layout';
import { GetStartedContainer } from '../../components/products/get-started';

const ProductService: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const trust = createRef<HTMLHeadingElement>();
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

  const onGreatEnd = () => {
    trust.current?.classList.add('animated', 'slideInLeft');
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="product-service">
        <div className="container">
          <h1
            className="green animated slideInRight"
            id="great"
            onAnimationEnd={onGreatEnd}
          >
            SØRG FOR AT
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            <span className="green-bg">KUNDENE DINE</span> KOMMER TILBAKE
          </h1>
        </div>
      </div>

      <section className="lackoftrust legendary">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href={basePath}>HJEM</Link>{' '}
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>
                  produkter og tjenester
                </Link>
                <span className="divider">{'//'}</span>LEGENDARISK KUNDESERVICE
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  Når Skrøt noen sist av den
                  <span className="green-bg">GODE SERVICEN</span> din?
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent">
                  Hver eneste dag, ved hvert møte med kunder har du mulighet til
                  å enten styrke lojalitet eller miste en kunde. Mens de fleste
                  virksomheter anerkjenner den kritiske verdien av kundeservice
                  for suksess, er det fremdeles relativt uvanlig å motta
                  virkelig bra kundeservice. Vårt kurs
                  <strong>Legendarisk kundeservice</strong> lærer ledere og
                  kundeservicemedarbeidere hvordan de konsekvent skal levere
                  eksepsjonell kundeservice som vil sikrer at kunder kommer
                  tilbake, både internt og eksternt. Dette gir et
                  konkurransefortrinn for organisasjonen.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box seventyfive-percent">
                  <div className="row row-eq-height">
                    <div className="col-sm-4 handshake-left vcenter hidden-xs">
                      <Image
                        src="/img/ls-legendary-service-customer-service-training program.png"
                        alt="Legendary Service customer service training programs | Ken Blanchard"
                        className="padding-12"
                        width={149}
                        height={25}
                      />
                    </div>
                    <div className="col-sm-8 handshake-right vcenter">
                      <p>
                        <span className="blue">
                          Det er 6-7 ganger mer kostbart
                        </span>{' '}
                        å tiltrekke seg en ny kunde enn det er å beholde en
                        eksisterende kunde.*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box seventyfive-percent">
                  <div className="row row-eq-height">
                    <div className="col-sm-9 chain-left service text-left">
                      <p>
                        <span className="blue">89% av kundene</span> begynner å
                        gjøre forretninger med en konkurrent fordi de opplevede{' '}
                        <span className="blue">dårlig kundeservice .**</span>
                      </p>
                    </div>
                    <div className="col-sm-3 chain-right hidden-xs">
                      <Image
                        width={65}
                        height={72}
                        src="/img/ls-critical-customer-care-skills.png"
                        alt="Customer care skills are critical to success | Ken Blanchard"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h2>HVA KOSTER DÅRLIG KUNDESERVICE FOR DIN BEDRIFT?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-sm-4 col-sm-offset-4 text-center">
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
                VERDIEN AV <span className="green-bg">BRA KUNDESERVICE</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="text-center">
                Hvis du ikke har kunder, har du heller ingen virksomhet.
                Bedrifter som leverer god kundeservice vet at deres
                medarbeidere—og den relasjonen de bygger med kundene— er
                virksomhetens viktigste fordel. Ved å bygge en bedriftskultur
                rettet mot kundeservice, bemyndiger de sine medarbeidere til å
                ta eierskap i å løse kundenes problemstillinger, enten kunden er
                insterne eller eksterne.&nbsp; Denne servicementaliteten bidrar
                til forbedringer og reduserer kostnader, noe som resulterer i
                økt kundelojalitet og derved også øket salg.{' '}
              </p>
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
                  src="/img/ls-customer-service-skills-customer-loyalty.png"
                  alt="Excellent customer service skills increase customer loyalty | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Dyrk lojalitet</h4>
              <p>
                Fornøyde kunder er en sentral kilde for gjentagende salg, og de
                anbefaler virksomheten din til sine kolleger, venner og familie.
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
                  src="/img/ls-improved-customer-care-skills.png"
                  alt="Reduce costs with improved customer care skills | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Reduserer salgskostnadene</h4>
              <p>
                Virksomheter som forstår behovet og motivasjonen hos kundene
                sine kan realisere betydelige besparelser når det gjelder å
                anskaffe og beholde disse kundene.
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
                  src="/img/ls-excellent-customer-service-fans.png"
                  alt="Excellent customer service creates raving fans | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Generer skrytende fans</h4>
              <p>
                Fornøyde kunder blir dine største fans og generere verdifull
                <em>ild i tørt gress</em>-reklame for din bedrift. Dette er
                spesielt virkningsfullt med tanke på hvordan vi bruker dagens
                sosiale medier.
              </p>
            </div>
            <div
              className="col-md-3 text-center icon-block"
              id="icon4"
              ref={fourthIcon}
            >
              <div className="icon">
                <Image
                  src="/img/ls-excellent-customer-service-feedback.png"
                  alt="Excellent customer service feedback for innovation | Ken Blanchard"
                  width={124}
                  height={124}
                />
              </div>
              <h4>Ønsk tilbakemeldinger og innovasjon velkommen</h4>
              <p>
                Kunder er mer villige til å gi tilbakemeldinger for å hjelpe til
                med å identifisere områder for forbedring og foreslå nye ideer
                for å dekke behovene deres best.
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
                Hvordan levere eksepsjonell
                <br />
                <span className="green-bg">KundeservicE?</span>
              </h1>
              <p>
                Vi vet at det å levere bra kundeservice er ryggraden i
                virksomheten din, men det å skape en kundeservicekultur kan være
                en utfordring. Vårt kurs{' '}
                <strong>Legendarisk kundeservice</strong> kan hjelpe til med å
                høyne kundeservicen og la den forbli høy, og derved til å bli
                ditt konkurransefortrinn.
              </p>
              <p>
                Basert på mange års forskning og erfaringer med organisasjoner
                som prioriterer kundeservice, er{' '}
                <strong>Legendarisk kundeservice</strong> et raskt, interaktivt
                program utviklet for å hjelpe ledere og ansatte til å tilpasse
                seg en kunde- og servicefokusert visjon, verdier og atferd for
                bedre å betjene kundene dine.
              </p>
              <p>
                Ledere og medarbeidere identifiserer deres tro på verdien av det
                å tjene andre og hvordan dette påvirker atferd. De lærer
                viktigheten av å ta vare på seg selv, som gjør at de kan ta
                bedre vare på andre. De lærer også ferdighetene for å vurdere og
                segmentere kundene for derved å kunne identifisere deres ulike
                behov.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right icare">
                <Image
                  width={522}
                  height={600}
                  src="/img/ls-i-care-customer-service-training-programs.png"
                  alt="LS Model Customer Service Training Programs | Ken Blanchard"
                  className="img-responsive"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
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
                src="/img/legendary-service.jpg"
                className="img-responsive"
                alt="Legendary Service"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/Legendarisk_kundeservice.pdf">
                    <FutureImage
                      width={36}
                      height={24}
                      alt="Download Icon"
                      src="/img/icon-download-bright-green.png"
                    />{' '}
                    Mer om Legendarisk kundeservice{' '}
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
              *2011 Customer Experience Impact Report, Oracle
              <br />
              **White House Office of Consumer Affairs
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductService;
