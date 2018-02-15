import styled, {css} from 'styled-components'
import {rgba} from 'polished'

import {Colors, Breakpoints} from '../../styles/values'

import Link from '../Link'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Menu = styled.section`
  text-align: ${props => (props.align ? props.align : 'left')};

  @media (max-width: ${Breakpoints.Menu}) {
    padding: 0 2rem;
    text-align: center;

    ul {
      margin-bottom: 0;
    }

    li + li {
      margin-left: 1rem;
    }
  }
`

const MenuTitle = styled.h2`
  margin-bottom: 1rem;
  padding: 0 2rem;

  @media (max-width: ${Breakpoints.Menu}) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin-bottom: 1rem;
  font-size: 1.125em;
  text-transform: uppercase;
  line-height: normal;

  span {
    display: block;
    color: ${Colors.Whites};
    font-size: 0.75em;
  }

  a {
    display: block;
    padding: 1.3rem 2rem 1rem;

    background: ${props => createColoredGradient(props.color, props.direction)};
    transition: all 0.25s ease-out;
  }

  a:hover {
    ${props => getHoverPadding(props.direction)};

    background: ${props =>
      createColoredGradient(
        props.hoverColor ? props.hoverColor : props.color,
        props.direction,
        0.5
      )};
  }

  @media (max-width: ${Breakpoints.Menu}) {
    display: inline-block;

    a {
      background: ${props => createColor(props.color)};
    }

    a:hover {
      padding: 1.3rem 2rem 1rem; /* Overwrite the change of the larger design */
      background: ${props => createColor(props.color, 0.5)};
    }
  }
`

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

function getHoverPadding(direction) {
  if (direction === 'right') {
    return css`
      padding-right: 3rem;
    `
  } else {
    return css`
      padding-left: 3rem;
    `
  }
}

function createColor(color = 'black', force = 0.25) {
  return rgba(color, force)
}

function createColoredGradient(
  color = 'black',
  direction = 'left',
  force = 0.25
) {
  const first = rgba(color, 0)
  const last = rgba(color, force)

  return `linear-gradient(to ${direction}, ${first}, ${last});`
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export const SocialMenu = ({}) => {
  return (
    <Menu>
      <MenuTitle>Social</MenuTitle>
      <ul>
        <MenuItem>
          <Link url="mailto:steredenn@pixelnest.io">Contact</Link>
        </MenuItem>
        <MenuItem>
          <Link url="https://twitter.com/pixelnest/">Twitter</Link>
        </MenuItem>
        <MenuItem>
          <Link url="https://facebook.com/pixelneststudio/">Facebook</Link>
        </MenuItem>
        <MenuItem>
          <Link url="http://pixelnest.io/presskit/steredenn-binary-stars/">
            Presskit
          </Link>
        </MenuItem>
      </ul>
    </Menu>
  )
}

export const StoreMenu = ({}) => {
  return (
    <Menu align="right">
      <MenuTitle>Stores</MenuTitle>
      <ul>
        <MenuItem color="#C60518" direction="right">
          <Link url="#">
            Nintendo Switch<span>March 8th - Binary Stars</span>
          </Link>
        </MenuItem>
        <MenuItem color="#F1BD28" direction="right">
          <Link url="http://store.steampowered.com/app/347160">
            Steam<span>Classic</span>
          </Link>
        </MenuItem>
        <MenuItem color="#49B4FF" direction="right">
          <Link url="https://store.playstation.com/#!/steredenn/cid=EP1302-CUSA04998_00-STEREDENN0000PXN">
            PS4<span>Classic</span>
          </Link>
        </MenuItem>
        <MenuItem color="#98C73D" direction="right">
          <Link url="http://store.xbox.com/en-US/Xbox-One/Games/Steredenn/d31b7d58-a407-4c4a-84ec-3dab1911a0c7">
            Xbox One<span>Classic</span>
          </Link>
        </MenuItem>
        <MenuItem color="#B06FCB" direction="right">
          <Link url="https://itunes.apple.com/app/steredenn/id916957220">
            iPhone/iPad<span>Classic</span>
          </Link>
        </MenuItem>
      </ul>
    </Menu>
  )
}
