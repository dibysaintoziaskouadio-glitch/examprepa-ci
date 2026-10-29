import { SeedChapter } from '../types';

const r = String.raw;
const REF = 'Programme d’Espagnol 3e (DPFC) — progression nationale 2026-2027';

const devoirESP = (title: string, items: SeedChapter['assessment']['items'], advice: string) => ({
  title: `Devoir BEPC — ${title}`,
  durationMin: 60,
  blocksNext: false,
  instructions: r`**Duración: 1 hora · Nota sobre 20.** Lee atentamente el texto y contesta.`,
  advice,
  items,
});

export const mundoHispanico: SeedChapter = {
  subject: 'ESP',
  order: 1,
  title: 'La découverte du monde hispanique — ser, estar, hay',
  minutes: 360,
  isFree: true,
  officialRef: `${REF}, leçon 1 : présenter l’Espagne, l’Amérique hispanique et la Guinée équatoriale`,
  objectives: [
    'Présenter l’Espagne, l’Amérique hispanique et la Guinée équatoriale',
    'Employer « hay », « ser » (identifier) et « estar » (situer)',
    'Conjuguer « ser » et « estar » au présent',
  ],
  courseMd: r`
> **Situación.** El profesor muestra un mapa: «**Hay** una veintena de países donde el español **es** lengua oficial. España **está** en Europa, la mayoría **está** en América y uno **está** en África: Guinea Ecuatorial.»

## 1. El mundo hispánico (le monde hispanique)
- **España** es una **monarquía** parlamentaria: el **rey** (Felipe VI) es el jefe del Estado. La capital es **Madrid**. Se habla el **castellano** (español) y también el catalán, el gallego y el vasco (euskera).
- **Hispanoamérica**: unos **dieciocho países** de América hablan español (México, Cuba, Colombia, Venezuela, Perú, Chile, Argentina…). También se hablan **lenguas autóctonas** (indígenas): el **quechua**, el **guaraní**, el **náhuatl**, el **aimara**.
- **Guinea Ecuatorial** es el **único país de África** donde el español es **lengua oficial** (con el francés y el portugués). Su capital es **Malabo**; es independiente desde **1968**.

## 2. «Hay» = il y a
**Hay** es invariable: «**Hay** un rey en España.» — «**Hay** muchos países hispanohablantes.»

## 3. Ser y estar (au présent)
| | ser | estar |
|---|---|---|
| yo | soy | estoy |
| tú | eres | estás |
| él / ella / usted | es | está |
| nosotros/as | somos | estamos |
| vosotros/as | sois | estáis |
| ellos / ellas / ustedes | son | están |

- **Ser** sirve para **identificar**, dar la **nacionalidad**, el **origen**, la **profesión**, una característica permanente: «Madrid **es** la capital de España.» — «**Soy** marfileño.»
- **Estar** sirve para **situar** (localizar) y expresar un **estado** pasajero: «Malabo **está** en una isla.» — «**Estoy** cansado.»

## 4. Expresiones para situar
*al norte de, al sur de, al este de, al oeste de, en el centro de, cerca de, lejos de, entre… y…*
«España **está al sur de** Francia.» — «Guinea Ecuatorial **está entre** Camerún y Gabón.»

## 5. Vocabulario
un país, una isla, una lengua oficial, un idioma, el rey, la reina, una monarquía, una república, un habitante, autóctono/a, hispanohablante.
`,
  summaryMd: r`
- **Hay** = il y a (invariable).
- **Ser** (soy, eres, es, somos, sois, son) : identité, nationalité, origine, profession.
- **Estar** (estoy, estás, está, estamos, estáis, están) : localisation, état passager.
- Situer : al norte de, al sur de, cerca de, lejos de, entre… y…
- España : monarquía, rey, Madrid ; Hispanoamérica : ~18 países, lenguas autóctonas (quechua, guaraní) ; Guinea Ecuatorial : único país africano hispanohablante, capital Malabo.
`,
  questions: [
    { type: 'MCQ', prompt: r`Madrid … la capital de España.`, choices: ['es', 'está', 'hay'], answer: { index: 0 }, explanation: r`Identificar → ser.` },
    { type: 'MCQ', prompt: r`España … en Europa.`, choices: ['está', 'es', 'hay'], answer: { index: 0 }, explanation: r`Situar → estar.` },
    { type: 'MCQ', prompt: r`… muchos países hispanohablantes en América.`, choices: ['Hay', 'Son', 'Están'], answer: { index: 0 }, explanation: r`Hay = il y a.` },
    { type: 'MCQ', prompt: r`Yo … marfileño.`, choices: ['soy', 'estoy', 'es'], answer: { index: 0 }, explanation: r`Nacionalidad → ser.` },
    { type: 'MCQ', prompt: r`Nosotros … cansados hoy.`, choices: ['estamos', 'somos'], answer: { index: 0 }, explanation: r`Estado pasajero → estar.` },
    { type: 'MCQ', prompt: r`El único país de África donde el español es lengua oficial es:`, choices: ['Guinea Ecuatorial', 'Marruecos', 'Senegal'], answer: { index: 0 }, explanation: r`Capital Malabo.` },
    { type: 'MCQ', prompt: r`La capital de Guinea Ecuatorial es:`, choices: ['Malabo', 'Madrid', 'Lima'], answer: { index: 0 }, explanation: r`En la isla de Bioko.` },
    { type: 'MCQ', prompt: r`España es:`, choices: ['una monarquía', 'una república'], answer: { index: 0 }, explanation: r`Monarquía parlamentaria.` },
    { type: 'MCQ', prompt: r`Una lengua autóctona de América es:`, choices: ['el quechua', 'el inglés', 'el árabe'], answer: { index: 0 }, explanation: r`Lengua indígena.` },
    { type: 'MCQ', prompt: r`Tú … de Abidjan.`, choices: ['eres', 'estás', 'es'], answer: { index: 0 }, explanation: r`Origen → ser.` },
    { type: 'MCQ', prompt: r`Ellos … en Madrid ahora.`, choices: ['están', 'son'], answer: { index: 0 }, explanation: r`Localización.` },
    { type: 'MCQ', prompt: r`«Il y a» se dice en español:`, choices: ['hay', 'es', 'tiene'], answer: { index: 0 }, explanation: r`Hay.` },
    { type: 'MCQ', prompt: r`España está … de Francia.`, choices: ['al sur', 'al norte'], answer: { index: 0 }, explanation: r`Geografía.` },
    { type: 'MCQ', prompt: r`Guinea Ecuatorial es independiente desde:`, choices: ['1968', '1960', '1492'], answer: { index: 0 }, explanation: r`Independencia en 1968.` },
    { type: 'OPEN', prompt: r`Presenta Côte d'Ivoire en dos frases con «ser», «estar» y «hay».`, answer: { model: 'Côte d’Ivoire es un país de África del Oeste. Está al lado de Ghana. Hay muchas plantaciones de cacao.', keywords: ['es', 'está', 'hay'] }, explanation: r`Identificar, situar, existir.` },
  ],
  assessment: devoirESP(
    'Le monde hispanique',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «Me llamo Teodoro y soy ecuatoguineano. Vivo en Malabo, la capital de Guinea Ecuatorial. Mi país está en África central, entre Camerún y Gabón. En mi país hay tres lenguas oficiales: el español, el francés y el portugués. En la escuela, estudio en español. Mi primo vive en Madrid; está muy contento porque es estudiante en la universidad.»`, prompt: r`1. ¿De dónde es Teodoro?`, type: 'MCQ', choices: ['De Guinea Ecuatorial', 'De España'], answer: { index: 0 }, points: 2, correction: r`«soy ecuatoguineano».` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Cuántas lenguas oficiales hay en su país?`, type: 'MCQ', choices: ['Tres', 'Una'], answer: { index: 0 }, points: 2, correction: r`Español, francés, portugués.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Dónde vive su primo?`, type: 'MCQ', choices: ['En Madrid', 'En Malabo'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. Lima … la capital de Perú.`, type: 'MCQ', choices: ['es', 'está'], answer: { index: 0 }, points: 2, correction: r`Identificar.` },
      { section: 'Gramática (8 pts)', prompt: r`2. Malabo … en una isla.`, type: 'MCQ', choices: ['está', 'es'], answer: { index: 0 }, points: 2, correction: r`Situar.` },
      { section: 'Gramática (8 pts)', prompt: r`3. En España … un rey.`, type: 'MCQ', choices: ['hay', 'es'], answer: { index: 0 }, points: 2, correction: r`Hay.` },
      { section: 'Gramática (8 pts)', prompt: r`4. Vosotros … estudiantes.`, type: 'MCQ', choices: ['sois', 'estáis'], answer: { index: 0 }, points: 2, correction: r`Ser, vosotros.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Presenta en 5 a 6 líneas un país hispanohablante (situación, capital, lengua). Usa ser, estar y hay.`, type: 'OPEN', answer: { model: 'Presentación con ser, estar, hay' }, points: 6, correction: r`Contenido *(2 pts)* ; uso correcto de ser/estar/hay *(3 pts)* ; ortografía *(1 pt)*.` },
    ],
    r`### 🎯 Consejos
1. **Ser** para identificar ; **estar** para situar o un estado.
2. **Hay** no cambia nunca.`,
  ),
};

export const civilidades: SeedChapter = {
  subject: 'ESP',
  order: 2,
  title: 'La présentation des civilités — se présenter, remercier, féliciter',
  minutes: 720,
  officialRef: `${REF}, leçon 2 : se présenter, prendre congé, remercier, féliciter`,
  objectives: [
    'Se présenter et prendre congé',
    'Remercier et répondre à un remerciement ; féliciter',
    'Conjuguer au présent « llamarse, despedirse, agradecer, felicitar, merecer »',
  ],
  courseMd: r`
> **Situación.** En una agencia de viajes: «Buenos días, **me llamo** Aya Kouassi. — Encantado, señorita. ¿En qué puedo ayudarla?» … «**Muchas gracias** por su ayuda. — **De nada**. ¡Buen viaje! — **Adiós**, hasta luego.»

## 1. Presentarse y despedirse
- Saludar: *¡Hola! Buenos días (mañana), buenas tardes, buenas noches.*
- Presentarse: *Me llamo… / Soy… / Tengo quince años. / Vivo en…*
- Presentar a alguien: *Te presento a mi amigo Koffi. — Encantado/a. Mucho gusto.*
- Despedirse: *Adiós, hasta luego, hasta mañana, hasta pronto, nos vemos.*

## 2. Agradecer y contestar
- *Gracias. Muchas gracias. Te agradezco (mucho)… Le agradezco su ayuda.*
- Contestar: *De nada. No hay de qué. A usted.*

## 3. Felicitar
- *¡Felicidades! ¡Enhorabuena! (por un éxito) ¡Feliz cumpleaños! ¡Feliz Año Nuevo! Te felicito por tu éxito. ¡Te lo mereces!*

## 4. Conjugación (presente de indicativo)
| | llamarse | despedirse (e→i) | agradecer (-zco) | merecer (-zco) |
|---|---|---|---|---|
| yo | me llamo | me despido | agradezco | merezco |
| tú | te llamas | te despides | agradeces | mereces |
| él/ella/usted | se llama | se despide | agradece | merece |
| nosotros | nos llamamos | nos despedimos | agradecemos | merecemos |
| vosotros | os llamáis | os despedís | agradecéis | merecéis |
| ellos/ustedes | se llaman | se despiden | agradecen | merecen |

*Felicitar* es regular: felicito, felicitas, felicita, felicitamos, felicitáis, felicitan.

## 5. Tú y usted
- **Tú** (tutoiement) con amigos y familia.
- **Usted** (vouvoiement de politesse) con personas mayores o desconocidas: el verbo va en **3ª persona**: «¿Cómo **se llama usted**?»
`,
  summaryMd: r`
- Saludos : hola, buenos días, buenas tardes, buenas noches.
- Presentarse : me llamo…, soy…, tengo… años. Despedirse : adiós, hasta luego, hasta mañana.
- Agradecer : gracias, te/le agradezco ; responder : de nada, no hay de qué.
- Felicitar : ¡Felicidades!, ¡Enhorabuena!, te felicito.
- Presente : me llamo, me despido, agradezco, merezco (-zco).
- **Usted** + verbo en 3ª persona.
`,
  questions: [
    { type: 'MCQ', prompt: r`Yo … Fanta.`, choices: ['me llamo', 'se llama', 'te llamas'], answer: { index: 0 }, explanation: r`Llamarse, yo.` },
    { type: 'MCQ', prompt: r`¿Cómo … usted?`, choices: ['se llama', 'te llamas'], answer: { index: 0 }, explanation: r`Usted → 3ª persona.` },
    { type: 'MCQ', prompt: r`Yo te … tu ayuda.`, choices: ['agradezco', 'agradeco', 'agradezo'], answer: { index: 0 }, explanation: r`-zco.` },
    { type: 'MCQ', prompt: r`Para responder a «Gracias», se dice:`, choices: ['De nada', 'Adiós', 'Felicidades'], answer: { index: 0 }, explanation: r`Respuesta.` },
    { type: 'MCQ', prompt: r`Para felicitar por un éxito, se dice:`, choices: ['¡Enhorabuena!', '¡Hasta luego!'], answer: { index: 0 }, explanation: r`Felicitación.` },
    { type: 'MCQ', prompt: r`«Bonsoir» se dice:`, choices: ['Buenas noches', 'Buenos días'], answer: { index: 0 }, explanation: r`Saludo de la noche.` },
    { type: 'MCQ', prompt: r`Yo me … de mis amigos.`, choices: ['despido', 'despedo', 'despide'], answer: { index: 0 }, explanation: r`e → i.` },
    { type: 'MCQ', prompt: r`Tú … el premio.`, choices: ['mereces', 'merezco'], answer: { index: 0 }, explanation: r`Tú.` },
    { type: 'MCQ', prompt: r`«Je te présente mon ami» :`, choices: ['Te presento a mi amigo', 'Me presento mi amigo'], answer: { index: 0 }, explanation: r`Presentar a alguien.` },
    { type: 'MCQ', prompt: r`Nosotros … a la profesora.`, choices: ['felicitamos', 'felicitan'], answer: { index: 0 }, explanation: r`Regular.` },
    { type: 'MCQ', prompt: r`«À demain» se dice:`, choices: ['Hasta mañana', 'Hasta luego', 'Buenos días'], answer: { index: 0 }, explanation: r`Despedida.` },
    { type: 'MCQ', prompt: r`Con una persona mayor desconocida usamos:`, choices: ['usted', 'tú'], answer: { index: 0 }, explanation: r`Cortesía.` },
    { type: 'MCQ', prompt: r`«¡Feliz cumpleaños!» significa:`, choices: ['Joyeux anniversaire !', 'Bonne année !'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'MCQ', prompt: r`Ellos se … Koffi y Yao.`, choices: ['llaman', 'llamamos'], answer: { index: 0 }, explanation: r`Ellos.` },
    { type: 'OPEN', prompt: r`Preséntate en tres frases (nombre, edad, ciudad).`, answer: { model: 'Me llamo Aya. Tengo quince años. Vivo en Bouaké.', keywords: ['Me llamo', 'Tengo', 'Vivo'] }, explanation: r`Presentación.` },
  ],
  assessment: devoirESP(
    'Les civilités',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «— Buenas tardes, señor. Me llamo Awa Traoré. Quiero un billete para Accra. — Buenas tardes, señorita. Aquí tiene su billete. — Muchas gracias, señor, le agradezco mucho. — De nada. ¡Buen viaje! — Adiós, hasta pronto.»`, prompt: r`1. ¿Cómo se llama la chica?`, type: 'MCQ', choices: ['Awa Traoré', 'Accra'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Qué quiere?`, type: 'MCQ', choices: ['Un billete para Accra', 'Un libro'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Qué contesta el señor a «Muchas gracias»?`, type: 'MCQ', choices: ['De nada', 'Hasta mañana'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. ¿Cómo te …? — Me llamo Koffi.`, type: 'MCQ', choices: ['llamas', 'llama'], answer: { index: 0 }, points: 2, correction: r`Tú.` },
      { section: 'Gramática (8 pts)', prompt: r`2. Yo … mucho tu regalo.`, type: 'MCQ', choices: ['agradezco', 'agradece'], answer: { index: 0 }, points: 2, correction: r`Yo.` },
      { section: 'Gramática (8 pts)', prompt: r`3. Vosotros os … de la familia.`, type: 'MCQ', choices: ['despedís', 'despiden'], answer: { index: 0 }, points: 2, correction: r`Vosotros.` },
      { section: 'Gramática (8 pts)', prompt: r`4. Ella … el primer premio.`, type: 'MCQ', choices: ['merece', 'merezco'], answer: { index: 0 }, points: 2, correction: r`Ella.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Tu amigo ha aprobado el BEPC. Escríbele una nota de 5 líneas para felicitarle y agradecerle su ayuda durante el año.`, type: 'OPEN', answer: { model: 'Nota con felicitación y agradecimiento' }, points: 6, correction: r`Saludo y despedida *(1 pt)* ; felicitación *(2 pts)* ; agradecimiento *(2 pts)* ; ortografía *(1 pt)*.` },
    ],
    r`### 🎯 Consejos
1. Aprende los verbos en **-zco** (agradezco, merezco).
2. Con **usted**, el verbo va en 3ª persona.`,
  ),
};

export const intercambioInformacion: SeedChapter = {
  subject: 'ESP',
  order: 3,
  title: 'L’échange d’information — demander, décrire, raconter',
  minutes: 900,
  officialRef: `${REF}, leçon 3 : demander / donner une information, décrire, raconter un fait`,
  objectives: [
    'Poser des questions et demander / dire l’heure',
    'Décrire une personne',
    'Raconter un fait au passé (pretérito indefinido des verbes réguliers)',
  ],
  courseMd: r`
> **Situación.** En el hospital: «—¿Qué te **duele**? —Me duele la cabeza. —¿Desde cuándo? —Desde ayer. —¿**Qué hora es**? —**Son las tres**.»

## 1. Preguntar y contestar
Palabras interrogativas (con tilde): **¿qué?, ¿quién?, ¿dónde?, ¿cuándo?, ¿cómo?, ¿cuánto/a/os/as?, ¿por qué?** (respuesta: *porque*).
«¿**Dónde** vives? — Vivo en Yamoussoukro.» — «¿**Por qué** estás triste? — **Porque** estoy enfermo.»

## 2. Pedir y decir la hora
- ¿Qué hora es? — **Es la una.** / **Son las dos.**
- Son las tres **y cuarto** (3h15), **y media** (3h30), las cuatro **menos cuarto** (3h45), las cinco **y diez**.
- ¿A qué hora…? — **A las** ocho.

## 3. Describir a una persona
- Físico: *alto/a, bajo/a, delgado/a, gordo/a, joven, moreno/a, rubio/a; tiene el pelo corto / los ojos negros.*
- Carácter: *simpático/a, alegre, serio/a, trabajador/a, tímido/a.*
- **Ser** para el físico y el carácter, **llevar** para la ropa: «Laura **es** alta y alegre; **lleva** un vestido azul.»

## 4. Presente de indicativo
- Regulares: habl**o**, habl**as**… ; com**o**, com**es**… ; viv**o**, viv**es**…
- **Diptongación** (e → ie, o → ue) excepto *nosotros* y *vosotros*: quer**er** → qu**ie**ro, p**o**der → p**ue**do, d**o**rmir → d**ue**rmo, j**u**gar → j**ue**go.
- *Tener*: tengo, tienes, tiene, tenemos, tenéis, tienen. *Vestirse* (e→i): me visto, te vistes… *Ponerse*: me pongo, te pones…
- *Doler* (como gustar): «Me **duele** la cabeza», «Me **duelen** los pies».

## 5. Narrar: el pretérito indefinido (verbos regulares)
| | hablar | comer | vivir |
|---|---|---|---|
| yo | hablé | comí | viví |
| tú | hablaste | comiste | viviste |
| él/ella | habló | comió | vivió |
| nosotros | hablamos | comimos | vivimos |
| vosotros | hablasteis | comisteis | vivisteis |
| ellos | hablaron | comieron | vivieron |
Marcadores: *ayer, anoche, el año pasado, la semana pasada, hace dos días, en 2020*.
Estructura del relato: *primero, luego, después, de repente, por fin*.
«**Ayer**, el koala se **perdió** en el bosque. **Primero**, **caminó** mucho; **luego** **lloró**; **por fin**, un niño lo **encontró**.»
`,
  summaryMd: r`
- Interrogativos : ¿qué? ¿quién? ¿dónde? ¿cuándo? ¿cómo? ¿cuánto? ¿por qué? (porque).
- Hora : es la una / son las dos ; y cuarto, y media, menos cuarto ; ¿a qué hora? — a las…
- Describir : ser + adjetivo ; llevar + ropa.
- Presente : diptongación e→ie, o→ue (no nosotros/vosotros) ; tener ; me duele(n).
- Indefinido regular : -é, -aste, -ó, -amos, -asteis, -aron / -í, -iste, -ió, -imos, -isteis, -ieron.
`,
  questions: [
    { type: 'MCQ', prompt: r`¿… vives? — En Abidjan.`, choices: ['Dónde', 'Quién', 'Cuándo'], answer: { index: 0 }, explanation: r`Lugar.` },
    { type: 'MCQ', prompt: r`¿Por qué no vienes? — … estoy enfermo.`, choices: ['Porque', 'Por qué'], answer: { index: 0 }, explanation: r`Respuesta.` },
    { type: 'MCQ', prompt: r`1h00 se dice:`, choices: ['Es la una', 'Son la una'], answer: { index: 0 }, explanation: r`Singular.` },
    { type: 'MCQ', prompt: r`3h30 se dice:`, choices: ['Son las tres y media', 'Es las tres y media'], answer: { index: 0 }, explanation: r`Plural.` },
    { type: 'MCQ', prompt: r`4h45 se dice:`, choices: ['Son las cinco menos cuarto', 'Son las cuatro menos cuarto'], answer: { index: 0 }, explanation: r`Menos cuarto.` },
    { type: 'MCQ', prompt: r`Yo … ir al cine (querer).`, choices: ['quiero', 'quero'], answer: { index: 0 }, explanation: r`e → ie.` },
    { type: 'MCQ', prompt: r`Nosotros … (poder) venir.`, choices: ['podemos', 'puedemos'], answer: { index: 0 }, explanation: r`Sin diptongo en nosotros.` },
    { type: 'MCQ', prompt: r`Me … los pies.`, choices: ['duelen', 'duele'], answer: { index: 0 }, explanation: r`Plural.` },
    { type: 'MCQ', prompt: r`Ayer yo … (hablar) con mi abuela.`, choices: ['hablé', 'hablo', 'habló'], answer: { index: 0 }, explanation: r`Indefinido, yo.` },
    { type: 'MCQ', prompt: r`El año pasado ellos … (vivir) en Man.`, choices: ['vivieron', 'viven', 'vivió'], answer: { index: 0 }, explanation: r`Indefinido, ellos.` },
    { type: 'MCQ', prompt: r`Anoche tú … (comer) arroz.`, choices: ['comiste', 'comí', 'comes'], answer: { index: 0 }, explanation: r`Indefinido, tú.` },
    { type: 'MCQ', prompt: r`Laura … un vestido azul.`, choices: ['lleva', 'es'], answer: { index: 0 }, explanation: r`Ropa → llevar.` },
    { type: 'MCQ', prompt: r`Yo … quince años.`, choices: ['tengo', 'soy', 'tiene'], answer: { index: 0 }, explanation: r`Edad → tener.` },
    { type: 'MCQ', prompt: r`Un marcador del pasado es:`, choices: ['ayer', 'mañana', 'ahora'], answer: { index: 0 }, explanation: r`Pasado.` },
    { type: 'OPEN', prompt: r`Describe a un amigo en dos frases (físico y carácter).`, answer: { model: 'Mi amigo Yao es alto y delgado. Es simpático y trabajador.', keywords: ['es'] }, explanation: r`Ser + adjetivos.` },
  ],
  assessment: devoirESP(
    'L’échange d’information',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «El sábado pasado, Moussa visitó a su tía en Korhogo. Llegó a las diez y media. Primero, ayudó a su tía en el mercado; luego comieron juntos un buen plato de tô. Por la tarde, Moussa jugó al fútbol con sus primos. Es un chico alto, alegre y muy deportista.»`, prompt: r`1. ¿A quién visitó Moussa?`, type: 'MCQ', choices: ['A su tía', 'A su abuelo'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿A qué hora llegó?`, type: 'MCQ', choices: ['A las diez y media', 'A las doce'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Cómo es Moussa?`, type: 'MCQ', choices: ['Alto, alegre y deportista', 'Bajo y serio'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. Ayer nosotros … (trabajar) mucho.`, type: 'MCQ', choices: ['trabajamos', 'trabajaron'], answer: { index: 0 }, points: 2, correction: r`Indefinido nosotros.` },
      { section: 'Gramática (8 pts)', prompt: r`2. Ella … (dormir) poco.`, type: 'MCQ', choices: ['duerme', 'dorme'], answer: { index: 0 }, points: 2, correction: r`o → ue.` },
      { section: 'Gramática (8 pts)', prompt: r`3. ¿… cuesta el libro?`, type: 'MCQ', choices: ['Cuánto', 'Quién'], answer: { index: 0 }, points: 2, correction: r`Precio.` },
      { section: 'Gramática (8 pts)', prompt: r`4. 7h15: Son las siete …`, type: 'MCQ', choices: ['y cuarto', 'menos cuarto'], answer: { index: 0 }, points: 2, correction: r`Hora.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Cuenta en 5 a 6 líneas lo que hiciste el domingo pasado. Usa el pretérito indefinido y «primero, luego, por fin».`, type: 'OPEN', answer: { model: 'Relato en indefinido con conectores' }, points: 6, correction: r`Relato coherente *(2 pts)* ; indefinido correcto *(3 pts)* ; ortografía *(1 pt)*.` },
    ],
    r`### 🎯 Consejos
1. Los interrogativos llevan **tilde**.
2. Aprende las terminaciones del **indefinido** : hablé, habló ; comí, comió.`,
  ),
};

export const opinion: SeedChapter = {
  subject: 'ESP',
  order: 4,
  title: 'L’expression de l’opinion — opinar, aprobar, desaprobar',
  minutes: 540,
  officialRef: `${REF}, leçon 4 : demander / exprimer une opinion, approuver / désapprouver`,
  objectives: [
    'Demander et exprimer une opinion',
    'Approuver et désapprouver',
    'Conjuguer au présent « hacer, decir, salir, ir, dar »',
  ],
  courseMd: r`
> **Situación.** «—¿**Qué piensas de** las redes sociales? —**Creo que** son útiles, pero **no estoy de acuerdo con** publicar fotos sin permiso.»

## 1. Pedir una opinión
*¿Qué piensas de…? ¿Qué opinas de…? ¿Qué te parece…? ¿Estás de acuerdo con…?*

## 2. Expresar una opinión
*Creo que… / Pienso que… / Me parece que… / En mi opinión… / Para mí…*
«**En mi opinión**, el lenguaje de los jóvenes es divertido.»

## 3. Aprobar y desaprobar
- Aprobar: *Estoy de acuerdo. Tienes razón. Es verdad. ¡Claro! Me parece bien.*
- Desaprobar: *No estoy de acuerdo. No tienes razón. No es verdad. ¡Qué va! Me parece mal.*

## 4. Argumentar
*porque, ya que* (causa) ; *por eso, entonces* (consecuencia) ; *pero, sin embargo* (oposición) ; *primero, además, por fin*.
«**Primero**, Internet es útil **porque** nos informa; **además**, permite estudiar; **sin embargo**, hay que tener cuidado con los peligros.»

## 5. Presente de indicativo (irregulares)
| | hacer | decir | salir | ir | dar |
|---|---|---|---|---|---|
| yo | hago | digo | salgo | voy | doy |
| tú | haces | dices | sales | vas | das |
| él/ella | hace | dice | sale | va | da |
| nosotros | hacemos | decimos | salimos | vamos | damos |
| vosotros | hacéis | decís | salís | vais | dais |
| ellos | hacen | dicen | salen | van | dan |

## 6. Vocabulario
el lenguaje de los jóvenes, la juventud, una red social, publicar, una foto, pedir permiso, un derecho, el respeto, la intimidad (vie privée).
`,
  summaryMd: r`
- Pedir opinión : ¿Qué piensas de…? ¿Qué te parece…?
- Dar opinión : Creo que… Pienso que… En mi opinión…
- Aprobar : Estoy de acuerdo, tienes razón ; desaprobar : no estoy de acuerdo, ¡qué va!
- Conectores : porque, por eso, pero, sin embargo, además.
- Presente : hago, digo, salgo, voy, doy.
`,
  questions: [
    { type: 'MCQ', prompt: r`Para pedir una opinión se dice:`, choices: ['¿Qué piensas de…?', '¿Qué hora es?'], answer: { index: 0 }, explanation: r`Opinión.` },
    { type: 'MCQ', prompt: r`«Je suis d’accord» :`, choices: ['Estoy de acuerdo', 'Soy de acuerdo'], answer: { index: 0 }, explanation: r`Estar de acuerdo.` },
    { type: 'MCQ', prompt: r`«Tu as raison» :`, choices: ['Tienes razón', 'Eres razón'], answer: { index: 0 }, explanation: r`Tener razón.` },
    { type: 'MCQ', prompt: r`Para desaprobar se dice:`, choices: ['¡Qué va!', '¡Claro!'], answer: { index: 0 }, explanation: r`Desacuerdo.` },
    { type: 'MCQ', prompt: r`Yo … mis deberes (hacer).`, choices: ['hago', 'haco', 'hace'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`Yo … la verdad (decir).`, choices: ['digo', 'dico', 'dice'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`Yo … de casa a las siete (salir).`, choices: ['salgo', 'salo'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`Nosotros … al colegio (ir).`, choices: ['vamos', 'imos', 'van'], answer: { index: 0 }, explanation: r`Ir.` },
    { type: 'MCQ', prompt: r`Yo te … un regalo (dar).`, choices: ['doy', 'do', 'da'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`Ellos … que es difícil (decir).`, choices: ['dicen', 'decen'], answer: { index: 0 }, explanation: r`e → i.` },
    { type: 'MCQ', prompt: r`«Cependant» se dice:`, choices: ['sin embargo', 'por eso'], answer: { index: 0 }, explanation: r`Oposición.` },
    { type: 'MCQ', prompt: r`«C’est pourquoi» se dice:`, choices: ['por eso', 'porque'], answer: { index: 0 }, explanation: r`Consecuencia.` },
    { type: 'MCQ', prompt: r`«Publier» se dice:`, choices: ['publicar', 'publiar'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'MCQ', prompt: r`«Me parece bien» expresa:`, choices: ['aprobación', 'desaprobación'], answer: { index: 0 }, explanation: r`Opinión positiva.` },
    { type: 'OPEN', prompt: r`Da tu opinión sobre el uso del teléfono en clase (dos frases).`, answer: { model: 'En mi opinión, el teléfono no es útil en clase porque distrae a los alumnos. Sin embargo, puede servir para buscar palabras.', keywords: ['En mi opinión', 'porque'] }, explanation: r`Opinión + argumento.` },
  ],
  assessment: devoirESP(
    'L’expression de l’opinion',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «Ana quiere publicar en Internet una foto de su clase. Su amiga Lucía le dice: "No estoy de acuerdo. Primero, tienes que pedir permiso a todos. Además, la foto puede circular sin control." Ana responde: "Tienes razón. Voy a preguntar a mis compañeros."»`, prompt: r`1. ¿Qué quiere hacer Ana?`, type: 'MCQ', choices: ['Publicar una foto de su clase', 'Comprar un teléfono'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Está Lucía de acuerdo?`, type: 'MCQ', choices: ['No', 'Sí'], answer: { index: 0 }, points: 2, correction: r`«No estoy de acuerdo».` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Qué decide Ana?`, type: 'MCQ', choices: ['Preguntar a sus compañeros', 'Publicar la foto'], answer: { index: 0 }, points: 2, correction: r`Última frase.` },
      { section: 'Gramática (8 pts)', prompt: r`1. Yo … ejercicio cada día (hacer).`, type: 'MCQ', choices: ['hago', 'hace'], answer: { index: 0 }, points: 2, correction: r`Irregular.` },
      { section: 'Gramática (8 pts)', prompt: r`2. Tú … al mercado (ir).`, type: 'MCQ', choices: ['vas', 'vais'], answer: { index: 0 }, points: 2, correction: r`Tú.` },
      { section: 'Gramática (8 pts)', prompt: r`3. Yo no … con mis amigos esta noche (salir).`, type: 'MCQ', choices: ['salgo', 'sale'], answer: { index: 0 }, points: 2, correction: r`Yo.` },
      { section: 'Gramática (8 pts)', prompt: r`4. «Je pense que c’est vrai» :`, type: 'MCQ', choices: ['Creo que es verdad', 'Creo de es verdad'], answer: { index: 0 }, points: 2, correction: r`Creo que…` },
      { section: 'Expresión escrita (6 pts)', prompt: r`¿Qué piensas de las redes sociales? Escribe 5 a 6 líneas para dar tu opinión con argumentos.`, type: 'OPEN', answer: { model: 'Opinión argumentada con conectores' }, points: 6, correction: r`Opinión clara *(2 pts)* ; argumentos y conectores *(2 pts)* ; lengua correcta *(2 pts)*.` },
    ],
    r`### 🎯 Consejos
1. Empieza con **Creo que / En mi opinión**.
2. Une tus ideas con **porque, además, sin embargo, por eso**.`,
  ),
};

export const gustos: SeedChapter = {
  subject: 'ESP',
  order: 5,
  title: 'L’expression des goûts et des préférences — gustar, preferir',
  minutes: 540,
  officialRef: `${REF}, leçon 5 : demander / exprimer les goûts et les préférences`,
  objectives: [
    'Demander et exprimer ses goûts avec « gustar » et « encantar »',
    'Exprimer ses préférences avec « preferir »',
    'Employer les pronoms personnels compléments (me, te, le, nos, os, les)',
  ],
  courseMd: r`
> **Situación.** «—¿**Te gustan** los perros? —Sí, **me encantan**. Pero **prefiero** los gatos.»

## 1. El verbo gustar
**Gustar** se construye al revés del francés : lo que gusta es el **sujeto**.
| Pronombre | Singular / infinitivo | Plural |
|---|---|---|
| (a mí) **me** | gusta el fútbol / gusta bailar | gustan los perros |
| (a ti) **te** | gusta | gustan |
| (a él/ella/usted) **le** | gusta | gustan |
| (a nosotros) **nos** | gusta | gustan |
| (a vosotros) **os** | gusta | gustan |
| (a ellos/ustedes) **les** | gusta | gustan |
- «**Me gusta** el attiéké.» — «**Nos gustan** las canciones de zouglou.»
- Negación: «**No me gusta** la lluvia.»
- Insistencia: «**A mí** me gusta…, **a ti** no.»
- Respuestas: *A mí también. / A mí tampoco. / A mí sí. / A mí no.*
- Igual: **encantar** (adorer), **interesar**, **molestar** (déranger).

## 2. Preguntar los gustos
*¿Te gusta…? ¿Qué te gusta hacer? ¿Cuál prefieres? ¿Qué prefieres, el fútbol o el baloncesto?*

## 3. Preferir (e → ie)
prefiero, prefieres, prefiere, preferimos, preferís, prefieren.
«**Prefiero** la música africana **a** la música clásica.»

## 4. Graduación
*me encanta > me gusta mucho > me gusta > no me gusta mucho > no me gusta nada.*
«No me gusta **nada** el ruido.»

## 5. Vocabulario
un perro, un gato, entrevistar, una entrevista, el deporte, la música, el baile, la lectura, la cocina, los videojuegos, el fútbol, el baloncesto.
`,
  summaryMd: r`
- **me/te/le/nos/os/les + gusta** (singulier, infinitif) / **gustan** (pluriel).
- encantar, interesar, molestar : même construction.
- A mí también / tampoco / sí / no.
- **Preferir** (e→ie) : prefiero… a…
- Graduation : me encanta > me gusta mucho > no me gusta nada.
`,
  questions: [
    { type: 'MCQ', prompt: r`Me … el fútbol.`, choices: ['gusta', 'gustan', 'gusto'], answer: { index: 0 }, explanation: r`Singular.` },
    { type: 'MCQ', prompt: r`Me … los perros.`, choices: ['gustan', 'gusta'], answer: { index: 0 }, explanation: r`Plural.` },
    { type: 'MCQ', prompt: r`¿Te gusta … ?`, choices: ['bailar', 'bailas'], answer: { index: 0 }, explanation: r`Infinitivo → gusta.` },
    { type: 'MCQ', prompt: r`A nosotros … gusta la música.`, choices: ['nos', 'les'], answer: { index: 0 }, explanation: r`Nosotros → nos.` },
    { type: 'MCQ', prompt: r`A ellos … gustan los videojuegos.`, choices: ['les', 'le'], answer: { index: 0 }, explanation: r`Ellos → les.` },
    { type: 'MCQ', prompt: r`Yo … el arroz al ñame (preferir).`, choices: ['prefiero', 'prefero'], answer: { index: 0 }, explanation: r`e → ie.` },
    { type: 'MCQ', prompt: r`Nosotros … el baloncesto (preferir).`, choices: ['preferimos', 'prefierimos'], answer: { index: 0 }, explanation: r`Sin diptongo.` },
    { type: 'MCQ', prompt: r`—No me gusta la lluvia. —A mí …`, choices: ['tampoco', 'también'], answer: { index: 0 }, explanation: r`Acuerdo negativo.` },
    { type: 'MCQ', prompt: r`—Me gusta leer. —A mí …`, choices: ['también', 'tampoco'], answer: { index: 0 }, explanation: r`Acuerdo positivo.` },
    { type: 'MCQ', prompt: r`«J’adore» se dice:`, choices: ['Me encanta', 'Me molesta'], answer: { index: 0 }, explanation: r`Encantar.` },
    { type: 'MCQ', prompt: r`«Ça me dérange» se dice:`, choices: ['Me molesta', 'Me interesa'], answer: { index: 0 }, explanation: r`Molestar.` },
    { type: 'MCQ', prompt: r`No me gusta … el ruido (pas du tout).`, choices: ['nada', 'nadie'], answer: { index: 0 }, explanation: r`No… nada.` },
    { type: 'MCQ', prompt: r`¿Qué … gusta hacer? (a ti)`, choices: ['te', 'me'], answer: { index: 0 }, explanation: r`A ti → te.` },
    { type: 'MCQ', prompt: r`«Un chien» se dice:`, choices: ['un perro', 'un gato'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'OPEN', prompt: r`Escribe dos cosas que te gustan y una que no te gusta.`, answer: { model: 'Me gusta la música. Me gustan los mangos. No me gusta el ruido.', keywords: ['me gusta', 'me gustan', 'no me gusta'] }, explanation: r`Gusta / gustan.` },
  ],
  assessment: devoirESP(
    'Les goûts et les préférences',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto (entrevista).** «—Carlos, ¿qué te gusta hacer los fines de semana? —Me encanta jugar al fútbol con mis amigos. —¿Y te gusta leer? —No mucho. Prefiero ver películas. —¿Qué tipo de música te gusta? —Me gustan mucho la salsa y el zouglou de Côte d'Ivoire.»`, prompt: r`1. ¿Qué le encanta a Carlos?`, type: 'MCQ', choices: ['Jugar al fútbol', 'Leer'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Qué prefiere a la lectura?`, type: 'MCQ', choices: ['Ver películas', 'Bailar'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Qué música le gusta?`, type: 'MCQ', choices: ['La salsa y el zouglou', 'La música clásica'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. A mi hermana le … los mangos.`, type: 'MCQ', choices: ['gustan', 'gusta'], answer: { index: 0 }, points: 2, correction: r`Plural.` },
      { section: 'Gramática (8 pts)', prompt: r`2. A nosotros … encanta cantar.`, type: 'MCQ', choices: ['nos', 'os'], answer: { index: 0 }, points: 2, correction: r`Nosotros.` },
      { section: 'Gramática (8 pts)', prompt: r`3. Ellas … el té al café (preferir).`, type: 'MCQ', choices: ['prefieren', 'preferen'], answer: { index: 0 }, points: 2, correction: r`e → ie.` },
      { section: 'Gramática (8 pts)', prompt: r`4. —No me gusta el frío. —A mí …`, type: 'MCQ', choices: ['tampoco', 'también'], answer: { index: 0 }, points: 2, correction: r`Negativo.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Preséntate a un amigo español en 5 a 6 líneas hablando de tus gustos y preferencias.`, type: 'OPEN', answer: { model: 'Texto con gustar, encantar, preferir' }, points: 6, correction: r`Contenido *(2 pts)* ; gustar/preferir correctos *(3 pts)* ; ortografía *(1 pt)*.` },
    ],
    r`### 🎯 Consejos
1. **Gusta** con singular o infinitivo, **gustan** con plural.
2. El pronombre cambia según la persona : me, te, le, nos, os, les.`,
  ),
};

export const sentimientos: SeedChapter = {
  subject: 'ESP',
  order: 6,
  title: 'L’expression des sentiments — alegría, tristeza, disculpas',
  minutes: 540,
  officialRef: `${REF}, leçon 6 : exprimer des sentiments, s’excuser, exprimer l’indifférence`,
  objectives: [
    'Exprimer la joie, la tristesse, la peur, la colère',
    'Présenter des excuses et y répondre',
    'Exprimer l’indifférence ; employer « estar + adjectif » et les exclamations',
  ],
  courseMd: r`
> **Situación.** «¡**Qué alegría**! Colombia es un país muy acogedor.» — «**Lo siento**, llego tarde. — **No pasa nada**.» — «¿Playa o montaña? — **Me da igual**.»

## 1. Expresar sentimientos
- **Estar** + adjetivo (estado de ánimo): *estoy contento/a, alegre, triste, enfadado/a, nervioso/a, preocupado/a, cansado/a.*
- **Tener** + nombre: *tengo miedo, tengo vergüenza, tengo ganas de…*
- Exclamaciones: **¡Qué** + adjetivo / nombre**!**: *¡Qué bonito! ¡Qué pena! ¡Qué miedo! ¡Qué alegría!*
- Verbos: *me alegra, me pone triste, me da miedo, me molesta.*

## 2. Pedir disculpas y contestar
- Disculparse: *Perdón. Lo siento (mucho). Perdóname / Perdóneme. Disculpa / Disculpe.*
- Contestar: *No pasa nada. No importa. No te preocupes. Está bien.*

## 3. Expresar la indiferencia
*Me da igual. Me es indiferente. Me da lo mismo. Como quieras.*

## 4. Colombia
País de América del Sur, capital **Bogotá**. Famoso por su **café**, sus **flores**, la **cumbia** y el escritor **Gabriel García Márquez** (premio Nobel de Literatura 1982). Sus habitantes son conocidos por ser **acogedores** y alegres.

## 5. Vocabulario
la alegría, la tristeza, el miedo, la rabia, el humor, la sorpresa, acogedor/a (accueillant), llorar, reír, sonreír, gritar.
`,
  summaryMd: r`
- Sentiments : **estar** + adjectif (contento, triste, enfadado) ; **tener** miedo / vergüenza.
- Exclamations : **¡Qué** + adjectif/nom**!**
- S'excuser : lo siento, perdón, disculpe ; répondre : no pasa nada, no importa.
- Indifférence : me da igual, me da lo mismo.
- Colombia : Bogotá, café, cumbia, García Márquez.
`,
  questions: [
    { type: 'MCQ', prompt: r`Hoy … muy contento.`, choices: ['estoy', 'soy', 'tengo'], answer: { index: 0 }, explanation: r`Estado → estar.` },
    { type: 'MCQ', prompt: r`Tengo … de los perros.`, choices: ['miedo', 'triste'], answer: { index: 0 }, explanation: r`Tener miedo.` },
    { type: 'MCQ', prompt: r`Para disculparse se dice:`, choices: ['Lo siento', 'Me da igual'], answer: { index: 0 }, explanation: r`Disculpa.` },
    { type: 'MCQ', prompt: r`Para responder a una disculpa se dice:`, choices: ['No pasa nada', 'Lo siento'], answer: { index: 0 }, explanation: r`Respuesta.` },
    { type: 'MCQ', prompt: r`Para expresar la indiferencia se dice:`, choices: ['Me da igual', '¡Qué alegría!'], answer: { index: 0 }, explanation: r`Indiferencia.` },
    { type: 'MCQ', prompt: r`¡… bonito es el paisaje!`, choices: ['Qué', 'Cómo'], answer: { index: 0 }, explanation: r`¡Qué + adjetivo!` },
    { type: 'MCQ', prompt: r`«Quel dommage !» se dice:`, choices: ['¡Qué pena!', '¡Qué miedo!'], answer: { index: 0 }, explanation: r`Exclamación.` },
    { type: 'MCQ', prompt: r`La capital de Colombia es:`, choices: ['Bogotá', 'Lima', 'Caracas'], answer: { index: 0 }, explanation: r`Geografía.` },
    { type: 'MCQ', prompt: r`Colombia es famosa por su:`, choices: ['café', 'nieve'], answer: { index: 0 }, explanation: r`Cultura.` },
    { type: 'MCQ', prompt: r`«Accueillant» se dice:`, choices: ['acogedor', 'enfadado'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'MCQ', prompt: r`Ella … enfadada con su hermano.`, choices: ['está', 'es'], answer: { index: 0 }, explanation: r`Estado pasajero.` },
    { type: 'MCQ', prompt: r`«Pleurer» se dice:`, choices: ['llorar', 'reír'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'MCQ', prompt: r`«Disculpe» se usa con:`, choices: ['usted', 'tú'], answer: { index: 0 }, explanation: r`Forma de cortesía.` },
    { type: 'MCQ', prompt: r`Gabriel García Márquez es un escritor:`, choices: ['colombiano', 'español'], answer: { index: 0 }, explanation: r`Premio Nobel 1982.` },
    { type: 'OPEN', prompt: r`Escribe cómo te sientes antes del BEPC (dos frases).`, answer: { model: 'Estoy un poco nervioso, pero estoy contento porque he estudiado mucho. Tengo ganas de aprobar.', keywords: ['estoy', 'tengo'] }, explanation: r`Estar + adjetivo.` },
  ],
  assessment: devoirESP(
    'L’expression des sentiments',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «Sofía es de Bogotá. Hoy está muy triste porque su mejor amiga se va a vivir a otra ciudad. Su amiga le dice: "Lo siento mucho, Sofía, pero te voy a escribir todos los días." Sofía sonríe: "¡Qué buena idea! No te preocupes, estoy mejor."»`, prompt: r`1. ¿De dónde es Sofía?`, type: 'MCQ', choices: ['De Bogotá', 'De Madrid'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Por qué está triste?`, type: 'MCQ', choices: ['Porque su amiga se va', 'Porque está enferma'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Qué promete la amiga?`, type: 'MCQ', choices: ['Escribir todos los días', 'Volver mañana'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. Los alumnos … nerviosos antes del examen.`, type: 'MCQ', choices: ['están', 'son'], answer: { index: 0 }, points: 2, correction: r`Estado.` },
      { section: 'Gramática (8 pts)', prompt: r`2. Yo … miedo de la oscuridad.`, type: 'MCQ', choices: ['tengo', 'estoy'], answer: { index: 0 }, points: 2, correction: r`Tener miedo.` },
      { section: 'Gramática (8 pts)', prompt: r`3. —Perdón por el retraso. —…`, type: 'MCQ', choices: ['No importa', 'Me da miedo'], answer: { index: 0 }, points: 2, correction: r`Respuesta.` },
      { section: 'Gramática (8 pts)', prompt: r`4. ¿Té o café? —…, me gustan los dos.`, type: 'MCQ', choices: ['Me da igual', 'Lo siento'], answer: { index: 0 }, points: 2, correction: r`Indiferencia.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Has olvidado el cumpleaños de tu amigo. Escríbele un mensaje de 5 líneas para pedir disculpas y expresar tus sentimientos.`, type: 'OPEN', answer: { model: 'Mensaje con disculpas y sentimientos' }, points: 6, correction: r`Disculpas *(2 pts)* ; sentimientos (estar, ¡qué…!) *(2 pts)* ; lengua correcta *(2 pts)*.` },
    ],
    r`### 🎯 Consejos
1. **Estar** + adjetivo para los sentimientos pasajeros.
2. Aprende las fórmulas : lo siento, no pasa nada, me da igual.`,
  ),
};

export const orden: SeedChapter = {
  subject: 'ESP',
  order: 7,
  title: 'L’expression de l’ordre — l’impératif, demander de l’aide, conseiller',
  minutes: 540,
  officialRef: `${REF}, leçon 7 : donner un ordre / une instruction, demander de l’aide, donner des conseils`,
  objectives: [
    'Donner un ordre ou une instruction à l’impératif (tú, usted, vosotros)',
    'Demander de l’aide',
    'Donner des conseils (deber, tener que, hay que)',
  ],
  courseMd: r`
> **Situación.** El monitor: «**Cruza** la calle con cuidado. **No corras.** **Hay que** mirar a la izquierda y a la derecha.» — Un turista: «¿**Puede ayudarme**, por favor?»

## 1. El imperativo afirmativo
| | hablar | comer | escribir |
|---|---|---|---|
| tú | habla | come | escribe |
| usted | hable | coma | escriba |
| vosotros | hablad | comed | escribid |
| ustedes | hablen | coman | escriban |
- Irregulares (tú): **ven** (venir), **ten** (tener), **haz** (hacer), **di** (decir), **sal** (salir), **pon** (poner), **ve** (ir), **sé** (ser).
- Con pronombres, se colocan **detrás** y se unen: *¡Siéntate! ¡Dímelo! ¡Ayúdame!*

## 2. El imperativo negativo (prohibición)
**No** + subjuntivo presente: *no hables, no comas, no escribas* ; usted: *no hable*.
«**No tires** basura en la calle.» — «**No corráis** en el pasillo.»

## 3. Pedir ayuda
*¿Puedes ayudarme? ¿Me ayudas, por favor? ¿Podría usted ayudarme? Necesito ayuda. ¡Socorro!* (au secours).

## 4. Dar consejos e instrucciones
- **Deber** + infinitivo: «**Debes** estudiar más.»
- **Tener que** + infinitivo (obligación): «**Tienes que** llegar a las ocho.»
- **Hay que** + infinitivo (impersonal): «**Hay que** respetar el código de la circulación.»
- **Te aconsejo** + infinitivo: «Te aconsejo descansar.»

## 5. La realidad de la ciudad
el ruido, el tráfico, un peatón, el semáforo, cruzar, peligroso/a, el paso de cebra (passage piéton), tener cuidado.
`,
  summaryMd: r`
- Impératif affirmatif : tú **habla/come/escribe** ; usted **hable/coma/escriba** ; vosotros **hablad/comed/escribid**.
- Irréguliers (tú) : ven, ten, haz, di, sal, pon, ve, sé.
- Négatif : **no + subjonctif** (no hables, no comas).
- Pronoms collés à l'impératif affirmatif : ayúdame, siéntate.
- Aide : ¿Puedes ayudarme?, necesito ayuda. Conseils : deber, tener que, **hay que** + infinitif.
`,
  questions: [
    { type: 'MCQ', prompt: r`(tú, hablar) ¡… más alto!`, choices: ['Habla', 'Hable', 'Hablad'], answer: { index: 0 }, explanation: r`Imperativo tú.` },
    { type: 'MCQ', prompt: r`(usted, escribir) … su nombre aquí.`, choices: ['Escriba', 'Escribe'], answer: { index: 0 }, explanation: r`Usted.` },
    { type: 'MCQ', prompt: r`(vosotros, comer) ¡… despacio!`, choices: ['Comed', 'Comen'], answer: { index: 0 }, explanation: r`Vosotros.` },
    { type: 'MCQ', prompt: r`(tú, venir) ¡… aquí!`, choices: ['Ven', 'Viene', 'Vene'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`(tú, hacer) ¡… tus deberes!`, choices: ['Haz', 'Hace', 'Hago'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`(tú, correr) ¡No … en la calle!`, choices: ['corras', 'corre'], answer: { index: 0 }, explanation: r`No + subjuntivo.` },
    { type: 'MCQ', prompt: r`(tú, sentarse) ¡…!`, choices: ['Siéntate', 'Te sienta'], answer: { index: 0 }, explanation: r`Pronombre detrás.` },
    { type: 'MCQ', prompt: r`Para pedir ayuda se dice:`, choices: ['¿Puedes ayudarme?', '¡Qué alegría!'], answer: { index: 0 }, explanation: r`Ayuda.` },
    { type: 'MCQ', prompt: r`«Il faut respecter le code» :`, choices: ['Hay que respetar el código', 'Hay respetar el código'], answer: { index: 0 }, explanation: r`Hay que + inf.` },
    { type: 'MCQ', prompt: r`Tienes … estudiar.`, choices: ['que', 'de'], answer: { index: 0 }, explanation: r`Tener que.` },
    { type: 'MCQ', prompt: r`(tú, decir) ¡… la verdad!`, choices: ['Di', 'Dice'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`(tú, ir) ¡… a la escuela!`, choices: ['Ve', 'Va'], answer: { index: 0 }, explanation: r`Irregular.` },
    { type: 'MCQ', prompt: r`«Le passage piéton» se dice:`, choices: ['el paso de cebra', 'el semáforo'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'MCQ', prompt: r`«Au secours !» se dice:`, choices: ['¡Socorro!', '¡Cuidado!'], answer: { index: 0 }, explanation: r`Vocabulario.` },
    { type: 'OPEN', prompt: r`Da tres consejos a un niño para cruzar la calle.`, answer: { model: 'Mira a la izquierda y a la derecha. Cruza por el paso de cebra. No corras.', keywords: ['mira', 'cruza', 'no corras'] }, explanation: r`Imperativo afirmativo y negativo.` },
  ],
  assessment: devoirESP(
    'L’expression de l’ordre',
    [
      { section: 'Comprensión (6 pts)', sectionIntro: r`**Texto.** «En la escuela de Luis hay una campaña sobre la seguridad vial. La policía da consejos: "Cruzad siempre por el paso de cebra. No juguéis cerca de la carretera. Esperad el semáforo verde. Si veis un accidente, pedid ayuda a un adulto." Luis piensa: "Hay que respetar estas reglas."»`, prompt: r`1. ¿Sobre qué es la campaña?`, type: 'MCQ', choices: ['La seguridad vial', 'La salud'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`2. ¿Dónde hay que cruzar?`, type: 'MCQ', choices: ['Por el paso de cebra', 'Cerca de la carretera'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Comprensión (6 pts)', prompt: r`3. ¿Qué hay que hacer si se ve un accidente?`, type: 'MCQ', choices: ['Pedir ayuda a un adulto', 'Correr'], answer: { index: 0 }, points: 2, correction: r`Texto.` },
      { section: 'Gramática (8 pts)', prompt: r`1. (tú, escuchar) ¡… a tu profesor!`, type: 'MCQ', choices: ['Escucha', 'Escuche'], answer: { index: 0 }, points: 2, correction: r`Tú.` },
      { section: 'Gramática (8 pts)', prompt: r`2. (usted, abrir) … la puerta, por favor.`, type: 'MCQ', choices: ['Abra', 'Abre'], answer: { index: 0 }, points: 2, correction: r`Usted.` },
      { section: 'Gramática (8 pts)', prompt: r`3. (tú, tirar) ¡No … basura!`, type: 'MCQ', choices: ['tires', 'tira'], answer: { index: 0 }, points: 2, correction: r`Negativo.` },
      { section: 'Gramática (8 pts)', prompt: r`4. (tú, poner) ¡… el libro en la mesa!`, type: 'MCQ', choices: ['Pon', 'Pone'], answer: { index: 0 }, points: 2, correction: r`Irregular.` },
      { section: 'Expresión escrita (6 pts)', prompt: r`Escribe 5 a 6 consejos para proteger el medio ambiente en tu barrio. Usa el imperativo (afirmativo y negativo) y «hay que».`, type: 'OPEN', answer: { model: 'Consejos con imperativo y hay que' }, points: 6, correction: r`Pertinencia *(2 pts)* ; imperativos correctos *(3 pts)* ; ortografía *(1 pt)*.` },
    ],
    r`### 🎯 Consejos
1. Imperativo negativo = **no + subjuntivo** (no hables).
2. Memoriza los irregulares : ven, ten, haz, di, sal, pon, ve, sé.`,
  ),
};
