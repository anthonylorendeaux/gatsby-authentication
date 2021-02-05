import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useAuth from "../hooks/useAuth"

const Header = ({ siteTitle }) => {
  const { logout, isAuthenticated } = useAuth()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        { isAuthenticated 
          ? (
              <a 
                onClick={handleLogout}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
                href="/">
                Logout
              </a>  
            )
          : (
            <Link
              to="/login"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}>
                Login
              </Link>
            )
        }
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
