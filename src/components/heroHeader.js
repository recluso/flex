import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="frontcontain">
          <div
            className="primary-content"
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description }}
          />
          <div className="btn-area">
            <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
          </div>
        </div>

      </div>
    )}
  />
)
