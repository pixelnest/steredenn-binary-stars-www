import Analytics from 'analytics'
import amplitudePlugin from '@analytics/amplitude'

import Router from 'next/router'

console.log(process.env.NODE_ENV)
const apiKey =
  process.env.NODE_ENV === 'production'
    ? 'd0312186d2f2a1ab437d022311a046d5'
    : 'b71a729a175ee4d976274d115fa4dc26'

// Options: https://bit.ly/3dRdZnE
const analytics = Analytics({
  app: 'steredenn-www',
  plugins: [
    amplitudePlugin({
      apiKey,
      options: {
        trackingOptions: {
          ip_address: false
        }
      }
    })
  ]
})

// Type = WEB | PRESS | SOCIAL | STORE | MAIL
export function trackExternal(externalName, type) {
  analytics.track('Click External', {
    Name: externalName,
    Type: type
  })
}

// Track current page (init)
analytics.page()

// Track new pages.
Router.events.on('routeChangeComplete', e => {
  analytics.page()
})

export default analytics
