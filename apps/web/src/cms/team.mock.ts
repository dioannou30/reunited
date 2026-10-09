import type { Locale } from '../paraglide/runtime'
import type { TeamMember } from './team'

const people: Record<Locale, [string, string, string][]> = {
  el: [
    [
      'Φρόντο Μπάγκινς',
      'Κομιστής του Δαχτυλιδιού',
      'Δεν ήξερε τον δρόμο, αλλά σηκώθηκε πρώτος. Συντονίζει την αποστολή από το Σάιρ ως το Όρος του Χαμού.',
    ],
    [
      'Σάμγουαϊζ Γκάμτζι',
      'Κηπουρός και στήριγμα',
      'Κουβαλάει τα σκεύη, τις πατάτες και, όταν χρειαστεί, τον Φρόντο. Χωρίς αυτόν κανείς δεν θα έφτανε.',
    ],
    [
      'Γκάνταλφ ο Γκρίζος',
      'Σύμβουλος, πάντα στην ώρα του',
      'Δεν αργεί ποτέ ούτε έρχεται νωρίς. Φτάνει ακριβώς όταν το σκοπεύει.',
    ],
    [
      'Άραγκορν',
      'Ιχνηλάτης του Βορρά',
      'Ξέρει κάθε μονοπάτι της Μέσης Γης και μιλά τις γλώσσες των λαών της. Υπεύθυνος για τις διαδρομές.',
    ],
    [
      'Λέγκολας',
      'Ξωτικό του Μυρκγουντ',
      'Βλέπει μακρύτερα από όλους και φροντίζει να μη χάνεται κανείς από τα μάτια μας.',
    ],
    [
      'Γκίμλι',
      'Νάνος της Ερεμπόρ',
      'Μετρά τα πάντα και διαφωνεί με τον Λέγκολας σε όλα, εκτός από το ότι κανείς δεν μένει πίσω.',
    ],
  ],
  en: [
    [
      'Frodo Baggins',
      'Ring-bearer',
      'He did not know the way, but he stood up first. Coordinates the quest from the Shire to Mount Doom.',
    ],
    [
      'Samwise Gamgee',
      'Gardener and mainstay',
      'Carries the pans, the potatoes and, when needed, Frodo. Without him no one would make it.',
    ],
    [
      'Gandalf the Grey',
      'Adviser, never late',
      'He is never late, nor is he early. He arrives precisely when he means to.',
    ],
    [
      'Aragorn',
      'Ranger of the North',
      'Knows every path in Middle-earth and speaks the tongues of its peoples. In charge of routes.',
    ],
    [
      'Legolas',
      'Elf of Mirkwood',
      'Sees further than anyone and makes sure no one slips out of sight.',
    ],
    [
      'Gimli',
      'Dwarf of Erebor',
      'Counts everything and disagrees with Legolas on all of it, except that no one is left behind.',
    ],
  ],
  ar: [
    [
      'فرودو باغينز',
      'حامل الخاتم',
      'لم يكن يعرف الطريق لكنه نهض أولاً. ينسّق المهمة من الشاير حتى جبل الهلاك.',
    ],
    [
      'سام غامجي',
      'البستاني والسند',
      'يحمل القدور والبطاطا، وحين يلزم يحمل فرودو. لولاه لما وصل أحد.',
    ],
    [
      'غاندالف الرمادي',
      'المستشار الذي لا يتأخر',
      'لا يتأخر أبدًا ولا يأتي باكرًا. يصل تمامًا حين ينوي ذلك.',
    ],
    ['أراغورن', 'جوّال الشمال', 'يعرف كل دروب الأرض الوسطى ويتكلم لغات شعوبها. مسؤول عن المسارات.'],
    ['ليغولاس', 'جنّي ميركوود', 'يرى أبعد من الجميع ويحرص ألّا يغيب أحد عن الأنظار.'],
    ['غيملي', 'قزم إريبور', 'يحصي كل شيء ويخالف ليغولاس في كل شيء، إلا في أن أحدًا لا يُترك خلفنا.'],
  ],
}

/** Fictional members shown while the CMS is not connected, so the design can be previewed. */
export function mockTeamMembers(locale: Locale): TeamMember[] {
  return people[locale].map(([name, role, bio], index) => ({
    id: `mock-${index}`,
    name,
    role,
    bio,
  }))
}
