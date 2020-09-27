import React, { ReactElement } from 'react'
import { TuningShape } from 'interfaces/tuning'
import BoardPosition from './BoardPosition'
import BoardGraphicStrings from './BoardString'
import { TonalKey } from 'interfaces/tonal'

interface Props {
  noOfStrings: number
  noOfFrets: number
  boardHeight: number
  tuning: TuningShape[]
  showOctave: boolean
  tonalKey?: TonalKey
  clickable?: boolean
}

export default ({
  noOfStrings,
  noOfFrets,
  boardHeight,
  tuning,
  showOctave,
  tonalKey,
  clickable,
}: Props): ReactElement => {
  return (
    <>
      <BoardGraphicStrings nrOfStrings={noOfStrings} nrOfFrets={noOfFrets} />
      <BoardPosition
        {...{
          boardHeight,
          noOfStrings,
          noOfFrets,
          tuning,
          showOctave,
          tonalKey,
          clickable,
        }}
      />
    </>
  )
}
