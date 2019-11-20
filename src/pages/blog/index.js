import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/houses123.jpg')`,
          }}
        >
        </div>
        <h1
            className="has-text-weight-bold is-size-1"
            style={{
              textAlign: "center",
              position: "sticky",
              top: 0,
              // boxShadow:
              //   'rgb(0, 255, 255) 0.5rem 0px 0px, rgb(0, 255, 255) -0.5rem 0px 0px',
              backgroundColor: '#fff',
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            Latest Stories
          </h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
