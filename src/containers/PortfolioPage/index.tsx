import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "../../components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
import {
  PortfolioWrapper,
  PortfolioPageTitle,
  PortfolioDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "#",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "#",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "#",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "#",
    tooltip: "Linked In",
  },
]

interface PortfolioProps {}

const PortfolioPage: React.FunctionComponent<PortfolioProps> = (props: any) => {
  return (
    <PortfolioWrapper>
      <PortfolioPageTitle>
        <h1>Portfolio Page</h1>
      </PortfolioPageTitle>

      <PortfolioDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum magna quis accumsan viverra. Nullam convallis dolor id convallis tempor. Vestibulum eu ante fringilla, ultricies sem varius, lacinia purus. Praesent sollicitudin leo in libero maximus, at varius lacus pretium. Sed fringilla iaculis egestas. Praesent consectetur sit amet felis sit amet scelerisque. Etiam at tincidunt lorem. Nulla tincidunt urna sit amet quam posuere egestas. In nec ornare lectus. In fermentum volutpat velit. Fusce ullamcorper lorem et sollicitudin tempor. Aliquam vitae nunc ut lectus hendrerit consequat vel nec enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum magna quis accumsan viverra. Nullam convallis dolor id convallis tempor. Vestibulum eu ante fringilla, ultricies sem varius, lacinia purus. Praesent sollicitudin leo in libero maximus, at varius lacus pretium. Sed fringilla iaculis egestas. Praesent consectetur sit amet felis sit amet scelerisque. Etiam at tincidunt lorem. Nulla tincidunt urna sit amet quam posuere egestas. In nec ornare lectus. In fermentum volutpat velit. Fusce ullamcorper lorem et sollicitudin tempor. Aliquam vitae nunc ut lectus hendrerit consequat vel nec enim.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </PortfolioDetails>
    </PortfolioWrapper>
  )
}

export default PortfolioPage
