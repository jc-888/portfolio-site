import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import {
  OrganizationsWrapper,
  OrganizationsImage,
  OrganizationsPageTitle,
  OrganizationsDetails,
  OrganizationsBlock,
  OrganizationsBlockContainer,
} from './style';

interface OrganizationsProps {}

const OrganizationsPage: React.FunctionComponent<OrganizationsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      aclu: file(absolutePath: {regex: "/ACLU.png/"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family: file(absolutePath: {regex: "/family.jpg/"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <OrganizationsWrapper>
      <OrganizationsDetails>
        <OrganizationsPageTitle>
          <h2>Organizations</h2>
        </OrganizationsPageTitle>

        <OrganizationsBlock>
          <OrganizationsBlockContainer>
            <h3>ACLU</h3>
            <p>
              The American Civil Liberties Union is a nonprofit organization
              whose stated mission is "to defend and preserve the individual
              rights and liberties guaranteed to every person in this country by
              the Constitution and laws of the United States."
            </p>
          </OrganizationsBlockContainer>
          <OrganizationsBlockContainer>
            <OrganizationsImage>
              <Image fluid={Data.aclu.childImageSharp.fluid} alt="ACLU" />
            </OrganizationsImage>
          </OrganizationsBlockContainer>
        </OrganizationsBlock>
      </OrganizationsDetails>
    </OrganizationsWrapper>
  );
};

export default OrganizationsPage;
