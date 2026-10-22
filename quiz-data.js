/* All quiz content and images are edited here.
 * Answers display A B / C D. correct: null means no grading or feedback.
 * image: null hides the evidence area. An image object shows one image.
 * Use an array of image objects for side-by-side images.
 * Each image: { src: 'assets/file.jpg', alt: 'Description', caption: 'Caption',
 *               credit: 'Source name', sourceUrl: 'https://example.org' }
 */
window.QUIZ_DATA = {
  "title": "Archaeology & modern life",
  "course": "Scientific Methodology in Archaeology & Advanced Scientific Methodology in Archaeology",
  "introduction": "Hello!\n\nAs archaeologists, we discover that many things in our modern lives have roots stretching far into the past. Modern technology might seem like an exception. Or is it?\n\nStudying archaeology has changed the way we look at everyday things, and we’d love to share some of those unexpected connections with you.\n\nThis quiz explores your thoughts and knowledge about things you may encounter, use, or talk about in everyday life. We hope you’ll have fun, discover something new, and perhaps even develop a little love for archaeology along the way! P.S. If you’re using a smartphone, scroll down after each answer to see the explanation and images!\n\nLet’s get started and remember, there are no wrong answers (actually, there are, but that’s okay)!",
  "creators": [
    "Nasia Grigoropoulou",
    "Sebastian Ward"
  ],
  "characters": {
    "laraStanding": {
      "src": "assets/lara-standing.png",
      "alt": "Lara Croft",
      "name": "Lara Croft"
    },
    "indianaWhip": {
      "src": "assets/indiana-whip.png",
      "alt": "LEGO Indiana Jones holding his whip",
      "name": "Indiana Jones"
    },
    "laraAction": {
      "src": "assets/lara-action.png",
      "alt": "Lara Croft in an action pose",
      "name": "Lara Croft"
    }
  },
  "results": {
    "high": {
      "title": "Let’s go digging!",
      "text": "Well, well, well, looks like we have an archaeologist among us. Congratulations, you know enough for us to call you one of us!\n\nIt is fascinating to learn new things, especially when they offer different perspectives on the world and the people around you. Humans continue to evolve, and we believe that understanding the past is just as important as understanding the present and imagining the future. Archaeology deserves a place in our modern lives, and maybe you see that too.\n\nEither way, we hope you enjoyed this quiz and perhaps learned something new! Feel free to explore your interests, and who knows? Maybe one day you’ll discover something brand new!",
      "characters": [
        {
          "src": "assets/lara-finale.png",
          "alt": "Lara Croft"
        },
        {
          "src": "assets/indiana-smiling-transparent.png",
          "alt": "Smiling LEGO Indiana Jones"
        }
      ],
      "signature": "LEGO Lara Croft and LEGO Indiana Jones wish you an exciting journey, and maybe they’ll see you in the field!"
    },
    "low": {
      "title": "There’s more to discover.",
      "text": "We don’t always need to win to have a good time! Many of these questions may have been unfamiliar to you, and that’s okay. The purpose of this quiz is to share some fun facts about the impact archaeology has on our modern lives, and regardless of your score, we hope we’ve achieved that with you.\n\nIf any of the questions sparked your interest, feel free to look for more information, open a map (because that usually helps), and who knows? Maybe you’ll discover something brand new!\n\nExplore your interests and our shared history. You might also discover that humans around the globe have more in common than you think!",
      "characters": [
        {
          "src": "assets/lara-encouragement-transparent.png",
          "alt": "LEGO Lara Croft"
        },
        {
          "src": "assets/indiana-encouragement-transparent.png",
          "alt": "LEGO Indiana Jones touching his hat"
        }
      ],
      "signature": "LEGO Lara Croft and LEGO Indiana Jones wish you an exciting journey wherever your curiosity takes you!"
    }
  },
  "questions": [
    {
      "id": 1,
      "text": "Does archaeology have an impact on our modern life?",
      "options": {
        "A": "No, I’m sure it doesn’t.",
        "B": "Archaeology? What’s that?",
        "C": "Maybe, I don’t really know.",
        "D": "Yes, absolutely!"
      },
      "correct": null,
      "character": null,
      "side": "left",
      "explanation": "",
      "image": null
    },
    {
      "id": 2,
      "text": "Which widely used pharmacy symbol has its roots in ancient depictions of a goddess of health?",
      "options": {
        "A": "A snake coiled around a bowl",
        "B": "An owl spreading its wings",
        "C": "A cat getting ready to pounce",
        "D": "A panda eating bamboo"
      },
      "correct": "A",
      "character": "laraStanding",
      "side": "left",
      "explanation": "This statuette of Hygieia, goddess of health and daughter of Asclepius, was discovered in Thessaloniki, Greece, in 1978. The snake survives, while the bowl she would have held is now missing. Together, the snake and bowl became a symbol of pharmacy.\n\nHer father’s staff, with a snake coiled around it, remains a symbol of medicine and appears in the emblem of the World Health Organization (WHO).",
      "image": [
        {
          "src": "assets/pharmacy.webp",
          "alt": "A snake coiled around a bowl, a symbol of pharmacy",
          "caption": "Pharmacy symbol"
        },
        {
          "src": "assets/hygieia.png",
          "alt": "Ancient statuette of Hygieia with a snake",
          "caption": "Statuette of Hygieia",
          "credit": "Archaeological Museum of Thessaloniki",
          "sourceUrl": "https://www.amth.gr/en/exhibitions/exhibit-of-the-month/2104"
        }
      ]
    },
    {
      "id": 3,
      "text": "Which object used in board games today has been found at Mohenjo-daro, in present-day Pakistan, dating to 2500–1900 BC?",
      "options": {
        "A": "A skipping rope",
        "B": "A yo-yo",
        "C": "A fidget spinner",
        "D": "A die"
      },
      "correct": "D",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Mohenjo-daro, in present-day Pakistan, was one of the largest cities of the ancient Indus Valley civilisation and an important early urban centre. Archaeologists have found dice, terracotta whistles and clay balls there, offering a glimpse into play and everyday life thousands of years ago.",
      "image": {
        "src": "assets/ancient-die.png",
        "alt": "A terracotta die from Mohenjo-daro",
        "caption": "Mohenjo-daro, 2500–1900 BC",
        "credit": "Ashmolean Museum",
        "sourceUrl": "https://jameelcentre.ashmolean.org/collection/921/object/11231"
      }
    },
    {
      "id": 4,
      "text": "Which favourite drink would suit a cosy, rainy autumn afternoon today, but was also enjoyed in China around 453–410 BC?",
      "options": {
        "A": "Coffee",
        "B": "Tea",
        "C": "Hot chocolate",
        "D": "Pumpkin Spice Latte"
      },
      "correct": "B",
      "character": "laraAction",
      "side": "left",
      "explanation": "During excavations in Zoucheng, Shandong Province, China, tea remains were discovered inside a porcelain bowl, making them the earliest known physical evidence of brewed tea in the world.",
      "image": [
        {
          "src": "assets/tea-bowl.jpg",
          "alt": "The bowl found in the tomb at Xigang",
          "caption": "The bowl"
        },
        {
          "src": "assets/tea-remains.jpg",
          "alt": "Ancient tea remains recovered from the bowl",
          "caption": "Tea remains",
          "credit": "Shandong University",
          "sourceUrl": "https://faculty-en.sdu.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbnewsid=125521&wbtreeid=1101"
        }
      ]
    },
    {
      "id": 5,
      "text": "Which of these has been part of the human story since its earliest chapters, as archaeological discoveries reveal?",
      "options": {
        "A": "Smoking",
        "B": "Knitting",
        "C": "Migration",
        "D": "Watching “Friends”"
      },
      "correct": "C",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Movement has always been part of the human story. From early human populations and hunter-gatherer communities to the spread of agriculture and beyond, people travelled vast distances in search of food, resources and places to live, responding to their needs and changes in the environment.",
      "image": {
        "src": "assets/migration.svg",
        "alt": "A map illustrating the spread of Homo sapiens",
        "caption": "Human migration"
      }
    },
    {
      "id": 6,
      "text": "What solution did ancient Romans use to deal with head lice?",
      "options": {
        "A": "Tomato sauce",
        "B": "Olive oil",
        "C": "A lice comb",
        "D": "A haircut"
      },
      "correct": "C",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Excavations have uncovered combs dating to the Roman period with two different sides, one with more widely spaced teeth and the other with finer, closely spaced teeth for removing head lice. They look incredibly similar to the ones we use today, showing us that, no matter how many years pass, a good design can remain useful!",
      "image": [
        {
          "src": "assets/ancient-lice-comb.png",
          "alt": "An ancient wooden comb with coarse and fine teeth",
          "caption": "Roman comb",
          "credit": "London Museum",
          "sourceUrl": "https://www.londonmuseum.org.uk/collections/v/object-26572/comb/"
        },
        {
          "src": "assets/modern-lice-comb.jpg",
          "alt": "A modern plastic lice comb",
          "caption": "Modern lice comb"
        }
      ]
    },
    {
      "id": 7,
      "text": "Which cosmetic has its roots in Ancient Egypt?",
      "options": {
        "A": "Eyeliner",
        "B": "Contouring brush",
        "C": "Retinol serum",
        "D": "Cleansing soap"
      },
      "correct": "A",
      "character": "laraAction",
      "side": "left",
      "explanation": "Black eye paint was also used for eye protection. One of its main ingredients was galena, a mineral containing lead, which may have helped repel flies and protect against organisms that could cause eye infections and blindness. Green eye paint, made from malachite, completed the look and seems to have had a mainly cosmetic role.",
      "image": {
        "src": "assets/egyptian-cosmetics.png",
        "alt": "Three ancient Egyptian cosmetic containers and an applicator",
        "caption": "Cosmetic containers and applicator",
        "credit": "The Metropolitan Museum of Art",
        "sourceUrl": "https://www.metmuseum.org/art/collection/search/543963"
      }
    },
    {
      "id": 8,
      "text": "What does cheese have in common with an ancient tomb in Greece dating to the 9th century BC?",
      "options": {
        "A": "They both stink",
        "B": "An ageing period",
        "C": "They can both be very white",
        "D": "A grater"
      },
      "correct": "D",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Bronze graters have been found in graves dating to the 9th century BC at Lefkandi, on the Greek island of Euboea. In Homer’s Iliad, a bronze grater is used to grate goat’s cheese into a mixture with wine. So this familiar kitchen tool already existed in ancient Greece, although the exact uses of the graters found in the graves are still debated.",
      "image": {
        "src": "assets/ancient-graters.webp",
        "alt": "A collection of ancient Greek graters",
        "caption": "Examples of ancient Greek graters",
        "credit": "© Trustees of the British Museum",
        "sourceUrl": "https://www.karwansaraypublishers.com/blogs/ancient-history-blog/ancient-greek-cheese-graters"
      }
    },
    {
      "id": 9,
      "text": "What is essential for both an average skier and an Inuit person from AD 1000–1600?",
      "options": {
        "A": "Sunscreen",
        "B": "Compression ski socks",
        "C": "An après-ski hangover",
        "D": "Snow goggles"
      },
      "correct": "D",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Snow goggles were designed to protect the eyesight of Inuit people from snow blindness when they were outdoors. Snow blindness is basically a sunburn of the eyes that affects vision. Many Inuit groups are known to have made snow goggles to overcome this risk, usually out of ivory or wood.",
      "image": [
        {
          "src": "assets/snow-goggles-front.jpg",
          "alt": "Inuit snow goggles viewed from the front",
          "caption": "Snow goggles, front view",
          "credit": "Canadian Museum of History",
          "sourceUrl": "https://www.historymuseum.ca/collections/artifact/855927"
        },
        {
          "src": "assets/snow-goggles-back.jpg",
          "alt": "Inuit snow goggles viewed from the back",
          "caption": "Snow goggles, back view",
          "credit": "Canadian Museum of History",
          "sourceUrl": "https://www.historymuseum.ca/collections/artifact/855927"
        }
      ]
    },
    {
      "id": 10,
      "text": "When was the first known analogue computer created?",
      "options": {
        "A": "1931 AD, the Differential Analyzer",
        "B": "150–100 BC, the Antikythera Mechanism",
        "C": "1872 AD, the Tide-Predicting Machine",
        "D": "1920 AD, the Norden Bombsight"
      },
      "correct": "B",
      "character": "laraAction",
      "side": "left",
      "explanation": "The Antikythera Mechanism was recovered from a shipwreck in 1901 by sponge divers from the Greek island of Symi. It is the oldest known analogue computer, capable of predicting solar and lunar eclipses and calculating astronomical and calendar cycles. This remarkably advanced mechanism used a complex system of gears, with displays including a zodiac scale and Egyptian month names. It even tracked the cycle of ancient athletic festivals, including the Olympic Games!",
      "image": {
        "src": "assets/antikythera.jpg",
        "alt": "An ancient Antikythera Mechanism fragment beside a reconstruction",
        "caption": "The Antikythera Mechanism and a reconstruction"
      }
    },
    {
      "id": 11,
      "text": "You are in Egypt around 3100 BC and want to order something from Tell es-Sakan, in present-day Gaza. What would you order?",
      "options": {
        "A": "Wine",
        "B": "Cement",
        "C": "A bouquet of roses",
        "D": "Teddy bears"
      },
      "correct": "A",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Tell es-Sakan, in present-day Gaza, was part of ancient Canaan. Archaeological finds dating to the Early Bronze Age provide evidence of human settlement and offer valuable information about trade between Egypt and the eastern Mediterranean. The large number of wine jars found there suggests that wine was an important export to Egypt.\n\nToday, Gaza’s archaeological and cultural heritage faces the risk of irreversible loss. Protecting heritage throughout the region is essential to preserving the evidence of these communities, their everyday lives and their connections across thousands of years.",
      "image": {
        "src": "assets/tell-es-sakan.png",
        "alt": "Excavations at Tell es-Sakan, in present-day Gaza",
        "caption": "Excavations at Tell es-Sakan, in present-day Gaza",
        "sourceUrl": "https://library.biblicalarchaeology.org/book/the-new-encyclopedia-of-archaeological-excavations-in-the-holy-land/sakan-tell-es/",
        "credit": "Source: The BAS Library"
      }
    },
    {
      "id": 12,
      "text": "Which of these common activities were also normal for people living in Sweden 10,000 years ago?",
      "options": {
        "A": "Making coffee",
        "B": "Cycling to work",
        "C": "Chewing gum",
        "D": "Writing"
      },
      "correct": "C",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Several examples of prehistoric “chewing gum”, made from birch pitch, have been discovered throughout Scandinavia. A number of samples from Sweden are between 9,500-9,900 years old! Archaeologists have been able to extract DNA samples from pieces of ancient gum from which they’ve uncovered information on the genes and likely appearances of the people who chewed them, as well as their oral health through the DNA of their microbiomes.",
      "image": {
        "src": "assets/gum.jpeg",
        "alt": "(Birch gum and casts, Stockholm University)",
        "caption": "(Birch gum and casts, Stockholm University)"
      }
    },
    {
      "id": 13,
      "text": "Which ancient civilization played a sport similar to modern basketball or soccer, complete with hoops, courts, and rules against using your hands?",
      "options": {
        "A": "Sumer",
        "B": "The Han dynasty",
        "C": "The Maya",
        "D": "Sparta"
      },
      "correct": "C",
      "character": "laraAction",
      "side": "left",
      "explanation": "Many mesoamerican cities, most famously the Mayan cities throughout the Yucatan region of Mexico and Central America, contain stone courts for pok-ta-pok, or “ballgame”. These courts typically have carved stone hoops mounted sideways at the top of the court walls. Artistic depictions on ceramics and murals, as well as written descriptions and preserved rubber balls, outline a game where teams of 2 to 6 players used their hips, knees, and elbows to either pass the ball past the opposing team's end zone or shoot it through one of the stone hoops.",
      "image": [
        {
          "src": "assets/hoops.jpeg",
          "alt": "(Ball court, World History Encyclopedia)",
          "caption": "(Ball court, World History Encyclopedia)"
        },
        {
          "src": "assets/hoops2.jpeg",
          "alt": "Mural depicting the ballgame, Maya Archaeologist",
          "caption": "Mural depicting the ballgame, Maya Archaeologist"
        }
      ]
    },
    {
      "id": 14,
      "text": "What two finds from the ancient city of Pompeii can also be found on a street in any major city today?",
      "options": {
        "A": "Fast food stands and graffiti",
        "B": "Rows of tombs and mosaic floors",
        "C": "Traffic jams and tourists",
        "D": "Plaster casts of human and canine bodies"
      },
      "correct": "A",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Among the many archeological discoveries at the Roman city of Pompeii, researchers have excavated a “thermopolium”. This site likely functioned as a sort of fast food hub where vendors could sell various food items from long counters that doubled as stovetops. These counters even have preserved artwork of the animals whose meat was sold at the stands. In other areas, painted and carved graffiti remains on the walls of buildings. Much like today’s street art, this ancient graffiti was made up of drawings as well as names, jokes, insults, arguments, and conversations.",
      "image": [
        {
          "src": "assets/food-stants.jpeg",
          "alt": "Thermopolium, Archaeological Park of Pompeii",
          "caption": "Thermopolium, Archaeological Park of Pompeii"
        },
        {
          "src": "assets/grafitti.jpeg",
          "alt": "Graffiti writing, Cambridge University",
          "caption": "Graffiti writing, Cambridge University"
        }
      ]
    },
    {
      "id": 15,
      "text": "How far back in time have archaeological genetics been able to go to connect a living person with an ancient ancestor?",
      "options": {
        "A": "1,000 years",
        "B": "Definitely before yesterday",
        "C": "50,000 years",
        "D": "10,000 years"
      },
      "correct": "D",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "The 10,300 year old skeleton known as “Cheddar Man” was discovered in England in 1903. Archaeologists have done extensive research on the skeleton, including a modern genetic test of residents in the surrounding area which connected a man in the village of Cheddar, only a few kilometers from the site of the excavation, to Cheddar Man through a common female ancestor!",
      "image": {
        "src": "assets/MustardMan.jpeg",
        "alt": "Possible reconstruction of Cheddar Man, Academia",
        "caption": "Possible reconstruction of Cheddar Man, Academia"
      }
    },
    {
      "id": 16,
      "text": "The archaeology of which of the following regions relies on collaboration with indigenous communities who maintain ancient practices and provide information on artifacts and sites?",
      "options": {
        "A": "Northern Europe",
        "B": "East Asia",
        "C": "Southwest United States",
        "D": "Atlantis"
      },
      "correct": "C",
      "character": "laraAction",
      "side": "left",
      "explanation": "Though it is certainly not the only place of this kind, archaeology in the American Southwest is especially well preserved because of the cultures and histories of the many indigenous communities living throughout the region. Many of these groups maintain oral traditions that provide key information on the movements of people throughout history. Beyond this, they commonly use items and practice traditions the same way their ancestors did well before European colonization and into the deep past. As a result, their direct involvement in archaeological research is extremely important and provides an example for how to directly connect the past with the present.",
      "image": [
        {
          "src": "assets/Ancient rock art .jpeg",
          "alt": "Ancient rock art believed to depict a Zuni Shalako spirit",
          "caption": "Ancient rock art believed to depict a Zuni Shalako spirit"
        },
        {
          "src": "assets/Shalako ceremony.jpeg",
          "alt": "Rare photo of a Shalako ceremony)",
          "caption": "Rare photo of a Shalako ceremony)"
        }
      ]
    },
    {
      "id": 17,
      "text": "What does your house have in common with a 5,000 year old home in Iraq, India, or Scotland?",
      "options": {
        "A": "Glass windows",
        "B": "Running water",
        "C": "Nosy neighbors",
        "D": "Heating"
      },
      "correct": "B",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Sites in all of these areas like Lothal in India, Skara Brae in Scotland, and both Nippur and Uruk in Iraq feature dug out drainage systems under buildings and houses. Dating as far back as 3-4,000 BCE, these likely functioned to carry away waste water and in some cases might represent the world’s earliest true toilets. Other theories suspect that these systems may have even served to draw baths with built in hot or cold water. Each of these civilizations would have developed this technology independently. If there’s one thing a house in any time and place needed, it was apparently a working bathroom.",
      "image": {
        "src": "assets/drainage system.jpeg",
        "alt": "Indus river valley drainage system",
        "caption": "Indus river valley drainage system"
      }
    },
    {
      "id": 18,
      "text": "Who can you thank for the inventions that led to your compass, gps, and navigation apps?",
      "options": {
        "A": "Ancient Chinese inventors",
        "B": "Modern corporations",
        "C": "18th century pirates",
        "D": "The Romans"
      },
      "correct": "A",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "The first true magnetic compasses appear in Chinese writings at least as early as the Han dynasty period between 202 BCE and 220 CE. Though they were originally used for divination, Chinese compasses made from iron and magnetized minerals became useful tools for ocean navigation by the 11th or 12th centuries CE. It’s no google maps, but without ancient Chinese divination, we’d be stuck asking strangers for directions.",
      "image": {
        "src": "assets/figurine with compass.jpeg",
        "alt": "A figurine holding a compass",
        "caption": "Song dynasty (1127-1279) figurine holding a compass"
      }
    },
    {
      "id": 19,
      "text": "When did human societies start intentionally altering and managing their surrounding environments?",
      "options": {
        "A": "1,200 years ago",
        "B": "17,000 years ago",
        "C": "4,500 years ago",
        "D": "92,000 years ago"
      },
      "correct": "D",
      "character": "laraAction",
      "side": "left",
      "explanation": "Although its likely people practiced it even earlier, the first known evidence for land management comes from the shores of Lake Malawi in east Africa. A combination of artifacts and environmental data reveal that groups in the area used fire either for controlled burns or land clearance around 92,000 years ago. Evidence for similar clearance, management, and cultivation in the distant past continues to arise around the world, and allows researchers to understand how past societies used and/or cared for their environments. This knowledge in turn influences research on contemporary preservation and land usage strategies.",
      "image": {
        "src": "assets/excavation.jpeg",
        "alt": "Archaeological excavation near Lake Malawi",
        "caption": "Excavation of one of the burn sites near lake Malawi"
      }
    },
    {
      "id": 20,
      "text": "Does archaeology have an impact on our modern life?",
      "options": {
        "A": "No, I’m sure it doesn’t.",
        "B": "Archaeology? What’s that?",
        "C": "Maybe, I don’t really know.",
        "D": "Yes, absolutely!"
      },
      "correct": "D",
      "character": null,
      "side": "left",
      "explanation": "",
      "image": null
    }
  ]
};
