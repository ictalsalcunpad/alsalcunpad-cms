export default {
  name: 'footer',
  title: 'FOOTER',
  type: 'document',
  fields: [
    {
      name: 'email_ofc',
      title: 'Email Office',
      type: 'email',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'nomor_ketua',
      title: 'Nomor Ketua',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'id_line_sekre',
      title: 'ID Line Sekre',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'ig_link',
      title: 'Instagram Link',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'tiktok_link',
      title: 'TikTok Link',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'x_link',
      title: 'X (Twitter) Link',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'yt_link',
      title: 'YouTube Link',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'fb_link',
      title: 'Facebook Link',
      type: 'url',
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
