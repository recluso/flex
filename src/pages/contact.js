import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/pintura.jpg')`, marginBottom: 0}}>
          <h1 className="post-title dark-text">Get in Touch</h1>
          <p className="dark-text">&rarr; &rarr; &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label for="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label for="emailsender">Email</label>
              <input type="email" name="emailsender" />
            </div>
            <div>
              <label for="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea name="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
    
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
