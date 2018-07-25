import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Layout from '../components/Layout'

const Content = styled.div`
  ${tw('text-white')};
`

export const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1 style={{ color: '#fff' }}>{post.frontmatter.title}</h1>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
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
