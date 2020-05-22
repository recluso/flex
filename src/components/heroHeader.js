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
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
          <div className="stravaList">
            <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/7199344/latest-rides/b54e44f1bad55fe91ba5857e0377e45d9526665f'></iframe>
          </div>
        </div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)
