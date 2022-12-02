import { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '../components/layout';

const ThankYou: NextPage = () => {
  return (
    <Layout>
      <section
        className="bluebg nopadding privacy"
        style={{ paddingBottom: 10 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 breadcrumbs">
              <Link href="/">HJEM</Link> <span className="divider">{'//'}</span>
              <Link href="/get-started" className="CMSBreadCrumbsLink">
                KOM I GANG
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-section1">
        <div className="container">
          <div className="row margin">
            <div className="col-xs-12">
              <h2 className="text-center">
                Takk for at du <span className="green-bg">kontakter oss</span>
              </h2>
            </div>
          </div>
          <div className="row margins-30">
            <p style={{ textAlign: 'center', minHeight: 300 }}>
              <strong>
                <em>
                  Takk for at du kontakter oss. VI har mottatt informasjonen fra
                  deg og vil ta kontakt med deg så raskt vi kan.
                </em>
              </strong>
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
