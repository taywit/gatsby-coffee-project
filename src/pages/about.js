import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import SEO from "../components/seo"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About US" />
    <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="About Teywit's Coffee"
        styleClass="about-background"
      />
    <Info />
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;