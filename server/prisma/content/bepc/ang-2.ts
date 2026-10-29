import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Anglais 3e (DPFC) — progression nationale 2026-2027';

export const cityOrVillage: SeedChapter = {
  subject: 'ANG',
  order: 5,
  title: 'City or village? — Conditional sentences and giving reasons',
  minutes: 720,
  officialRef: `${REF}, thème 5 : City or village? (in the city, in the village, rural exodus)`,
  objectives: [
    'Compare life in the city and in the village',
    'Use conditional sentences (type 1 and type 2)',
    'Give reasons and consequences (because, so, that’s why)',
  ],
  courseMd: r`
> **Situation.** Kouadio wants to leave his village for Abidjan. His grandfather says: “**If** you **stay** here, you **will** help the family. **If** I **were** you, I **would** finish school first.”

## 1. Vocabulary
**City:** traffic jam, pollution, noise, skyscraper, factory, job, crowded, expensive, modern facilities (hospital, university), slums, crime, entertainment.
**Village:** peaceful, quiet, fresh air, farming, solidarity, chief, traditional ceremonies, lack of electricity / running water, few jobs, far from hospitals.
**Rural exodus:** to migrate, to leave the countryside, unemployment, overpopulation, to come back to the village, young people.

## 2. Conditional sentences
**Type 1 — real / possible condition (future):**
**If + simple present, will + base verb**
“If young people **find** jobs in the village, they **will stay**.”

**Type 2 — unreal / imaginary condition (present):**
**If + simple past, would + base verb**
“If I **lived** in Abidjan, I **would go** to the cinema every week.”
With *be*: **If I were…** (for all persons): “If I **were** the mayor, I **would build** a market.”

**Type 0 — general truth:** If + present, present: “If you **heat** water, it **boils**.”

⚠️ The comma is needed when the *if*-clause comes first. Never put *will* or *would* in the *if*-clause.

## 3. Giving reasons and consequences
- Reason: **because**, **since**, **as**, **because of** + noun.
  “Many young people leave the village **because** there are no jobs.”
- Consequence: **so**, **that's why**, **therefore**, **as a result**.
  “There is no electricity, **so** pupils cannot study at night.”

## 4. Comparing city and village
“Life in the city is **more expensive than** life in the village, but there are **more** opportunities.”
`,
  summaryMd: r`
- Type 1: **If + present, will + verb** (possible).
- Type 2: **If + past, would + verb** (imaginary) ; **If I were…**
- Type 0: If + present, present (general truth).
- ❌ No will/would after **if**.
- Reasons: because, since, because of ; consequences: so, that's why, therefore.
- Vocabulary: traffic jam, pollution, slums / peaceful, farming, solidarity / rural exodus, unemployment.
`,
  questions: [
    { type: 'MCQ', prompt: r`If it rains, we … stay at home.`, choices: ['will', 'would', 'did'], answer: { index: 0 }, explanation: r`Type 1.` },
    { type: 'MCQ', prompt: r`If I … rich, I would build a school.`, choices: ['were', 'am', 'will be'], answer: { index: 0 }, explanation: r`Type 2: If I were.` },
    { type: 'MCQ', prompt: r`If I lived in the city, I … to the cinema.`, choices: ['would go', 'will go', 'go'], answer: { index: 0 }, explanation: r`Type 2.` },
    { type: 'MCQ', prompt: r`If you heat ice, it …`, choices: ['melts', 'would melt', 'melted'], answer: { index: 0 }, explanation: r`Type 0: general truth.` },
    { type: 'MCQ', prompt: r`Which sentence is correct?`, choices: ['If he will come, I will be happy.', 'If he comes, I will be happy.'], answer: { index: 1 }, explanation: r`No will after if.` },
    { type: 'MCQ', prompt: r`Young people leave the village … there are no jobs.`, choices: ['because', 'so', 'but'], answer: { index: 0 }, explanation: r`Reason.` },
    { type: 'MCQ', prompt: r`There is no light, … pupils cannot study at night.`, choices: ['so', 'because', 'although'], answer: { index: 0 }, explanation: r`Consequence.` },
    { type: 'MCQ', prompt: r`“Les embouteillages” in English is:`, choices: ['traffic jams', 'skyscrapers', 'slums'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“L’exode rural” in English is:`, choices: ['rural exodus', 'rural export', 'village trip'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Le chômage” in English is:`, choices: ['unemployment', 'employment', 'pollution'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`The village is quiet … the city is noisy.`, choices: ['whereas', 'because', 'so'], answer: { index: 0 }, explanation: r`Contrast.` },
    { type: 'MCQ', prompt: r`The match was cancelled … the rain.`, choices: ['because of', 'because', 'so'], answer: { index: 0 }, explanation: r`because of + noun.` },
    { type: 'MCQ', prompt: r`If I were the mayor, I … more schools.`, choices: ['would build', 'will build', 'build'], answer: { index: 0 }, explanation: r`Type 2.` },
    { type: 'MCQ', prompt: r`Life in the city is … than life in the village.`, choices: ['more expensive', 'expensiver', 'most expensive'], answer: { index: 0 }, explanation: r`Comparative.` },
    { type: 'OPEN', prompt: r`Complete: “If I lived in a village, …” (one sentence).`, answer: { model: 'If I lived in a village, I would help my parents on the farm.', keywords: ['would'] }, explanation: r`Type 2 → would + verb.` },
  ],
  assessment: {
    title: 'Devoir BEPC — City or village?',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. Identify the type of condition: **possible** (present + will) or **imaginary** (past + would).
2. Justify your ideas with **because** and show results with **so**.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Bakary left his village near Odienné three years ago. He thought life in Abidjan would be easy. But in the city, he could not find a good job, rents were very high and he spent hours in traffic jams. Now he sells phone credit in Adjamé. ‘If I had known, I would have stayed in my village and modernised my father's farm,’ he says. Last month, he decided to go back home with a project to raise chickens.”`, prompt: r`1. Where does Bakary come from?`, type: 'MCQ', choices: ['A village near Odienné', 'Adjamé'], answer: { index: 0 }, points: 2, correction: r`First sentence.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. Give one difficulty he faced in Abidjan.`, type: 'MCQ', choices: ['High rents', 'Too many jobs'], answer: { index: 0 }, points: 2, correction: r`“rents were very high”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. What is his new project?`, type: 'MCQ', choices: ['Raising chickens', 'Selling phones'], answer: { index: 0 }, points: 2, correction: r`Last sentence.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`1. If the government builds roads, farmers … sell their products easily.`, type: 'MCQ', choices: ['will', 'would'], answer: { index: 0 }, points: 2, correction: r`Type 1.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. If I … a farmer, I would grow cocoa.`, type: 'MCQ', choices: ['were', 'am'], answer: { index: 0 }, points: 2, correction: r`Type 2.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. Many people go to the city … they want to find work.`, type: 'MCQ', choices: ['because', 'so'], answer: { index: 0 }, points: 2, correction: r`Reason.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. The village has no hospital, … sick people travel far.`, type: 'MCQ', choices: ['so', 'because'], answer: { index: 0 }, points: 2, correction: r`Consequence.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Where would you prefer to live: in a city or in a village? Write 6 to 8 lines giving reasons and using at least two conditional sentences.`, type: 'OPEN', answer: { model: 'Choice + reasons + conditional sentences' }, points: 6, correction: r`Clear choice and reasons *(2 pts)* ; two correct conditionals *(2 pts)* ; linking words and spelling *(2 pts)*.` },
    ],
  },
};

export const humanRights: SeedChapter = {
  subject: 'ANG',
  order: 6,
  title: 'Human rights — Rights, duties and modals of obligation',
  minutes: 660,
  officialRef: `${REF}, thème 6 : Human rights (my rights, my duties, tolerance)`,
  objectives: [
    'Talk about citizens’ rights and duties and about tolerance',
    'Express obligation, prohibition, absence of obligation and advice (must, have to, mustn’t, don’t have to, should)',
  ],
  courseMd: r`
> **Situation.** On the school notice board: “Every pupil **has the right** to education. Every pupil **must** respect others. Pupils **mustn't** fight in the schoolyard.”

## 1. Vocabulary
**Rights:** the right to life, to education, to health, to freedom of speech (expression), to vote, to justice, equality, dignity, the Universal Declaration of Human Rights (1948).
**Duties:** to respect the law, to pay taxes, to protect public property, to vote, to defend one's country, to respect others.
**Tolerance:** to accept differences, religion, ethnic group, discrimination, prejudice, peace, to live together, to forgive.

## 2. Modals of obligation and advice
| Meaning | Form | Example |
|---|---|---|
| Strong obligation (rule, speaker's authority) | **must** + base verb | “You **must** respect the law.” |
| External obligation | **have to / has to** | “Citizens **have to** pay taxes.” |
| Prohibition | **mustn't** (must not) | “You **mustn't** cheat during exams.” |
| No obligation | **don't have to / doesn't have to** | “You **don't have to** wear a tie at school.” |
| Advice | **should / shouldn't** | “You **should** listen to others.” |
| Permission | **can / may** | “You **can** express your opinion.” |

- **must** has no past: use **had to** → “Yesterday, we **had to** clean the classroom.”
- Questions: “**Must** I…?” / “**Do** I **have to**…?”

⚠️ *mustn't* (interdit) ≠ *don't have to* (pas obligatoire).

## 3. Rights and duties go together
“I **have the right to** go to school, but I **must** work hard and respect my teachers.”
“We **should** be tolerant: we **mustn't** insult people because of their religion or ethnic group.”
`,
  summaryMd: r`
- **must**: obligation ; **have to**: external obligation ; past: **had to**.
- **mustn't**: prohibition ≠ **don't have to**: no obligation.
- **should**: advice ; **can / may**: permission.
- Modal + **base verb** (no “to” after must, should, can).
- Vocabulary: right to education / health / vote, duty, tolerance, discrimination, dignity.
`,
  questions: [
    { type: 'MCQ', prompt: r`You … respect the law.`, choices: ['must', 'mustn’t', 'don’t have to'], answer: { index: 0 }, explanation: r`Obligation.` },
    { type: 'MCQ', prompt: r`You … cheat during the exam.`, choices: ['mustn’t', 'don’t have to', 'should'], answer: { index: 0 }, explanation: r`Prohibition.` },
    { type: 'MCQ', prompt: r`It's Sunday: you … go to school.`, choices: ['don’t have to', 'mustn’t'], answer: { index: 0 }, explanation: r`No obligation.` },
    { type: 'MCQ', prompt: r`You look tired; you … rest.`, choices: ['should', 'mustn’t'], answer: { index: 0 }, explanation: r`Advice.` },
    { type: 'MCQ', prompt: r`Yesterday, we … clean the classroom.`, choices: ['had to', 'must', 'musted'], answer: { index: 0 }, explanation: r`Past of must → had to.` },
    { type: 'MCQ', prompt: r`She … pay taxes.`, choices: ['has to', 'have to', 'must to'], answer: { index: 0 }, explanation: r`3rd person: has to.` },
    { type: 'MCQ', prompt: r`Which is correct?`, choices: ['You must to come.', 'You must come.'], answer: { index: 1 }, explanation: r`must + base verb.` },
    { type: 'MCQ', prompt: r`“Le droit de vote” in English is:`, choices: ['the right to vote', 'the right of voting tax'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“La liberté d’expression” in English is:`, choices: ['freedom of speech', 'free speaking right'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`The Universal Declaration of Human Rights was adopted in:`, choices: ['1948', '1960'], answer: { index: 0 }, explanation: r`10 December 1948.` },
    { type: 'MCQ', prompt: r`A duty of a citizen is:`, choices: ['to respect the law', 'to destroy public property'], answer: { index: 0 }, explanation: r`Duty.` },
    { type: 'MCQ', prompt: r`Tolerance means:`, choices: ['accepting differences', 'hating others'], answer: { index: 0 }, explanation: r`Definition.` },
    { type: 'MCQ', prompt: r`… I wear a uniform? — Yes, you must.`, choices: ['Must', 'Should', 'Did'], answer: { index: 0 }, explanation: r`Question with must.` },
    { type: 'MCQ', prompt: r`You … express your opinion freely (permission).`, choices: ['can', 'mustn’t'], answer: { index: 0 }, explanation: r`Permission.` },
    { type: 'OPEN', prompt: r`Write two school rules: one with “must” and one with “mustn't”.`, answer: { model: 'Pupils must arrive on time. Pupils mustn’t fight in the schoolyard.', keywords: ['must', 'mustn’t'] }, explanation: r`Obligation / prohibition.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Human rights',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. Distinguish **mustn't** (forbidden) and **don't have to** (not necessary).
2. After a modal, use the **base verb** without “to”.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “In our school, every pupil has the right to education, whatever his religion or ethnic group. But rights come with duties. Pupils must respect their teachers and classmates. They mustn't damage tables or walls. They don't have to wear jewellery, but they have to wear the school uniform. Last term, the pupils' club organised a ‘tolerance day’: pupils from different regions presented their cultures and shared their dishes.”`, prompt: r`1. Does religion change pupils' right to education?`, type: 'MCQ', choices: ['No', 'Yes'], answer: { index: 0 }, points: 2, correction: r`“whatever his religion”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. What is forbidden?`, type: 'MCQ', choices: ['Damaging tables or walls', 'Wearing the uniform'], answer: { index: 0 }, points: 2, correction: r`“mustn't damage”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. What did the pupils do on the ‘tolerance day’?`, type: 'MCQ', choices: ['They presented their cultures and shared dishes', 'They had exams'], answer: { index: 0 }, points: 2, correction: r`Last sentence.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`1. Drivers … stop at a red light.`, type: 'MCQ', choices: ['must', 'don’t have to'], answer: { index: 0 }, points: 2, correction: r`Obligation.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. You … smoke in hospitals.`, type: 'MCQ', choices: ['mustn’t', 'don’t have to'], answer: { index: 0 }, points: 2, correction: r`Prohibition.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. Last year, my brother … work during the holidays.`, type: 'MCQ', choices: ['had to', 'must'], answer: { index: 0 }, points: 2, correction: r`Past.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. You … be kind to newcomers (advice).`, type: 'MCQ', choices: ['should', 'mustn’t'], answer: { index: 0 }, points: 2, correction: r`Advice.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Write 6 to 8 lines about your rights and duties as a pupil. Use must, have to, mustn't and should.`, type: 'OPEN', answer: { model: 'Text about rights and duties with modals' }, points: 6, correction: r`Rights and duties mentioned *(2 pts)* ; correct modals *(3 pts)* ; spelling *(1 pt)*.` },
    ],
  },
};

export const hygieneHealth: SeedChapter = {
  subject: 'ANG',
  order: 7,
  title: 'Hygiene and health — The passive voice and giving advice',
  minutes: 660,
  officialRef: `${REF}, thème 7 : Hygiene and health (endemic diseases, hygiene at school, HIV-free generation)`,
  objectives: [
    'Talk about diseases, symptoms and prevention',
    'Use the passive voice (present and past)',
    'Give advice and recommendations about hygiene',
  ],
  courseMd: r`
> **Situation.** A health worker visits the school: “Malaria **is transmitted** by mosquitoes. Every year, millions of people **are infected**. You **should** sleep under a mosquito net.”

## 1. Vocabulary
**Diseases:** malaria, cholera, typhoid fever, tuberculosis, HIV / AIDS, an epidemic, a pandemic, endemic (always present in a region).
**Symptoms:** fever, headache, cough, diarrhoea, vomiting, tiredness, to feel sick.
**Prevention and care:** mosquito net, vaccine, to vaccinate, to wash one's hands with soap, clean water, rubbish bin, toilets, a health centre, a nurse, a treatment, a test, a condom, abstinence.

## 2. The passive voice
We use the passive when the **action** (or the person who receives it) is more important than **who** does it.
**Form:** **be** (at the right tense) + **past participle**
| Active | Passive |
|---|---|
| Mosquitoes **transmit** malaria. | Malaria **is transmitted** by mosquitoes. |
| The nurse **vaccinated** the children. | The children **were vaccinated** by the nurse. |
| They **will build** a health centre. | A health centre **will be built**. |
The agent is introduced by **by** (and often omitted).
Irregular past participles: *give → given, take → taken, spread → spread, find → found, catch → caught, build → built*.

## 3. Giving advice and recommendations
- **should / shouldn't + base verb**: “You **should** wash your hands before eating.”
- **had better** (strong advice): “You **'d better** see a doctor.”
- **Imperative**: “**Boil** the water. **Don't** drink dirty water.”
- **It is important / necessary to…**: “It **is important to** get tested for HIV.”

## 4. An HIV-free generation
“HIV **can be prevented**. Young people **should** get tested; mothers **are encouraged** to follow treatment so that babies **are born** HIV-free. People living with HIV **must not be** discriminated against.”
`,
  summaryMd: r`
- Passive: **be + past participle** (+ by + agent).
- Present: is/are transmitted ; past: was/were vaccinated ; future: will be built ; modal: can be prevented.
- Advice: **should**, **had better**, imperative, **It is important to…**
- Vocabulary: malaria, cholera, epidemic, fever, cough, mosquito net, vaccine, clean water, get tested.
`,
  questions: [
    { type: 'MCQ', prompt: r`Malaria … by mosquitoes.`, choices: ['is transmitted', 'transmits', 'is transmit'], answer: { index: 0 }, explanation: r`Present passive.` },
    { type: 'MCQ', prompt: r`The children … vaccinated last week.`, choices: ['were', 'are', 'was'], answer: { index: 0 }, explanation: r`Past passive plural.` },
    { type: 'MCQ', prompt: r`A new hospital will … next year.`, choices: ['be built', 'build', 'be build'], answer: { index: 0 }, explanation: r`Future passive.` },
    { type: 'MCQ', prompt: r`HIV can … prevented.`, choices: ['be', 'being', 'been'], answer: { index: 0 }, explanation: r`Modal passive.` },
    { type: 'MCQ', prompt: r`Active: “The nurse treats the patients.” Passive:`, choices: ['The patients are treated by the nurse.', 'The patients treat the nurse.'], answer: { index: 0 }, explanation: r`Object becomes subject.` },
    { type: 'MCQ', prompt: r`You … wash your hands before eating.`, choices: ['should', 'shouldn’t'], answer: { index: 0 }, explanation: r`Advice.` },
    { type: 'MCQ', prompt: r`You have a high fever. You'd better … a doctor.`, choices: ['see', 'to see', 'seeing'], answer: { index: 0 }, explanation: r`had better + base verb.` },
    { type: 'MCQ', prompt: r`The past participle of “catch” is:`, choices: ['caught', 'catched', 'cought'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`“La moustiquaire” in English is:`, choices: ['mosquito net', 'mosquito house'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“La toux” in English is:`, choices: ['cough', 'fever', 'headache'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`An endemic disease is:`, choices: ['always present in a region', 'only in the past'], answer: { index: 0 }, explanation: r`Definition.` },
    { type: 'MCQ', prompt: r`Cholera is often caused by:`, choices: ['dirty water', 'clean air'], answer: { index: 0 }, explanation: r`Waterborne disease.` },
    { type: 'MCQ', prompt: r`“…” is an imperative giving advice:`, choices: ['Boil the water.', 'The water boiled.'], answer: { index: 0 }, explanation: r`Imperative.` },
    { type: 'MCQ', prompt: r`Rubbish … in the bin, not in the street.`, choices: ['should be put', 'should put'], answer: { index: 0 }, explanation: r`Passive with should.` },
    { type: 'OPEN', prompt: r`Give three pieces of advice to prevent malaria.`, answer: { model: 'You should sleep under a mosquito net. You should remove stagnant water. You should see a nurse if you have a fever.', keywords: ['should', 'mosquito net'] }, explanation: r`Advice with should.` },
  ],
  assessment: {
    title: 'Devoir BEPC — Hygiene and health',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. Passive = **be** (right tense) + **past participle**.
2. Give advice with **should** + base verb, or the imperative.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Last month, several cases of cholera were reported in a village near Bouaké. The disease was spread by dirty water from a well. Health workers were sent to the village. The well was disinfected and the population was taught to boil water and to wash their hands with soap. Thanks to these measures, the epidemic was stopped in two weeks.”`, prompt: r`1. How was the disease spread?`, type: 'MCQ', choices: ['By dirty water from a well', 'By mosquitoes'], answer: { index: 0 }, points: 2, correction: r`“spread by dirty water”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. What were people taught?`, type: 'MCQ', choices: ['To boil water and wash their hands', 'To leave the village'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. How long did it take to stop the epidemic?`, type: 'MCQ', choices: ['Two weeks', 'Two months'], answer: { index: 0 }, points: 2, correction: r`“in two weeks”.` },
      { section: 'Part B — Grammar (8 pts)', sectionIntro: r`Choose the passive form.`, prompt: r`1. The doctor examined the patient. →`, type: 'MCQ', choices: ['The patient was examined by the doctor.', 'The patient is examined by the doctor.'], answer: { index: 0 }, points: 2, correction: r`Past passive.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. People use mosquito nets. →`, type: 'MCQ', choices: ['Mosquito nets are used.', 'Mosquito nets were used.'], answer: { index: 0 }, points: 2, correction: r`Present passive.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. They will vaccinate all the pupils. →`, type: 'MCQ', choices: ['All the pupils will be vaccinated.', 'All the pupils will vaccinate.'], answer: { index: 0 }, points: 2, correction: r`Future passive.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. You … drink water from the river (advice).`, type: 'MCQ', choices: ['shouldn’t', 'should'], answer: { index: 0 }, points: 2, correction: r`Negative advice.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`Write a short poster text (6 to 8 lines) for your school to promote hygiene. Use the imperative, should and at least one passive sentence.`, type: 'OPEN', answer: { model: 'Poster with advice and passive form' }, points: 6, correction: r`Relevant advice *(2 pts)* ; imperative and should *(2 pts)* ; one correct passive *(1 pt)* ; spelling *(1 pt)*.` },
    ],
  },
};

export const icts: SeedChapter = {
  subject: 'ANG',
  order: 8,
  title: 'Information and Communication Technologies — Reported speech and the present perfect',
  minutes: 660,
  officialRef: `${REF}, thème 8 : ICTs (the computer, the cell phone, the magic of the Internet)`,
  objectives: [
    'Describe the computer, the mobile phone and the Internet, and their uses',
    'Use the present perfect (ever, never, already, yet, since, for)',
    'Report statements and questions (reported speech)',
  ],
  courseMd: r`
> **Situation.** Mariam says: “I **have** just **sent** you my homework by email.” Her teacher tells the class: “Mariam **said that** she **had** just **sent** her homework.”

## 1. Vocabulary
**Computer:** screen, keyboard, mouse, laptop, to type, to save, to print, a file, software, an app.
**Mobile phone:** to call, to text (send an SMS), to charge the battery, a charger, a SIM card, phone credit, mobile money.
**Internet:** to go online, to browse, a website, to download, to upload, an email, a password, social networks, Wi-Fi, a search engine, cyberbullying, fake news.

## 2. The present perfect
**Form:** **have / has + past participle**
Uses:
- an experience (no precise time): “**Have** you **ever used** a computer?” — “I **have never sent** an email.”
- a recent action with a result now: “I **have** just **downloaded** the app.” ; “She **has already finished**.” ; “**Have** you **done** it **yet**?”
- an action that started in the past and continues: “I **have had** this phone **for** two years / **since** 2024.”
⚠️ With a precise past time (yesterday, last week), use the **simple past**: “I **bought** it **yesterday**.”
**for** + duration (for two years) ; **since** + starting point (since 2024, since Monday).

## 3. Reported speech
When reporting what someone said with **said** / **told** (past), the tenses usually move **one step back**:
| Direct speech | Reported speech |
|---|---|
| present: “I **like** the Internet.” | past: He said (that) he **liked** the Internet. |
| present perfect: “I **have finished**.” | past perfect: She said she **had finished**. |
| will: “I **will** call you.” | would: He said he **would** call me. |
| can: “I **can** type fast.” | could: She said she **could** type fast. |
Pronouns and time words change: *I → he/she, today → that day, tomorrow → the next day, here → there*.
- **say** (that)… / **tell** + person (that)…: “He **told me** that…”
- Reported questions: “Do you have Wi-Fi?” → She **asked if** I **had** Wi-Fi. — “Where is the charger?” → He **asked where** the charger **was**.
- Reported orders: “Switch off your phone!” → The teacher **told us to switch off** our phones.
`,
  summaryMd: r`
- Present perfect: **have/has + past participle** ; ever, never, just, already, yet ; **for** (duration) / **since** (starting point).
- Precise past time → **simple past**.
- Reported speech: present → past ; present perfect → past perfect ; will → would ; can → could ; I → he/she ; tomorrow → the next day.
- Questions: asked **if** / asked **where** + statement order ; orders: told + person + **to** + verb.
- Vocabulary: keyboard, screen, to download, password, website, social networks, fake news, cyberbullying.
`,
  questions: [
    { type: 'MCQ', prompt: r`I … just … the app.`, choices: ['have / downloaded', 'has / downloaded', 'have / download'], answer: { index: 0 }, explanation: r`have + past participle.` },
    { type: 'MCQ', prompt: r`… you ever … an email?`, choices: ['Have / sent', 'Did / sent', 'Has / send'], answer: { index: 0 }, explanation: r`Experience.` },
    { type: 'MCQ', prompt: r`I have had this phone … two years.`, choices: ['for', 'since'], answer: { index: 0 }, explanation: r`Duration.` },
    { type: 'MCQ', prompt: r`I have had this phone … 2024.`, choices: ['since', 'for'], answer: { index: 0 }, explanation: r`Starting point.` },
    { type: 'MCQ', prompt: r`I … this laptop yesterday.`, choices: ['bought', 'have bought'], answer: { index: 0 }, explanation: r`Precise past time → simple past.` },
    { type: 'MCQ', prompt: r`“I like the Internet.” → He said that he … the Internet.`, choices: ['liked', 'likes', 'will like'], answer: { index: 0 }, explanation: r`Present → past.` },
    { type: 'MCQ', prompt: r`“I will call you.” → She said she … call me.`, choices: ['would', 'will', 'can'], answer: { index: 0 }, explanation: r`will → would.` },
    { type: 'MCQ', prompt: r`“I can type fast.” → He said he … type fast.`, choices: ['could', 'can', 'would'], answer: { index: 0 }, explanation: r`can → could.` },
    { type: 'MCQ', prompt: r`“Do you have Wi-Fi?” → She asked … I had Wi-Fi.`, choices: ['if', 'that', 'what'], answer: { index: 0 }, explanation: r`Yes/no question → if.` },
    { type: 'MCQ', prompt: r`“Switch off your phones!” → The teacher told us … our phones.`, choices: ['to switch off', 'switch off', 'switching off'], answer: { index: 0 }, explanation: r`told + person + to + verb.` },
    { type: 'MCQ', prompt: r`“Télécharger” (vers son appareil) in English is:`, choices: ['to download', 'to upload', 'to type'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Le mot de passe” in English is:`, choices: ['password', 'keyword', 'passport'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'MCQ', prompt: r`“Tomorrow” in reported speech becomes:`, choices: ['the next day', 'yesterday', 'today'], answer: { index: 0 }, explanation: r`Time words change.` },
    { type: 'MCQ', prompt: r`Insulting someone repeatedly online is called:`, choices: ['cyberbullying', 'browsing', 'uploading'], answer: { index: 0 }, explanation: r`Vocabulary.` },
    { type: 'OPEN', prompt: r`Report this sentence: Koffi said, “I have lost my charger.”`, answer: { model: 'Koffi said (that) he had lost his charger.', keywords: ['had lost', 'his'] }, explanation: r`Present perfect → past perfect ; my → his.` },
  ],
  assessment: {
    title: 'Devoir BEPC — ICTs',
    durationMin: 60,
    blocksNext: false,
    instructions: r`**Duration: 1 hour · Mark out of 20.**`,
    advice: r`### 🎯 Methodology
1. **for** + duration / **since** + starting point.
2. In reported speech, move the tense **one step back** and change pronouns and time words.`,
    items: [
      { section: 'Part A — Reading (6 pts)', sectionIntro: r`**Text.** “Since the beginning of the school year, our school has had a computer room with twenty laptops connected to the Internet. Pupils have learnt to type, to search for information and to send emails. Our ICT teacher told us that the Internet was like a huge library, but she warned us that some websites spread fake news. She also asked us never to share our passwords.”`, prompt: r`1. How many laptops does the computer room have?`, type: 'MCQ', choices: ['Twenty', 'Two', 'Twelve'], answer: { index: 0 }, points: 2, correction: r`“twenty laptops”.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`2. According to the teacher, the Internet is like…`, type: 'MCQ', choices: ['a huge library', 'a market'], answer: { index: 0 }, points: 2, correction: r`Text.` },
      { section: 'Part A — Reading (6 pts)', prompt: r`3. What must pupils never share?`, type: 'MCQ', choices: ['Their passwords', 'Their laptops'], answer: { index: 0 }, points: 2, correction: r`Last sentence.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`1. She … her phone for three years.`, type: 'MCQ', choices: ['has had', 'had had', 'have'], answer: { index: 0 }, points: 2, correction: r`Present perfect + for.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`2. “I am tired.” → Aya said that she … tired.`, type: 'MCQ', choices: ['was', 'is'], answer: { index: 0 }, points: 2, correction: r`Present → past.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`3. “Where is the mouse?” → He asked where the mouse …`, type: 'MCQ', choices: ['was', 'is it'], answer: { index: 0 }, points: 2, correction: r`Statement order, past.` },
      { section: 'Part B — Grammar (8 pts)', prompt: r`4. Have you finished your homework …?`, type: 'MCQ', choices: ['yet', 'since', 'ago'], answer: { index: 0 }, points: 2, correction: r`Question → yet.` },
      { section: 'Part C — Writing (6 pts)', prompt: r`In 6 to 8 lines, explain the advantages and dangers of the mobile phone for young people. Use the present perfect at least twice.`, type: 'OPEN', answer: { model: 'Advantages, dangers, present perfect' }, points: 6, correction: r`Advantages and dangers *(2 pts)* ; two correct present perfects *(2 pts)* ; organisation and spelling *(2 pts)*.` },
    ],
  },
};
