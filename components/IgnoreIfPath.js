import {withRouter} from 'next/router'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default withRouter(props => {
  const {router, is: path, render} = props

  if (router.asPath.includes(path)) return null

  return props.render(props)
})
