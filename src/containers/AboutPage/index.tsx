import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import {AboutWrapper, AboutImage, AboutPageTitle, AboutDetails} from './style';

interface AboutProps {}

const AboutPage: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: {regex: "/about.jpg/"}) {
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
    <AboutWrapper>
      <AboutDetails>
        <AboutPageTitle>
          <h2>About Me</h2>
        </AboutPageTitle>
        <AboutImage>
          <Image
            fluid={Data.family.childImageSharp.fluid}
            alt="family"
            style={{width: '650px', height: '650px', margin: 'auto'}}
          />
        </AboutImage>
        <p>
          I am a goal-oriented <strong>Full-Stack Web Developer</strong> and{' '}
          <strong>Full-Stack Mobile Developer</strong> with a strong commitment
          to collaboration, solutions-oriented problem-solving, and test-driven
          development. Takes strong pride in delivering quality work and a
          willingness to assist a team member with their tasks/duties, when
          necessary. Emphasis on scalable, maintainable, and testable code.
        </p>
        <p>
          I am seeking a challenging, interesting, and exciting position as a
          Full-Stack Web Developer and Full-Stack Mobile Developer where I can
          use my skills to write scalable, maintainable, and testable code. As a
          recent graduate from General Assembly with an degree in Business
          Administration and experience working as an volunteer software
          engineer at the Human Health Project. I have also done volunteering at
          Hack for LA where I do work in the Civic sector.
        </p>

        <AboutImage>
          <Image
            fluid={Data.avatar.childImageSharp.fluid}
            alt="author"
            style={{width: '650px', height: '650px', margin: 'auto'}}
          />
        </AboutImage>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default AboutPage;
