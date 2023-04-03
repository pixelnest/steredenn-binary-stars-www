import Analytics from 'analytics'
import amplitudePlugin from '@analytics/amplitude'

import Router from 'next/router'

// Options: https://bit.ly/3dRdZnE
const analytics = Analytics({
  app: 'steredenn-www',
  plugins: [
    amplitudePlugin({
      apiKey: 'f4bdbe793ea506062c2b19689dc5dc50',
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
