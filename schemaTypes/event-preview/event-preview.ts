export default {
  name: 'event_preview',
  title: 'EVENT - Program Preview & Event',
  type: 'document',
  fields: [
    {
      name: 'event_image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'event_title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'event_description',
      title: 'Event Description',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'created_at',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
