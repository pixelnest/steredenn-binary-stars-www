import {Fragment} from 'react'

// -------------------------------------------------------------
// Data.
// -------------------------------------------------------------

const YouTubeGamingData = {
  '@context': 'http://schema.org',
  '@type': 'VideoGame',
  name: 'Steredenn',
  description: [
    {
      '@language': 'en',
      '@value':
        'Steredenn is a roguelike-shmup video game for PC/Mac/Linux, Xbox One, PlayStation 4 and iPhone/iPad made by Pixelnest Studio.'
    },
    {
      '@language': 'fr',
      '@value':
        'Steredenn est un space shooter et un roguelike frénétique tout en gros pixels, pour PC/Mac/Linux, Xbox One, PlayStation 4 et iPhone/iPad.'
    }
  ],
  genre: ['Action', 'Shooter', "Shoot'em up", 'Roguelike'],
  url: 'http://steredenn.pixelnest.io/',
  image: 'http://steredenn.pixelnest.io/static/images/poster.png',
  screenshot: 'http://steredenn.pixelnest.io/static/images/background.png',
  gamePlatform: ['PC game', 'Xbox One', 'PlayStation 4', 'iOS'],
  applicationCategory: 'Game',
  operatingSystem: [
    'Windows',
    'macOS',
    'Linux',
    'Xbox One',
    'PlayStation 4',
    'iOS'
  ],
  author: {
    '@type': 'Organization',
    name: 'Pixelnest Studio',
    url: 'http://pixelnest.io'
  },
  sameAs: ['https://www.youtube.com/channel/UCfe6TF6qtk-xVekuKN3OZAQ'],
  trailer: {
    '@type': 'VideoObject',
    url: 'https://www.youtube.com/watch?v=EtXajayBLzw',
    inLanguage: 'en',
    name: 'Steredenn - Launch Trailer',
    description:
      'Steredenn is a roguelike-shmup video game for PC/Mac/Linux, Xbox One and PlayStation 4 made by Pixelnest Studio.',
    thumbnailUrl: 'http://steredenn.pixelnest.io/static/images/trailer-02.png',
    uploadDate: '2015-09-24'
  },
  exampleOfWork: [
    {
      '@type': 'VideoGame',
      gamePlatform: [
        'https://fr.wikipedia.org/wiki/PC',
        'https://en.wikipedia.org/wiki/OS_X',
        'https://en.wikipedia.org/wiki/Linux'
      ],
      contentRating: 'PEGI 7',
      applicationCategory: 'Game',
      operatingSystem: ['Windows', 'macOS', 'Linux'],
      releasedEvent: {
        '@type': 'PublicationEvent',
        startDate: '2015-10-01',
        location: {
          '@type': 'Place',
          name: 'WW'
        }
      }
    },
    {
      '@type': 'VideoGame',
      gamePlatform: ['http://en.wikipedia.org/wiki/Xbox_One'],
      contentRating: 'PEGI 7',
      applicationCategory: 'Game',
      operatingSystem: 'Xbox One',
      releasedEvent: {
        '@type': 'PublicationEvent',
        startDate: '2016-04-01',
        location: {
          '@type': 'Country',
          name: 'WW'
        }
      }
    },
    {
      '@type': 'VideoGame',
      gamePlatform: ['http://en.wikipedia.org/wiki/PlayStation_4'],
      contentRating: 'PEGI 7',
      applicationCategory: 'Game',
      operatingSystem: 'PlayStation 4',
      releasedEvent: {
        '@type': 'PublicationEvent',
        startDate: '2016-06-28',
        location: {
          '@type': 'Country',
          name: 'WW'
        }
      }
    },
    {
      '@type': 'VideoGame',
      gamePlatform: ['https://en.wikipedia.org/wiki/IOS'],
      contentRating: 'PEGI 7',
      applicationCategory: 'Game',
      operatingSystem: 'iOS',
      releasedEvent: {
        '@type': 'PublicationEvent',
        startDate: '2017-05-11',
        location: {
          '@type': 'Country',
          name: 'WW'
        }
      }
    }
  ]
}

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Description = () => {
  return (
    <Fragment>
      <meta name="author" content="Pixelnest Studio" />
      <meta
        name="description"
        content="Steredenn: Binary Stars, the ultimate Steredenn experience, a space shooter-roguelike by Pixelnest Studio."
      />
      <meta
        name="keywords"
        content="pixelnest, studio, damien, mayance, matthieu, oger, simon, coroller, plus, steredenn, shooter, big, pixels, game, roguelike, rogue, shmup, space, pirate, alien, spaceship, lemmi, videogame, binary, stars, expansion, ultimate"
      />
    </Fragment>
  )
}

const OpenGraph = () => {
  return (
    <Fragment>
      <meta property="og:title" content="Steredenn" />
      <meta property="og:site_name" content="Steredenn" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://steredenn.pixelnest.io" />
      <meta property="og:locale" content="en" />
      <meta
        property="og:description"
        content="Steredenn is a space shooter-roguelike video game made by Pixelnest Studio."
      />
      <meta
        property="og:image"
        content="http://steredenn.pixelnest.io/static/images/card.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:height" content="1920" />
      <meta property="og:image:width" content="1080" />
    </Fragment>
  )
}

const Twitter = () => {
  return (
    <Fragment>
      <meta name="twitter:title" content="Steredenn" />
      <meta
        name="twitter:description"
        content="Steredenn is a space shooter-roguelike video game made by Pixelnest Studio."
      />
      <meta name="twitter:card" content="photo" />
      <meta name="twitter:site" content="http://steredenn.pixelnest.io" />
      <meta name="twitter:creator" content="pixelnest" />
      <meta name="twitter:url" content="http://steredenn.pixelnest.io" />
      <meta
        name="twitter:image:src"
        content="http://steredenn.pixelnest.io/static/images/card.png"
      />
    </Fragment>
  )
}

const JsonLd = ({data}) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
  />
)

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Steredenn: Binary Stars</title>

      <link rel="shortcut icon" href="/static/favicon.ico?v=0003" />

      <link
        rel="alternate"
        type="application/rss+xml"
        href="http://steredenn-game.tumblr.com/rss"
      />

      <Description />
      <OpenGraph />
      <Twitter />
      <JsonLd data={YouTubeGamingData} />
    </Fragment>
  )
}
