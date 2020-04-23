import React, { Fragment } from "react"
import Media from "react-media"
// import Text from "../components/text"
import styles from "../styles/work.module.css"
import { Link, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"

const Images = () => {
    const data = useStaticQuery(graphql`
        query CloudinaryImages {
            allCloudinaryMedia {
              edges {
                node {
                  secure_url
                }
              }
            }
          }
          `
    );
    const clImages = data.allCloudinaryMedia.edges;

    return (
        <div>
          <div>
            {clImages.map((image, index) => (
                  <div key={`${index}-cl`}>
                    <img src={image.node.secure_url} />
                  </div>
                ))
            }
          </div>
        </div>
      )
  };
  