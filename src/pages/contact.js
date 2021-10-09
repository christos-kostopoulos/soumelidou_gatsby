import React from "react";
import ContactForm from "../components/contactForm/contactForm";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import HeroText from "../components/heroText";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Επικοινωνία" keywords={[`επικοινωνία`, `email`, `τηλέφωνο`]} />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "contact.jpg" }) {
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
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{ height: "100vh" }}
            />
            <HeroText title="Επικοινωνία" styles={{ textAlign: "center" }} />
          </div>
        )}
      />
      <div style={{ backgroundColor: "white" }}>
        <div class="container main-content" style={{ maxWidth: "1440px" }}>
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <h5 style={{ marginBottom: "36px" }}>
                  Επικοινωνήστε μέσω email, τηλεφώνου, ή στείλτε ένα μήνυμα μέσω
                  της online φόρμας.
                </h5>

                <div className="contact-info-item">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div className="material-icons contact-info-icons">
                      email
                    </div>
                    <div style={{ fontSize: "16px" }}> Email</div>
                  </div>
                  esoumel@gmail.com
                </div>
                <div className="contact-info-item">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div className="material-icons contact-info-icons">
                      perm_phone_msg
                    </div>
                    <div style={{ fontSize: "16px" }}>Τηλέφωνο</div>
                  </div>
                  <div className="mb-2"> T: 211 41 47 917 </div>
                  <div>M: 6942 83 93 91</div>
                </div>
                <div className="contact-info-item">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div className="material-icons contact-info-icons">
                      home
                    </div>
                    <div style={{ fontSize: "16px" }}>Διεύθυνση </div>
                  </div>
                  <p>
                    Οδυσσέως Ανδρούτσου 29, <br/>Κουκάκι 117 41 <br />
                     Δίπλα στο σταθμό
                    Φιξ του μετρό
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h5 style={{ marginBottom: "36px" }}>Φόρμα επικοινωνίας</h5>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="container-fluid map-container">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6291.197068050256!2d23.723728!3d37.963159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd04e8f0be8f%3A0x9a0678e2a7a7f08e!2sOdissea%20Androutsou%2029%2C%20Athina%20117%2041!5e0!3m2!1sen!2sgr!4v1594667026905!5m2!1sen!2sgr"
            width="100%"
            height="420"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
