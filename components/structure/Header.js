import styled from 'styled-components'

import ParallaxScene from '../ParallaxScene'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const ParallaxHeader = styled.header`
  position: relative;
`

const Catchphrase = styled.nav`
  position: absolute;
  top: 0;

  width: 100%;

  padding: 1.25rem;

  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0)
  );

  text-align: center;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <ParallaxHeader>
      <ParallaxScene />
      <Catchphrase>
        Steredenn: Binary Stars, the ultimate version of Steredenn, massively
        expanded, hugely improved
      </Catchphrase>
    </ParallaxHeader>
  )
}
