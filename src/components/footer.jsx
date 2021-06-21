import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import { BLogo, Facebook, Twitter, Discord, Telegram } from "../utils/imgLoader"

const features = [
  "Multi-exchange",
  "Real-time market data",
  "Advanced trading",
  "Smart trading",
  "Trading analytics",
  "Positions with PnL",
  "Multi-charts",
  "Portfolio manager",
  "Crypto Base Scanner",
  "Custom layouts",
  "Quick Scan",
  "Notes",
  "News",
  "Watch lists",
]

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            slug
            upcoming
            icon {
              url
            }
          }
        }
      }
      allPrismicPartners {
        nodes {
          data {
            partner_group {
              name
              icon {
                url
              }
              description
            }
          }
        }
      }
    }
  `)
  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  const partners = data.allPrismicPartners.nodes[0].data.partner_group
  const featureList = features.map((item, index) => (
    <div key={index}>
      <Link to="/"> {item} </Link>
    </div>
  ))

  const exchangeList = exchangeData?.map((item, index) => (
    <div key={index} className="d-flex align-items-center">
      <img
        alt={item.data.name}
        src={item.data.icon.url}
        className="exchange-img"
      />
      <Link to={`/exchange/${item.data.slug}`}>{item.data.name}</Link>
    </div>
  ))

  const partnerList = partners.map((item, index) => (
    <div key={index} className="feature-item ">
      <img
        alt={item.name}
        src={item.icon.url}
        className="feature-item__image"
      />
      <div className="feature-item__content-wrapper">
        <Link to="/" className="feature-item_title">
          {item.name}
        </Link>
        <p className="label feature-item_content">{item.description}</p>
      </div>
    </div>
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
              <a href="https://www.facebook.com">
                <img alt="Facebook Link" src={Facebook} />
              </a>
              <a href="https://twitter.com">
                <img alt="Twitter Link" src={Twitter} />
              </a>
              <a href="https://discord.com">
                <img alt="Discord Link" src={Discord} />
              </a>
              <a href="https://telegram.org">
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
