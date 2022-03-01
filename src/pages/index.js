import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from "../components/heroText";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Quotes from "../components/quotes";
import Carousel from "../components/slider";

const IndexPage = () => (
  <Layout>
    <SEO title="Αρχική | Ελένη Σουμελίδου" keywords={[`ψυχολογια`, `ψυχοθεραπεία`, `Σουμελίδου`]} />
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "street.jpg" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => (
        <div style={{ position: "relative" }}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ height: "100vh" }}
          />
          <HeroText
            styles={{ textAlign: "center", width: "50%" }}
            underline
            title="Ελένη Σουμελίδου"
            subtitle="Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια - Αναλύτρια Ομάδας,
         Ζεύγους & Οικογένειας"
          />
        </div>
      )}
    />

    <div className="container-fluid">
      <Carousel>
        <div>
          <Quotes
            text="Η αγάπη είναι η μόνη υγιής και ικανοποιητική απάντηση στο πρόβλημα της ανθρώπινης ύπαρξης."
            author="Erich Fromm"
          />
        </div>
        <div>
          <Quotes
            text="Ο μόνος άνθρωπος που είναι πραγματικά μορφωμένος είναι εκείνος που έχει μάθει πως να μαθαίνει και πως να αλλάζει."
            author="Carl Rogers"
          />
        </div>
        <div>
          <Quotes
            text="Αυτό που επιτυγχάνουμε εσωτερικά μας θα αλλάξει την εξωτερική μας πραγματικότητα."
            author="Otto Rank"
          />
        </div>
      </Carousel>
    </div>
  </Layout>
);

export default IndexPage;
