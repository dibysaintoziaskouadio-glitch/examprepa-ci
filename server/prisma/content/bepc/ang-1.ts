import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Anglais 3e (DPFC) — progression nationale 2026-2027';

export const lifeAtSchool: SeedChapter = {
  subject: 'ANG',
  order: 1,
  title: 'Life at school — The simple past and “used to”',
  minutes: 660,
  isFree: true,
  officialRef: `${REF}, thème 1 : Life at school (holidays in my village, memories of school, school work)`,
  objectives: [
    'Talk about past events and school memories',
    'Use the simple past (regular and irregular verbs) and “used to”',
    'Express ability with can / could / be able to',
  ],
  courseMd: r`
> **Situation.** Back from the holidays, Ama tells her classmates: “Last August, I **went** to my village. I **helped** my grandmother in the field and I **swam** in the river.” She is talking about the **past**.

## 1. Vocabulary
**School:** classroom, timetable, headmaster / principal, teacher, pupil / student, homework, exercise book, blackboard, break (récréation), term (trimestre), report card (bulletin), to pass / to fail an exam, to revise.
**Holidays in the village:** field, farm, harvest, yam, cassava, river, to fetch water, to pound foufou, grandparents, cousins, wonderful, tiring.

## 2. The simple past (le prétérit)
We use it for **finished actions** at a **specific time in the past** (*yesterday, last week, in 2020, two days ago*).
- **Regular verbs**: verb + **-ed** → *work → work**ed***, *play → play**ed***, *study → stud**ied***, *stop → stop**ped***.
- **Irregular verbs** (to learn by heart): *go → went, see → saw, have → had, do → did, swim → swam, eat → ate, take → took, come → came, buy → bought, teach → taught, write → wrote, get → got, be → was / were*.
- **Negative**: *did not (didn't)* + base verb → “I **didn't go** to school.”
- **Question**: *Did* + subject + base verb → “**Did** you **visit** your village?” — “Yes, I **did**. / No, I **didn't**.”
- With **be**: *I / he / she / it **was***, *we / you / they **were***.

## 3. “Used to” (past habits)
**Used to + base verb** expresses a habit or situation in the past that is **no longer true**:
“When I was in primary school, I **used to walk** five kilometres to school.”
Negative: *didn't use to* — Question: *Did you use to…?*

## 4. Expressing ability
- **can** (present ability): “I **can** speak English and Baoulé.”
- **could** (past ability): “When I was six, I **could** already read.”
- **be able to** (all tenses): “I **will be able to** pass the BEPC.”

## 5. Talking about school work
“I **revise** every evening because I **want** to pass.” — “If you **work** hard, you **will** succeed.” (condition: *if* + present → *will* + verb)
`,
  summaryMd: r`
- **Simple past**: verb + -ed (regular) / irregular form (go → went, see → saw, have → had…).
- Negative: **didn't + base verb**; question: **Did + subject + base verb?**
- be: **was / were**.
- **used to + base verb** = past habit (no longer true).
- Ability: **can** (present), **could** (past), **be able to** (all tenses).
- Time markers: yesterday, last…, … ago, in 2020.
`,
  questions: [
    { type: 'MCQ', prompt: r`Yesterday, I … to the market.`, choices: ['go', 'went', 'goed'], answer: { index: 1 }, explanation: r`Irregular: go → went.` },
    { type: 'MCQ', prompt: r`She … her homework last night.`, choices: ['did', 'does', 'do'], answer: { index: 0 }, explanation: r`Simple past of do.` },
    { type: 'MCQ', prompt: r`I … not visit my village last year.`, choices: ['did', 'was', 'have'], answer: { index: 0 }, explanation: r`Negative: did not + base verb.` },
    { type: 'MCQ', prompt: r`… you swim in the river?`, choices: ['Did', 'Was', 'Do'], answer: { index: 0 }, explanation: r`Question in the simple past.` },
    { type: 'MCQ', prompt: r`They … happy during the holidays.`, choices: ['were', 'was', 'are'], answer: { index: 0 }, explanation: r`They → were.` },
    { type: 'MCQ', prompt: r`The past of “study” is:`, choices: ['studied', 'studyed', 'studed'], answer: { index: 0 }, explanation: r`y → ied.` },
    { type: 'MCQ', prompt: r`The past of “buy” is:`, choices: ['bought', 'buyed', 'brought'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`When I was young, I … walk to school every day.`, choices: ['used to', 'use to', 'am used to'], answer: { index: 0 }, explanation: r`Past habit.` },
    { type: 'MCQ', prompt: r`When she was five, she … read.`, choices: ['could', 'can', 'can to'], answer: { index: 0 }, explanation: r`Past ability.` },
    { type: 'MCQ', prompt: r`Next year, I will … to speak English fluently.`, choices: ['be able', 'can', 'could'], answer: { index: 0 }, explanation: r`Future ability: will be able to.` },
    { type: 'MCQ', prompt: r`“Le bulletin” in English is:`, choices: ['report card', 'timetable', 'blackboard'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“La récréation” in English is:`, choices: ['break', 'term', 'field'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`If you work hard, you … succeed.`, choices: ['will', 'would', 'did'], answer: { index: 0 }, explanation: r`If + present → will.` },
    { type: 'MCQ', prompt: r`Which sentence is correct?`, choices: ['He didn’t went.', 'He didn’t go.', 'He not went.'], answer: { index: 1 }, explanation: r`didn't + base verb.` },
    { type: 'OPEN', prompt: r`Write three sentences about your last holidays using the simple past.`, answer: { model: 'Last August, I went to my village. I helped my parents in the field. I visited my grandparents.', keywords: ['went', 'helped', 'visited'] }, explanation: r`Use past forms and time markers.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Life at school',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.** Read the text carefully, then answer the questions.`,
    advice: r`### 🎯 Methodology
1. Underline the **time markers** (yesterday, last…, ago): they announce the simple past.
2. Learn the **irregular verbs** list by heart.
3. In writing, use **short, correct sentences** and linking words (first, then, finally).`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Last year, Koffi was in 4ème at a school in Daloa. He used to wake up at 5 a.m. to fetch water before going to school. He walked three kilometres every morning. In class, he could not see the blackboard well, so the teacher moved him to the front row. At the end of the year, he passed with a good report card and his parents bought him a bicycle.”`, prompt: r`1. Where was Koffi's school?`, type: 'MCQ', choices: ['In Daloa', 'In Abidjan', 'In Bouaké'], answer: { index: 0 }, points: 2, correction: r`“a school in Daloa”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. Why did the teacher move him to the front row?`, type: 'MCQ', choices: ['Because he could not see the blackboard well', 'Because he was noisy'], answer: { index: 0 }, points: 2, correction: r`“he could not see the blackboard well”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. What did his parents buy him?`, type: 'MCQ', choices: ['A bicycle', 'A phone', 'A book'], answer: { index: 0 }, points: 2, correction: r`“his parents bought him a bicycle”.` },
      { section: 'Part B — Grammar (8 pts)', sectionIntro: r`Choose the correct form.`, prompt: r`1. We … to the zoo last Sunday.`, type: 'MCQ', choices: ['went', 'go', 'goes'], answer: { index: 0 }, points: 2, correction: r`Simple past.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. … she pass her exam?`, type: 'MCQ', choices: ['Did', 'Does', 'Was'], answer: { index: 0 }, points: 2, correction: r`Question in the past.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. My grandfather … to tell us stories every evening.`, type: 'MCQ', choices: ['used', 'use', 'uses to'], answer: { index: 0 }, points: 2, correction: r`used to.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. They … not at school yesterday.`, type: 'MCQ', choices: ['were', 'was', 'did'], answer: { index: 0 }, points: 2, correction: r`were not.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`In 6 to 8 lines, write about your best memory of primary school. Use the simple past and “used to”.`, type: 'OPEN', answer: { model: 'A short text in the past with used to' }, points: 6, correction: r`Content and coherence *(2 pts)* ; correct simple past *(2 pts)* ; use of “used to” *(1 pt)* ; spelling *(1 pt)*.` },
    ],
  },
};

export const womenAtWork: SeedChapter = {
  subject: 'ANG',
  order: 2,
  title: 'Women at work — Comparison and expressing opinions',
  minutes: 720,
  officialRef: `${REF}, thème 2 : Women at work (village women activities, women's rights and duties, girls at school)`,
  objectives: [
    'Talk about women’s activities, rights and duties, and girls’ education',
    'Use comparatives and superlatives',
    'Express an opinion, agreement and disagreement',
  ],
  courseMd: r`
> **Situation.** “In my village, women work **harder than** men: they farm, cook, sell at the market and look after the children. I think girls should go to school **just like** boys.”

## 1. Vocabulary
**Activities:** to farm, to grow cassava, to sell at the market, to smoke fish, to make attiéké, to fetch water, to take care of children, a trader, a seamstress, a midwife.
**Rights and duties:** equal rights, education, health, freedom, to vote, to own land, violence against women, to respect, to protect.
**Girls at school:** schooling, drop out (abandonner), early marriage, early pregnancy, to succeed, a career, an engineer, a doctor, a lawyer.

## 2. Comparison
**Short adjectives** (one syllable, or two ending in -y):
- comparative: adjective + **-er + than** → *tall**er** than*, *bus**ier** than*, *big**ger** than* ;
- superlative: **the** + adjective + **-est** → *the tall**est***, *the bus**iest***.
**Long adjectives** (two syllables or more):
- comparative: **more / less** + adjective + **than** → *more important than* ;
- superlative: **the most / the least** + adjective → *the most important*.
**Equality**: **as** + adjective + **as** → “Girls are **as clever as** boys.” ; negative: *not as… as*.
**Irregular**: *good → better → the best* ; *bad → worse → the worst* ; *far → farther/further → the farthest/furthest*.

## 3. Expressing opinion
- Giving an opinion: *I think (that)…, In my opinion…, I believe…, As far as I'm concerned…*
- Agreeing: *I agree with you. You're right. That's true.*
- Disagreeing: *I disagree. I don't think so. I'm not sure that…*
- Giving reasons: *because, since, so*.

“**In my opinion**, educating girls is **the most important** thing for development, **because** an educated woman can take better care of her family.”
`,
  summaryMd: r`
- Short adjectives: **-er than** / **the -est** (big → bigger, busy → busier).
- Long adjectives: **more … than** / **the most …**.
- Equality: **as … as**.
- Irregular: good → better → the best ; bad → worse → the worst.
- Opinion: I think…, In my opinion…, I agree / I disagree…, because…
`,
  questions: [
    { type: 'MCQ', prompt: r`Aya is … than her brother.`, choices: ['taller', 'more tall', 'tallest'], answer: { index: 0 }, explanation: r`Short adjective: -er than.` },
    { type: 'MCQ', prompt: r`Education is … than money.`, choices: ['more important', 'importanter', 'most important'], answer: { index: 0 }, explanation: r`Long adjective: more … than.` },
    { type: 'MCQ', prompt: r`She is the … student in the class.`, choices: ['best', 'better', 'good'], answer: { index: 0 }, explanation: r`good → the best.` },
    { type: 'MCQ', prompt: r`Girls are … clever … boys.`, choices: ['as / as', 'more / as', 'as / than'], answer: { index: 0 }, explanation: r`Equality.` },
    { type: 'MCQ', prompt: r`Market women are the … people in the village.`, choices: ['busiest', 'busyest', 'most busy'], answer: { index: 0 }, explanation: r`y → iest.` },
    { type: 'MCQ', prompt: r`The comparative of “bad” is:`, choices: ['worse', 'badder', 'worst'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`The comparative of “big” is:`, choices: ['bigger', 'biger', 'more big'], answer: { index: 0 }, explanation: r`Double consonant.` },
    { type: 'MCQ', prompt: r`Which expression gives an opinion?`, choices: ['In my opinion', 'Last year', 'Good morning'], answer: { index: 0 }, explanation: r`Opinion marker.` },
    { type: 'MCQ', prompt: r`Which expression shows disagreement?`, choices: ['I don’t think so.', 'You’re right.', 'That’s true.'], answer: { index: 0 }, explanation: r`Disagreement.` },
    { type: 'MCQ', prompt: r`“Abandonner l’école” in English is:`, choices: ['to drop out of school', 'to go out of school', 'to pass'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Une sage-femme” in English is:`, choices: ['a midwife', 'a seamstress', 'a trader'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`This is the … dangerous road in the region.`, choices: ['most', 'more', 'much'], answer: { index: 0 }, explanation: r`Superlative of a long adjective.` },
    { type: 'MCQ', prompt: r`Women should have … rights as men.`, choices: ['the same', 'the more', 'the most'], answer: { index: 0 }, explanation: r`Equality.` },
    { type: 'MCQ', prompt: r`Early marriage is … for girls' health.`, choices: ['bad', 'badly', 'worse than'], answer: { index: 0 }, explanation: r`Adjective after “is”.` },
    { type: 'OPEN', prompt: r`Give your opinion on girls' education in two sentences.`, answer: { model: 'In my opinion, girls should go to school because education gives them a better future. I think an educated woman can help her family.', keywords: ['In my opinion', 'because'] }, explanation: r`Opinion + reason.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Women at work',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. Count syllables to choose **-er** or **more**.
2. Always justify your opinion with **because**.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Mrs Kouamé lives in a village near Bouaflé. Every morning, she goes to her field before sunrise. In the afternoon, she sells attiéké at the market. She earns more money than her husband during the dry season. With this money, she pays the school fees of her three daughters. She says: ‘My daughters will have a better life than me because they are going to school.’”`, prompt: r`1. Where does Mrs Kouamé live?`, type: 'MCQ', choices: ['Near Bouaflé', 'In Abidjan'], answer: { index: 0 }, points: 2, correction: r`“a village near Bouaflé”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. What does she sell at the market?`, type: 'MCQ', choices: ['Attiéké', 'Fish', 'Clothes'], answer: { index: 0 }, points: 2, correction: r`“she sells attiéké”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. Why does she think her daughters will have a better life?`, type: 'MCQ', choices: ['Because they are going to school', 'Because they are rich'], answer: { index: 0 }, points: 2, correction: r`Last sentence.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`1. Yamoussoukro is … than Bouaflé.`, type: 'MCQ', choices: ['bigger', 'biggest', 'more big'], answer: { index: 0 }, points: 2, correction: r`Comparative.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. She is the … intelligent girl of the school.`, type: 'MCQ', choices: ['most', 'more', 'much'], answer: { index: 0 }, points: 2, correction: r`Superlative.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. This year, my results are … than last year.`, type: 'MCQ', choices: ['better', 'gooder', 'best'], answer: { index: 0 }, points: 2, correction: r`good → better.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. Women work as … as men.`, type: 'MCQ', choices: ['hard', 'harder', 'hardest'], answer: { index: 0 }, points: 2, correction: r`as + adjective + as.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Some people say: “Girls should stay at home and help their mothers.” Do you agree? Give your opinion in 6 to 8 lines.`, type: 'OPEN', answer: { model: 'Opinion with reasons and examples, using comparison' }, points: 6, correction: r`Clear opinion *(2 pts)* ; at least two reasons *(2 pts)* ; correct grammar and spelling *(2 pts)*.` },
    ],
  },
};

export const travelling: SeedChapter = {
  subject: 'ANG',
  order: 3,
  title: 'Travelling — Future forms and at the airport',
  minutes: 660,
  officialRef: `${REF}, thème 3 : Travelling (means of transport, at the airport, visiting the USA)`,
  objectives: [
    'Talk about means of transport and travel plans',
    'Use “will” and “be going to” to talk about the future',
    'Understand and use the language of the airport',
  ],
  courseMd: r`
> **Situation.** Yao won a scholarship. “Next month, I **am going to** fly to New York. I **will** visit the Statue of Liberty!” He is talking about the **future**.

## 1. Vocabulary
**Means of transport:** by car, by bus, by train, by plane, by boat / ferry, by motorbike, on foot, a taxi, a “gbaka” (minibus), a driver, a pilot, a passenger, a ticket, a journey / a trip.
**At the airport:** passport, visa, boarding pass, luggage / baggage, suitcase, check-in counter, customs, departure, arrival, gate, flight, to take off (décoller), to land (atterrir), delay.
**Visiting the USA:** the United States of America, Washington D.C. (the capital), New York, the Statue of Liberty, skyscrapers, the dollar.

## 2. The future
**will + base verb** — decisions taken now, predictions, promises:
- “I **will** help you with your suitcase.” — “It **will** rain tomorrow.”
- Negative: **won't** (will not) — Question: **Will** you come?
**be going to + base verb** — plans and intentions, predictions based on evidence:
- “We **are going to** visit Washington next summer.”
- “Look at those clouds! It **is going to** rain.”
**Present continuous** for fixed arrangements: “My plane **is leaving** at 10 p.m.”

## 3. Prepositions and travel
- **by** car / bus / plane, but **on foot**.
- **at** the airport, **in** New York, **to** the USA (*travel to, fly to, go to*).
- **from** Abidjan **to** Accra.

## 4. Useful dialogue at the check-in counter
— Good morning. Your passport and ticket, please.
— Here you are.
— How many suitcases are you checking in?
— Just one.
— Here is your boarding pass. Your flight leaves from gate 5. Have a nice trip!
`,
  summaryMd: r`
- **will + verb**: decision now, prediction, promise ; negative **won't**.
- **be going to + verb**: plan, intention, prediction with evidence.
- Present continuous: fixed arrangement.
- **by** car/bus/plane ; **on foot** ; **at** the airport ; **to** a country.
- Airport words: passport, boarding pass, luggage, check-in, customs, gate, flight, take off, land.
`,
  questions: [
    { type: 'MCQ', prompt: r`Next year, I … visit Ghana.`, choices: ['am going to', 'went', 'go to'], answer: { index: 0 }, explanation: r`Plan.` },
    { type: 'MCQ', prompt: r`Don't worry, I … help you.`, choices: ['will', 'am going', 'did'], answer: { index: 0 }, explanation: r`Promise / decision now.` },
    { type: 'MCQ', prompt: r`The negative of “will” is:`, choices: ['won’t', 'willn’t', 'don’t will'], answer: { index: 0 }, explanation: r`will not = won't.` },
    { type: 'MCQ', prompt: r`Look at the sky! It … rain.`, choices: ['is going to', 'will be'], answer: { index: 0 }, explanation: r`Prediction with evidence.` },
    { type: 'MCQ', prompt: r`We travelled … bus.`, choices: ['by', 'on', 'in'], answer: { index: 0 }, explanation: r`by + transport.` },
    { type: 'MCQ', prompt: r`He goes to school … foot.`, choices: ['on', 'by'], answer: { index: 0 }, explanation: r`on foot.` },
    { type: 'MCQ', prompt: r`“Atterrir” in English is:`, choices: ['to land', 'to take off', 'to board'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Les bagages” in English is:`, choices: ['luggage', 'customs', 'gate'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`The document you need to board the plane is the:`, choices: ['boarding pass', 'report card', 'timetable'], answer: { index: 0 }, explanation: r`Carte d'embarquement.` },
    { type: 'MCQ', prompt: r`The capital of the USA is:`, choices: ['Washington D.C.', 'New York', 'Los Angeles'], answer: { index: 0 }, explanation: r`Capital city.` },
    { type: 'MCQ', prompt: r`… you come with us tomorrow?`, choices: ['Will', 'Did', 'Are'], answer: { index: 0 }, explanation: r`Question with will.` },
    { type: 'MCQ', prompt: r`We are flying … New York.`, choices: ['to', 'at', 'in'], answer: { index: 0 }, explanation: r`Destination: to.` },
    { type: 'MCQ', prompt: r`“La douane” in English is:`, choices: ['customs', 'gate', 'flight'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`My plane … at 10 p.m. tonight (fixed arrangement).`, choices: ['is leaving', 'leaved', 'was leaving'], answer: { index: 0 }, explanation: r`Present continuous for arrangements.` },
    { type: 'OPEN', prompt: r`Write two sentences about your plans for next holidays with “be going to”.`, answer: { model: 'I am going to visit my aunt in Korhogo. We are going to travel by bus.', keywords: ['am going to', 'are going to'] }, explanation: r`Plans → be going to.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Travelling',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. **Plan** → be going to ; **sudden decision / promise** → will.
2. Learn the airport vocabulary in context (dialogue).`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Awa is a student from Abidjan. She won an English competition, and the prize is a two-week trip to the United States. She is going to fly from Félix Houphouët-Boigny Airport next Monday. First, she is going to stay in New York, where she will visit the Statue of Liberty. Then she will travel by train to Washington D.C. She is a little nervous because it is her first flight.”`, prompt: r`1. Why is Awa going to the USA?`, type: 'MCQ', choices: ['She won an English competition', 'She is going to work there'], answer: { index: 0 }, points: 2, correction: r`First sentences.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. How will she travel to Washington?`, type: 'MCQ', choices: ['By train', 'By car', 'By plane'], answer: { index: 0 }, points: 2, correction: r`“by train”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. Why is she nervous?`, type: 'MCQ', choices: ['It is her first flight', 'She lost her passport'], answer: { index: 0 }, points: 2, correction: r`Last sentence.` },
      { section: 'Part B — Grammar & vocabulary (8 pts)', prompt: r`1. I have decided: I … learn English every day.`, type: 'MCQ', choices: ['am going to', 'did', 'have'], answer: { index: 0 }, points: 2, correction: r`Intention.` },
      { section: 'Part B — Grammar & vocabulary (8 pts)', prompt: r`2. The phone is ringing. — I … answer it!`, type: 'MCQ', choices: ['will', 'am going to'], answer: { index: 0 }, points: 2, correction: r`Sudden decision.` },
      { section: 'Part B — Grammar & vocabulary (8 pts)', prompt: r`3. Passengers must show their … at customs.`, type: 'MCQ', choices: ['passports', 'report cards'], answer: { index: 0 }, points: 2, correction: r`Vocabulary.` },
      { section: 'Part B — Grammar & vocabulary (8 pts)', prompt: r`4. The plane … off at 8 o'clock.`, type: 'MCQ', choices: ['takes', 'lands', 'boards'], answer: { index: 0 }, points: 2, correction: r`to take off.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Imagine you are going to visit a foreign country. Write a short email (6 to 8 lines) to a friend about your travel plans.`, type: 'OPEN', answer: { model: 'Email with greetings, plans (be going to / will), transport, closing' }, points: 6, correction: r`Email format *(1 pt)* ; content (where, when, how, what) *(2 pts)* ; future forms *(2 pts)* ; spelling *(1 pt)*.` },
    ],
  },
};

export const fashion: SeedChapter = {
  subject: 'ANG',
  order: 4,
  title: 'Fashion — Likes, preferences and describing clothes',
  minutes: 660,
  officialRef: `${REF}, thème 4 : Fashion (modern and traditional clothes, fashion show)`,
  objectives: [
    'Describe modern and traditional clothes',
    'Express likes, dislikes and preferences',
    'Use the order of adjectives',
  ],
  courseMd: r`
> **Situation.** At the school fashion show, Fanta wears a beautiful **pagne** dress. “I **love wearing** traditional clothes, but my brother **prefers** jeans **to** boubous.”

## 1. Vocabulary
**Modern clothes:** jeans, T-shirt, shirt, skirt, dress, trousers, suit, tie, sneakers / trainers, sandals, cap.
**Traditional clothes:** pagne (wax print), boubou, kente (Ghana / Côte d'Ivoire), headscarf (foulard), traditional cloth woven by hand (Baoulé and Senufo weaving).
**Fashion show:** a model, a designer (styliste), a catwalk (podium), to wear, to put on, to take off, fashionable / trendy, old-fashioned, elegant, colourful.

## 2. Likes, dislikes and preferences
- **like / love / enjoy / hate / don't like + verb-ing**: “I **enjoy wearing** pagne.” — “She **hates wearing** a tie.”
- **prefer A to B**: “I **prefer** boubous **to** suits.” — “I prefer **wearing** sandals **to wearing** shoes.”
- **would rather + base verb (+ than)**: “I'**d rather wear** a dress **than** trousers.”
- **would like + to + verb** (polite wish): “I **would like to** buy a new shirt.”

## 3. The order of adjectives
When several adjectives come before a noun, the usual order is:
**opinion → size → age → shape → colour → origin → material → noun**
- “a **beautiful long red** dress”
- “a **nice old Ivorian cotton** boubou”

## 4. Describing what people wear
Present continuous: “The model **is wearing** a colourful pagne skirt and a white headscarf.”
Questions: *What is she wearing? What colour is his shirt? What do you think of this outfit?*
`,
  summaryMd: r`
- like / love / enjoy / hate + **verb-ing**.
- **prefer A to B** ; **would rather + verb (+ than)** ; **would like to + verb**.
- Adjective order: **opinion – size – age – shape – colour – origin – material – noun**.
- Describe clothes: **is wearing** (present continuous).
- Vocabulary: pagne, boubou, kente, headscarf, designer, model, catwalk, fashionable, old-fashioned.
`,
  questions: [
    { type: 'MCQ', prompt: r`I enjoy … traditional clothes.`, choices: ['wearing', 'wear', 'to wore'], answer: { index: 0 }, explanation: r`enjoy + -ing.` },
    { type: 'MCQ', prompt: r`She prefers boubous … suits.`, choices: ['to', 'than', 'that'], answer: { index: 0 }, explanation: r`prefer A to B.` },
    { type: 'MCQ', prompt: r`I'd rather … a dress than trousers.`, choices: ['wear', 'wearing', 'to wear'], answer: { index: 0 }, explanation: r`would rather + base verb.` },
    { type: 'MCQ', prompt: r`I would like … a new shirt.`, choices: ['to buy', 'buying', 'buy'], answer: { index: 0 }, explanation: r`would like to + verb.` },
    { type: 'MCQ', prompt: r`Choose the correct order:`, choices: ['a beautiful long red dress', 'a red long beautiful dress', 'a long beautiful red dress'], answer: { index: 0 }, explanation: r`opinion – size – colour.` },
    { type: 'MCQ', prompt: r`Choose the correct order:`, choices: ['a nice old cotton shirt', 'a cotton old nice shirt', 'an old nice cotton shirt'], answer: { index: 0 }, explanation: r`opinion – age – material.` },
    { type: 'MCQ', prompt: r`Look! The model … a colourful pagne.`, choices: ['is wearing', 'wears', 'wore'], answer: { index: 0 }, explanation: r`Present continuous: now.` },
    { type: 'MCQ', prompt: r`“Un styliste” in English is:`, choices: ['a designer', 'a model', 'a tailor shop'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Démodé” in English is:`, choices: ['old-fashioned', 'trendy', 'colourful'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`The opposite of “to put on” is:`, choices: ['to take off', 'to wear', 'to buy'], answer: { index: 0 }, explanation: r`Enlever un vêtement.` },
    { type: 'MCQ', prompt: r`He hates … a tie.`, choices: ['wearing', 'wear', 'wears'], answer: { index: 0 }, explanation: r`hate + -ing.` },
    { type: 'MCQ', prompt: r`“Le podium” of a fashion show is the:`, choices: ['catwalk', 'gate', 'stage door'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`What … she wearing?`, choices: ['is', 'does', 'do'], answer: { index: 0 }, explanation: r`Present continuous question.` },
    { type: 'MCQ', prompt: r`Kente is a … cloth.`, choices: ['traditional', 'plastic', 'modern factory'], answer: { index: 0 }, explanation: r`Woven cloth.` },
    { type: 'OPEN', prompt: r`Describe what you are wearing today in two sentences, using two adjectives in the right order.`, answer: { model: 'I am wearing a nice blue cotton shirt and black trousers.', keywords: ['am wearing'] }, explanation: r`Order of adjectives.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Fashion',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. After **like, love, enjoy, hate, prefer** use **-ing**; after **would rather** use the **base verb**.
2. Check the **order of adjectives** before writing.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Last Saturday, our school organised a fashion show. Twenty students walked on the catwalk. Some wore modern clothes like jeans and T-shirts, but most of them chose traditional outfits made of pagne and kente. The winner, Adjoua, wore a long yellow and green kente dress designed by her mother. The audience loved it!”`, prompt: r`1. How many students walked on the catwalk?`, type: 'MCQ', choices: ['Twenty', 'Two', 'Twelve'], answer: { index: 0 }, points: 2, correction: r`“Twenty students”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. What did most students choose?`, type: 'MCQ', choices: ['Traditional outfits', 'Jeans and T-shirts'], answer: { index: 0 }, points: 2, correction: r`“most of them chose traditional outfits”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. Who designed the winner's dress?`, type: 'MCQ', choices: ['Her mother', 'Her teacher', 'Her sister'], answer: { index: 0 }, points: 2, correction: r`“designed by her mother”.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`1. My sister loves … clothes.`, type: 'MCQ', choices: ['designing', 'design', 'to designed'], answer: { index: 0 }, points: 2, correction: r`love + -ing.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. I'd rather … sandals than shoes.`, type: 'MCQ', choices: ['wear', 'wearing'], answer: { index: 0 }, points: 2, correction: r`would rather + base verb.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. She bought …`, type: 'MCQ', choices: ['a lovely green silk scarf', 'a silk green lovely scarf'], answer: { index: 0 }, points: 2, correction: r`opinion – colour – material.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. He prefers football … basketball.`, type: 'MCQ', choices: ['to', 'than'], answer: { index: 0 }, points: 2, correction: r`prefer A to B.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Do you prefer modern or traditional clothes? Write 6 to 8 lines explaining your preference.`, type: 'OPEN', answer: { model: 'Preference with reasons, likes/dislikes and descriptions' }, points: 6, correction: r`Clear preference *(1 pt)* ; reasons *(2 pts)* ; correct structures of likes/preferences *(2 pts)* ; spelling *(1 pt)*.` },
    ],
  },
};
