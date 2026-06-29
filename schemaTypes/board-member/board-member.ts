const categoryOptions = [
  {title: 'Board of Director', value: 'board-of-director'},
  {title: 'Internal', value: 'internal'},
  {title: 'External', value: 'external'},
  {title: 'Academic', value: 'academic'},
  {title: 'Financial', value: 'financial'},
  {
    title: 'Information, Communication and Technology',
    value: 'ict',
  },
]

const positionOptions = [
  {title: 'Board of Director - Director', value: 'director'},
  {
    title: 'Board of Director - Vice Director of External',
    value: 'vice-director-external',
  },
  {
    title: 'Board of Director - Vice Director of Internal',
    value: 'vice-director-internal',
  },
  {
    title: 'Board of Director - Vice Director of Academic Activities',
    value: 'vice-director-academic-activities',
  },
  {title: 'Board of Director - Secretary', value: 'secretary'},
  {title: 'Board of Director - Treasurer', value: 'treasurer'},
  {title: 'Internal/External/Academic - Head', value: 'head'},
  {title: 'Internal - ALSA Development', value: 'alsa-development'},
  {title: 'Internal - Domestic Affair', value: 'domestic-affair'},
  {title: 'Internal - Fun and Gathering', value: 'fun-and-gathering'},
  {title: 'External - ALSA Visit', value: 'alsa-visit'},
  {title: 'External - Alumni Affairs', value: 'alumni-affairs'},
  {title: 'External - Foreign Affairs', value: 'foreign-affairs'},
  {title: 'External - Social Activities', value: 'social-activities'},
  {title: 'Academic - Law Development', value: 'law-development'},
  {title: 'Academic - English Development', value: 'english-development'},
  {title: 'Academic - Seminar and Workshop', value: 'seminar-and-workshop'},
  {title: 'Financial/ICT - Head and Vice Head', value: 'head-and-vice-head'},
  {title: 'Financial - Funding', value: 'funding'},
  {title: 'Financial - Entrepreneurship', value: 'entrepreneurship'},
  {title: 'ICT - Creative', value: 'creative'},
  {title: 'ICT - Networking Development', value: 'networking-development'},
]

const allowedPositionsByCategory: Record<string, string[]> = {
  'board-of-director': [
    'director',
    'vice-director-external',
    'vice-director-internal',
    'vice-director-academic-activities',
    'secretary',
    'treasurer',
  ],
  internal: ['head', 'alsa-development', 'domestic-affair', 'fun-and-gathering'],
  external: ['head', 'alsa-visit', 'alumni-affairs', 'foreign-affairs', 'social-activities'],
  academic: ['head', 'law-development', 'english-development', 'seminar-and-workshop'],
  financial: ['head-and-vice-head', 'funding', 'entrepreneurship'],
  ict: ['head-and-vice-head', 'creative', 'networking-development'],
}

export default {
  name: 'board_member',
  title: 'BOARD',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Member Name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Member Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'category_key',
      title: 'Category',
      type: 'string',
      options: {
        list: categoryOptions,
        layout: 'dropdown',
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'position_key',
      title: 'Position',
      type: 'string',
      description: 'Choose the fixed board position this member belongs to.',
      options: {
        list: positionOptions,
        layout: 'dropdown',
      },
      validation: (Rule: {
        required: () => {
          custom: (
            callback: (position: string | undefined, context: {document?: {category_key?: string}}) => true | string,
          ) => any
        }
      }) =>
        Rule.required().custom(function (
          position: string | undefined,
          context: {document?: {category_key?: string}},
        ) {
          const category = context.document?.category_key

          if (!position || !category) return true

          return allowedPositionsByCategory[category]?.includes(position)
            ? true
            : 'This position is not available for the selected category.'
        }),
    },
    {
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'Example: 2026-2027',
    },
    {
      name: 'is_current',
      title: 'Show on Current Board Page',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
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
      subtitle: 'position_key',
      media: 'photo',
    },
  },
}
