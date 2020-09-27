import React, { FC } from 'react'
import { TuningShape } from 'interfaces/tuning'
import ViewPort from './ViewPort'
import StringTuningWrapper from './StringTuningWrapper'
import NutGraphicStrings from './NutGraphicString'
import SvgWrapper from './SvgWrapper'
import Board from './Board'
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

const FretBoard: FC<Props> = ({
  boardHeight,
  tuning,
  noOfStrings,
  noOfFrets,
  showOctave,
  tonalKey,
  clickable,
}) => (
  <div className="board" style={{ height: `${boardHeight}px` }}>
    <SvgWrapper>
      <ViewPort width={3} offset={0}>
        <StringTuningWrapper tuning={tuning} boardHeight={boardHeight} />
      </ViewPort>
      <ViewPort width={0.75} offset={3}>
        <NutGraphicStrings nrOfStrings={noOfStrings} />
      </ViewPort>
      <ViewPort width={95} offset={3.75}>
        <Board
          {...{
            boardHeight,
            tuning,
            noOfStrings,
            noOfFrets,
            showOctave,
            tonalKey,
            clickable,
          }}
        />
      </ViewPort>
    </SvgWrapper>
  </div>
)

export default FretBoard
