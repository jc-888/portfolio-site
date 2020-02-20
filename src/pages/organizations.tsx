import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Organizations from '../containers/OrganizationsPage';

type OrganizationsPageProps = {};

const OrganizationsPage: React.FunctionComponent<OrganizationsPageProps> = () => {
  return (
    <Layout>
      <SEO
        title="Organizations"
        description="A collection all the organizations I am involved in"
      />
      <Organizations />
    </Layout>
  );
};

export default OrganizationsPage;
