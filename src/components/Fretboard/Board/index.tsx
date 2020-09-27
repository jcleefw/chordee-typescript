import React, { ReactElement } from 'react'
import { TuningShape } from 'interfaces/tuning'
import BoardPosition from './BoardPosition'
import BoardGraphicStrings from './BoardString'

interface Props {
  noOfStrings: number
  noOfFrets: number
  boardHeight: number
  tuning: TuningShape[]
  showOctave: boolean
  onClickHandler?: (e: any) => void
  calculatedArray: any
}

export default ({
  noOfStrings,
  noOfFrets,
  boardHeight,
  tuning,
  showOctave,
  onClickHandler,
  calculatedArray,
}: Props): ReactElement => {
  return (
    <>
      <BoardGraphicStrings nrOfStrings={noOfStrings} nrOfFrets={noOfFrets} />
      <BoardPosition
        {...{
          boardHeight,
          noOfStrings,
          tuning,
          showOctave,
          onClickHandler,
          calculatedArray,
        }}
      />
    </>
  )
}
