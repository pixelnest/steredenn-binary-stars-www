import {Component} from 'react'
import Parallax from 'parallax-js'
import styled from 'styled-components'

import {Aligner} from './Toolbox'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Scene = styled.div`
  height: 450px;

  .layer-big-sun,
  .layer-big-halo,
  .layer-small-sun,
  .layer-small-halo,
  .layer-logo-shadow {
    position: absolute;
    text-indent: -9999px;
  }

  .layer-big-halo {
    top: 0;
    height: 600px;
    background: url('/static/images/parallax/background.png') repeat-x top;
  }

  .layer-big-sun {
    top: -1rem !important;
    width: 100%;
    height: 600px;
    background: url('/static/images/parallax/big.png') no-repeat center;
  }

  .layer-small-halo {
    top: 130px !important;
    left: 155px !important;
    width: 279px;
    height: 279px;
    background: url('/static/images/parallax/small-shadow.png') no-repeat center;
  }

  .layer-small-sun {
    top: 150px !important;
    left: 200px !important;
    width: 212px;
    height: 238px;
    background: url('/static/images/parallax/small.png') no-repeat center;
  }

  .layer-logo-shadow,
  .layer-logo-image {
    height: 500px;
  }

  .layer-logo-shadow {
    left: 0;
    right: 0;
    background: url('/static/images/parallax/logo-shadow.png') no-repeat center;
  }

  .layer-logo-image {
    left: 0;
    right: 0;
  }
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
    this.parallax = new Parallax(this.scene, {
      frictionX: 0.025,
      frictionY: 0.01,
      invertX: false
    })
  }

  componentWillUnmount() {
    this.parallax.disable()
  }

  render() {
    return (
      <Scene innerRef={el => (this.scene = el)}>
        <div className="layer-big-halo">Halo</div>
        <div className="layer-big-sun" data-depth="0.05">
          Sun
        </div>
        <div className="layer-small-halo" data-depth="0.25">
          Small Halo
        </div>
        <div className="layer-small-sun" data-depth="0.25">
          Small Sun
        </div>
        <div className="layer-logo-shadow" data-depth="0.95">
          Logo Shadow
        </div>
        <div className="layer-logo-image" data-depth="1.00">
          <Aligner>
            <Logo
              src="/static/images/Logo.png"
              title="Steredenn: Binary Stars"
              alt="Steredenn: Binary Stars"
            />
          </Aligner>
        </div>
      </Scene>
    )
  }
}
