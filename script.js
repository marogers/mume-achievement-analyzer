const staticAchievements = [
  "You have explored the depths of the ancient dwarven tomb, Amon Othar.",
  "You have seen the dwarven burial chambers underneath the mystical stone ring.",
  "You have found your way through the spider-infested tunnels of Theddin's mines.",
  "You have proven yourself worthy to learn how to prepare Nordri's soothing-draught potion.",
  "You returned Thror's remains, once lost in Khazad-dûm, to Thorin.",
  "You provided just the right kind of wood to Vig the smelter.",
  "You have been cocooned.",
  "You brought the antlers of the noble stag to an elven trapper.",
  "You fetched some dark-green moss to a dwarven dye-maker.",
  "You fetched a jug of dye, formula no. 58 (forest green), to an elven weaver.",
  "You have delivered many letters from and to Aldereon, and learned the secret of preparing walking potions.",
  "You have received the key to an ancient dwarven home near Grey Havens.",
  "You have successfully returned the stolen barrel of wine to the elven chief.",
  "You have sailed the Straight Road and set foot on the Undying Lands.",
  "You have extracted matter from the Ainulindalė, and created your focus.",
  "You have helped Filatior to destroy evil beings.",
  "You travelled all the way to Bree and found Maelton's cousin.",
  "You aided the blacksmith's apprentice in Black Hill village by bringing him ore.",
  "You delivered iron rails to a Black Hill miner, helping him complete his railing project.",
  "You aided the hunter in the Tower Hills with his slithering snake problem.",
  "You aided Black Hill village and the hunter by cleaning out a rat infestation.",
  "You aided a hunter in keeping the bandits of the Tower Hills at bay.",
  "You aided Leonard in following his dream to become an adventurer.",
  "You climbed to high heights.",
  "You swam in murky water.",
  "You helped the pony breeder in the Tower Hills with his wolf problem.",
  "You aided the herbalist in Black Hill village by bringing him three rare plants.",
  "You found Ellie's doll and returned it to her.",
  "You have looked in the palantir of Elostirion.",
  "You befriended the lonely giant and visited his home in the Hills of Faraway.",
  "You found the lost daughter of a Shire shopkeeper and brought her home safely.",
  "You have escorted Harle all the way from the Shire to the depths of Fangorn, to bring the evidence about the entwives to Treebeard.",
  "You battled the great black wolves during the fell winter.",
  "You helped the old tanner of the Woody End create four varieties of leather for a total of four pieces.", // **********fix
  "You slew a festive hobbit in the Shire and cancelled his party.",
  "You helped the plump hobbit female learn how to bake dumplings!",
  "You have discovered a buried treasure.",
  "You recovered the antique dagger sought by the Bree weaponsmith.",
  "You travelled far and wide to prove yourself worthy to the Dúnadan ranger.",
  "You have dealt with the worst robbers of Fornost and visited their secret hide-out.",
  "Hey dol! Merry dol! Ring a dong dillo! Tom Bombadil has rescued you from the troubles.",
  "Boldly and stupidly, you drank an aging potion prepared by the dubious alchemist of Fornost.",
  "You have aided Angrim's ghost in fulfilling his oath.",
  "You warned the Fornost barman to be wary of the crooked wine merchant.",
  "You have helped the baker in Bree by delivering him meat for his meat pies.",
  "You helped the Bree-land by putting down a troublesome boar.",
  "You sought out and killed the leader of a dangerous pack of wolves.",
  "You aided the Bree-land by killing a wounded, and dangerous bear.",
  "You assisted the Bree tanner in creating a fur cloak with a silvery streak.",
  "The skilled fletcher in Bree gave me a quiver of leaf-shaped arrows.",
  "You were nice to Clint the Dwarf and recovered his axe.",
  "You delivered to Elrond a letter from his scouts with important information about the movements of orc forces.",
  "You have returned the lost tome to Quenaire.",
  "You rescued a Stoor hobbit from the slave pit in the troll warrens and helped him get home.",
  "You braved darkness by unravelling the secrets of the orkish battle-standard.",
  "You returned a precious heirloom of the Golden Wood to the elven trader.",
  "You have unlocked four ornate elven chests and discovered all four different locations.",
  "You frantically dug around in the snow of the Misty Mountains.",
  "You were given the huge shovel by Khuzur the Olog-hai.",
  "You reminded the goblins of the Misty Mountains to obey the Lord of Dol Guldur.",
  "You rescued Duinhir of Blackroot Vale from captivity in a troll cave.",
  "You brought the cold remnants of a whiteskin to the orkish loremaster, and got a powerful horn as reward.",
  "You intercepted an important letter for Elrond from his scouts and delivered it to the Great Goblin.",
  "You brought Bulgōtha a scalp of an enemy of the Zaugurz.",
  "You paid Eoghha for his services to find smoke among the Misty Mountains.",
  "You retrieved the diary of Amanrandil's emissary, who perished on the way from Isengard.",
  "You brought Haldin the Marshal the spear of the Dunlending chieftain Broghha.",
  "Following the thief's advice, you found the lost key in Tharbad, and managed to enter to the attic above the warehouse.",
  "You have forged a jewelled ring.",
  "You helped the dwarven overseer of Eregion craft a massive dwarven waraxe.",
  "You killed Osbert and avenged the sister of the Tharbad Illusionist.",
  "You found and returned the lost bowl of Beechbone the Ent.",
  "You have awakened a drowsy ent in Fangorn, and learned how to prepare a potion to cure the flu.",
  "You helped an Ent by removing an orc axe from its back.",
  "You have aided Treebeard in cleansing Fangorn.",
  "You obtained a new wood axe for woodcutter Jeraton, so that he can make a living.",
  "You chased the white stag till the end of his run through the woods of Lorien.",
  "You found a misty hithlain plant and brought it to Cirel.",
  "You freed the spirit of Dagnir the Man.",
  "You returned to the ghost of Enidale the ring of his people.",
  "You helped Anarwen to release the evil spirit that had crept under the roots of the Golden Wood.",
  "You have acquired a fixed leaf-shaped key, made of shimmering metal. It must be important!",
  "You have rescued Annariel Tingliwinde from captivity.",
  "You have been granted an annual entrance to Lorien.",
  "You brought an orkish bow to Taurion, who put the soul of the dead tree to rest.",
  "You have been drawn into the dark haze of Galadriel's mirror. There, you fought your way through the forest area and battled the undead in the Citadel's keep.",
  "You helped the Coubhel solve the mystery of the man sneaking around Lórien's borders.",
  "You assisted Offa the scout in dispatching the Lórien elf who was stalking him.",
  "You gave X items from the enemy to Lazrria that were found in the vicinity.", // **********fix
  "You avenged the death of Narv the Beorning's wife and returned her ring to him.",
  "You recovered Buttercup, the favourite cow of Beorning farmer Ocher.",
  "You retrieved the dagger lost by one of Elrond's scouts in a goblin attack near the Anduin.",
  "You rescued the twins of an Anduin Vale farmer from the Numenorean sorcerer Nagash.",
  "You contributed the Seeing Stone of Amon-Sul to the library of Azra-Zaira.",
  "You helped Niuldor the botanist to prepare a cure disease potion.",
  "You assisted Beorn in defeating the warg riders of Anduin Vale.",
  "You fixed the old hobbit mill on the hillside near Honburg.",
  "You have brought black powder to the Old Hag of Ingrove, and for whatever reason received a love potion as the payment.",
  "You brought a sacrificial goblet to the Nśmenórean sorcerer Nagash.",
  "You slew the spider Frychra in her lair, deep in the forest of Mirkwood.",
  "You brought Oakscar the gnarled ent the objects he desired.",
  "You rescued a wood elf from the lair of Rahku.",
  "Rahku the Mountain Troll accepted to teach you how to climb like a spider!",
  "You've slain all of the Durbūk-hai commanders in Emyn-nu-Fuin.",
  "You found Gwathion's lost equipment.",
  "You killed Vurgl and brought his severed head to Kral.",
  "You have slain Durin's Bane, the Balrog of Moria!",
  "You have ventured into the deepest depths of Moria.",
  "You have found and read the magical runes etched on the west gate of Moria.",
  "You lent a hand to the sad troll mother.",
  "You earned Adrāgor's trust and became a valued ally of the Morgundul.",
  "You provided Dolion with evidence that the druidess, Silwiel, had become corrupted.",
  "You have taken the dark oath and succumbed to the Dark Lord.",
  "You have saved someone from certain death by tending their wounds.",
  "You have reached the highest level that one can achieve as a mortal.",
  "Through fortune and decisive action, you improved a herbal kit.",
  "You have had your lockpicks upgraded.",
  "You have visited all of the known world!",
  "You called mighty creatures to fly you long distances at great speed.",
  "You have swum around under water.",
  "You entered an underground passageway, gashed with marks from a huge shovel.",
  "You entered a hastily hollowed-out burrow that was carved from a hillside.",
]
const dynamicAchievements = []

const towers = [
  "defended the Dunland Outpost",
  "defended the fortress at the Last Bridge",
  "defended the Dark Tower in the Misty Mountains",
  "defended the Tower on the Ancient Broken Road",
  "defended the tower above the troll warrens",
  "defended the Hidden Outpost near the Ford of Bruinen",
  "defended the outpost in the Vale of Anduin",
  "defended the camp along the Ancient Broken Road",
  "defended the Lórien Outpost on the bank of the River Anduin",
  "defended the old fortress in the Anduin Vale",
]
// [
//   {
//     "desc": "defended the Dunland Outpost",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the fortress at the Last Bridge",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the Dark Tower in the Misty Mountains",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the Tower on the Ancient Broken Road",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz'],
//     "achieveable": false,
//   },
//   {
//     "desc": "defended the tower above the troll warrens",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the Hidden Outpost near the Ford of Bruinen",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the outpost in the Vale of Anduin",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the camp along the Ancient Broken Road",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the Lórien Outpost on the bank of the River Anduin",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "defended the old fortress in the Anduin Vale",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   }
// ]

const travel = [
  "You went between Fornost and Tharbad",
  "You went between the Grey Havens and Rivendell",
  "You walked between Goblin Town and Moria",
  "You went between the Troll Warrens and the Morgundul Encampment",
]
// [
//   {
//     "desc": "You went between Fornost and Tharbad",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "You went between the Grey Havens and Rivendell",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "You walked between Goblin Town and Moria",
//     "races": ['bn', 'morruhk', 'tarkhnarb', 'troll']
//   },
//   {
//     "desc": "You went between the Troll Warrens and the Morgundul Encampment",
//     "races": ['bn', 'morruhk', 'tarkhnarb', 'troll']
//   }
// ]

const herblore = [
  "You have started learning about mixing potions.",
  "You have some knowledge in making potions.",
  "You are experienced in mixing herbs into potions.",
  "You are very experienced in mixing potions.",
  "You are a master potionmaker.",
]
// [
//   {
//     "desc": "You have started learning about mixing potions.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You have some knowledge in making potions.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are experienced in mixing herbs into potions.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are very experienced in mixing potions.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are a master potionmaker.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   }
// ]
const casserole = [
  "You have tried cooking with a casserole.",
  "You are somewhat experienced with cooking with a casserole.",
]
// [
//   {
//     "desc": "You have tried cooking with a casserole.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are somewhat experienced with cooking with a casserole.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   }
// ]
const harp = [
  "Whatever you do with the harp, it has nothing to do with music.",
  "You are able to play slow and easy melodies on the harp.",
  "Advanced melodies flow from the harp when you play it.",
  "When you play the harp, Arda is filled with unearthly beautiful music.",
]
// [
//   {
//     "desc": "Whatever you do with the harp, it has nothing to do with music.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "You are able to play slow and easy melodies on the harp.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "Advanced melodies flow from the harp when you play it.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "When you play the harp, Arda is filled with unearthly beautiful music.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   }
// ]
const milking = [
  "You have barely started learning how to milk animals.",
  "You have some basic knowledge in milking techniques.",
  "You have some experience in proper milking techniques.",
  "You are a master milker and would make any farmer proud.",
]
// [
//   {
//     "desc": "You have barely started learning how to milk animals.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You have some basic knowledge in milking techniques.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You have some experience in proper milking techniques.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are a master milker and would make any farmer proud.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   }
// ]
const levels = [
  "You are a novice of little ability or renown.",
  "You have become a champion, known for conquering many obstacles.",
  "Your fame is growing, and you are now a hero with access to a title.",
  "You became legendary among your kind, renowned for your deeds.",
  "You became a Maia, known as a board reader.",
  "You became a Maia who described a zone.",
]
// [
//   {
//     "desc": "You are a novice of little ability or renown.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You have become a champion, known for conquering many obstacles.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "Your fame is growing, and you are now a hero with access to a title.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You became legendary among your kind, renowned for your deeds.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You became a Maia, known as a board reader.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   },
//   {
//     "desc": "You became a Maia who described a zone.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man']
//   }
// ]
const mining = [ // TODO
  "You have mined for the first time!",
  "You have some basic knowledge in the mining lore of your forefathers.",
  "You are an expert miner. Any dwarf would be proud to call you friend.",  // (Dwarves)
  "You are an expert miner.",                                               // (Everyone, but dwarves)
]
// [
//   {
//     "desc": "You have mined for the first time!",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You have some basic knowledge in the mining lore of your forefathers.",
//     "races": ['elf', 'dwarf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   },
//   {
//     "desc": "You are an expert miner. Any dwarf would be proud to call you friend.",
//     "races": ['Dwarf']
//   },
//   {
//     "desc": "You are an expert miner.",
//     "races": ['elf', 'half-elf', 'hobbit', 'man', 'bn', 'morruhk', 'tarkhnarb', 'troll', 'zaugurz']
//   }
// ]
const tieredAchievements = [
  herblore,
  casserole,
  harp,
  milking,
  levels,
]


function compare() {
  const userAchievements = document.getElementById("achievements").value.split("\n")
  const userHas = []
  const missing = []
  const totalAchievements = staticAchievements.length
    + tieredAchievements.length
    + towers.length
    + 1 // Blackjack

  for (const achievement of staticAchievements) {
    if (userAchievements.includes(achievement)) {
      userHas.push(achievement)
    } else {
      missing.push(achievement)
    }
  }

  const hasTowers = []
  const hasBlackjack = false
  const hasTravel = []
  for (const userAchievement of userAchievements) {
    // Blackjack
    if (userAchievement.includes("blackjack hands")) {
      userHas.push(userAchievement)
      hasBlackjack = true
    }
    
    // Towers / Conquerer
    for (const tower of towers) {
      if (userAchievement.includes(tower)) {
        userHas.push(userAchievement)
        hasTowers.push(tower)
        break
      }
    }

    // Travel
    for (const route of travel) {
      if (userAchievement.includes(route)) {
        userHas.push(userAchievement)
        hasTravel.push(route)
        break
      }
    }
  }

  // Conditionally add blackjack to missing array
  if (!hasBlackjack) {
    missing.push("Played blackjack.")
  }

  // Add missing towers
  for (const tower of towers) {
    if (!hasTowers.includes(tower)) {
      missing.push(tower.charAt(0).toUpperCase() + tower.slice(1) + ".")
    }
  }

  // Add missing travel routes
  for (const route of travel) {
    if (!hasTravel.includes(route)) {
      missing.push(route + ".")
    }
  }

  // Achievements with multiple levels
  for (const tieredAchievementList of tieredAchievements) {
    let foundAchievementInTier = false
    for (const tieredAchievement of tieredAchievementList) {
      if (userAchievements.includes(tieredAchievement)) {
        userHas.push(tieredAchievement)
        foundAchievementInTier = true

        // Check if still missing a higher tier in the achievement
        // If so, push the next achievement in the list
        if (tieredAchievementList.indexOf(tieredAchievement) < tieredAchievementList.length - 1) {
          missing.push(tieredAchievementList[tieredAchievementList.indexOf(tieredAchievement) + 1])
        }
        break
      }
    }

    // If no achievement found in the tier, add the first entry to the missing set
    if (!foundAchievementInTier) {
      missing.push(tieredAchievementList[0])
    }
  }

  const achievementFraction = "(" + userHas.length + "/" + totalAchievements + ")"
  const missingFraction = "(" + missing.length + "/" + totalAchievements + ")"

  let results = ""
  if (userHas.length) {
    results += "<h2>You have achieved " + achievementFraction + ":</h2>"
    for (const achievement of userHas) {
      results += achievement + "</br>"
    }
  } else {
    results += "<p>You haven't achieved any of the listed achievements.</p>"
  }

  if (missing.length) {
    results += "<h2>Missing achievements " + missingFraction + ":</h2>"
    for (const achievement of missing) {
      results += achievement + "</br>"
    }
  }

  const resultsElement = document.getElementById("results")
  resultsElement.style.display = ""
  resultsElement.innerHTML = results
}
