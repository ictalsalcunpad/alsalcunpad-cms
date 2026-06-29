export default {
  name: 'local_chapter',
  title: 'ABOUT US - Local Chapter Logo & Link',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Campus Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'university_name',
      title: 'University Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'instagram_url',
      title: 'Instagram URL',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
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
      title: 'university_name',
      subtitle: 'instagram_url',
      media: 'logo',
    },
  },
}
