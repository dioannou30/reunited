import type { Locale } from '../paraglide/runtime'

export type PointIcon = 'document' | 'clock' | 'users'

export type PointLink = '/campaign/sign' | '/issue/family-reunification'

export type HomeImage = { src: string; alt: string }

export type HomeContent = {
  hero: {
    eyebrow: [string, string]
    subtitle: [string, string]
    lede: string
    primaryCta: string
    secondaryCta: string
    image?: HomeImage
  }
  yesToTogether: {
    title: [string, string]
    text: string
    cta: string
    points: { icon: PointIcon; title: string; text: string; link?: PointLink }[]
  }
  quote: {
    lines: string[]
    name: string
    role: string
    linkLabel: string
    image?: HomeImage
  }
  closing: {
    title: string
    text: string
    cta: string
  }
}

export const homeContent: Record<Locale, HomeContent> = {
  el: {
    hero: {
      eyebrow: ['Οικογενειακή επανένωση', 'Παλαιστινίων προσφύγων στην Ελλάδα'],
      subtitle: ['Για να ξανασμίξουν', 'οι οικογένειες'],
      lede: 'Μια καμπάνια για την οικογενειακή επανένωση Παλαιστινίων προσφύγων στην Ελλάδα. Γιατί κανείς δεν πρέπει να μένει πίσω.',
      primaryCta: 'Υπόγραψε την έκκληση',
      secondaryCta: 'Δες την ιστορία μας',
    },
    yesToTogether: {
      title: ['Από το «ναι»', 'στο «μαζί»'],
      text: 'Για παλαιστινιακές οικογένειες προσφύγων στην Ελλάδα, η απάντηση των αρχών ήταν «ναι». Η επανένωση όμως δεν έχει γίνει, γιατί τα αρμόδια υπουργεία δεν κάνουν τα επόμενα βήματα.',
      cta: 'Μάθε περισσότερα',
      points: [
        {
          icon: 'document',
          title: 'Υπάρχει δικαίωμα',
          text: 'Οι αρχές έχουν αναγνωρίσει το δικαίωμα στην οικογενειακή επανένωση.',
        },
        {
          icon: 'clock',
          link: '/campaign/sign',
          title: 'Χρειάζεται 1 λεπτό',
          text: 'Υπόγραψε την έκκληση και στήριξε την καμπάνια.',
        },
        { icon: 'users', title: 'Ανοίγει στην πλατφόρμα', text: 'Η φωνή σου μετράει.' },
      ],
    },
    quote: {
      lines: ['Θέλω μόνο', 'να είμαστε ξανά μαζί,', 'στο ίδιο τραπέζι.'],
      name: 'Λεϊλά (ψευδώνυμο)',
      role: 'μητέρα δύο παιδιών',
      linkLabel: 'Διάβασε τις μαρτυρίες',
    },
    closing: {
      title: 'Βοήθησε να ξαναβρεθούν στο ίδιο τραπέζι.',
      text: 'Οι αρχές έχουν πει «ναι». Με την υπογραφή σου ζητάμε από τα αρμόδια υπουργεία να κάνουν τα επόμενα βήματα.',
      cta: 'Υπόγραψε την έκκληση',
    },
  },
  en: {
    hero: {
      eyebrow: ['Family reunification', 'of Palestinian refugees in Greece'],
      subtitle: ['So that families', 'can be together again'],
      lede: 'A campaign for the family reunification of Palestinian refugees in Greece. Because no one should be left behind.',
      primaryCta: 'Sign the appeal',
      secondaryCta: 'See our story',
    },
    yesToTogether: {
      title: ['From “yes”', 'to “together”'],
      text: 'For Palestinian refugee families in Greece, the authorities said “yes”. The reunion has still not happened, because the responsible ministries are not taking the next steps.',
      cta: 'Learn more',
      points: [
        {
          icon: 'document',
          title: 'The right exists',
          text: 'The authorities have recognised the right to family reunification.',
        },
        {
          icon: 'clock',
          link: '/campaign/sign',
          title: 'It takes 1 minute',
          text: 'Sign the appeal and support the campaign.',
        },
        { icon: 'users', title: 'Opens on the platform', text: 'Your voice counts.' },
      ],
    },
    quote: {
      lines: ['All I want', 'is for us to be together again,', 'at the same table.'],
      name: 'Leila (pseudonym)',
      role: 'mother of two',
      linkLabel: 'Read the testimonies',
    },
    closing: {
      title: 'Help them sit at the same table again.',
      text: 'The authorities have said “yes”. With your signature, we ask the responsible ministries to take the next steps.',
      cta: 'Sign the appeal',
    },
  },
  ar: {
    hero: {
      eyebrow: ['لمّ شمل العائلات', 'للاجئين الفلسطينيين في اليونان'],
      subtitle: ['لكي تجتمع', 'العائلات من جديد'],
      lede: 'حملة من أجل لمّ شمل عائلات اللاجئين الفلسطينيين في اليونان. لأنه لا ينبغي أن يُترك أحد خلفنا.',
      primaryCta: 'وقّع النداء',
      secondaryCta: 'شاهد قصتنا',
    },
    yesToTogether: {
      title: ['من «نعم»', 'إلى «معًا»'],
      text: 'بالنسبة لعائلات اللاجئين الفلسطينيين في اليونان، كان جواب السلطات «نعم». لكن لمّ الشمل لم يتحقق بعد، لأن الوزارات المعنية لا تتخذ الخطوات التالية.',
      cta: 'اعرف المزيد',
      points: [
        { icon: 'document', title: 'الحق موجود', text: 'اعترفت السلطات بالحق في لمّ شمل العائلات.' },
        {
          icon: 'clock',
          link: '/campaign/sign',
          title: 'يستغرق دقيقة واحدة',
          text: 'وقّع النداء وادعم الحملة.',
        },
        { icon: 'users', title: 'يفتح على المنصة', text: 'صوتك مهم.' },
      ],
    },
    quote: {
      lines: ['كل ما أريده', 'أن نكون معًا من جديد،', 'على المائدة نفسها.'],
      name: 'ليلى (اسم مستعار)',
      role: 'أم لطفلين',
      linkLabel: 'اقرأ الشهادات',
    },
    closing: {
      title: 'ساعدهم ليجتمعوا من جديد على المائدة نفسها.',
      text: 'قالت السلطات «نعم». بتوقيعك نطالب الوزارات المعنية باتخاذ الخطوات التالية.',
      cta: 'وقّع النداء',
    },
  },
}
