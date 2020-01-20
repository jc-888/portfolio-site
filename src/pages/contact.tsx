import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../containers/ContactPage';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Communicate with me, typically in order to give or receive specific information"
      />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
