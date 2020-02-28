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

        <OrganizationsBlock>
          <OrganizationsBlockContainer>
            <h3>NRDC</h3>
            <p>
              The Natural Resources Defense Council (NRDC) is a United
              States-based 501 non-profit international environmental advocacy
              group. Founded in 1970, the NRDC has over 3 million members, with
              online activities nationwide, and a staff of about 700 lawyers,
              scientists and other policy experts.
            </p>
          </OrganizationsBlockContainer>
          <OrganizationsBlockContainer>
            <OrganizationsImage>
              <Image fluid={Data.aclu.childImageSharp.fluid} alt="ACLU" />
            </OrganizationsImage>
          </OrganizationsBlockContainer>
        </OrganizationsBlock>

        <OrganizationsBlock>
          <OrganizationsBlockContainer>
            <h3>Union of Concerned Scientists</h3>
            <p>
              The Union of Concerned Scientists (UCS) is a nonprofit science
              advocacy organization based in the United States. The UCS
              membership includes many private citizens in addition to
              professional scientists.
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
