import React, {Fragment} from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'

import {Colors, Breakpoints} from '../styles/values'

import Page from '../components/structure/Page'

import content from '../content/progress'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Wrapper = styled.section`
  padding: 4rem;
  background: ${rgba('black', 0.25)};
  border: 1px solid ${rgba(Colors.Brand, 0.5)};
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 0;
`

const SubTitle = styled.h3`
  color: ${Colors.BrandLight};
  margin-bottom: 4rem;
`

const ProgressTable = styled.table`
  margin: 0 auto;
  text-transform: uppercase;

  @media (max-width: ${Breakpoints.ProgressTwoLines}) {
    display: block;

    tbody,
    tr,
    td {
      display: block;
    }

    tr:not(:last-of-type) {
      margin-bottom: 4rem;
    }

    td {
      padding: initial;
      text-align: center;
    }
  }
`

// Cells.

const NameCell = styled.td`
  padding-right: 2rem;
  text-align: right;

  @media (max-width: ${Breakpoints.ProgressHideIndicator}) {
    padding-right: 1rem;
  }

  @media (max-width: ${Breakpoints.ProgressTwoLines}) {
    color: ${Colors.Midtones};
  }
`

const ProgressCell = styled.td`
  min-width: 85px;
  text-align: center;

  @media (max-width: ${Breakpoints.ProgressHideIndicator}) {
    display: none;
  }
`

const StatusCell = styled.td`
  padding-left: 2rem;
  text-align: left;

  @media (max-width: ${Breakpoints.ProgressHideIndicator}) {
    padding-left: 1rem;
  }
`

// Logic.

const ProgressBar = ({x}) => {
  const steps = Math.round(x * 10)
  const indicator = repeat('-', steps)

  const rest = repeat('-', 10 - indicator.length)

  return (
    <Fragment>
      <span style={{color: Colors.Brand}}>{indicator}</span>
      <span style={{opacity: 0.25}}>{rest}</span>
    </Fragment>
  )
}

const StatusBar = ({x}) => {
  const Item = ({color = 'white', children}) => (
    <span style={{color: color}}>{children}</span>
  )

  if (x >= 1) return <Item color={Colors.Brand}>Released</Item>
  if (x >= 0.75) return <Item color="#01A1ED">Patch ready</Item>
  if (x >= 0.5) return <Item>Patch in review</Item>
  if (x >= 0.25) return <Item>Patch in dev</Item>

  return <Item color="#FF5757">Not started</Item>
}

const Platform = ({name, progress}) => {
  return (
    <tr>
      <NameCell>{name}</NameCell>
      <ProgressCell>
        <ProgressBar x={progress} />
      </ProgressCell>
      <StatusCell>
        <StatusBar x={progress} />
      </StatusCell>
    </tr>
  )
}

// -------------------------------------------------------------
// Helpers.
// -------------------------------------------------------------

function isBigger(a, b) {
  return a > b
}

function repeat(w, x) {
  return Array(x + 1).join(w + '')
}

// -------------------------------------------------------------
// Page.
// -------------------------------------------------------------

export default () => {
  const sorted = content.sort(isBigger)

  return (
    <Page>
      <Wrapper>
        <Title>Steredenn: Binary Stars</Title>
        <SubTitle>Platforms Progress Status</SubTitle>
        <ProgressTable>
          <tbody>{sorted.map(x => <Platform key={x.name} {...x} />)}</tbody>
        </ProgressTable>
      </Wrapper>
    </Page>
  )
}
