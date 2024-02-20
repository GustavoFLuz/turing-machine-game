import React from 'react';
import { useGameContext } from '../contexts/Game';
import { CardIcons, CardInfo, CardPaper } from '../styles/Card';
import { CardWrapper, Wrapper } from '../styles/CardHolder';


type Props = {}
export default function Cards({}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const {hint: {list: hintList, verify: verifyHint}} = useGameContext();
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const checkHint = (slot: number)=>{
    const correct = verifyHint(slot);;
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
          </CardPaper>
        </CardWrapper>
      ))}
    </Wrapper>
  ) : <div />
}

