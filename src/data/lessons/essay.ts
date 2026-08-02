import { Lesson } from '../../types';

export const essayLessons: Lesson[] = [
  // Writing Fundamentals (3 lessons)
  {
    id: 'lesson-essay-001',
    title: 'Grammar Review for Writing',
    subject: 'essay',
    topic: 'writing-fundamentals',
    difficulty: 'easy',
    duration: 28,
    description: 'Review essential grammar rules needed for effective, error-free essay writing.',
    content: {
      introduction: 'Grammar errors don\'t just look sloppy — they actively distract a reader from your argument and can make even a brilliant idea seem unconvincing. This lesson reviews the five grammar issues that show up most often in student essays, along with quick, reliable ways to catch and fix each one before you submit your writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Five Most Common Grammar Mistakes'
        },
        {
          type: 'text',
          content: '1) Subject-verb agreement: the subject and verb must match in number ("The list of items IS long," not "are long," since "list" is the singular subject).\n2) Pronoun agreement: pronouns must match their antecedents in number and gender.\n3) Verb tense consistency: keep tense consistent unless the timeline genuinely shifts.\n4) Misplaced modifiers: keep descriptive words and phrases close to what they describe.\n5) Comma splices: don\'t join two independent clauses with only a comma.'
        },
        {
          type: 'heading',
          content: 'Fixing Run-Ons and Fragments'
        },
        {
          type: 'text',
          content: 'Run-on: "The essay was long, it was also well-written."\nFixed: "The essay was long, and it was also well-written." (adds a coordinating conjunction after the comma)\n\nFragment: "Because the author used vivid imagery."\nFixed: "The essay was memorable because the author used vivid imagery." (attaches the dependent clause to an independent one)'
        },
        {
          type: 'heading',
          content: 'Fixing Subject-Verb Agreement Around Tricky Subjects'
        },
        {
          type: 'text',
          content: 'Agreement gets harder when the true subject is hidden behind a prepositional phrase: "The box of chocolates WAS delicious" (not "were" — the subject is "box," singular, not "chocolates"). Similarly, indefinite pronouns like "each," "everyone," and "neither" are singular and need singular verbs: "Each of the students HAS a copy," not "have."'
        },
        {
          type: 'heading',
          content: 'A Fast Proofreading Pass'
        },
        {
          type: 'text',
          content: 'Under SAT time pressure, you won\'t have time for an exhaustive grammar review — instead, do one fast targeted pass checking specifically for these five issues, ideally by reading your essay slowly, sentence by sentence, rather than skimming the whole thing at once.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Subject-Verb Agreement',
          problem: 'Fix: "Each of the students need to submit their essay."',
          solution: '"Each of the students needs to submit his or her essay."',
          explanation: '"Each" is singular, so the verb should be "needs," and (in strict formal usage) the pronoun should be singular too.'
        },
        {
          title: 'Example 2: Comma Splice',
          problem: 'Fix: "The argument was persuasive, the evidence was weak."',
          solution: '"The argument was persuasive, but the evidence was weak."',
          explanation: 'Adding the coordinating conjunction "but" after the comma resolves the comma splice and clarifies the contrast between the two ideas.'
        },
        {
          title: 'Example 3: Misplaced Modifier',
          problem: 'Fix: "The author only wrote three essays this year."',
          solution: 'If the intended meaning is that three (not more) essays were written: "The author wrote only three essays this year."',
          explanation: 'Moving "only" directly next to "three essays" removes ambiguity about what exactly is being limited.'
        },
        {
          title: 'Example 4: Hidden Subject Agreement',
          problem: 'Fix: "The collection of essays were published last year."',
          solution: '"The collection of essays was published last year."',
          explanation: 'The true subject is "collection" (singular), not "essays," even though "essays" sits closer to the verb.'
        }
      ],
      summary: 'Strong essay writing depends on catching the same handful of grammar issues consistently: subject-verb agreement, pronoun agreement, tense consistency, modifier placement, and comma splices. Build a quick, targeted proofreading habit around these five categories rather than trying to review everything at once.'
    },
    keyPoints: [
      'Subject and verb must agree in number, even when other words sit between them',
      'Pronouns must agree with their antecedents in number and gender',
      'Maintain consistent verb tense unless the timeline genuinely changes',
      'Keep modifiers close to the word or phrase they describe',
      'Never join two independent clauses with just a comma — use a conjunction, semicolon, or period instead'
    ],
    prerequisites: [],
    commonMistakes: [
      'Overlooking agreement errors when a prepositional phrase sits between subject and verb',
      'Shifting tense unexpectedly within a paragraph',
      'Creating sentence fragments by punctuating a dependent clause as complete',
      'Splicing two independent clauses together with only a comma'
    ],
    tips: [
      'Read your essay aloud to catch errors your eyes might skip over while reading silently',
      'Check subject-verb agreement by identifying the TRUE subject, ignoring words in between',
      'Verify tense consistency by scanning just the verbs in a paragraph, one after another',
      'When you spot a comma joining two full sentences, add a conjunction or swap in a semicolon'
    ],
    practiceQuestions: ['lesson-essay-thesis-001-q01', 'lesson-essay-thesis-001-q02', 'lesson-essay-thesis-001-q03', 'lesson-essay-thesis-001-q04', 'lesson-essay-thesis-001-q05', 'lesson-essay-thesis-001-q06', 'lesson-essay-thesis-001-q07', 'lesson-essay-thesis-001-q08', 'lesson-essay-thesis-001-q09', 'lesson-essay-thesis-001-q10', 'lesson-essay-thesis-001-q11', 'lesson-essay-thesis-001-q12', 'lesson-essay-thesis-001-q13', 'lesson-essay-thesis-001-q14', 'lesson-essay-thesis-001-q15', 'lesson-essay-thesis-001-q16', 'lesson-essay-thesis-001-q17', 'lesson-essay-thesis-001-q18', 'lesson-essay-thesis-001-q19', 'lesson-essay-thesis-001-q20'],
    estimatedReadTime: 20,
    orderIndex: 1
  },
  {
    id: 'lesson-essay-002',
    title: 'Sentence Variety and Style',
    subject: 'essay',
    topic: 'writing-fundamentals',
    difficulty: 'medium',
    duration: 28,
    description: 'Improve writing by using varied sentence structures and engaging style.',
    content: {
      introduction: 'Readers disengage quickly from writing that repeats the same sentence pattern over and over — subject, verb, object; subject, verb, object — no matter how good the ideas are underneath. Learning to vary your sentence length, structure, and opening keeps a reader\'s attention and signals a more sophisticated command of the language, which essay graders notice and reward.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Four Sentence Types'
        },
        {
          type: 'text',
          content: 'Simple: one independent clause ("The book impressed me.")\nCompound: two or more independent clauses joined by a conjunction or semicolon ("The book impressed me, and I recommended it to friends.")\nComplex: one independent clause plus one or more dependent clauses ("Because the plot was gripping, I finished the book in one sitting.")\nCompound-Complex: combines both patterns above in a single sentence.\nUsing a mix of all four across a paragraph creates natural rhythm.'
        },
        {
          type: 'heading',
          content: 'Sentence Combining'
        },
        {
          type: 'text',
          content: 'One of the fastest ways to add variety is combining several short, choppy sentences into one longer, more sophisticated one. "The book was good. It had an interesting plot. The characters were well-developed." becomes "The book impressed me with its interesting plot and well-developed characters" — three simple sentences become one, more fluent sentence.'
        },
        {
          type: 'heading',
          content: 'Varying Sentence Openings'
        },
        {
          type: 'text',
          content: 'If every sentence in a paragraph starts with its subject, the writing can feel monotonous even if the sentence types vary. Try opening some sentences with a dependent clause ("Although the evidence was limited..."), a prepositional phrase ("In the years following the reform..."), or a transitional word ("However, the data suggests...") to break up the pattern.'
        },
        {
          type: 'heading',
          content: 'Word Choice as a Style Tool'
        },
        {
          type: 'text',
          content: 'Beyond sentence structure, replacing tired, overused words ("good," "bad," "very," "a lot") with more specific, vivid alternatives elevates the overall style of a piece. This works hand-in-hand with sentence variety — a well-varied sentence with weak word choice still falls flat.'
        },
        {
          type: 'heading',
          content: 'Balancing Variety with Clarity'
        },
        {
          type: 'text',
          content: 'Sentence variety should never come at the cost of clarity — an overly long or convoluted sentence that\'s hard to follow isn\'t "sophisticated," it\'s just confusing. Aim for a natural mix: a few short, punchy sentences for emphasis, balanced with longer, more complex ones that develop ideas fully.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Combining Choppy Sentences',
          problem: 'Combine: "The book was good. It had an interesting plot. The characters were well-developed."',
          solution: '"The book impressed me with its interesting plot and well-developed characters."',
          explanation: 'Combining three short, repetitive sentences into one fluent sentence improves flow and demonstrates more sophisticated sentence control.'
        },
        {
          title: 'Example 2: Varying Sentence Openings',
          problem: 'Rewrite to avoid starting with the subject: "The study found surprising results. It challenged previous assumptions."',
          solution: '"Surprisingly, the study found results that challenged previous assumptions."',
          explanation: 'Opening with an adverb ("Surprisingly") instead of the subject ("The study") breaks up a repetitive sentence pattern.'
        },
        {
          title: 'Example 3: Building a Complex Sentence',
          problem: 'Combine using a dependent clause: "The team practiced hard. They won the championship."',
          solution: '"Because the team practiced hard, they won the championship."',
          explanation: 'Adding "Because" turns the first sentence into a dependent clause, creating a complex sentence that shows a cause-effect relationship directly.'
        },
        {
          title: 'Example 4: Balancing Long and Short Sentences',
          problem: 'Improve this paragraph for rhythm: "The plan was ambitious. It required significant resources, careful coordination among multiple departments, and buy-in from stakeholders at every level of the organization. It failed."',
          solution: 'Keep the short sentences for emphasis, but the structure already works well: a short opening statement, a longer explanatory sentence, and a short, punchy conclusion ("It failed.") for dramatic effect.',
          explanation: 'This paragraph demonstrates good rhythm variety — short sentences bookend a longer, more detailed one, creating emphasis at both ends.'
        }
      ],
      summary: 'Varying sentence length, type, and opening keeps readers engaged and signals a more mature writing style — but variety should always serve clarity, not undermine it. Practice combining short, choppy sentences and starting some sentences with something other than the subject.'
    },
    keyPoints: [
      'The four sentence types (simple, compound, complex, compound-complex) each create different rhythm and emphasis',
      'Combining short, choppy sentences into longer ones improves flow',
      'Varying sentence openings (not always starting with the subject) prevents monotony',
      'Strong word choice reinforces the effect of good sentence variety',
      'Sentence variety should always support clarity, never come at its expense'
    ],
    prerequisites: ['lesson-essay-001'],
    commonMistakes: [
      'Using all simple sentences, creating a choppy, repetitive rhythm',
      'Starting every sentence with the subject',
      'Combining sentences into something so long it becomes hard to follow',
      'Overusing the same transition word repeatedly'
    ],
    tips: [
      'Read your paragraph aloud and listen for repetitive rhythm',
      'Aim for a natural mix of short, medium, and long sentences',
      'Try rewriting a few sentences to open with something other than the subject',
      'Replace weak, overused verbs and adjectives with more specific alternatives'
    ],
    practiceQuestions: ['lesson-essay-structure-002-q01', 'lesson-essay-structure-002-q02', 'lesson-essay-structure-002-q03', 'lesson-essay-structure-002-q04', 'lesson-essay-structure-002-q05', 'lesson-essay-structure-002-q06', 'lesson-essay-structure-002-q07', 'lesson-essay-structure-002-q08', 'lesson-essay-structure-002-q09', 'lesson-essay-structure-002-q10', 'lesson-essay-structure-002-q11', 'lesson-essay-structure-002-q12', 'lesson-essay-structure-002-q13', 'lesson-essay-structure-002-q14', 'lesson-essay-structure-002-q15', 'lesson-essay-structure-002-q16', 'lesson-essay-structure-002-q17', 'lesson-essay-structure-002-q18', 'lesson-essay-structure-002-q19', 'lesson-essay-structure-002-q20'],
    estimatedReadTime: 20,
    orderIndex: 2
  },
  {
    id: 'lesson-essay-003',
    title: 'Word Choice and Vocabulary in Writing',
    subject: 'essay',
    topic: 'writing-fundamentals',
    difficulty: 'medium',
    duration: 26,
    description: 'Choose the right words to express ideas clearly and persuasively.',
    content: {
      introduction: 'The exact words you choose shape how convincing, clear, and memorable your writing feels — vague, generic language makes even a strong argument sound weak, while precise, vivid language makes ideas land with real force. This lesson covers how to sharpen word choice and avoid the small mix-ups (their/there/they\'re, its/it\'s) that quietly undercut a reader\'s confidence in your writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'Precision Over Vagueness'
        },
        {
          type: 'text',
          content: 'Vague words like "good," "bad," "nice," "very," and "a lot" tell a reader almost nothing specific. Replace them with sharper alternatives: instead of "good," try excellent, superb, outstanding, or effective (depending on exactly what you mean); instead of "bad," try terrible, ineffective, or problematic; instead of "very [adjective]," either delete "very" entirely or find one stronger word that captures the intensity on its own.'
        },
        {
          type: 'heading',
          content: 'Matching Word Choice to Context'
        },
        {
          type: 'text',
          content: 'Formal essay writing calls for a different vocabulary register than casual conversation — avoid slang, contractions in most cases, and overly casual phrasing. At the same time, don\'t swing too far into artificially inflated, thesaurus-driven language that sounds unnatural; the goal is precise and appropriate, not simply "impressive-sounding."'
        },
        {
          type: 'heading',
          content: 'Common Word Confusions'
        },
        {
          type: 'text',
          content: 'Their (possessive) / There (location) / They\'re (contraction of "they are")\nYour (possessive) / You\'re (contraction of "you are")\nIts (possessive) / It\'s (contraction of "it is" or "it has")\nTo (preposition/infinitive) / Too (also/excessively) / Two (the number)\nAffect (usually a verb, "to influence") / Effect (usually a noun, "a result")\nThese mix-ups are easy to make while writing quickly but stand out clearly to a careful reader.'
        },
        {
          type: 'heading',
          content: 'Building Precision Through Specificity'
        },
        {
          type: 'text',
          content: 'Beyond avoiding vague words, precision also comes from specificity: naming exact details rather than general categories. "The novel explores themes of ambition" is fine, but "the novel explores how unchecked ambition corrodes personal relationships" tells the reader significantly more with barely any extra length.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Replacing Vague Words',
          problem: 'Improve: "The movie was really good and the actors were really good too."',
          solution: '"The movie was outstanding, and the actors delivered compelling performances."',
          explanation: 'Specific, vivid words replace the vague, repeated "really good," making the sentence more precise and less repetitive.'
        },
        {
          title: 'Example 2: Affect vs. Effect',
          problem: 'Choose correctly: "The new policy will ___ (affect/effect) student performance."',
          solution: '"The new policy will affect student performance." (verb, meaning "to influence")',
          explanation: '"Affect" is almost always the verb form; "effect" is almost always the noun form (as in "the effect of the policy").'
        },
        {
          title: 'Example 3: Its vs. It\'s in Context',
          problem: 'Choose correctly: "The company reported ___ (its/it\'s) highest earnings this quarter."',
          solution: '"The company reported its highest earnings this quarter." (possessive, no apostrophe)',
          explanation: '"It\'s" would only be correct if the sentence meant "it is" or "it has" — neither fits here, so the possessive "its" is correct.'
        },
        {
          title: 'Example 4: Adding Specificity',
          problem: 'Sharpen this vague sentence: "Technology has changed a lot of things about how people communicate."',
          solution: '"Smartphones and social media have replaced face-to-face conversation with instant, asynchronous messaging."',
          explanation: 'Naming specific technologies and specific effects replaces the vague phrase "a lot of things" with concrete, meaningful detail.'
        }
      ],
      summary: 'Precise, specific word choice — rather than vague filler language — is what makes writing feel confident and persuasive, and avoiding common confusions like their/there/they\'re or its/it\'s keeps small errors from undercutting that credibility. Aim for language that\'s exact and appropriate to a formal context, not artificially inflated.'
    },
    keyPoints: [
      'Replace vague words (good, bad, very, a lot) with specific, precise alternatives',
      'Match your word choice and formality level to the context of formal essay writing',
      'Know the common word confusions: their/there/they\'re, your/you\'re, its/it\'s, to/too/two, affect/effect',
      'Add specificity by naming exact details rather than general categories',
      'Precise language should sound natural, not artificially inflated with a thesaurus'
    ],
    prerequisites: ['lesson-essay-001'],
    commonMistakes: [
      'Relying on vague, overused words instead of precise alternatives',
      'Confusing commonly mixed-up words like its/it\'s or affect/effect',
      'Using an inappropriate formality level (too casual, or artificially inflated) for essay writing',
      'Staying at a general level of description instead of adding specific, concrete detail'
    ],
    tips: [
      'Use a thesaurus for alternatives to weak words, but check the exact meaning before using it',
      'Choose the most specific word available that accurately captures your intended meaning',
      'Match tone to audience and purpose — avoid slang in formal writing',
      'Double-check common word confusions during your final proofreading pass'
    ],
    practiceQuestions: ['lesson-essay-evidence-003-q01', 'lesson-essay-evidence-003-q02', 'lesson-essay-evidence-003-q03', 'lesson-essay-evidence-003-q04', 'lesson-essay-evidence-003-q05', 'lesson-essay-evidence-003-q06', 'lesson-essay-evidence-003-q07', 'lesson-essay-evidence-003-q08', 'lesson-essay-evidence-003-q09', 'lesson-essay-evidence-003-q10', 'lesson-essay-evidence-003-q11', 'lesson-essay-evidence-003-q12', 'lesson-essay-evidence-003-q13', 'lesson-essay-evidence-003-q14', 'lesson-essay-evidence-003-q15', 'lesson-essay-evidence-003-q16', 'lesson-essay-evidence-003-q17', 'lesson-essay-evidence-003-q18', 'lesson-essay-evidence-003-q19', 'lesson-essay-evidence-003-q20'],
    estimatedReadTime: 18,
    orderIndex: 3
  },

  // Essay Structure (4 lessons)
  {
    id: 'lesson-essay-004',
    title: 'Thesis Statements and Central Ideas',
    subject: 'essay',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 28,
    description: 'Craft compelling thesis statements that frame your essay and guide every paragraph that follows.',
    content: {
      introduction: 'Your thesis statement is the single sentence (or occasionally two) that your entire essay exists to support — every paragraph, every piece of evidence, and every transition should trace back to it. A vague or unfocused thesis makes the rest of the essay drift; a sharp, specific one gives both you and your reader a clear roadmap for everything that follows.',
      mainContent: [
        {
          type: 'heading',
          content: 'Five Qualities of a Strong Thesis'
        },
        {
          type: 'text',
          content: 'A strong thesis: 1) takes a clear position rather than staying neutral, 2) is specific rather than vague, 3) is arguable — meaning a reasonable person could disagree, not just an obviously true statement, 4) can actually be supported with real evidence, and 5) often (though not always) previews the main points that will follow, giving the reader a sense of the essay\'s structure in advance.'
        },
        {
          type: 'heading',
          content: 'Weak vs. Strong Thesis Statements'
        },
        {
          type: 'text',
          content: 'Weak: "The book was interesting and had good characters." (vague, not arguable, uses weak word choice)\nStrong: "Through complex characters and moral dilemmas, the novel explores the consequences of unchecked ambition." (specific, arguable, previews the essay\'s focus)\n\nWeak: "Social media is popular." (obviously true, not arguable)\nStrong: "While social media connects us globally, it is creating a generation struggling with mental health and authentic relationships." (takes a clear, debatable position)'
        },
        {
          type: 'heading',
          content: 'Placement and Length'
        },
        {
          type: 'text',
          content: 'On the SAT essay specifically, your thesis typically appears at the end of your introduction, after a hook and brief context, and is usually just one to two sentences. In longer academic essays, thesis placement can vary slightly, but ending the introduction with the thesis remains the most common and reliable structure.'
        },
        {
          type: 'heading',
          content: 'Testing Whether a Thesis Is Arguable'
        },
        {
          type: 'text',
          content: 'A useful test: could a reasonable, informed person write the OPPOSITE position and make a real argument for it? If yes, your thesis is arguable. If the opposite position would be absurd or obviously false, your thesis is probably too obvious to be interesting — narrow or sharpen it until there\'s genuine room for debate.'
        },
        {
          type: 'heading',
          content: 'Revising Your Thesis as You Write'
        },
        {
          type: 'text',
          content: 'It\'s common — and often a sign of good thinking — to realize partway through drafting body paragraphs that your original thesis doesn\'t quite match the argument you\'re actually making. When that happens, go back and revise the thesis to match your strongest, most developed argument, rather than forcing your paragraphs to awkwardly fit an outdated thesis.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Strengthening a Vague Thesis',
          problem: 'Improve: "Social media has both good and bad effects."',
          solution: '"While social media enables global connection, its design prioritizes engagement over well-being, contributing to rising rates of anxiety among young users."',
          explanation: 'The revised thesis takes a specific, debatable position instead of the vague, safe "both good and bad" framing.'
        },
        {
          title: 'Example 2: Thesis Development for a Prompt',
          problem: 'Write a thesis for an essay arguing that schools should start later.',
          solution: '"Beginning school at 9 AM instead of 7:30 AM would improve student performance, reduce tardiness, and enhance overall well-being, as research shows teenagers need later school start times."',
          explanation: 'The thesis takes a clear position and previews the three main supporting arguments (performance, tardiness, well-being) that the body paragraphs will develop.'
        },
        {
          title: 'Example 3: Testing Arguability',
          problem: 'Is "Exercise is good for the body" a strong thesis?',
          solution: 'No — almost no one would argue the opposite, so this isn\'t genuinely arguable. A stronger version: "Schools should require daily exercise periods because the cognitive and emotional benefits outweigh the loss of classroom instruction time."',
          explanation: 'The revised thesis makes a specific, debatable claim (requiring daily exercise) rather than stating an obvious fact.'
        },
        {
          title: 'Example 4: Matching Thesis to Developed Argument',
          problem: 'A student\'s original thesis argued uniforms improve discipline, but their body paragraphs ended up focused mostly on cost savings. What should they do?',
          solution: 'Revise the thesis to reflect the actual argument developed: "School uniforms reduce costs for families while also creating a more equitable, distraction-free learning environment."',
          explanation: 'When the body paragraphs drift from the original thesis, revising the thesis to match the strongest developed argument keeps the whole essay coherent.'
        }
      ],
      summary: 'A strong thesis is specific, arguable, and supportable — and it typically previews the structure the reader can expect from your body paragraphs. Test any thesis by asking whether a reasonable person could argue the opposite; if not, sharpen and narrow it until there\'s real room for debate.'
    },
    keyPoints: [
      'A strong thesis takes a clear, specific, and arguable position',
      'A thesis must be supportable with real evidence',
      'Previewing your main points in the thesis helps readers anticipate your essay\'s structure',
      'Test arguability by asking whether a reasonable person could argue the opposite position',
      'Revise your thesis as needed so it matches the argument you actually develop in your body paragraphs'
    ],
    prerequisites: [],
    commonMistakes: [
      'Writing a thesis that is too vague or states an obvious, non-arguable fact',
      'Making a thesis too broad to be supported within the essay\'s length',
      'Letting the thesis and the actual essay content drift apart without revising',
      'Forgetting to take a clear position, hedging instead'
    ],
    tips: [
      'Ask yourself directly: "What is my main argument?" before drafting the rest of the essay',
      'Test arguability: could someone reasonably argue the opposite position?',
      'Revise your thesis after drafting body paragraphs if your argument evolved',
      'Make sure every paragraph in your essay traces back to supporting the thesis'
    ],
    practiceQuestions: ['lesson-essay-argument-004-q01', 'lesson-essay-argument-004-q02', 'lesson-essay-argument-004-q03', 'lesson-essay-argument-004-q04', 'lesson-essay-argument-004-q05', 'lesson-essay-argument-004-q06', 'lesson-essay-argument-004-q07', 'lesson-essay-argument-004-q08', 'lesson-essay-argument-004-q09', 'lesson-essay-argument-004-q10', 'lesson-essay-argument-004-q11', 'lesson-essay-argument-004-q12', 'lesson-essay-argument-004-q13', 'lesson-essay-argument-004-q14', 'lesson-essay-argument-004-q15', 'lesson-essay-argument-004-q16', 'lesson-essay-argument-004-q17', 'lesson-essay-argument-004-q18', 'lesson-essay-argument-004-q19', 'lesson-essay-argument-004-q20'],
    estimatedReadTime: 20,
    orderIndex: 4
  },
  {
    id: 'lesson-essay-005',
    title: 'Introduction and Hooks',
    subject: 'essay',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 26,
    description: 'Write compelling introductions that hook readers and introduce your thesis.',
    content: {
      introduction: 'A reader — or an essay grader reading dozens of essays in a row — forms an impression within the first few sentences, and a flat or generic opening can undercut even a strong essay before it really begins. A well-built introduction accomplishes three jobs in quick succession: capturing attention, providing just enough context, and clearly stating your thesis.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Three Elements of a Strong Introduction'
        },
        {
          type: 'text',
          content: '1) Hook: a sentence or two designed to grab the reader\'s attention immediately.\n2) Context: brief background information that helps the reader understand the topic and why it matters.\n3) Thesis: your clear, specific main argument, usually placed at the end of the introduction.\nEach element should flow naturally into the next, rather than feeling like three disconnected pieces stapled together.'
        },
        {
          type: 'heading',
          content: 'Five Hook Techniques'
        },
        {
          type: 'text',
          content: 'Startling statistic: "60% of teenagers report high stress levels, many citing school pressure."\nProvocative question: "What would happen if schools prioritized student well-being over test scores?"\nRelevant quote: "\'Education is the most powerful tool for change.\' — Nelson Mandela"\nVivid anecdote: "When Sarah\'s school moved classes to 9 AM, her grades improved and her mood lifted."\nBold statement: "Traditional school start times are failing our students."\nChoose whichever technique best fits your topic and the tone you want to set.'
        },
        {
          type: 'heading',
          content: 'Connecting the Hook to Your Thesis'
        },
        {
          type: 'text',
          content: 'A hook only works if it\'s genuinely relevant to your thesis — an attention-grabbing opener that has nothing to do with your actual argument feels like a gimmick rather than a real introduction. After the hook, use your context sentences to build a clear, logical bridge from the hook\'s topic to the specific claim your thesis will make.'
        },
        {
          type: 'heading',
          content: 'Introduction Length on the SAT Essay'
        },
        {
          type: 'text',
          content: 'Given the SAT essay\'s time constraints, introductions are typically brief — often just three to five sentences total, including the hook, minimal context, and the thesis. Resist the urge to over-explain background information; save the detailed development for your body paragraphs.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Full Introduction',
          problem: 'Write an introduction for an essay about school start times.',
          solution: '"Every morning, millions of bleary-eyed teenagers drag themselves to school before their bodies are ready to wake up. Research consistently shows that adolescents need more sleep, yet most schools start classes before 8 AM. Beginning school at 9 AM instead of 7:30 AM would improve student performance, reduce tardiness, and enhance overall well-being."',
          explanation: 'Opens with a vivid image (hook), provides brief context about adolescent sleep research, and states the thesis clearly in the final sentence.'
        },
        {
          title: 'Example 2: Statistic Hook',
          problem: 'Write a one-sentence statistic hook for an essay about food waste.',
          solution: '"Nearly one-third of all food produced globally is wasted every year, even as millions face food insecurity."',
          explanation: 'A striking statistic immediately establishes the scale and urgency of the issue, drawing the reader in before the argument begins.'
        },
        {
          title: 'Example 3: Question Hook',
          problem: 'Write a one-sentence provocative question hook for an essay about artificial intelligence in classrooms.',
          solution: '"What happens to critical thinking when students can outsource their homework to an algorithm?"',
          explanation: 'A genuine, thought-provoking question invites the reader to start considering the essay\'s central tension before the thesis is even stated.'
        },
        {
          title: 'Example 4: Connecting Hook to Thesis',
          problem: 'A student opens with a dramatic personal anecdote about losing a chess match, then argues for stricter youth sports safety regulations. Does the hook work?',
          solution: 'No — the hook (a chess match) has no logical connection to the thesis (youth sports safety), so it feels disconnected and gimmicky regardless of how vivid it is.',
          explanation: 'A hook must connect logically to the thesis; vividness alone isn\'t enough if the topic doesn\'t actually relate to the essay\'s argument.'
        }
      ],
      summary: 'A strong introduction moves smoothly from an attention-grabbing hook, through brief relevant context, to a clear thesis statement — and every part should feel connected rather than assembled from disconnected pieces. Keep introductions concise, especially under SAT time constraints, and save deeper development for your body paragraphs.'
    },
    keyPoints: [
      'A strong introduction has three parts: hook, context, and thesis',
      'Hooks can use a statistic, question, quote, anecdote, or bold statement',
      'A hook must connect logically to your thesis, not just be attention-grabbing in isolation',
      'Introductions should be relatively brief — save detailed development for body paragraphs',
      'The thesis usually appears at the end of the introduction after the hook and context'
    ],
    prerequisites: ['lesson-essay-004'],
    commonMistakes: [
      'Using a hook that is too generic or disconnected from the actual thesis',
      'Including too much context before finally stating the thesis',
      'Burying the thesis so it\'s unclear by the end of the introduction',
      'Writing an introduction so long it leaves little time for body paragraph development'
    ],
    tips: [
      'Start with your most interesting, relevant observation about the topic',
      'Make sure your hook connects logically to your thesis, not just superficially',
      'Keep your introduction focused and relatively brief, especially under time pressure',
      'Read your introduction back and check the thesis is clear and specific by the final sentence'
    ],
    practiceQuestions: ['lesson-essay-revision-005-q01', 'lesson-essay-revision-005-q02', 'lesson-essay-revision-005-q03', 'lesson-essay-revision-005-q04', 'lesson-essay-revision-005-q05', 'lesson-essay-revision-005-q06', 'lesson-essay-revision-005-q07', 'lesson-essay-revision-005-q08', 'lesson-essay-revision-005-q09', 'lesson-essay-revision-005-q10', 'lesson-essay-revision-005-q11', 'lesson-essay-revision-005-q12', 'lesson-essay-revision-005-q13', 'lesson-essay-revision-005-q14', 'lesson-essay-revision-005-q15', 'lesson-essay-revision-005-q16', 'lesson-essay-revision-005-q17', 'lesson-essay-revision-005-q18', 'lesson-essay-revision-005-q19', 'lesson-essay-revision-005-q20'],
    estimatedReadTime: 18,
    orderIndex: 5
  },
  {
    id: 'lesson-essay-006',
    title: 'Body Paragraphs and Evidence',
    subject: 'essay',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 30,
    description: 'Develop strong body paragraphs that support your thesis with clear evidence and analysis.',
    content: {
      introduction: 'Body paragraphs are where an essay actually proves its thesis — the introduction makes a promise, and each body paragraph is responsible for delivering on one specific piece of that promise. A well-built body paragraph doesn\'t just present evidence; it explains, in its own words, exactly why that evidence matters and how it supports the larger argument.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Five-Part Body Paragraph Structure'
        },
        {
          type: 'text',
          content: '1) Topic sentence: states the paragraph\'s main idea, which should directly support the thesis.\n2) Context: brief background information, if the evidence needs it to make sense.\n3) Evidence: specific examples, quotes, statistics, or details supporting the topic sentence.\n4) Analysis: explains HOW and WHY the evidence supports your point — this is the step students skip most often, and it\'s usually the most important one.\n5) Connection: links the paragraph\'s point back to the essay\'s overall thesis.'
        },
        {
          type: 'heading',
          content: 'Types of Evidence'
        },
        {
          type: 'text',
          content: 'Facts and statistics: "90% of teenagers report sleep deprivation."\nSpecific examples: concrete instances that illustrate your point in action.\nQuotes: relevant statements from credible sources or authorities.\nLogical reasoning: a clear chain of if-then reasoning leading to a conclusion.\nComparison and contrast: showing how your subject is similar to or different from something else.\nCause and effect: explaining why one thing leads to another.'
        },
        {
          type: 'heading',
          content: 'Why Analysis Matters More Than Evidence Alone'
        },
        {
          type: 'text',
          content: 'A common weakness in student essays is presenting a piece of evidence and simply moving on, assuming the connection to the argument is obvious. It rarely is, to a reader encountering the argument for the first time. Strong writers explicitly walk the reader through the logic: "This matters because...", "This shows that...", "As a result...".'
        },
        {
          type: 'heading',
          content: 'One Main Idea Per Paragraph'
        },
        {
          type: 'text',
          content: 'Each body paragraph should generally focus on ONE clear supporting point, developed with sufficient evidence and analysis, rather than trying to cram multiple loosely related ideas into a single paragraph. If you find a paragraph drifting to cover two separate points, consider splitting it into two focused paragraphs instead.'
        },
        {
          type: 'heading',
          content: 'Transitioning Between Body Paragraphs'
        },
        {
          type: 'text',
          content: 'Smooth transitions between body paragraphs help the reader follow your argument\'s logical progression. Transition words like "furthermore," "in addition," "similarly," and "on the other hand" signal how the next paragraph relates to the one before it — whether it\'s adding support, shifting focus, or presenting a contrast.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Full Body Paragraph',
          problem: 'Write a body paragraph supporting later school start times.',
          solution: '"Research shows that later school start times improve academic performance. When schools moved to 9 AM starts, student grades increased by an average of 0.5 points, and graduation rates rose. This improvement occurs because teenagers\' circadian rhythms naturally shift during adolescence, causing them to need sleep later at night and wake later in the morning. By aligning school start times with their biology, students can attend class well-rested and better able to learn. This evidence demonstrates that start time directly affects academic success."',
          explanation: 'Includes a topic sentence, specific evidence (grade increases, graduation rates), analysis explaining the biological cause, and a connection back to the thesis.'
        },
        {
          title: 'Example 2: Adding Missing Analysis',
          problem: 'Improve this weak paragraph by adding analysis: "Studies show that exercise improves focus. Students who exercised scored higher on tests."',
          solution: '"Studies show that exercise improves focus, as students who exercised before class scored higher on tests than those who didn\'t. This connection likely occurs because physical activity increases blood flow to the brain, sharpening attention and memory retention during the hours that follow. As a result, incorporating exercise into the school day could directly boost academic outcomes."',
          explanation: 'The improved version adds the missing "why" — explaining the likely mechanism connecting exercise to improved test scores, rather than just stating the correlation.'
        },
        {
          title: 'Example 3: Splitting an Overloaded Paragraph',
          problem: 'A paragraph tries to cover both cost savings AND academic benefits of school uniforms in one paragraph. What should the student do?',
          solution: 'Split into two focused paragraphs — one specifically about cost savings for families, with its own evidence and analysis, and a separate one specifically about academic/behavioral benefits, with its own evidence and analysis.',
          explanation: 'Each paragraph should develop one clear idea fully rather than dividing limited space between two under-developed ideas.'
        },
        {
          title: 'Example 4: Using a Transition Between Paragraphs',
          problem: 'Write a transition sentence moving from a paragraph about cost savings to one about environmental benefits.',
          solution: '"In addition to reducing costs for families, switching to reusable materials also delivers significant environmental benefits."',
          explanation: '"In addition to" signals that the new paragraph builds on, rather than contradicts, the previous point, helping the reader follow the argument\'s structure.'
        }
      ],
      summary: 'A strong body paragraph combines a clear topic sentence, specific evidence, and — most importantly — explicit analysis connecting that evidence back to your thesis. Keep each paragraph focused on one main idea, and use transitions to help readers follow how each paragraph builds on the last.'
    },
    keyPoints: [
      'Body paragraphs follow a five-part structure: topic sentence, context, evidence, analysis, and connection',
      'Evidence can take many forms: facts, statistics, examples, quotes, reasoning, and comparisons',
      'Analysis — explaining how and why evidence supports your point — is often the most-skipped but most important step',
      'Each paragraph should generally focus on one clear supporting idea',
      'Transition words help readers understand how consecutive body paragraphs relate to each other'
    ],
    prerequisites: ['lesson-essay-004'],
    commonMistakes: [
      'Writing a weak or missing topic sentence',
      'Presenting evidence without explaining why it matters',
      'Including too much evidence and not enough explanation',
      'Cramming multiple unrelated ideas into a single paragraph'
    ],
    tips: [
      'Start each paragraph with a clear topic sentence tied directly to your thesis',
      'Use the Evidence-then-Analysis pattern consistently: don\'t just present facts, explain them',
      'Show, don\'t just tell — walk the reader through why your evidence proves your point',
      'Check that every paragraph clearly supports your thesis before moving to the next one'
    ],
    practiceQuestions: ['lesson-essay-analysis-006-q01', 'lesson-essay-analysis-006-q02', 'lesson-essay-analysis-006-q03', 'lesson-essay-analysis-006-q04', 'lesson-essay-analysis-006-q05', 'lesson-essay-analysis-006-q06', 'lesson-essay-analysis-006-q07', 'lesson-essay-analysis-006-q08', 'lesson-essay-analysis-006-q09', 'lesson-essay-analysis-006-q10', 'lesson-essay-analysis-006-q11', 'lesson-essay-analysis-006-q12', 'lesson-essay-analysis-006-q13', 'lesson-essay-analysis-006-q14', 'lesson-essay-analysis-006-q15', 'lesson-essay-analysis-006-q16', 'lesson-essay-analysis-006-q17', 'lesson-essay-analysis-006-q18', 'lesson-essay-analysis-006-q19', 'lesson-essay-analysis-006-q20'],
    estimatedReadTime: 22,
    orderIndex: 6
  },
  {
    id: 'lesson-essay-007',
    title: 'Conclusions and Final Impact',
    subject: 'essay',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 26,
    description: 'Write conclusions that reinforce your thesis and leave a lasting impression on the reader.',
    content: {
      introduction: 'Your conclusion is the reader\'s final impression of your entire essay, and rushed or generic conclusions ("In conclusion, as I have shown...") can undercut even a strong argument by ending on a flat note. A well-crafted conclusion doesn\'t just repeat what\'s already been said — it reframes the argument\'s significance and leaves the reader with something memorable to carry forward.',
      mainContent: [
        {
          type: 'heading',
          content: 'What a Strong Conclusion Does'
        },
        {
          type: 'text',
          content: '1) Restates the thesis in fresh language, not a word-for-word copy of the introduction.\n2) Briefly summarizes the main supporting points developed in the body paragraphs.\n3) Provides broader context or implications — why does this argument matter beyond the essay itself?\n4) Ends with genuine impact: a final thought, a call to action, or a statement of larger significance.'
        },
        {
          type: 'heading',
          content: 'Four Techniques for a Powerful Ending'
        },
        {
          type: 'text',
          content: 'Call to action: "Schools should immediately adopt 9 AM start times."\nLarger implication: "This change would benefit not just students, but society as a whole."\nFull circle: return to the image, question, or idea from your introduction\'s hook, now viewed through the lens of your completed argument.\nFinal powerful statement: a short, memorable sentence that crystallizes your argument\'s core message.'
        },
        {
          type: 'heading',
          content: 'Avoiding Generic Conclusion Openers'
        },
        {
          type: 'text',
          content: 'Phrases like "In conclusion" or "In summary" signal to a reader that nothing new or interesting is coming — they\'re essentially filler. Instead, transition into your conclusion with a sentence that immediately begins reframing or reinforcing your argument\'s significance, without needing a generic label to announce what\'s happening.'
        },
        {
          type: 'heading',
          content: 'Why New Ideas Don\'t Belong in the Conclusion'
        },
        {
          type: 'text',
          content: 'A conclusion should never introduce a brand-new argument or piece of evidence that wasn\'t developed earlier in the essay — doing so leaves that idea unsupported and can make the whole essay feel unbalanced. Save any new ideas for a future essay, or find room for them in a body paragraph instead.'
        },
        {
          type: 'heading',
          content: 'Matching Conclusion Length to the Essay'
        },
        {
          type: 'text',
          content: 'A conclusion should feel proportional to the essay it closes — typically a few sentences for a shorter essay, not an entirely new section. Under SAT time constraints especially, a focused three-to-four sentence conclusion that restates, broadens, and ends with impact is usually both sufficient and appropriately paced.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Full Conclusion',
          problem: 'Write a conclusion for the school start time essay.',
          solution: '"The evidence is clear: teenagers perform better when school starts at 9 AM rather than 7:30 AM. By aligning school schedules with adolescent biology, improving student performance, and reducing tardiness, we can create healthier, more successful students. The question is no longer whether schools should change their start times—it\'s how quickly they can make this critical change. Education leaders must act now to implement this proven solution."',
          explanation: 'Restates the thesis in new language, summarizes the key supporting points, provides broader significance, and ends with a direct call to action.'
        },
        {
          title: 'Example 2: Avoiding a Generic Opener',
          problem: 'Improve: "In conclusion, school uniforms have many benefits for students and schools."',
          solution: '"Beyond the classroom, school uniforms offer families and administrators a simple, proven tool for reducing costs and conflict alike."',
          explanation: 'Removing "In conclusion" and replacing the generic restatement with a fresher framing makes the ending feel more purposeful and less like filler.'
        },
        {
          title: 'Example 3: Full-Circle Technique',
          problem: 'The essay opened with the hook: "What would happen if schools prioritized student well-being over test scores?" Write a full-circle conclusion.',
          solution: '"If schools finally prioritize well-being over test scores by shifting to later start times, the answer to our opening question becomes clear: students would not just perform better academically, but live healthier, more balanced lives."',
          explanation: 'Returning to the introduction\'s original question and answering it directly creates a satisfying, cohesive sense of closure for the reader.'
        },
        {
          title: 'Example 4: Identifying an Unsupported New Idea',
          problem: 'A conclusion suddenly claims that school uniforms also reduce bullying rates by 40%, a statistic never mentioned earlier in the essay. Is this a good addition?',
          solution: 'No — introducing new, unsupported evidence in the conclusion leaves it without any analysis or context, making the essay feel unbalanced. This statistic should have been introduced and analyzed in a body paragraph instead.',
          explanation: 'New evidence belongs in a body paragraph, where it can be properly developed with analysis, not dropped into the conclusion without support.'
        }
      ],
      summary: 'A strong conclusion restates your thesis in fresh language, briefly reviews your main points, and ends with real impact — whether through a call to action, a larger implication, or a full-circle return to your introduction\'s hook. Avoid generic openers like "In conclusion" and never introduce new, undeveloped ideas at this late stage.'
    },
    keyPoints: [
      'A strong conclusion restates the thesis in new words, rather than repeating it verbatim',
      'Briefly summarize your main supporting points without simply re-listing them',
      'Provide broader context or implications showing why the argument matters',
      'End with genuine impact: a call to action, larger implication, full-circle return, or powerful final statement',
      'Never introduce new, unsupported ideas or evidence in the conclusion'
    ],
    prerequisites: ['lesson-essay-004', 'lesson-essay-006'],
    commonMistakes: [
      'Simply repeating the thesis word-for-word instead of restating it freshly',
      'Introducing new ideas or evidence that were never developed earlier in the essay',
      'Ending on a weak, vague, or generic note',
      'Writing a conclusion too short to feel proportional to the rest of the essay'
    ],
    tips: [
      'Avoid opening with "In conclusion" or "In summary" — these phrases add nothing and signal filler',
      'Restate your thesis in completely new language, reflecting what the essay has now shown',
      'Explain clearly why your argument matters beyond just the essay itself',
      'End with a sentence specific and memorable enough that a reader would recall it afterward'
    ],
    practiceQuestions: ['lesson-essay-synthesis-007-q01', 'lesson-essay-synthesis-007-q02', 'lesson-essay-synthesis-007-q03', 'lesson-essay-synthesis-007-q04', 'lesson-essay-synthesis-007-q05', 'lesson-essay-synthesis-007-q06', 'lesson-essay-synthesis-007-q07', 'lesson-essay-synthesis-007-q08', 'lesson-essay-synthesis-007-q09', 'lesson-essay-synthesis-007-q10', 'lesson-essay-synthesis-007-q11', 'lesson-essay-synthesis-007-q12', 'lesson-essay-synthesis-007-q13', 'lesson-essay-synthesis-007-q14', 'lesson-essay-synthesis-007-q15', 'lesson-essay-synthesis-007-q16', 'lesson-essay-synthesis-007-q17', 'lesson-essay-synthesis-007-q18', 'lesson-essay-synthesis-007-q19', 'lesson-essay-synthesis-007-q20'],
    estimatedReadTime: 20,
    orderIndex: 7
  },

  // Argument Development (3 lessons)
  {
    id: 'lesson-essay-008',
    title: 'Building Strong Arguments',
    subject: 'essay',
    topic: 'argument-development',
    difficulty: 'hard',
    duration: 32,
    description: 'Construct logical, persuasive arguments that readers find compelling, and avoid common logical fallacies.',
    content: {
      introduction: 'A persuasive essay is only as strong as the logic holding it together — vivid language and confident tone can\'t compensate for an argument with a broken logical foundation. This lesson breaks down the components every strong argument needs and covers the most common logical fallacies that can quietly undermine an otherwise well-written essay.',
      mainContent: [
        {
          type: 'heading',
          content: 'The Five Components of a Strong Argument'
        },
        {
          type: 'text',
          content: '1) Claim: the specific point you\'re arguing.\n2) Evidence: facts, examples, or data that support your claim.\n3) Reasoning: the logical explanation connecting your evidence to your claim — the "because" that makes the connection explicit.\n4) Counterargument: a fair acknowledgment of an opposing viewpoint.\n5) Refutation: an explanation of why the opposing view is ultimately less convincing than your position.'
        },
        {
          type: 'heading',
          content: 'Six Logical Fallacies to Avoid'
        },
        {
          type: 'text',
          content: 'Ad hominem: attacking the person making an argument rather than the argument itself.\nStraw man: misrepresenting an opposing argument as weaker than it actually is, then attacking that weaker version.\nFalse dilemma: presenting only two options when more actually exist.\nBegging the question: assuming the very thing you\'re supposed to be proving.\nSlippery slope: assuming one small event will inevitably lead to an extreme, unlikely chain of consequences.\nAppeal to emotion: relying on emotional reaction in place of actual evidence and logic.'
        },
        {
          type: 'heading',
          content: 'From Claim to Fully Developed Argument'
        },
        {
          type: 'text',
          content: 'A bare claim ("School uniforms are good") is not yet an argument — it becomes one only once it\'s connected to evidence through clear reasoning. Practice explicitly stating the reasoning step, even when it feels obvious to you: "Uniforms reduce distraction BECAUSE students spend less time and energy on daily clothing choices and social comparison."'
        },
        {
          type: 'heading',
          content: 'Strengthening an Argument with Counterargument and Refutation'
        },
        {
          type: 'text',
          content: 'Including a fair counterargument, followed by a thoughtful refutation, demonstrates that you\'ve considered the issue from multiple angles rather than presenting a one-sided view — this typically makes an argument MORE persuasive, not less, because it shows the writer has already anticipated and addressed the reader\'s objections.'
        },
        {
          type: 'heading',
          content: 'Spotting Fallacies in Your Own Writing'
        },
        {
          type: 'text',
          content: 'When reviewing a draft, check each piece of reasoning against the fallacy list above. A useful habit: for every claim, ask "does my evidence actually prove this, or am I making a logical leap?" Catching your own fallacies during revision is far better than a reader catching them first.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Strengthening a Weak Argument',
          problem: 'Strengthen this weak argument: "School uniforms are good because I say so."',
          solution: '"School uniforms improve academic focus because they eliminate fashion distractions, allowing students to concentrate on learning. Research shows that students in uniform schools have fewer disciplinary issues. While some argue uniforms restrict self-expression, the academic benefits outweigh this concern, and students still express themselves through other means."',
          explanation: 'The strengthened version includes evidence (research on disciplinary issues), explicit reasoning (eliminating distraction), and addresses a counterargument (self-expression) with a refutation.'
        },
        {
          title: 'Example 2: Identifying a Fallacy',
          problem: 'Identify the fallacy: "If we allow students to redo one test, soon they\'ll expect to redo every assignment, and eventually no one will take deadlines seriously at all."',
          solution: 'This is a slippery slope fallacy — it assumes one small policy change will inevitably cascade into an extreme, unlikely outcome without actual evidence for that chain of events.',
          explanation: 'Slippery slope arguments skip over the many possible intermediate outcomes and jump straight to an extreme, often implausible conclusion.'
        },
        {
          title: 'Example 3: Identifying a False Dilemma',
          problem: 'Identify the fallacy: "Either we ban homework entirely, or students will continue to suffer from unbearable stress."',
          solution: 'This is a false dilemma — it presents only two extreme options (ban homework entirely vs. unbearable stress) when many middle-ground solutions exist, like reducing homework volume or improving its quality.',
          explanation: 'False dilemmas oversimplify a complex issue into just two options, ignoring more moderate or nuanced possibilities.'
        },
        {
          title: 'Example 4: Making Reasoning Explicit',
          problem: 'Add explicit reasoning to connect this evidence to this claim: Claim: "The new policy will improve student outcomes." Evidence: "Test scores rose 15% in the pilot program."',
          solution: '"The new policy will improve student outcomes, as demonstrated by the pilot program, where test scores rose 15% after implementation — showing that the policy\'s changes translate directly into measurable academic gains."',
          explanation: 'Adding the explicit reasoning ("showing that...") makes the logical connection between the evidence and the claim clear, rather than leaving the reader to infer it.'
        }
      ],
      summary: 'A strong argument connects a clear claim to solid evidence through explicit reasoning, and gains further credibility by fairly addressing counterarguments. Watch specifically for the six common logical fallacies — ad hominem, straw man, false dilemma, begging the question, slippery slope, and appeal to emotion — both in your own writing and when evaluating others\' arguments.'
    },
    keyPoints: [
      'Every strong argument needs a claim, evidence, and explicit reasoning connecting them',
      'Addressing counterarguments with a fair refutation typically strengthens an argument rather than weakening it',
      'Watch for six common logical fallacies: ad hominem, straw man, false dilemma, begging the question, slippery slope, and appeal to emotion',
      'Making your reasoning explicit (the "because") prevents readers from having to guess at your logic',
      'Review your own drafts specifically for logical fallacies during revision'
    ],
    prerequisites: ['lesson-essay-006'],
    commonMistakes: [
      'Making claims without supporting evidence',
      'Leaving the reasoning connecting evidence to claim implicit rather than explicit',
      'Relying on logical fallacies instead of genuine evidence and reasoning',
      'Ignoring or unfairly misrepresenting counterarguments'
    ],
    tips: [
      'Ask yourself: "How do I know this is true?" for every claim you make',
      'Provide specific, directly relevant evidence rather than general statements',
      'Explicitly explain why your evidence supports your claim, rather than assuming it\'s obvious',
      'Acknowledge and fairly refute opposing views rather than ignoring them'
    ],
    practiceQuestions: ['lesson-essay-rhetorical-008-q01', 'lesson-essay-rhetorical-008-q02', 'lesson-essay-rhetorical-008-q03', 'lesson-essay-rhetorical-008-q04', 'lesson-essay-rhetorical-008-q05', 'lesson-essay-rhetorical-008-q06', 'lesson-essay-rhetorical-008-q07', 'lesson-essay-rhetorical-008-q08', 'lesson-essay-rhetorical-008-q09', 'lesson-essay-rhetorical-008-q10', 'lesson-essay-rhetorical-008-q11', 'lesson-essay-rhetorical-008-q12', 'lesson-essay-rhetorical-008-q13', 'lesson-essay-rhetorical-008-q14', 'lesson-essay-rhetorical-008-q15', 'lesson-essay-rhetorical-008-q16', 'lesson-essay-rhetorical-008-q17', 'lesson-essay-rhetorical-008-q18', 'lesson-essay-rhetorical-008-q19', 'lesson-essay-rhetorical-008-q20'],
    estimatedReadTime: 24,
    orderIndex: 8
  },
  {
    id: 'lesson-essay-009',
    title: 'Using Counterarguments Effectively',
    subject: 'essay',
    topic: 'argument-development',
    difficulty: 'hard',
    duration: 28,
    description: 'Strengthen your argument by fairly acknowledging and effectively refuting opposing viewpoints.',
    content: {
      introduction: 'It can feel counterintuitive, but deliberately raising the strongest objection to your own argument — and then answering it — almost always makes an essay more persuasive, not less. Skipping counterarguments can leave a reader thinking "but what about..." throughout your entire essay; addressing them head-on shows you\'ve genuinely grappled with the issue rather than presenting a one-sided view.',
      mainContent: [
        {
          type: 'heading',
          content: 'Why Counterarguments Strengthen an Essay'
        },
        {
          type: 'text',
          content: 'Including a counterargument: shows you understand the issue fully, not just your preferred side of it; makes your argument more genuinely persuasive by addressing likely reader objections before they can undermine your credibility; demonstrates critical thinking rather than one-sided advocacy; and shows respect for readers who may hold a different initial view, making them more receptive to your position.'
        },
        {
          type: 'heading',
          content: 'The Four-Step Process'
        },
        {
          type: 'text',
          content: '1) State the opposing view fairly and accurately — don\'t exaggerate or misrepresent it (avoid the straw man fallacy from the previous lesson).\n2) Acknowledge its validity where genuine ("While this view has merit...", "It\'s true that...").\n3) Present your counterargument, often signaled with "However" or "Nevertheless."\n4) Explain specifically why your position is ultimately stronger or more compelling.'
        },
        {
          type: 'heading',
          content: 'Choosing Which Counterargument to Address'
        },
        {
          type: 'text',
          content: 'Not every possible objection deserves space in your essay — choose the STRONGEST, most likely objection a thoughtful reader would raise, rather than a weak or unlikely one that\'s easy to knock down. Addressing a genuinely strong counterargument (and still prevailing) is far more persuasive than defeating a strawman.'
        },
        {
          type: 'heading',
          content: 'Where to Place a Counterargument'
        },
        {
          type: 'text',
          content: 'Counterarguments typically work best either as their own dedicated body paragraph (common in longer essays) or woven into a body paragraph right after presenting your strongest evidence, where the contrast is freshest in the reader\'s mind. Avoid placing it right at the start (before your position is established) or as an afterthought tacked onto the conclusion.'
        },
        {
          type: 'heading',
          content: 'Balancing Fairness and Persuasion'
        },
        {
          type: 'text',
          content: 'There\'s a balance to strike: represent the opposing view with genuine fairness (so your refutation feels earned, not cheap), but don\'t spend so much space on it that it overshadows your own argument. A well-calibrated counterargument paragraph is thorough but proportionate — typically shorter than your main supporting paragraphs.'
        }
      ],
      examples: [
        {
          title: 'Example 1: Full Counterargument Paragraph',
          problem: 'Add a counterargument to: "Schools should implement dress codes."',
          solution: '"While critics argue that dress codes restrict student freedom of expression, implementing reasonable dress codes actually enhances the learning environment. Students concerned about fashion can still express themselves through non-clothing methods, and the academic focus gained outweighs any minor restriction on self-expression."',
          explanation: 'Fairly states the opposing view (restricts self-expression), then explains specifically why the author\'s position is ultimately stronger (academic focus outweighs minor restriction).'
        },
        {
          title: 'Example 2: Choosing the Strongest Objection',
          problem: 'For an essay arguing for later school start times, which is the stronger counterargument to address: "Some students dislike waking up early" or "Later start times would disrupt after-school sports and family schedules"?',
          solution: '"Later start times would disrupt after-school sports and family schedules" is the stronger, more substantive objection worth addressing directly.',
          explanation: 'The scheduling disruption objection is a genuine practical concern that thoughtful readers would raise, while "dislike waking up early" is a weak, easily dismissed objection not worth the space.'
        },
        {
          title: 'Example 3: Avoiding a Straw Man',
          problem: 'Is this a fair counterargument? "Opponents of school uniforms think students should be allowed to wear literally anything, including inappropriate or offensive clothing."',
          solution: 'No — this misrepresents the opposing view as more extreme than it actually is (a straw man). A fairer version: "Opponents of uniforms argue that clothing choice is an important form of self-expression for teenagers."',
          explanation: 'A fair counterargument represents the opposing view as its strongest, most reasonable form — not an exaggerated, easily dismissed version.'
        },
        {
          title: 'Example 4: Refuting Without Dismissing',
          problem: 'Write a refutation that acknowledges validity before disagreeing: Counterargument: "Standardized tests provide an objective measure of student ability."',
          solution: '"It\'s true that standardized tests offer a consistent, objective metric across schools and states. However, this consistency comes at the cost of capturing only a narrow slice of student ability, ignoring creativity, critical thinking, and other skills essential for long-term success."',
          explanation: 'Acknowledging the counterargument\'s genuine strength ("it\'s true that...") before pivoting to the refutation makes the eventual disagreement feel more credible and fair.'
        }
      ],
      summary: 'A well-handled counterargument — stated fairly, acknowledged where valid, and then thoughtfully refuted — typically makes an essay more persuasive by showing genuine engagement with the issue. Choose the strongest, most likely objection to address rather than an easy target, and keep the counterargument proportionate so it doesn\'t overshadow your main argument.'
    },
    keyPoints: [
      'Addressing counterarguments shows deeper understanding and makes an argument more persuasive',
      'Follow a four-step process: state the opposing view fairly, acknowledge its validity, present your counterargument, and explain why your position is stronger',
      'Choose the strongest, most likely objection to address rather than a weak, easily dismissed one',
      'Avoid misrepresenting the opposing view as more extreme than it is (a straw man)',
      'Keep the counterargument proportionate so it supports, rather than overshadows, your main argument'
    ],
    prerequisites: ['lesson-essay-006'],
    commonMistakes: [
      'Misrepresenting or exaggerating the opposing view (a straw man)',
      'Failing to actually refute the counterargument after stating it',
      'Choosing a weak, unconvincing counterargument that\'s too easy to dismiss',
      'Letting the counterargument take up so much space it overshadows the main argument'
    ],
    tips: [
      'Use phrases like "While some argue that..." or "Critics point out that..." to introduce counterarguments fairly',
      'Be genuinely fair to opposing views — this is what makes your eventual refutation credible',
      'Refute respectfully but clearly, explaining specifically why your position holds up better',
      'End the counterargument paragraph by reaffirming your position with a clear connecting statement'
    ],
    practiceQuestions: ['lesson-essay-timed-009-q01', 'lesson-essay-timed-009-q02', 'lesson-essay-timed-009-q03', 'lesson-essay-timed-009-q04', 'lesson-essay-timed-009-q05', 'lesson-essay-timed-009-q06', 'lesson-essay-timed-009-q07', 'lesson-essay-timed-009-q08', 'lesson-essay-timed-009-q09', 'lesson-essay-timed-009-q10', 'lesson-essay-timed-009-q11', 'lesson-essay-timed-009-q12', 'lesson-essay-timed-009-q13', 'lesson-essay-timed-009-q14', 'lesson-essay-timed-009-q15', 'lesson-essay-timed-009-q16', 'lesson-essay-timed-009-q17', 'lesson-essay-timed-009-q18', 'lesson-essay-timed-009-q19', 'lesson-essay-timed-009-q20'],
    estimatedReadTime: 22,
    orderIndex: 9
  },
  {
    id: 'lesson-essay-010',
    title: 'Revision and Editing',
    subject: 'essay',
    topic: 'argument-development',
    difficulty: 'medium',
    duration: 28,
    description: 'Learn systematic approaches to revising and editing your essay for maximum clarity and impact.',
    content: {
      introduction: 'First drafts are never the finished product — even skilled writers rely on a deliberate revision and editing process to turn a rough first attempt into a polished, persuasive essay. This lesson separates the two distinct stages of that process (big-picture revision and detail-level editing) and gives you concrete checklists for each, so you know exactly what to look for at every pass.',
      mainContent: [
        {
          type: 'heading',
          content: 'Revision vs. Editing: Two Distinct Stages'
        },
        {
          type: 'text',
          content: 'Revision means big-picture changes: is your organization logical? Is your thesis clear and well-supported? Is your evidence strong and relevant? Editing means small-scale changes: grammar, word choice, sentence structure, and punctuation. Always revise BEFORE you edit — there\'s no point perfecting the grammar of a paragraph you might end up cutting entirely.'
        },
        {
          type: 'heading',
          content: 'The Revision Checklist'
        },
        {
          type: 'text',
          content: 'Does my thesis clearly and directly answer the prompt?\nDo all my body paragraphs actually support that thesis?\nIs my evidence strong, specific, and genuinely relevant?\nHave I explained HOW my evidence supports each point (analysis), not just presented it?\nHave I addressed at least one meaningful counterargument?\nIs my overall organization logical, with smooth transitions between paragraphs?\nDoes my conclusion provide real impact rather than just repeating the introduction?'
        },
        {
          type: 'heading',
          content: 'The Editing Checklist'
        },
        {
          type: 'text',
          content: 'Is grammar and punctuation correct throughout?\nDoes sentence structure vary, avoiding repetitive patterns?\nHave weak, vague words been replaced with more precise ones?\nIs active voice used where appropriate (generally preferred over passive voice for directness)?\nIs verb tense consistent throughout?\nAre there any remaining spelling errors?'
        },
        {
          type: 'heading',
          content: 'A Practical Revision Strategy'
        },
        {
          type: 'text',
          content: 'If time allows, step away from your draft briefly before revising — even a short break helps you read your own writing with fresher, more objective eyes. Read through once focused purely on content and structure (the revision checklist), then do a separate pass focused purely on sentence-level correctness (the editing checklist) — trying to do both simultaneously often means missing issues in one category or the other.'
        },
        {
          type: 'heading',
          content: 'Revising Under Time Pressure'
        },
        {
          type: 'text',
          content: 'On a timed essay like the SAT, you won\'t have time for multiple full passes — instead, prioritize: first, quickly confirm your thesis is clear and each paragraph supports it (the highest-impact revision check); then do a fast editing pass focused specifically on the grammar issues covered earlier in this unit (agreement, tense, fragments, comma splices).'
        }
      ],
      examples: [
        {
          title: 'Example 1: Revision (Content-Level Improvement)',
          problem: 'Original: "The book had good writing and interesting characters."',
          solution: 'Revised: "The novel\'s lyrical prose and complex characters create a compelling narrative that explores themes of ambition and morality."',
          explanation: 'This is a revision-level change: it replaces vague content with specific, meaningful claims about the writing and characters, not just a grammar fix.'
        },
        {
          title: 'Example 2: Editing (Sentence-Level Improvement)',
          problem: 'Edit for grammar and style: "The evidence show that students who study regular perform better then those who dont."',
          solution: '"The evidence shows that students who study regularly perform better than those who don\'t."',
          explanation: 'This is an editing-level pass: fixing subject-verb agreement (show→shows), adverb form (regular→regularly), word confusion (then→than), and the missing apostrophe (dont→don\'t).'
        },
        {
          title: 'Example 3: Applying the Revision Checklist',
          problem: 'A student\'s essay has a clear thesis, but one body paragraph discusses an idea unrelated to it. What should the revision checklist catch?',
          solution: 'The checklist question "Do all my body paragraphs actually support that thesis?" should catch this — the unrelated paragraph should either be revised to connect clearly to the thesis or removed entirely.',
          explanation: 'This illustrates why revision must happen before editing: no amount of grammar polishing fixes a paragraph that doesn\'t belong in the essay.'
        },
        {
          title: 'Example 4: Prioritizing Under Time Pressure',
          problem: 'With five minutes left before submitting a timed essay, should a student focus on adding a new supporting example or fixing grammar errors?',
          solution: 'Fixing grammar errors is the better use of limited remaining time — adding a new, undeveloped example in the final minutes risks creating a rushed, poorly-analyzed addition, while a quick grammar pass reliably improves the existing essay\'s polish.',
          explanation: 'Under severe time constraints, prioritize changes that reliably improve quality (grammar fixes) over changes that carry more risk (rushed new content).'
        }
      ],
      summary: 'Revision (big-picture content and structure) and editing (sentence-level correctness) are two distinct stages that should happen in that order — revise first, then edit. Use the revision checklist to confirm your thesis, evidence, and organization are strong, and the editing checklist to polish grammar, word choice, and sentence variety before submitting.'
    },
    keyPoints: [
      'Revision addresses big-picture issues: organization, thesis clarity, evidence strength, and argument development',
      'Editing addresses small-scale issues: grammar, word choice, sentence structure, and punctuation',
      'Always revise before editing — there\'s no point polishing grammar in a paragraph you might cut',
      'Use separate checklists for revision and editing to stay focused on one type of issue at a time',
      'Under timed conditions, prioritize confirming your thesis and paragraph support, then do a fast grammar pass'
    ],
    prerequisites: ['lesson-essay-004', 'lesson-essay-006'],
    commonMistakes: [
      'Not allowing any time for revision, submitting the first draft as-is',
      'Focusing only on grammar and missing bigger content or organization issues',
      'Trying to revise and edit simultaneously instead of doing separate, focused passes',
      'Adding rushed, undeveloped new content in the final minutes instead of polishing what\'s already written'
    ],
    tips: [
      'Revise with fresh eyes when possible — even a short break helps you catch issues you\'d otherwise miss',
      'Read your essay aloud to catch both awkward phrasing and grammar errors',
      'Ask of every sentence: does this serve a clear purpose in supporting my thesis?',
      'Under time pressure, prioritize confirming thesis/paragraph alignment first, then do a fast grammar-focused edit pass'
    ],
    practiceQuestions: ['lesson-essay-editing-010-q01', 'lesson-essay-editing-010-q02', 'lesson-essay-editing-010-q03', 'lesson-essay-editing-010-q04', 'lesson-essay-editing-010-q05', 'lesson-essay-editing-010-q06', 'lesson-essay-editing-010-q07', 'lesson-essay-editing-010-q08', 'lesson-essay-editing-010-q09', 'lesson-essay-editing-010-q10', 'lesson-essay-editing-010-q11', 'lesson-essay-editing-010-q12', 'lesson-essay-editing-010-q13', 'lesson-essay-editing-010-q14', 'lesson-essay-editing-010-q15', 'lesson-essay-editing-010-q16', 'lesson-essay-editing-010-q17', 'lesson-essay-editing-010-q18', 'lesson-essay-editing-010-q19', 'lesson-essay-editing-010-q20'],
    estimatedReadTime: 22,
    orderIndex: 10
  }
];
