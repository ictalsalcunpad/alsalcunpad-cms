export default {
    name: 'writing_by_edev',
    title: 'PUBLICATION - Writing by Edev',
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
            validation: (Rule:{required: () => any}) => Rule.required(),
        },
        {
            name: 'article_content',
            title: 'Article Content',
            type: 'text',
            validation: (Rule:{required: () => any}) => Rule.required(),
        },
        {
            name: 'link_drive',
            title: 'Link Drive',
            type: 'url',
            validation: (Rule: {required: () => any}) => Rule.required(),
        },
        {
            name: 'created_at',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
                        },
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
    ]
}