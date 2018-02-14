import styled from 'styled-components'
import {rgba} from 'polished'

import Link from '../Link'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Menu = styled.ul`
  text-align: ${props => (props.align ? props.align : 'left')};
`

const MenuTitle = styled.h2`
  margin-bottom: 1rem;
  padding: 0 2rem;
`

const MenuItem = styled.li`
  margin-bottom: 1rem;
  padding: 1.3rem 2rem 1rem;
  font-size: 1.125em;
  text-transform: uppercase;
  line-height: normal;
`

const SocialMenuItem = MenuItem.extend`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
`

const StoreMenuItem = MenuItem.extend`
  background: ${props =>
    createColoredGradient(props.color ? props.color : 'black')};
`

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

function createColoredGradient(color) {
  const first = rgba(color, 0)
  const last = rgba(color, 0.25)

  return `linear-gradient(to right, ${first}, ${last});`
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export const SocialMenu = ({}) => {
  return (
    <Menu>
      <MenuTitle>Social</MenuTitle>
      <ul>
        <SocialMenuItem>
          <Link url="mailto:steredenn@pixelnest.io">Contact</Link>
        </SocialMenuItem>
        <SocialMenuItem>
          <Link url="https://twitter.com/pixelnest/">Twitter</Link>
        </SocialMenuItem>
        <SocialMenuItem>
          <Link url="https://facebook.com/pixelneststudio/">Facebook</Link>
        </SocialMenuItem>
        <SocialMenuItem>
          <Link url="http://pixelnest.io/presskit/steredenn-binary-stars/">
            Presskit
          </Link>
        </SocialMenuItem>
      </ul>
    </Menu>
  )
}

export const StoreMenu = ({}) => {
  return (
    <Menu align="right">
      <MenuTitle>Stores</MenuTitle>
      <ul>
        <StoreMenuItem color="#C60518">
          <Link url="#">Nintendo Switch</Link>
        </StoreMenuItem>
        <StoreMenuItem color="#F1BD28">
          <Link url="http://store.steampowered.com/app/347160">Steam</Link>
        </StoreMenuItem>
        <StoreMenuItem color="#49B4FF">
          <Link url="https://store.playstation.com/#!/steredenn/cid=EP1302-CUSA04998_00-STEREDENN0000PXN">
            PS4
          </Link>
        </StoreMenuItem>
        <StoreMenuItem color="#98C73D">
          <Link url="http://store.xbox.com/en-US/Xbox-One/Games/Steredenn/d31b7d58-a407-4c4a-84ec-3dab1911a0c7">
            Xbox One
          </Link>
        </StoreMenuItem>
        <StoreMenuItem color="#B06FCB">
          <Link url="https://itunes.apple.com/app/steredenn/id916957220">
            iPhone/iPad
          </Link>
        </StoreMenuItem>
      </ul>
    </Menu>
  )
}
