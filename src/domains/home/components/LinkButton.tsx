import { Button, ButtonWrapper } from '@/styles/pages/home'
import { useTheme } from 'styled-components'
import React from 'react'
import Link from 'next/link'
import { ColorType } from '@/types/theme'

type Props = {
    color: ColorType
    url: string
    children: React.ReactNode
}

export default function LinkButton({ color, url, children }: Props) {
    const theme = useTheme();
    return (
        <Link href={url}>
            <ButtonWrapper color={color}><Button color={color}>{children}</Button></ButtonWrapper>
        </Link>
    )
}