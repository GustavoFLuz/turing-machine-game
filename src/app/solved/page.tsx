"use client"
import React from 'react'
import {useSearchParams} from 'next/navigation'
import { Container, SolvedTitle } from '@/domains/solved/styles'
import AttemptsTable from '@/domains/game/components/AttemptsTable'
import { Attempt } from '@/types/game'

type Props = {}

export default function Solved({ }: Props) {
    const searchParams = useSearchParams()

    const solution = searchParams.get("solution")
    const attemptsString = searchParams.get("attempts")
    
    if(attemptsString === null || solution === null) {
        return <div>Invalid query</div>
    }

    const attempts: Attempt[] = JSON.parse(attemptsString)
    return (
        <Container>
            <SolvedTitle>Solved number {solution}</SolvedTitle>
            <AttemptsTable attempts={attempts} usedHints={attempts[0].hints.filter(el=>el!="unused").length} showEmpty={false}/>
            <SolvedTitle>Using {attempts.length} tries</SolvedTitle>
        </Container>
    )
}