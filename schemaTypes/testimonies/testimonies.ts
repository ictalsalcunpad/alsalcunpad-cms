export default {
  name: 'event_recap',
  title: 'HOME - Event Recap',
  type: 'document',
  fields: [
    {
      name: 'recap_name',
      title: 'Event Recap Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'recap_image',
      type: 'image',
      options:{
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
}


