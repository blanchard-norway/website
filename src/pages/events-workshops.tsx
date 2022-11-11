import { NextPage } from 'next';
import Image from 'next/image';
import { Layout } from '../components/layout';

const EventsWorkshops: NextPage = () => {
  return (
    <Layout>
      <section className="bluebg nopadding">
        <div className="container">
          <div className="row" style={{ paddingBottom: 10 }}>
            <div className="col-xs-12 breadcrumbs">
              <a href="/">HJEM</a>
              <span className="divider">{'//'}</span>KURS
            </div>
          </div>
        </div>
      </section>

      <section className="events-dates-locations">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                KOMMENDE Arrangementer og <span className="green-bg">KURS</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row table bluebg upcoming-workshops">
          <div className="col-lg-3 col-sm-2 image-column">
            <Image
              src="/img/events-workshops-upcoming/image1.jpg"
              width={210}
              height={210}
              className="img-responsive"
              alt="Event workshop upcoming 1"
            />
          </div>
          <div className="col-lg-8 col-sm-7 right-line">
            <strong>VIRTUELT ELLER KLASSEEROM</strong>
            <div className="title">
              SLII<sup>&reg;</sup>.
            </div>

            <p>
              SLII<sup>&reg;</sup>. er verdens mest underviste ledelsesmodell.
              Det er basert på en modell som lærer en å bruke den riktige
              ledelsesstilen i forhold til medarbeideren og situasjonen. SLII
              <sup>&reg;</sup>. Opplevelsen bruker nyskapende teknikker som gjør
              at en lærer seg SLII<sup>&reg;</sup>. raskere, dypere og mer
              effektivt. I dette programmet vil du lære deg et nytt språk for
              ditt lederskap som vil hjelpe deg å øke kvaliteten og kvantiteten
              på de samtalene som du har med dine medarbeidere, øke utviklingen
              og ytelsen deres samt gjøre dem mer selvstendige. Å bli en
              situasjonsbestemt leder vil gjøre deg til en god samarbeidspartner
              til dem du ledere samt å gi dem det de trenger. Programmet er delt
              opp i 5 virtuelle økter på 2 timer, eller over 2 dager i
              klasserom.
            </p>
            <p>&nbsp;Se dato og tidspunkt under påmelding. kr. 16.990,-</p>
            <p>
              &nbsp;Kampanjepris på fysiske kurs i april og mai, Stavanger,
              Oslo, Bergen og Kristiansand. kr. 8.495,-
            </p>
          </div>
          <div className="col-lg-1 col-sm-3 text-right">
            <a href="https://www.absentia.no/CourseiFrameRegister2.aspx?kursID=85#pamelding">
              <div className="btn btn-primary">MER INFO</div>
            </a>
          </div>
        </div>

        <div className="row table upcoming-workshops">
          <div className="col-lg-3 col-sm-2 image-column">
            <Image
              src="/img/events-workshops-upcoming/image6.jpg"
              width={420}
              height={420}
              className="img-responsive"
              alt="Event workshop upcoming 2"
            />
          </div>
          <div className="col-lg-8 col-sm-7 right-line">
            <strong>VIRTUELT ELLER KLASSEROM</strong>
            <div className="title">Kommunikasjon i ledelse</div>

            <p>
              Programmet Kommunikasjon i ledelse bygger på de gjennomtestede
              hemmelighetene i Ken Blanchards bok The New One Minute Manager og
              introduserer samtalene og ferdighetene som nye ledere trenger for
              å raskt oppnå suksess samt bygge positive relasjoner med teamene
              sine. Programmet er delt opp i 3 virtuelle økter på 2 timer eller
              over 1 dag i klasserom.
            </p>
            <p>Se dato og tidspunkt under påmelding. kr. 7.990,-</p>
          </div>
          <div className="col-lg-1 col-sm-3 text-right">
            <a href="https://www.absentia.no/CourseiFrameRegister2.aspx?kursID=XXX#pamelding">
              <div className="btn btn-primary">MER INFO</div>
            </a>
          </div>
        </div>

        <div className="row table bluebg upcoming-workshops">
          <div className="col-lg-3 col-sm-2 image-column">
            <Image
              src="/img/events-workshops-upcoming/image5.jpg"
              width={424}
              height={424}
              className="img-responsive"
              alt="Event workshop upcoming 3"
            />
          </div>
          <div className="col-lg-8 col-sm-7 right-line">
            <strong>VIRTUELT</strong>
            <div className="title">
              Lede virtuelt<sup>&trade;</sup>
            </div>
            <p>
              Programmet Lede virtuelt<sup>&trade;</sup> er et virtuelt
              instruktørledet program som går over tre 2-timers økter. De
              virtuelle øktene gir deltakerne en meget engasjerende opplevelse
              som inkluderer instruksjon, tilbakemeldinger, refleksjons- og
              gruppeoppgaver og trene på disse nye ferdighetene i en trygg
              treningssetting. Programmet er delt opp i 3 virtuelle økter på 2
              timer.
            </p>
            <p>Se dato og tidspunkt under påmelding. kr. 7.990,-</p>
          </div>
          <div className="col-lg-1 col-sm-3 text-right">
            <a href="https://www.absentia.no/CourseiFrameRegister2.aspx?kursID=111#pamelding">
              <div className="btn btn-primary">MER INFO</div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsWorkshops;
