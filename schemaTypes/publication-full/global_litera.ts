const date_object:Date = new Date()
const current_year:number = date_object.getFullYear()
const next_year:number = current_year + 1;
const previous_year: number = current_year - 1;
const two_years_ago: number = current_year - 2;
const three_years_ago: number = current_year - 3;

export default {
  name: 'global_litera',
  title: 'PUBLICATION - Global Litera',
  type: 'document',
  fields: [
    {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule:{required: () => any}) => Rule.required(),
      },
    {
      name: 'poster_image',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'link_drive',
      title: 'Link Drive',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'periode',
      title: 'Periode',
      type: 'string',
      options: {
        list: [
          {title: `${three_years_ago}/${two_years_ago}`, value:`${three_years_ago}/${two_years_ago}`},
          {title: `${two_years_ago}/${previous_year}`, value:  `${two_years_ago}/${previous_year}`},
          {title: `${previous_year}/${current_year}`, value:  `${previous_year}/${current_year}`},
          {title: `${current_year}/${next_year}`, value:  `${current_year}/${next_year}`},
        ],
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
