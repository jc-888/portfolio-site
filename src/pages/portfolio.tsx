import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Portfolio from '../containers/PortfolioPage';

type PortfolioPageProps = {};

const PortfolioPage: React.FunctionComponent<PortfolioPageProps> = (
  props: any,
) => {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="A collection of my personal projects"
      />
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
