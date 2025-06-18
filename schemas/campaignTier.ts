export default {
  name: 'campaignTier',
  title: 'Race Support Tier',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'price', type: 'number', title: 'Price ($)' },
    { name: 'description', type: 'text', title: 'Description' },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: { list: ['live', 'upcoming', 'sold out'] }
    },
    { name: 'image', type: 'image', title: 'Image' }
  ]
}