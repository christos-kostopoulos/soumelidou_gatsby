import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Profile = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "eleni.jpeg" }) {
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
          style={{ height: "100%", width: "100%"}}
        />
      )}
    />
  );
};

export default Profile;
