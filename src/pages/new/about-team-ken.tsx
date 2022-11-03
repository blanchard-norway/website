import { NextPage } from 'next';
import Image from 'next/image';
import { Layout } from '../../components/layout';

const AboutTeamKen: NextPage = () => {
  return (
    <Layout>
      <div className="container-fluid header product" id="team-ken">
        <div className="container">
          <h1 className="green animated slideInRight" id="great">
            MØT KEN <span className="green-bg">BLANCHARD</span>
          </h1>
        </div>
      </div>

      <section className="aboutus-section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 breadcrumbs">
              <a href="/">HJEM</a> <span className="divider">{'//'}</span>
              <a href="about-us.html">OM OSS</a>
              <span className="divider">{'//'}</span>MØT KEN BLANCHARD
            </div>
          </div>
          <div className="row margin-14">
            <div className="col-md-4 ken-photo">
              <Image
                src="/images/about-us-team-ken/ak-ken-blanchard-chief-spiritual-officer.jpg"
                alt="Ken Blanchard, cofounder and Chief Spiritual Officer of Ken Blanchard Companies Leadership and Management Training"
                className="img-responsive"
                width={288}
                height={361}
              />
              <div className="ken-social">
                <span className="social-icon">
                  <a
                    href="https://twitter.com/kenblanchard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="Twitter"
                      width={31}
                      height={31}
                      src="/images/about-us-team-ken/icon-twitter.png"
                    />
                  </a>
                </span>
                <span className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/kenblanchard1/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      alt="LinkedIn"
                      width={31}
                      height={31}
                      src="/images/about-us-team-ken/icon-linkedin.png"
                    />
                  </a>
                </span>
              </div>
              <a
                href="https://www.kenblanchard.com/getattachment/About-Us/Meet-the-Team/Ken-Blanchard/Ken-Blanchard.pdf"
                className="btn btn-primary btn-lg btn-block"
              >
                <Image
                  src="/images/about-us-team-ken/ak-ken-blanchard-bio-download.png"
                  alt="Download Ken Blanchard’s Bio"
                  width={23}
                  height={26}
                />
                &nbsp;&nbsp;LAst ned biograf
              </a>
              <a
                href="https://www.kenblanchard.com/KBCPublic/media/PDF/Meet-Ken-Blanchard-Q-A.pdf"
                className="btn btn-primary btn-lg btn-block"
              >
                <Image
                  src="/images/about-us-team-ken/ak-ken-blanchard-bio-download.png"
                  alt="Download the question and answer session with Ken Blanchard"
                  width={23}
                  height={26}
                />
                &nbsp;&nbsp;Last ned Q&amp;A med Ken
              </a>
            </div>
            <div className="col-md-8 text-left ken-right">
              <div className="blue">Medgrunnlegger og spirituell styrmann</div>
              <p>
                Få mennesker har påvirket daglig ledelsen av mennesker og
                virksomheter mer enn Ken Blanchard. En fremtredende,
                ettertraktet forfatter, foredragsholder og forretningskonsulent,
                Dr. Blanchard respekteres for sin levetid av banebrytende
                forskning og tankelederskap som har påvirket daglig ledelse og
                ledelsen av mennesker og virksomheter over hele verden.
              </p>
              <p>
                Med en lidenskap for å gjøre alle ledere til tjenende ledere,
                deler Ken Blanchard sin innsiktsfulle og kraftige budskap med
                publikum over hele verden gjennom taler, konsulenttjenester og
                bestselgende bøker. Når Ken snakker, snakker han fra hjertet med
                varme og humor. Uansett hvor stort publikum er, kan han
                kommunisere med hver enkelt person som om de to var alene og
                snakket en til en. Ken er en sofistikert historieforteller som
                har en evne til å gjøre det tilsynelatende komplekse enkelt å
                forstå.
              </p>
              <p>
                Kens påvirkning som forfatter strekker seg langt. Hans ikoniske
                1982 klassiker, The One Minute Manager, skrevet sammen med
                Spencer Johnson, har solgt mer enn 13 millioner eksemplarer og
                ligger fremdeles på bestselgerlister. I løpet av de siste tre
                tiårene har han vært forfatter eller medforfatter av 60 bøker
                som samlet har solgt over 21 millioner eksemplarer. Hans
                banebrytende verk—inkludert Raving Fans, The Secret, and Leading
                at a Higher Level, for å nevne noen—har blitt oversatt til mer
                enn 42 språk. I 2005 ble Ken tatt inn i Amazons Hall of Fame som
                en av de topp 25 best selgende forfattere gjennom tidene.
              </p>
              <p>
                Dr. Ken Blanchard is er medgrunnlegger og spirituell styrmann av
                The Ken Blanchard Companies, et internasjonalt ledertrenings og
                konsulent firma han og hans komne Margie Blanchard startet i San
                Diego, California i 1979. I tillegg til å vær en velrenomert
                foredragsholder, forfatter og konsulent, er Ken en styremedlem
                av styret ved hans alma mater, Cornell University, og han
                underviser også studenter i Master of Science i Executive
                Leadership Program ved University of San Diego.
              </p>
              <p>
                Han ble født i New Jersey og vokste opp i New York, Ken mottok
                sin mastergrad fra Colgate University og hans bachelor og
                doktorgrad fra Cornell University.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutTeamKen;
