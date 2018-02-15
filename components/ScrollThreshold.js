import React, {Component, Fragment} from 'react'

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

// Simple HOC that allows us to find if a certain Y threshold on the page has been crossed.
// Useful to change a component position depending on where we are on the page.
export default function withScrollThreshold(WrappedComponent, threshold) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {hasScrolledPastThreshold: false}
    }

    handleScroll = e => {
      const hasScrolledPastThreshold = window.scrollY >= threshold
      this.setState({hasScrolledPastThreshold})
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
      return (
        <WrappedComponent
          scrolledPastThreshold={this.state.hasScrolledPastThreshold}
          {...this.props}
        />
      )
    }
  }
}
