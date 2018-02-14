import {Component} from 'react'
import Parallax from 'parallax-js'
import styled from 'styled-components'

import {Aligner} from './Toolbox'

// -------------------------------------------------------------
// Parallax layers.
// -------------------------------------------------------------

const Layer = styled.div`
  position: absolute;
  text-indent: -9999px;
`

const BackgroundLayer = Layer.extend`
  top: 0;

  height: 600px;

  background: url('/static/images/parallax/background.png') repeat-x top;
`

const BigSunLayer = Layer.extend`
  top: -1rem !important;

  width: 100%;
  height: 600px;

  background: url('/static/images/parallax/big.png') no-repeat center;
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
  right: 150px;

  height: 160px;

  background: url('/static/images/parallax/junk.png') no-repeat right;
`

const LogoShadowLayer = Layer.extend`
  left: 0;
  right: 0;

  height: 500px;

  background: url('/static/images/parallax/logo-shadow.png') no-repeat center;

  opacity: 0.75;
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
  height: 450px;
`

const Logo = styled.img`
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
        <BackgroundLayer data-depth="0.00" />

        <BigSunLayer data-depth="0.005" />

        <SmallSunShadowLayer data-depth="0.15" />
        <SmallSunLayer data-depth="0.15" />
        <SmallSunLightLayer data-depth="0.1" />

        <JunkLayer data-depth="0.015" />

        <LogoShadowLayer data-depth="0.5" />
        <LogoLayer data-depth="0.01">
          <Aligner>
            <Logo
              src="/static/images/Logo.png"
              title="Steredenn: Binary Stars"
              alt="Steredenn: Binary Stars"
            />
          </Aligner>
        </LogoLayer>
      </Scene>
    )
  }
}
