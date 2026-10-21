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
  "introduction": "Hello!\n\nAs archaeologists, we discover that many things in our modern lives have roots stretching far into the past. Modern technology might seem like an exception. Or is it?\n\nStudying archaeology has changed the way we look at everyday things, and we’d love to share some of those unexpected connections with you.\n\nThis quiz explores your thoughts and knowledge about things you may encounter, use, or talk about in everyday life. We hope you’ll have fun, discover something new, and perhaps even develop a little love for archaeology along the way!\n\nLet’s get started and remember, there are no wrong answers (actually, there are, but that’s okay)!",
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
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "characters": [
        {
          "src": "assets/lara-finale.png",
          "alt": "Lara Croft"
        },
        {
          "src": "assets/indiana-smiling-transparent.png",
          "alt": "Smiling LEGO Indiana Jones"
        }
      ]
    },
    "low": {
      "title": "There’s more to discover.",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "characters": [
        {
          "src": "assets/lara-encouragement-transparent.png",
          "alt": "LEGO Lara Croft"
        },
        {
          "src": "assets/indiana-encouragement-transparent.png",
          "alt": "LEGO Indiana Jones touching his hat"
        }
      ]
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
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "D",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
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
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "A",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 12,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "C",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 13,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "C",
      "character": "laraAction",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 14,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "A",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 15,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "D",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 16,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "C",
      "character": "laraAction",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 17,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "B",
      "character": "laraStanding",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 18,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "A",
      "character": "indianaWhip",
      "side": "right",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    },
    {
      "id": 19,
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      "options": {
        "A": "Lorem ipsum dolor sit amet.",
        "B": "Consectetur adipiscing elit.",
        "C": "Sed do eiusmod tempor.",
        "D": "Ut labore et dolore magna."
      },
      "correct": "D",
      "character": "laraAction",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
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
      "character": "laraStanding",
      "side": "left",
      "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image": null
    }
  ]
};
