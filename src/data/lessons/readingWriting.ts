import { Lesson } from '../../types';

export const readingWritingLessons: Lesson[] = [
  // Vocabulary (5 lessons)
  {
    id: 'lesson-vocab-001',
    title: 'Understanding Word Roots',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 25,
    description: 'Learn how word roots form the foundation of English words and help you decode unfamiliar vocabulary.',
    content: {
      introduction: 'Roughly 60% of English words are built from Latin and Greek roots, which means that learning a relatively small set of roots unlocks the meaning of thousands of words you\'ve never seen before. This is one of the highest-leverage vocabulary skills you can build for the SAT: instead of memorizing individual words one at a time, you learn a root once and instantly gain a toolkit for decoding an entire family of related words.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Word Root?'
        },
        {
          type: 'text',
          content: 'A word root is the core piece of a word that carries its central meaning — everything else (prefixes and suffixes) gets attached around it. The root PORT means "to carry." Once you know that, words like transport (carry across), portable (able to be carried), import (carry in), export (carry out), and deport (carry away) all become logical rather than arbitrary.'
        },
        {
          type: 'heading',
          content: 'Ten High-Value Roots to Know'
        },
        {
          type: 'text',
          content: 'PORT (carry): transport, portable, import, export\nMIT/MISS (send): submit, emit, transmit, mission\nSCRIB/SCRIPT (write): prescribe, describe, manuscript\nSTRUCT (build): construct, instruct, structure, obstruct\nVOC/VOX (voice/call): vocal, vocabulary, advocate, evoke\nSPEC/SPECT (see/look): spectator, inspect, perspective\nDICT (say/speak): predict, dictate, contradict, verdict\nBENE (good): benefit, benevolent, beneficial\nMAL (bad): malfunction, malice, malignant\nCRED (believe): credible, credit, incredible'
        },
        {
          type: 'heading',
          content: 'Combining Roots with Prefixes'
        },
        {
          type: 'text',
          content: 'Most words are built from more than just a root — a prefix at the beginning often adds directional or quantity meaning. TRANS- (across) + PORT (carry) = transport. IN- (into) + SPECT (look) = inspect (to "look into" something). Learning to break a word into its pieces, prefix by root, is the core decoding skill this lesson teaches — and it\'s covered in more depth in the next lesson.'
        },
        {
          type: 'heading',
          content: 'Using Roots on the SAT'
        },
        {
          type: 'text',
          content: 'When you encounter an unfamiliar word on a reading or vocabulary-in-context question, your first move should be scanning for a recognizable root. Even a partial match narrows down the possible meanings dramatically and helps you eliminate answer choices that clearly don\'t fit the root\'s core meaning, even if you can\'t recall the word\'s exact dictionary definition.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Breaking Down TRANSPORT',
          problem: 'What does "transport" mean, using its word parts?',
          solution: 'TRANS (across) + PORT (carry) = to carry across (from one place to another)',
          explanation: 'Breaking a word into prefix and root reveals its meaning even without a dictionary.'
        },
        {
          title: 'Example 2: Breaking Down MANUSCRIPT',
          problem: 'What does "manuscript" mean, using its word parts?',
          solution: 'MANU (hand) + SCRIPT (write) = something written by hand',
          explanation: 'This is exactly why old manuscripts (before printing presses) were literally hand-written documents.'
        },
        {
          title: 'Example 3: Applying a Root to a New Word',
          problem: 'Using the root VOC/VOX (voice/call), what might "invoke" mean?',
          solution: 'IN (into/upon) + VOC (call) = to call upon (as in invoking a rule, a memory, or a spirit)',
          explanation: 'Even without having memorized "invoke" directly, the root VOC points you toward its core meaning of "calling."'
        },
        {
          title: 'Example 4: Distinguishing Similar Roots',
          problem: 'How does knowing BENE (good) vs. MAL (bad) help distinguish "benevolent" from "malevolent"?',
          solution: 'BENE (good) + VOL (will) = benevolent = wishing good things for others\nMAL (bad) + VOL (will) = malevolent = wishing bad things for others',
          explanation: 'The shared root VOL (will/wish) stays constant, while the opposite prefixes BENE and MAL flip the meaning entirely.'
        }
      ],
      summary: 'Word roots are the highest-leverage vocabulary tool available to you: learning ten common roots can unlock the meaning of fifty or more related words. Practice actively scanning unfamiliar words for recognizable roots — this single habit will help you on both vocabulary and reading comprehension questions throughout the SAT.'
    },
    keyPoints: [
      'A root carries a word\'s primary, core meaning',
      'Many English roots come from Latin and Greek',
      'One root can generate dozens of related words when combined with different prefixes and suffixes',
      'Recognizing roots helps you make educated guesses about unfamiliar words on the test',
      'Combining root meanings with prefix meanings often reveals a word\'s definition directly'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing a root with a prefix or suffix',
      'Assuming two similar-looking roots always share the same meaning',
      'Forgetting to also factor in the prefix, which can significantly change or reverse the root\'s core meaning',
      'Giving up on an unfamiliar word instead of checking it for a recognizable root first'
    ],
    tips: [
      'Build flashcards with the root on one side and 3-4 example words on the other',
      'When you learn a new word, actively identify its root rather than just memorizing the definition',
      'Group roots by theme (roots about speaking, roots about seeing, etc.) to build stronger associations',
      'Practice decoding roots in words you already know before tackling unfamiliar vocabulary',
      'Say the root\'s meaning aloud as you encounter new words — repetition builds recall speed'
    ],
    practiceQuestions: ['lesson-vocab-context-001-q01', 'lesson-vocab-context-001-q02', 'lesson-vocab-context-001-q03', 'lesson-vocab-context-001-q04', 'lesson-vocab-context-001-q05', 'lesson-vocab-context-001-q06', 'lesson-vocab-context-001-q07', 'lesson-vocab-context-001-q08', 'lesson-vocab-context-001-q09', 'lesson-vocab-context-001-q10', 'lesson-vocab-context-001-q11', 'lesson-vocab-context-001-q12', 'lesson-vocab-context-001-q13', 'lesson-vocab-context-001-q14', 'lesson-vocab-context-001-q15', 'lesson-vocab-context-001-q16', 'lesson-vocab-context-001-q17', 'lesson-vocab-context-001-q18', 'lesson-vocab-context-001-q19', 'lesson-vocab-context-001-q20'],
    estimatedReadTime: 18,
    orderIndex: 1
  },
  {
    id: 'lesson-vocab-002',
    title: 'Prefixes and Suffixes',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 25,
    description: 'Discover how prefixes and suffixes change word meanings and expand your vocabulary exponentially.',
    content: {
      introduction: 'If roots are the core of a word\'s meaning, prefixes and suffixes are the modifiers that adjust or transform it. A prefix attaches to the front and typically changes MEANING (often reversing it, as in "happy" vs. "unhappy"), while a suffix attaches to the end and typically changes the word\'s PART OF SPEECH (turning an adjective into an adverb, or a verb into a noun). Mastering both dramatically multiplies the number of words you can confidently understand.',
      mainContent: [
        {
          type: 'heading',
          content: 'Prefixes: Changing Meaning'
        },
        {
          type: 'text',
          content: 'A prefix is added before a root or base word and usually shifts its meaning. Negation prefixes are especially common and important: UN- (not), IN-/IM- (not), DIS- (not/opposite), NON- (not), A-/AN- (without). Other common prefixes include RE- (again), PRE- (before), MIS- (wrong/badly), OVER- (too much), and UNDER- (not enough).'
        },
        {
          type: 'heading',
          content: 'Suffixes: Changing Part of Speech'
        },
        {
          type: 'text',
          content: 'A suffix is added after a root or base word, often converting it into a different part of speech. Noun-forming suffixes: -TION, -MENT, -NESS, -ITY (create, creation; happy, happiness). Adjective-forming suffixes: -ABLE/-IBLE, -FUL, -LESS, -OUS (comfort, comfortable; joy, joyful). Adverb-forming suffix: -LY (quick, quickly). Verb-forming suffixes: -IZE, -IFY (modern, modernize; simple, simplify).'
        },
        {
          type: 'heading',
          content: 'Stacking Multiple Word Parts'
        },
        {
          type: 'text',
          content: 'Complex words often combine a prefix, a root, AND a suffix. Take "unbelievably": UN- (not) + believe (root/base) + -ABLE (adjective suffix) + -LY (adverb suffix) = "in a manner that is not able to be believed." Breaking a long word into these separate pieces makes even intimidating vocabulary manageable.'
        },
        {
          type: 'heading',
          content: 'Watch for Spelling Changes'
        },
        {
          type: 'text',
          content: 'Adding a suffix sometimes changes the spelling of the base word — a final "e" often drops (believe → believable), a final "y" often changes to "i" (happy → happiness), and a final consonant sometimes doubles (run → running). These spelling shifts don\'t change the underlying meaning-building logic, but they\'re worth recognizing so an unfamiliar spelling doesn\'t throw you off.'
        },
        {
          type: 'heading',
          content: 'Negation Prefixes: A Special Trap'
        },
        {
          type: 'text',
          content: 'Because UN-, IN-, IM-, DIS-, and NON- all mean roughly "not," they can make a word\'s meaning flip entirely — and missing a negation prefix is one of the most common ways students misread a sentence on the SAT. Always double-check whether a word starts with one of these before assuming its meaning.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Negation Prefix',
          problem: 'What does "unhappy" mean?',
          solution: 'UN- (not) + happy = not happy',
          explanation: 'The negation prefix flips the emotional meaning from positive to negative.'
        },
        {
          title: 'Example 2: Combining a Root, Prefix, and Suffix',
          problem: 'What does "reconstruction" mean?',
          solution: 'RE- (again) + STRUCT (build) + -ION (noun suffix) = the act of building again',
          explanation: 'Breaking this word into three pieces (prefix, root, suffix) reveals its full meaning step by step.'
        },
        {
          title: 'Example 3: Suffix Changing Part of Speech',
          problem: 'What part of speech is "joyfully," and what does it mean?',
          solution: 'Joy (noun) + -FUL (adjective suffix, "full of") + -LY (adverb suffix) = joyfully (adverb) = in a manner full of joy',
          explanation: 'Two stacked suffixes transform the noun "joy" first into an adjective, then into an adverb.'
        },
        {
          title: 'Example 4: Spotting a Missed Negation',
          problem: 'A sentence reads: "The results were inconclusive." What does this suggest about the results?',
          solution: 'IN- (not) + conclusive = not conclusive, meaning the results did NOT provide a clear, definite answer.',
          explanation: 'Missing the IN- prefix would lead a reader to incorrectly think the results were definitive.'
        }
      ],
      summary: 'Prefixes typically change a word\'s meaning (especially negation prefixes like UN-, IN-, and DIS-), while suffixes typically change its part of speech. Together with roots, they let you break any unfamiliar word into manageable pieces — and staying alert for negation prefixes specifically will prevent a whole category of reading comprehension errors.'
    },
    keyPoints: [
      'Prefixes attach to the front of a word and usually shift its meaning',
      'Suffixes attach to the end of a word and usually shift its part of speech',
      'Negation prefixes (UN-, IN-, IM-, DIS-, NON-) all roughly mean "not" and can flip a word\'s meaning entirely',
      'Words can stack multiple prefixes and suffixes around a single root',
      'Suffixes sometimes trigger spelling changes in the base word (dropping a final "e," changing "y" to "i")'
    ],
    prerequisites: ['lesson-vocab-001'],
    commonMistakes: [
      'Missing a negation prefix and reading a word\'s meaning as the opposite of what\'s intended',
      'Confusing which word part is the prefix and which is the suffix',
      'Assuming a suffix always means the same thing regardless of context',
      'Forgetting that spelling may change when suffixes are added, making a word look unfamiliar'
    ],
    tips: [
      'Study prefixes in groups by meaning (all the negation prefixes together, all the "before/after" prefixes together)',
      'When reading quickly, pause on any word starting with UN-, IN-, IM-, DIS-, or NON- to confirm you caught the negation',
      'Practice identifying the part of speech a suffix creates — it often tells you how the word functions in a sentence',
      'Break long, unfamiliar words into prefix + root + suffix pieces before trying to guess the whole meaning at once'
    ],
    practiceQuestions: ['lesson-vocab-roots-002-q01', 'lesson-vocab-roots-002-q02', 'lesson-vocab-roots-002-q03', 'lesson-vocab-roots-002-q04', 'lesson-vocab-roots-002-q05', 'lesson-vocab-roots-002-q06', 'lesson-vocab-roots-002-q07', 'lesson-vocab-roots-002-q08', 'lesson-vocab-roots-002-q09', 'lesson-vocab-roots-002-q10', 'lesson-vocab-roots-002-q11', 'lesson-vocab-roots-002-q12', 'lesson-vocab-roots-002-q13', 'lesson-vocab-roots-002-q14', 'lesson-vocab-roots-002-q15', 'lesson-vocab-roots-002-q16', 'lesson-vocab-roots-002-q17', 'lesson-vocab-roots-002-q18', 'lesson-vocab-roots-002-q19', 'lesson-vocab-roots-002-q20'],
    estimatedReadTime: 18,
    orderIndex: 2
  },
  {
    id: 'lesson-vocab-003',
    title: 'Context Clues and Word Meaning',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'easy',
    duration: 25,
    description: 'Learn to determine word meanings from surrounding text using context clues.',
    content: {
      introduction: 'Even with a strong grasp of roots, prefixes, and suffixes, you\'ll still encounter words you can\'t fully decode from word parts alone. This is where context clues come in — hints embedded in the surrounding sentence or paragraph that reveal a word\'s meaning without needing a dictionary. Strong readers use context clues constantly and often don\'t even notice they\'re doing it; this lesson makes that process deliberate and reliable.',
      mainContent: [
        {
          type: 'heading',
          content: 'Five Types of Context Clues'
        },
        {
          type: 'text',
          content: 'Definition clue: the text directly explains the word, often set off by commas or "or." Example: "Photosynthesis, the process by which plants make food, requires sunlight."\n\nSynonym clue: a similar word appears nearby. Example: "His benevolence, or kindness, was known throughout the town."\n\nAntonym/contrast clue: an opposite idea signals meaning through difference. Example: "Unlike his gregarious sister, Tom was solitary and withdrawn."\n\nExample clue: specific examples illustrate the word\'s category. Example: "Nocturnal animals, such as owls and bats, are active at night."\n\nGeneral sense (inference) clue: the overall situation implies the meaning without any direct hint. Example: "After running the marathon, she was utterly enervated and could barely stand."'
        },
        {
          type: 'heading',
          content: 'Signal Words to Watch For'
        },
        {
          type: 'text',
          content: 'Certain words often flag which type of clue you\'re looking at. "Or," "which is," "that is" often introduce a definition or synonym clue. "But," "unlike," "however," "in contrast," "although" often introduce a contrast/antonym clue. "Such as," "for example," "including," "like" often introduce an example clue. Training yourself to notice these signal words speeds up your ability to locate the right clue quickly.'
        },
        {
          type: 'heading',
          content: 'When There\'s No Obvious Clue'
        },
        {
          type: 'text',
          content: 'Sometimes a passage doesn\'t provide an explicit clue type — instead, you have to infer meaning from the overall tone and situation being described. In these cases, ask: "Given everything happening in this sentence, does the unfamiliar word seem to have a positive or negative connotation? Strong or mild? What general category of meaning would make sense here?" Even a rough sense of the word\'s "flavor" is often enough to answer a multiple-choice vocabulary-in-context question.'
        },
        {
          type: 'heading',
          content: 'Combining Context Clues with Word Parts'
        },
        {
          type: 'text',
          content: 'Your two vocabulary tools — word roots/prefixes/suffixes and context clues — work best together. If a root gives you a rough idea but you\'re unsure of the exact shade of meaning, context clues can confirm or refine your guess. If you don\'t recognize any word parts at all, context clues become your primary strategy.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Definition Clue',
          problem: 'What does "ardent" mean? "Her ardent passion for music, a burning enthusiasm, was clear to everyone."',
          solution: 'Ardent = a burning enthusiasm = passionate, intense',
          explanation: 'The phrase "a burning enthusiasm" directly defines "ardent" right within the sentence.'
        },
        {
          title: 'Example 2: Contrast Clue',
          problem: 'What does "laconic" mean? "Unlike his verbose friend who talked constantly, Marcus was laconic."',
          solution: 'Laconic means the opposite of verbose (talkative) = using very few words',
          explanation: 'The word "unlike" signals a contrast, so laconic must mean the opposite of "talking constantly."'
        },
        {
          title: 'Example 3: Example Clue',
          problem: 'What does "ephemeral" likely mean? "Ephemeral phenomena, such as morning dew, rainbows, and shooting stars, disappear almost as quickly as they appear."',
          solution: 'Ephemeral = short-lived, lasting only a very brief time',
          explanation: 'The examples given (dew, rainbows, shooting stars) are all things that vanish quickly, pointing to that shared meaning.'
        },
        {
          title: 'Example 4: General Sense Clue',
          problem: 'What does "enervated" likely mean? "After running the marathon in the summer heat, she was utterly enervated and could barely lift her arms."',
          solution: 'Enervated = drained of energy, exhausted',
          explanation: 'There\'s no direct definition or synonym here, but the overall situation (finishing a marathon, barely able to move) strongly implies extreme fatigue.'
        }
      ],
      summary: 'Context clues let you determine word meaning without stopping to look anything up — a crucial skill under SAT time pressure. Learn to recognize the five clue types and their common signal words, and when no explicit clue is present, rely on the overall tone and situation of the sentence to make an educated inference.'
    },
    keyPoints: [
      'Context clues are hints within the surrounding text that reveal an unfamiliar word\'s meaning',
      'The five main types are definition, synonym, antonym/contrast, example, and general sense (inference) clues',
      'Signal words like "or," "unlike," and "such as" often flag which type of clue is present',
      'When no explicit clue exists, use the overall tone and situation of the sentence to infer meaning',
      'Context clues and word-part knowledge (roots/prefixes/suffixes) work best combined'
    ],
    prerequisites: [],
    commonMistakes: [
      'Guessing a word\'s meaning without checking the actual context around it',
      'Assuming the clue is always immediately adjacent to the word, when it can appear earlier or later in the sentence or paragraph',
      'Missing contrast/antonym clues, which point AWAY from a word\'s meaning rather than toward it',
      'Stopping at the first plausible guess instead of confirming it fits the whole sentence'
    ],
    tips: [
      'Read the full sentence — and often the surrounding sentences too — before settling on a definition',
      'Actively look for signal words like "or," "like," "such as," and "unlike" as you read',
      'Ask yourself explicitly: "What type of clue is this?" to speed up your recognition over time',
      'When no clue type is obvious, focus on whether the word feels positive, negative, or neutral in tone',
      'Combine context clues with any recognizable word roots for a stronger, more confident guess'
    ],
    practiceQuestions: ['lesson-vocab-synonyms-003-q01', 'lesson-vocab-synonyms-003-q02', 'lesson-vocab-synonyms-003-q03', 'lesson-vocab-synonyms-003-q04', 'lesson-vocab-synonyms-003-q05', 'lesson-vocab-synonyms-003-q06', 'lesson-vocab-synonyms-003-q07', 'lesson-vocab-synonyms-003-q08', 'lesson-vocab-synonyms-003-q09', 'lesson-vocab-synonyms-003-q10', 'lesson-vocab-synonyms-003-q11', 'lesson-vocab-synonyms-003-q12', 'lesson-vocab-synonyms-003-q13', 'lesson-vocab-synonyms-003-q14', 'lesson-vocab-synonyms-003-q15', 'lesson-vocab-synonyms-003-q16', 'lesson-vocab-synonyms-003-q17', 'lesson-vocab-synonyms-003-q18', 'lesson-vocab-synonyms-003-q19', 'lesson-vocab-synonyms-003-q20'],
    estimatedReadTime: 18,
    orderIndex: 3
  },
  {
    id: 'lesson-vocab-004',
    title: 'Word Families and Relationships',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'medium',
    duration: 28,
    description: 'Understand how words relate to each other and form families based on shared roots.',
    content: {
      introduction: 'This lesson builds directly on roots, prefixes, and suffixes by showing you how to think in terms of entire "word families" rather than isolated vocabulary. When you learn one word deeply — including its noun, verb, adjective, and adverb forms — you often gain three or four related words for the price of one. This is one of the most efficient ways to grow your vocabulary quickly before test day.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Word Family?'
        },
        {
          type: 'text',
          content: 'A word family is a group of words that share the same root or base, often appearing across different parts of speech. The STRUCT family, for example, includes construct (verb), structure (noun), instruct (verb), destruction (noun), infrastructure (noun), and obstruct (verb) — all built around the shared idea of "building" or "arranging."'
        },
        {
          type: 'heading',
          content: 'Recognizing Part-of-Speech Shifts Within a Family'
        },
        {
          type: 'text',
          content: 'Many word families cycle through the same core meaning across noun, verb, adjective, and adverb forms. Take the family around "critic": criticize (verb, to judge), critical (adjective, judgmental or crucial), criticism (noun, the act of judging), and critically (adverb). Recognizing this pattern helps you correctly identify what part of speech a word needs to be in a sentence, which matters directly for SAT grammar questions.'
        },
        {
          type: 'heading',
          content: 'Beyond Shared Roots: Other Word Relationships'
        },
        {
          type: 'text',
          content: 'Words can also relate to each other without sharing a root: synonyms are different words with similar meanings (happy, joyful, cheerful); antonyms are words with opposite meanings (hot, cold); and word associations connect words through shared context or topic rather than shared origin (school, teacher, student, classroom all relate to education).'
        },
        {
          type: 'heading',
          content: 'Why This Matters for the SAT'
        },
        {
          type: 'text',
          content: 'SAT questions frequently ask you to choose the correct FORM of a word to fit a sentence\'s grammar — for instance, choosing between "economy," "economic," "economical," and "economically." Understanding word families means you already recognize all four as related, and you just need to determine which part of speech the sentence structure requires.'
        },
        {
          type: 'heading',
          content: 'Building Word Families Efficiently'
        },
        {
          type: 'text',
          content: 'Rather than memorizing words in isolation, get in the habit of asking "What other forms does this word have?" whenever you learn a new one. Looking up a word\'s noun, verb, adjective, and adverb forms all at once — even if you don\'t need all of them immediately — builds a much richer, more durable vocabulary than learning words one at a time.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Mapping a Word Family',
          problem: 'What are the related forms of the word "educate"?',
          solution: 'Verb: educate\nNoun: education, educator\nAdjective: educational, educated\nAdverb: educationally',
          explanation: 'One root idea (teaching/learning) generates five related words across four parts of speech.'
        },
        {
          title: 'Example 2: Choosing the Right Form',
          problem: 'Fill in the blank with the correct word form: "The committee made an ______ decision." (economy/economic/economical/economically)',
          solution: '"Economical" fits, since the blank needs an adjective describing "decision" — economical means cost-effective or thrifty.',
          explanation: 'Recognizing the word family lets you narrow down to the adjective form, then choose the one with the right specific meaning.'
        },
        {
          title: 'Example 3: Synonym Relationships',
          problem: 'Group these words by similarity of meaning: happy, furious, joyful, angry, cheerful, irate',
          solution: 'Happy group: happy, joyful, cheerful\nAngry group: furious, angry, irate',
          explanation: 'These words don\'t share roots, but they cluster into synonym groups based on similar meaning.'
        },
        {
          title: 'Example 4: Word Association',
          problem: 'What words would you associate with "courtroom"?',
          solution: 'Judge, jury, lawyer, witness, testimony, verdict, evidence, trial',
          explanation: 'These words share no common root, but they\'re all connected by the shared context of a legal proceeding.'
        }
      ],
      summary: 'Thinking in word families — rather than memorizing isolated vocabulary — multiplies your learning efficiency and directly helps with SAT grammar questions that test correct word form. Whenever you encounter a new word, make a habit of asking what its noun, verb, adjective, and adverb forms look like.'
    },
    keyPoints: [
      'A word family is a group of words sharing a common root across different parts of speech',
      'Learning one word\'s full family (noun, verb, adjective, adverb forms) multiplies your vocabulary efficiently',
      'Words can also relate through synonyms, antonyms, or shared topic/context without sharing a root',
      'SAT grammar questions often test whether you can choose the correct word form to fit a sentence',
      'Building word families is more efficient than memorizing individual words in isolation'
    ],
    prerequisites: ['lesson-vocab-001', 'lesson-vocab-002'],
    commonMistakes: [
      'Learning only one form of a word and missing its related forms',
      'Confusing words that look similar but come from different, unrelated roots',
      'Choosing the wrong part-of-speech form to fit a sentence\'s grammar',
      'Overlooking less common members of a word family'
    ],
    tips: [
      'When you learn a new word, look up its noun, verb, adjective, and adverb forms all at once',
      'Create word family charts or concept maps to visualize the connections',
      'Practice generating different forms of familiar words as a quick daily exercise',
      'Pay attention to word family patterns when reading — noticing them in context reinforces the connections'
    ],
    practiceQuestions: ['lesson-vocab-academic-004-q01', 'lesson-vocab-academic-004-q02', 'lesson-vocab-academic-004-q03', 'lesson-vocab-academic-004-q04', 'lesson-vocab-academic-004-q05', 'lesson-vocab-academic-004-q06', 'lesson-vocab-academic-004-q07', 'lesson-vocab-academic-004-q08', 'lesson-vocab-academic-004-q09', 'lesson-vocab-academic-004-q10', 'lesson-vocab-academic-004-q11', 'lesson-vocab-academic-004-q12', 'lesson-vocab-academic-004-q13', 'lesson-vocab-academic-004-q14', 'lesson-vocab-academic-004-q15', 'lesson-vocab-academic-004-q16', 'lesson-vocab-academic-004-q17', 'lesson-vocab-academic-004-q18', 'lesson-vocab-academic-004-q19', 'lesson-vocab-academic-004-q20'],
    estimatedReadTime: 20,
    orderIndex: 4
  },
  {
    id: 'lesson-vocab-005',
    title: 'Common Idioms and Expressions',
    subject: 'reading-writing',
    topic: 'vocabulary',
    difficulty: 'medium',
    duration: 25,
    description: 'Learn common idioms and figurative expressions that appear frequently in reading comprehension.',
    content: {
      introduction: 'An idiom is a phrase whose meaning can\'t be figured out just by knowing the individual words — "it\'s raining cats and dogs" has nothing to do with animals falling from the sky. Idioms appear constantly in reading passages, especially in dialogue, narrative fiction, and informal writing, so recognizing them (rather than trying to interpret them literally) is essential for accurate comprehension.',
      mainContent: [
        {
          type: 'heading',
          content: 'Why Idioms Can\'t Be Decoded Literally'
        },
        {
          type: 'text',
          content: 'Unlike most vocabulary, idioms resist the "break it into parts" strategy that works so well for roots and affixes — their meaning comes from cultural convention, not from the literal definitions of the individual words. This means idioms simply have to be learned and recognized as whole units, the same way you\'d learn a single vocabulary word.'
        },
        {
          type: 'heading',
          content: 'Idioms About Communication and Understanding'
        },
        {
          type: 'text',
          content: 'Break the ice = start a conversation in an awkward situation\nBeat around the bush = avoid getting to the main point\nGet to the point = state the main idea directly\nHit the nail on the head = state something exactly and accurately\nRead between the lines = understand an implied meaning'
        },
        {
          type: 'heading',
          content: 'Idioms About Effort and Difficulty'
        },
        {
          type: 'text',
          content: 'Bite the bullet = accept something difficult or unpleasant that must be done\nHit the books = study hard\nPiece of cake = something very easy\nBack to the drawing board = start over after a failure\nBurn the midnight oil = work or study late into the night'
        },
        {
          type: 'heading',
          content: 'Idioms About Judgment and Assumptions'
        },
        {
          type: 'text',
          content: 'Jump to conclusions = form an opinion too quickly, without enough evidence\nGive the benefit of the doubt = trust someone\'s good intentions despite uncertainty\nSee eye to eye = agree completely with someone\nOn the fence = undecided between two options'
        },
        {
          type: 'heading',
          content: 'Recognizing Idioms in Context'
        },
        {
          type: 'text',
          content: 'The clearest sign you\'ve encountered an idiom is that the literal, word-by-word interpretation doesn\'t make logical sense in context. When that happens, don\'t force a literal reading — instead, consider the phrase as a single figurative unit and think about what emotional or situational meaning would make sense given everything else in the passage.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Effort Idiom',
          problem: 'What does "The meeting was a piece of cake" mean?',
          solution: 'The meeting was very easy; it went smoothly without difficulty.',
          explanation: '"Piece of cake" is a common idiom meaning something is simple, not related to actual dessert.'
        },
        {
          title: 'Example 2: Communication Idiom',
          problem: 'What does it mean if someone "beat around the bush" during an important conversation?',
          solution: 'They avoided directly addressing the main point, talking around the subject instead of getting straight to it.',
          explanation: 'This idiom describes evasive or indirect communication, often out of discomfort or hesitation.'
        },
        {
          title: 'Example 3: Judgment Idiom',
          problem: '"She jumped to conclusions before hearing all the facts." What does this reveal about her?',
          solution: 'She formed an opinion or judgment too quickly, without waiting for complete evidence.',
          explanation: 'This idiom carries a mildly critical tone, suggesting the judgment was premature or unfair.'
        },
        {
          title: 'Example 4: Recognizing an Idiom from Context',
          problem: '"After failing the first prototype, the engineers went back to the drawing board." What does this suggest happened next?',
          solution: 'The engineers started over from the beginning, developing a new plan or design rather than fixing the failed one.',
          explanation: 'A literal reading (returning to an actual drawing board) wouldn\'t make sense here — the phrase signals a fresh restart after failure.'
        }
      ],
      summary: 'Idioms carry figurative meanings that can\'t be decoded through roots or literal word definitions — they must be recognized and learned as whole units. When a literal interpretation of a phrase doesn\'t make sense in context, that\'s your signal to consider it as an idiom and think about its broader, conventional meaning instead.'
    },
    keyPoints: [
      'An idiom\'s figurative meaning is different from the literal meaning of its individual words',
      'Idioms must be learned as whole phrases, since word-part strategies don\'t apply to them',
      'Idioms cluster around common themes: communication, effort, judgment, and more',
      'A literal reading that doesn\'t make sense in context is a strong signal you\'ve found an idiom',
      'Idioms appear frequently in dialogue, narrative fiction, and informal writing'
    ],
    prerequisites: [],
    commonMistakes: [
      'Interpreting an idiom literally instead of recognizing its figurative meaning',
      'Not recognizing when a phrase is functioning as an idiom versus a literal statement',
      'Assuming a partially familiar idiom means the same thing as a similar-sounding one',
      'Missing the emotional tone (critical, encouraging, dismissive) that an idiom often carries'
    ],
    tips: [
      'Keep a running list of idioms you encounter while reading, along with their meanings',
      'Learn idioms in the context of full sentences rather than as isolated definitions',
      'When a literal reading feels nonsensical, pause and consider whether you\'re looking at an idiom',
      'Notice the tone an idiom carries (positive, negative, neutral) — it often hints at the author\'s attitude'
    ],
    practiceQuestions: ['lesson-vocab-advanced-005-q01', 'lesson-vocab-advanced-005-q02', 'lesson-vocab-advanced-005-q03', 'lesson-vocab-advanced-005-q04', 'lesson-vocab-advanced-005-q05', 'lesson-vocab-advanced-005-q06', 'lesson-vocab-advanced-005-q07', 'lesson-vocab-advanced-005-q08', 'lesson-vocab-advanced-005-q09', 'lesson-vocab-advanced-005-q10', 'lesson-vocab-advanced-005-q11', 'lesson-vocab-advanced-005-q12', 'lesson-vocab-advanced-005-q13', 'lesson-vocab-advanced-005-q14', 'lesson-vocab-advanced-005-q15', 'lesson-vocab-advanced-005-q16', 'lesson-vocab-advanced-005-q17', 'lesson-vocab-advanced-005-q18', 'lesson-vocab-advanced-005-q19', 'lesson-vocab-advanced-005-q20'],
    estimatedReadTime: 18,
    orderIndex: 5
  },

  // Grammar (5 lessons)
  {
    id: 'lesson-grammar-001',
    title: 'Sentence Structure and Clauses',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'easy',
    duration: 28,
    description: 'Understand the foundation of proper sentence structure with clauses and phrase relationships.',
    content: {
      introduction: 'Nearly every SAT grammar question — whether it\'s about punctuation, sentence combining, or fixing a fragment — ultimately depends on being able to identify clauses correctly. A clause is the fundamental building block of a sentence, and once you can reliably tell an independent clause from a dependent one, most sentence-structure rules become simple to apply rather than something to memorize by rote.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Clause?'
        },
        {
          type: 'text',
          content: 'A clause is any group of words containing both a subject and a verb. There are exactly two types: an independent clause expresses a complete thought and can stand alone as a sentence ("The dog barked"), while a dependent clause has a subject and verb but does NOT express a complete thought, so it cannot stand alone ("When the dog barked" or "Because I was tired" — both leave you waiting for more information).'
        },
        {
          type: 'heading',
          content: 'Spotting Dependent Clauses'
        },
        {
          type: 'text',
          content: 'Dependent clauses almost always begin with a subordinating word that signals they\'re incomplete: because, although, since, when, while, if, unless, after, before, that, which, who. Whenever you see a clause starting with one of these words, it cannot stand alone as a full sentence — it needs to be attached to an independent clause.'
        },
        {
          type: 'heading',
          content: 'The Four Sentence Types'
        },
        {
          type: 'text',
          content: 'Simple sentence: exactly one independent clause. "Dogs bark."\nCompound sentence: two or more independent clauses joined by a comma + coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon. "Dogs bark, and cats meow."\nComplex sentence: one independent clause plus one or more dependent clauses. "When dogs see strangers, they bark."\nCompound-complex sentence: two or more independent clauses plus one or more dependent clauses, combining both patterns above.'
        },
        {
          type: 'heading',
          content: 'Fragments and Run-Ons: The Two Core Errors'
        },
        {
          type: 'text',
          content: 'A sentence fragment happens when a dependent clause (or an incomplete thought) is punctuated as if it were a full sentence, missing the independent clause it needs. A run-on sentence happens when two independent clauses are joined incorrectly — with no punctuation at all, or with just a comma and no conjunction (a "comma splice"). Recognizing clause types is the key defense against both errors.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Identifying Clause Types',
          problem: 'Identify the clauses: "Although it was raining, we went to the park."',
          solution: 'Dependent clause: "Although it was raining"\nIndependent clause: "we went to the park"',
          explanation: 'The word "Although" signals the first clause is dependent — it cannot stand alone, even though it has a subject (it) and verb (was raining).'
        },
        {
          title: 'Example 2: Fixing a Fragment',
          problem: 'Fix this fragment: "Because the store was closed."',
          solution: 'Add an independent clause: "Because the store was closed, we went home." OR simply remove "Because": "The store was closed."',
          explanation: 'A dependent clause alone is a fragment — it needs an independent clause attached, or the subordinating word needs to be removed.'
        },
        {
          title: 'Example 3: Fixing a Run-On (Comma Splice)',
          problem: 'Fix this run-on: "I love reading, it relaxes me."',
          solution: 'Options: "I love reading because it relaxes me." OR "I love reading; it relaxes me." OR "I love reading, and it relaxes me."',
          explanation: 'Two independent clauses joined only by a comma is a comma splice — fix it with a subordinating word, a semicolon, or a comma plus a coordinating conjunction.'
        },
        {
          title: 'Example 4: Building a Compound-Complex Sentence',
          problem: 'Combine these ideas into one compound-complex sentence: "The rain started. We had already left. We got soaked."',
          solution: '"Because the rain started after we had already left, we got soaked."',
          explanation: 'This combines a dependent clause ("Because the rain started after we had already left") with an independent clause ("we got soaked").'
        }
      ],
      summary: 'Every sentence-structure rule on the SAT — fragments, run-ons, proper comma and semicolon use — flows from the same core skill: correctly telling independent clauses from dependent ones. Practice this identification until it\'s automatic, and the punctuation and sentence-combining rules that follow will feel like simple logic rather than arbitrary memorization.'
    },
    keyPoints: [
      'A clause contains both a subject and a verb',
      'An independent clause expresses a complete thought and can stand alone',
      'A dependent clause cannot stand alone, and often begins with a subordinating word like because, although, or when',
      'The four sentence types (simple, compound, complex, compound-complex) are defined by how many and which type of clauses they contain',
      'Fragments come from punctuating a dependent clause as if it were complete; run-ons come from joining independent clauses incorrectly'
    ],
    prerequisites: [],
    commonMistakes: [
      'Punctuating a dependent clause alone as a complete sentence, creating a fragment',
      'Joining two independent clauses with only a comma (a comma splice), creating a run-on',
      'Misidentifying a phrase (no subject-verb pair) as a clause',
      'Forgetting that a clause needs BOTH a subject and a verb, not just one or the other'
    ],
    tips: [
      'Test any clause by asking: "Could this stand alone as a complete sentence?"',
      'Watch for subordinating words (because, although, when, since, if) as a signal of a dependent clause',
      'When combining two independent clauses, use a comma + FANBOYS conjunction, a semicolon, or a subordinating word — never just a comma alone',
      'Vary your sentence types when writing for better flow, but always double-check each one is correctly punctuated'
    ],
    practiceQuestions: ['lesson-gram-agreement-001-q01', 'lesson-gram-agreement-001-q02', 'lesson-gram-agreement-001-q03', 'lesson-gram-agreement-001-q04', 'lesson-gram-agreement-001-q05', 'lesson-gram-agreement-001-q06', 'lesson-gram-agreement-001-q07', 'lesson-gram-agreement-001-q08', 'lesson-gram-agreement-001-q09', 'lesson-gram-agreement-001-q10', 'lesson-gram-agreement-001-q11', 'lesson-gram-agreement-001-q12', 'lesson-gram-agreement-001-q13', 'lesson-gram-agreement-001-q14', 'lesson-gram-agreement-001-q15', 'lesson-gram-agreement-001-q16', 'lesson-gram-agreement-001-q17', 'lesson-gram-agreement-001-q18', 'lesson-gram-agreement-001-q19', 'lesson-gram-agreement-001-q20'],
    estimatedReadTime: 20,
    orderIndex: 6
  },
  {
    id: 'lesson-grammar-002',
    title: 'Verb Tenses and Consistency',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 28,
    description: 'Master verb tenses and learn to maintain consistency throughout writing.',
    content: {
      introduction: 'Verb tense tells your reader WHEN something happened, and English has twelve distinct tenses to communicate that timing precisely. The good news is that the SAT rarely tests all twelve in isolation — instead, it mostly tests whether you can maintain CONSISTENT tense within a sentence or passage, and correctly recognize when a tense shift is actually appropriate versus an error.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Three Simple Tenses'
        },
        {
          type: 'text',
          content: 'Present: describes current or habitual actions. "I walk to school." "He walks to school."\nPast: describes completed actions. "I walked to school." "He walked to school."\nFuture: describes actions that haven\'t happened yet. "I will walk to school." "He will walk to school."\nThese three form the foundation — most everyday sentences use one of them.'
        },
        {
          type: 'heading',
          content: 'The Perfect Tenses'
        },
        {
          type: 'text',
          content: 'Present perfect (have/has + past participle): connects a past action to the present moment. "I have walked to school" (at some point up to now).\nPast perfect (had + past participle): describes an action completed BEFORE another past action. "I had walked to school before it started raining."\nFuture perfect (will have + past participle): describes an action that will be completed before a specific future point. "I will have walked to school by 8 AM."'
        },
        {
          type: 'heading',
          content: 'The Progressive Tenses'
        },
        {
          type: 'text',
          content: 'Progressive tenses (using a form of "be" + verb-ing) describe ongoing actions:\nPresent progressive: "I am walking" (happening right now)\nPast progressive: "I was walking" (was ongoing at a past point)\nFuture progressive: "I will be walking" (will be ongoing at a future point)\nThese combine with perfect tenses too (present perfect progressive: "I have been walking"), but the SAT rarely tests these compound forms directly.'
        },
        {
          type: 'heading',
          content: 'Maintaining Tense Consistency'
        },
        {
          type: 'text',
          content: 'Within a single sentence or a closely connected group of sentences describing events at the SAME time, keep your verb tense consistent. Only shift tenses when you\'re deliberately describing something that happened at a genuinely different time — a shift without that logical reason is a grammar error, not a stylistic choice.'
        },
        {
          type: 'heading',
          content: 'When a Tense Shift IS Correct'
        },
        {
          type: 'text',
          content: 'A tense shift is appropriate when the timeline genuinely changes: "She has lived in Boston for ten years, but she moved there after graduating college" correctly uses present perfect (an ongoing state) and past tense (a completed past event) because they describe genuinely different timeframes.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Fixing an Inconsistent Shift',
          problem: 'Fix the tense error: "She walks to the store and bought milk."',
          solution: 'Either: "She walks to the store and buys milk." (both present)\nOr: "She walked to the store and bought milk." (both past)',
          explanation: 'Both actions happen in the same timeframe, so both verbs should share the same tense.'
        },
        {
          title: 'Example 2: Present Perfect vs. Simple Past',
          problem: 'Choose the correct tense: "I ___ (have visited/visited) Paris three times in my life."',
          solution: '"I have visited Paris three times in my life." (present perfect)',
          explanation: 'Present perfect is correct here because it connects past experiences to an ongoing life story up to now — "in my life" signals an unfinished time period.'
        },
        {
          title: 'Example 3: Past Perfect for Earlier Past Action',
          problem: 'Choose the correct tense: "By the time we arrived, the movie ___ (started/had started)."',
          solution: '"By the time we arrived, the movie had started." (past perfect)',
          explanation: 'Past perfect signals that the movie starting happened BEFORE the arriving, even though both are in the past.'
        },
        {
          title: 'Example 4: Justified Tense Shift',
          problem: 'Is this tense shift correct? "He has worked at the company since 2015, but he started as an unpaid intern."',
          solution: 'Yes, this is correct — "has worked" (present perfect) shows an ongoing employment, and "started" (past) refers to a specific completed past event.',
          explanation: 'The two verbs describe genuinely different timeframes: an ongoing state versus one specific past moment.'
        }
      ],
      summary: 'The twelve verb tenses exist to communicate precise timing, but on the SAT the real skill is recognizing whether events described together happen at the same time (requiring consistent tense) or genuinely different times (justifying a shift). When in doubt, ask: "Does the timeline actually change here, or should this stay in one tense?"'
    },
    keyPoints: [
      'The three simple tenses (present, past, future) describe basic timing',
      'Perfect tenses (have/has/had + past participle) connect actions across different points in time',
      'Progressive tenses (be + verb-ing) describe ongoing actions',
      'Maintain the same tense for actions happening in the same timeframe',
      'A tense shift is only correct when the timeline genuinely changes between the actions being described'
    ],
    prerequisites: [],
    commonMistakes: [
      'Shifting tenses within a sentence or paragraph without a real change in timeframe',
      'Confusing present perfect (ongoing relevance) with simple past (a completed, disconnected event)',
      'Using past tense when past perfect is needed to show one action happened before another',
      'Incorrectly forming perfect tenses by mixing up "has," "have," and "had"'
    ],
    tips: [
      'Choose one primary tense before writing a passage, and stick with it unless the timeline changes',
      'Read your sentence aloud — inconsistent tense shifts often sound noticeably "off"',
      'Use past perfect ("had walked") specifically when showing one past action happened before another past action',
      'Ask "does the actual timeline change here?" before allowing a tense shift within connected sentences'
    ],
    practiceQuestions: ['lesson-gram-tense-002-q01', 'lesson-gram-tense-002-q02', 'lesson-gram-tense-002-q03', 'lesson-gram-tense-002-q04', 'lesson-gram-tense-002-q05', 'lesson-gram-tense-002-q06', 'lesson-gram-tense-002-q07', 'lesson-gram-tense-002-q08', 'lesson-gram-tense-002-q09', 'lesson-gram-tense-002-q10', 'lesson-gram-tense-002-q11', 'lesson-gram-tense-002-q12', 'lesson-gram-tense-002-q13', 'lesson-gram-tense-002-q14', 'lesson-gram-tense-002-q15', 'lesson-gram-tense-002-q16', 'lesson-gram-tense-002-q17', 'lesson-gram-tense-002-q18', 'lesson-gram-tense-002-q19', 'lesson-gram-tense-002-q20'],
    estimatedReadTime: 20,
    orderIndex: 7
  },
  {
    id: 'lesson-grammar-003',
    title: 'Pronouns and Antecedents',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 26,
    description: 'Learn to use pronouns correctly by matching them to their antecedents.',
    content: {
      introduction: 'A pronoun is a word that stands in for a noun so you don\'t have to keep repeating it — but that convenience only works if readers can clearly tell WHICH noun (the antecedent) the pronoun refers to. SAT grammar questions test pronoun-antecedent agreement constantly, especially around tricky singular-sounding words like "everyone" and "each," and around ambiguous references where a pronoun could point to more than one possible noun.',
      mainContent: [
        {
          type: 'heading',
          content: 'Types of Pronouns'
        },
        {
          type: 'text',
          content: 'Personal pronouns (subject form): I, you, he, she, it, we, they\nPersonal pronouns (object form): me, you, him, her, it, us, them\nPossessive pronouns: mine, yours, his, hers, its, ours, theirs\nDemonstrative pronouns: this, that, these, those\nRelative pronouns: who, whom, which, that, whose\nEach type follows its own usage rules, but the core agreement principle applies to all of them.'
        },
        {
          type: 'heading',
          content: 'The Antecedent: What a Pronoun Refers To'
        },
        {
          type: 'text',
          content: 'The antecedent is the specific noun a pronoun replaces or refers back to. In "Maria forgot her keys," "her" refers back to "Maria" — Maria is the antecedent. Every pronoun should have a clear, unambiguous antecedent; if a reader can\'t immediately tell what a pronoun refers to, that\'s a grammar problem worth fixing.'
        },
        {
          type: 'heading',
          content: 'The Three Agreement Rules'
        },
        {
          type: 'text',
          content: 'A pronoun must agree with its antecedent in:\n1) Number: singular antecedent needs a singular pronoun; plural needs plural ("The dog wagged its tail" not "their tail")\n2) Gender: match male, female, or neutral as appropriate\n3) Person: match first person (I/we), second person (you), or third person (he/she/it/they)'
        },
        {
          type: 'heading',
          content: 'The Tricky "Singular" Words'
        },
        {
          type: 'text',
          content: 'Words like everyone, everybody, someone, anybody, each, either, and neither are grammatically SINGULAR, even though they can feel like they refer to a group. "Each student must submit HIS OR HER homework" (or, in modern usage, "their" is increasingly accepted as a singular pronoun) — but on formal grammar tests, watch for whether the sentence needs a strictly singular pronoun to match these words.'
        },
        {
          type: 'heading',
          content: 'Avoiding Ambiguous Pronoun Reference'
        },
        {
          type: 'text',
          content: 'A pronoun is ambiguous when it could logically refer to more than one noun in the sentence. "When Sarah met Jessica, she was nervous" — who was nervous, Sarah or Jessica? The fix is usually to replace the pronoun with the specific noun it should refer to, removing the ambiguity entirely.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Fixing Number Agreement',
          problem: 'Fix the error: "Each student must submit their homework." (in a context requiring strict singular agreement)',
          solution: '"Each student must submit his or her homework." OR rewrite as plural: "All students must submit their homework."',
          explanation: '"Each" is grammatically singular, so a strictly formal correction pairs it with a singular pronoun — or the whole sentence can be made plural instead.'
        },
        {
          title: 'Example 2: Fixing Ambiguous Reference',
          problem: 'Fix the ambiguous pronoun: "When Sarah met Jessica, she was nervous."',
          solution: '"When Sarah met Jessica, Sarah was nervous." (or replace "she" with "Jessica," depending on intended meaning)',
          explanation: 'Replacing the ambiguous pronoun with the specific name removes any confusion about who was nervous.'
        },
        {
          title: 'Example 3: Pronoun Case (Subject vs. Object)',
          problem: 'Choose the correct pronoun: "The prize was given to my friend and ___ (I/me)."',
          solution: '"The prize was given to my friend and me." (object form, since it follows the preposition "to")',
          explanation: 'A quick test: remove "my friend and" — "The prize was given to me" sounds correct, confirming the object form is needed.'
        },
        {
          title: 'Example 4: Its vs. It\'s',
          problem: 'Choose correctly: "The company announced ___ (its/it\'s) new policy."',
          solution: '"The company announced its new policy." (possessive, no apostrophe)',
          explanation: '"It\'s" is always a contraction for "it is" or "it has" — the possessive form of "it" never uses an apostrophe.'
        }
      ],
      summary: 'Every pronoun needs a clear antecedent that it matches in number, gender, and person — and the SAT frequently tests this rule using tricky singular indefinite pronouns (everyone, each, either) and sentences with genuinely ambiguous references. When a pronoun\'s reference feels unclear or its agreement feels off, the safest fix is often to simply repeat the specific noun instead.'
    },
    keyPoints: [
      'Pronouns replace nouns to avoid repetition; the antecedent is the noun a pronoun refers back to',
      'Pronouns must agree with their antecedents in number, gender, and person',
      'Words like everyone, each, either, and neither are grammatically singular',
      'A pronoun is ambiguous if it could logically refer to more than one noun in the sentence',
      '"It\'s" is always a contraction for "it is"/"it has"; "its" is the possessive form and never uses an apostrophe'
    ],
    prerequisites: [],
    commonMistakes: [
      'Pairing a plural pronoun with a grammatically singular antecedent like "everyone" or "each"',
      'Leaving a pronoun reference ambiguous when multiple nouns could be the antecedent',
      'Using the wrong pronoun case (I vs. me, who vs. whom)',
      'Confusing "its" (possessive) with "it\'s" (contraction)'
    ],
    tips: [
      'Identify the exact antecedent before deciding which pronoun to use',
      'Double-check number agreement specifically with everyone, each, either, and neither',
      'If a pronoun could refer to more than one noun, replace it with the specific noun instead',
      'Test pronoun case by mentally removing other elements of a compound subject or object ("my friend and I" → just "I")'
    ],
    practiceQuestions: ['lesson-gram-pronouns-003-q01', 'lesson-gram-pronouns-003-q02', 'lesson-gram-pronouns-003-q03', 'lesson-gram-pronouns-003-q04', 'lesson-gram-pronouns-003-q05', 'lesson-gram-pronouns-003-q06', 'lesson-gram-pronouns-003-q07', 'lesson-gram-pronouns-003-q08', 'lesson-gram-pronouns-003-q09', 'lesson-gram-pronouns-003-q10', 'lesson-gram-pronouns-003-q11', 'lesson-gram-pronouns-003-q12', 'lesson-gram-pronouns-003-q13', 'lesson-gram-pronouns-003-q14', 'lesson-gram-pronouns-003-q15', 'lesson-gram-pronouns-003-q16', 'lesson-gram-pronouns-003-q17', 'lesson-gram-pronouns-003-q18', 'lesson-gram-pronouns-003-q19', 'lesson-gram-pronouns-003-q20'],
    estimatedReadTime: 18,
    orderIndex: 8
  },
  {
    id: 'lesson-grammar-004',
    title: 'Parallel Structure',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 26,
    description: 'Master parallel structure to create balanced, effective sentences.',
    content: {
      introduction: 'Parallel structure means giving similar ideas the same grammatical form — and while breaking this rule doesn\'t always create outright confusion, it always creates awkward, unbalanced writing that the SAT will ask you to identify and fix. The good news is that once you know what to look for (lists, comparisons, and paired conjunctions), spotting parallel structure errors becomes fast and mechanical.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is Parallel Structure?'
        },
        {
          type: 'text',
          content: 'Parallel structure (or parallelism) requires that items functioning the same way in a sentence — items in a list, items being compared, or items joined by a conjunction — all share the same grammatical form. This creates rhythm, balance, and clarity, and its absence creates a subtle but noticeable "bumpiness" in writing.'
        },
        {
          type: 'heading',
          content: 'Parallel Structure in Lists'
        },
        {
          type: 'text',
          content: 'When listing three or more items, every item needs to match grammatically. "She enjoys reading, writing, and studying" (all gerunds — -ing forms) is parallel. "She enjoys reading, to write, and studying" breaks parallelism by switching to an infinitive ("to write") in the middle of a gerund list.'
        },
        {
          type: 'heading',
          content: 'Parallel Structure in Comparisons'
        },
        {
          type: 'text',
          content: 'Comparisons using words like "than" or "as...as" also require parallel form on both sides: "Running is more tiring than to swim" is NOT parallel (gerund vs. infinitive); "Running is more tiring than swimming" IS parallel (gerund vs. gerund).'
        },
        {
          type: 'heading',
          content: 'Parallel Structure with Correlative Conjunctions'
        },
        {
          type: 'text',
          content: 'Paired conjunctions — either/or, neither/nor, not only/but also, both/and — require the grammatical structure following each half of the pair to match. "She not only studies hard but also she works part-time" is NOT parallel. "She not only studies hard but also works part-time" IS parallel, because both halves are verb phrases following the subject "she."'
        },
        {
          type: 'heading',
          content: 'A Quick Testing Strategy'
        },
        {
          type: 'text',
          content: 'To check parallel structure, isolate each item in the list, comparison, or paired construction and read it as if it stood alone attached to the sentence\'s main structure. If one item sounds grammatically odd compared to the others when read this way, that\'s the one breaking parallelism.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Fixing a List',
          problem: 'Fix the parallel structure error: "I like swimming, to run, and hiking."',
          solution: '"I like swimming, running, and hiking." (all gerunds)',
          explanation: 'Changing "to run" to "running" makes all three items match the -ing gerund pattern.'
        },
        {
          title: 'Example 2: Fixing a Comparison',
          problem: 'Fix the parallel structure error: "Reading a book is more relaxing than to watch television."',
          solution: '"Reading a book is more relaxing than watching television."',
          explanation: 'Both halves of the comparison now use the gerund form ("reading" and "watching").'
        },
        {
          title: 'Example 3: Fixing Correlative Conjunctions',
          problem: 'Fix the parallel structure error: "The plan was not only expensive but also it was risky."',
          solution: '"The plan was not only expensive but also risky."',
          explanation: 'Both halves of "not only...but also" should be simple adjectives following "was," matching in structure.'
        },
        {
          title: 'Example 4: Identifying the Broken Item',
          problem: 'Which item breaks parallel structure? "The committee reviewed the proposal, discussed its merits, and the budget was approved."',
          solution: 'The third item ("the budget was approved") breaks parallelism because it switches to passive voice with a different subject, unlike the first two active-voice verb phrases.',
          explanation: 'Corrected: "The committee reviewed the proposal, discussed its merits, and approved the budget" — now all three items are active verbs sharing the same subject.'
        }
      ],
      summary: 'Parallel structure requires that items in a list, comparison, or paired conjunction construction all share the same grammatical form. Test for it by isolating each item and checking whether it matches the others in structure — lists, "than"/"as...as" comparisons, and correlative conjunction pairs (either/or, not only/but also) are the three places the SAT tests this rule most often.'
    },
    keyPoints: [
      'Parallel structure means giving similar ideas the same grammatical form',
      'Items in a list of three or more must all match grammatically',
      'Comparisons using "than" or "as...as" require matching structure on both sides',
      'Correlative conjunctions (either/or, not only/but also, both/and) require matching structure after each half',
      'Test parallelism by isolating each item and checking it matches the others'
    ],
    prerequisites: [],
    commonMistakes: [
      'Mixing verb forms within a list (gerunds mixed with infinitives)',
      'Mixing parts of speech within a series that should all match',
      'Breaking parallel structure specifically in the last item of a longer list',
      'Not matching structure across both halves of a correlative conjunction pair'
    ],
    tips: [
      'List each item on its own line mentally (or literally, when practicing) to check they match',
      'Confirm that each item in a series could grammatically complete the sentence on its own',
      'Pay special attention to comparisons using "than" and paired conjunctions like "either/or"',
      'Use parallel structure deliberately in your own writing — it adds clarity and rhetorical emphasis'
    ],
    practiceQuestions: ['lesson-gram-modifiers-004-q01', 'lesson-gram-modifiers-004-q02', 'lesson-gram-modifiers-004-q03', 'lesson-gram-modifiers-004-q04', 'lesson-gram-modifiers-004-q05', 'lesson-gram-modifiers-004-q06', 'lesson-gram-modifiers-004-q07', 'lesson-gram-modifiers-004-q08', 'lesson-gram-modifiers-004-q09', 'lesson-gram-modifiers-004-q10', 'lesson-gram-modifiers-004-q11', 'lesson-gram-modifiers-004-q12', 'lesson-gram-modifiers-004-q13', 'lesson-gram-modifiers-004-q14', 'lesson-gram-modifiers-004-q15', 'lesson-gram-modifiers-004-q16', 'lesson-gram-modifiers-004-q17', 'lesson-gram-modifiers-004-q18', 'lesson-gram-modifiers-004-q19', 'lesson-gram-modifiers-004-q20'],
    estimatedReadTime: 18,
    orderIndex: 9
  },
  {
    id: 'lesson-grammar-005',
    title: 'Misplaced and Dangling Modifiers',
    subject: 'reading-writing',
    topic: 'grammar',
    difficulty: 'medium',
    duration: 26,
    description: 'Learn to identify and correct misplaced and dangling modifiers for clearer writing.',
    content: {
      introduction: 'A modifier is any word, phrase, or clause that describes another part of a sentence — and its placement matters enormously, because English relies heavily on word order to signal what\'s describing what. When a modifier ends up too far from (or with no connection to) the word it\'s meant to describe, sentences can become confusing or accidentally hilarious. The SAT tests this constantly, and the fix is almost always the same: move the modifier next to the word it should describe.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Misplaced Modifier?'
        },
        {
          type: 'text',
          content: 'A misplaced modifier IS describing something in the sentence, but it\'s positioned too far away from that word, creating ambiguity about what it\'s actually modifying. "The dog chased the cat wearing a collar" is unclear — is the cat wearing the collar, or is this describing the dog? Moving the modifier fixes it: "The dog wearing a collar chased the cat" makes clear the dog wears the collar.'
        },
        {
          type: 'heading',
          content: 'What Is a Dangling Modifier?'
        },
        {
          type: 'text',
          content: 'A dangling modifier describes something that ISN\'T actually stated anywhere in the sentence — the word it should logically modify is simply missing. "After finishing homework, the TV was turned on" doesn\'t say WHO finished the homework; grammatically, it sounds like "the TV" finished the homework, which makes no sense. The fix requires adding the missing subject: "After finishing homework, Sarah turned on the TV."'
        },
        {
          type: 'heading',
          content: 'The Key Difference'
        },
        {
          type: 'text',
          content: 'A misplaced modifier has a valid target somewhere in the sentence, just positioned incorrectly — the fix is to MOVE it. A dangling modifier has no valid target anywhere in the sentence at all — the fix is to ADD the correct subject, usually right after the modifying phrase.'
        },
        {
          type: 'heading',
          content: 'Modifiers at the Start of a Sentence: A Common Danger Zone'
        },
        {
          type: 'text',
          content: 'Introductory phrases (especially ones ending in -ing, like "Walking through the park...") are a frequent source of dangling modifiers, because writers often forget to make sure the very next word after the comma is the actual person or thing doing that action. Always check: does the subject immediately following the introductory phrase logically match what the phrase describes?'
        },
        {
          type: 'heading',
          content: 'A Quick Diagnostic Test'
        },
        {
          type: 'text',
          content: 'Read the modifying phrase, then ask "who or what is doing this?" Look at the very next noun in the sentence. If that noun logically matches, the sentence is fine. If it doesn\'t match (or isn\'t there at all), you\'ve found a misplaced or dangling modifier that needs fixing.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Misplaced Modifier',
          problem: 'Fix: "She served sandwiches to the children wrapped in plastic."',
          solution: '"She served sandwiches wrapped in plastic to the children."',
          explanation: 'Moving "wrapped in plastic" next to "sandwiches" clarifies that the sandwiches (not the children) are wrapped in plastic.'
        },
        {
          title: 'Example 2: Dangling Modifier',
          problem: 'Fix: "Walking through the park, a beautiful sunset could be seen."',
          solution: '"Walking through the park, we saw a beautiful sunset."',
          explanation: 'The original sentence never states WHO was walking; adding "we" as the subject immediately after the comma fixes the dangling modifier.'
        },
        {
          title: 'Example 3: Diagnostic Test in Action',
          problem: 'Is this sentence correct? "Excited about the trip, the suitcases were packed the night before."',
          solution: 'No — "excited about the trip" logically describes a person, but the next noun is "suitcases," which can\'t feel excited. Fix: "Excited about the trip, Maria packed the suitcases the night before."',
          explanation: 'Applying the "who or what is doing this?" test immediately reveals the mismatch between the modifier and the noun that follows it.'
        },
        {
          title: 'Example 4: Distinguishing Misplaced from Dangling',
          problem: 'Is "Only Jake ate the pizza" the same as "Jake only ate the pizza"?',
          solution: 'No — "Only Jake ate the pizza" means no one else ate it. "Jake only ate the pizza" means Jake didn\'t do anything else besides eat it (e.g., he didn\'t drink anything). This is a misplaced modifier issue with the word "only," which changes meaning based on exactly what it sits next to.',
          explanation: 'Even single-word modifiers like "only" can shift a sentence\'s meaning dramatically depending on placement.'
        }
      ],
      summary: 'Misplaced modifiers have a valid target in the sentence but sit too far away from it, while dangling modifiers describe something that\'s missing from the sentence entirely. In both cases, the fix centers on the same question: "who or what is actually doing or experiencing this modifier?" — then positioning the modifier immediately next to that answer.'
    },
    keyPoints: [
      'A modifier is a word, phrase, or clause describing another part of the sentence',
      'A misplaced modifier has a valid target, but sits too far from it, creating ambiguity',
      'A dangling modifier describes something that is missing entirely from the sentence',
      'Introductory phrases ending in -ing are a common source of dangling modifiers',
      'Test any modifier by asking "who or what is doing this?" and checking the very next noun'
    ],
    prerequisites: [],
    commonMistakes: [
      'Placing a modifier too far from the word it\'s meant to describe',
      'Using an introductory modifying phrase without a matching subject immediately following it',
      'Not recognizing when a modifier\'s placement creates unintended or confusing meaning',
      'Confusing a misplaced modifier (needs to be moved) with a dangling modifier (needs a subject added)'
    ],
    tips: [
      'Place modifiers as close as possible to the specific word or phrase they describe',
      'For any introductory phrase, confirm the subject immediately after the comma logically matches it',
      'Read sentences aloud — awkward or confusing modifier placement is often easier to hear than to see',
      'Apply the "who or what is doing this?" test whenever a sentence feels even slightly off'
    ],
    practiceQuestions: ['lesson-gram-parallel-005-q01', 'lesson-gram-parallel-005-q02', 'lesson-gram-parallel-005-q03', 'lesson-gram-parallel-005-q04', 'lesson-gram-parallel-005-q05', 'lesson-gram-parallel-005-q06', 'lesson-gram-parallel-005-q07', 'lesson-gram-parallel-005-q08', 'lesson-gram-parallel-005-q09', 'lesson-gram-parallel-005-q10', 'lesson-gram-parallel-005-q11', 'lesson-gram-parallel-005-q12', 'lesson-gram-parallel-005-q13', 'lesson-gram-parallel-005-q14', 'lesson-gram-parallel-005-q15', 'lesson-gram-parallel-005-q16', 'lesson-gram-parallel-005-q17', 'lesson-gram-parallel-005-q18', 'lesson-gram-parallel-005-q19', 'lesson-gram-parallel-005-q20'],
    estimatedReadTime: 18,
    orderIndex: 10
  },

  // Reading Comprehension (5 lessons)
  {
    id: 'lesson-reading-001',
    title: 'Finding Main Ideas and Supporting Details',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'easy',
    duration: 26,
    description: 'Learn to identify the main idea of a passage and recognize supporting details.',
    content: {
      introduction: 'This is the foundational reading comprehension skill that nearly every other passage-based question depends on. Before you can analyze tone, evaluate arguments, or compare texts, you first need to be able to reliably answer the most basic question: "What is this passage actually about?" Getting comfortable separating the main idea from the supporting details that back it up will make every other reading skill click into place faster.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is a Main Idea?'
        },
        {
          type: 'text',
          content: 'The main idea is the single most important point a passage is making — it answers "what is this passage mainly about?" at the level of the WHOLE passage, not just one paragraph. Sometimes the main idea is directly stated in a topic sentence (often, but not always, the first sentence). Other times it\'s implied, and you have to infer it by noticing what idea the details keep circling back to.'
        },
        {
          type: 'heading',
          content: 'The Five Common Types of Supporting Details'
        },
        {
          type: 'text',
          content: 'Examples: specific instances that illustrate the main idea in action.\nFacts: objective, verifiable statements.\nStatistics: numerical data supporting a claim.\nExpert opinions: perspectives or quotes from authorities on the topic.\nExplanations: descriptions of how or why something happens.\nRecognizing which TYPE of detail you\'re looking at can help you quickly judge how strong a piece of supporting evidence really is.'
        },
        {
          type: 'heading',
          content: 'Distinguishing Main Idea from Supporting Detail'
        },
        {
          type: 'text',
          content: 'A helpful test: the main idea should be broad enough to encompass ALL the supporting details in the passage, but specific enough that it\'s not just a vague generality. If your proposed "main idea" is actually just one of several details, it\'s too narrow. If it\'s so broad it could describe almost any passage on the general topic, it\'s too vague.'
        },
        {
          type: 'heading',
          content: 'Finding the Main Idea When It\'s Not Stated Directly'
        },
        {
          type: 'text',
          content: 'When a passage doesn\'t hand you a clear topic sentence, look for the idea that KEEPS RECURRING across multiple paragraphs or details — the common thread all the specific examples and facts are actually illustrating. Asking "why did the author include all of these specific details together?" often reveals the implied main idea.'
        },
        {
          type: 'heading',
          content: 'Main Ideas at the Paragraph Level'
        },
        {
          type: 'text',
          content: 'Longer passages often have both an overall main idea for the whole piece AND a more specific main idea for each individual paragraph (sometimes called the paragraph\'s topic sentence or main point). SAT questions sometimes ask about a paragraph\'s main idea specifically — the same skills apply, just scoped down to that one paragraph rather than the whole passage.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Stated Main Idea',
          problem: 'What is the main idea? "Exercise improves both physical and mental health. Studies show that regular exercise reduces heart disease risk. It also decreases anxiety and depression."',
          solution: 'Main idea: Exercise improves both physical and mental health.\nSupporting details: heart disease risk reduction (physical), anxiety and depression reduction (mental)',
          explanation: 'The first sentence directly states the main idea; the following two sentences each provide a specific supporting detail for the two categories mentioned (physical and mental).'
        },
        {
          title: 'Example 2: Identifying Detail Types',
          problem: 'In the passage above, is "Studies show that regular exercise reduces heart disease risk" a fact, statistic, or expert opinion?',
          solution: 'It functions as a reference to research findings — closer to a fact/statistic-based claim, since it cites what "studies show" rather than a single named expert\'s personal opinion.',
          explanation: 'Recognizing the detail type helps you judge how strong or specific a piece of evidence is.'
        },
        {
          title: 'Example 3: Testing a Proposed Main Idea (Too Narrow)',
          problem: 'A student claims the main idea of the passage above is "Exercise reduces heart disease risk." Is this correct?',
          solution: 'No — this is too narrow. It\'s only ONE of the two supporting details (physical health), not the broader main idea that covers both physical AND mental health.',
          explanation: 'A correct main idea must be broad enough to encompass every supporting detail in the passage, not just one of them.'
        },
        {
          title: 'Example 4: Finding an Implied Main Idea',
          problem: 'A passage describes a city investing in bike lanes, a farmer\'s market, and a community garden, without ever directly stating an overall point. What\'s the likely main idea?',
          solution: 'The city is investing in initiatives that promote healthier, more sustainable, and community-oriented urban living.',
          explanation: 'Even without an explicit topic sentence, the recurring theme across all three examples (health, sustainability, community) reveals the implied main idea.'
        }
      ],
      summary: 'Every passage has a main idea that\'s broad enough to cover all its supporting details but specific enough to be meaningful — and every other reading comprehension skill builds on your ability to find it quickly and accurately. When it\'s not directly stated, look for the thread connecting all the specific details the author chose to include.'
    },
    keyPoints: [
      'The main idea is the central point of an entire passage, answering "what is this mainly about?"',
      'Main ideas may be directly stated (often in a topic sentence) or implied through the details',
      'Supporting details include examples, facts, statistics, expert opinions, and explanations',
      'A correct main idea must be broad enough to cover every supporting detail, but not vaguely broad',
      'When a main idea isn\'t stated, look for the recurring theme connecting the passage\'s details'
    ],
    prerequisites: [],
    commonMistakes: [
      'Confusing a specific supporting detail with the overall main idea',
      'Choosing a main idea that is too narrow (covers only some details) or too broad (too vague to be meaningful)',
      'Ignoring supporting details that would help confirm or reject a proposed main idea',
      'Assuming the first sentence is always the main idea, when sometimes it\'s only introductory'
    ],
    tips: [
      'Ask yourself directly: "What is this passage mainly about?" before looking at answer choices',
      'Check whether a topic sentence exists (often, but not always, at the start of a paragraph)',
      'Test any proposed main idea by checking if it accounts for ALL the supporting details, not just some',
      'Try summarizing the whole passage in one sentence of your own — that\'s usually very close to the actual main idea'
    ],
    practiceQuestions: ['lesson-read-main-001-q01', 'lesson-read-main-001-q02', 'lesson-read-main-001-q03', 'lesson-read-main-001-q04', 'lesson-read-main-001-q05', 'lesson-read-main-001-q06', 'lesson-read-main-001-q07', 'lesson-read-main-001-q08', 'lesson-read-main-001-q09', 'lesson-read-main-001-q10', 'lesson-read-main-001-q11', 'lesson-read-main-001-q12', 'lesson-read-main-001-q13', 'lesson-read-main-001-q14', 'lesson-read-main-001-q15', 'lesson-read-main-001-q16', 'lesson-read-main-001-q17', 'lesson-read-main-001-q18', 'lesson-read-main-001-q19', 'lesson-read-main-001-q20'],
    estimatedReadTime: 18,
    orderIndex: 11
  },
  {
    id: 'lesson-reading-002',
    title: 'Making Inferences and Drawing Conclusions',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'medium',
    duration: 28,
    description: 'Learn to read between the lines and infer meanings not directly stated.',
    content: {
      introduction: 'Not everything an author communicates is stated outright — skilled writers rely on readers to connect dots and draw reasonable conclusions from evidence in the text. This is called "inference," and it\'s one of the most heavily tested skills on the SAT Reading section. The key discipline this lesson teaches is that a valid inference must always be traceable back to specific textual evidence — it is NOT the same thing as guessing or imagining.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Is an Inference?'
        },
        {
          type: 'text',
          content: 'An inference is a logical conclusion you reach by combining information stated in the text with reasonable background knowledge, arriving at something the author implies but never says directly. Crucially, an inference must be a SMALL logical step beyond the text, not a big leap — think of it as reading slightly between the lines, not writing your own story.'
        },
        {
          type: 'heading',
          content: 'The SAT\'s "Must Be True" Standard'
        },
        {
          type: 'text',
          content: 'On the SAT specifically, a correct inference answer choice must be something that MUST be true based on the passage — not just something that COULD be true, or that seems plausible. If an answer choice requires assuming information the passage never actually supports, it\'s incorrect, even if it sounds reasonable in the real world.'
        },
        {
          type: 'heading',
          content: 'Five Rules for Making Valid Inferences'
        },
        {
          type: 'text',
          content: '1) Base every inference on specific evidence in the text, not on outside assumptions.\n2) It\'s fine to use general background knowledge, but stay close to what the passage actually supports.\n3) Before finalizing an inference, ask: "What sentence(s) in the passage support this?"\n4) Avoid inferences built on stereotypes or unsupported generalizations.\n5) Look for MULTIPLE pieces of evidence pointing toward the same conclusion — a single ambiguous detail is a weaker foundation than several consistent details.'
        },
        {
          type: 'heading',
          content: 'Distinguishing Inference from Restatement'
        },
        {
          type: 'text',
          content: 'Some SAT answer choices simply restate something the passage already says directly — that\'s not really an inference at all, since nothing was concluded beyond what\'s explicit. A true inference question asks you to go one small logical step further than the literal text, using the evidence provided to reach an unstated but well-supported conclusion.'
        },
        {
          type: 'heading',
          content: 'Common Inference Traps to Avoid'
        },
        {
          type: 'text',
          content: 'Watch for answer choices that are extreme (using words like "always," "never," "completely") when the passage only supports a more moderate conclusion. Also watch for answer choices that are plausible in general but aren\'t actually supported by THIS specific passage — the SAT tests whether you can stick to what the text itself provides, not general world knowledge.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Basic Inference',
          problem: 'What can you infer? "Sarah ignored three job interview invitations. She seemed satisfied with her current position."',
          solution: 'Inference: Sarah is likely not interested in changing jobs right now.',
          explanation: 'This combines two pieces of evidence (ignoring invitations + seeming satisfied) to reach a small, well-supported logical conclusion.'
        },
        {
          title: 'Example 2: Testing Against the "Must Be True" Standard',
          problem: 'Given the Sarah example above, is "Sarah dislikes her current company\'s competitors" a valid inference?',
          solution: 'No — this is NOT supported by the text. The passage never mentions competitors at all; this would be an unsupported assumption, not a valid inference.',
          explanation: 'Even if it sounds plausible, an inference must be traceable to actual evidence in the passage, not just general plausibility.'
        },
        {
          title: 'Example 3: Avoiding an Extreme Inference',
          problem: 'A passage states a company\'s new product received mostly positive reviews, with a few complaints about price. Is "Customers universally loved the product" a valid inference?',
          solution: 'No — the word "universally" is too extreme. The passage explicitly mentions some complaints, so the valid inference is closer to "most customers responded positively, though not all."',
          explanation: 'Watch for absolute language in answer choices; it often overstates what a passage actually supports.'
        },
        {
          title: 'Example 4: Inference from Multiple Details',
          problem: 'A character is described as arriving late, avoiding eye contact, and repeatedly checking the door. What might you infer about how they feel?',
          solution: 'The character likely feels anxious, nervous, or uncomfortable in that setting.',
          explanation: 'Three separate pieces of evidence (lateness, avoiding eye contact, watching the door) all point toward the same conclusion, making it a well-supported inference.'
        }
      ],
      summary: 'A valid inference is a small, evidence-based logical step beyond what a passage directly states — never a wild guess, and never something that merely "could" be true without solid textual support. Always be ready to point to the specific evidence backing up any inference you make, and stay suspicious of extreme language or plausible-but-unsupported answer choices.'
    },
    keyPoints: [
      'An inference is a logical conclusion based on text evidence, not explicitly stated by the author',
      'On the SAT, a correct inference must be something that MUST be true, not just something that could be true',
      'Valid inferences are traceable to specific evidence in the passage',
      'Watch for extreme language (always, never, completely) that overstates what the text actually supports',
      'Multiple consistent pieces of evidence make for a stronger, more confident inference'
    ],
    prerequisites: ['lesson-reading-001'],
    commonMistakes: [
      'Making inferences based on outside assumptions rather than the text itself',
      'Confusing a plausible real-world guess with a textually-supported inference',
      'Choosing an inference answer that is too extreme for what the passage actually supports',
      'Ignoring details in the text that would contradict a tempting but unsupported inference'
    ],
    tips: [
      'Before finalizing an inference, ask yourself: "What specific sentence supports this?"',
      'Be suspicious of extreme words like always, never, and completely in inference answer choices',
      'Look for multiple details pointing toward the same conclusion for a stronger inference',
      'Remember the SAT standard: the correct answer must be something that MUST be true, not just plausible'
    ],
    practiceQuestions: ['lesson-read-inference-002-q01', 'lesson-read-inference-002-q02', 'lesson-read-inference-002-q03', 'lesson-read-inference-002-q04', 'lesson-read-inference-002-q05', 'lesson-read-inference-002-q06', 'lesson-read-inference-002-q07', 'lesson-read-inference-002-q08', 'lesson-read-inference-002-q09', 'lesson-read-inference-002-q10', 'lesson-read-inference-002-q11', 'lesson-read-inference-002-q12', 'lesson-read-inference-002-q13', 'lesson-read-inference-002-q14', 'lesson-read-inference-002-q15', 'lesson-read-inference-002-q16', 'lesson-read-inference-002-q17', 'lesson-read-inference-002-q18', 'lesson-read-inference-002-q19', 'lesson-read-inference-002-q20'],
    estimatedReadTime: 20,
    orderIndex: 12
  },
  {
    id: 'lesson-reading-003',
    title: 'Author\'s Tone and Purpose',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'medium',
    duration: 28,
    description: 'Identify the author\'s tone, purpose, and perspective in written passages.',
    content: {
      introduction: 'Every piece of writing exists for a reason (the author\'s purpose) and carries an attitude toward its subject (the author\'s tone) — and recognizing both is essential for reading beyond the surface-level facts of a passage. These two concepts are related but distinct: purpose is about WHY the author wrote the piece, while tone is about HOW the author feels about what they\'re writing. The SAT tests both, often within the same passage.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Four Common Purposes for Writing'
        },
        {
          type: 'text',
          content: 'To inform: present factual information objectively, without trying to change the reader\'s opinion.\nTo persuade: convince the reader to agree with a viewpoint or take a specific action.\nTo entertain: engage, amuse, or emotionally move the reader.\nTo explain: clarify or make understandable something that might otherwise be confusing.\nMany passages blend purposes, but usually one is dominant — ask yourself what the author most wants the reader to walk away with.'
        },
        {
          type: 'heading',
          content: 'What Is Tone?'
        },
        {
          type: 'text',
          content: 'Tone is the author\'s attitude toward their subject, similar to how a speaker\'s tone of voice reveals feeling beyond just their words. Common tones include: formal, informal, serious, humorous, sarcastic, critical, admiring, sympathetic, neutral, passionate, and skeptical. Unlike purpose (usually one of just a few broad categories), tone can be extremely specific and nuanced.'
        },
        {
          type: 'heading',
          content: 'How Tone Is Created'
        },
        {
          type: 'text',
          content: 'Tone emerges from concrete textual choices: word choice (calling something a "disaster" vs. a "setback" signals very different attitudes), sentence structure (short, clipped sentences can feel urgent or terse; long, flowing sentences can feel reflective or calm), and which details the author chooses to include or leave out. When identifying tone, point to SPECIFIC words or phrases that create that impression.'
        },
        {
          type: 'heading',
          content: 'Connotation: The Emotional Layer of Word Choice'
        },
        {
          type: 'text',
          content: 'Many words share a similar literal (denotative) meaning but carry very different emotional connotations. "Thrifty" and "cheap" both mean someone doesn\'t spend much money, but "thrifty" carries a positive connotation (wise, careful) while "cheap" carries a negative one (stingy, low-quality). Paying attention to connotation is one of the fastest ways to identify an author\'s tone.'
        },
        {
          type: 'heading',
          content: 'Tone Shifts Within a Passage'
        },
        {
          type: 'text',
          content: 'Tone isn\'t always constant throughout an entire passage — a longer piece might shift from skeptical to convinced, or from serious to hopeful, as the argument or narrative develops. SAT questions sometimes specifically ask you to track this kind of shift, so pay attention to transition words (however, but, yet, in contrast) that often signal a change in attitude.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Identifying Purpose and Tone Together',
          problem: 'Identify tone and purpose: "It\'s absolutely ridiculous that the school eliminated the arts program to save a few dollars."',
          solution: 'Purpose: to persuade\nTone: critical, passionate/outraged',
          explanation: 'The author wants readers to oppose the decision (persuasive purpose) and uses strong, emotionally loaded language ("absolutely ridiculous") to convey that critical, passionate attitude.'
        },
        {
          title: 'Example 2: Connotation Revealing Tone',
          problem: 'What does the author\'s tone seem to be if they describe a politician\'s speech as "calculated" rather than "thoughtful"?',
          solution: 'The tone is likely skeptical or critical — "calculated" carries a negative connotation suggesting insincerity or strategic manipulation, unlike the more neutral-to-positive "thoughtful."',
          explanation: 'Word choice with negative connotation, even when describing a factually similar action, reveals the author\'s critical attitude.'
        },
        {
          title: 'Example 3: Distinguishing Purpose from Tone',
          problem: 'A passage informs readers about a new law and also expresses mild concern about its implementation. What are its purpose and tone?',
          solution: 'Purpose: primarily to inform (with a secondary persuasive element)\nTone: mostly neutral/informative, with a note of concern or wariness',
          explanation: 'Purpose and tone can coexist at different intensities — a mainly informative piece can still carry a specific emotional undertone.'
        },
        {
          title: 'Example 4: Tracking a Tone Shift',
          problem: 'A passage begins describing a failed experiment in frustrated language, but ends describing what the team learned in a hopeful, forward-looking way. What happened to the tone?',
          solution: 'The tone shifts from frustrated/disappointed to hopeful/optimistic as the passage progresses from describing the failure to describing the lessons learned.',
          explanation: 'Longer passages often develop or shift in tone as their content and argument develop — noting where and why this happens is a common SAT question focus.'
        }
      ],
      summary: 'Author\'s purpose (why they wrote it) and tone (how they feel about the subject) work together to reveal a passage\'s deeper meaning beyond its literal content. Look for specific word choices — especially their connotations — sentence structure, and selected details as your evidence, and stay alert for tone shifts as longer passages develop.'
    },
    keyPoints: [
      'Author\'s purpose is their main reason for writing: to inform, persuade, entertain, or explain',
      'Tone is the author\'s attitude toward their subject, and can be highly specific and nuanced',
      'Tone is created through word choice (especially connotation), sentence structure, and selected details',
      'Connotation is the emotional association of a word, separate from its literal (denotative) meaning',
      'Tone can shift within a longer passage — watch for transition words that signal this change'
    ],
    prerequisites: ['lesson-reading-001'],
    commonMistakes: [
      'Confusing purpose (why) with tone (how the author feels)',
      'Missing subtle tone shifts partway through a longer passage',
      'Overlooking connotation and focusing only on a word\'s literal, dictionary meaning',
      'Assuming an author\'s tone must be simple or one-dimensional, when it can be complex or mixed'
    ],
    tips: [
      'Ask "why did the author write this?" to identify purpose, and "how does the author feel about this?" to identify tone',
      'Point to specific words or phrases as evidence any time you identify a tone',
      'Pay close attention to connotation — two words with similar literal meanings can signal very different attitudes',
      'Watch for transition words like "however" or "but" that often signal a tone shift within a passage'
    ],
    practiceQuestions: ['lesson-read-vocab-003-q01', 'lesson-read-vocab-003-q02', 'lesson-read-vocab-003-q03', 'lesson-read-vocab-003-q04', 'lesson-read-vocab-003-q05', 'lesson-read-vocab-003-q06', 'lesson-read-vocab-003-q07', 'lesson-read-vocab-003-q08', 'lesson-read-vocab-003-q09', 'lesson-read-vocab-003-q10', 'lesson-read-vocab-003-q11', 'lesson-read-vocab-003-q12', 'lesson-read-vocab-003-q13', 'lesson-read-vocab-003-q14', 'lesson-read-vocab-003-q15', 'lesson-read-vocab-003-q16', 'lesson-read-vocab-003-q17', 'lesson-read-vocab-003-q18', 'lesson-read-vocab-003-q19', 'lesson-read-vocab-003-q20'],
    estimatedReadTime: 20,
    orderIndex: 13
  },
  {
    id: 'lesson-reading-004',
    title: 'Analyzing Arguments and Evidence',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'hard',
    duration: 32,
    description: 'Evaluate the strength of arguments and the quality of supporting evidence.',
    content: {
      introduction: 'Reading critically means going beyond just understanding WHAT an author claims to actually evaluating whether their argument is well-supported and logically sound. This is one of the more advanced reading skills the SAT tests, often in passages that present persuasive or argumentative writing — science articles, opinion pieces, historical analysis. Learning to break an argument into its components and assess each one is the key to answering these questions confidently.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Four Components of an Argument'
        },
        {
          type: 'text',
          content: 'Claim: the main point or position being argued.\nEvidence: the facts, examples, data, or expert opinions offered to support the claim.\nReasoning: the logical explanation connecting the evidence to the claim — WHY does this evidence support this conclusion?\nCounterargument: an acknowledgment of an opposing viewpoint, sometimes followed by a rebuttal. Not every argument includes one, but strong arguments often do, since addressing objections builds credibility.'
        },
        {
          type: 'heading',
          content: 'What Makes Evidence Strong'
        },
        {
          type: 'text',
          content: 'Strong evidence is relevant (directly connects to the claim), from reliable sources (credible, expert, or well-established), sufficiently recent when timeliness matters, representative (not cherry-picked from an unusual case), and specific rather than vague. When evaluating a passage\'s argument, check each piece of evidence against these criteria.'
        },
        {
          type: 'heading',
          content: 'What Makes Evidence Weak'
        },
        {
          type: 'text',
          content: 'Weak evidence relies on opinion alone without factual backing, comes from clearly biased or self-interested sources, is outdated for a topic where recency matters, or is purely anecdotal (a single personal story used to support a broad general claim). Recognizing these weaknesses is central to evaluating argument strength on the SAT.'
        },
        {
          type: 'heading',
          content: 'Evaluating the Reasoning, Not Just the Evidence'
        },
        {
          type: 'text',
          content: 'Even accurate, relevant evidence can be attached to FLAWED reasoning — the logical bridge connecting evidence to claim might not actually hold up. Watch for common reasoning gaps: assuming correlation proves causation, overgeneralizing from a small sample, or drawing a conclusion that\'s broader than what the evidence actually supports.'
        },
        {
          type: 'heading',
          content: 'A Framework for Evaluating Any Argument'
        },
        {
          type: 'text',
          content: 'When an SAT question asks you to evaluate an argument\'s strength, work through these questions: 1) What exactly is the claim? 2) What evidence is offered? 3) Is that evidence strong by the criteria above? 4) Does the reasoning logically connect the evidence to the claim, or is there a gap? 5) Is a counterargument addressed, and how well?'
        }
      ],
      examples: [
        {
          title: 'Example 1: Breaking Down an Argument',
          problem: 'Analyze: "Studies show teenagers need more sleep. Therefore, schools should start at 9 AM instead of 7:30 AM."',
          solution: 'Claim: Schools should start later (9 AM).\nEvidence: Studies about teenagers\' sleep needs.\nReasoning: More sleep (enabled by a later start) will benefit teenagers.\nGap: The evidence supports that teens need more sleep, but doesn\'t directly prove that changing school start time (rather than, say, earlier bedtimes) is the best solution.',
          explanation: 'The argument has a clear structure, but the reasoning contains a gap between "teens need more sleep" and "therefore school should start later" specifically.'
        },
        {
          title: 'Example 2: Evaluating Evidence Quality',
          problem: 'An article claims a new diet is effective, citing "my neighbor lost 20 pounds using it." Is this strong evidence?',
          solution: 'No — this is weak evidence because it\'s a single anecdote (one person\'s experience), not representative or systematic data, and it doesn\'t account for other factors that might explain the weight loss.',
          explanation: 'Anecdotal evidence, even if true, is one of the weakest forms of support for a broad claim.'
        },
        {
          title: 'Example 3: Identifying a Reasoning Gap',
          problem: 'An argument states: "Ice cream sales and crime rates both rise in summer. Therefore, ice cream causes crime." What\'s wrong with this reasoning?',
          solution: 'This confuses correlation with causation — both trends are likely explained by a third factor (warmer weather, more people outside), not a direct causal relationship between ice cream and crime.',
          explanation: 'This is one of the most common reasoning flaws tested on the SAT: assuming that because two things happen together, one must cause the other.'
        },
        {
          title: 'Example 4: Evaluating a Counterargument',
          problem: 'An essay argues for a new policy, then states: "Critics claim this policy is too expensive, but the long-term savings in healthcare costs would far outweigh the initial investment." How does this strengthen the argument?',
          solution: 'By acknowledging the cost objection directly and offering a specific rebuttal (long-term savings), the argument shows awareness of opposing views and provides a reasoned response, which makes the overall argument more credible.',
          explanation: 'Addressing counterarguments, rather than ignoring them, is a hallmark of a well-constructed persuasive argument.'
        }
      ],
      summary: 'Evaluating an argument means examining its claim, evidence, and reasoning as separate components — strong evidence attached to flawed reasoning still produces a weak argument overall. Watch specifically for correlation-versus-causation errors and overgeneralization from limited evidence, and give extra credit to arguments that directly address counterarguments rather than ignoring them.'
    },
    keyPoints: [
      'Arguments consist of a claim, supporting evidence, reasoning connecting them, and sometimes a counterargument',
      'Strong evidence is relevant, reliable, recent (when applicable), representative, and specific',
      'Weak evidence relies on opinion alone, biased sources, outdated information, or single anecdotes',
      'Even accurate evidence can support flawed reasoning — evaluate the logical connection, not just the facts themselves',
      'Watch for correlation-causation confusion and overgeneralization as common reasoning flaws'
    ],
    prerequisites: ['lesson-reading-001', 'lesson-reading-003'],
    commonMistakes: [
      'Accepting an argument\'s conclusion without separately evaluating its evidence and reasoning',
      'Confusing a compelling anecdote with strong, representative evidence',
      'Missing reasoning gaps that exist even when the evidence itself is accurate',
      'Assuming correlation between two things automatically proves one causes the other'
    ],
    tips: [
      'Break every argument into claim, evidence, reasoning, and (if present) counterargument before judging it',
      'Ask specifically whether the evidence is relevant, reliable, recent, representative, and specific',
      'Watch for the classic correlation-causation trap whenever two trends are described as connected',
      'Give more credibility to arguments that directly acknowledge and respond to counterarguments'
    ],
    practiceQuestions: ['lesson-read-tone-004-q01', 'lesson-read-tone-004-q02', 'lesson-read-tone-004-q03', 'lesson-read-tone-004-q04', 'lesson-read-tone-004-q05', 'lesson-read-tone-004-q06', 'lesson-read-tone-004-q07', 'lesson-read-tone-004-q08', 'lesson-read-tone-004-q09', 'lesson-read-tone-004-q10', 'lesson-read-tone-004-q11', 'lesson-read-tone-004-q12', 'lesson-read-tone-004-q13', 'lesson-read-tone-004-q14', 'lesson-read-tone-004-q15', 'lesson-read-tone-004-q16', 'lesson-read-tone-004-q17', 'lesson-read-tone-004-q18', 'lesson-read-tone-004-q19', 'lesson-read-tone-004-q20'],
    estimatedReadTime: 22,
    orderIndex: 14
  },
  {
    id: 'lesson-reading-005',
    title: 'Comparing and Contrasting Texts',
    subject: 'reading-writing',
    topic: 'reading-comprehension',
    difficulty: 'hard',
    duration: 32,
    description: 'Learn to compare and contrast information, perspectives, and writing styles across multiple texts.',
    content: {
      introduction: 'Some SAT reading passages appear in pairs, asking you to understand not just each text individually but how they relate to each other — where they agree, where they diverge, and why. This "paired passage" format tests a genuinely different skill from single-passage comprehension: holding two different perspectives, structures, or arguments in mind simultaneously and analyzing the relationship between them.',
      mainContent: [
        {
          type: 'heading',
          content: 'Comparing vs. Contrasting'
        },
        {
          type: 'text',
          content: 'Comparing means identifying similarities between two texts. Contrasting means identifying differences. Most paired-passage questions ask about both — noting where the two texts align and where they diverge on the same general topic.'
        },
        {
          type: 'heading',
          content: 'Six Dimensions to Compare Across Texts'
        },
        {
          type: 'text',
          content: '1) Main ideas: do both passages make the same central point, or different ones?\n2) Supporting details and evidence: do they use similar types of evidence, or different kinds (one might use statistics, another anecdotes)?\n3) Author\'s purpose and tone: are both authors trying to do the same thing, and do they feel similarly about the topic?\n4) Perspective or viewpoint: do the authors share an opinion, or do they disagree?\n5) Organization and structure: do the passages follow a similar structure (e.g., both chronological, or one argumentative and one narrative)?\n6) Word choice and style: is one more formal, technical, or emotionally charged than the other?'
        },
        {
          type: 'heading',
          content: 'A Reliable Process for Paired Passages'
        },
        {
          type: 'text',
          content: '1) Read the first passage completely and identify its main idea, purpose, and tone.\n2) Read the second passage completely, doing the same.\n3) Before answering questions, mentally (or on scratch paper) note the key similarities and differences across the six dimensions above.\n4) For each question, determine whether it\'s asking about Passage 1 alone, Passage 2 alone, or the relationship between both.'
        },
        {
          type: 'heading',
          content: 'Using Transition Language in Your Own Analysis'
        },
        {
          type: 'text',
          content: 'When articulating a comparison, clear transition words make the relationship explicit: "similarly," "likewise," and "both" signal comparison; "however," "in contrast," "unlike," and "whereas" signal contrast. Thinking in these terms — even just mentally — helps organize your understanding of how the two passages relate.'
        },
        {
          type: 'heading',
          content: 'Why Authors Might Differ on the Same Topic'
        },
        {
          type: 'text',
          content: 'Two authors writing about the same general subject often differ because of different purposes (one informing, one persuading), different audiences, different types of evidence available to them, or genuinely different perspectives and values. Considering WHY two texts differ — not just noting THAT they differ — often reveals the deeper point a paired-passage question is testing.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Comparing Purpose and Tone',
          problem: 'Two articles both discuss climate change. Article A uses statistical evidence and a formal, objective tone. Article B uses personal narrative and an emotional, urgent tone. How do they differ?',
          solution: 'They differ in evidence type (statistical vs. anecdotal/personal) and tone (formal/objective vs. emotional/urgent), even though they share the same general topic.',
          explanation: 'Same subject, but different approaches to persuading or informing the reader reveal different underlying purposes or intended audiences.'
        },
        {
          title: 'Example 2: Finding a Similarity Beneath a Surface Difference',
          problem: 'Article A argues for a policy using economic data. Article B argues for the same policy using personal stories. What do they have in common despite their different approaches?',
          solution: 'Both articles share the same claim/position (supporting the policy) and the same overall persuasive purpose — they just use different TYPES of evidence to get there.',
          explanation: 'Looking past surface-level differences in style often reveals a shared underlying main idea or purpose.'
        },
        {
          title: 'Example 3: Identifying Disagreement',
          problem: 'Passage 1 argues technology has made communication more meaningful. Passage 2 argues technology has made communication more superficial. How do these relate?',
          solution: 'These two passages directly disagree on the same central question (technology\'s effect on communication quality), representing contrasting perspectives on the same issue.',
          explanation: 'Recognizing genuine disagreement (not just different emphasis) is common in SAT paired-passage sets.'
        },
        {
          title: 'Example 4: Explaining WHY Texts Differ',
          problem: 'Why might a scientist\'s article and a journalist\'s article about the same medical study reach different tones, even if they don\'t disagree on the facts?',
          solution: 'The scientist likely writes in a formal, cautious, technical tone (typical of academic writing and appropriate for a scientific audience), while the journalist likely writes in a more accessible, engaging tone aimed at general readers — different audiences and purposes shape tone even without factual disagreement.',
          explanation: 'Considering the likely audience and purpose behind each text explains stylistic differences that go beyond simple agreement or disagreement.'
        }
      ],
      summary: 'Paired-passage questions test your ability to hold two texts in mind at once and analyze their relationship across main ideas, evidence, tone, perspective, structure, and style. Beyond simply noting where two texts agree or disagree, understanding WHY they differ — different purposes, audiences, or types of evidence — will help you answer the more sophisticated comparison questions the SAT asks.'
    },
    keyPoints: [
      'Comparing identifies similarities between texts; contrasting identifies differences',
      'Compare texts across six dimensions: main idea, evidence, purpose/tone, perspective, structure, and style',
      'Read and understand each passage individually before analyzing their relationship',
      'Transition words like "similarly" and "in contrast" help organize comparative analysis',
      'Understanding WHY two texts differ (different purpose, audience, or evidence) reveals deeper insight than just noting THAT they differ'
    ],
    prerequisites: ['lesson-reading-001', 'lesson-reading-003'],
    commonMistakes: [
      'Noting only surface-level similarities or differences without deeper analysis',
      'Forgetting to fully understand each passage individually before comparing them',
      'Not considering how different purposes or audiences might explain stylistic differences',
      'Missing genuine points of disagreement between two passages that seem to cover the same general topic'
    ],
    tips: [
      'Fully process each passage on its own first — note main idea, purpose, and tone for each',
      'Systematically check all six comparison dimensions rather than relying on a general impression',
      'Determine whether each question is about Passage 1 alone, Passage 2 alone, or their relationship',
      'Ask WHY two texts might differ (audience, purpose, evidence type), not just note THAT they differ'
    ],
    practiceQuestions: ['lesson-read-structure-005-q01', 'lesson-read-structure-005-q02', 'lesson-read-structure-005-q03', 'lesson-read-structure-005-q04', 'lesson-read-structure-005-q05', 'lesson-read-structure-005-q06', 'lesson-read-structure-005-q07', 'lesson-read-structure-005-q08', 'lesson-read-structure-005-q09', 'lesson-read-structure-005-q10', 'lesson-read-structure-005-q11', 'lesson-read-structure-005-q12', 'lesson-read-structure-005-q13', 'lesson-read-structure-005-q14', 'lesson-read-structure-005-q15', 'lesson-read-structure-005-q16', 'lesson-read-structure-005-q17', 'lesson-read-structure-005-q18', 'lesson-read-structure-005-q19', 'lesson-read-structure-005-q20'],
    estimatedReadTime: 22,
    orderIndex: 15
  }
];
