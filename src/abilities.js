const abilities = [
    "Adaptability",
    "Aerilate",
    "Aftermath",
    "Air Lock",
    "Analytic",
    "Anger Point",
    "Anticipation",
    "Arena Trap",
    "Aroma Veil",
    "As One",
    "Aura Break",
    "Bad Dreams",
    "Ball Fetch",
    "Battery",
    "Battle Armor",
    "Battle Bond",
    "Beast Boost",
    "Berserk",
    "Big Pecks",
    "Blaze",
    "Bulletproof",
    "Cheek Pouch",
    "Chilling Neigh",
    "Chlorophyll",
    "Clear Body",
    "Cloud Nine",
    "Color Change",
    "Comatose",
    "Competitive",
    "Compound Eyes",
    "Contrary",
    "Corrosion",
    "Cotton Down",
    "Curious Medicine",
    "Cursed Body",
    "Cute Charm",
    "Damp",
    "Dancer",
    "Dark Aura",
    "Dauntless Shield",
    "Dazzling",
    "Defeatist",
    "Defiant",
    "Delta Stream",
    "Desolate Land",
    "Disguise",
    "Download",
    "Dragon's Maw",
    "Drizzle",
    "Drought",
    "Dry Skin",
    "Early Bird",
    "Effect Spore",
    "Electric Surge",
    "Emergency Exit",
    "Fairy Aura",
    "Filter",
    "Flame Body",
    "Flare Boost",
    "Flash Fire",
    "Flower Gift",
    "Flower Veil",
    "Fluffy",
    "Forecast",
    "Forewarn",
    "Friend Guard",
    "Frisk",
    "Full Metal Body",
    "Fur Coat",
    "Gale Wings",
    "Galvanize",
    "Gluttony",
    "Gooey",
    "Gorilla Tactics",
    "Grass Pelt",
    "Grassy Surge",
    "Grim Neigh",
    "Gulp Missile",
    "Guts",
    "Harvest",
    "Healer",
    "Heatproof",
    "Heavy Metal",
    "Honey Gather",
    "Huge Power",
    "Hunger Switch",
    "Hustle",
    "Hydration",
    "Hyper Cutter",
    "Ice Body",
    "Ice Face",
    "Ice Scales",
    "Illuminate",
    "Illusion",
    "Immunity",
    "Imposter",
    "Infiltrator",
    "Innards Out",
    "Inner Focus",
    "Insomnia",
    "Intimidate",
    "Intrepid Sword",
    "Iron Barbs",
    "Iron Fist",
    "Justified",
    "Keen Eye",
    "Klutz",
    "Leaf Guard",
    "Levitate",
    "Libero",
    "Light Metal",
    "Lightning Rod",
    "Limber",
    "Liquid Ooze",
    "Liquid Voice",
    "Long Reach",
    "Magic Bounce",
    "Magic Guard",
    "Magician",
    "Magma Armor",
    "Magnet Pull",
    "Marvel Scale",
    "Mega Launcher",
    "Merciless",
    "Mimicry",
    "Minus",
    "Mirror Armor",
    "Misty Surge",
    "Mold Breaker",
    "Moody",
    "Motor Drive",
    "Moxie",
    "Multiscale",
    "Multitype",
    "Mummy",
    "Natural Cure",
    "Neuroforce",
    "Neutralizing Gas",
    "No Guard",
    "Normalize",
    "Oblivious",
    "Overcoat",
    "Overgrow",
    "Own Tempo",
    "Parental Bond",
    "Pastel Veil",
    "Perish Body",
    "Pickpocket",
    "Pickup",
    "Pixilate",
    "Plus",
    "Poison Heal",
    "Poison Point",
    "Poison Touch",
    "Power Construct",
    "Power of Alchemy",
    "Power Spot",
    "Prankster",
    "Pressure",
    "Primordial Sea",
    "Prism Armor",
    "Propeller Tail",
    "Protean",
    "Psychic Surge",
    "Punk Rock",
    "Pure Power",
    "Queenly Majesty",
    "Quick Draw",
    "Quick Feet",
    "Rain Dish",
    "Rattled",
    "Receiver",
    "Reckless",
    "Refrigerate",
    "Regenerator",
    "Ripen",
    "Rivalry",
    "RKS System",
    "Rock Head",
    "Rough Skin",
    "Run Away",
    "Sand Force",
    "Sand Rush",
    "Sand Spit",
    "Sand Stream",
    "Sand Veil",
    "Sap Sipper",
    "Schooling",
    "Scrappy",
    "Screen Cleaner",
    "Serene Grace",
    "Shadow Shield",
    "Shadow Tag",
    "Shed Skin",
    "Sheer Force",
    "Shell Armor",
    "Shield Dust",
    "Shields Down",
    "Simple",
    "Skill Link",
    "Slow Start",
    "Slush Rush",
    "Sniper",
    "Snow Cloak",
    "Snow Warning",
    "Solar Power",
    "Solid Rock",
    "Soul-Heart",
    "Soundproof",
    "Speed Boost",
    "Stakeout",
    "Stall",
    "Stalwart",
    "Stamina",
    "Stance Change",
    "Static",
    "Steadfast",
    "Steam Engine",
    "Steelworker",
    "Steely Spirit",
    "Stench",
    "Sticky Hold",
    "Storm Drain",
    "Strong Jaw",
    "Sturdy",
    "Suction Cups",
    "Super Luck",
    "Surge Surfer",
    "Swarm",
    "Sweet Veil",
    "Swift Swim",
    "Symbiosis",
    "Synchronize",
    "Tangled Feet",
    "Tangling Hair",
    "Technician",
    "Telepathy",
    "Teravolt",
    "Thick Fat",
    "Tinted Lens",
    "Torrent",
    "Tough Claws",
    "Toxic Boost",
    "Trace",
    "Transistor",
    "Triage",
    "Truant",
    "Turboblaze",
    "Unaware",
    "Unburden",
    "Unnerve",
    "Unseen Fist",
    "Victory Star",
    "Vital Spirit",
    "Volt Absorb",
    "Wandering Spirit",
    "Water Absorb",
    "Water Bubble",
    "Water Compaction",
    "Water Veil",
    "Weak Armor",
    "White Smoke",
    "Wimp Out",
    "Wonder Guard",
    "Wonder Skin",
    "Zen Mode",
    "Anger Shell",
    "Armor Tail",
    "Beads of Ruin",
    "Commander",
    "Costar",
    "Cud Chew",
    "Earth Eater",
    "Electromorphosis",
    "Good as Gold",
    "Guard Dog",
    "Hadron Engine",
    "Lingering Aroma",
    "Mycelium Might",
    "Opportunist",
    "Orichalcum Pulse",
    "Protosynthesis",
    "Purifying Salt",
    "Quark Drive",
    "Rocky Payload",
    "Seed Sower",
    "Sharpness",
    "Supreme Overlord",
    "Sword of Ruin",
    "Tablets of Ruin",
    "Thermal Exchange",
    "Toxic Debris",
    "Vessel of Ruin",
    "Well-Baked Body",
    "Wind Power",
    "Wind Rider",
    "Zero to Hero"
    ]

    export default abilities;