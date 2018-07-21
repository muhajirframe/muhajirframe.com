import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1 style={{ color: '#fff' }}>{post.frontmatter.title}</h1>
        <div style={{ color: '#fff' }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
