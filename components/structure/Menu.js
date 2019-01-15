import styled, {css} from 'styled-components'
import {rgba} from 'polished'
import Link from 'next/link'

import {Colors, Breakpoints} from '../../styles/values'

import IgnoreIfPath from '../IgnoreIfPath'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Menu = styled.section`
  text-align: ${props => (props.align ? props.align : 'left')};

  @media (max-width: ${Breakpoints.ShowVerticalNavigation}) {
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

  @media (max-width: ${Breakpoints.ShowVerticalNavigation}) {
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

  @media (max-width: ${Breakpoints.ShowVerticalNavigation}) {
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

const NormalLinkMenuItem = styled.li`
  padding: 1rem;
  font-size: 0.8em;
  text-transform: uppercase;

  @media (min-width: ${Breakpoints.ShowVerticalNavigation}) {
    max-width: 200px;
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
      <MenuTitle>About</MenuTitle>
      <ul>
        <MenuItem>
          <Link href="/faq">
            <a>What's new?</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/updates">
            <a>Changelogs</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/wallpapers">
            <a>Wallpapers</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <a href="http://pixelnest.io/presskit/steredenn-binary-stars/">
            Presskit
          </a>
        </MenuItem>
        <MenuItem>
          <a href="https://twitter.com/pixelnest/">Twitter</a>
        </MenuItem>
        <MenuItem>
          <a href="https://facebook.com/pixelneststudio/">Facebook</a>
        </MenuItem>
        <MenuItem>
          <a href="https://instagram.com/pixelneststudio/">Instagram</a>
        </MenuItem>
        <MenuItem>
          <a href="mailto:steredenn@pixelnest.io">Contact</a>
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
          <a href="https://www.nintendo.com/games/detail/steredenn-binary-stars-switch">
            Nintendo Switch<span>Binary Stars</span>
          </a>
        </MenuItem>
        <MenuItem color="#F1BD28" direction="right">
          <a href="http://store.steampowered.com/app/347160">
            Steam<span>Binary Stars</span>
          </a>
        </MenuItem>
        <MenuItem color="#49B4FF" direction="right">
          <a href="https://store.playstation.com/?resolve=EP1302-CUSA04998_00-STEREDENN0000PXN">
            PS4<span>Binary Stars</span>
          </a>
        </MenuItem>
        <MenuItem color="#98C73D" direction="right">
          <a href="https://www.microsoft.com/fr-fr/p/steredenn/c4ts3rk0kdrj">
            Xbox One<span>Binary Stars</span>
          </a>
        </MenuItem>
        <MenuItem color="#B06FCB" direction="right">
          <a href="https://itunes.apple.com/app/steredenn/id916957220">
            iPhone/iPad<span>Binary Stars</span>
          </a>
        </MenuItem>
      </ul>
    </Menu>
  )
}
