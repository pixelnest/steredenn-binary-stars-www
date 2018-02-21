import {Fragment, Component} from 'react'
import Parallax from 'parallax-js'
import styled from 'styled-components'
import Link from 'next/link'

import {Aligner} from './Toolbox'

// -------------------------------------------------------------
// Parallax layers.
// -------------------------------------------------------------

const Layer = styled.div`
  position: absolute;
`

const SmallSunShadowLayer = Layer.extend`
  top: 130px !important;
  left: 155px !important;

  width: 279px;
  height: 279px;

  background: url('/static/images/parallax/small-shadow.png') no-repeat center;
`

const SmallSunLayer = Layer.extend`
  top: 150px !important;
  left: 200px !important;

  width: 212px;
  height: 238px;

  background: url('/static/images/parallax/small.png') no-repeat center;
`

const SmallSunLightLayer = Layer.extend`
  top: 180px !important;
  left: 200px !important;

  width: 193px;
  height: 193px;

  background: url('/static/images/parallax/small-light.png') no-repeat center;
`

const JunkLayer = Layer.extend`
  top: 150px !important;
  left: auto !important;
  right: 150px !important;

  width: 456px;
  height: 160px;

  background: url('/static/images/parallax/junk.png') no-repeat right;
`

const LogoShadowLayer = Layer.extend`
  left: 0;
  right: 0;

  height: 500px;

  background: url('/static/images/parallax/logo-shadow.png') no-repeat center;
`

const LogoLayer = Layer.extend`
  left: 0;
  right: 0;

  height: 500px;
`

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Scene = styled.div`
  max-width: 1500px;
  height: 520px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
  pointer-events: auto !important;
`

const Logo = styled.img`
  display: block;
  margin: auto;
  width: 350px;
  height: 350px;
`

// -------------------------------------------------------------
// Main Component.
// -------------------------------------------------------------

export default class ParallaxScene extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }

  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return (
      <Scene innerRef={el => (this.scene = el)}>
        <SmallSunShadowLayer data-depth="0.15" />
        <SmallSunLayer data-depth="0.125" />
        <SmallSunLightLayer data-depth="0.35" />
        <JunkLayer data-depth="0.015" />
        <LogoShadowLayer data-depth="0.3" />
        <LogoLayer data-depth="0.01">
          <Aligner>
            <Link href="/">
              <a>
                <Logo
                  src="/static/images/Logo.png"
                  title="Steredenn: Binary Stars"
                  alt="Steredenn: Binary Stars"
                />
              </a>
            </Link>
          </Aligner>
        </LogoLayer>
      </Scene>
    )
  }
}
