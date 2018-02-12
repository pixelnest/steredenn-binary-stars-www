import styled from 'styled-components'
import {rgba} from 'polished'

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;

  color: white;
  background: ${rgba('black', 0.5)};
`

export default () => {
  return (
    <header>
      <Navigation>Steredenn Binary Stars</Navigation>
      <div>
        <div>Sun</div>
        <div>Small Sun</div>
        <div>Logo</div>
      </div>
    </header>
  )
}
