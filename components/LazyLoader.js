import React, {Component, Fragment} from 'react'

// -------------------------------------------------------------
// Helpers.
// -------------------------------------------------------------

// Adapted from https://css-tricks.com/snippets/javascript/lazy-loading-images/
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

// Uses a render prop to pass the state.
// Can't use an HOC here, because we need the ref to the DOM element.
export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldLoad: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.removeListener()
  }

  removeListener() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (isElementInViewport(this.element)) {
      this.setState({shouldLoad: true})
      this.removeListener()
    }
  }

  render() {
    return (
      <div ref={x => (this.element = x)}>
        {this.props.render(this.state.shouldLoad)}
      </div>
    )
  }
}
