export default {
  name: 'director_greeting',
  title: 'ABOUT US - Director Greeting & Image',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Director Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'greeting',
      title: 'Greeting',
      type: 'text',
      rows: 24,
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'director_image',
      title: 'Director Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'created_at',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'period',
      media: 'director_image',
    },
  },
}
