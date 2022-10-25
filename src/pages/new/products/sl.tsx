import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../../components/layout';
import { GetStartedContainer } from '../../../components/products/get-started';

const ProductSl: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  const trust = createRef<HTMLHeadingElement>();
  const chart = createRef<HTMLDivElement>();
  const medal = createRef<HTMLDivElement>();
  const brain = createRef<HTMLDivElement>();

  const onGreatEnd = () => {
    trust.current?.classList.add('animated', 'slideInLeft');
  };

  const onMenEnd = () => {
    chart.current?.classList.add('animated', 'slideInRight');
  };

  const onChartEnd = () => {
    medal.current?.classList.add('animated', 'slideInRight');
  };

  const onMedalEnd = () => {
    brain.current?.classList.add('animated', 'slideInRight');
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="product-sl">
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            SLII<sup>® </sup>.<br />
            POWERING&nbsp; INSPIRED
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            <span className="green-bg">LEADERS</span>
          </h1>
        </div>
      </div>

      <section className="sl">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">HJEM</a> <span className="divider">{'//'}</span>
                <a href="products.html">produkter og tjenester</a>
                <span className="divider">{'//'}</span>SLII
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-xs-12">
                <h2>
                  SKAP SUKSESS MED EN{' '}
                  <span className="green-bg">SITUASJONSBESTEMT</span> TILNÆRMING
                  TIL LEDELSE
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent">
                  Dagens endringshastighet i næringslivet er så stor at
                  visjonært lederskap er blitt en forutsetning for
                  organisasjonenes evne til å overleve. Ledere har behov for et
                  lederopplæringsprogram som hjelper dem til å bli både
                  tilpasningsdyktige og fokusert på mennesket. De må beherske
                  situasjonsbestemt ledelse for å kunne gi sine medarbeidere
                  muligheten for å kunne lykkes. SLII er verdens mest utbredte
                  lederutviklingsprogram, som gir deltakerne kompetanse og
                  ferdigheter i det å bygge gode og velfungerende relasjoner til
                  sine ansatte og som derved får eksponensiell effekt.
                  Programmet bidrar til å gjøre de ansatte mer produktive og
                  engasjert. SLII er mer enn et kraftig lederutviklingsprogram,
                  da kostnaden ved kurset bidrar til bedrede økonomiske
                  resultater til hele organisasjonen.
                </p>
              </div>
            </div>
            <div className="row row-eq-height">
              <div className="col-md-3 col-sm-6 box">
                <div id="box1">
                  <div className="content-show">
                    <FutureImage
                      className="img-responsive"
                      src="/images/sl2-sl2-training-research.png"
                      width={64}
                      height={65}
                      alt="Leadership training program based on 30 years of research | Ken Blanchard"
                    />
                    <h4>Forskningsbasert</h4>
                  </div>
                  <div className="content-rollover">
                    <strong>
                      SLII<sup>® </sup>
                    </strong>
                    bygger på mer enn 30 års forskning på ledelse og trivsel på
                    jobb, og har blitt oppdatert med de siste resultatene innen
                    nevrovitenskap. Programmet blir kontinuerlig tilpasset de
                    stadig skiftende kravene som stilles.
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 box">
                <div id="box2">
                  <div className="content-show">
                    <FutureImage
                      className="img-responsive"
                      src="/images/sl2-sl2-model-increased-productivity.png"
                      width={46}
                      height={54}
                      alt="Leadership model that improves productivity, reduces turnover and increases sales."
                    />
                    <h4>Dokumenterbare resultater</h4>
                  </div>
                  <div className="content-rollover">
                    Mer enn 10.000 organisasjoner over hele verden har benyttet{' '}
                    <strong>
                      SLII<sup>® </sup>
                    </strong>{' '}
                    for å forbedre produktivitet, redusere turn-over og
                    lederverktøyet har også bidratt til bedre økonomiske
                    resultater.
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 box">
                <div id="box3">
                  <div className="content-show">
                    <FutureImage
                      className="img-responsive"
                      src="/images/sl2-international-sl2-training.png"
                      width={63}
                      height={64}
                      alt="Universal and International SLII training | Ken Blanchard"
                    />
                    <h4>UNIVERSELL EFFEKT</h4>
                  </div>
                  <div className="content-rollover">
                    <strong>
                      SLII<sup>® </sup>
                    </strong>{' '}
                    fungerer for ledere over hele verden uavhengig av bransje,
                    språk eller type stilling. SLII<sup>® </sup> lærer ledere
                    hvordan de skal gi sine ansatte de riktige styringssignalene
                    og den støtten de trenger til rett tid.
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 box">
                <div id="box4">
                  <div className="content-show">
                    <FutureImage
                      className="img-responsive"
                      src="/images/sl2-sl2-theory-brain-science.png"
                      width={56}
                      height={60}
                      alt="SL2 theory and training backed by brain science"
                    />
                    <h4>Skaper inspirerende ledere</h4>
                  </div>
                  <div className="content-rollover">
                    <strong>
                      SLII<sup>® </sup>
                    </strong>{' '}
                    dekker hjernens behov for kompetanse, selvstendighet og
                    sosial tilhørighet. Dette skaper trygge arbeidsplasser hvor
                    ansatte får frihet til å løse problemer, være innovative og
                    samarbeide med andre.
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="row margins-20">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent bold18">
                  LA DINE LEDERE FÅ KOMPETANSEN DE TRENGER FOR Å KUNNE INSPIRERE
                  OG ØKE PRESTASJONENE
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
              <h2>Ved å bruke kun én lederstil&nbsp;</h2>
              <h2>
                skaper du ikke <span className="green-bg">gode relasjoner</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="text-center">
                Forskning viser at ansatte trenger forskjellige styringssignaler
                og ulike former for støtte, og dette avhenger av deres
                kompetansenivå og engasjement. Men de fleste ledere benytter seg
                av kun én lederstil – og dette fører blant annet til økte
                kostnader i form av høy turn-over, lavt engasjement, redusert
                produktivitet og tapte muligheter
              </p>
            </div>
          </div>
          <div className="row margin-50">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="row stats row-eq-height arrow-boxes">
                <div className="col-lg-4 col-md-5 col-sm-4 box col-xs-12">
                  <div className="blue">54%</div>
                  <p>
                    av ledere bruker kun en lederstil, uavhengig av situasjon.*
                  </p>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-3 arrow center-block hidden-xs">
                  <div className="spacer">
                    <FutureImage
                      className="img-responsive"
                      src="/images/sl2-different-sl2-styles.png"
                      width={169}
                      height={91}
                      alt="Successful managers use different situational leadership styles depending on the occasion"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-4 box col-xs-12">
                  <div className="blue">50%</div>
                  <p>
                    av tiden bruker ledere feil lederstil på sine medarbeidere
                    og møter derved ikke sine medarbeideres behov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="setupsuccess bestleaders">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                DYKTIGE LEDERENE SKAPER{' '}
                <span className="green-bg">GODE RELASJONER</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
              <p className="eightyfivepercent">
                Dyktige SLII<sup>®</sup> ledere gir sine medarbeidere det de
                trenger når det trenger det. Dette innebærer å ha den
                motiverende gode samtalen, og hvor du viser at du bryr deg om
                deres utvikling og vekst. Du får være deres forbilde.
                Situasjonsbestemt ledelse er et tydelig farvel til tidligere
                lederstiler. Og det er en tilnærming som gir betydelig bedre
                resultater enn andre lederstiler.
              </p>{' '}
            </div>
          </div>
        </div>
      </section>
      <section className="bluesl">
        <div className="container-full">
          <div className="row no-gutters">
            <div className="col-lg-6 left visible-lg" />
            <div className="col-lg-6 right col-md-9 col-md-offset-3">
              <div className="row">
                <div className="col-lg-12" id="animateIcons">
                  <div
                    className="row icon animated slideInRight"
                    id="men"
                    onAnimationEnd={onMenEnd}
                  >
                    <div className="col-xs-3 center-block sl-icon">
                      <FutureImage
                        src="/images/sl2-sl2-style-accelerates-development.png"
                        alt="Managers using a SLII leadership style help accelerate the development of their teams"
                        className="img-responsive pull-right"
                        width={71}
                        height={41}
                      />
                    </div>
                    <div className="col-xs-9 sl-text">
                      <h4>FÅ FART PÅ utviklingEN</h4>
                      <p>
                        SLII hjelper ledere til å få fart på utviklingsforløpet
                        til sine medarbeidere fra å være entusiastiske
                        nybegynnere til å bli selvsikre ledere.
                      </p>
                    </div>
                  </div>
                  <div
                    className="row icon"
                    id="chart"
                    ref={chart}
                    onAnimationEnd={onChartEnd}
                  >
                    <div className="col-xs-3 center-block sl-icon">
                      <FutureImage
                        src="/images/sl2-sl2-model-common-language.png"
                        alt="The SLII leadership model instills a common language within an organization"
                        className="img-responsive pull-right"
                        width={71}
                        height={53}
                      />
                    </div>
                    <div className="col-xs-9 sl-text">
                      <h4>BRUK et felles språk</h4>
                      <p>
                        Når ledere og kollegene benytter et felles språk unngår
                        man misforståelser, detaljstyring og reduserer
                        frustrasjoner. Tidligere ladede situasjoner blir
                        produktive endringer.&nbsp;
                      </p>
                    </div>
                  </div>
                  <div
                    className="row icon"
                    id="medal"
                    ref={medal}
                    onAnimationEnd={onMedalEnd}
                  >
                    <div className="col-xs-3 center-block sl-icon">
                      <FutureImage
                        src="/images/sl2-sl2-style-raises-morale.png"
                        alt="Leaders who use a sLII leadership style raise morale, make others feel valued and increase retention"
                        className="img-responsive pull-right"
                        width={71}
                        height={49}
                      />
                    </div>
                    <div className="col-xs-9 sl-text">
                      <h4>REDUSER TURN-OVER</h4>
                      <p>
                        Ledere som dekke kollegenes behov forbedrer deres moral,
                        forpliktelse og engasjement. Hvem vil ønske å forlate en
                        slik jobb?
                      </p>
                    </div>
                  </div>
                  <div className="row icon" id="brain" ref={brain}>
                    <div className="col-xs-3 center-block sl-icon">
                      <FutureImage
                        src="/images/sl2-sl2-theory-problem-solving.png"
                        alt="Applying SLII leadership theory creates proactive problem solvers"
                        className="img-responsive pull-right"
                        width={71}
                        height={62}
                      />
                    </div>
                    <div className="col-xs-9 sl-text">
                      <h4>SLIPP LØS KREATIVITETEN</h4>
                      <p>
                        Forskning viser at medarveidere som føler de har sin
                        leders støtte er mye mer engasjert og bidrar til økt
                        innovasjon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howto optimal white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left">
              <h1>
                SLII<sup>® </sup>
                <span className="green-bg nobreak">MODELLEN</span>
              </h1>
              <p>
                <strong>
                  DEN ER TESTET OVER TID OG RESULTATENE ER DOKUMENTERT
                </strong>
              </p>
            </div>
          </div>
          <p>
            <strong>
              SLII<sup>® </sup>
            </strong>{' '}
            modellen gir et lett forståelig og praktisk rammeverk som hjelper
            ledere til å diagnostisere det faktiske utviklingsstadiet til hver
            enkelt medarbeider og derved benytte den rette lederstilen for å
            møte disse behovene slik at medarbeiderne kan løse sine oppgaver.
            Ledere finner ett av de fire utviklingsstadiene hos medarbeideren,
            fra entusiastisk nybegynner (U1) til selvstendige selvgående(U4).
            Lederne bruker så den tilhørende instruksjonen og støttende
            atferden, fra instruerende (S1) til delegerende (S4) for kunne
            matche medarbeidernes utviklingsbehov. Derved får de det de trenger!
          </p>
          <p />
        </div>
        <div className="col-md-6 right">
          <div className="trust-graphic pull-right">
            <FutureImage
              src="/images/sl2-sl2-model-diagram.png"
              alt="The SLII model | Ken Blanchard"
              className="img-responsive"
              width={485}
              height={538}
            />
          </div>
          <div className="clearfix" />
        </div>
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
            <p className="eightyfivepercent">
              <strong>
                SLII<sup>® </sup> opplevelsen,
              </strong>{' '}
              som har vunnet en rekke priser, benytter den nyeste forskningen
              fra Blanchard, og kombinerer den med moderne læringsdesignteori
              for å gi kursdeltakerne en svært engasjerende opplevelse som
              hjelper ledere til å lære, øve på og mestre de ulike SLII® stilene
              og ferdighetene enkelt og fullstendig. Og derved hjelper de sine
              medarbeidere til å nå stadig nye høyder.
            </p>
          </div>
        </div>
      </section>

      <section className="sl2experience">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                ULIKE MÅTER Å LEVERE{' '}
                <span className="green-bg">
                  SLII<sup>®</sup> OPPLEVELSEN
                </span>{' '}
                PÅ SOM ER TILPASSET DITT BEHOV
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="The SLII leadership training experience includes video demonstrations"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      KLASSEROMSUNDERVISNING: Vi har flere hundre instruktører
                      over hele verden som kan levere kurset til dine ledere der
                      du måtte ønske det. Vi kan også lære opp bedriftsinterne
                      instruktører.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="The SLII leadership training experience includes real-world practice activities"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Virtuelle kurs: Dine ledere kan delta på kurset «live»
                      hjemmefra eller på jobb ved hjelp av vår
                      opplæringsplattform.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="Get a diagnosis app based on SLII leadership theory to plan conversations"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      On-line kurs: On-line kursene er et aløternativ til de som
                      ønsker å ta kurset når- og hvor det passer for dem.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="Learn to master SLII leadership style skills | Ken Blanchard"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Support: Etter fullført kurs vil deltakerne få tilgang til
                      verktøy som Kenbot for SLII, SLII app’en og SLII Click som
                      gjør at læringen ikke stopper når forelesningen er over.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="SLII leadership eTools and Conversation Starters provide guidelines for conversations"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Micro-Aktiviteter: moduler som varierer fra 1 til 20
                      minutter.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="Managers learn the SLII leadership model with feedback to help progress faster"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Lederstilverktøy: Hjelper deltakerne til å finne sine
                      styrker og muligheter for vekst.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="SLII leadership training with Multiple SLII tools that can be shared with team members"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Interaktive øvelser: Morsomme og engasjerende aktiviteter
                      som inkluderer videofilmer, spill, historier, relevante
                      problemstillinger og on-line diskusjoner.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="Tips and suggestions based on the SLII leadership model"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      De-briefing med leder: En mulighet for kursdeltakerne til
                      å kunne samarbeide med mennesker som er i samme situasjon,
                      diskutere det man har lært og praktisere sine nye
                      ferdigheter.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row checkbox-chart">
                    <div className="col-sm-1 col-xs-1">
                      <FutureImage
                        src="/images/sl2-sl2-training-features.png"
                        alt="Tips and suggestions based on the SLII leadership model"
                        width={33}
                        height={28}
                      />
                    </div>
                    <div className="col-sm-11 col-xs-10 checkbox-text">
                      Søkbare verktøy: En rekke aktiviteter og verktøy som er
                      søkbare og som er gode å ha både til trenings- og
                      praktiseringsformål.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row margin-50">
            <div className="col-sm-12 text-center">
              <h3>VIL DERE VITE MER?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <FutureImage
                src="/images/global-mini/global-mini-learn-more.jpg"
                className="img-responsive"
                alt="global-mini-learn-more"
                width={521}
                height={299}
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/SLII_Opplevelsen.pdf">
                    <FutureImage
                      src="/images/icon-download-bright-green.png"
                      alt="icon-download-bright-green"
                      width={36}
                      height={26}
                    />
                    Mer om SLII Opplevelsen
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
              *Getting to Know the LBAII, The Ken Blanchard Companies.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductSl;
