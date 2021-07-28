import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { BLogo, Facebook, Twitter, Discord, Telegram } from "../utils/imgLoader"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterLayout {
      allPrismicPartners {
        nodes {
          data {
            partner_group {
              name
              icon {
                url
              }
              description
              slug
            }
          }
        }
      }
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            slug
            upcoming
            icon {
              url
            }
            partner
          }
        }
      }
      allPrismicFeatures(sort: { order: ASC, fields: data___priority }) {
        nodes {
          data {
            name
            slug
          }
        }
      }
    }
  `)
  const features = data?.allPrismicFeatures.nodes
  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  const partners = data.allPrismicPartners.nodes[0].data.partner_group
  const featureList = features.map((item, index) => (
    <div key={index}>
      <Link to={item.data.slug}> {item.data.name} </Link>
    </div>
  ))

  const exchangeList = exchangeData?.map((item, index) => (
    <Link key={index} to={`/exchanges/${item.data.slug}`}>
      <div className="d-flex align-items-center">
        <img
          alt={item.data.name}
          src={item.data.icon.url}
          className="exchange-img"
        />
        {item.data.name}
      </div>
    </Link>
  ))

  const partnerList = partners.map((item, index) => (
    <a key={index} href={item.slug} className="feature-item_title">
      <div className="feature-item ">
        <img
          alt={item.name}
          src={item.icon.url}
          className="feature-item__image"
        />
        <div className="feature-item__content-wrapper">
          {item.name}
          <p className="label feature-item_content">{item.description}</p>
        </div>
      </div>
    </a>
  ))

  return (
    <footer className="footer">
      <div className="layout-container">
        <div className="footer-navbar">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <h4>Features</h4>
              {featureList}
            </div>
            <div className="col-lg-3 col-sm-6 exchange">
              <h4>Exchanges</h4>
              {exchangeList}
            </div>
            <div className="col-lg-3 col-sm-6 partner">
              <h4>Partners</h4>
              {partnerList}
            </div>
            <div className="col-lg-3 col-sm-6 other">
              <h4>Links</h4>
              <div>
                <Link to="/blog">Blog</Link>
              </div>
              <div>
                <Link to="/pricing">Pricing</Link>
              </div>
              <div>
                <Link to="/academy">Crypto Academy</Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-bar">
          <Link to="/">
            <img alt="altrady logo" src={BLogo} />
          </Link>
          <div className="links">
            <div className="terms">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/altradyapp/ ">
                <img alt="Facebook Link" src={Facebook} />
              </a>
              <a href="https://twitter.com/altradyapp ">
                <img alt="Twitter Link" src={Twitter} />
              </a>
              <a href="https://discord.gg/s5DuEhh">
                <img alt="Discord Link" src={Discord} />
              </a>
              <a href="https://t.me/altrady">
                <img alt="Telegram Link" src={Telegram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
