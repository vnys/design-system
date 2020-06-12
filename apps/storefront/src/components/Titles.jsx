import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@equinor/eds-core-react'
import styled from 'styled-components'

const StyledH1 = styled(Typography)`
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`
const StyledH2 = styled(Typography)`
  margin-top: 1em;
  margin-bottom: 0.67em;
`
const StyledH3 = styled(Typography)`
  margin-top: 1em;
  margin-bottom: 1em;
`
const StyledH4 = styled(Typography)`
  margin-top: 1.33em;
  margin-bottom: 1.33em;
`
const StyledH5 = styled(Typography)`
  margin-top: 1.67em;
  margin-bottom: 1.67em;
`
const StyledH6 = styled(Typography)`
  margin-top: 2.33em;
  margin-bottom: 2.33em;
`
export const H1 = ({ children }) => {
  return <StyledH1 variant="h1">{children}</StyledH1>
}
export const H2 = ({ children }) => {
  return <StyledH2 variant="h2">{children}</StyledH2>
}
export const H3 = ({ children }) => {
  return <StyledH3 variant="h3">{children}</StyledH3>
}
export const H4 = ({ children }) => {
  return <StyledH4 variant="h4">{children}</StyledH4>
}
export const H5 = ({ children }) => {
  return <StyledH5 variant="h4">{children}</StyledH5>
}
export const H6 = ({ children }) => {
  return <StyledH6 variant="h4">{children}</StyledH6>
}