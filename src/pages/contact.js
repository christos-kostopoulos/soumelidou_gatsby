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
      <SEO
        title="Επικοινωνία"
        keywords={[`επικοινωνία`, `email`, `τηλέφωνο`]}
      />
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
                    2ας Μαΐου 10, <br /> Νέα Σμύρνη 171 22
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
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d786.5765763144169!2d23.712179829278178!3d37.94663335630657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMs6xz4IgzpzOsc6Qzr_PhSAxMCwgzp3Orc6xIM6jzrzPjc-Bzr3Otw!5e0!3m2!1sen!2sgr!4v1646126603340!5m2!1sen!2sgr"
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
