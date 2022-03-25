const abils = [
  {
    name: "adaptability",
    description: "Increases the power of moves of the same type as the Pokemon by 100%. (STAB bonus is 2x instead of 1.5x.)",
  },
  {
    name: "aerilate",
    description:
      "The Pokemon's Normal-type moves become Flying-type moves. The power of those moves is boosted by 20% and the Pokemon gets STAB from them as well. (Overall power increase of 80%.) ",
  },
  {
    name: "aftermath",
    description:
      "Damages the attacker for 1/4th of their maximum HP if their attack makes contact and knocks the Pokemon out. ",
  },
  { name: "air lock", description: "Eliminates the effects of weather." },
  {
    name: "analytic",
    description: "Boosts move power by 30% when the Pokémon moves last. ",
  },
  {
    name: "anger point",
    description:
      "The Pokémon is angered when it takes a critical hit, and that maxes its Attack stat. ",
  },
  {
    name: "anticipation",
    description:
      "The Pokémon can sense an opposing Pokémon's dangerous moves. ",
  },
  {
    name: "arena trap",
    description: "Prevents opposing Pokémon from fleeing. ",
  },
  {
    name: "aroma veil",
    description:
      "Protects itself and its allies from attacks and abilities that limit their move choices. (Taunt, Torment, Encore, Disable, Cursed Body, Heal Block, and infatuation.)",
  },
  {
    name: "aura break",
    description:
      "The effects of Aura Abilities are reversed to lower the power of affected moves. (Fairy-type and Dark-type moves' power is decreased by 25%.) Mold Breaker, Teravolt, and Turboblaze do not counter this ability.",
  },
  {
    name: "bad dreams",
    description: "Reduces the HP of sleeping opposing Pokémon by 1/8th of their maximum HP each turn. ",
  },
  {
    name: "ball fetch",
    description:
      "If the Pokémon is not holding an item, it will fetch the Poké Ball from the first failed throw of the battle. ",
  },
  { name: "battery", description: "Powers up ally Pokémon's special moves by 30%. " },
  {
    name: "battle armor",
    description: "Hard armor protects the Pokémon from critical hits. ",
  },
  {
    name: "battle bond",
    description:
      "Defeating an opposing Pokémon strengthens the Pokémon's bond with its Trainer, and it becomes Ash-Greninja. Water Shuriken gets more powerful.",
  },
  {
    name: "beast boost",
    description:
      "The Pokémon boosts its most proficient stat by one stage each time it knocks out a Pokémon. ",
  },
  {
    name: "berserk",
    description:
      "Boosts the Pokémon's Sp. Atk stat by one stage when it takes a hit that causes its HP to become half or less. ",
  },
  {
    name: "big pecks",
    description: "Protects the Pokémon from Defense-lowering effects. ",
  },
  {
    name: "blaze",
    description: "Powers up Fire-type moves by 50% when the Pokémon's HP is low. ",
  },
  {
    name: "bulletproof",
    description: "Protects the Pokémon from some ball and bomb moves. (Acid Spray, Aura Sphere, Barrage, Beak Blast, Bullet Seed, Egg Bomb, Electro Ball, Energy Ball, Focus Blast, Gyro Ball, Ice Ball, Magnet Bomb, Mist Ball, Mud Bomb, Octazooka, Pollen Puff, Pyro Ball, Rock Blast, Rock Wrecker, Searing Shot, Seed Bomb, Shadow Ball, Sludge Bomb, Weather Ball, and Zap Cannon.)",
  },
  { name: "cacophony", description: "Avoids sound-based moves. " },
  {
    name: "cheek pouch",
    description: "Restores 33% of the Pokémon's max HP when the Pokémon consumes a berry, after the effect of the berry is applied. ",
  },
  {
    name: "chlorophyll",
    description: "Doubles the Pokémon's Speed stat in harsh sunlight. ",
  },
  {
    name: "clear body",
    description:
      "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats. ",
  },
  { name: "cloud nine", description: "Eliminates the effects of weather. " },
  {
    name: "color change",
    description: "The Pokémon's type becomes the type of the move used on it. ",
  },
  {
    name: "comatose",
    description:
      "The Pokémon is considered asleep but is still able to attack. They are unable to be affected by other non-volatile status conditions. ",
  },
  {
    name: "competitive",
    description: "Boosts the Sp. Atk stat sharply (by two stages) when a stat is lowered. ",
  },
  {
    name: "compound eyes",
    description: "The Pokémon's compound eyes multiplies its accuracy by 1.3. ",
  },
  {
    name: "contrary",
    description: "Makes stat changes have an opposite effect. ",
  },
  {
    name: "corrosion",
    description:
      "The Pokémon can poison the target even if it's a Steel or Poison type. ",
  },
  {
    name: "cotton down",
    description:
      "When the Pokémon is hit by an attack, it scatters cotton fluff around and lowers the Speed stat of all Pokémon, except itself, by one stage. ",
  },
  {
    name: "cursed body",
    description: "There is a 30% chance this Pokémon will disable a move used on it. ",
  },
  {
    name: "cute charm",
    description: "Contact with the Pokémon has a 30% chance to cause infatuation.",
  },
  {
    name: "damp",
    description:
      "Prevents the use of explosive moves, such as Self-Destruct, by dampening its surroundings. ",
  },
  {
    name: "dancer",
    description:
      "When another Pokémon uses a dance move, it can use a dance move following it regardless of its Speed. ",
  },
  {
    name: "dark aura",
    description: "Powers up each Pokémon's Dark-type moves. ",
  },
  {
    name: "dauntless shield",
    description:
      "Boosts the Pokémon's Defense stat when the Pokémon enters a battle. ",
  },
  {
    name: "dazzling",
    description:
      "Surprises the opposing Pokémon, making it unable to attack using priority moves. ",
  },
  {
    name: "defeatist",
    description:
      "Halves the Pokémon's Attack and Sp. Atk stats when its HP becomes half or less. ",
  },
  {
    name: "defiant",
    description:
      "Boosts the Pokémon's Attack stat sharply when its stats are lowered. ",
  },
  {
    name: "delta stream",
    description:
      "The Pokémon changes the weather to eliminate all of the Flying type's weaknesses. ",
  },
  {
    name: "desolate land",
    description:
      "The Pokémon changes the weather to nullify Water-type attacks. ",
  },
  {
    name: "disguise",
    description:
      "Once per battle, the shroud that covers the Pokémon can protect it from an attack. ",
  },
  {
    name: "download",
    description:
      "Compares an opposing Pokémon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat—whichever will be more effective. ",
  },
  {
    name: "drizzle",
    description: "The Pokémon makes it rain when it enters a battle. ",
  },
  {
    name: "drought",
    description: "Turns the sunlight harsh when the Pokémon enters a battle. ",
  },
  {
    name: "dry skin",
    description:
      "Restores HP in rain or when hit by Water-type moves. Reduces HP in harsh sunlight, and increases the damage received from Fire-type moves. ",
  },
  {
    name: "early bird",
    description:
      "The Pokémon awakens from sleep twice as fast as other Pokémon. ",
  },
  {
    name: "effect spore",
    description:
      "Contact with the Pokémon may inflict poison, sleep, or paralysis on its attacker. ",
  },
  {
    name: "electric surge",
    description:
      "Turns the ground into Electric Terrain when the Pokémon enters a battle. ",
  },
  {
    name: "emergency exit",
    description:
      "The Pokémon, sensing danger, switches out when its HP becomes half or less.",
  },
  {
    name: "fairy aura",
    description: "Powers up each Pokémon's Fairy-type moves.",
  },
  {
    name: "filter",
    description: "Reduces the power of supereffective attacks taken.",
  },
  {
    name: "flame body",
    description: "Contact with the Pokémon may burn the attacker.",
  },
  {
    name: "flare boost",
    description: "Powers up special attacks when the Pokémon is burned.",
  },
  {
    name: "flash fire",
    description: "Powers up the Pokémon's Fire-type moves if it's hit by one.",
  },
  {
    name: "flower gift",
    description:
      "Boosts the Attack and Sp. Def stats of itself and allies in harsh sunlight.",
  },
  {
    name: "flower veil",
    description:
      "Ally Grass-type Pokémon are protected from status conditions and the lowering of their stats. ",
  },
  {
    name: "fluffy",
    description:
      "Halves the damage taken from moves that make direct contact, but doubles that of Fire-type moves. ",
  },
  {
    name: "forecast",
    description:
      "The Pokémon transforms with the weather to change its type to Water, Fire, or Ice. ",
  },
  {
    name: "forewarn",
    description:
      "When it enters a battle, the Pokémon can tell one of the moves an opposing Pokémon has. ",
  },
  { name: "friend guard", description: "Reduces damage done to allies. " },
  {
    name: "frisk",
    description:
      "When it enters a battle, the Pokémon can check an opposing Pokémon's held item.",
  },
  {
    name: "full metal body",
    description:
      "Prevents other Pokémon's moves or Abilities from lowering the Pokémon's stats.",
  },
  { name: "fur coat", description: "Halves the damage from physical moves." },
  {
    name: "gale wings",
    description:
      "Gives priority to Flying-type moves when the Pokémon's HP is full. ",
  },
  {
    name: "galvanize",
    description:
      "Normal-type moves become Electric-type moves. The power of those moves is boosted by 20%",
  },
  {
    name: "gluttony",
    description:
      "Makes the Pokémon eat a held Berry when its HP drops to half or less",
  },
  {
    name: "gooey",
    description:
      "Contact with the Pokémon lowers the attacker's Speed stat by one stage.",
  },
  {
    name: "gorilla tactics",
    description:
      "Boosts the Pokémon's Attack stat but only allows the use of the first selected move.",
  },
  {
    name: "grass pelt",
    description: "Boosts the Pokémon's Defense stat on Grassy Terrain.",
  },
  {
    name: "grassy surge",
    description:
      "Turns the ground into Grassy Terrain when the Pokémon enters a battle.",
  },
  {
    name: "gulp missile",
    description:
      "When the Pokémon uses Surf or Dive, it will come back with prey. When it takes damage, it will spit out the prey to attack. ",
  },
  {
    name: "guts",
    description:
      "It's so gutsy that having a status condition boosts the Pokémon's Attack stat. ",
  },
  {
    name: "harvest",
    description: "May create another Berry after one is used.",
  },
  {
    name: "healer",
    description: "Sometimes heals an ally's status condition. ",
  },
  {
    name: "heatproof",
    description:
      "The heatproof body of the Pokémon halves the damage from Fire-type moves that hit it. ",
  },
  { name: "heavy metal", description: "Doubles the Pokémon's weight." },
  {
    name: "honey gather",
    description: "The Pokémon may gather Honey after a battle.",
  },
  { name: "huge power", description: "Doubles the Pokémon's Attack stat. " },
  {
    name: "hunger switch",
    description:
      "The Pokémon changes its form, alternating between its Full Belly Mode and Hangry Mode after the end of each turn.",
  },
  {
    name: "hustle",
    description: "Boosts the Attack stat, but lowers accuracy. ",
  },
  {
    name: "hydration",
    description: "Heals status conditions if it's raining. ",
  },
  {
    name: "hyper cutter",
    description:
      "The Pokémon's proud of its powerful pincers. They prevent other Pokémon from lowering its Attack stat.",
  },
  {
    name: "ice body",
    description: "The Pokémon gradually regains HP in a hailstorm.",
  },
  {
    name: "ice face",
    description:
      "The Pokémon's ice head can take a physical attack as a substitute, but the attack also changes the Pokémon's appearance. The ice will be restored when it hails. ",
  },
  {
    name: "ice scales",
    description:
      "The Pokémon is protected by ice scales, which halve the damage taken from special moves. ",
  },
  {
    name: "illuminate",
    description:
      "Raises the likelihood of meeting wild Pokémon by illuminating the surroundings. ",
  },
  {
    name: "illusion",
    description:
      "Comes out disguised as the Pokémon in the party's last spot. ",
  },
  {
    name: "immunity",
    description:
      "The immune system of the Pokémon prevents it from getting poisoned. ",
  },
  {
    name: "imposter",
    description: "The Pokémon transforms itself into the Pokémon it's facing. ",
  },
  {
    name: "infiltrator",
    description:
      "Passes through the opposing Pokémon's barrier, substitute, and the like and strikes. ",
  },
  {
    name: "innards out",
    description:
      "Damages the attacker landing the finishing hit by the amount equal to its last HP. ",
  },
  {
    name: "inner focus",
    description:
      "The Pokémon's intensely focused, and that protects the Pokémon from flinching. ",
  },
  {
    name: "insomnia",
    description:
      "The Pokémon is suffering from insomnia and cannot fall asleep.",
  },
  {
    name: "intimidate",
    description:
      "The Pokémon intimidates opposing Pokémon upon entering battle, lowering their Attack stat. ",
  },
  {
    name: "intrepid sword",
    description:
      "Boosts the Pokémon's Attack stat when the Pokémon enters a battle. ",
  },
  {
    name: "iron barbs",
    description:
      "Inflicts damage on the attacker upon contact with iron barbs.",
  },
  { name: "iron fist", description: "Powers up punching moves. " },
  {
    name: "justified",
    description:
      "Being hit by a Dark-type move boosts the Attack stat of the Pokémon, for justice. ",
  },
  {
    name: "keen eye",
    description:
      "Keen eyes prevent other Pokémon from lowering this Pokémon's accuracy.",
  },
  { name: "klutz", description: "The Pokémon can't use any held items." },
  {
    name: "leaf guard",
    description: "Prevents status conditions in harsh sunlight. ",
  },
  {
    name: "levitate",
    description:
      "By floating in the air, the Pokémon receives full immunity to all Ground-type moves. ",
  },
  {
    name: "libero",
    description:
      "Changes the Pokémon's type to the type of the move it's about to use.",
  },
  { name: "light metal", description: "Halves the Pokémon's weight. " },
  {
    name: "lightning rod",
    description:
      "The Pokémon draws in all Electric-type moves. Instead of being hit by Electric-type moves, it boosts its Sp. Atk. ",
  },
  {
    name: "limber",
    description: "Its limber body protects the Pokémon from paralysis. ",
  },
  {
    name: "liquid ooze",
    description:
      "The oozed liquid has a strong stench, which damages attackers using any draining move. ",
  },
  {
    name: "liquid voice",
    description: "All sound-based moves become Water-type moves. ",
  },
  {
    name: "long reach",
    description:
      "The Pokémon uses its moves without making contact with the target. ",
  },
  {
    name: "magic bounce",
    description: "Reflects status moves instead of getting hit by them. ",
  },
  {
    name: "magic guard",
    description: "The Pokémon only takes damage from attacks. ",
  },
  {
    name: "magician",
    description:
      "The Pokémon steals the held item of a Pokémon it hits with a move. ",
  },
  {
    name: "magma armor",
    description:
      "The Pokémon is covered with hot magma, which prevents the Pokémon from becoming frozen. ",
  },
  {
    name: "magnet pull",
    description:
      "Prevents Steel-type Pokémon from escaping using its magnetic force. ",
  },
  {
    name: "marvel scale",
    description:
      "The Pokémon's marvelous scales boost the Defense stat if it has a status condition. ",
  },
  { name: "mega launcher", description: "Powers up aura and pulse moves." },
  {
    name: "merciless",
    description:
      "The Pokémon's attacks become critical hits if the target is poisoned.",
  },
  {
    name: "mimicry",
    description: "Changes the Pokémon's type depending on the terrain. ",
  },
  {
    name: "minus",
    description:
      "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle. ",
  },
  {
    name: "mirror armor",
    description:
      "Bounces back only the stat-lowering effects that the Pokémon receives. ",
  },
  {
    name: "misty surge",
    description:
      "Turns the ground into Misty Terrain when the Pokémon enters a battle. ",
  },
  {
    name: "mold breaker",
    description:
      "Moves can be used on the target regardless of its Abilities. ",
  },
  {
    name: "moody",
    description: "Raises one stat sharply and lowers another every turn. ",
  },
  {
    name: "motor drive",
    description:
      "Boosts its Speed stat if hit by an Electric-type move instead of taking damage. ",
  },
  {
    name: "moxie",
    description:
      "The Pokémon shows moxie, and that boosts the Attack stat after knocking out any Pokémon. ",
  },
  {
    name: "multiscale",
    description:
      "Reduces the amount of damage the Pokémon takes while its HP is full.",
  },
  {
    name: "multitype",
    description:
      "Changes the Pokémon's type to match the Plate or Z-Crystal it holds. ",
  },
  {
    name: "mummy",
    description:
      "Contact with the Pokémon changes the attacker's Ability to Mummy.",
  },
  {
    name: "natural cure",
    description: "All status conditions heal when the Pokémon switches out.",
  },
  {
    name: "neuroforce",
    description: "Powers up moves that are super effective.",
  },
  {
    name: "neutralizing gas",
    description:
      "If the Pokémon with Neutralizing Gas is in the battle, the effects of all Pokémon's Abilities will be nullified or will not be triggered. ",
  },
  {
    name: "no guard",
    description:
      "The Pokémon employs no-guard tactics to ensure incoming and outgoing attacks always land. ",
  },
  {
    name: "normalize",
    description:
      "All the Pokémon's moves become Normal type. The power of those moves is boosted by 20%",
  },
  {
    name: "oblivious",
    description:
      "The Pokémon is oblivious, and that keeps it from being infatuated or falling for taunts.",
  },
  {
    name: "overcoat",
    description:
      "Protects the Pokémon from things like sand, hail, and powder. ",
  },
  {
    name: "overgrow",
    description: "Powers up Grass-type moves when the Pokémon's HP is low. ",
  },
  {
    name: "own tempo",
    description:
      "This Pokémon has its own tempo, and that prevents it from becoming confused. ",
  },
  { name: "parental bond", description: "Parent and child each attacks. " },
  {
    name: "pastel veil",
    description:
      "Protects the Pokémon and its ally Pokémon from being poisoned. ",
  },
  {
    name: "perish body",
    description:
      "When hit by a move that makes direct contact, the Pokémon and the attacker will faint after three turns unless they switch out of battle. ",
  },
  {
    name: "pickpocket",
    description: "Steals an item from an attacker that made direct contact.",
  },
  {
    name: "pickup",
    description:
      "The Pokémon may pick up the item an opposing Pokémon used during a battle. It may pick up items outside of battle, too.",
  },
  {
    name: "pixilate",
    description:
      "Normal-type moves become Fairy-type moves. The power of those moves is boosted by 20%",
  },
  {
    name: "plus",
    description:
      "Boosts the Sp. Atk stat of the Pokémon if an ally with the Plus or Minus Ability is also in battle. ",
  },
  {
    name: "poison heal",
    description:
      "Restores HP if the Pokémon is poisoned instead of losing HP. ",
  },
  {
    name: "poison point",
    description: "Contact with the Pokémon may poison the attacker. ",
  },
  {
    name: "poison touch",
    description: "May poison a target when the Pokémon makes contact. ",
  },
  {
    name: "power construct",
    description:
      "Other Cells gather to aid when its HP becomes half or less. Then the Pokémon changes its form to Complete Forme. ",
  },
  {
    name: "power of alchemy",
    description: "The Pokémon copies the Ability of a defeated ally. ",
  },
  {
    name: "power spot",
    description: "Just being next to the Pokémon powers up moves. ",
  },
  { name: "prankster", description: "Gives priority to a status move. " },
  {
    name: "pressure",
    description:
      "By putting pressure on the opposing Pokémon, it raises their PP usage. ",
  },
  {
    name: "primordial sea",
    description:
      "The Pokémon changes the weather to nullify Fire-type attacks. ",
  },
  {
    name: "prism armor",
    description: "Reduces the power of supereffective attacks taken. ",
  },
  {
    name: "propeller tail",
    description:
      "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves. ",
  },
  {
    name: "protean",
    description:
      "Changes the Pokémon's type to the type of the move it's about to use. ",
  },
  {
    name: "psychic surge",
    description:
      "Turns the ground into Psychic Terrain when the Pokémon enters a battle. ",
  },
  {
    name: "punk rock",
    description:
      "Boosts the power of sound-based moves. The Pokémon also takes half the damage from these kinds of moves. ",
  },
  {
    name: "pure power",
    description: "Using its pure power, the Pokémon doubles its Attack stat. ",
  },
  {
    name: "queenly majesty",
    description:
      "Its majesty pressures the opposing Pokémon, making it unable to attack using priority moves. ",
  },
  {
    name: "quick draw",
    description: "Enables the Pokémon to move first occasionally. ",
  },
  {
    name: "quick feet",
    description:
      "Boosts the Speed stat if the Pokémon has a status condition. ",
  },
  {
    name: "rain dish",
    description: "The Pokémon gradually regains HP in rain. ",
  },
  {
    name: "rattled",
    description:
      "Dark-, Ghost-, and Bug-type moves scare the Pokémon and boost its Speed stat. ",
  },
  {
    name: "receiver",
    description: "The Pokémon copies the Ability of a defeated ally. ",
  },
  {
    name: "reckless",
    description: "Powers up moves that have recoil damage. ",
  },
  {
    name: "refrigerate",
    description:
      "Normal-type moves become Ice-type moves. The power of those moves is boosted by 20%",
  },
  {
    name: "regenerator",
    description: "Restores a little HP when withdrawn from battle. ",
  },
  { name: "ripen", description: "Ripens Berries and doubles their effect. " },
  {
    name: "rivalry",
    description:
      "Becomes competitive and deals more damage to Pokémon of the same gender, but deals less to Pokémon of the opposite gender. ",
  },
  {
    name: "rks system",
    description:
      "Changes the Pokémon's type to match the memory disc it holds. ",
  },
  {
    name: "rock head",
    description: "Protects the Pokémon from recoil damage. ",
  },
  {
    name: "rough skin",
    description:
      "This Pokémon inflicts damage with its rough skin to the attacker on contact.",
  },
  {
    name: "run away",
    description: "Enables a sure getaway from wild Pokémon. ",
  },
  {
    name: "sand force",
    description:
      "Boosts the power of Rock-, Ground-, and Steel-type moves in a sandstorm. ",
  },
  {
    name: "sand rush",
    description: "Boosts the Pokémon's Speed stat in a sandstorm. ",
  },
  {
    name: "sand spit",
    description: "The Pokémon creates a sandstorm when it's hit by an attack.",
  },
  {
    name: "sand stream",
    description: "The Pokémon summons a sandstorm when it enters a battle. ",
  },
  {
    name: "sand veil",
    description: "Boosts the Pokémon's evasiveness in a sandstorm. ",
  },
  {
    name: "sap sipper",
    description:
      "Boosts the Attack stat if hit by a Grass-type move instead of taking damage. ",
  },
  {
    name: "schooling",
    description:
      "When it has a lot of HP, the Pokémon forms a powerful school. It stops schooling when its HP is low. ",
  },
  {
    name: "scrappy",
    description:
      "The Pokémon can hit Ghost-type Pokémon with Normal- and Fighting-type moves. ",
  },
  {
    name: "screen cleaner",
    description:
      "When the Pokémon enters a battle, the effects of Light Screen, Reflect, and Aurora Veil are nullified for both opposing and ally Pokémon. ",
  },
  {
    name: "serene grace",
    description:
      "Boosts the likelihood of additional effects occurring when attacking. ",
  },
  {
    name: "shadow shield",
    description:
      "Reduces the amount of damage the Pokémon takes while its HP is full. ",
  },
  {
    name: "shadow tag",
    description:
      "This Pokémon steps on the opposing Pokémon's shadow to prevent it from escaping.",
  },
  {
    name: "shed skin",
    description:
      "The Pokémon may heal its own status conditions by shedding its skin. ",
  },
  {
    name: "sheer force",
    description:
      "Removes additional effects to increase the power of moves when attacking.",
  },
  {
    name: "shell armor",
    description: "A hard shell protects the Pokémon from critical hits.",
  },
  {
    name: "shield dust",
    description:
      "This Pokémon's dust blocks the additional effects of attacks taken. ",
  },
  {
    name: "shields down",
    description:
      "When its HP becomes half or less, the Pokémon's shell breaks and it becomes aggressive. ",
  },
  {
    name: "simple",
    description: "The stat changes the Pokémon receives are doubled. ",
  },
  {
    name: "skill link",
    description: "Maximizes the number of times multistrike moves hit. ",
  },
  {
    name: "slow start",
    description:
      "For five turns, the Pokémon's Attack and Speed stats are halved. ",
  },
  {
    name: "slush rush",
    description: "Boosts the Pokémon's Speed stat in a hailstorm. ",
  },
  {
    name: "sniper",
    description: "Powers up moves if they become critical hits when attacking.",
  },
  { name: "snow cloak", description: "Boosts evasiveness in a hailstorm. " },
  {
    name: "snow warning",
    description: "The Pokémon summons a hailstorm when it enters a battle. ",
  },
  {
    name: "solar power",
    description:
      "Boosts the Sp. Atk stat in harsh sunlight, but HP decreases every turn. ",
  },
  {
    name: "solid rock",
    description: "Reduces the power of supereffective attacks taken. ",
  },
  {
    name: "soul-heart",
    description: "Boosts its Sp. Atk stat every time a Pokémon faints. ",
  },
  {
    name: "soundproof",
    description:
      "Soundproofing gives the Pokémon full immunity to all sound-based moves. ",
  },
  {
    name: "speed boost",
    description: "Its Speed stat is boosted every turn. ",
  },
  {
    name: "stakeout",
    description:
      "Doubles the damage dealt to the target's replacement if the target switches out. ",
  },
  {
    name: "stall",
    description: "The Pokémon moves after all other Pokémon do. ",
  },
  {
    name: "stalwart",
    description:
      "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves. ",
  },
  {
    name: "stamina",
    description: "Boosts the Defense stat when hit by an attack. ",
  },
  {
    name: "stance change",
    description:
      "The Pokémon changes its form to Blade Forme when it uses an attack move and changes to Shield Forme when it uses King's Shield. ",
  },
  {
    name: "static",
    description:
      "The Pokémon is charged with static electricity, so contact with it may cause paralysis. ",
  },
  {
    name: "steadfast",
    description:
      "The Pokémon's determination boosts the Speed stat each time the Pokémon flinches. ",
  },
  {
    name: "steam engine",
    description:
      "Boosts the Pokémon's Speed stat drastically if hit by a Fire- or Water-type move. ",
  },
  { name: "steelworker", description: "Powers up Steel-type moves. " },
  {
    name: "steely spirit",
    description: "Powers up ally Pokémon's Steel-type moves. ",
  },
  {
    name: "stench",
    description:
      "By releasing stench when attacking, this Pokémon may cause the target to flinch. ",
  },
  {
    name: "sticky hold",
    description:
      "Items held by the Pokémon are stuck fast and cannot be removed by other Pokémon. ",
  },
  {
    name: "storm drain",
    description:
      "Draws in all Water-type moves. Instead of being hit by Water-type moves, it boosts its Sp. Atk. ",
  },
  {
    name: "strong jaw",
    description:
      "The Pokémon's strong jaw boosts the power of its biting moves. ",
  },
  {
    name: "sturdy",
    description:
      "It cannot be knocked out with one hit. One-hit KO moves cannot knock it out, either. ",
  },
  {
    name: "suction cups",
    description:
      "This Pokémon uses suction cups to stay in one spot to negate all moves and items that force switching out. ",
  },
  {
    name: "super luck",
    description:
      "The Pokémon is so lucky that the critical-hit ratios of its moves are boosted. ",
  },
  {
    name: "surge surfer",
    description: "Doubles the Pokémon's Speed stat on Electric Terrain. ",
  },
  {
    name: "swarm",
    description: "Powers up Bug-type moves when the Pokémon's HP is low. ",
  },
  {
    name: "sweet veil",
    description: "Prevents itself and ally Pokémon from falling asleep. ",
  },
  {
    name: "swift swim",
    description: "Boosts the Pokémon's Speed stat in rain. ",
  },
  {
    name: "symbiosis",
    description:
      "The Pokémon passes its item to an ally that has used up an item. ",
  },
  {
    name: "synchronize",
    description:
      "The attacker will receive the same status condition if it inflicts a burn, poison, or paralysis to the Pokémon. ",
  },
  {
    name: "tangled feet",
    description: "Raises evasiveness if the Pokémon is confused. ",
  },
  {
    name: "tangling hair",
    description: "Contact with the Pokémon lowers the attacker's Speed stat. ",
  },
  { name: "technician", description: "Powers up the Pokémon's weaker moves. " },
  {
    name: "telepathy",
    description: "Anticipates an ally's attack and dodges it. ",
  },
  {
    name: "teravolt",
    description:
      "Moves can be used on the target regardless of its Abilities. ",
  },
  {
    name: "thick fat",
    description:
      "The Pokémon is protected by a layer of thick fat, which halves the damage taken from Fire- and Ice-type moves.",
  },
  {
    name: "tinted lens",
    description:
      "The Pokémon can use not very effective moves to deal regular damage. ",
  },
  {
    name: "torrent",
    description: "Powers up Water-type moves when the Pokémon's HP is low. ",
  },
  {
    name: "tough claws",
    description: "Powers up moves that make direct contact. ",
  },
  {
    name: "toxic boost",
    description: "Powers up physical attacks when the Pokémon is poisoned. ",
  },
  {
    name: "trace",
    description:
      "When it enters a battle, the Pokémon copies an opposing Pokémon's Ability. ",
  },
  { name: "triage", description: "Gives priority to a healing move. " },
  {
    name: "truant",
    description:
      "The Pokémon can't use a move if it had used a move on the previous turn. ",
  },
  {
    name: "turboblaze",
    description:
      "Moves can be used on the target regardless of its Abilities. ",
  },
  {
    name: "unaware",
    description:
      "When attacking or being attacked, the Pokémon ignores the target Pokémon's stat changes. ",
  },
  {
    name: "unburden",
    description:
      "Boosts the Speed stat if the Pokémon's held item is used or lost. ",
  },
  {
    name: "unnerve",
    description:
      "Unnerves opposing Pokémon and makes them unable to eat Berries. ",
  },
  {
    name: "unseen fist",
    description:
      "If the Pokémon uses moves that make direct contact, it can attack the target even if the target protects itself. ",
  },
  {
    name: "victory star",
    description: "Boosts the accuracy of its allies and itself. ",
  },
  {
    name: "vital spirit",
    description:
      "The Pokémon is full of vitality, and that prevents it from falling asleep. ",
  },
  {
    name: "volt absorb",
    description:
      "Restores HP if hit by an Electric-type move instead of taking damage. ",
  },
  {
    name: "wandering spirit",
    description:
      "The Pokémon exchanges Abilities with a Pokémon that hits it with a move that makes direct contact. ",
  },
  {
    name: "water absorb",
    description:
      "Restores HP if hit by a Water-type move instead of taking damage. ",
  },
  {
    name: "water bubble",
    description:
      "Lowers the power of Fire-type moves done to the Pokémon and prevents the Pokémon from getting a burn. ",
  },
  {
    name: "water compaction",
    description:
      "Boosts the Pokémon's Defense stat sharply when hit by a Water-type move. ",
  },
  {
    name: "water veil",
    description:
      "The Pokémon is covered with a water veil, which prevents the Pokémon from getting a burn. ",
  },
  {
    name: "weak armor",
    description:
      "Physical attacks to the Pokémon lower its Defense stat but sharply raise its Speed stat. ",
  },
  {
    name: "white smoke",
    description:
      "The Pokémon is protected by its white smoke, which prevents other Pokémon from lowering its stats. ",
  },
  {
    name: "wimp out",
    description:
      "The Pokémon cowardly switches out when its HP becomes half or less. ",
  },
  {
    name: "wonder guard",
    description:
      "Its mysterious power only lets supereffective moves hit the Pokémon. ",
  },
  {
    name: "wonder skin",
    description: "Makes status moves more likely to miss. ",
  },
  {
    name: "zen mode",
    description: "Changes the Pokémon's shape when HP is half or less. ",
  },
  { 
    name: "transistor", 
    description: "Powers up Electric-type moves." 
  },
  { name: "dragon's maw", description: "Powers up Dragon-type moves." },
  {
    name: "chilling neigh",
    description:
      "When the Pokemon knocks out a target, it utters a chilling neigh, which boosts its Attack stat.",
  },
  {
    name: "grim neigh",
    description:
      "When the Pokemon knocks out a target, it utters a terryifying neigh, which boosts its Special Attack stat.",
  },
  {
    name: "curious medicine",
    description:
      "When the Pokemon is brought into battle, any stat alterations of allies are removed.",
  },
  {
    name: "as one",
    description:
      "This ability combines the effects of both Calyrex's Unnerve ability and Glastrier's/Spectrier's Chilling Neigh/Grim Neigh ability.",
  },
];
export default abils;