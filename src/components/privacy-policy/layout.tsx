import Link from 'next/link';
import { Layout } from '../../components/layout';

export const PrivacyPolicyLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <section
        className="bluebg nopadding privacy"
        style={{ paddingBottom: 10 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 breadcrumbs">
              <Link href="/">Hjem</Link> <span className="divider">{'//'}</span>
              <span className="CMSBreadCrumbsCurrentItem">
                Personværnserklæring
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy-section1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                BLANCHARD NORWAY
                <br />
                <span className="green-bg">PERSONVERNSERKLÆRING</span>
              </h2>
            </div>
          </div>
          <div className="row">
            { children }
          </div>
        </div>
      </section>
    </Layout>
  );
};
