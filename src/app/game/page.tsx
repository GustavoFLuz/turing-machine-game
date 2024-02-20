"use client";
import { Cards, NotesTable, NumberSelector } from '@/domains/game/components';
import { GameProvider } from '@/domains/game/contexts/Game';
import { getAllPossibilities } from '@/domains/game/utils/arrayUtils';
import problems from '@/script/GetPossibleProblems';
import { Container } from '@/domains/game/styles/Container';
import { Problem } from '@/types/game';

const allNumbers = getAllPossibilities();
const index = Math.floor(Math.random() * problems.length)
const problem: Problem = problems[index]

type Props = {}

export default function Game({ }: Props) {
  return (
    <GameProvider problem={problem}>
      <Container>
        <Cards />
        <NumberSelector />
        <NotesTable />
      </Container>
    </GameProvider>
  )
}

