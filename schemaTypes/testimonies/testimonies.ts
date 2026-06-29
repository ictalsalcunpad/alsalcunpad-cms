export default {
  name: 'testimonies',
  title: 'HOME - Testimonies (What they said about us)',
  type: 'document',
  fields: [
    {
      name: 'nama_orang',
      title: 'Nama Orang',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Akun Instagram (contoh: @ricolubis)',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'testimoni',
      title: 'Testimoni',
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
