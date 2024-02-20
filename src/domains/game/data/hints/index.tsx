import { Combination, Hint } from "@/types/game";
import { Triangle, Square, Circle } from "@/domains/game/icons";
import * as utilFunctions from "./utils";
import { SmallestOrLargestWrapper } from "../../styles/Hints";

const CATEGORIES = {
  EVEN_ODD: 'even-odd',
  N_OF_EVENS_ODDS: 'n-of-evens-odds',
  SMALLEST_OR_LARGEST: 'smallest-or-largest',
  X_COMPARED_TO_Y: 'x-compared-to-y'
}

export const evenOdd = [
  {
    name: 'aEvenOdd',
    category: CATEGORIES.EVEN_ODD,
    text: <span>Checks if <Triangle /> is odd or even</span>,
    options: [{ opt: "Is odd", expected: false }, { opt: "Is even", expected: true }],
    callback: (combination: Combination) => {
      return utilFunctions.XisEven(combination, "a");
    }
  },
  {
    name: 'bEvenOdd',
    category: CATEGORIES.EVEN_ODD,
    text: <span>Checks if <Square /> is odd or even</span>,
    options: [{ opt: "Is odd", expected: false }, { opt: "Is even", expected: true }],
    callback: (combination: Combination) => {
      return utilFunctions.XisEven(combination, "b");
    }
  },
  {
    name: 'cEvenOdd',
    category: CATEGORIES.EVEN_ODD,
    text: <span>Checks if <Circle /> is odd or even</span>,
    options: [{ opt: "Is odd", expected: false }, { opt: "Is even", expected: true }],
    callback: (combination: Combination) => {
      return utilFunctions.XisEven(combination, "c");
    }
  }
]

const nOfEvensOdd = [
  {
    name: 'nEvens',
    category: CATEGORIES.N_OF_EVENS_ODDS,
    text: <span>Checks how many even numbers are in the code</span>,
    options: [{ opt: "0 even numbers", expected: 0 }, { opt: "1 even number", expected: 1 }, { opt: "2 even numbers", expected: 2 }, { opt: "3 even numbers", expected: 3 }],
    callback: utilFunctions.nOfEvens
  },
  {
    name: 'nOdds',
    category: CATEGORIES.N_OF_EVENS_ODDS,
    text: <span>Checks how many odd numbers are in the code</span>,
    options: [{ opt: "0 odd numbers", expected: 0 }, { opt: "1 odd number", expected: 1 }, { opt: "2 odd numbers", expected: 2 }, { opt: "3 odd numbers", expected: 3 }],
    callback: utilFunctions.nOfOdds
  }
]

const smallestOrLargest = [
  {
    name: 'smallest',
    category: CATEGORIES.SMALLEST_OR_LARGEST,
    text: <span>Checks which number is the smallest in the code</span>,
    options: [
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Triangle /></span> {"<"} <span className="vertical"><Square /><Circle /></span></SmallestOrLargestWrapper>, expected: 0 },
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Square /></span> {"<"} <span className="vertical"><Triangle /><Circle /></span></SmallestOrLargestWrapper>, expected: 1 },
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Circle /></span> {"<"} <span className="vertical"><Triangle /><Square /></span></SmallestOrLargestWrapper>, expected: 2 }
    ],
    callback: utilFunctions.checkSmallest
  },
  {
    name: 'largest',
    category: CATEGORIES.SMALLEST_OR_LARGEST,
    text: <span>Checks which number is the largest in the code</span>,
    options: [
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Triangle /></span> {">"} <span className="vertical"><Square /><Circle /></span></SmallestOrLargestWrapper>, expected: 0 },
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Square /></span> {">"} <span className="vertical"><Triangle /><Circle /></span></SmallestOrLargestWrapper>, expected: 1 },
      { opt: <SmallestOrLargestWrapper><span className="horizontal"><Circle /></span> {">"} <span className="vertical"><Triangle /><Square /></span></SmallestOrLargestWrapper>, expected: 2 }
    ],
    callback: utilFunctions.checkLargest
  }
]

const digitNumberMatrix: [("a" | "b" | "c")[], number[]] = [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
const icons = {
  a: <Triangle />,
  b: <Square />,
  c: <Circle />
}
const XComparedToY: Hint[] = digitNumberMatrix[0].map((digit: "a" | "b" | "c") =>
  digitNumberMatrix[1].map(number =>
  ({
    name: `${digit}ComparedTo${number}`,
    category: CATEGORIES.X_COMPARED_TO_Y,
    text: <span>Checks the {icons[digit]} number compared to {number}</span>,
    options: [
      { opt: <span>{icons[digit]} {" < " + number}</span>, expected: -1 },
      { opt: <span>{icons[digit]} {" = " + number}</span>, expected: 0 },
      { opt: <span>{icons[digit]} {" > " + number}</span>, expected: 1 },
    ],
    callback: (combination: Combination) => {
      return utilFunctions.XComparedToY(combination, digit, number as 1|2|3|4|5);
    }
  })
  )).flat()

const hints: Record<string, Hint> = Object.fromEntries(
  [
    ...evenOdd,
    ...nOfEvensOdd,
    ...smallestOrLargest,
    ...XComparedToY,
  ]
    .map(hint => [hint.name, hint])
)

const names = [
  'aEvenOdd',
  'bEvenOdd',
  'cEvenOdd',
  'nEvens',
  'nOdds',
  'smallest',
  'largest',
  `XComparedToY`,
]

export default hints