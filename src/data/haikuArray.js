const haikuArray = [
  {
    id: 0,
    first: "A world of dew",
    second: "And within every dewdrop",
    third: "A world of struggle",
    author: "Kobayashi Issa",
  },
  {
    id: 1,
    first: "A mountain village",
    second: "Under the piled-up snow",
    third: "The sound of water",
    author: "Masaoka Shiki",
  },
  {
    id: 2,
    first: "The taste",
    second: "Of rain",
    third: "— Why kneel?",
    author: "Jack Kerouac",
  },
  {
    id: 3,
    first: "An old silent pond",
    second: "A frog jumps into the pond",
    third: "Splash! Silence again",
    author: "Matsuo Bashō",
  },
  {
    id: 4,
    first: "On a leafless branch",
    second: "A crow comes to rest",
    third: "Autumn nightfall",
    author: "Matsuo Bashō",
  },
  {
    id: 5,
    first: "I write, erase, rewrite",
    second: "Erase again, and then",
    third: "A poppy blooms",
    author: "Katsushika Hokusai",
  },
  {
    id: 6,
    first: "Over the wintry",
    second: "Forest, winds howl in rage",
    third: "With no leaves to blow",
    author: "Natsume Sōseki",
  },
  {
    id: 7,
    first: "A huge frog and I",
    second: "Staring at each other",
    third: "Neither of us moves",
    author: "Kobayashi Issa",
  },
  {
    id: 8,
    first: "Love between us is",
    second: "Speech and breath. Loving you is",
    third: "A long river running",
    author: "Sonia Sanchez",
  },
  {
    id: 9,
    first: "Life’s little, our heads",
    second: "Sad. Redeemed and wasting clay",
    third: "This chance. Be of use",
    author: "Ravi Shankar",
  },
  {
    id: 10,
    first: "From across the lake",
    second: "Past the black winter trees",
    third: "Faint sounds of a flute",
    author: "Richard Wright",
  },
  {
    id: 11,
    first: "Self-deprecation",
    second: "Superficiality",
    third: "Sanctimonious",
    author: "Seamus MacGregor",
  },
  {
    id: 12,
    first: "From time to time",
    second: "The clouds give rest",
    third: "To the moon-beholders",
    author: "Matsuo Bashō",
  },
  {
    id: 13,
    first: "Little Honda shines",
    second: "Like a second sun rising",
    third: "With each golden dawn",
    author: "James May",
  },
  {
    id: 14,
    first: "Friday night at home",
    second: "Sanctuary from the cold",
    third: "A good book and tea",
    author: "Thomas Butler",
  },
  {
    id: 15,
    first: "Blowing from the west",
    second: "Fallen leaves gather",
    third: "In the east",
    author: "Yosa Buson",
  },
  {
    id: 16,
    first: "Don’t weep, insects",
    second: "Lovers, stars themselves",
    third: "Must part",
    author: "Kobayashi Issa",
  },
  {
    id: 17,
    first: "Winter seclusion",
    second: "Listening, that evening",
    third: "To the rain in the mountain",
    author: "Kobayashi Issa",
  },
  {
    id: 18,
    first: "My life",
    second: "How much more of it remains?",
    third: "The night is brief",
    author: "Masaoka Shiki",
  },
  {
    id: 19,
    first: "I kill an ant",
    second: "And realize my three children",
    third: "have been watching",
    author: "Kato Shuson",
  },
  {
    id: 20,
    first: "No one travels",
    second: "Along this way but I",
    third: "This autumn evening",
    author: "Matsuo Bashō",
  },
  {
    id: 21,
    first: "First autumn morning",
    second: "The mirror I stare into",
    third: "Shows my father's face",
    author: "Murakami Kijo",
  },
  {
    id: 22,
    first: "The lamp once out",
    second: "Cool stars enter",
    third: "The window frame",
    author: "Natsume Sōseki",
  },
  {
    id: 23,
    first: "In the cicada's cry",
    second: "No sign can foretell",
    third: "How soon it must die",
    author: "Matsuo Bashō",
  },
  {
    id: 24,
    first: "In the twilight rain",
    second: "These brilliant-hued hibiscus",
    third: "A lovely sunset",
    author: "Matsuo Bashō",
  },
  {
    id: 25,
    first: "First winter rain",
    second: "Even the monkey",
    third: "Seems to want a raincoat",
    author: "Matsuo Bashō",
  },
  {
    id: 26,
    first: "The crow has flown away",
    second: "Swaying in the evening sun",
    third: "A leafless tree",
    author: "Natsume Sōseki",
  },
  {
    id: 27,
    first: "Picking autumn plums",
    second: "My wrinkled hands",
    third: "Once again grow fragrant",
    author: "Yosa Buson",
  },
  {
    id: 28,
    first: "Lifting my cup,",
    second: "I asked the moon",
    third: "To drink with me",
    author: "Li Po",
  },
  {
    id: 29,
    first: "Consider me",
    second: "As one who loved poetry",
    third: "And persimmons",
    author: "Masaoaka Shiki",
  },
  {
    id: 30,
    first: "One flower",
    second: "On the cliffside",
    third: "Nodding at the canyon",
    author: "Jack Kerouac",
  },
  {
    id: 31,
    first: "Blink and youth is gone",
    second: "Grasping it is like catching",
    third: "Water with a sieve",
    author: "Nadine Tomlinson",
  },
  {
    id: 32,
    first: "A cuckoo sings",
    second: "To me, to the mountain",
    third: "To me, to the mountain",
    author: "Kobayashi Issa",
  },
  {
    id: 33,
    first: "Autumn moonlight",
    second: "A worm digs silently",
    third: "Into the chestnut",
    author: "Matsuo Bashō",
  },
  {
    id: 34,
    first: "The low yellow",
    second: "Moon above the",
    third: "Quiet lamp-lit house",
    author: "Jack Kerouac",
  },
  {
    id: 35,
    first: "Over-ripe sushi",
    second: "The Master",
    third: "Is full of regret",
    author: "Yosa Buson",
  },
  {
    id: 36,
    first: "A weathered skeleton",
    second: "In windy fields of memory",
    third: "Piercing like a knife",
    author: "Matsuo Bashō",
  },
  {
    id: 37,
    first: "My arm for a pillow",
    second: "I really like myself",
    third: "Under the hazy moon",
    author: "Yosa Buson",
  },
  {
    id: 38,
    first: "Toward those short trees",
    second: "We saw a hawk descending",
    third: "On a day in spring",
    author: "Masaoka Shiki",
  },
  {
    id: 39,
    first: "Walking along the river",
    second: "With no bridge to cross",
    third: "The day is long",
    author: "Masaoka Shiki",
  },
  {
    id: 40,
    first: "First, calm down",
    second: "Next, stay that way",
    third: "For the rest of your life",
    author: "Ron Padgett",
  },
  {
    id: 41,
    first: "I think of you, and",
    second: "Dream about you, in colors",
    third: "That do not exist",
    author: "JS Parker",
  },
  {
    id: 42,
    first: "Winter solitude",
    second: "in a world of one color",
    third: "The sound of the wind",
    author: "Matsuo Bashō",
  },
  {
    id: 43,
    first: "We are what we choose",
    second: "The people that we let stay",
    third: "The things that we keep",
    author: "Knott Gregson",
  },
  {
    id: 44,
    first: "The longer I live",
    second: "The more I appreciate",
    third: "Washing the dishes",
    author: "D.D. Aspiras",
  },
  {
    id: 45,
    first: "Inside everyone",
    second: "The infinite traveler",
    third: "Longs to be set free",
    author: "William C. Hannan",
  },
  {
    id: 46,
    first: "I simply can not",
    second: "Comprehend your loveliness",
    third: "Where does it come from?",
    author: "D.D. Aspiras",
  },
  {
    id: 47,
    first: "All day",
    second: "Without a word",
    third: "Waves crashing",
    author: "Santōka Taneda",
  },
  {
    id: 48,
    first: "People go",
    second: "But how they left",
    third: "Always stays",
    author: "Rupi Kaur",
  },
  {
    id: 49,
    first: "Water Sound",
    second: "Just as it is",
    third: "I become serene",
    author: "Santōka Taneda",
  },
  {
    id: 50,
    first: "In a dark corner",
    second: "Her face lit by a candle",
    third: "She glows like the moon",
    author: "Steven Flint",
  },
  {
    id: 51,
    first: "Poems about love",
    second: "I saw them all in your eyes",
    third: "Like a flash of light",
    author: "Steven Flint",
  },
  {
    id: 52,
    first: "On rare occasions",
    second: "The universe contracts to",
    third: "A single heartbeat",
    author: "Steven Flint",
  },
  {
    id: 53,
    first: "I know I don't know",
    second: "The only thing I'm sure of",
    third: "Is uncertainty",
    author: "Steven Flint",
  },
  {
    id: 54,
    first: "Let go of the past",
    second: "Its time for the ghost to rest",
    third: "Your life is calling",
    author: "Steven Flint",
  },
  {
    id: 55,
    first: "The tree looks",
    second: "Like a dog",
    third: "Barking at Heaven",
    author: "Jack Kerouac",
  },
  {
    id: 55,
    first: "Well here I am",
    second: "2 PM --",
    third: "What day is it?",
    author: "Jack Kerouac",
  },
  {
    id: 56,
    first: "In my medicine cabinet",
    second: "The winter fly",
    third: "Has died of old age",
    author: "Jack Kerouac",
  },
  {
    id: 57,
    first: "Wine at dawn",
    second: "-- The long",
    third: "Rainy sleep",
    author: "Jack Kerouac",
  },
  {
    id: 58,
    first: "Protected by the clouds",
    second: "The moon",
    third: "Sleeps sailing",
    author: "Jack Kerouac",
  },
  {
    id: 59,
    first: "Rainy night",
    second: "I put on",
    third: "My pajamas",
    author: "Jack Kerouac",
  },
  {
    id: 60,
    first: "Now gathering",
    second: "Now scattering",
    third: "Fireflies over the river",
    author: "Natsume Sōseki",
  },
  {
    id: 61,
    first: "Late evening",
    second: "Each falling snowflake",
    third: "An eyelid closing",
    author: "George Swede",
  },
  {
    id: 62,
    first: "That leaky faucet",
    second: "Finally off my to-do list...",
    third: "Moving day",
    author: "Stuart C. Baker",
  },
  {
    id: 63,
    first: "Nightfall,",
    second: "Too dark to read the page",
    third: "Too cold",
    author: "Jack Kerouac",
  },
  {
    id: 64,
    first: "Meteor shower",
    second: "A gentle wave",
    third: "Wets our sandals",
    author: "Michael Dylan Welch",
  },
  {
    id: 65,
    first: "From across the lake",
    second: "Past the black winter trees",
    third: "Faint sounds of a flute",
    author: "Richard Wright",
  },
  {
    id: 66,
    first: "A little boy sings",
    second: "On a terrace, eyes aglow",
    third: "Ridge spills upward",
    author: "Robert Yehling",
  },
  {
    id: 67,
    first: "I want to sleep",
    second: "Swat the flies",
    third: "Softly, please",
    author: "Masaoka Shiki",
  },
  {
    id: 68,
    first: "A lightning flash",
    second: "Between the forest trees",
    third: "I have seen water",
    author: "Masaoka Shiki",
  },
  {
    id: 69,
    first: "O snail",
    second: "Climb Mount Fuji",
    third: "But slowly, slowly!",
    author: "Kobayashi Issa",
  },
  {
    id: 70,
    first: "A summer river being crossed",
    second: "How pleasing",
    third: "With sandals in my hands!",
    author: "Yosa Buson",
  },
  {
    id: 71,
    first: "Light of the moon",
    second: "Moves west, flowers' shadows",
    third: "Creep eastward",
    author: "Yosa Buson",
  },
  {
    id: 72,
    first: "Purple Lupins",
    second: "Shore up the road bank",
    third: "Lilies in the swamp",
    author: "Winona Baker",
  },
  {
    id: 73,
    first: "Brave dandelions",
    second: "Golden one day, the next",
    third: "Ghosts blown by wind",
    author: "Winona Baker",
  },
  {
    id: 74,
    first: "Gone the summer rain",
    second: "Water-colored rainbow",
    third: "Remnants in the sky",
    author: "Winona Baker",
  },
  {
    id: 75,
    first: "A fine September",
    second: "Even yellow jackets drunk",
    third: "On late blackberries",
    author: "Winona Baker",
  },
  {
    id: 76,
    first: "One by one",
    second: "Small boats to moorage",
    third: "Birds to nest",
    author: "Winona Baker",
  },
  {
    id: 77,
    first: "Softly indented stars",
    second: "Butter yellow moon",
    third: "Round as water",
    author: "Winona Baker",
  },
  {
    id: 78,
    first: "Sun polished snow",
    second: "The black crow circles",
    third: "A shadow moves",
    author: "Winona Baker",
  },
  {
    id: 79,
    first: "Big beautiful land",
    second: "Maple syrup and pancakes",
    third: "Beaver, Moose and Deer",
    author: "David Darbyshire",
  },
  {
    id: 80,
    first: "Like crunchy cornflakes",
    second: "Gold leaves rustle underfoot",
    third: "Beauty in decay",
    author: "Paul Holmes",
  },
  {
    id: 81,
    first: "You and me alone",
    second: "Madness of world locked away",
    third: "Peace and quiet reigns",
    author: "Paul Holmes",
  },
  {
    id: 82,
    first: "Calm as a river",
    second: "Tranquility in my heart",
    third: "Blue summer skies reign",
    author: "Paul Holmes",
  },
  {
    id: 83,
    first: "Beautiful sunrise",
    second: "On a warm summer morning",
    third: "I wait for day's start",
    author: "David Fox",
  },
  {
    id: 84,
    first: "Rain danced on tin roof",
    second: "Play acoustic rhythm and blues",
    third: "Makes my heart dance too",
    author: "Arun Bahadur Gurung",
  },
  {
    id: 85,
    first: "The sky I see",
    second: "Seems full of",
    third: "Magnolia blossoms",
    author: "Natsume Sōseki",
  },
  {
    id: 86,
    first: "Looking up",
    second: "What a high pagoda",
    third: "In the autumn sky",
    author: "Masaoka Shiki",
  },
  {
    id: 87,
    first: "A dog howling",
    second: "Sound of footsteps",
    third: "Longer nights",
    author: "Masaoka Shiki",
  },
  {
    id: 88,
    first: "Everything I touch",
    second: "With Tenderness, alas",
    third: "Pricks like a bramble",
    author: "Kobayashi Issa",
  },
  {
    id: 89,
    first: "Give me a homeland",
    second: "And a passionate woman",
    third: "And a winter alone",
    author: "Kobayashi Issa",
  },
  {
    id: 90,
    first: "On a branch",
    second: "Floating downriver",
    third: "A cricket, singing",
    author: "Kobayashi Issa",
  },
  {
    id: 91,
    first: "Thunder-bellied clouds",
    second: "Move slow over heathered hills",
    third: "Pregnant with June’s rain",
    author: "Savannah Leahy",
  },
  {
    id: 92,
    first: "With soft clicks and clucks",
    second: "The hens watch the full moon rise",
    third: "The night’s great white egg",
    author: "Rob Crisell",
  },
  {
    id: 93,
    first: "In the birth of spring",
    second: "Snow gilds the tips of tulips",
    third: "Lingering for a time",
    author: "Cindy Lou Bechtold",
  },
  {
    id: 94,
    first: "Footsteps approaching;",
    second: "Calling birds fall silent: shh!",
    third: "The willows whisper",
    author: "Patricia A. Marsh",
  },
  {
    id: 95,
    first: "The vibrant canvas",
    second: "Flutters on a sea of light—",
    third: "Sailing Butterfly",
    author: "Shourya Vardhan Agarwal",
  },
  {
    id: 96,
    first: "Footsteps on hard snow",
    second: "Intense as soft-voiced secrets",
    third: "Whispers of winter",
    author: "Dave Whippman",
  },
  {
    id: 97,
    first: "Falling like snowflakes",
    second: "The smell of cherry blossoms",
    third: "The vision of blood",
    author: "Vanessa Valencia",
  },
  {
    id: 98,
    first: "A winter zephyr",
    second: "Fluttering the falling flakes",
    third: "Whispers wistfully",
    author: "Lucia Fisher",
  },
  {
    id: 99,
    first: "The moment two bubbles",
    second: "Are united, they both vanish",
    third: "A lotus blooms",
    author: "Murakami Kijo",
  },
];

export default haikuArray;
