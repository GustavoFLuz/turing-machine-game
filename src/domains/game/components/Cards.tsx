import React, { useEffect, useState } from 'react';
import { useGameContext } from '../contexts/Game';
import { CardIcons, CardInfo, CardPaper, Verifier } from '../styles/Card';
import { CardWrapper, Wrapper } from '../styles/CardHolder';
import { Check, Cross } from '../icons';

type Props = {}
export default function Cards({}: Props) {
  const [mounted, setMounted] = useState(false);
  const {hint: {list: hintList, verify: verifyHint}} = useGameContext();
  const [verifier, setVerifier] = useState<{ slot: number, correct: boolean } | null>(null)

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (verifier == null) return;
    const timeout = setTimeout(() => setVerifier(null), 2000)
    return () => clearTimeout(timeout);
  }, [verifier]);

  const checkHint = (slot: number) => {
    const correct = verifyHint(slot);
    setVerifier({ slot, correct });
    ;
  }

  const position = ["A", "B", "C", "D", "E", "F"]
  return mounted ? (
    <Wrapper>
      {hintList.map((hint, index) => (
        <CardWrapper key={"cardWrapper-" + index}>
          <CardPaper onClick={() => checkHint(index)}>
            <CardInfo position={position[index]}>{hint.text}</CardInfo>
            <CardIcons>
              {hint.options.map((opt, i) =>
                <React.Fragment key={`option-${position[index]}-${i}`}>
                  <span>{opt.opt}</span>
                  {i !== hint.options.length - 1 &&
                    <span className="divider"></span>}
                </React.Fragment>
              )}
            </CardIcons>
            {(verifier && verifier.slot === index) ?
              <Verifier>
                {verifier.correct ? <Check size="100%"/> : <Cross size="100%"/>}
              </Verifier>
              : <></>}
          </CardPaper>
        </CardWrapper>
      ))}
    </Wrapper>
  ) : <div />
}

