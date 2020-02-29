import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Teywit's Coffee"
        styleClass="default-background"
      />
    <Info />
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    # menu: allContentfulCoffeeItem {
    #   edges {
    #     node {
    #       id
    #       title
    #       description {
    #         description
    #       }
    #       price
    #       category
    #       image {
    #         fixed(width: 50, height: 50) {
    #           ...GatsbyContentfulFixed_tracedSVG
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;

export default IndexPage;