import React, {Fragment} from 'react'

import Page from '../components/structure/Page'

import Markdown from '../components/Markdown'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <Markdown>{PrivacyPolicy}</Markdown>
    </Page>
  )
}

// -------------------------------------------------------------
// Data.
// -------------------------------------------------------------

const PrivacyPolicy = `# Privacy Policy

[Pixelnest Studio SARL](https://pixelnest.io/legal/) (also referred to as "we" or "us" in this document) is a French company creating video games, websites and apps. Steredenn is the sole property of Pixelnest Studio.

## Data collection

Pixelnest Studio does not collect any information when you play Steredenn, except for crashes.

## Crashes

If the game encounters a fatal error and is closed, the game's failure reason and system information (hardware and software) are sent to Unity's crash reporter (Unity is the game engine on which Steredenn is built). This is used by us to fix game issues.

Crash reports are anonymized. However, since the crash is sent to another server, the IP address and time will be contained within the request.

## Leaderboards and Scores

We don't transmit scores to external providers or our own servers.

We use the leaderboard system provided by the platform where the game is available. It means that:

- On iOS, we use Game Center.
- On Steam, we use Steam's leaderboards.
- On Xbox One, we use Microsoft's leaderboards.
- On PlayStation 4, we use Sony's leaderboards.
- On Nintendo Switch, we use Nintendo's leaderboards.
- On other platforms or distribution methods, scores are hosted locally on-device.

## Questions

If you have any question, [please contact us](steredenn@pixelnest.io).
`
