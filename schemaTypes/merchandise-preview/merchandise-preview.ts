export default {
  name: 'merchandise_preview',
  title: 'HOME - Merchandise Preview',
  type: 'document',
  fields: [
    {
      name: 'merchandise_type',
      title: 'Merchandise Type',
      type: 'string',
      options: {
        list: [
          {title: 'Apparel', value: 'apparel'},
          {title: 'Headwear', value: 'headwear'},
          {title: 'Accessories', value: 'accessories'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'merchandise_name',
      title: 'Merchandise Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'merchandise_image',
      title: 'Merchandise Image',
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
