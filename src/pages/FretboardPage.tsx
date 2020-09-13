import React from 'react'
import { Scale } from '@tonaljs/tonal'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import NutGraphicStrings from 'components/Fretboard/NutGraphicString'
import ViewPort from 'components/Fretboard/ViewPort'
import SvgHeader from 'components/Fretboard/SvgHeader'
import Board from 'components/Fretboard/Board'
import { musicNotes, TuningShape } from 'interfaces/tuning'
import BoardPosition from 'components/Fretboard/BoardPosition'
import StringTuningWrapper from 'components/Fretboard/StringTuningWrapper'
import { fretboardHeight } from 'interfaces/enums'
import { PageContainer } from 'components/Container'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const openE: Array<TuningShape> = [
  { note: musicNotes.e, octave: 2 },
  { note: musicNotes.a, octave: 2 },
  { note: musicNotes.d, octave: 3 },
  { note: musicNotes.g, octave: 3 },
  { note: musicNotes.b, octave: 3 },
  { note: musicNotes.e, octave: 4 },
]

const boardHeight = NO_OF_STRINGS * fretboardHeight.large

const FretboardPage = () => {
  return (
    <PageContainer className="container container-lg container-xl">
      <div>{Scale.get('D major').notes}</div>
      <Board boardHeight={boardHeight}>
        <SvgHeader>
          <ViewPort width={3} offset={0}>
            <StringTuningWrapper tuning={openE} boardHeight={boardHeight} />
          </ViewPort>
          <ViewPort width={0.75} offset={3}>
            <NutGraphicStrings nrOfStrings={NO_OF_STRINGS} />
          </ViewPort>
          <ViewPort width={95} offset={3.75}>
            <BoardGraphicStrings
              nrOfStrings={NO_OF_STRINGS}
              nrOfFrets={NO_OF_FRETS}
            />
            <BoardPosition boardHeight={boardHeight} tuning={openE} />
          </ViewPort>
        </SvgHeader>
      </Board>
    </PageContainer>
  )
}

export default FretboardPage
