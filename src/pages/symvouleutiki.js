import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Index = ({ className }) => {
  return (
    <Layout>
      <SEO
        title="Συμβουλευτική γονέων"
        keywords={[`οκογένεια`, `συμβουλευτική θεραπεία`, `Συμβολευτική`]}
      />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "symvouleutiki.jpg" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <div style={{ position: "relative" }}>
            <BackgroundImage
              Tag="section"
              className={className}
              style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "50% 25%",
              }}
              fluid={data.placeholderImage.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
            <HeroText
              title="Συμβουλευτική γονέων"
              styles={{ textAlign: "center" }}
            />
            <div
              style={{
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.3)",
                position: "absolute",
                top: "0px",
              }}
            ></div>
          </div>
        )}
      />

      <div
        className="container main-content"
        style={{ marginTop: "52px", zIndex: "100", position: "relative" }}
      >
        <p>
          Η συμβουλευτική γονέων είναι η υποστήριξη που λαμβάνουν από ειδικό οι
          γονείς ή οι φροντιστές του παιδιού όταν αυτοί συναντούν δυσκολίες. Για
          παράδειγμα, οι γονείς μπορεί να χρειαστούν κατεύθυνση και στήριξη όταν
          η οικογένεια βρίσκεται αντιμέτωπη σε μια δύσκολη περίοδο, όπως ένας
          θάνατος, ένα διαζύγιο, ένα πρόβλημα υγείας κ.α. Ακόμη, άλλοι λόγοι που
          μπορεί να απασχολούν είναι όταν το παιδί εμφανίζει δυσκολίες
          προσαρμογής στο σχολείο, μαθησιακές δυσκολίες, προβλήματα
          συναισθηματικά (άγχος, υπερβολική συστολή, χαμηλή αυτοπεποίθηση,
          προσκόλληση) ή προβλήματα συμπεριφοράς.
        </p>
        <p>
          Με άλλα λόγια, η συμβουλευτική γονέων είναι η συνεργασία των γονέων με
          έναν ψυχοθεραπευτή που στοχεύει στη βελτίωση της ψυχοσυναισθηματικής
          κατάστασης του παιδιού και κατά συνέπεια της συμπεριφοράς του. Οι
          συνεδρίες συμβουλευτικής πραγματοποιούνται με τον έναν ή και με τους
          δυο γονείς.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
