import React, {Fragment} from 'react'
import styled from 'styled-components'

import Page from '../components/structure/Page'

import Markdown from '../components/Markdown'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

export default () => {
  return (
    <Page>
      <Markdown>{CHANGELOG_2_0_0}</Markdown>
    </Page>
  )
}

// -------------------------------------------------------------
// Data.
// -------------------------------------------------------------

const CHANGELOG_2_0_0 = `
# Steredenn 2.0.0: Binary Stars

After a year of work, we are excited to release **Steredenn: Binary Stars**, the hugely improved and massively expanded version of Steredenn.

This changelog, as you might expect, is a big one. This update changes so many things that we thought it deserved the big number increase.

- **The leaderboards will be erased**. With the new scoring system and mechanics, it doesn't make sense to keep the current ones.

What's in this 2.0.0? The main highlights are:

- 5 playable ships with a new _special ability_ mechanic.
- Local 2-players co-op mode.
- And many more new and upgraded things. Read on for a detailed list.

It's a culmination of a ton of work from our part. This makes Steredenn an even better game: the experience has been enriched and diversified in many ways. I don't think we can really improve the game anymore (except for bugs — fixing bugs is a never-ending task like this game). Not in its current form anyways. ;)

Enough chit-chat, let's dive in!

---

## Changelog

A fair warning: this changelog is very exhaustive and contains **SPOILERS**. If you want a pure experience without knowing anything, don't read it. You have been warned. 😉

### Features

- 5 playable ships.
- Local 2-players co-op mode with special leaderboard.
- Boss rush mode. Face a pre-selected roaster of bosses, and beat them! You can try as many times as you want, and your score will go ina special leaderboard. This is a weekly challenge.
- Secret bosses. If you do a certain thing (Zhu Li, do the thing!), you will earn the privilege to fight against one of the secret bosses.
- New music tracks: Binary Stars, Supermassive, Star Devourers. [Listen on Bandcamp](https://zandernoriega.bandcamp.com/album/steredenn-binary-stars-original-game-soundtrack).
- Cargos can drop Medkits and Ultramedkits. This is rare, but it can save you from an ineluctable death.

#### Ships

- New ship: the "Tempest". This is actually the current existing ship — same speed, same health, same damages. Its special ability is to use a melee weapon as a third weapon. Taking a melee weapons has a **real value** now, without any handicap. Yes: you can have the cake and eat it!
- New ship: the "Fortress". It's slow, it does less damages, but can absorb many more hits. Its special ability is a rain of homing rockets. There's no subtlety here: just rush into the battlefield. Everything is gonna be fine, trust us.
- New ship: the "Fury". You got less health, but more damages. And this ship is fast! Its special ability is a teleport. Press the button, choose your target, and bam! You're there. If you quickly press the button, it will teleport a few light-years before you instantly. Because it's Steredenn, the teleportation is, obviously, **explosive**. If you teleport near an enemy ship, there's a good chance that you will wreck it.
- New ship: the "Specialist". The master of Bots. This ship is radically different from the previous ones. You can only use Bots. If you orbitate near them, they will become invincible, **so use them as a wall!** Its special ability is a Boosterbot and you can only have one at a time. This Bot changes the behavior of the other Bots under its aura. For example, a Gunbot will fire a huge number of bullets in a larger cone, but will deplete faster. A Bot under the influence of the Boosterbot is not necessarily better, but its new behavior can be used to handle different situations. This is key to the gameplay of the Specialist. Try everybot, with or without the booster, and you will understand.
- New ship: the "Red Baron". Like the Specialist, this ship is completely different. This time, you start the game with 4 abilities and that's all. No cargo, nothing else. The first ability is a spread gun to destroy light targets. The second ability is a huge laser. Yes, you read it right. A freaking huge laser!! This is your main weapon against medium targets. Finally, your last weapon is a grenade. You can charge it to launch it far away. The more you charge, the more damages it will deal. The last ability is not a weapon, but a Speed Boost. Move at an unparalled velocity and dodge everything, or re-deploy yourself quickly in better spots and fire at will!

#### Bosses

- 2 new bosses.
- New boss: "Cruiser MK-II".
- New boss: "Carrier MK-II".
- 6 new secret bosses.
- New secret boss: "Verdukul".
- New secret boss: "An Old Friend".
- New secret boss: "Garbage Collector".
- New secret boss: "Alien Threat".
- New secret boss: "SUPERCHABAL".
- New secret boss: "The Red Baron".

#### Weapons

- The "Bullet" category has now 11 weapons, 12 with the default.
- The "Energy" category has now 11 weapons, 12 with the default.
- The "Heavy" category has now 11 weapons, 12 with the default.
- The "Bot" category has now 10 weapons, 11 with the default, and 12 with the Boosterbot.
- New "Bullet" weapon: "Helixer".
- New "Bullet" weapon: "Hypershotgun". We had a shotgun. But no Hypershotgun. What a shame. This is fixed.
- New "Bullet" weapon: "Sniper". Check the cursor: if you target a special area of an enemy, you can demultiply the damages you'll give.
- New "Energy" weapon: "Fusion Blaster" (Fury's default weapon).
- New "Energy" weapon: "Fusion Hyperblaster".
- New "Energy" weapon: "Lightgun". A pulse of light rays.
- New "Energy" weapon: "Ultrabeam". Take the Ultralaser, apply the reverse effect and bam: the Ultrabeam. Focus on an enemy, don't release your fire and watch it get bigger overtime.
- New "Energy" weapon: "GLORYHAMMER". Faster than a laser bullet. 😎
- New "Heavy" weapon: "Fire Blaster" (Fortress' default weapon).
- New "Heavy" weapon: "Fire Hyperblaster". You might have understood now that we love the word Hyper?
- New "Heavy" weapon: "Frag Missiles". If your big girl/boy doesn't reach its target, it will destructure itself into many homing missiles.
- New "Heavy" weapon: "Lag Cannon". 😇
- New "Bot" weapon: "Blasterbot" (Specialist's default weapon). Combine the three other default weapons for a devastating effect.
- New "Bot" weapon: "Fusionbot".
- New "Bot" weapon: "Demuxbot".
- New "Bot" weapon: "Ninjabot". Trained in the dark art of stealth, your Ninjabots can conceal themselves into the Darkness of Space.
- New "Bot" weapon: "Drillerbot". With the Specialist, you can hold them and create a huge stack of mini-drills.
- New "Bot" weapon: "Laserbot".
- New "Melee" weapon: "Razorblade" (Tempest's default special ability). Tiny but handy.

#### Events

- 4 new events.
- New event: "Bumpers". A bumpy ride awaits you.
- New event: "Bulletmines". Okay, mines were great. A bulletmine? More laughter!
- New event: "Bulletstorm". At this point, a bulletstorm shouldn't surprise you, right?
- New event: "Quantum Asteroid Field". We thought the Asteroid Fields were too easy and we should add a variant that can teleport. Because we can. 😎

#### Upgrades

- Upgrades have a title and a description. This way, you can better understand the actual effect of an upgrade.
- 5 new upgrades.
- New upgrade: "Chain Reaction". When an enemy ship is destroyed, it creates a small shockwave. Which can trigger another shockwave.
- New upgrade: "Guardian Angel". Prevent death once per level. Basically, it gives you another HP when you should have died the first time it happens.
- New upgrade: "Heavy Armor". When you are hit by a bullet that does 3 (or more) damages, it reduces the amount you take by one.
- New upgrade: "Ancient Power". Create an electric damage aura around you in a small radius.
- New upgrade: "Next-Gen Special Ability". Boost your special ability. The effect depends on the ship you are using. The Tempest creates an additional shockwave when you use its melee weapon. The Fortress throws more missiles. The Fury deals damages before and after its teleportation. The Specialist can use two boosterbots, that gain the ability to mirror bots with a weaker ghost. The Red Baron becomes invulnerable for a few frames when using its Speed Boost, and throws mini-grenades with the bigger ones.
- Artefacts: 7 deadly game modifiers that change the flow of the game. They also increases the difficulty.

#### Misceallenous

- New scoring system. Like the old one, but simpler. There is no type of wave anymore. If you destroy all the ships, you gain one combo, if you take no damage, you gain one combo. That's all.
- Export your death gif (only on PC/Mac/Linux).
- Add 14 incredible space environments.
- Add 42 new waves.
- Rework the background of the main menu and first level. This environment is huge. Have some time to lose? Wait and watch the main title screen.
- Rework hyperspace animation. Smooth!
- Rework pause UI. Pretty!
- Update the tutorial with a special ability section.
- Add new achievements on Steam.
- Add new tips.
- Add toast when a weapon, mode or ship is unlocked.
- Animate rocks, mines and events a bit to make them more "alive".
- Easter egg. 😘
- Better cheat protection.
- Improve many parts of the UI.
- Add the ability to rebind all the controls and controllers.
- Overall polish and optimisations.

### Bug fixes/technical stuffs

- Improve japanese translation.
- Add traditional chinese translation.
- Add a progressive screenshakes on Shotgun and Hypershotgun. Add junks too.
- Make black overlays bigger to prevent a small 1px gap on the sides.
- Fix double collider explosions.
- Fix bot search animation bug.
- And many other bug fixes.

### Balance

- We checked many upgrades to make them better interact with other aspects of the game. We squashed some bugs or missing effects there aswell.
- Improve some enemies patterns in loops.
- Improve "Score" upgrades.
- Make later loops harder (5+). Why? The game wasn't scaling well enough past a certain number of loops. This was not interesting to watch or play.
- Balance some patterns (bosses or standard enemies).
- Balance "Reinforcements" upgrade.
- Balance all bots (life, contact, duration, ammunitions, etc.).
- Balance enemy shields mechanic. Before Binary Stars, shields were, most of the time, useless: you had a shield-breaking weapon, or the Shield Breaker upgrade, breaking them so quickly that you couldn't even see them. We reworked the shield in order to make them a real threat: even with the shield breaker or a shield-breaking weapon, they can represent a true danger.
- Balance the bonus of each event. They give way more points now. This reflects the fact that they make the game really more difficult and require a real reward if you can survive them.
- Balance Flamethrower. Still powerful, but a bit more restrained against certain types of enemies.
- Rework the Shockwave. The old Shockwave was not a bad weapon, but we were not happy with the feeling. We tried to keep what made the Shockwave a useful weapon, but this time, it's also fun to use.
- Rework the Stasisgun and Stasisbot. They are more Flamethrower-like now. And better. Because they were not.
- Rework the Lightsaber. The old one was ugly and the feeling was even worse. This time, you got a real lightsaber: quick, pretty and powerful. Throw back all the bullets!
- Rework melee weapon mechanic. It's more robust, but it changes the tempo quite a bit.
- Ultrawarrior achievement is extended to all ships.
- And many other balance tweaks.

---

Fiouu. I think this is it.

## Conclusion

We hope that Steredenn: Binary Stars will please you as much as we enjoyed creating this expansion. Whether you are a new player or an experienced one, we think that you will find enough new contents and features to motivate you to play the game, once again or for the first time.

Let's end with some statistics (from February 22nd, 2018):

- The "first" commit (that started Binary Stars) is dated to \`March 2, 2017\`. So, almost a full year.
- We made \`1954\` commits since this first commit.
- We made \`8891\` commits since the beginning of Steredenn. Before Binary Stars, we were at \`6937\` commits (\`+28%\`).
- We wrote \`63506\` lines of C# code. Before Binary Stars, we were at \`47339\` lines (\`+34%\`).
- We drew \`8813\` sprites. Before Binary Stars, we were at \`5761\` sprites (\`+52%\`).
- There's a total of \`40 667 664\` pixels in those sprites. Before Binary Stars, we were at \`31 341 674\` pixels (\`+29%\`). I can't get an exact calculation without the transparency, but this averages to **more than 8 millions non-transparent pixels**.
- We moved \`552\` cards in our Trello board, only for **Binary Stars**.
- We use \`Unity 2017.3\`. We started with \`Unity 4.3\`. This means many migrations throughout the lifetime of the game.
`
