import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    {children}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
