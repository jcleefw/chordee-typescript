import React, { FC, useState, useEffect } from 'react'
import { HighlightStatus, TuningShape } from '../../../interfaces/tuning'
import { generateNotesArray } from '../../../modules/fretboard'
import styled from 'styled-components'
import { reverse } from 'ramda'
import { fretboardHeight } from 'interfaces/enums'
import Fret from './Fret'
import FretRow from './FretRow'
import { TonalKey } from 'interfaces/tonal'

interface Props {
  tuning: TuningShape[]
  showOctave?: boolean
  boardHeight: fretboardHeight
  noOfStrings: number
  noOfFrets: number
  tonalKey?: TonalKey
  clickable?: boolean
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const generateElements = (props: any) => {
  const width = 100 / props.tuningLength

  return props.fretRowArray.map((row: any, stringIndex: number) => {
    return (
      <FretRow
        boardHeight={props.boardHeight}
        noOfStrings={props.noOfStrings}
        key={`row-${stringIndex}`}
        stringIndex={stringIndex}
      >
        {row.map((note: any, index: number) => {
          return (
            <Fret
              width={width}
              note={note}
              key={`note-${stringIndex}-${index}`}
              showOctave={props.showOctave}
              index={index}
              onClickHandler={props.onClickHandler}
            />
          )
        })}
      </FretRow>
    )
  })
}

const BoardPosition: FC<Props> = ({
  tuning,
  showOctave = false,
  boardHeight,
  noOfStrings,
  noOfFrets,
  tonalKey,
  clickable = false,
}) => {
  const reverseTuning = reverse(tuning)
  let calculatedArray = generateNotesArray(reverseTuning, noOfFrets, tonalKey)

  const onClickHandler = (e: any) => {
    if (!clickable) return null
    const selectedNote = e.currentTarget.dataset
    const selectedString = e.currentTarget.parentElement.dataset
    const clonedArray = [...fretRowArray]
    clonedArray[selectedString.row][selectedNote.fretIndex].highlight =
      HighlightStatus.selected
    setFretRowArray(clonedArray)
  }

  const [fretRowArray, setFretRowArray] = useState(calculatedArray)
  const [elements, setElements] = useState(
    generateElements({
      fretRowArray,
      boardHeight,
      noOfStrings,
      showOctave,
      onClickHandler,
      tuningLength: tuning.length,
    })
  )

  useEffect(() => {
    setElements(
      generateElements({
        fretRowArray,
        boardHeight,
        noOfStrings,
        showOctave,
        onClickHandler,
        tuningLength: tuning.length,
      })
    )
  }, [fretRowArray])

  useEffect(() => {
    setFretRowArray(generateNotesArray(reverseTuning, noOfFrets, tonalKey))
  }, [tonalKey])

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{elements}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
