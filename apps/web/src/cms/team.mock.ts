import type { Locale } from '../paraglide/runtime'
import type { TeamMember } from './team'

const people: Record<Locale, [string, string][]> = {
  el: [
    ['Μαρία Λορέμ', 'Συντονισμός καμπάνιας'],
    ['Αχμάντ Ίψουμ', 'Επαφή με τις οικογένειες'],
    ['Ελένη Ντόλορ', 'Νομική υποστήριξη'],
    ['Σαμίρ Άμετ', 'Διερμηνεία αραβικών'],
    ['Νίκος Σιτ', 'Οργάνωση δράσεων'],
    ['Λέιλα Κονσέκ', 'Γραφιστικά και επικοινωνία'],
  ],
  en: [
    ['Maria Lorem', 'Campaign coordination'],
    ['Ahmad Ipsum', 'Contact with the families'],
    ['Eleni Dolor', 'Legal support'],
    ['Samir Amet', 'Arabic interpreting'],
    ['Nikos Sit', 'Organising actions'],
    ['Leila Consec', 'Design and communication'],
  ],
  ar: [
    ['ماريا لوريم', 'تنسيق الحملة'],
    ['أحمد إيبسوم', 'التواصل مع العائلات'],
    ['إليني دولور', 'الدعم القانوني'],
    ['سمير أميت', 'الترجمة الفورية للعربية'],
    ['نيكوس سيت', 'تنظيم الأنشطة'],
    ['ليلى كونسيك', 'التصميم والتواصل'],
  ],
}

const bio: Record<Locale, string> = {
  el: 'Λορεμ ιψουμ δολορ σιτ αμετ, ει μελ ελιτ ομνιυμ, νο παρτεμ λεγενδος σεα.',
  en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  ar: 'لوريم ايبسوم دولار سيت أميت، كونسيكتيتور أدايبا يسكينج أليايت.',
}

/** Fictional members shown while the CMS is not connected, so the design can be previewed. */
export function mockTeamMembers(locale: Locale): TeamMember[] {
  return people[locale].map(([name, role], index) => ({
    id: `mock-${index}`,
    name,
    role,
    bio: bio[locale],
  }))
}
