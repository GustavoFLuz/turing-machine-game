import { useMemo } from 'react'
import { useGameContext } from '../contexts/Game'
import { Wrapper } from '../styles/NotesTable'
import AttemptsTable from './AttemptsTable'
import CheckTable from './CheckTable'

type Props = {}

export default function NotesTable({ }: Props) {
  const { hint: { list }, attempts: { attempts } } = useGameContext();
  const usedHints = useMemo(() => list.length, [list]);

  return (
    <Wrapper>
      <CheckTable />
      <AttemptsTable attempts={attempts} usedHints={usedHints} />
    </Wrapper>
  )
}