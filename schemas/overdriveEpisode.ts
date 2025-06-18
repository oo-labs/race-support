export default {
  name: 'overdriveEpisode',
  title: 'Overdrive Episode',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'videoUrl', type: 'url', title: 'Video URL' },
    { name: 'thumbnail', type: 'image' },
    { name: 'summary', type: 'text' },
    { name: 'releaseDate', type: 'datetime' }
  ]
}