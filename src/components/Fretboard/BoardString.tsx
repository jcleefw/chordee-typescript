import React, { FC } from 'react'
import { times, range } from 'ramda'
import { stringCenter } from '../../modules/fretboard'

const stringLine = (nrOfStrings: number) => (str: any) => {
  const y = stringCenter(nrOfStrings)(str)
  return (
    <line
      className={`str str-${str}`}
      key={`str-${str}`}
      x1="0%"
      x2="100%"
      y1={`${y}%`}
      y2={`${y}%`}
    />
  )
}

const fretLineBounds = (nrOfStrings: number) => ({
  top: stringCenter(nrOfStrings)(0),
  bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
})
const fretLine = (nrOfFrets: number, nrOfStrings: number) => (frt: any) => {
  const { top, bottom } = fretLineBounds(nrOfStrings)
  const x = (100 / nrOfFrets) * frt

  return (
    <line
      className={`fret fret-${frt}`}
      key={`fret-${frt}`}
      x1={`${x}%`}
      x2={`${x}%`}
      y1={`${top}%`}
      y2={`${bottom}%`}
    />
  )
}

interface Props {
  nrOfStrings: number
  nrOfFrets: number
}

const BoardString: FC<Props> = ({ nrOfStrings, nrOfFrets }) => (
  <g>
    {times(stringLine(nrOfStrings), nrOfStrings)}
    {range(1, nrOfFrets).map(fretLine(nrOfFrets, nrOfStrings))}
  </g>
)

export default BoardString
