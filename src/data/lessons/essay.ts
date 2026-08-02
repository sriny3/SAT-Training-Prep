import { Lesson } from '../../types';

export const essayLessons: Lesson[] = [
  // Writing Fundamentals (3 lessons)
  {
    id: 'lesson-essay-001',
    title: 'Grammar Review for Writing',
    subject: 'math',
    topic: 'writing-fundamentals',
    difficulty: 'easy',
    duration: 20,
    description: 'Review essential grammar rules needed for effective writing.',
    content: {
      introduction: 'Strong writing requires strong grammar. This lesson reviews the grammar fundamentals you need for the SAT essay.',
      mainContent: [
        {
          type: 'heading',
          content: 'Common Grammar Mistakes to Avoid'
        },
        {
          type: 'text',
          content: '1) Subject-verb agreement: Subject and verb must match in number\n2) Pronoun agreement: Pronouns must agree with antecedents\n3) Verb tense consistency: Keep tense consistent\n4) Misplaced modifiers: Keep modifiers close to what they modify\n5) Comma splices: Don\'t join independent clauses with just a comma'
        },
        {
          type: 'heading',
          content: 'Fixing Common Errors'
        },
        {
          type: 'text',
          content: 'Run-on: "The essay was long, it was also well-written."\nFixed: "The essay was long, and it was also well-written."\n\nFragment: "Because the author used vivid imagery."\nFixed: "The essay was memorable because the author used vivid imagery."'
        }
      ],
      examples: [
        {
          title: 'Agreement Error',
          problem: 'Each of the students need to submit their essay.',
          solution: 'Each of the students needs to submit his or her essay.',
          explanation: '"Each" is singular, so the verb should be "needs."'
        }
      ],
      summary: 'Grammar errors distract from your message. Proofread carefully for these common mistakes.'
    },
    keyPoints: [
      'Subject and verb must agree',
      'Pronouns must agree with antecedents',
      'Maintain consistent tense',
      'Fix modifiers and comma splices'
    ],
    prerequisites: [],
    commonMistakes: [
      'Overlooking agreement errors',
      'Shifting tense unexpectedly',
      'Creating sentence fragments'
    ],
    tips: [
      'Read your essay aloud to catch errors',
      'Check agreement in every sentence',
      'Verify tense consistency throughout'
    ],
    practiceQuestions: ['q-essay-001'],
    estimatedReadTime: 15,
    orderIndex: 1
  },
  {
    id: 'lesson-essay-002',
    title: 'Sentence Variety and Style',
    subject: 'math',
    topic: 'writing-fundamentals',
    difficulty: 'medium',
    duration: 20,
    description: 'Improve writing by using varied sentence structures and engaging style.',
    content: {
      introduction: 'Readers disengage from writing with repetitive, monotonous sentences. Varying your style keeps them engaged.',
      mainContent: [
        {
          type: 'heading',
          content: 'Sentence Types'
        },
        {
          type: 'text',
          content: 'Simple: One independent clause\nCompound: Two or more independent clauses\nComplex: One independent + one or more dependent clauses\nCompound-Complex: Multiple of both types'
        },
        {
          type: 'heading',
          content: 'Style Techniques'
        },
        {
          type: 'text',
          content: 'Sentence combining: Merge short sentences into longer ones\nVarying sentence openings: Don\'t always start with the subject\nTransitions: Connect ideas smoothly\nWord choice: Replace tired words with vivid ones'
        }
      ],
      examples: [
        {
          title: 'Sentence Variety Example',
          problem: 'The book was good. It had an interesting plot. The characters were well-developed.',
          solution: 'The book impressed me with its interesting plot and well-developed characters.',
          explanation: 'Combining sentences creates better flow and style.'
        }
      ],
      summary: 'Varied sentences make writing more interesting and sophisticated. Readers notice and appreciate good style.'
    },
    keyPoints: [
      'Vary sentence length and structure',
      'Use different sentence openers',
      'Combine short sentences strategically',
      'Choose vivid words'
    ],
    prerequisites: ['lesson-essay-001'],
    commonMistakes: [
      'Using all simple sentences',
      'Starting every sentence with the subject',
      'Overusing certain transitions'
    ],
    tips: [
      'Read sentences aloud',
      'Vary length: short, medium, long',
      'Use transitions to connect ideas',
      'Replace weak verbs and adjectives'
    ],
    practiceQuestions: ['q-essay-002'],
    estimatedReadTime: 15,
    orderIndex: 2
  },
  {
    id: 'lesson-essay-003',
    title: 'Word Choice and Vocabulary in Writing',
    subject: 'math',
    topic: 'writing-fundamentals',
    difficulty: 'medium',
    duration: 20,
    description: 'Choose the right words to express ideas clearly and persuasively.',
    content: {
      introduction: 'The right word choice makes writing clear, persuasive, and memorable.',
      mainContent: [
        {
          type: 'heading',
          content: 'Precision in Word Choice'
        },
        {
          type: 'text',
          content: 'Avoid vague words: good, bad, nice, very, really, a lot\nReplace with specific words:\n- Instead of "good": excellent, superb, outstanding, effective\n- Instead of "bad": terrible, ineffective, problematic\n- Instead of "very": delete it, or use a stronger word\n\nMatch word to context: formal vs. informal'
        },
        {
          type: 'heading',
          content: 'Common Word Confusions'
        },
        {
          type: 'text',
          content: 'Their/There/They\'re\nYour/You\'re\nIts/It\'s\nTo/Too/Two\nAffect/Effect'
        }
      ],
      examples: [
        {
          title: 'Word Choice Example',
          problem: 'The movie was really good and the actors were really good too.',
          solution: 'The movie was outstanding, and the actors delivered compelling performances.',
          explanation: 'Specific, vivid words replace vague repeats.'
        }
      ],
      summary: 'Strong vocabulary makes your writing memorable. Choose words that fit your purpose and audience.'
    },
    keyPoints: [
      'Be specific, not vague',
      'Choose words that fit the context',
      'Avoid overused phrases',
      'Know common word confusions'
    ],
    prerequisites: ['lesson-essay-001'],
    commonMistakes: [
      'Using vague, overused words',
      'Wrong word choice confusion',
      'Inappropriate formality level'
    ],
    tips: [
      'Use a thesaurus for alternatives to weak words',
      'Choose the most specific word',
      'Match tone to audience and purpose',
      'Avoid slang in formal writing'
    ],
    practiceQuestions: ['q-essay-003'],
    estimatedReadTime: 15,
    orderIndex: 3
  },

  // Essay Structure (4 lessons)
  {
    id: 'lesson-essay-004',
    title: 'Thesis Statements and Central Ideas',
    subject: 'math',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 20,
    description: 'Craft compelling thesis statements that frame your essay.',
    content: {
      introduction: 'Your thesis statement is your essay\'s roadmap. It tells readers your main argument and how you\'ll support it.',
      mainContent: [
        {
          type: 'heading',
          content: 'What Makes a Strong Thesis'
        },
        {
          type: 'text',
          content: 'A strong thesis:\n1) Takes a clear position\n2) Is specific, not vague\n3) Is arguable (not obviously true)\n4) Can be supported with evidence\n5) Previews your main points (optional but helpful)'
        },
        {
          type: 'heading',
          content: 'Weak vs. Strong Thesis'
        },
        {
          type: 'text',
          content: 'Weak: "The book was interesting and had good characters."\nStrong: "Through complex characters and moral dilemmas, the novel explores the consequences of unchecked ambition."\n\nWeak: "Social media is popular."\nStrong: "While social media connects us globally, it\'s creating a generation struggling with mental health and authentic relationships."'
        }
      ],
      examples: [
        {
          title: 'Thesis Development',
          problem: 'Write a thesis for an essay arguing that schools should start later.',
          solution: 'Beginning school at 9 AM instead of 7:30 AM would improve student performance, reduce tardiness, and enhance overall well-being, as research shows teenagers need later school start times.',
          explanation: 'The thesis takes a clear position and previews the three main supporting arguments.'
        }
      ],
      summary: 'Your thesis is the foundation of your essay. Spend time crafting a clear, compelling statement.'
    },
    keyPoints: [
      'Thesis takes a clear position',
      'Thesis is specific and arguable',
      'Thesis can be supported with evidence',
      'Strong thesis previews main points'
    ],
    prerequisites: [],
    commonMistakes: [
      'Thesis is too vague or obvious',
      'Thesis is too broad',
      'Thesis doesn\'t match the essay content'
    ],
    tips: [
      'Ask yourself: what is my main argument?',
      'Make sure it\'s debatable',
      'Revise your thesis as you write',
      'Make sure your essay supports it'
    ],
    practiceQuestions: ['q-essay-004', 'q-essay-005'],
    estimatedReadTime: 15,
    orderIndex: 4
  },
  {
    id: 'lesson-essay-005',
    title: 'Introduction and Hooks',
    subject: 'math',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 20,
    description: 'Write compelling introductions that hook readers and introduce your thesis.',
    content: {
      introduction: 'First impressions matter. An engaging introduction draws readers in and sets up your argument.',
      mainContent: [
        {
          type: 'heading',
          content: 'Elements of a Strong Introduction'
        },
        {
          type: 'text',
          content: '1) Hook: Grab reader attention\n2) Context: Provide background information\n3) Thesis: State your main argument\n\nHook techniques:\n- Startling statistic\n- Provocative question\n- Relevant quote\n- Vivid anecdote\n- Bold statement'
        },
        {
          type: 'heading',
          content: 'Hook Examples'
        },
        {
          type: 'text',
          content: 'Statistic: "60% of teenagers report high stress levels, many citing school pressure."\nQuestion: "What would happen if schools prioritized student well-being over test scores?"\nQuote: "Education is the most powerful tool for change." - Nelson Mandela\nAnecdote: "When Sarah\'s school moved classes to 9 AM, her grades improved and her mood lifted."\nBold: "Traditional school times are failing our students."'
        }
      ],
      examples: [
        {
          title: 'Introduction Example',
          problem: 'Write an introduction for an essay about school start times.',
          solution: 'Every morning, millions of bleary-eyed teenagers drag themselves to school before their bodies are ready to wake up. Research consistently shows that adolescents need more sleep, yet most schools start classes before 8 AM. Beginning school at 9 AM instead of 7:30 AM would improve student performance, reduce tardiness, and enhance overall well-being.',
          explanation: 'Opens with a vivid image (hook), provides context, and states the thesis clearly.'
        }
      ],
      summary: 'Introductions set the tone for your essay. Make them engaging and clear.'
    },
    keyPoints: [
      'Hook should grab attention',
      'Introduce context before thesis',
      'Thesis should be clear by end of intro',
      'Introduction length: usually 1-3 sentences in SAT essay'
    ],
    prerequisites: ['lesson-essay-004'],
    commonMistakes: [
      'Hook is too generic or weak',
      'Too much context before thesis',
      'Thesis buried or unclear'
    ],
    tips: [
      'Start with your most interesting observation',
      'Consider your audience',
      'Make hook relevant to your thesis',
      'Keep introduction focused'
    ],
    practiceQuestions: ['q-essay-006'],
    estimatedReadTime: 15,
    orderIndex: 5
  },
  {
    id: 'lesson-essay-006',
    title: 'Body Paragraphs and Evidence',
    subject: 'math',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 25,
    description: 'Develop strong body paragraphs that support your thesis with evidence.',
    content: {
      introduction: 'Body paragraphs are where you prove your thesis. Each paragraph should have a clear topic sentence and strong supporting evidence.',
      mainContent: [
        {
          type: 'heading',
          content: 'Body Paragraph Structure'
        },
        {
          type: 'text',
          content: '1) Topic sentence: Main idea of the paragraph\n2) Context: Background information if needed\n3) Evidence: Examples, quotes, statistics, or details\n4) Analysis: Explain how evidence supports your point\n5) Connection: Link back to thesis'
        },
        {
          type: 'heading',
          content: 'Types of Evidence'
        },
        {
          type: 'text',
          content: 'Facts and statistics: "90% of teenagers report sleep deprivation."\nExamples: "Specific examples illustrate the problem..."\nQuotes: "Relevant quotes from authorities..."\nLogical reasoning: "This leads to the following conclusion..."\nPersonal observation: "In my experience..."\nComparison: "This is similar to..."\nContrast: "Unlike other approaches..."\nCause and effect: "This causes...because..."'
        }
      ],
      examples: [
        {
          title: 'Body Paragraph Example',
          problem: 'Write a body paragraph supporting later school start times.',
          solution: 'Research shows that later school start times improve academic performance. When schools moved to 9 AM starts, student grades increased by an average of 0.5 points, and graduation rates rose. This improvement occurs because teenagers\' circadian rhythms naturally shift during adolescence, causing them to need sleep later at night and wake later in the morning. By aligning school start times with their biology, students can attend class well-rested and better able to learn. This evidence demonstrates that start time affects academic success.',
          explanation: 'Includes topic sentence, evidence, analysis of the evidence, and connection to thesis.'
        }
      ],
      summary: 'Strong body paragraphs contain clear topic sentences and sufficient evidence. Always explain how your evidence supports your thesis.'
    },
    keyPoints: [
      'Topic sentence introduces paragraph idea',
      'Evidence supports the topic sentence',
      'Analysis explains why evidence matters',
      'Connect back to your main thesis'
    ],
    prerequisites: ['lesson-essay-004'],
    commonMistakes: [
      'Weak or missing topic sentence',
      'Evidence without analysis',
      'Too much evidence, not enough explanation',
      'Evidence doesn\'t connect to thesis'
    ],
    tips: [
      'Start each paragraph with a topic sentence',
      'Use the EVIDENCE-ANALYSIS pattern',
      'Show, don\'t just tell: explain why evidence matters',
      'Check that each paragraph supports your thesis'
    ],
    practiceQuestions: ['q-essay-007', 'q-essay-008'],
    estimatedReadTime: 18,
    orderIndex: 6
  },
  {
    id: 'lesson-essay-007',
    title: 'Conclusions and Final Impact',
    subject: 'math',
    topic: 'essay-structure',
    difficulty: 'medium',
    duration: 20,
    description: 'Write conclusions that reinforce your thesis and leave a lasting impression.',
    content: {
      introduction: 'Your conclusion is your last chance to convince readers. Make it memorable and powerful.',
      mainContent: [
        {
          type: 'heading',
          content: 'What a Strong Conclusion Does'
        },
        {
          type: 'text',
          content: '1) Restates the thesis in new words (not just copying)\n2) Summarizes main supporting points\n3) Provides broader context or implications\n4) Ends with impact: final thought, call to action, or larger significance'
        },
        {
          type: 'heading',
          content: 'Techniques for Impact'
        },
        {
          type: 'text',
          content: 'Call to action: "Schools should immediately adopt 9 AM start times."\nLarger implication: "This change would benefit not just students but society."\nFull circle: Return to the hook or opening idea\nFinal powerful statement: "The future of education depends on listening to the science."'
        }
      ],
      examples: [
        {
          title: 'Conclusion Example',
          problem: 'Write a conclusion for the school start time essay.',
          solution: 'The evidence is clear: teenagers perform better when school starts at 9 AM rather than 7:30 AM. By aligning school schedules with adolescent biology, improving student performance, and reducing tardiness, we can create healthier, more successful students. The question is no longer whether schools should change their start times—it\'s how quickly they can make this critical change. Education leaders must act now to implement this proven solution.',
          explanation: 'Restates thesis, summarizes key points, provides broader significance, and ends with a call to action.'
        }
      ],
      summary: 'Strong conclusions remind readers why your argument matters. End on a powerful note.'
    },
    keyPoints: [
      'Restate thesis in new words',
      'Summarize main points briefly',
      'Provide broader context',
      'End with impact or call to action'
    ],
    prerequisites: ['lesson-essay-004', 'lesson-essay-006'],
    commonMistakes: [
      'Simply repeating the thesis',
      'Introducing new ideas',
      'Weak or vague ending',
      'Too short to be effective'
    ],
    tips: [
      'Avoid "In conclusion" or "In summary"',
      'Restate thesis in completely new language',
      'Show why your argument matters',
      'End with a sentence readers remember'
    ],
    practiceQuestions: ['q-essay-009'],
    estimatedReadTime: 15,
    orderIndex: 7
  },

  // Argument Development (3 lessons)
  {
    id: 'lesson-essay-008',
    title: 'Building Strong Arguments',
    subject: 'math',
    topic: 'argument-development',
    difficulty: 'hard',
    duration: 25,
    description: 'Construct logical, persuasive arguments that readers find compelling.',
    content: {
      introduction: 'A strong argument is logical, well-supported, and compelling. Learn to build arguments that persuade.',
      mainContent: [
        {
          type: 'heading',
          content: 'Components of a Strong Argument'
        },
        {
          type: 'text',
          content: '1) Claim: What you argue\n2) Evidence: Facts that support your claim\n3) Reasoning: How evidence proves your claim\n4) Counterargument: Acknowledge opposing views\n5) Refutation: Explain why opposing view is insufficient'
        },
        {
          type: 'heading',
          content: 'Logical Fallacies to Avoid'
        },
        {
          type: 'text',
          content: 'Ad hominem: Attacking the person, not their argument\nStraw man: Attacking a weaker version of their argument\nFalse dilemma: Presenting only two options when more exist\nBegging the question: Assuming what you\'re trying to prove\nSlippery slope: Assuming one event will lead to extreme consequences\nAppeal to emotion: Using emotion rather than logic'
        }
      ],
      examples: [
        {
          title: 'Building Argument Example',
          problem: 'Strengthen this weak argument: "School uniforms are good because I say so."',
          solution: 'School uniforms improve academic focus because they eliminate fashion distractions, allowing students to concentrate on learning. Research shows that students in uniform schools have fewer disciplinary issues. While some argue uniforms restrict self-expression, the academic benefits outweigh this concern, and students still express themselves through other means.',
          explanation: 'The strengthened version includes evidence, reasoning, and addresses counterarguments.'
        }
      ],
      summary: 'Logical, well-reasoned arguments persuade readers. Avoid fallacies and always support your claims with evidence.'
    },
    keyPoints: [
      'Every claim needs evidence',
      'Reasoning explains the connection',
      'Address counterarguments',
      'Avoid common logical fallacies'
    ],
    prerequisites: ['lesson-essay-006'],
    commonMistakes: [
      'Claims without evidence',
      'Logical fallacies',
      'Not addressing counterarguments',
      'Emotional appeals without logic'
    ],
    tips: [
      'Ask: how do I know this is true?',
      'Provide specific, relevant evidence',
      'Explain why evidence matters',
      'Acknowledge and refute opposing views'
    ],
    practiceQuestions: ['q-essay-010'],
    estimatedReadTime: 18,
    orderIndex: 8
  },
  {
    id: 'lesson-essay-009',
    title: 'Using Counterarguments Effectively',
    subject: 'math',
    topic: 'argument-development',
    difficulty: 'hard',
    duration: 20,
    description: 'Strengthen your argument by acknowledging and refuting opposing viewpoints.',
    content: {
      introduction: 'Acknowledging opposing views actually makes your argument stronger, not weaker. It shows you understand the issue fully.',
      mainContent: [
        {
          type: 'heading',
          content: 'Why Include Counterarguments'
        },
        {
          type: 'text',
          content: 'Shows you understand the issue fully\nMakes your argument more persuasive\nAddresses reader concerns\nDemonstrates critical thinking\nShows respect for other perspectives'
        },
        {
          type: 'heading',
          content: 'How to Handle Counterarguments'
        },
        {
          type: 'text',
          content: '1) State the opposing view fairly\n2) Acknowledge its validity ("While this view has merit...")\n3) Present your counterargument ("However...")\n4) Explain why your view is stronger\n\nExample: "While some argue uniforms restrict self-expression, students still express themselves through accessories, hairstyles, and behavior."'
        }
      ],
      examples: [
        {
          title: 'Counterargument Example',
          problem: 'Add a counterargument to: "Schools should implement dress codes."',
          solution: 'While critics argue that dress codes restrict student freedom of expression, implementing reasonable dress codes actually enhances the learning environment. Students concerned about fashion can still express themselves through non-clothing methods, and the academic focus gained outweighs any minor restriction on self-expression.',
          explanation: 'Fairly states the opposing view, then explains why the author\'s view is stronger.'
        }
      ],
      summary: 'Including counterarguments demonstrates sophisticated thinking. Do it respectfully and refute effectively.'
    },
    keyPoints: [
      'State opposing view fairly',
      'Acknowledge its validity',
      'Present your counterargument',
      'Explain why your view is stronger'
    ],
    prerequisites: ['lesson-essay-006'],
    commonMistakes: [
      'Misrepresenting the opposing view',
      'Not refuting it effectively',
      'Including counterargument too early',
      'Letting it overshadow your main argument'
    ],
    tips: [
      'Use "While some argue that..." or "Critics point out that..."',
      'Be fair to opposing views',
      'Refute respectfully but clearly',
      'End by affirming your position'
    ],
    practiceQuestions: ['q-essay-011'],
    estimatedReadTime: 15,
    orderIndex: 9
  },
  {
    id: 'lesson-essay-010',
    title: 'Revision and Editing',
    subject: 'math',
    topic: 'argument-development',
    difficulty: 'medium',
    duration: 20,
    description: 'Learn systematic approaches to revising and editing your essay for maximum impact.',
    content: {
      introduction: 'First drafts are never perfect. Revision is where good writing becomes great writing.',
      mainContent: [
        {
          type: 'heading',
          content: 'Revision vs. Editing'
        },
        {
          type: 'text',
          content: 'Revision: Big-picture changes (organization, arguments, evidence, thesis clarity)\nEditing: Small-scale changes (grammar, word choice, sentence structure, punctuation)'
        },
        {
          type: 'heading',
          content: 'Revision Checklist'
        },
        {
          type: 'text',
          content: 'Does my thesis clearly answer the prompt?\nDo all my paragraphs support the thesis?\nIs my evidence strong and relevant?\nDo I explain how evidence supports my points?\nHave I addressed counterarguments?\nIs my organization logical?\nDoes my conclusion provide impact?'
        },
        {
          type: 'heading',
          content: 'Editing Checklist'
        },
        {
          type: 'text',
          content: 'Grammar and punctuation correct?\nVaried sentence structure?\nWeak words replaced?\nActive voice preferred?\nTense consistent?\nNo spelling errors?'
        }
      ],
      examples: [
        {
          title: 'Revision Example',
          problem: 'Original: "The book had good writing and interesting characters."',
          solution: 'Revised: "The novel\'s lyrical prose and complex characters create a compelling narrative that explores themes of ambition and morality."',
          explanation: 'Revision replaced vague words with specific ones and provided more information.'
        }
      ],
      summary: 'Good writers revise extensively. Plan time for both major revisions and careful editing.'
    },
    keyPoints: [
      'Revise for content and organization first',
      'Edit for grammar and style second',
      'Read aloud to catch errors',
      'Have others read your work'
    ],
    prerequisites: ['lesson-essay-004', 'lesson-essay-006'],
    commonMistakes: [
      'Not allowing time for revision',
      'Focusing only on grammar, not content',
      'Not reading work aloud',
      'Submitting first draft'
    ],
    tips: [
      'Revise with fresh eyes (take a break first)',
      'Read aloud to catch awkward phrasing',
      'Ask: does this sentence serve a purpose?',
      'Have someone else read it',
      'Use spell-check, but don\'t rely on it'
    ],
    practiceQuestions: ['q-essay-012'],
    estimatedReadTime: 15,
    orderIndex: 10
  }
];
