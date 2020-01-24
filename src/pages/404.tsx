import React from 'react';
import {graphql} from 'gatsby';
import Navbar from '../components/Navbar/Navbar';
import ResetCss from '../components/resetCSS';
import SEO from '../components/seo';
import NotFound from '../containers/NotFound';
import Footer from '../components/Footer/Footer';

const NotFoundPage = () => {
  return (
    <>
      <ResetCss />
      <Navbar />
      <SEO title="404: Not Found" />
      <NotFound />
      <Footer>
        <div>
          Copyright &copy; {new Date().getFullYear()} {" "}
          <strong>Jacon J Condes</strong>
        </div>
      </Footer>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
