import React, {Fragment} from 'react'
import styled from 'styled-components'
import {rgba} from 'polished'
import html2canvas from 'html2canvas'

import {Colors, Breakpoints} from '../styles/values'

import Page from '../components/structure/Page'

import content from '../content/progress'

// -------------------------------------------------------------
// Image Renderer Components.
// -------------------------------------------------------------

const ExportButton = styled.a`
  display: block;
  padding: 2rem 0;
  text-align: right;
  text-transform: uppercase;
`

const ShareImageContainer = styled.section`
  padding-top: 8rem;
  text-align: center;

  img {
    max-width: 75%;
  }
`

class ImageRenderer extends React.Component {
  constructor() {
    super()
    this.state = {image: null}
  }

  handleClick = e => {
    e.preventDefault()
    e.stopPropagation()

    const el = document.getElementById(this.props.target)
    const opts = {
      backgroundColor: 'black'
    }

    html2canvas(el, opts).then(canvas => {
      const image = canvas.toDataURL('image/png')
      this.setState({image})
    })
  }

  render() {
    return (
      <div>
        <ExportButton href="#" onClick={this.handleClick}>
          Create Image
        </ExportButton>

        {this.state.image && (
          <ShareImageContainer>
            <h3>Share image</h3>
            <img
              src={this.state.image}
              alt="Steredenn: Binary Stars Platforms Progress Status"
              title="Steredenn: Binary Stars Platforms Progress Status"
            />
          </ShareImageContainer>
        )}
      </div>
    )
  }
}

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

const StatusBar = ({text, color}) => {
  return <span style={{color: color || 'white'}}>{text}</span>
}

const Platform = ({name, progress, text, color}) => {
  return (
    <tr>
      <NameCell>{name}</NameCell>
      <ProgressCell>
        <ProgressBar x={progress} />
      </ProgressCell>
      <StatusCell>
        <StatusBar text={text} color={color} />
      </StatusCell>
    </tr>
  )
}

// -------------------------------------------------------------
// Helpers.
// -------------------------------------------------------------

function isBigger(a, b) {
  return a - b
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
      <Wrapper id="progress">
        <Title>Steredenn: Binary Stars</Title>
        <SubTitle>Platforms Progress Status</SubTitle>
        <ProgressTable>
          <tbody>{sorted.map(x => <Platform key={x.name} {...x} />)}</tbody>
        </ProgressTable>
      </Wrapper>

      <ImageRenderer target="progress" />
    </Page>
  )
}
