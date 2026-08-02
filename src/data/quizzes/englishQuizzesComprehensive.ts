import { Quiz } from '../../types';

export const englishQuizzesComprehensive: Quiz[] = [
  // VOCABULARY - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-english-vocabulary-comprehensive',
    title: 'Vocabulary Mastery - Full Practice',
    subject: 'reading-writing',
    topic: 'vocabulary',
    description: 'Comprehensive vocabulary quiz covering word roots, prefixes, suffixes, context clues, and word meanings',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 12,
    questions: [
      {
        id: 'q-vocab-c-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'What does the root "SCRIPT" mean?',
        options: [
          { id: 'a', text: 'To write', isCorrect: true },
          { id: 'b', text: 'To read', isCorrect: false },
          { id: 'c', text: 'To speak', isCorrect: false },
          { id: 'd', text: 'To listen', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'SCRIPT comes from Latin meaning "to write". Examples: describe, prescribe, manuscript',
        hints: ['Think of a movie script'],
        points: 10
      },
      {
        id: 'q-vocab-c-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'The prefix "UN-" means:',
        options: [
          { id: 'a', text: 'Not or opposite of', isCorrect: true },
          { id: 'b', text: 'One', isCorrect: false },
          { id: 'c', text: 'Before', isCorrect: false },
          { id: 'd', text: 'After', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'UN- negates or reverses meaning. Examples: unhappy, unfair, undo, unlock',
        hints: ['Think of opposites'],
        points: 10
      },
      {
        id: 'q-vocab-c-003',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'What does the suffix "-TION" mean?',
        options: [
          { id: 'a', text: 'The act or state of', isCorrect: true },
          { id: 'b', text: 'Full of', isCorrect: false },
          { id: 'c', text: 'One who', isCorrect: false },
          { id: 'd', text: 'More', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '-TION forms nouns from verbs. Examples: creation, education, celebration',
        hints: ['Think of actions turned into nouns'],
        points: 10
      },
      {
        id: 'q-vocab-c-004',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Based on context: "The benevolent teacher helped struggling students." Benevolent means:',
        options: [
          { id: 'a', text: 'Kind and generous', isCorrect: true },
          { id: 'b', text: 'Strict and harsh', isCorrect: false },
          { id: 'c', text: 'Intelligent and educated', isCorrect: false },
          { id: 'd', text: 'Young and enthusiastic', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'From context, a teacher who helps struggling students is kind and generous',
        hints: ['What kind of person would help struggling students?'],
        points: 10
      },
      {
        id: 'q-vocab-c-005',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Based on context: "The boss\'s acerbic comments made everyone uncomfortable." Acerbic means:',
        options: [
          { id: 'a', text: 'Sarcastic and biting', isCorrect: true },
          { id: 'b', text: 'Funny and entertaining', isCorrect: false },
          { id: 'c', text: 'Loud and clear', isCorrect: false },
          { id: 'd', text: 'Confusing and unclear', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'From context, comments that make people uncomfortable are sarcastic and cutting',
        hints: ['The comments made people uncomfortable'],
        points: 10
      },
      {
        id: 'q-vocab-c-006',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which word is a synonym for "eloquent"?',
        options: [
          { id: 'a', text: 'Articulate and persuasive in speaking', isCorrect: true },
          { id: 'b', text: 'Quiet and shy', isCorrect: false },
          { id: 'c', text: 'Loud and obnoxious', isCorrect: false },
          { id: 'd', text: 'Confused and muddled', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Eloquent means fluent, persuasive, and expressive in speaking or writing',
        hints: ['Think of great speakers'],
        points: 10
      },
      {
        id: 'q-vocab-c-007',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "pragmatic" mean?',
        options: [
          { id: 'a', text: 'Dealing with things in a practical, realistic way', isCorrect: true },
          { id: 'b', text: 'Idealistic and theoretical', isCorrect: false },
          { id: 'c', text: 'Pessimistic and negative', isCorrect: false },
          { id: 'd', text: 'Impulsive and reckless', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Pragmatic means focused on practical results rather than theory',
        hints: ['Think of someone who focuses on what works'],
        points: 10
      },
      {
        id: 'q-vocab-c-008',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What does "obfuscate" mean?',
        options: [
          { id: 'a', text: 'To make unclear or confusing', isCorrect: true },
          { id: 'b', text: 'To make clear and simple', isCorrect: false },
          { id: 'c', text: 'To make loud and noisy', isCorrect: false },
          { id: 'd', text: 'To make beautiful and elegant', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Obfuscate means to deliberately make something unclear or hard to understand',
        hints: ['Think of confusion or obscurity'],
        points: 15
      },
      {
        id: 'q-vocab-c-009',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What is an "antonym" for "verbose"?',
        options: [
          { id: 'a', text: 'Concise', isCorrect: true },
          { id: 'b', text: 'Wordy', isCorrect: false },
          { id: 'c', text: 'Eloquent', isCorrect: false },
          { id: 'd', text: 'Expressive', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Verbose means wordy; concise means brief and to the point (opposite)',
        hints: ['Verbose means using too many words'],
        points: 15
      },
      {
        id: 'q-vocab-c-010',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "ephemeral" mean?',
        options: [
          { id: 'a', text: 'Lasting only a short time', isCorrect: true },
          { id: 'b', text: 'Lasting forever', isCorrect: false },
          { id: 'c', text: 'Happening rarely', isCorrect: false },
          { id: 'd', text: 'Happening frequently', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Ephemeral describes something temporary or short-lived',
        hints: ['Think of mayflies or short-lived beauty'],
        points: 10
      },
      {
        id: 'q-vocab-c-011',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "ubiquitous" mean?',
        options: [
          { id: 'a', text: 'Present everywhere', isCorrect: true },
          { id: 'b', text: 'Rare and hard to find', isCorrect: false },
          { id: 'c', text: 'Strange and unusual', isCorrect: false },
          { id: 'd', text: 'Ugly and unpleasant', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Ubiquitous means everywhere at once or constantly present',
        hints: ['Think of something found everywhere'],
        points: 10
      },
      {
        id: 'q-vocab-c-012',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What does "sanguine" mean?',
        options: [
          { id: 'a', text: 'Optimistic and hopeful', isCorrect: true },
          { id: 'b', text: 'Pessimistic and gloomy', isCorrect: false },
          { id: 'c', text: 'Angry and violent', isCorrect: false },
          { id: 'd', text: 'Sad and melancholic', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Sanguine means optimistic or positive in outlook',
        hints: ['Think of a positive disposition'],
        points: 15
      },
      {
        id: 'q-vocab-c-013',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "lucid" mean?',
        options: [
          { id: 'a', text: 'Clear and easily understood', isCorrect: true },
          { id: 'b', text: 'Bright and shiny', isCorrect: false },
          { id: 'c', text: 'Confused and unclear', isCorrect: false },
          { id: 'd', text: 'Dark and gloomy', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Lucid means clear, transparent, or easily understood',
        hints: ['Think of clarity'],
        points: 10
      },
      {
        id: 'q-vocab-c-014',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What does "capricious" mean?',
        options: [
          { id: 'a', text: 'Given to sudden, unpredictable changes', isCorrect: true },
          { id: 'b', text: 'Careful and thoughtful', isCorrect: false },
          { id: 'c', text: 'Consistent and reliable', isCorrect: false },
          { id: 'd', text: 'Brave and courageous', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Capricious describes someone who is unpredictable and changes their mind easily',
        hints: ['Think of sudden mood changes'],
        points: 15
      },
      {
        id: 'q-vocab-c-015',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "diligent" mean?',
        options: [
          { id: 'a', text: 'Careful and hardworking', isCorrect: true },
          { id: 'b', text: 'Lazy and careless', isCorrect: false },
          { id: 'c', text: 'Clever and intelligent', isCorrect: false },
          { id: 'd', text: 'Friendly and outgoing', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Diligent means showing persistent effort in one\'s work',
        hints: ['Think of someone who works hard'],
        points: 10
      },
      {
        id: 'q-vocab-c-016',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "admonish" mean?',
        options: [
          { id: 'a', text: 'To warn or scold firmly', isCorrect: true },
          { id: 'b', text: 'To praise highly', isCorrect: false },
          { id: 'c', text: 'To ask politely', isCorrect: false },
          { id: 'd', text: 'To help willingly', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Admonish means to express disapproval or warning to someone',
        hints: ['Think of stern correction'],
        points: 10
      },
      {
        id: 'q-vocab-c-017',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What does "equivocal" mean?',
        options: [
          { id: 'a', text: 'Open to multiple interpretations; ambiguous', isCorrect: true },
          { id: 'b', text: 'Clearly stated and definitive', isCorrect: false },
          { id: 'c', text: 'Equal in all ways', isCorrect: false },
          { id: 'd', text: 'Fair and balanced', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Equivocal means ambiguous or unclear, capable of being understood in multiple ways',
        hints: ['Think of unclear or doubtful meaning'],
        points: 15
      },
      {
        id: 'q-vocab-c-018',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "meticulous" mean?',
        options: [
          { id: 'a', text: 'Very careful and precise', isCorrect: true },
          { id: 'b', text: 'Careless and sloppy', isCorrect: false },
          { id: 'c', text: 'Quick and efficient', isCorrect: false },
          { id: 'd', text: 'Organized and systematic', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Meticulous means showing great attention to detail and precision',
        hints: ['Think of very careful work'],
        points: 10
      },
      {
        id: 'q-vocab-c-019',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'What does "nefarious" mean?',
        options: [
          { id: 'a', text: 'Wicked or criminal', isCorrect: true },
          { id: 'b', text: 'Famous and well-known', isCorrect: false },
          { id: 'c', text: 'Foolish and silly', isCorrect: false },
          { id: 'd', text: 'Nervous and anxious', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Nefarious means relating to criminal or wicked activities',
        hints: ['Think of evil plans'],
        points: 15
      },
      {
        id: 'q-vocab-c-020',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'What does "candid" mean?',
        options: [
          { id: 'a', text: 'Frank and honest', isCorrect: true },
          { id: 'b', text: 'Shy and quiet', isCorrect: false },
          { id: 'c', text: 'Rude and blunt', isCorrect: false },
          { id: 'd', text: 'Beautiful and attractive', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Candid means honest, frank, and straightforward',
        hints: ['Think of someone who speaks truthfully'],
        points: 10
      }
    ]
  },

  // GRAMMAR - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-english-grammar-comprehensive',
    title: 'Grammar Mastery - Full Practice',
    subject: 'reading-writing',
    topic: 'grammar',
    description: 'Comprehensive grammar quiz covering sentence structure, verb tenses, pronouns, modifiers, and punctuation',
    difficulty: 'medium',
    estimatedDuration: 45,
    timeLimit: 60,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 13,
    questions: [
      {
        id: 'q-grammar-c-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Which sentence is grammatically correct?',
        options: [
          { id: 'a', text: 'She walk to the store.', isCorrect: false },
          { id: 'b', text: 'She walks to the store.', isCorrect: true },
          { id: 'c', text: 'She are walking to the store.', isCorrect: false },
          { id: 'd', text: 'She walking to the store.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Third person singular requires "walks" not "walk"',
        hints: ['Check subject-verb agreement'],
        points: 10
      },
      {
        id: 'q-grammar-c-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Fix the error: "Each student must submit their homework."',
        options: [
          { id: 'a', text: 'No error', isCorrect: false },
          { id: 'b', text: 'Each student must submit his or her homework.', isCorrect: true },
          { id: 'c', text: 'All students must submit their homework.', isCorrect: false },
          { id: 'd', text: 'Each student must submit its homework.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Each" is singular, so use singular pronoun. "Their" is plural.',
        hints: ['"Each" requires singular pronouns'],
        points: 10
      },
      {
        id: 'q-grammar-c-003',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which sentence has correct pronoun usage?',
        options: [
          { id: 'a', text: 'Me and him went to the movie.', isCorrect: false },
          { id: 'b', text: 'Him and I went to the movie.', isCorrect: false },
          { id: 'c', text: 'He and I went to the movie.', isCorrect: true },
          { id: 'd', text: 'He and me went to the movie.', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'Use subject pronouns (I, he) when they are the subject of the sentence',
        hints: ['Check if pronouns are subjects or objects'],
        points: 10
      },
      {
        id: 'q-grammar-c-004',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Identify the error: "The team are ready to play."',
        options: [
          { id: 'a', text: 'No error', isCorrect: false },
          { id: 'b', text: '"Team" is collective and requires "is" not "are"', isCorrect: true },
          { id: 'c', text: '"Ready" should be "readier"', isCorrect: false },
          { id: 'd', text: '"To play" should be "for playing"', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Collective nouns (team, group, class) are singular and take "is"',
        hints: ['Collective nouns are treated as singular'],
        points: 10
      },
      {
        id: 'q-grammar-c-005',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which sentence uses the correct verb tense?',
        options: [
          { id: 'a', text: 'She has went to the store.', isCorrect: false },
          { id: 'b', text: 'She has gone to the store.', isCorrect: true },
          { id: 'c', text: 'She have gone to the store.', isCorrect: false },
          { id: 'd', text: 'She go to the store.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Has gone" is correct past participle with "has". "Went" is simple past.',
        hints: ['Use past participle (gone) with has/have'],
        points: 10
      },
      {
        id: 'q-grammar-c-006',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Identify the misplaced modifier: "Running through the park, the sunset was beautiful."',
        options: [
          { id: 'a', text: 'No error', isCorrect: false },
          { id: 'b', text: '"Running through the park" doesn\'t logically modify "sunset"', isCorrect: true },
          { id: 'c', text: '"Beautiful" should be "more beautiful"', isCorrect: false },
          { id: 'd', text: 'Commas should not be used', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The modifier should refer to a person, not the sunset. Better: "Running through the park, I saw a beautiful sunset."',
        hints: ['Modifiers must logically refer to nouns'],
        points: 10
      },
      {
        id: 'q-grammar-c-007',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which uses correct parallel structure?',
        options: [
          { id: 'a', text: 'She likes reading, writing, and to paint.', isCorrect: false },
          { id: 'b', text: 'She likes to read, to write, and painting.', isCorrect: false },
          { id: 'c', text: 'She likes reading, writing, and painting.', isCorrect: true },
          { id: 'd', text: 'She likes to read, writing, and to paint.', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'Parallel structure requires matching grammatical forms in a list',
        hints: ['Keep lists in the same form'],
        points: 10
      },
      {
        id: 'q-grammar-c-008',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Which sentence is correct?',
        options: [
          { id: 'a', text: 'Everyone should bring their books.', isCorrect: false },
          { id: 'b', text: 'Everyone should bring his or her books.', isCorrect: true },
          { id: 'c', text: 'Everyone should bring its books.', isCorrect: false },
          { id: 'd', text: 'Everyone should bring ones books.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Everyone" is singular and requires singular pronouns',
        hints: ['Indefinite pronouns like "everyone" are singular'],
        points: 15
      },
      {
        id: 'q-grammar-c-009',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Choose the correct form: "If I _____ known about the party, I would have gone."',
        options: [
          { id: 'a', text: 'had', isCorrect: true },
          { id: 'b', text: 'have', isCorrect: false },
          { id: 'c', text: 'would have', isCorrect: false },
          { id: 'd', text: 'was', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Use "had known" in the if-clause of a past conditional sentence',
        hints: ['Past conditional uses: if + had + past participle'],
        points: 15
      },
      {
        id: 'q-grammar-c-010',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which uses correct punctuation?',
        options: [
          { id: 'a', text: 'She said "I love reading" I agreed.', isCorrect: false },
          { id: 'b', text: 'She said, "I love reading," I agreed.', isCorrect: false },
          { id: 'c', text: 'She said, "I love reading." I agreed.', isCorrect: true },
          { id: 'd', text: 'She said "I love reading." I agreed', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'Period goes inside quotation marks; start new sentence with capital',
        hints: ['Punctuation rules for dialogue'],
        points: 10
      },
      {
        id: 'q-vocab-c-011',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Where should the comma go? "However she tried she could not solve the problem."',
        options: [
          { id: 'a', text: 'After "However"', isCorrect: true },
          { id: 'b', text: 'After "tried"', isCorrect: false },
          { id: 'c', text: 'No comma needed', isCorrect: false },
          { id: 'd', text: 'Before "she"', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Introductory phrases/words need commas. "However, she tried she could not solve the problem."',
        hints: ['Set off introductory elements with commas'],
        points: 10
      },
      {
        id: 'q-grammar-c-012',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which is the best revision? "Running quickly, the ball was caught by the outfielder."',
        options: [
          { id: 'a', text: 'Running quickly, the outfielder caught the ball.', isCorrect: true },
          { id: 'b', text: 'The ball running quickly was caught by the outfielder.', isCorrect: false },
          { id: 'c', text: 'Running quickly, catching the ball by the outfielder.', isCorrect: false },
          { id: 'd', text: 'The outfielder, running quickly, the ball was caught.', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'Fix misplaced modifier by making the actor the subject',
        hints: ['Introductory modifiers should describe the subject'],
        points: 10
      },
      {
        id: 'q-grammar-c-013',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which is a comma splice?',
        options: [
          { id: 'a', text: 'She studied hard, she passed the test.', isCorrect: true },
          { id: 'b', text: 'She studied hard and passed the test.', isCorrect: false },
          { id: 'c', text: 'She studied hard; she passed the test.', isCorrect: false },
          { id: 'd', text: 'She studied hard. She passed the test.', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'A comma alone cannot join two independent clauses',
        hints: ['Use a semicolon, conjunction, or period for independent clauses'],
        points: 10
      },
      {
        id: 'q-grammar-c-014',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Choose the correct form: "Neither the students nor the teacher _____ ready."',
        options: [
          { id: 'a', text: 'is', isCorrect: false },
          { id: 'b', text: 'are', isCorrect: true },
          { id: 'c', text: 'were', isCorrect: false },
          { id: 'd', text: 'have', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'With "neither...nor", the verb agrees with the closer noun (teacher is singular, but "nor" makes the overall sense plural)',
        hints: ['With neither/nor, agree with nearest subject'],
        points: 10
      },
      {
        id: 'q-grammar-c-015',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which is correct? "The number of students _____ increasing."',
        options: [
          { id: 'a', text: 'is', isCorrect: true },
          { id: 'b', text: 'are', isCorrect: false },
          { id: 'c', text: 'have', isCorrect: false },
          { id: 'd', text: 'were', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: '"Number of" is treated as a singular noun and takes "is"',
        hints: ['"Number of" = singular; "a number of" = plural'],
        points: 10
      },
      {
        id: 'q-grammar-c-016',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which pronoun reference is clear?',
        options: [
          { id: 'a', text: 'John told his brother that he had won the prize.', isCorrect: false },
          { id: 'b', text: 'John told his brother, "I have won the prize."', isCorrect: true },
          { id: 'c', text: 'He told him that he had won the prize.', isCorrect: false },
          { id: 'd', text: 'John\'s brother told him that he had won.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Direct speech or restructuring clarifies ambiguous pronouns',
        hints: ['Avoid unclear pronoun references'],
        points: 10
      },
      {
        id: 'q-grammar-c-017',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Which corrects the run-on sentence? "I wanted to go to the party but I did not have a car."',
        options: [
          { id: 'a', text: 'This is not a run-on sentence.', isCorrect: true },
          { id: 'b', text: 'I wanted to go to the party. I did not have a car.', isCorrect: false },
          { id: 'c', text: 'I wanted to go to the party I did not have a car.', isCorrect: false },
          { id: 'd', text: 'I wanted, to go to the party but I did not have a car.', isCorrect: false }
        ],
        correctAnswer: 'a',
        explanation: 'A coordinating conjunction properly joins these independent clauses',
        hints: ['This sentence is correctly constructed'],
        points: 15
      },
      {
        id: 'q-grammar-c-018',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which uses an apostrophe correctly?',
        options: [
          { id: 'a', text: 'The cat lost it\'s toy.', isCorrect: false },
          { id: 'b', text: 'The cat lost its toy.', isCorrect: true },
          { id: 'c', text: 'The cat\'s lost its toy.', isCorrect: false },
          { id: 'd', text: 'The cats\' toy was lost.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Its" is possessive; "it\'s" means "it is"',
        hints: ['Its = possessive; It\'s = it is'],
        points: 10
      },
      {
        id: 'q-grammar-c-019',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Choose the correct word: "The affect/effect of the medicine was positive."',
        options: [
          { id: 'a', text: 'affect', isCorrect: false },
          { id: 'b', text: 'effect', isCorrect: true },
          { id: 'c', text: 'Both are correct', isCorrect: false },
          { id: 'd', text: 'Neither is correct', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Effect is the result (noun); affect is to influence (verb)',
        hints: ['Effect = result; Affect = influence'],
        points: 10
      },
      {
        id: 'q-grammar-c-020',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Which is grammatically correct?',
        options: [
          { id: 'a', text: 'There are less people at the event.', isCorrect: false },
          { id: 'b', text: 'There are fewer people at the event.', isCorrect: true },
          { id: 'c', text: 'There is fewer people at the event.', isCorrect: false },
          { id: 'd', text: 'There are less of people at the event.', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Fewer" is for countable items; "less" is for uncountable quantities',
        hints: ['Fewer = countable; Less = uncountable'],
        points: 10
      }
    ]
  },

  // READING COMPREHENSION - Comprehensive Quiz (20+ questions)
  {
    id: 'quiz-english-reading-comprehensive',
    title: 'Reading Comprehension Mastery - Full Practice',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    description: 'Comprehensive reading comprehension quiz with passage analysis, inference, main ideas, and supporting details',
    difficulty: 'medium',
    estimatedDuration: 50,
    timeLimit: 70,
    passingScore: 70,
    pointsAvailable: 200,
    orderIndex: 14,
    questions: [
      {
        id: 'q-read-c-001',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Passage: "Exercise improves both physical and mental health. Studies show that regular exercise reduces heart disease risk. It also decreases anxiety and depression." What is the main idea?',
        options: [
          { id: 'a', text: 'Exercise reduces heart disease risk', isCorrect: false },
          { id: 'b', text: 'Exercise improves both physical and mental health', isCorrect: true },
          { id: 'c', text: 'Depression is a serious health problem', isCorrect: false },
          { id: 'd', text: 'Most people should exercise more', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The first sentence states the main idea; other sentences support it with details',
        hints: ['Main idea is the central point the author makes'],
        points: 10
      },
      {
        id: 'q-read-c-002',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'easy',
        questionText: 'Passage: "Sarah ignored three job interview invitations. She seemed satisfied with her current position." What can you infer?',
        options: [
          { id: 'a', text: 'Sarah is unemployed', isCorrect: false },
          { id: 'b', text: 'Sarah is not interested in changing jobs right now', isCorrect: true },
          { id: 'c', text: 'Sarah is unhappy', isCorrect: false },
          { id: 'd', text: 'Sarah did not receive interview invitations', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Her behavior (ignoring interviews) and satisfaction suggest she\'s not seeking new work',
        hints: ['Use evidence from the passage to infer'],
        points: 10
      },
      {
        id: 'q-read-c-003',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Climate change is altering migration patterns of birds. Warmer temperatures cause plants to bloom earlier, shifting food availability. Birds arriving on their traditional schedules find insufficient food." What is the author\'s primary concern?',
        options: [
          { id: 'a', text: 'Plants are blooming earlier each year', isCorrect: false },
          { id: 'b', text: 'Climate change is disrupting the balance between birds and food sources', isCorrect: true },
          { id: 'c', text: 'Birds should change their migration routes', isCorrect: false },
          { id: 'd', text: 'Temperature increases are helping some species', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage shows a cause-effect relationship between climate change and food availability',
        hints: ['Look for the connection between cause and effect'],
        points: 10
      },
      {
        id: 'q-read-c-004',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The ancient Library of Alexandria was one of the largest repositories of knowledge. It contained hundreds of thousands of scrolls covering science, literature, and mathematics. When it burned, countless irreplaceable texts were lost forever." What does the passage imply about the loss?',
        options: [
          { id: 'a', text: 'It was an accident that could have been prevented', isCorrect: false },
          { id: 'b', text: 'It was a significant loss to human knowledge and progress', isCorrect: true },
          { id: 'c', text: 'Modern libraries are better organized', isCorrect: false },
          { id: 'd', text: 'Most scrolls were not valuable', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The emphasis on "irreplaceable" and the library\'s importance implies the loss was significant',
        hints: ['Consider the tone and emphasis in the passage'],
        points: 10
      },
      {
        id: 'q-read-c-005',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Photosynthesis is the process by which plants convert sunlight into chemical energy. This energy fuels plant growth and produces oxygen as a byproduct." Which detail supports the main idea?',
        options: [
          { id: 'a', text: 'Sunlight is important', isCorrect: false },
          { id: 'b', text: 'Plants produce oxygen', isCorrect: false },
          { id: 'c', text: 'The conversion of sunlight into chemical energy fuels plant growth', isCorrect: true },
          { id: 'd', text: 'Byproducts are created', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'This detail directly supports the definition of photosynthesis',
        hints: ['Supporting details explain or expand on the main idea'],
        points: 10
      },
      {
        id: 'q-read-c-006',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "Though she was initially skeptical of the new technology, Maria soon realized its potential. What she had dismissed as impractical proved to be revolutionary in her field." Which statement best describes the passage\'s development?',
        options: [
          { id: 'a', text: 'Comparison between two technologies', isCorrect: false },
          { id: 'b', text: 'A change in perspective after gaining experience', isCorrect: true },
          { id: 'c', text: 'A contrast between past and future', isCorrect: false },
          { id: 'd', text: 'An explanation of why technology fails', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage shows Maria changing from skeptical to appreciative',
        hints: ['Look for changes in character attitudes or situations'],
        points: 15
      },
      {
        id: 'q-read-c-007',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The Industrial Revolution transformed manufacturing through mechanization. Factories replaced cottage industries, and mass production became possible." The author\'s tone is:',
        options: [
          { id: 'a', text: 'Angry and critical', isCorrect: false },
          { id: 'b', text: 'Objective and informative', isCorrect: true },
          { id: 'c', text: 'Sad and nostalgic', isCorrect: false },
          { id: 'd', text: 'Excited and enthusiastic', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage presents facts without emotional language or judgment',
        hints: ['Tone is the author\'s attitude expressed through word choice'],
        points: 10
      },
      {
        id: 'q-read-c-008',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "Water covers 71% of Earth\'s surface, yet only 2.5% is fresh water. Of that freshwater, 69% is locked in ice caps and glaciers." What does the author emphasize?',
        options: [
          { id: 'a', text: 'Earth has abundant water resources', isCorrect: false },
          { id: 'b', text: 'Fresh water is scarce despite water\'s abundance', isCorrect: true },
          { id: 'c', text: 'Ice caps are melting rapidly', isCorrect: false },
          { id: 'd', text: 'Most water comes from oceans', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The statistics show water is plentiful but freshwater is limited',
        hints: ['Look at the numerical data and what it suggests'],
        points: 15
      },
      {
        id: 'q-read-c-009',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The Rosetta Stone was discovered in Egypt and contained text in three languages. This discovery allowed scholars to finally decipher Egyptian hieroglyphics." Which is a reasonable prediction based on this passage?',
        options: [
          { id: 'a', text: 'No one had ever seen hieroglyphics before', isCorrect: false },
          { id: 'b', text: 'Understanding ancient Egypt became much easier after this discovery', isCorrect: true },
          { id: 'c', text: 'The three languages were all modern', isCorrect: false },
          { id: 'd', text: 'Egypt controlled language systems worldwide', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The ability to decipher hieroglyphics would unlock ancient Egyptian texts and knowledge',
        hints: ['Consider the consequences of the discovery'],
        points: 10
      },
      {
        id: 'q-read-c-010',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Biofuels are renewable energy sources made from biological materials. Unlike fossil fuels, they don\'t deplete natural resources." The author\'s purpose is to:',
        options: [
          { id: 'a', text: 'Criticize fossil fuels', isCorrect: false },
          { id: 'b', text: 'Explain biofuels and contrast them with fossil fuels', isCorrect: true },
          { id: 'c', text: 'Argue that all energy should be renewable', isCorrect: false },
          { id: 'd', text: 'Provide cost information about biofuels', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage defines biofuels and shows how they differ from fossil fuels',
        hints: ['Purpose is what the author intends to accomplish'],
        points: 10
      },
      {
        id: 'q-read-c-011',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "Social media platforms claim to connect people, yet studies show increased isolation. Users curate perfect versions of themselves, creating unrealistic comparisons." The author\'s stance is:',
        options: [
          { id: 'a', text: 'Strongly supportive of social media', isCorrect: false },
          { id: 'b', text: 'Critical of social media\'s actual effects', isCorrect: true },
          { id: 'c', text: 'Neutral about social media', isCorrect: false },
          { id: 'd', text: 'Unaware of social media problems', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'Words like "yet" and the focus on negative effects show criticism',
        hints: ['Look at contrasts and word choices that show attitude'],
        points: 15
      },
      {
        id: 'q-read-c-012',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Renewable energy sources like solar and wind are increasingly cost-effective. In 2020, solar energy costs dropped 89% compared to 2010." What is the author\'s main support for the effectiveness?',
        options: [
          { id: 'a', text: 'Renewable energy is environmentally friendly', isCorrect: false },
          { id: 'b', text: 'Specific data showing decreased costs', isCorrect: true },
          { id: 'c', text: 'Government policies support renewables', isCorrect: false },
          { id: 'd', text: 'Traditional energy is becoming obsolete', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The 89% cost reduction is concrete evidence',
        hints: ['Look for specific evidence and statistics'],
        points: 10
      },
      {
        id: 'q-read-c-013',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Artificial intelligence has revolutionized many industries. From healthcare diagnostics to personalized recommendations, AI is integral to modern society." Which audience would find this passage most relevant?',
        options: [
          { id: 'a', text: 'Historians studying ancient technology', isCorrect: false },
          { id: 'b', text: 'People interested in current technological advances', isCorrect: true },
          { id: 'c', text: 'Engineers designing bridges', isCorrect: false },
          { id: 'd', text: 'Farmers interested in crop rotation', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage discusses modern AI applications',
        hints: ['Consider who would be interested in this topic'],
        points: 10
      },
      {
        id: 'q-read-c-014',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "While some argue that video games increase violent behavior, research suggests otherwise. Most scientific studies show no causal link between gaming and real-world violence." The author addresses the counterargument by:',
        options: [
          { id: 'a', text: 'Dismissing it without evidence', isCorrect: false },
          { id: 'b', text: 'Providing research evidence against it', isCorrect: true },
          { id: 'c', text: 'Claiming both sides are wrong', isCorrect: false },
          { id: 'd', text: 'Avoiding the issue entirely', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The author acknowledges the counterargument then provides evidence against it',
        hints: ['Good writing acknowledges opposing views with evidence'],
        points: 15
      },
      {
        id: 'q-read-c-015',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The human brain contains approximately 86 billion neurons. These neurons form trillions of connections, enabling thought, memory, and consciousness." What is implied about brain complexity?',
        options: [
          { id: 'a', text: 'The brain is relatively simple', isCorrect: false },
          { id: 'b', text: 'The brain is extraordinarily complex', isCorrect: true },
          { id: 'c', text: 'All brains are identical', isCorrect: false },
          { id: 'd', text: 'Consciousness is not biological', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The vast numbers of neurons and connections suggest incredible complexity',
        hints: ['Use the evidence to draw reasonable conclusions'],
        points: 10
      },
      {
        id: 'q-read-c-016',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The Panama Canal reduced shipping distances between Europe and Asia by thousands of miles. This engineering marvel transformed global trade." Which is NOT a reasonable inference?',
        options: [
          { id: 'a', text: 'The canal made international trade more efficient', isCorrect: false },
          { id: 'b', text: 'The canal was expensive to build', isCorrect: false },
          { id: 'c', text: 'Ships never sailed between Europe and Asia before the canal', isCorrect: true },
          { id: 'd', text: 'The canal had significant economic impact', isCorrect: false }
        ],
        correctAnswer: 'c',
        explanation: 'The passage says it reduced distance, not that travel was impossible before',
        hints: ['Avoid overinterpreting; stick to what the evidence supports'],
        points: 10
      },
      {
        id: 'q-read-c-017',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "Honeybees communicate through a complex dance that conveys location and distance of food sources. This dance language is crucial to colony survival." The author\'s primary purpose is to:',
        options: [
          { id: 'a', text: 'Entertain readers with bee facts', isCorrect: false },
          { id: 'b', text: 'Explain the function and importance of bee communication', isCorrect: true },
          { id: 'c', text: 'Argue that bees are more intelligent than humans', isCorrect: false },
          { id: 'd', text: 'Describe how to keep bees', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage explains what the dance is and why it matters',
        hints: ['Purpose is the reason the author wrote the passage'],
        points: 15
      },
      {
        id: 'q-read-c-018',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "Museums preserve cultural heritage for future generations. They provide education through exhibits and research." What is the primary function of museums according to the passage?',
        options: [
          { id: 'a', text: 'Entertainment and tourism', isCorrect: false },
          { id: 'b', text: 'Preservation and education', isCorrect: true },
          { id: 'c', text: 'Scientific experimentation', isCorrect: false },
          { id: 'd', text: 'Selling artifacts', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The passage explicitly states these two functions',
        hints: ['Look for the main functions described'],
        points: 10
      },
      {
        id: 'q-read-c-019',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'hard',
        questionText: 'Passage: "Mandatory seat belt laws have dramatically reduced traffic fatalities. Statistics show a 45% decrease in fatal accidents since implementation." Based on evidence, the author would likely support:',
        options: [
          { id: 'a', text: 'Eliminating safety regulations', isCorrect: false },
          { id: 'b', text: 'Implementing other evidence-based safety measures', isCorrect: true },
          { id: 'c', text: 'Ignoring accident statistics', isCorrect: false },
          { id: 'd', text: 'Voluntary-only safety guidelines', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: 'The author values data-driven approaches to safety',
        hints: ['Infer the author\'s position based on their arguments'],
        points: 15
      },
      {
        id: 'q-read-c-020',
        type: 'multiple-choice',
        subject: 'reading-writing',
        difficulty: 'medium',
        questionText: 'Passage: "The Great Wall of China was built over centuries by multiple dynasties. It served both military defense and trade route purposes." What does "multiple" suggest?',
        options: [
          { id: 'a', text: 'It was built all at once', isCorrect: false },
          { id: 'b', text: 'It was built by more than one dynasty over a long period', isCorrect: true },
          { id: 'c', text: 'No one knows who built it', isCorrect: false },
          { id: 'd', text: 'It was built in just one location', isCorrect: false }
        ],
        correctAnswer: 'b',
        explanation: '"Multiple" means many/more than one',
        hints: ['Pay attention to key words and their meanings'],
        points: 10
      }
    ]
  }
];
