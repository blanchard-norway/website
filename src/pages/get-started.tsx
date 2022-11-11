import { NextPage } from 'next';
import { ContactForm } from '../components/contact-form';
import { Layout } from '../components/layout';

const GetStarted: NextPage = () => {
  return (
    <Layout>
      <div className="container-fluid header product" id="get-started">
        <div className="container">
          <h1 className="green animated slideInRight" id="great">
            LA OSS STARTE <span className="green-bg">SAMTALEN</span>
          </h1>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 breadcrumbs">
              <a href="/">HJEM</a>
              <span className="divider">{'//'}</span>KOM I GANG
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default GetStarted;
