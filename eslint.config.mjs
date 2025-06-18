import React from 'react'

type Props = {
  value?: {
    x: number
    y: number
    width: number
    height: number
  }
}

export default function SpritePreview({ value }: Props) {
  if (!value) return <div>No preview available</div>

  const { x, y, width, height } = value
  const spriteUrl = '/sprite.svg' // This assumes your sprite.svg is in /static/

  const style: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${spriteUrl})`,
    backgroundPosition: `-${x}px -${y}px`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    border: '1px solid #666',
    marginTop: '8px',
  }

  return (
    <div>
      <div style={style} />
      <small>{`x: ${x}px, y: ${y}px, w: ${width}px, h: ${height}px`}</small>
    </div>
  )
}