import styled from 'styled-components'
import {BigAward, SmallAward} from './Awards'

// -------------------------------------------------------------
// Styled.
// -------------------------------------------------------------

const Container = styled.div`
  margin-bottom: 6rem;
`

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default function AwardsContainer() {
  return (
    <Container>
      <Line>
        <BigAward
          image="/static/images/awards/award-ta.png"
          site="TouchArcade"
          url="http://toucharcade.com/2017/05/12/toucharcade-game-of-the-week-steredenn/"
        />
        <BigAward
          image="/static/images/awards/award-jv.png"
          site="jeuxvideo.com"
          url="http://www.jeuxvideo.com/test/445407/stederenn-un-shooter-rogue-like-explosif.htm"
          mainAward
        />
        <BigAward
          image="/static/images/awards/award-pg.png"
          site="Pocket Gamer"
          url="http://www.pocketgamer.co.uk/r/iPad/Steredenn/review.asp?c=73946&srch=steredenn"
        />
      </Line>
      <Line>
        <SmallAward
          rating="5/5"
          site="Extralife"
          url="http://www.extralife.fr/test-jv/5285/steredenn-ils-ont-des-shmups-mignons-vive-les-bretons.html"
        />
        <SmallAward
          rating="9/10"
          site="Pocket Gamer"
          url="http://www.pocketgamer.co.uk/r/iPad/Steredenn/review.asp?c=73946&srch=steredenn"
        />
        <SmallAward
          rating="5/5"
          site="TouchArcade"
          url="http://toucharcade.com/2017/05/22/steredenn-review-horns-out-for-this-roguelike-shoot-em-up/"
        />
        <SmallAward
          rating="15/20"
          site="jeuxvideo.com"
          url="http://www.jeuxvideo.com/test/445407/stederenn-un-shooter-rogue-like-explosif.htm"
        />
        <SmallAward
          rating="8/10"
          site="CanardPC"
          url="https://boutique.pressenonstop.com/anciens-numeros/voir/canard-pc-326-443"
        />
      </Line>
      <Line>
        <SmallAward
          rating="8/10"
          site="JournalDuGamer"
          url="http://www.journaldugamer.com/tests/test-steredenn/2/"
        />
        <SmallAward
          rating="8/10"
          site="Spaziogames"
          url="http://www.spaziogames.it/recensioni_videogiochi/console_pc/18421/steredenn.aspx"
        />
        <SmallAward
          rating="88%"
          site="Steam"
          url="http://store.steampowered.com/app/347160/Steredenn/"
        />
        <SmallAward
          rating="4.5/5"
          site="Windows Central"
          url="http://www.windowscentral.com/steredenn-retro-take-saving-galaxy-space-pirates/"
        />
        <SmallAward
          rating="9/10"
          site="Epicreviews"
          url="http://www.epic-reviews.ml/steredenn-review/"
        />
      </Line>
    </Container>
  )
}
