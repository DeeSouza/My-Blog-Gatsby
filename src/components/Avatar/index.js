import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
                    childImageSharp {
                        fixed(width: 60, height: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )

    return <Image fixed={avatarImage.childImageSharp.fixed} />
};

export default Avatar;