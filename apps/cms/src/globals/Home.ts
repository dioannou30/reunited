import type { Field, GlobalConfig } from 'payload'

const text = (name: string, label: string, required = true): Field => ({
  name,
  label,
  type: 'text',
  localized: true,
  required,
})

const textarea = (name: string, label: string, description?: string): Field => ({
  name,
  label,
  type: 'textarea',
  localized: true,
  required: true,
  admin: description ? { description } : undefined,
})

const image = (label: string): Field => ({
  name: 'image',
  label,
  type: 'upload',
  relationTo: 'media',
})

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Αρχική σελίδα',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      label: 'Κεντρική ενότητα',
      type: 'group',
      fields: [
        text('eyebrowLine1', 'Υπέρτιτλος, γραμμή 1'),
        text('eyebrowLine2', 'Υπέρτιτλος, γραμμή 2'),
        text('subtitleLine1', 'Υπότιτλος, γραμμή 1'),
        text('subtitleLine2', 'Υπότιτλος, γραμμή 2 (υπογραμμισμένη)'),
        textarea('lede', 'Εισαγωγικό κείμενο'),
        text('primaryCta', 'Κύριο κουμπί'),
        text('secondaryCta', 'Δεύτερο κουμπί'),
        image('Φωτογραφία'),
      ],
    },
    {
      name: 'yesToTogether',
      label: 'Από το «ναι» στο «μαζί»',
      type: 'group',
      fields: [
        text('titleLine1', 'Τίτλος, γραμμή 1'),
        text('titleLine2', 'Τίτλος, γραμμή 2'),
        textarea('text', 'Κείμενο'),
        text('cta', 'Κουμπί'),
        {
          name: 'points',
          label: 'Σημεία',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          required: true,
          fields: [
            {
              name: 'icon',
              label: 'Εικονίδιο',
              type: 'select',
              required: true,
              options: [
                { label: 'Έγγραφο', value: 'document' },
                { label: 'Ρολόι', value: 'clock' },
                { label: 'Άνθρωποι', value: 'users' },
              ],
            },
            text('title', 'Τίτλος'),
            text('text', 'Κείμενο'),
          ],
        },
      ],
    },
    {
      name: 'quote',
      label: 'Απόσπασμα μαρτυρίας',
      type: 'group',
      fields: [
        textarea('text', 'Απόσπασμα', 'Κάθε γραμμή του κειμένου εμφανίζεται σε δική της σειρά.'),
        text('name', 'Όνομα'),
        text('role', 'Ιδιότητα'),
        text('linkLabel', 'Κείμενο συνδέσμου για αναγνώστες οθόνης'),
        image('Εικονογράφηση'),
      ],
    },
  ],
}
