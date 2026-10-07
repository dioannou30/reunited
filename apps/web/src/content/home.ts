import type { Locale } from '@/paraglide/runtime'

export type HomeContent = {
  hero: {
    eyebrow: [string, string]
    subtitle: string
    lede: string
    primaryCta: string
    secondaryCta: string
    imageAlt: string
  }
}

export const homeContent: Record<Locale, HomeContent> = {
  el: {
    hero: {
      eyebrow: ['Οικογενειακή επανένωση', 'Παλαιστινίων προσφύγων στην Ελλάδα'],
      subtitle: 'Για να ξανασμίξουν οι οικογένειες',
      lede: 'Μια καμπάνια για την οικογενειακή επανένωση Παλαιστινίων προσφύγων στην Ελλάδα. Γιατί κανείς δεν πρέπει να μένει πίσω.',
      primaryCta: 'Υπόγραψε την έκκληση',
      secondaryCta: 'Δες την ιστορία μας',
      imageAlt:
        'Το εικαστικό της καμπάνιας: πατέρας, μητέρα και δύο παιδιά ως κομμάτια παζλ σε μαύρο, πράσινο και κόκκινο.',
    },
  },
  en: {
    hero: {
      eyebrow: ['Family reunification', 'of Palestinian refugees in Greece'],
      subtitle: 'So that families can be together again',
      lede: 'A campaign for the family reunification of Palestinian refugees in Greece. Because no one should be left behind.',
      primaryCta: 'Sign the appeal',
      secondaryCta: 'See our story',
      imageAlt:
        'The campaign artwork: a father, mother and two children as puzzle pieces in black, green and red.',
    },
  },
  ar: {
    hero: {
      eyebrow: ['لمّ شمل العائلات', 'للاجئين الفلسطينيين في اليونان'],
      subtitle: 'لكي تجتمع العائلات من جديد',
      lede: 'حملة من أجل لمّ شمل عائلات اللاجئين الفلسطينيين في اليونان. لأنه لا ينبغي أن يُترك أحد خلفنا.',
      primaryCta: 'وقّع النداء',
      secondaryCta: 'شاهد قصتنا',
      imageAlt: 'العمل الفني للحملة: أب وأم وطفلان كقطع أحجية باللون الأسود والأخضر والأحمر.',
    },
  },
}
