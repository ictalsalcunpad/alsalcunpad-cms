export default {
  name: 'partners_preview',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'partner_name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'partners_logo_image',
      title: 'Partners Logo Image',
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
}
