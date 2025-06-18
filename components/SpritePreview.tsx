import { useFormValue } from 'sanity'
import { Stack, Text, Card } from '@sanity/ui'

export default function SpritePreview() {
    const x = useFormValue(['x']) as number
    const y = useFormValue(['y']) as number
    const width = useFormValue(['width']) as number
    const height = useFormValue(['height']) as number
    const group = useFormValue(['group']) as string

    const SPRITE_MAP: Record<string, string> = {
        'race-support': '/static/race-support.svg',
        'overdrive-menu': '/static/sprites/overdrive-menu.svg',
        'tune-tools': '/static/sprites/tune-tools.svg',
        'blank': '/static/blank.png',
    }

    const SPRITE_URL = SPRITE_MAP[group] || SPRITE_MAP['blank']

    if (
        typeof x !== 'number' ||
        typeof y !== 'number' ||
        typeof width !== 'number' ||
        typeof height !== 'number'
    ) {
        return <Text muted size={1}>Enter valid X, Y, Width, Height to see preview.</Text>
    }

    return (
        <Stack space={2}>
            <Text size={1} muted>Sprite Preview</Text>
            <Card
                style={{
                    width: width / 2,
                    height: height / 2,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${SPRITE_URL})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `-${x}px -${y}px`,
                        backgroundSize: '1464px auto',
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                    }}
                />
            </Card>
        </Stack>
    )
}