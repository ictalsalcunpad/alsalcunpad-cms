export default {
  name: 'board_preview',
  title: 'HOME - Board Preview',
  type: 'document',
  fields: [
    {
      name: 'background_image',
      title: 'Background Image',
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
