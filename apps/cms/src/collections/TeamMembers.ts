import type { CollectionConfig } from 'payload'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: { singular: 'Μέλος ομάδας', plural: 'Ομάδα' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'order'],
  },
  defaultSort: 'order',
  fields: [
    { name: 'name', label: 'Όνομα', type: 'text', localized: true, required: true },
    { name: 'role', label: 'Ρόλος', type: 'text', localized: true, required: true },
    {
      name: 'bio',
      label: 'Σύντομο βιογραφικό',
      type: 'textarea',
      localized: true,
      maxLength: 400,
    },
    {
      name: 'photo',
      label: 'Φωτογραφία',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Προαιρετική. Χωρίς φωτογραφία εμφανίζονται τα αρχικά του ονόματος.',
      },
    },
    {
      name: 'order',
      label: 'Σειρά εμφάνισης',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
