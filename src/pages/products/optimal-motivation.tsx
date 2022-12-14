import { NextPage } from 'next';
import getConfig from 'next/config';
import FutureImage from 'next/future/image';
import Image from 'next/image';
import Link from 'next/link';
import { createRef } from 'react';
import { Layout } from '../../components/layout';
import { GetStartedContainer } from '../../components/products/get-started';

const OptimalMotivation: NextPage = () => {
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
      <div className="container-fluid header product" id="product-motivation">
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            OPTIMAL MOTIVASJON
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            STYRKER <span className="green-bg">ENGASJEMENT</span>
          </h1>
        </div>
      </div>

      <section className="change optimal-motivation">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <Link href={basePath}>HJEM</Link>{' '}
                <span className="divider">{'//'}</span>
                <Link href={`${basePath}/products`}>
                  produkter og tjenester
                </Link>
                <span className="divider">{'//'}</span>OPTIMAL MOTIVASJON
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  HVORFOR OPTIMAL MOTIVASJON{' '}
                  <span className="green-bg">BETYR NOE</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12 text-center">
                <p className="eightyfivepercent">
                  Uengasjerte medarbeidere koster organisasjoner milliarder av
                  kroner hvert ??r, men likevel har de fleste ledere ingen ide om
                  hvordan de skal identifisere grunnen til problemet og hvordan
                  de skal klare ?? snu det. N??kkelen til engasjement er
                  kvaliteten p?? den ansatest motivasjon p?? arbeidsplasssen.{' '}
                  <strong>Optimal motivasjon</strong> l??rer dine ledere ??
                  aktivere et h??yere niv?? av motivasjon, og det er dokumentert
                  at dette ??ker engasjementet og virksomhetens samlede resultat.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <div className="box">
                  <div className="row row-eq-height">
                    <div className="col-sm-9 col-lg-10 thumbs-down-left">
                      <p>
                        Optimalt motiverte medarbeidere i organisasjoner er
                        <span className="blue"> 3 ganger mer forn??yd</span> med
                        jobben sin,{' '}
                        <span className="blue">3 ganger mer kreative</span> og{' '}
                        <span className="blue">10 ganger mer engasjerte.*</span>
                      </p>
                    </div>
                    <div className="col-sm-3 col-lg-2 thumbs-down-right hidden-xs">
                      <Image
                        width={81}
                        height={76}
                        src="/img/om-motivating-employee-creativity-engagement-in-the-workplace.png"
                        alt="Motivating employees in the workplace improves creativity, engagement and satisfaction"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
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
            <div className="col-lg-10 col-lg-offset-1 col-sm-12 text-center">
              <h2>
                MOTIVASJON ER EN{' '}
                <span className="green-bg">FERDIGHET SOM KAN L??RES,</span> IKKE
                ET TALENT
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-12">
              <p className="eightyfivepercent">
                Motivasjon eller mangelen p?? motivasjon er kjernen i forhold til
                alt medarbeidere gj??r og ikke gj??r. Motivasjon kommer i
                forskjellige former, og det er kvaliteten p?? motivasjonen som i
                stor grad p??virker resultatet. N??r ledere forst??r motivasjonens
                natur og hvordan de skal bidra til ?? tilrettelegge for et skifte
                til et h??yere, mer optimalt motivasjonsspekter, skaper de et
                arbeidsmilj?? der folk er selvmotiverte for ?? oppn?? sine m??l,
                opprettholde h??y ytelse og blomstre personlig.
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
                  src="/img/om-motivational-training-for-employees-increases-engagement.png"
                  alt="Motivational training for employees??increases engagement | Ken Blanchard"
                />
              </div>
              <h4>??K engasjementet hos medarbeiderne</h4>
              <p>
                Daglig optimal motivasjon er drivstoffet som fremmer engasjement
                og lidenskapen for arbeidet blant medarbeiderne.
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
                  width={124}
                  height={124}
                  src="/img/om-optimal-motivation-in-organizations.png"
                  alt="Optimal motivation in organizations improves well-being | Ken Blanchard"
                />
              </div>
              <h4>FORBEDRE TRIVSEL</h4>
              <p>
                Ved ?? tilrettelegge for samtaler om optimal motivasjon,
                forbereder ledere sine medarbeidere med deres energi og ??ker den
                generelle trivsel.
              </p>
            </div>
            <div
              className="col-md-4 text-center icon-block"
              ref={thirdIcon}
              id="icon3"
            >
              <div className="icon">
                <Image
                  width={124}
                  height={124}
                  src="/img/om-motivational-training-for-employees-improves-productivity.png"
                  alt="Increase productivity with motivational training for employees | Ken Blanchard"
                />
              </div>
              <h4> ??k produktiviteten og evnen til ?? holde p?? medarbeiderne</h4>
              <p>
                Optimalt motiverte medarbeidere er verdifulle og de oppn??r
                h??y-kvalitets resultater. De er mer produktive, og
                sannsynligheten for at de blir v??rende i virksomheten blir
                st??rre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="howto optimal">
        <div className="container">
          <div className="row">
            <div className="col-md-6 left">
              <h1 className="smallest">
                SKAP EN ARBEIDSPLASS
                <br />
                <span className="green-bg">HVOR MEDARBEIDERNE BLOMSTRER</span>
              </h1>
              <p>
                Vi vet det er vanskelig ?? endre p?? en medarbeiders engasjement.
                L??sningen er ?? kunne gi dem den riktige motivasjonen.
              </p>
              <p>
                Kurset<strong>Optimal motivasjon</strong> motivasjon l??rer dine
                ledere hvordan de motiverer mennesker. De l??rer ogs?? ?? forst??
                grunnen til hvordan hver enkelt medarbeider er motivert, og
                hjelpe dem med ?? skifte til optimal motivasjon s?? de kan n?? sitt
                fulle potensiale.
              </p>
              <p>
                En tilleggsverdi av <strong>Optimal motivasjon</strong> er at
                ved ?? l??re ferdighetene for ?? hjelpe medarbeiderne til ?? skifte,
                l??rer de ?? skifte motivasjon selv. For en leder uten optimal
                motivasjon vil det v??re usannsynlig ?? kunne aktivere optimal
                motivasjon hos andre.
              </p>
              <p>
                Basert p?? den siste vitenskapelige forskningen p?? hva som driver
                menneskets motivasjon, har v??re eksperter utviklet en
                virkningsfullt kurs som l??rer ledere de tre ferdighetene de
                trenger for ?? aktivere optimal motivasjon hos deres
                medarbeidere.
              </p>
            </div>
            <div className="col-md-6 right">
              <div className="trust-graphic pull-right threeskills">
                <Image
                  width={2126}
                  height={2454}
                  src="/img/products-optimalmotivation-3skills.png"
                  className="img-responsive"
                  alt="3 skills for motivating employees in the workplace | Ken Blanchard"
                />
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-sm-12 text-center">
              <h3>Vil du l??re mer?</h3>
            </div>
          </div>
          <div className="row margin-30">
            <div className="col-md-6 left">
              <Image
                width={521}
                height={299}
                src="/img/global_product_download_images/global_download_images-3.jpg"
                className="img-responsive"
                alt="Global Download Images"
              />
            </div>
            <div className="col-md-6 right learn-more">
              <ul>
                <li>
                  <a href="/upload/2019/Optimal_motivasjon.pdf">
                    <FutureImage
                      width={36}
                      height={24}
                      alt="Download Icon"
                      src="/img/icon-download-bright-green.png"
                    />{' '}
                    Mer om Optimal motivasjon{' '}
                  </a>
                </li>
                <li>
                  <a href="/upload/2019/Aktivere_optimal_motivasjon.mp4">
                    <FutureImage
                      width={36}
                      height={24}
                      alt="Download Icon"
                      src="/img/icon-download-bright-green.png"
                    />
                    Aktivere optimal motivasjon{' '}
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
              *<em>The Economics of Wellbeing </em>by Tom Rath and Jim Harter,
              2010
              <br />
              Positive Intelligence, <em>Harvard Business Review</em>, 2013
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OptimalMotivation;
