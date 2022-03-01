import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = () => (
  <footer>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              style={{ display: "flex", height: "100%", alignItems: "center" }}
            >
              <div className="material-icons contact-info-icons">home</div>
              <p> 2ας Μαΐου 10,, Νέα Σμύρνη </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "14px",
                height: "100%",
                alignItems: "center",
              }}
            >
              <div className="material-icons contact-info-icons">email</div>
              <a className="email" href="mailto: esoumel@gmail.com ">
                esoumel@gmail.com
              </a>
              <div
                className="material-icons contact-info-icons"
                style={{ marginLeft: "12px" }}
              >
                perm_phone_msg
              </div>
              <p>6942 83 93 91</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-middle">
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ height: "70px", borderRadius: "4px" }}
          />
        )}
      />
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="pull-left copyright" style={{ marginBottom: "0.5rem" }}>
          {" "}
          Copyright © 2020. All right reserved.{" "}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
