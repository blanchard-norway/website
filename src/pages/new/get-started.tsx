import { NextPage } from 'next';
import { ContactForm } from '../../components/contact-form';
import { Layout } from '../../components/layout';

const GetStarted: NextPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default GetStarted;
