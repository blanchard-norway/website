import { NextPage } from 'next';
import Image from 'next/image';
import { createRef } from 'react';
import { ContactForm } from '../../components/contact-form';
import { Layout } from '../../components/layout';

const How: NextPage = () => {
  const trust = createRef<HTMLHeadingElement>();

  const onGreatEnd = () => {
    trust.current?.classList.toggle('animated');
    trust.current?.classList.toggle('slideInLeft');
  };

  return (
    <Layout>
      <div className="container-fluid header product" id="how-home">
        <div className="container">
          <h1
            className="green animated slideInRight"
            onAnimationEnd={onGreatEnd}
            id="great"
          >
            TRENING FOR
          </h1>
          <h1 className="green" id="trust" ref={trust}>
            Å MØTE <span className="green-bg">BEHOVENE DINE</span>
          </h1>
        </div>
      </div>

      <section className="bossvcoach how">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 breadcrumbs">
                <a href="/">HJEM</a>
                <span className="divider">{'//'}</span>HVORDAN VI ARBEIDER MED
                DEG
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2>
                  VEIEN FOR Å SKAPE
                  <br />
                  VERDENS <span className="green-bg">BESTE LEDERE</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 col-md-12">
                <p className="eightyfivepercent">
                  Vår beviste ledertreningsprosess viser hvordan vi arbeider med
                  deg for å lytte, planlegge, handle og evaluere et suksessfullt
                  læring engasjement. Du forteller oss om de største
                  lederutfordringene dine så utarbeider vi et design for
                  strategi og treningsprogram som vil gi suksess på disse
                  områdene. Vi hjelper deg på hvert steg på veien.
                </p>
              </div>
            </div>
            <div className="row visible-lg text-center chart margins-50">
              <div className="visible-lg text-center chart col-sm-12 center-block manager-path">
                <Image
                  src="/images/manager-path.png"
                  width={1100}
                  height={323}
                  alt="Manager Path"
                />
              </div>
            </div>
            <div className="row visible-md visible-sm manager-path text-center chart margin-30">
              <div className="col-md-12 manager-path center-block text-center">
                <Image
                  src="/images/manager-path-tablet.png"
                  width={638}
                  height={828}
                  alt="Manager Tablet"
                />
              </div>
            </div>
            <div className="row visible-xs center-block manager-path text-center no-gutters chart center margin-30">
              <div className="col-sm-12 center-block manager-path text-center">
                <Image
                  src="/images/manager-path-mobile.png"
                  width={374}
                  height={828}
                  alt="Manager Path Mobile"
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>

      <section className="empower delivered">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2 className="text-center">
                Din treningsløsning <span className="green-bg">LEVERT</span>
              </h2>
              <p className="eightyfivepercent margins-20">
                Våre innovative lederutviklingsprogrammer er basert på mange år
                med atferdsforskning kombinert med førstehåndserfaring for å
                skape fleksible erfaringer som vil forandre lederne og
                organisasjonen. De har allerede trent opp millioner av ledere—nå
                er det tid for å trene opp dine.
              </p>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-identifying-onsite-training-needs.png"
                alt="Identifying on-site training needs | Ken Blanchard"
                width={75}
                height={59}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>BEDRIFTSINTERNE KURS</strong>
              </div>
              <p className="text">
                Med hundrevis av instruktører over hele verden, kan vi levere
                informasjonspakkede, engasjerende og inspirererende
                treningsprogram som vil løse utfordringene du har med ledelse og
                umiddelbart gi bedre resultater.
              </p>
            </div>
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-t4t-training-needs-assessment.png"
                alt="Training for Trainers training needs assessment | Ken Blanchard"
                width={75}
                height={63}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>OPPLÆRING AV INSTRUKTØRER (T4T)</strong>
              </div>
              <p className="text">
                Vårt opplæringsprogram for instruktører lar deg lære og øve på
                Blanchards programmer slik at du kan komme tilbake til
                virksomheten din og levere programmene med suksess. Vi tilbyr
                både bedriftsinternt, som er nyttig for å trene mange
                instruktører i en organisasjon, og åpne kurs for opplæring av
                instruktører for SLII opplevelsen.
              </p>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-virtual-training-leadership-development.png"
                alt="Virtual training leadership development plan | Ken Blanchard"
                width={75}
                height={60}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>VIRTUELL TRENING</strong>
              </div>
              <p className="text">
                Våre ekspertinstuktører har mulighet for å levere live
                virituelle treningstimer som gjør at lederne og medarbeiderne
                dine får tilgang til innhold i verdensklasse rett til
                skrivebordet. Vi kan også implimentere en blandet løsning som
                kombinerer klasserom og virituell trening for å minimere
                reisebudsjettet deres.
              </p>
            </div>
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-leadership-training-needs-assessment.png"
                alt="Training needs assessment for custom designed leadership training"
                width={67}
                height={57}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>TILPASSET DESIGN</strong>
              </div>
              <p className="text">
                Vi kan tilpasse våre læringsløsninger spesielt til din bedrift
                eller industri, enten det betyr å justere programdesignen, skape
                spesifikke treningsmateriell eller endre leveringsmetoden for å
                sikre at den er så relevant og effektiv som mulig.
              </p>
            </div>
          </div>
          <div className="row margin-20">
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-leadership-development-programs-workshops.png"
                alt="Evaluating leadership development programs with public workshops"
                width={75}
                height={72}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>ÅPNE KURS</strong>
              </div>
              <p className="text">
                Våre åpne kurs gir en verdifull mulighet for individuell eller
                for medarbeidere som jobber i virtuelle team til å delta i
                Blanchard ledertreningsprogrammer. Du kan også bruke de åpne
                kursene til en forhåndsvisning av kurset før det lanseres for
                større treningsinniativ for virksomheten.
              </p>
            </div>
            <div className="col-sm-1 col-xs-3">
              <Image
                src="/images/how-we-work/hw-identifying-your-leadership-training%20needs.png"
                alt="Get inspired identifying your training needs with keynote speakers"
                width={67}
                height={67}
              />
            </div>
            <div className="col-sm-5 col-xs-9">
              <div>
                <strong>FOREDRAG</strong>
              </div>
              <p className="text">
                Våre instruktører kan levere energiske og opplysende foredrag og
                presentasjoner. Vi setter pris på mulighetene for å diskutere
                hvordan vi kan hjelpe med å drive frem din organisasjon.
              </p>
            </div>
          </div>
          <div className="row margin-20"></div>
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default How;
