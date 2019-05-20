import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"

const IndexPage = () => {
  return <Layout />

  return (
    <div>
      <Header />
      <h1>Hello.</h1>
      <h2>I'm Steve, a fat bastard.</h2>
      <p>
        Need a developer? <a href="/contact">Contact me.</a>
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>

      <Footer />
    </div>
  )
}

export default IndexPage
