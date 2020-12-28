import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const home = () => {
    const data = useStaticQuery(graphql`
    {
        allGhostPage {
            edges {
                node {
                    title
                    slug
                    plaintext
                    ghostId
                    meta_title
                    meta_description
                    localImage {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
    `)
    const pages = data.allGhostPage.edges
    
    return (
        <>
            {pages.map(({ node: page }) => {
                const title = page.title
                const id = page.ghostId
                const description = page.plaintext
                const fluid = page.localImage.childImageSharp.fluid
                return (
                    <div key={id} className="w-1/2 h-full inline-block relative">
                        <Img className="h-screen" fluid={fluid} alt={title}/>
                        <div className="absolute left-0 right-0 bottom-0 py-12 px-8">
                            <h1 className="text-pink-500">{title}</h1>
                            <h3 className="text-blue-500">{description}</h3>
                        </div>
                    </div>
                    
                )
            })}
        </>
    )
}

export default home
