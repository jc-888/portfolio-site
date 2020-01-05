import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import SocialProfile from '../../../components/SocialProfile/SocialProfile';
import {IntroWrapper, IntroImage, IntroTitle, Desciption} from './style';
import {
  IoIosPaper,
  IoLogoLinkedin,
  IoIosMail,
  IoLogoGithub,
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoIosMail />,
    url: 'mailto:jaconjcondes@gmail.com',
    tooltip: 'Email',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/in/jaconjcondes/',
    tooltip: 'LinkedIn',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://github.com/jakec888',
    tooltip: 'Github',
  },
  {
    icon: <IoIosPaper />,
    url:
      'https://drive.google.com/file/d/1-BxmXGcY3txAVsqGCzBO0x1CnxA4J8L7/view',
    tooltip: 'Resume',
  },
];

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: {regex: "/author.jpg/"}) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

  const {author, about} = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.fluid;

  return (
    <IntroWrapper>
      <IntroImage>
        <Image fluid={AuthorImage} alt="author" />
      </IntroImage>
      <IntroTitle>
        <b>{author}</b>
      </IntroTitle>
      <Desciption>{about}</Desciption>
      <SocialProfile items={SocialLinks} />
    </IntroWrapper>
  );
};

export default Intro;
