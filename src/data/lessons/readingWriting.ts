import { Lesson } from '../../types';

export const readingWritingLessons: Lesson[] = [
  // Vocabulary (5 lessons)
  {
    id: 'lesson-vocab-001',
    title: 'Understanding Word Roots',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 15,
    description: 'Learn how word roots form the foundation of English words and help you decode unfamiliar vocabulary.',
    content: {
      introduction: 'Word roots are the core parts of words that carry the main meaning. Understanding roots can help you figure out what unfamiliar words mean, even if you\'ve never seen them before!',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Word Root?'
        },
        {
          type: 'text',
          content: 'A word root is the basic part of a word that carries the primary meaning. Many English words share common roots from Latin and Greek. For example, the root "PORT" means "to carry." When you understand this root, you can figure out words like "transport," "portable," "import," and "export."'
        },
        {
          type: 'heading',
          content: 'Common Word Roots'
        },
        {
          type: 'text',
          content: 'PORT (carry): transport, portable, import, export, deport\nMIT/MISS (send): submit, emit, transmit, mission, missile\nSCRIB/SCRIPT (write): prescribe, describe, subscription, manuscript\nSTRUCT (build): construct, instruct, structure, obstruct\nVOC/VOX (voice): vocal, vocabulary, voice, convoke'
        }
      ],
      examples: [
        {
          title: 'Example 1: PORT',
          problem: 'What does "transport" mean?',
          solution: 'Trans (across) + port (carry) = to carry across',
          explanation: 'Breaking down "transport" into its root parts helps you understand its meaning without needing to look it up in a dictionary.'
        },
        {
          title: 'Example 2: SCRIPT',
          problem: 'What does "manuscript" mean?',
          solution: 'Manu (hand) + script (write) = something written by hand',
          explanation: 'Understanding these roots makes vocabulary building much easier!'
        }
      ],
      summary: 'Word roots are powerful tools for understanding unfamiliar vocabulary. By learning common Latin and Greek roots, you can decode the meaning of thousands of words. Practice identifying roots in new words to expand your vocabulary quickly.'
    },
    keyPoints: [
      'Roots carry the primary meaning of words',
      'Many roots come from Latin and Greek',
      'One root can form many different words',
      'Understanding roots helps with vocabulary on tests'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing a root with a prefix or suffix',
      'Assuming similar-looking roots have the same meaning',
      'Not considering the prefix when determining word meaning'
    ],
    tips: [
      'Create flashcards with root words and their meanings',
      'Look for roots in word families',
      'Practice with familiar words first, then unfamiliar ones',
      'Say the root meaning aloud to help remember it'
    ],
    practiceQuestions: ['q-vocab-001', 'q-vocab-002'],
    estimatedReadTime: 12,
    orderIndex: 1
  },
  {
    id: 'lesson-vocab-002',
    title: 'Prefixes and Suffixes',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 15,
    description: 'Discover how prefixes and suffixes change word meanings and expand your vocabulary exponentially.',
    content: {
      introduction: 'Prefixes are added to the beginning of words, and suffixes are added to the end. These word parts change or enhance the meaning of the root word.',
      mainContent: [
        {
          type: 'heading',
          content: 'What are Prefixes?'
        },
        {
          type: 'text',
          content: 'A prefix is a word part added to the beginning of a root word. Prefixes typically change the meaning of the word. Common prefixes include: UN- (not), RE- (again), PRE- (before), DIS- (not/opposite), MIS- (wrong), OVER- (too much), UNDER- (not enough).'
        },
        {
          type: 'heading',
          content: 'What are Suffixes?'
        },
        {
          type: 'text',
          content: 'A suffix is a word part added to the end of a root word. Suffixes often change the part of speech or add to the meaning. Common suffixes include: -LY (adverb), -TION (noun), -MENT (noun), -ABLE (adjective), -LESS (without), -FUL (full of), -ING (verb form).'
        }
      ],
      examples: [
        {
          title: 'Prefix Example',
          problem: 'What does "unhappy" mean?',
          solution: 'UN- (not) + happy = not happy',
          explanation: 'The prefix changes the meaning from positive to negative.'
        },
        {
          title: 'Suffix Example',
          problem: 'What does "joyfully" mean?',
          solution: 'Joy (noun) + -FUL (full of) + -LY (adverb) = in a way full of joy',
          explanation: 'The suffixes change the part of speech and meaning.'
        }
      ],
      summary: 'Prefixes and suffixes are essential tools for expanding vocabulary. By learning common prefixes and suffixes, you can understand thousands of words by recognizing their word parts.'
    },
    keyPoints: [
      'Prefixes go at the beginning and change word meaning',
      'Suffixes go at the end and change meaning or part of speech',
      'Word parts can combine to create complex meanings',
      'Recognizing patterns helps decode unfamiliar words'
    ],
    prerequisites: ['lesson-vocab-001'],
    commonMistakes: [
      'Confusing prefixes with suffixes',
      'Not considering all word parts when determining meaning',
      'Forgetting that spelling may change when adding suffixes'
    ],
    tips: [
      'Study prefixes and suffixes in groups with similar meanings',
      'Create word family charts showing how parts combine',
      'Practice finding prefixes and suffixes in reading material'
    ],
    practiceQuestions: ['q-vocab-003', 'q-vocab-004'],
    estimatedReadTime: 12,
    orderIndex: 2
  },
  {
    id: 'lesson-vocab-003',
    title: 'Context Clues and Word Meaning',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 15,
    description: 'Learn to determine word meanings from surrounding text using context clues.',
    content: {
      introduction: 'Context clues are hints in the text that help you figure out the meaning of unfamiliar words. Good readers use context clues constantly to understand new vocabulary.',
      mainContent: [
        {
          type: 'heading',
          content: 'Types of Context Clues'
        },
        {
          type: 'text',
          content: 'Definition Clue: The text directly defines the word. Example: "The photosynthesis, the process by which plants make food, requires sunlight."\n\nSynonym Clue: A similar word is provided. Example: "His benevolence, or kindness, was known throughout the town."\n\nAntonym Clue: An opposite word is provided. Example: "Unlike his gregarious sister, Tom was solitary and withdrawn."\n\nExample Clue: Examples help explain the word. Example: "Nocturnal animals, such as owls and bats, are active at night."\n\nComparison Clue: Similar situations clarify meaning. Example: "Just as a drought harms farmers, a recession harms the economy."'
        }
      ],
      examples: [
        {
          title: 'Definition Clue Example',
          problem: 'What does "ardent" mean? "Her ardent passion for music, a burning enthusiasm, was clear to everyone."',
          solution: 'Ardent = a burning enthusiasm = passionate',
          explanation: 'The text directly defines ardent for us.'
        },
        {
          title: 'Contrast Clue Example',
          problem: 'What does "laconic" mean? "Unlike his verbose friend who talked constantly, Marcus was laconic."',
          solution: 'Laconic means the opposite of verbose = using few words',
          explanation: 'The contrast helps us understand the meaning.'
        }
      ],
      summary: 'Context clues are your best tool for understanding unfamiliar words. Learn to identify the type of clue and use it to determine word meaning without interrupting your reading.'
    },
    keyPoints: [
      'Context clues help determine word meaning from surrounding text',
      'Different types of clues provide different hints',
      'Definitions, synonyms, and antonyms are common clues',
      'Examples in the text can clarify meaning'
    ],
    prerequisites: [],
    commonMistakes: [
      'Ignoring context and guessing randomly',
      'Assuming the clue is always right next to the word',
      'Missing negative context clues'
    ],
    tips: [
      'Read the entire sentence and surrounding sentences',
      'Look for signal words like "or," "like," "such as," and "unlike"',
      'Ask yourself: what type of clue is this?'
    ],
    practiceQuestions: ['q-vocab-005', 'q-vocab-006'],
    estimatedReadTime: 12,
    orderIndex: 3
  },
  {
    id: 'lesson-vocab-004',
    title: 'Word Families and Relationships',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'medium',
    duration: 20,
    description: 'Understand how words relate to each other and form families based on shared roots.',
    content: {
      introduction: 'Words that share the same root form "word families." Understanding word families helps you learn multiple related words at once.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Word Family?'
        },
        {
          type: 'text',
          content: 'A word family consists of words that share the same root or base. For example, the family of STRUCT includes: construct, structure, instruct, destruct, infrastructure, obstruct, reconstruct, and instruction. By learning one root, you can understand all related words.'
        },
        {
          type: 'heading',
          content: 'How Words Relate'
        },
        {
          type: 'text',
          content: 'Words can relate through: 1) Shared roots (GRAPH: graph, graphic, geography), 2) Synonyms (happy, joyful, cheerful), 3) Antonyms (hot, cold), 4) Related concepts (school, teacher, student, classroom)'
        }
      ],
      examples: [
        {
          title: 'Word Family Example',
          problem: 'Group related words: teach, education, educate, teacher, learned',
          solution: 'Teach family: teach, teacher, teaching / Educate family: educate, education, educated, educational',
          explanation: 'Words in families often have similar meanings despite different forms.'
        }
      ],
      summary: 'Word families are powerful for vocabulary building. When you learn one word deeply, you gain understanding of related words instantly.'
    },
    keyPoints: [
      'Word families share common roots or bases',
      'Learning one word in a family helps you understand others',
      'Words relate through roots, meanings, and concepts',
      'Building word families is more efficient than isolated word learning'
    ],
    prerequisites: ['lesson-vocab-001', 'lesson-vocab-002'],
    commonMistakes: [
      'Missing less common words in a family',
      'Confusing words that look similar but have different meanings'
    ],
    tips: [
      'Create concept maps showing word families',
      'Practice generating different forms of words',
      'Read widely to encounter word families in context'
    ],
    practiceQuestions: ['q-vocab-007'],
    estimatedReadTime: 15,
    orderIndex: 4
  },
  {
    id: 'lesson-vocab-005',
    title: 'Common Idioms and Expressions',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn common idioms and figurative expressions that appear frequently in reading comprehension.',
    content: {
      introduction: 'Idioms are phrases whose meanings cannot be understood from the individual words. Learning common idioms helps you understand authors\' full intent.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is an Idiom?'
        },
        {
          type: 'text',
          content: 'An idiom is a phrase or expression whose meaning is different from the literal meaning of the words. For example, "It\'s raining cats and dogs" doesn\'t mean actual cats and dogs are falling—it means it\'s raining heavily.'
        },
        {
          type: 'heading',
          content: 'Common Idioms'
        },
        {
          type: 'text',
          content: 'Break the ice = start a conversation\nBeat around the bush = avoid the main point\nJump to conclusions = make assumptions without facts\nUnder the weather = feeling sick\nBite the bullet = accept something difficult\nHit the books = study hard\nPiece of cake = something easy\nBetter late than never = arriving late is still acceptable'
        }
      ],
      examples: [
        {
          title: 'Idiom Example',
          problem: 'What does "The meeting was a piece of cake" mean?',
          solution: 'The meeting was easy; it went smoothly',
          explanation: 'Piece of cake is an idiom meaning something is simple or easy.'
        }
      ],
      summary: 'Idioms are used frequently in literature and everyday speech. Recognizing and understanding idioms prevents misunderstanding of authors\' messages.'
    },
    keyPoints: [
      'Idioms have figurative meanings different from literal meanings',
      'Many idioms are culture and time-specific',
      'Understanding idioms helps with reading comprehension',
      'Idioms cannot be translated word-for-word'
    ],
    prerequisites: [],
    commonMistakes: [
      'Taking idioms literally',
      'Not recognizing when an expression is an idiom',
      'Assuming all English speakers know every idiom'
    ],
    tips: [
      'Keep a list of idioms you encounter while reading',
      'Learn idioms in context rather than in isolation',
      'Notice how different cultures have different idioms'
    ],
    practiceQuestions: ['q-vocab-008'],
    estimatedReadTime: 15,
    orderIndex: 5
  },

  // Grammar (5 lessons)
  {
    id: 'lesson-grammar-001',
    title: 'Sentence Structure and Clauses',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'easy',
    duration: 20,
    description: 'Understand the foundation of proper sentence structure with clauses and phrase relationships.',
    content: {
      introduction: 'Every sentence has a structure made up of clauses and phrases. Understanding these components helps you write clear, grammatically correct sentences.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Clause?'
        },
        {
          type: 'text',
          content: 'A clause is a group of words with a subject and verb. There are two types:\n\n1) Independent Clause: Contains a complete thought and can stand alone as a sentence. Example: "The dog barked."\n\n2) Dependent Clause: Does not express a complete thought and cannot stand alone. Example: "When the dog barked" or "Because I was tired."'
        },
        {
          type: 'heading',
          content: 'Sentence Types'
        },
        {
          type: 'text',
          content: 'Simple Sentence: One independent clause. "Dogs bark."\n\nCompound Sentence: Two or more independent clauses. "Dogs bark, and cats meow."\n\nComplex Sentence: One independent clause and one or more dependent clauses. "When dogs see strangers, they bark."\n\nCompound-Complex: Two or more independent clauses and one or more dependent clauses.'
        }
      ],
      examples: [
        {
          title: 'Clause Example',
          problem: 'Identify the clauses: "Although it was raining, we went to the park."',
          solution: 'Dependent: "Although it was raining" / Independent: "we went to the park"',
          explanation: 'The dependent clause cannot stand alone; the independent clause can.'
        }
      ],
      summary: 'Clause structure is fundamental to writing correctly. Practice identifying independent and dependent clauses to improve both writing and reading comprehension.'
    },
    keyPoints: [
      'Clauses contain a subject and verb',
      'Independent clauses express complete thoughts',
      'Dependent clauses do not express complete thoughts',
      'Sentence types depend on the number and type of clauses'
    ],
    prerequisites: [],
    commonMistakes: [
      'Creating sentence fragments by using only dependent clauses',
      'Creating run-on sentences by combining independent clauses incorrectly',
      'Misidentifying phrases as clauses'
    ],
    tips: [
      'Look for the subject and verb in each clause',
      'Use punctuation (periods, commas, semicolons) correctly',
      'Vary your sentence types in writing for better flow'
    ],
    practiceQuestions: ['lesson-gram-agreement-001-q01', 'lesson-gram-agreement-001-q02', 'lesson-gram-agreement-001-q03', 'lesson-gram-agreement-001-q04', 'lesson-gram-agreement-001-q05', 'lesson-gram-agreement-001-q06', 'lesson-gram-agreement-001-q07', 'lesson-gram-agreement-001-q08', 'lesson-gram-agreement-001-q09', 'lesson-gram-agreement-001-q10', 'lesson-gram-agreement-001-q11', 'lesson-gram-agreement-001-q12', 'lesson-gram-agreement-001-q13', 'lesson-gram-agreement-001-q14', 'lesson-gram-agreement-001-q15', 'lesson-gram-agreement-001-q16', 'lesson-gram-agreement-001-q17', 'lesson-gram-agreement-001-q18', 'lesson-gram-agreement-001-q19', 'lesson-gram-agreement-001-q20'],
    estimatedReadTime: 15,
    orderIndex: 6
  },
  {
    id: 'lesson-grammar-002',
    title: 'Verb Tenses and Consistency',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 20,
    description: 'Master verb tenses and learn to maintain consistency throughout writing.',
    content: {
      introduction: 'Verbs change form to show when an action happens. Consistent verb tense usage is crucial for clear writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Twelve Verb Tenses'
        },
        {
          type: 'text',
          content: 'Present: I walk, He walks\nPast: I walked, He walked\nFuture: I will walk, He will walk\n\nPresent Perfect: I have walked, He has walked\nPast Perfect: I had walked, He had walked\nFuture Perfect: I will have walked, He will have walked\n\nPresent Progressive: I am walking, He is walking\nPast Progressive: I was walking, He was walking\nFuture Progressive: I will be walking, He will be walking\n\nPresent Perfect Progressive: I have been walking\nPast Perfect Progressive: I had been walking\nFuture Perfect Progressive: I will have been walking'
        },
        {
          type: 'heading',
          content: 'Maintaining Tense Consistency'
        },
        {
          type: 'text',
          content: 'Within a sentence or paragraph, keep verbs in the same tense unless there\'s a reason to change. Shift tenses only when describing actions that occurred at different times.'
        }
      ],
      examples: [
        {
          title: 'Tense Consistency Example',
          problem: 'Fix the tense error: "She walks to the store and bought milk."',
          solution: 'Correct: "She walks to the store and buys milk." OR "She walked to the store and bought milk."',
          explanation: 'Both actions should be in the same tense.'
        }
      ],
      summary: 'Mastering verb tenses takes practice. Focus on the most common tenses first, then gradually learn the perfect and progressive tenses.'
    },
    keyPoints: [
      'Verbs change form to indicate time',
      'There are twelve basic verb tenses',
      'Maintain tense consistency within a piece of writing',
      'Change tenses only when describing actions at different times'
    ],
    prerequisites: [],
    commonMistakes: [
      'Shifting tenses inconsistently',
      'Incorrectly using "been" and "being"',
      'Confusing present perfect with past tense'
    ],
    tips: [
      'Choose a primary tense before writing',
      'Read your work aloud to catch tense shifts',
      'Remember: have/has + past participle = perfect tenses'
    ],
    practiceQuestions: ['lesson-gram-tense-002-q01', 'lesson-gram-tense-002-q02', 'lesson-gram-tense-002-q03', 'lesson-gram-tense-002-q04', 'lesson-gram-tense-002-q05', 'lesson-gram-tense-002-q06', 'lesson-gram-tense-002-q07', 'lesson-gram-tense-002-q08', 'lesson-gram-tense-002-q09', 'lesson-gram-tense-002-q10', 'lesson-gram-tense-002-q11', 'lesson-gram-tense-002-q12', 'lesson-gram-tense-002-q13', 'lesson-gram-tense-002-q14', 'lesson-gram-tense-002-q15', 'lesson-gram-tense-002-q16', 'lesson-gram-tense-002-q17', 'lesson-gram-tense-002-q18', 'lesson-gram-tense-002-q19', 'lesson-gram-tense-002-q20'],
    estimatedReadTime: 15,
    orderIndex: 7
  },
  {
    id: 'lesson-grammar-003',
    title: 'Pronouns and Antecedents',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn to use pronouns correctly by matching them to their antecedents.',
    content: {
      introduction: 'Pronouns replace nouns to avoid repetition. A pronoun\'s antecedent is the noun it refers to. Clear pronoun reference is essential for clear writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'Pronoun Types'
        },
        {
          type: 'text',
          content: 'Personal pronouns: I, you, he, she, it, we, they (and their object forms: me, you, him, her, it, us, them)\n\nPossessive pronouns: mine, yours, his, hers, its, ours, theirs\n\nDemonstrative pronouns: this, that, these, those\n\nInterrogative pronouns: who, whom, which, what\n\nRelative pronouns: who, whom, which, that, whose'
        },
        {
          type: 'heading',
          content: 'Pronoun-Antecedent Agreement'
        },
        {
          type: 'text',
          content: 'A pronoun must agree with its antecedent in:\n1) Number (singular or plural)\n2) Gender (male, female, or neutral)\n3) Person (first, second, or third)'
        }
      ],
      examples: [
        {
          title: 'Agreement Example',
          problem: 'Fix the error: "Each student must submit their homework."',
          solution: '"Each student must submit his or her homework." OR "All students must submit their homework."',
          explanation: '"Each" is singular, so the pronoun should be singular too.'
        }
      ],
      summary: 'Clear pronoun reference prevents confusion. Always ensure your pronouns clearly match their antecedents in number, gender, and person.'
    },
    keyPoints: [
      'Pronouns replace nouns to avoid repetition',
      'An antecedent is the noun a pronoun refers to',
      'Pronouns must agree with antecedents in number and gender',
      'Clear reference prevents confusing writing'
    ],
    prerequisites: [],
    commonMistakes: [
      'Using singular pronouns with plural nouns',
      'Vague pronoun references',
      'Using wrong pronoun case (I vs. me, who vs. whom)'
    ],
    tips: [
      'Identify the antecedent before using a pronoun',
      'Check that pronouns match in number and gender',
      'When in doubt, repeat the noun instead of using a pronoun'
    ],
    practiceQuestions: ['lesson-gram-pronouns-003-q01', 'lesson-gram-pronouns-003-q02', 'lesson-gram-pronouns-003-q03', 'lesson-gram-pronouns-003-q04', 'lesson-gram-pronouns-003-q05', 'lesson-gram-pronouns-003-q06', 'lesson-gram-pronouns-003-q07', 'lesson-gram-pronouns-003-q08', 'lesson-gram-pronouns-003-q09', 'lesson-gram-pronouns-003-q10', 'lesson-gram-pronouns-003-q11', 'lesson-gram-pronouns-003-q12', 'lesson-gram-pronouns-003-q13', 'lesson-gram-pronouns-003-q14', 'lesson-gram-pronouns-003-q15', 'lesson-gram-pronouns-003-q16', 'lesson-gram-pronouns-003-q17', 'lesson-gram-pronouns-003-q18', 'lesson-gram-pronouns-003-q19', 'lesson-gram-pronouns-003-q20'],
    estimatedReadTime: 15,
    orderIndex: 8
  },
  {
    id: 'lesson-grammar-004',
    title: 'Parallel Structure',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 20,
    description: 'Master parallel structure to create balanced, effective sentences.',
    content: {
      introduction: 'Parallel structure means using the same grammatical form for similar ideas. It creates clarity, emphasis, and rhythm in writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is Parallel Structure?'
        },
        {
          type: 'text',
          content: 'Parallel structure (or parallelism) uses the same grammatical patterns for items in a series or for ideas that are related. This creates balance and makes sentences easier to read and understand.'
        },
        {
          type: 'heading',
          content: 'Common Parallel Structures'
        },
        {
          type: 'text',
          content: 'In lists: "She enjoys reading, writing, and studying."\n\nIn comparisons: "As important as courage is wisdom."\n\nWith correlative conjunctions: "Either study hard or accept failure."\n\nIn series: "The old, tired, dusty book..." (all adjectives)'
        }
      ],
      examples: [
        {
          title: 'Parallel Structure Example',
          problem: 'Fix the parallel structure: "I like swimming, to run, and hiking."',
          solution: '"I like swimming, running, and hiking." (all gerunds)',
          explanation: 'All items in the series should use the same grammatical form.'
        }
      ],
      summary: 'Parallel structure improves writing quality and makes sentences more memorable. Look for series of items and make sure they match grammatically.'
    },
    keyPoints: [
      'Parallel structure uses the same grammatical form for similar ideas',
      'Items in a series should match grammatically',
      'Parallel structure improves clarity and flow',
      'Look for lists, comparisons, and paired ideas'
    ],
    prerequisites: [],
    commonMistakes: [
      'Mixing verb forms in a series',
      'Mixing parts of speech in parallel structures',
      'Forgetting to check all items in a long series'
    ],
    tips: [
      'List items one per line to check them',
      'Ensure each item could stand alone',
      'Use parallel structure for emphasis'
    ],
    practiceQuestions: ['lesson-gram-modifiers-004-q01', 'lesson-gram-modifiers-004-q02', 'lesson-gram-modifiers-004-q03', 'lesson-gram-modifiers-004-q04', 'lesson-gram-modifiers-004-q05', 'lesson-gram-modifiers-004-q06', 'lesson-gram-modifiers-004-q07', 'lesson-gram-modifiers-004-q08', 'lesson-gram-modifiers-004-q09', 'lesson-gram-modifiers-004-q10', 'lesson-gram-modifiers-004-q11', 'lesson-gram-modifiers-004-q12', 'lesson-gram-modifiers-004-q13', 'lesson-gram-modifiers-004-q14', 'lesson-gram-modifiers-004-q15', 'lesson-gram-modifiers-004-q16', 'lesson-gram-modifiers-004-q17', 'lesson-gram-modifiers-004-q18', 'lesson-gram-modifiers-004-q19', 'lesson-gram-modifiers-004-q20'],
    estimatedReadTime: 15,
    orderIndex: 9
  },
  {
    id: 'lesson-grammar-005',
    title: 'Misplaced and Dangling Modifiers',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn to identify and correct misplaced and dangling modifiers for clearer writing.',
    content: {
      introduction: 'Modifiers describe or limit other words. When placed incorrectly, they can confuse readers or create unintended meanings.',
      mainContent: [
        {
          type: 'heading',
          content: 'What are Misplaced Modifiers?'
        },
        {
          type: 'text',
          content: 'A misplaced modifier is a word, phrase, or clause that is too far from the word it modifies. This can confuse readers about what is being described.\n\nExample (unclear): "The dog chased the cat wearing a collar." (Is the cat or dog wearing the collar?)\n\nCorrected: "The dog wearing a collar chased the cat."'
        },
        {
          type: 'heading',
          content: 'What are Dangling Modifiers?'
        },
        {
          type: 'text',
          content: 'A dangling modifier describes something that isn\'t clearly stated in the sentence.\n\nExample (unclear): "After finishing homework, the TV was turned on." (Who finished the homework?)\n\nCorrected: "After finishing homework, Sarah turned on the TV."'
        }
      ],
      examples: [
        {
          title: 'Dangling Modifier Example',
          problem: 'Fix: "Walking through the park, a beautiful sunset could be seen."',
          solution: '"Walking through the park, we saw a beautiful sunset."',
          explanation: 'The corrected sentence makes it clear who is walking through the park.'
        }
      ],
      summary: 'Correct placement of modifiers ensures your writing is clear. Place modifiers as close as possible to the words they modify.'
    },
    keyPoints: [
      'Modifiers should be placed close to the words they modify',
      'Dangling modifiers have no clear noun to modify',
      'Misplaced modifiers are too far from what they modify',
      'Fixing modifiers improves clarity'
    ],
    prerequisites: [],
    commonMistakes: [
      'Placing modifiers too far from the words they describe',
      'Using modifiers without a clear subject',
      'Not recognizing when a modifier is ambiguous'
    ],
    tips: [
      'Place modifiers immediately before or after the word being modified',
      'Make sure the subject clearly receives the modifier',
      'Read sentences aloud to catch awkward modifier placement'
    ],
    practiceQuestions: ['lesson-gram-parallel-005-q01', 'lesson-gram-parallel-005-q02', 'lesson-gram-parallel-005-q03', 'lesson-gram-parallel-005-q04', 'lesson-gram-parallel-005-q05', 'lesson-gram-parallel-005-q06', 'lesson-gram-parallel-005-q07', 'lesson-gram-parallel-005-q08', 'lesson-gram-parallel-005-q09', 'lesson-gram-parallel-005-q10', 'lesson-gram-parallel-005-q11', 'lesson-gram-parallel-005-q12', 'lesson-gram-parallel-005-q13', 'lesson-gram-parallel-005-q14', 'lesson-gram-parallel-005-q15', 'lesson-gram-parallel-005-q16', 'lesson-gram-parallel-005-q17', 'lesson-gram-parallel-005-q18', 'lesson-gram-parallel-005-q19', 'lesson-gram-parallel-005-q20'],
    estimatedReadTime: 15,
    orderIndex: 10
  },

  // Reading Comprehension (5 lessons)
  {
    id: 'lesson-reading-001',
    title: 'Finding Main Ideas and Supporting Details',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'easy',
    duration: 20,
    description: 'Learn to identify the main idea of a passage and recognize supporting details.',
    content: {
      introduction: 'Every passage has a main idea—the central point the author is making. Supporting details provide evidence, examples, and explanations for the main idea.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is a Main Idea?'
        },
        {
          type: 'text',
          content: 'The main idea is the most important point in a passage. It answers the question "What is this passage about?" The main idea might be stated directly in a topic sentence, or you might need to infer it from the details provided.'
        },
        {
          type: 'heading',
          content: 'Supporting Details'
        },
        {
          type: 'text',
          content: 'Supporting details provide evidence for the main idea. They can be:\n\n1) Examples: Specific instances that illustrate the main idea\n2) Facts: Objective, verifiable information\n3) Statistics: Numerical data\n4) Expert opinions: Perspectives from authorities\n5) Explanations: How or why something happens'
        }
      ],
      examples: [
        {
          title: 'Main Idea Example',
          problem: 'What is the main idea? "Exercise improves both physical and mental health. Studies show that regular exercise reduces heart disease risk. It also decreases anxiety and depression."',
          solution: 'Main idea: Exercise improves both physical and mental health.\nSupporting details: Studies about heart disease, anxiety reduction, depression reduction',
          explanation: 'The first sentence states the main idea; the rest provides supporting details.'
        }
      ],
      summary: 'Identifying main ideas helps you understand passages quickly and accurately. Look for topic sentences or infer the main idea from repeated details.'
    },
    keyPoints: [
      'The main idea is the central point of a passage',
      'Main ideas may be stated or implied',
      'Supporting details provide evidence for the main idea',
      'Understanding main ideas improves reading comprehension'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing a detail with the main idea',
      'Choosing a main idea that is too narrow or too broad',
      'Ignoring supporting details'
    ],
    tips: [
      'Ask yourself: What is this passage mainly about?',
      'Look for a topic sentence (often first or last)',
      'Summarize the passage in one sentence'
    ],
    practiceQuestions: ['q-reading-001', 'q-reading-002'],
    estimatedReadTime: 15,
    orderIndex: 11
  },
  {
    id: 'lesson-reading-002',
    title: 'Making Inferences and Drawing Conclusions',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn to read between the lines and infer meanings not directly stated.',
    content: {
      introduction: 'Inference means reading between the lines—understanding information that isn\'t explicitly stated. Authors expect readers to make logical inferences based on the text.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is an Inference?'
        },
        {
          type: 'text',
          content: 'An inference is a logical conclusion based on evidence in the text and your prior knowledge. Inferences require you to combine information in the text with what you already know to reach a conclusion the author didn\'t explicitly state.'
        },
        {
          type: 'heading',
          content: 'Making Valid Inferences'
        },
        {
          type: 'text',
          content: '1) Base inferences on text evidence, not imagination\n2) Use your prior knowledge but stay close to the text\n3) Check if your inference is supported by details\n4) Avoid inferences based on stereotypes\n5) Look for multiple pieces of evidence'
        }
      ],
      examples: [
        {
          title: 'Inference Example',
          problem: 'What can you infer? "Sarah ignored three job interview invitations. She seemed satisfied with her current position."',
          solution: 'Inference: Sarah is not currently job hunting or is not interested in leaving her job.',
          explanation: 'This is based on her actions (ignoring invitations) and stated attitude (satisfied).'
        }
      ],
      summary: 'Inferences are essential for deeper reading comprehension. Always base inferences on text evidence and logical reasoning.'
    },
    keyPoints: [
      'Inferences are logical conclusions not explicitly stated',
      'Valid inferences are based on text evidence',
      'Combine text evidence with prior knowledge',
      'Multiple details often support a single inference'
    ],
    prerequisites: ['lesson-reading-001'],
    commonMistakes: [
      'Making inferences not supported by text',
      'Confusing inference with imagination',
      'Ignoring relevant details that contradict your inference'
    ],
    tips: [
      'Ask yourself: What evidence supports this inference?',
      'Look for patterns in the text',
      'Check multiple details before drawing conclusions'
    ],
    practiceQuestions: ['q-reading-003', 'q-reading-004'],
    estimatedReadTime: 15,
    orderIndex: 12
  },
  {
    id: 'lesson-reading-003',
    title: 'Author\'s Tone and Purpose',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'medium',
    duration: 20,
    description: 'Identify the author\'s tone, purpose, and perspective in written passages.',
    content: {
      introduction: 'Every author has a purpose (reason for writing) and a tone (attitude toward the subject). Recognizing these elements deepens comprehension.',
      mainContent: [
        {
          type: 'heading',
          content: 'What is Author\'s Purpose?'
        },
        {
          type: 'text',
          content: 'Common purposes include:\n1) To inform: Provide factual information\n2) To persuade: Convince the reader to agree or take action\n3) To entertain: Engage or amuse the reader\n4) To explain: Make something clear or understandable'
        },
        {
          type: 'heading',
          content: 'What is Tone?'
        },
        {
          type: 'text',
          content: 'Tone is the author\'s attitude toward the subject. It can be: formal, informal, serious, humorous, sarcastic, critical, supportive, neutral, passionate, skeptical, etc. Tone is created through word choice, sentence structure, and details selected.'
        }
      ],
      examples: [
        {
          title: 'Tone and Purpose Example',
          problem: 'Identify tone and purpose: "It\'s absolutely ridiculous that the school eliminated the arts program to save a few dollars."',
          solution: 'Purpose: To persuade / Tone: Critical, passionate',
          explanation: 'The author wants readers to oppose the decision and uses strong, emotional language.'
        }
      ],
      summary: 'Understanding author\'s tone and purpose helps you grasp the deeper meaning of passages and recognize bias or persuasive techniques.'
    },
    keyPoints: [
      'Author\'s purpose is their main reason for writing',
      'Tone is the author\'s attitude toward the subject',
      'Tone is created through word choice and details',
      'Different purposes and tones appear in different types of writing'
    ],
    prerequisites: ['lesson-reading-001'],
    commonMistakes: [
      'Confusing tone with purpose',
      'Missing subtle tone shifts',
      'Not considering the author\'s perspective'
    ],
    tips: [
      'Ask: Why did the author write this?',
      'Notice emotional language that indicates tone',
      'Consider what the author thinks about the subject'
    ],
    practiceQuestions: ['q-reading-005', 'q-reading-006'],
    estimatedReadTime: 15,
    orderIndex: 13
  },
  {
    id: 'lesson-reading-004',
    title: 'Analyzing Arguments and Evidence',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'hard',
    duration: 25,
    description: 'Evaluate the strength of arguments and the quality of supporting evidence.',
    content: {
      introduction: 'Critical readers evaluate whether arguments are logical and whether evidence is sufficient and reliable. This skill is essential for reading persuasive texts.',
      mainContent: [
        {
          type: 'heading',
          content: 'Components of an Argument'
        },
        {
          type: 'text',
          content: '1) Claim: The main point being argued\n2) Evidence: Facts, examples, or expert opinions supporting the claim\n3) Reasoning: The logical connection between evidence and claim\n4) Counterargument: Acknowledgment of opposing viewpoint'
        },
        {
          type: 'heading',
          content: 'Evaluating Evidence Quality'
        },
        {
          type: 'text',
          content: 'Strong evidence is:\n- Relevant to the argument\n- From reliable sources\n- Recent (when timeliness matters)\n- Representative (not cherry-picked)\n- Specific, not vague\n\nWeak evidence:\n- Is based on opinion only\n- Comes from biased sources\n- Is outdated\n- Is anecdotal only'
        }
      ],
      examples: [
        {
          title: 'Argument Analysis Example',
          problem: 'Evaluate: "Studies show teenagers need more sleep. Therefore, schools should start at 9 AM instead of 7:30 AM."',
          solution: 'Claim: Schools should start at 9 AM. Evidence: Studies about teenager sleep needs. Reasoning: More sleep will improve outcomes. Evaluation: Needs more specific evidence about what time school starts means for homework and activities.',
          explanation: 'The argument has structure but needs stronger evidence.'
        }
      ],
      summary: 'Evaluating arguments critically helps you form well-reasoned opinions and recognize weak or manipulative reasoning.'
    },
    keyPoints: [
      'Arguments have claims, evidence, reasoning, and sometimes counterarguments',
      'Good evidence is relevant, reliable, and specific',
      'Critical readers evaluate argument strength',
      'Understanding logical fallacies helps identify weak arguments'
    ],
    prerequisites: ['lesson-reading-001', 'lesson-reading-003'],
    commonMistakes: [
      'Accepting arguments without evaluating evidence',
      'Confusing opinion with evidence',
      'Not recognizing logical fallacies'
    ],
    tips: [
      'Ask: Is the claim supported by strong evidence?',
      'Look for the sources of evidence',
      'Consider whether counterarguments are addressed'
    ],
    practiceQuestions: ['q-reading-007', 'q-reading-008'],
    estimatedReadTime: 18,
    orderIndex: 14
  },
  {
    id: 'lesson-reading-005',
    title: 'Comparing and Contrasting Texts',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'hard',
    duration: 25,
    description: 'Learn to compare and contrast information, perspectives, and writing styles across multiple texts.',
    content: {
      introduction: 'Comparing texts helps you see how different authors approach the same topic. This deepens critical thinking and comprehension.',
      mainContent: [
        {
          type: 'heading',
          content: 'Comparing vs. Contrasting'
        },
        {
          type: 'text',
          content: 'Comparing: Finding similarities between texts or passages\nContrasting: Finding differences between texts or passages\n\nThings to compare/contrast:\n1) Main ideas\n2) Supporting details and evidence\n3) Author\'s purpose and tone\n4) Perspectives or viewpoints\n5) Organization and structure\n6) Word choice and style'
        },
        {
          type: 'heading',
          content: 'How to Compare and Contrast'
        },
        {
          type: 'text',
          content: '1) Read both passages carefully\n2) Identify main ideas in each\n3) Look for similar ideas and details\n4) Note differences in approach, evidence, or conclusions\n5) Use graphic organizers (Venn diagrams, charts)\n6) Write your comparison using clear transition words (similarly, in contrast, both, however)'
        }
      ],
      examples: [
        {
          title: 'Compare/Contrast Example',
          problem: 'How do two articles about climate change differ?',
          solution: 'Article A: Scientific approach, uses statistical evidence, formal tone. Article B: Personal narrative, uses anecdotes, emotional tone.',
          explanation: 'Same topic, but different purposes, evidence types, and styles.'
        }
      ],
      summary: 'Comparing and contrasting deepens understanding and helps you recognize bias, multiple perspectives, and different communication styles.'
    },
    keyPoints: [
      'Comparing: Finding similarities',
      'Contrasting: Finding differences',
      'Multiple perspectives on one topic exist',
      'Comparing and contrasting develops critical thinking'
    ],
    prerequisites: ['lesson-reading-001', 'lesson-reading-003'],
    commonMistakes: [
      'Finding only surface-level similarities or differences',
      'Not considering purpose and perspective',
      'Ignoring important contextual differences'
    ],
    tips: [
      'Use a Venn diagram or comparison chart',
      'Consider why authors might differ in approach',
      'Look beyond just topic to purpose, tone, and perspective'
    ],
    practiceQuestions: ['q-reading-009'],
    estimatedReadTime: 18,
    orderIndex: 15
  }
];
