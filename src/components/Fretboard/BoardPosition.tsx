import React, { FC } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { notesOnStringArray } from '../../modules/fretboard'
import styled from 'styled-components'
import { reverse } from 'ramda'
import { fretboardHeight } from 'interfaces/enums'
import Fret from './Fret'
import FretRow from './FretRow'

interface Props {
  tuning: TuningShape[]
  showOctave?: boolean
  boardHeight: fretboardHeight
  noOfStrings: number
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const generatFretNotes = (
  notesArray: TuningShape[],
  width: number,
  stringIndex: number,
  showOctave: boolean
) => {
  return notesArray.map((note, index) => (
    <Fret
      width={width}
      note={note}
      stringIndex={stringIndex}
      index={index}
      showOctave={showOctave}
    />
  ))
}

const generateFretRow = (
  tuning: TuningShape[],
  boardHeight: number,
  showOctave: boolean,
  noOfStrings: number
) => {
  return tuning.map((_, stringIndex) => {
    const notesArray = notesOnStringArray(tuning[stringIndex], 15)
    const width = 100 / tuning.length
    const fretNotes = generatFretNotes(
      notesArray,
      width,
      stringIndex,
      showOctave
    )
    return (
      <FretRow
        boardHeight={boardHeight}
        stringIndex={stringIndex}
        noOfStrings={noOfStrings}
      >
        {fretNotes}
      </FretRow>
    )
  })
}

const BoardPosition: FC<Props> = ({
  tuning,
  showOctave = false,
  boardHeight,
  noOfStrings,
}) => {
  const reverseTuning = reverse(tuning)
  const stringNotesByRow = generateFretRow(
    reverseTuning,
    boardHeight,
    showOctave,
    noOfStrings
  )

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{stringNotesByRow}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
