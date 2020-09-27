import React, { FC, useState, useEffect } from 'react'
import { TuningShape } from '../../../interfaces/tuning'
import styled from 'styled-components'
import { fretboardHeight } from 'interfaces/enums'
import Fret from './Fret'
import FretRow from './FretRow'

interface Props {
  tuning: TuningShape[]
  showOctave?: boolean
  boardHeight: fretboardHeight
  noOfStrings: number
  onClickHandler?: (e: any) => void
  calculatedArray: any
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const generateElements = (props: any) => {
  const width = 100 / props.tuningLength

  return props.calculatedArray.map((row: any, stringIndex: number) => {
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
  onClickHandler,
  calculatedArray,
}) => {
  const [elements, setElements] = useState(
    generateElements({
      calculatedArray,
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
        calculatedArray,
        boardHeight,
        noOfStrings,
        showOctave,
        onClickHandler,
        tuningLength: tuning.length,
      })
    )
  }, [calculatedArray])

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{elements}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
