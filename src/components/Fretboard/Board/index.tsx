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
}

export default ({
  noOfStrings,
  noOfFrets,
  boardHeight,
  tuning,
  showOctave,
}: Props): ReactElement => {
  return (
    <>
      <BoardGraphicStrings nrOfStrings={noOfStrings} nrOfFrets={noOfFrets} />
      <BoardPosition
        boardHeight={boardHeight}
        noOfStrings={noOfStrings}
        tuning={tuning}
        showOctave={showOctave}
      />
    </>
  )
}
