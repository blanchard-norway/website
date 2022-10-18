import getConfig from 'next/config';
import Link from 'next/link';

export const GetStartedContainer: React.FC = () => {
  const { publicRuntimeConfig } = getConfig();
  const { basePath } = publicRuntimeConfig;

  return (
    <section className="white form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 green-form wide">
            <h3>KLAR for å komme i gang?</h3>
            <p>
              Blanchards programmer og tjenester er utviklet over flere tiår
              med forskning og virkelige resultater. De utvikler flotte
              mennesker, flotte ledere og gode selskaper. La oss snakke om
              hvordan vi kan hjelpe din bedrift til å komme i gang.
            </p>
            <div className="row margin-50 text-center">
              <div className="col-md-6 col-md-offset-3">
                <Link href={`${basePath}/get-started`}>
                  <a className="btn btn-primary btn-lg btn-block center-block no-ul">
                    Snakk med en ekspert
                  </a>
                </Link>
              </div>
            </div>
            <div className="row text-center margin-20">
              <div className="col-md-6 col-md-offset-3">
                <Link href={`${basePath}/events-workshops`}>
                  <a className="btn btn-primary btn-lg btn-block center-block no-ul">
                    Meld deg på et kurs
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
