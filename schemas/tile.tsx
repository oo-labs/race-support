import React from 'react';
import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'tile',
  title: 'UI Tile',
  type: 'document',
  fields: [
    defineField({ name: 'title',  type: 'string', title: 'Title' }),
    defineField({ name: 'sprite', type: 'image',  title: 'Sprite Sheet' }),
    defineField({ name: 'x',      type: 'number', title: 'X Coordinate (px)' }),
    defineField({ name: 'y',      type: 'number', title: 'Y Coordinate (px)' }),
    defineField({ name: 'width',  type: 'number', title: 'Width (px)' }),
    defineField({ name: 'height', type: 'number', title: 'Height (px)' }),
  ],
  preview: {
    select: {
      title: 'title',
      spriteUrl: 'sprite.asset.url',
      x: 'x', y: 'y', width: 'width', height: 'height'
    },
    prepare({title, spriteUrl, x, y, width, height}) {
      const style: React.CSSProperties = {
        objectFit: 'none',
        objectPosition: `-${x}px -${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      };
      return {
        title,
        media: () => <img src={spriteUrl} style={style} alt={title}/>
      };
    }
  }
});