import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/AboutPage"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="A historical account/biography written from personal knowledge of my past"
      />
      <About />
    </Layout>
  )
}

export default AboutPage
