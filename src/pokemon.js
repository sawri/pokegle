const pokemon = [
    "Abomasnow",
    "Abra",
    "Absol",
    "Accelgor",
    "Aegislash",
    "Aerodactyl",
    "Aggron",
    "Aipom",
    "Alakazam",
    "Alcremie",
    "Alomomola",
    "Altaria",
    "Amaura",
    "Ambipom",
    "Amoonguss",
    "Ampharos",
    "Anorith",
    "Appletun",
    "Applin",
    "Araquanid",
    "Arbok",
    "Arcanine",
    "Arceus",
    "Archen",
    "Archeops",
    "Arctovish",
    "Arctozolt",
    "Ariados",
    "Armaldo",
    "Aromatisse",
    "Aron",
    "Arrokuda",
    "Articuno",
    "Audino",
    "Aurorus",
    "Avalugg",
    "Axew",
    "Azelf",
    "Azumarill",
    "Azurill",
    "Bagon",
    "Baltoy",
    "Banette",
    "Barbaracle",
    "Barboach",
    "Barraskewda",
    "Basculegion",
    "Basculin",
    "Bastiodon",
    "Bayleef",
    "Beartic",
    "Beautifly",
    "Beedrill",
    "Beheeyem",
    "Beldum",
    "Bellossom",
    "Bellsprout",
    "Bergmite",
    "Bewear",
    "Bibarel",
    "Bidoof",
    "Binacle",
    "Bisharp",
    "Blacephalon",
    "Blastoise",
    "Blaziken",
    "Blipbug",
    "Blissey",
    "Blitzle",
    "Boldore",
    "Boltund",
    "Bonsly",
    "Bouffalant",
    "Bounsweet",
    "Braixen",
    "Braviary",
    "Breloom",
    "Brionne",
    "Bronzong",
    "Bronzor",
    "Bruxish",
    "Budew",
    "Buizel",
    "Bulbasaur",
    "Buneary",
    "Bunnelby",
    "Burmy",
    "Butterfree",
    "Buzzwole",
    "Cacnea",
    "Cacturne",
    "Calyrex",
    "Camerupt",
    "Carbink",
    "Carkol",
    "Carnivine",
    "Carracosta",
    "Carvanha",
    "Cascoon",
    "Castform",
    "Caterpie",
    "Celebi",
    "Celesteela",
    "Centiskorch",
    "Chandelure",
    "Chansey",
    "Charizard",
    "Charjabug",
    "Charmander",
    "Charmeleon",
    "Chatot",
    "Cherrim",
    "Cherubi",
    "Chesnaught",
    "Chespin",
    "Chewtle",
    "Chikorita",
    "Chimchar",
    "Chimecho",
    "Chinchou",
    "Chingling",
    "Cinccino",
    "Cinderace",
    "Clamperl",
    "Clauncher",
    "Clawitzer",
    "Claydol",
    "Clefable",
    "Clefairy",
    "Cleffa",
    "Clobbopus",
    "Cloyster",
    "Coalossal",
    "Cobalion",
    "Cofagrigus",
    "Combee",
    "Combusken",
    "Comfey",
    "Conkeldurr",
    "Copperajah",
    "Corphish",
    "Corsola",
    "Corviknight",
    "Corvisquire",
    "Cosmoem",
    "Cosmog",
    "Cottonee",
    "Crabominable",
    "Crabrawler",
    "Cradily",
    "Cramorant",
    "Cranidos",
    "Crawdaunt",
    "Cresselia",
    "Croagunk",
    "Crobat",
    "Croconaw",
    "Crustle",
    "Cryogonal",
    "Cubchoo",
    "Cubone",
    "Cufant",
    "Cursola",
    "Cutiefly",
    "Cyndaquil",
    "Darkrai",
    "Darmanitan",
    "Dartrix",
    "Darumaka",
    "Decidueye",
    "Dedenne",
    "Deerling",
    "Deino",
    "Delcatty",
    "Delibird",
    "Delphox",
    "Deoxys",
    "Dewgong",
    "Dewott",
    "Dewpider",
    "Dhelmise",
    "Dialga",
    "Diancie",
    "Diggersby",
    "Diglett",
    "Ditto",
    "Dodrio",
    "Doduo",
    "Donphan",
    "Dottler",
    "Doublade",
    "Dracovish",
    "Dracozolt",
    "Dragalge",
    "Dragapult",
    "Dragonair",
    "Dragonite",
    "Drakloak",
    "Drampa",
    "Drapion",
    "Dratini",
    "Drednaw",
    "Dreepy",
    "Drifblim",
    "Drifloon",
    "Drilbur",
    "Drizzile",
    "Drowzee",
    "Druddigon",
    "Dubwool",
    "Ducklett",
    "Dugtrio",
    "Dunsparce",
    "Duosion",
    "Duraludon",
    "Durant",
    "Dusclops",
    "Dusknoir",
    "Duskull",
    "Dustox",
    "Dwebble",
    "Eelektrik",
    "Eelektross",
    "Eevee",
    "Eiscue",
    "Ekans",
    "Eldegoss",
    "Electabuzz",
    "Electivire",
    "Electrike",
    "Electrode",
    "Elekid",
    "Elgyem",
    "Emboar",
    "Emolga",
    "Empoleon",
    "Enamorus",
    "Entei",
    "Escavalier",
    "Espeon",
    "Espurr",
    "Eternatus",
    "Excadrill",
    "Exeggcute",
    "Exeggutor",
    "Exploud",
    "Falinks",
    "Farfetch'd",
    "Fearow",
    "Feebas",
    "Fennekin",
    "Feraligatr",
    "Ferroseed",
    "Ferrothorn",
    "Finneon",
    "Flaaffy",
    "Flabébé",
    "Flapple",
    "Flareon",
    "Fletchinder",
    "Fletchling",
    "Floatzel",
    "Floette",
    "Florges",
    "Flygon",
    "Fomantis",
    "Foongus",
    "Forretress",
    "Fraxure",
    "Frillish",
    "Froakie",
    "Frogadier",
    "Froslass",
    "Frosmoth",
    "Furfrou",
    "Furret",
    "Gabite",
    "Gallade",
    "Galvantula",
    "Garbodor",
    "Garchomp",
    "Gardevoir",
    "Gastly",
    "Gastrodon",
    "Genesect",
    "Gengar",
    "Geodude",
    "Gible",
    "Gigalith",
    "Girafarig",
    "Giratina",
    "Glaceon",
    "Glalie",
    "Glameow",
    "Glastrier",
    "Gligar",
    "Gliscor",
    "Gloom",
    "Gogoat",
    "Golbat",
    "Goldeen",
    "Golduck",
    "Golem",
    "Golett",
    "Golisopod",
    "Golurk",
    "Goodra",
    "Goomy",
    "Gorebyss",
    "Gossifleur",
    "Gothita",
    "Gothitelle",
    "Gothorita",
    "Gourgeist",
    "Granbull",
    "Grapploct",
    "Graveler",
    "Greedent",
    "Greninja",
    "Grimer",
    "Grimmsnarl",
    "Grookey",
    "Grotle",
    "Groudon",
    "Grovyle",
    "Growlithe",
    "Grubbin",
    "Grumpig",
    "Gulpin",
    "Gumshoos",
    "Gurdurr",
    "Guzzlord",
    "Gyarados",
    "Hakamo-o",
    "Happiny",
    "Hariyama",
    "Hatenna",
    "Hatterene",
    "Hattrem",
    "Haunter",
    "Hawlucha",
    "Haxorus",
    "Heatmor",
    "Heatran",
    "Heliolisk",
    "Helioptile",
    "Heracross",
    "Herdier",
    "Hippopotas",
    "Hippowdon",
    "Hitmonchan",
    "Hitmonlee",
    "Hitmontop",
    "Ho-Oh",
    "Honchkrow",
    "Honedge",
    "Hoopa",
    "Hoothoot",
    "Hoppip",
    "Horsea",
    "Houndoom",
    "Houndour",
    "Huntail",
    "Hydreigon",
    "Hypno",
    "Igglybuff",
    "Illumise",
    "Impidimp",
    "Incineroar",
    "Indeedee",
    "Infernape",
    "Inkay",
    "Inteleon",
    "Ivysaur",
    "Jangmo-o",
    "Jellicent",
    "Jigglypuff",
    "Jirachi",
    "Jolteon",
    "Joltik",
    "Jumpluff",
    "Jynx",
    "Kabuto",
    "Kabutops",
    "Kadabra",
    "Kakuna",
    "Kangaskhan",
    "Karrablast",
    "Kartana",
    "Kecleon",
    "Keldeo",
    "Kingdra",
    "Kingler",
    "Kirlia",
    "Klang",
    "Kleavor",
    "Klefki",
    "Klink",
    "Klinklang",
    "Koffing",
    "Komala",
    "Kommo-o",
    "Krabby",
    "Kricketot",
    "Kricketune",
    "Krokorok",
    "Krookodile",
    "Kubfu",
    "Kyogre",
    "Kyurem",
    "Lairon",
    "Lampent",
    "Landorus",
    "Lanturn",
    "Lapras",
    "Larvesta",
    "Larvitar",
    "Latias",
    "Latios",
    "Leafeon",
    "Leavanny",
    "Ledian",
    "Ledyba",
    "Lickilicky",
    "Lickitung",
    "Liepard",
    "Lileep",
    "Lilligant",
    "Lillipup",
    "Linoone",
    "Litleo",
    "Litten",
    "Litwick",
    "Lombre",
    "Lopunny",
    "Lotad",
    "Loudred",
    "Lucario",
    "Ludicolo",
    "Lugia",
    "Lumineon",
    "Lunala",
    "Lunatone",
    "Lurantis",
    "Luvdisc",
    "Luxio",
    "Luxray",
    "Lycanroc",
    "Machamp",
    "Machoke",
    "Machop",
    "Magby",
    "Magcargo",
    "Magearna",
    "Magikarp",
    "Magmar",
    "Magmortar",
    "Magnemite",
    "Magneton",
    "Magnezone",
    "Makuhita",
    "Malamar",
    "Mamoswine",
    "Manaphy",
    "Mandibuzz",
    "Manectric",
    "Mankey",
    "Mantine",
    "Mantyke",
    "Maractus",
    "Mareanie",
    "Mareep",
    "Marill",
    "Marowak",
    "Marshadow",
    "Marshtomp",
    "Masquerain",
    "Mawile",
    "Medicham",
    "Meditite",
    "Meganium",
    "Melmetal",
    "Meloetta",
    "Meltan",
    "Meowstic",
    "Meowth",
    "Mesprit",
    "Metagross",
    "Metang",
    "Metapod",
    "Mew",
    "Mewtwo",
    "Mienfoo",
    "Mienshao",
    "Mightyena",
    "Milcery",
    "Milotic",
    "Miltank",
    "Mime Jr.",
    "Mimikyu",
    "Minccino",
    "Minior",
    "Minun",
    "Misdreavus",
    "Mismagius",
    "Moltres",
    "Monferno",
    "Morelull",
    "Morgrem",
    "Morpeko",
    "Mothim",
    "Mr. Mime",
    "Mr. Rime",
    "Mudbray",
    "Mudkip",
    "Mudsdale",
    "Muk",
    "Munchlax",
    "Munna",
    "Murkrow",
    "Musharna",
    "Naganadel",
    "Natu",
    "Necrozma",
    "Nickit",
    "Nidoking",
    "Nidoqueen",
    "Nidoran♀",
    "Nidoran♂",
    "Nidorina",
    "Nidorino",
    "Nihilego",
    "Nincada",
    "Ninetales",
    "Ninjask",
    "Noctowl",
    "Noibat",
    "Noivern",
    "Nosepass",
    "Numel",
    "Nuzleaf",
    "Obstagoon",
    "Octillery",
    "Oddish",
    "Omanyte",
    "Omastar",
    "Onix",
    "Oranguru",
    "Orbeetle",
    "Oricorio",
    "Oshawott",
    "Overqwil",
    "Pachirisu",
    "Palkia",
    "Palossand",
    "Palpitoad",
    "Pancham",
    "Pangoro",
    "Panpour",
    "Pansage",
    "Pansear",
    "Paras",
    "Parasect",
    "Passimian",
    "Patrat",
    "Pawniard",
    "Pelipper",
    "Perrserker",
    "Persian",
    "Petilil",
    "Phanpy",
    "Phantump",
    "Pheromosa",
    "Phione",
    "Pichu",
    "Pidgeot",
    "Pidgeotto",
    "Pidgey",
    "Pidove",
    "Pignite",
    "Pikachu",
    "Pikipek",
    "Piloswine",
    "Pincurchin",
    "Pineco",
    "Pinsir",
    "Piplup",
    "Plusle",
    "Poipole",
    "Politoed",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Polteageist",
    "Ponyta",
    "Poochyena",
    "Popplio",
    "Porygon",
    "Porygon-Z",
    "Porygon2",
    "Primarina",
    "Primeape",
    "Prinplup",
    "Probopass",
    "Psyduck",
    "Pumpkaboo",
    "Pupitar",
    "Purrloin",
    "Purugly",
    "Pyroar",
    "Pyukumuku",
    "Quagsire",
    "Quilava",
    "Quilladin",
    "Qwilfish",
    "Raboot",
    "Raichu",
    "Raikou",
    "Ralts",
    "Rampardos",
    "Rapidash",
    "Raticate",
    "Rattata",
    "Rayquaza",
    "Regice",
    "Regidrago",
    "Regieleki",
    "Regigigas",
    "Regirock",
    "Registeel",
    "Relicanth",
    "Remoraid",
    "Reshiram",
    "Reuniclus",
    "Rhydon",
    "Rhyhorn",
    "Rhyperior",
    "Ribombee",
    "Rillaboom",
    "Riolu",
    "Rockruff",
    "Roggenrola",
    "Rolycoly",
    "Rookidee",
    "Roselia",
    "Roserade",
    "Rotom",
    "Rowlet",
    "Rufflet",
    "Runerigus",
    "Sableye",
    "Salamence",
    "Salandit",
    "Salazzle",
    "Samurott",
    "Sandaconda",
    "Sandile",
    "Sandshrew",
    "Sandslash",
    "Sandygast",
    "Sawk",
    "Sawsbuck",
    "Scatterbug",
    "Sceptile",
    "Scizor",
    "Scolipede",
    "Scorbunny",
    "Scrafty",
    "Scraggy",
    "Scyther",
    "Seadra",
    "Seaking",
    "Sealeo",
    "Seedot",
    "Seel",
    "Seismitoad",
    "Sentret",
    "Serperior",
    "Servine",
    "Seviper",
    "Sewaddle",
    "Sharpedo",
    "Shaymin",
    "Shedinja",
    "Shelgon",
    "Shellder",
    "Shellos",
    "Shelmet",
    "Shieldon",
    "Shiftry",
    "Shiinotic",
    "Shinx",
    "Shroomish",
    "Shuckle",
    "Shuppet",
    "Sigilyph",
    "Silcoon",
    "Silicobra",
    "Silvally",
    "Simipour",
    "Simisage",
    "Simisear",
    "Sinistea",
    "Sirfetch'd",
    "Sizzlipede",
    "Skarmory",
    "Skiddo",
    "Skiploom",
    "Skitty",
    "Skorupi",
    "Skrelp",
    "Skuntank",
    "Skwovet",
    "Slaking",
    "Slakoth",
    "Sliggoo",
    "Slowbro",
    "Slowking",
    "Slowpoke",
    "Slugma",
    "Slurpuff",
    "Smeargle",
    "Smoochum",
    "Sneasel",
    "Sneasler",
    "Snivy",
    "Snom",
    "Snorlax",
    "Snorunt",
    "Snover",
    "Snubbull",
    "Sobble",
    "Solgaleo",
    "Solosis",
    "Solrock",
    "Spearow",
    "Spectrier",
    "Spewpa",
    "Spheal",
    "Spinarak",
    "Spinda",
    "Spiritomb",
    "Spoink",
    "Spritzee",
    "Squirtle",
    "Stakataka",
    "Stantler",
    "Staraptor",
    "Staravia",
    "Starly",
    "Starmie",
    "Staryu",
    "Steelix",
    "Steenee",
    "Stonjourner",
    "Stoutland",
    "Stufful",
    "Stunfisk",
    "Stunky",
    "Sudowoodo",
    "Suicune",
    "Sunflora",
    "Sunkern",
    "Surskit",
    "Swablu",
    "Swadloon",
    "Swalot",
    "Swampert",
    "Swanna",
    "Swellow",
    "Swinub",
    "Swirlix",
    "Swoobat",
    "Sylveon",
    "Taillow",
    "Talonflame",
    "Tangela",
    "Tangrowth",
    "Tapu Bulu",
    "Tapu Fini",
    "Tapu Koko",
    "Tapu Lele",
    "Tauros",
    "Teddiursa",
    "Tentacool",
    "Tentacruel",
    "Tepig",
    "Terrakion",
    "Thievul",
    "Throh",
    "Thundurus",
    "Thwackey",
    "Timburr",
    "Tirtouga",
    "Togedemaru",
    "Togekiss",
    "Togepi",
    "Togetic",
    "Torchic",
    "Torkoal",
    "Tornadus",
    "Torracat",
    "Torterra",
    "Totodile",
    "Toucannon",
    "Toxapex",
    "Toxel",
    "Toxicroak",
    "Toxtricity",
    "Tranquill",
    "Trapinch",
    "Treecko",
    "Trevenant",
    "Tropius",
    "Trubbish",
    "Trumbeak",
    "Tsareena",
    "Turtonator",
    "Turtwig",
    "Tympole",
    "Tynamo",
    "Type: Null",
    "Typhlosion",
    "Tyranitar",
    "Tyrantrum",
    "Tyrogue",
    "Tyrunt",
    "Umbreon",
    "Unfezant",
    "Unown",
    "Ursaluna",
    "Ursaring",
    "Urshifu",
    "Uxie",
    "Vanillish",
    "Vanillite",
    "Vanilluxe",
    "Vaporeon",
    "Venipede",
    "Venomoth",
    "Venonat",
    "Venusaur",
    "Vespiquen",
    "Vibrava",
    "Victini",
    "Victreebel",
    "Vigoroth",
    "Vikavolt",
    "Vileplume",
    "Virizion",
    "Vivillon",
    "Volbeat",
    "Volcanion",
    "Volcarona",
    "Voltorb",
    "Vullaby",
    "Vulpix",
    "Wailmer",
    "Wailord",
    "Walrein",
    "Wartortle",
    "Watchog",
    "Weavile",
    "Weedle",
    "Weepinbell",
    "Weezing",
    "Whimsicott",
    "Whirlipede",
    "Whiscash",
    "Whismur",
    "Wigglytuff",
    "Wimpod",
    "Wingull",
    "Wishiwashi",
    "Wobbuffet",
    "Woobat",
    "Wooloo",
    "Wooper",
    "Wormadam",
    "Wurmple",
    "Wynaut",
    "Wyrdeer",
    "Xatu",
    "Xerneas",
    "Xurkitree",
    "Yamask",
    "Yamper",
    "Yanma",
    "Yanmega",
    "Yungoos",
    "Yveltal",
    "Zacian",
    "Zamazenta",
    "Zangoose",
    "Zapdos",
    "Zarude",
    "Zebstrika",
    "Zekrom",
    "Zeraora",
    "Zigzagoon",
    "Zoroark",
    "Zorua",
    "Zubat",
    "Zweilous",
    "Zygarde"
  ];
  
  export default pokemon;
  