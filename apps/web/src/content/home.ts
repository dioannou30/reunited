import type { Locale } from '@/paraglide/runtime'

export type HomeContent = {
  hero: {
    eyebrow: [string, string]
    subtitle: [string, string]
    lede: string
    primaryCta: string
    secondaryCta: string
  }
  yesToTogether: {
    title: [string, string]
    text: string
    cta: string
    points: { title: string; text: string }[]
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
          title: 'Υπάρχει δικαίωμα',
          text: 'Οι αρχές έχουν αναγνωρίσει το δικαίωμα στην οικογενειακή επανένωση.',
        },
        { title: 'Χρειάζεται 1 λεπτό', text: 'Υπόγραψε την έκκληση και στήριξε την καμπάνια.' },
        { title: 'Ανοίγει στην πλατφόρμα', text: 'Η φωνή σου μετράει.' },
      ],
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
          title: 'The right exists',
          text: 'The authorities have recognised the right to family reunification.',
        },
        { title: 'It takes 1 minute', text: 'Sign the appeal and support the campaign.' },
        { title: 'Opens on the platform', text: 'Your voice counts.' },
      ],
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
        { title: 'الحق موجود', text: 'اعترفت السلطات بالحق في لمّ شمل العائلات.' },
        { title: 'يستغرق دقيقة واحدة', text: 'وقّع النداء وادعم الحملة.' },
        { title: 'يفتح على المنصة', text: 'صوتك مهم.' },
      ],
    },
  },
}
