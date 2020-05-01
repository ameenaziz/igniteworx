import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ setModal }) => (
  <Nav>
    <AboutLink onClick={() => setModal(prevState => !prevState)}>XAbout</AboutLink>
    <StyledLink to={'/blog'}>Articles</StyledLink>
  </Nav>
)

const Nav = styled.nav`
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 1;
`

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  margin: 0 3rem;
  font-weight: 700;

  &:last-child {
    margin: 0;
  }
`

const AboutLink = styled.a`
  font-size: 1.8rem;
  color: white;
  text-decoration: none;
  margin: 0 3rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }

  &:last-child {
    margin: 0;
  }
`
