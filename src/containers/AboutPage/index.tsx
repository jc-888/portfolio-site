import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import {AboutWrapper, AboutImage, AboutPageTitle, AboutDetails} from './style';

// import {
//   IoLogoFacebook,
//   IoLogoTwitter,
//   IoLogoInstagram,
//   IoLogoLinkedin,
// } from 'react-icons/io';

// const SocialLinks = [
//   {
//     icon: <IoLogoFacebook />,
//     url: '#',
//     tooltip: 'Facebook',
//   },
//   {
//     icon: <IoLogoInstagram />,
//     url: '#',
//     tooltip: 'Instagram',
//   },
//   {
//     icon: <IoLogoTwitter />,
//     url: '#',
//     tooltip: 'Twitter',
//   },
//   {
//     icon: <IoLogoLinkedin />,
//     url: '#',
//     tooltip: 'Linked In',
//   },
// ];

interface AboutProps {}

const AboutPage: React.FunctionComponent<AboutProps> = props => {
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
      <AboutPageTitle>
        <h2>About Me</h2>
        <p>
          Full-Stack Web & Mobile Developer from the Greater Los Angeles Area.
        </p>
      </AboutPageTitle>

      <AboutDetails>
        <AboutImage>
          <Image
            fluid={Data.family.childImageSharp.fluid}
            alt="family"
            style={{width: '650px', height: '650px', margin: 'auto'}}
          />
        </AboutImage>

        <h2>Who, Me?</h2>
        <p>
          I am a goal-oriented <strong>Full-Stack Web Developer</strong> and{' '}
          <strong>Full-Stack Mobile Developer</strong> with a strong commitment
          to collaboration, solutions-oriented problem-solving, and test-driven
          development. Takes strong pride in delivering quality work and a
          willingness to assist a team member with their tasks/duties, when
          necessary. Emphasis on scalable, maintainable, and testable code.
        </p>
        <p>
          I've been coding since 2017, I am seeking a challenging, interesting,
          and exciting position as a Full-Stack Web Developer and Full-Stack
          Mobile Developer where I can use my skills to write scalable,
          maintainable, and testable code. As a recent graduate from General
          Assembly with an degree in Business Administration and experience
          working as an volunteer software engineer at the Human Health Project.
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
