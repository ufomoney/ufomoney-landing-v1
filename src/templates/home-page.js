import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  App,
  EmailForm,
  Icons,
  Image,
  ImageLink,
  Link,
  PageSection,
  Profile,
} from "../components"
import { sections } from "../constants"
import { actions, actionTypes } from "../redux"

export const HomePageTemplate = ({
  hero = {},
  images = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
  team_section: teamSection = {},
  advisors_section: advisorsSection = {},
  supporters_section: supportersSection = {},
}) => {
  return (
    <div className="main-content">
      <PageSection id={sections.HOME}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: hero.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
        </Row>
        <Row className="cta-section">
          {hero.cta ? (
            <Col xs={12} sm={12} md={6} lg={4} className="cta">
              {hero.cta.icon ? <Image imageData={hero.cta.icon} /> : ""}
              <h2>{hero.cta.label}</h2>
            </Col>
          ) : (
            ""
          )}
          <ul className="cta-links col-12 col-sm-12 col-md-6 col-lg-4">
            {hero.cta_buttons.map((btn, i) => (
              <li key={`cta-btn-${i}`}>
                <Link url={btn.url} className="cta-link">
                  {btn.label}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </PageSection>
      <PageSection id={sections.TOKEN_DASHBOARD}>
        <Row className="token-dashboard">
          <Col xs={12} sm={12}>
            <section className="dashboard-cta d-lg-flex align-items-end">
              <div className="w-lg-40 content order-2 text-center text-lg-left">
                <h2 className="mt-0 mb-4">
                  Buy UFO Tokens to participate in the UFO Money government and earn rewards
                </h2>
                <a
                  href="https://t.me/getufotokenbot"
                  target="new"
                  className="btn btn-primary d-md-inline-block"
                >
                  Buy UFO Tokens
                </a>
              </div>
              <div className="w-lg-55 image order-1">&nbsp;</div>
            </section>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.FEATURED_APPLICATION}>
        <Row className="featured-application">
          <Col xs={12} sm={12}>
            <h2>Currently in development</h2>

            <section className="application tbtc">
              <h3>
                Limit orders, margin and futures trading functionality. Also in development is its own blockchain, which will allow you to exchange tokens from different blockchains without paying huge commissions for it!
              </h3>

              <p>
                Our future is the functionality of centralized exchanges like Binance, but on blockchain
              </p>

              <ul className="links">
                <li>
                  <a
                    className="primary"
                    rel="noopener noreferrer"
                  >
                    Coming soon
                  </a>
                </li>
              </ul>
            </section>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.MAILING_LIST}>
        <Row>
          <Col xs={12} sm={7}>
            <EmailForm
              label="Email"
              placeholder="you@example.com"
              onSubmit={signupMailingList}
              requestStates={ajaxRequestStates}
              request={actionTypes.SIGNUP_MAILING_LIST}
            >
              <h3>Join our mailing list for updates</h3>
            </EmailForm>
          </Col>
          <Col xs={12} sm={5} className="col-circles">
            <div>
              <Image imageData={images.textureCircle2} />
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.GITHUB}>
        <Row>
          <Col xs={12} md={12}>
            <h3>
              View the
              <a
                className="github-logo"
                href="https://github.com/ufomoney"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              Repository
              <a
                className="github-link"
                href="https://github.com/ufomoney"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.ArrowRightLong />
              </a>
            </h3>
          </Col>
        </Row>
      </PageSection>
      <PageSection
        id={sections.DEFINITION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.CastleGate />
          </div>
          <div className="blurb-text">
            <p>
              Our strength is in our team! Together they repel all attacks and prepare to launch the project into space
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.TEAM} collapsible>
        <h2>{teamSection.title}</h2>
        {teamSection.team.map((member, i) => (
          <Profile
            key={`team-member-${i}`}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.social_links}
          />
        ))}
      </PageSection>
      <PageSection
        id={sections.DESCRIPTION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.Axe />
          </div>
          <div className="blurb-text">
            <p>
              UFO Money is developing a solution for margin and futures trading on Ethereum blockchain, which would give users the functionality of centralized exchanges and blockchain security
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.ADVISORS} collapsible>
        <h2>{advisorsSection.title}</h2>
        {advisorsSection.advisors.map((advisor, i) => (
          <Profile
            key={`advisor-${i}`}
            name={advisor.name}
            title={advisor.title}
            image={advisor.image}
            socials={advisor.social_links}
          />
        ))}
      </PageSection>
      <PageSection id={sections.SUPPORTERS} convex>
        <h2>{supportersSection.title}</h2>
        <Row>
          {supportersSection.supporters.map((supporter, i) => (
            <ImageLink
              key={`supporter-${i}`}
              url={supporter.url}
              label={supporter.name}
              image={supporter.logo}
            />
          ))}
        </Row>
      </PageSection>
    </div>
  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  supporters_section: PropTypes.object,
  team_section: PropTypes.object,
  advisors_section: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedHomePage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(HomePageTemplate)

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    textureCircle2: data.textureCircle2,
  }
  return (
    <App className="app-home">
      <ConnectedHomePage {...post.frontmatter} images={images} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureCircle1: PropTypes.object,
    textureCircle2: PropTypes.object,
  }),
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          cta {
            label
            icon {
              image {
                relativePath
              }
              alt
            }
          }
          cta_buttons {
            label
            url
          }
        }
        team_section {
          title
          team {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 274, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            social_links {
              url
            }
          }
        }
        advisors_section {
          title
          advisors {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 274, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            social_links {
              url
            }
          }
        }
        supporters_section {
          title
          supporters {
            name
            url
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
    textureCircle2: file(relativePath: { regex: "/texture-circle-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
