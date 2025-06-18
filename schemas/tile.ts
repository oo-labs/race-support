import { defineType } from 'sanity'
import React from 'react'

export default defineType({
  name: 'uiTile',
  title: 'UI Tile',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'link',
      title: 'Destination URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'group',
      title: 'Menu Group',
      type: 'string',
      options: {
        list: [
          { title: 'Race Support', value: 'race-support' },
          { title: 'Campaign', value: 'campaign' },
          { title: 'Overdrive', value: 'overdrive' },
          { title: 'Admin', value: 'admin' }
        ],
        layout: 'dropdown'
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'x',
      title: 'Sprite X Position',
      type: 'number',
      validation: (Rule) => Rule.min(0)
    },
    {
      name: 'y',
      title: 'Sprite Y Position',
      type: 'number',
      validation: (Rule) => Rule.min(0)
    },
    {
      name: 'width',
      title: 'Sprite Width',
      type: 'number',
      validation: (Rule) => Rule.min(1)
    },
    {
      name: 'height',
      title: 'Sprite Height',
      type: 'number',
      validation: (Rule) => Rule.min(1)
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer(),
      description: 'Controls the order this tile appears in the menu.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      x: 'x',
      y: 'y',
      width: 'width',
      height: 'height',
      group: 'group'
    },
    prepare(selection) {
      const { title, x, y, width, height, group } = selection
      const spriteURLMap = {
        'race-support': '/static/race-support.svg',
        'overdrive': '/static/sprites/overdrive-menu.svg',
        'campaign': '/static/sprites/campaign.svg',
        'admin': '/static/sprites/admin.svg'
      }

      return {
        title,
        media: () =>
          React.createElement('div', {
            style: {
              width: `${(width || 0) / 2}px`,
              height: `${(height || 0) / 2}px`,
              backgroundImage: `url(${spriteURLMap[group] || spriteURLMap['race-support']})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `-${x || 0}px -${y || 0}px`,
              backgroundSize: '1464px auto',
              transform: 'scale(0.5)',
              transformOrigin: 'top left',
              border: '1px solid rgba(255,255,255,0.1)',
              margin: '4px',
            }
          })
      }
    }
  }
})