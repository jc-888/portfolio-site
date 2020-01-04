import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../containers/PortfolioPage"

type PortfolioPageProps = {}

const PortfolioPage: React.FunctionComponent<PortfolioPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="A historical account/biography written from personal knowledge of my past"
      />
      <Portfolio />
    </Layout>
  )
}

export default PortfolioPage
