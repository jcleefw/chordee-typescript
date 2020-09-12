import React from 'react'
import { Scale } from '@tonaljs/tonal'
import BoardGraphicStrings from 'components/Fretboard/BoardString'
import styled from 'styled-components'
import NutGraphicStrings from 'components/Fretboard/NutGraphicString'
import ViewPort from 'components/Fretboard/ViewPort'
import SvgHeader from 'components/Fretboard/SvgHeader'
import Board from 'components/Fretboard/Board'
import { musicNotes, TuningShape } from 'interfaces/tuning'
import BoardPosition from 'components/Fretboard/BoardPosition'
import StringTuningWrapper from 'components/Fretboard/StringTuningWrapper'

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: white;
`

const NO_OF_FRETS = 15

const openE: Array<TuningShape> = [
  { note: musicNotes.e, octave: 2 },
  { note: musicNotes.a, octave: 2 },
  { note: musicNotes.d, octave: 3 },
  { note: musicNotes.g, octave: 3 },
  { note: musicNotes.b, octave: 3 },
  { note: musicNotes.e, octave: 4 },
]

const FretboardPage = () => {
  return (
    <Wrapper>
      <div>{Scale.get('D major').notes}</div>
      <div className="container">
        <SvgHeader>
          <ViewPort width={3} offset={0}>
            <StringTuningWrapper tuning={openE} />
          </ViewPort>
          <ViewPort width={0.75} offset={3}>
            <NutGraphicStrings nrOfStrings={6} />
          </ViewPort>
          <ViewPort width={89} offset={3.75}>
            <Board>
              <BoardGraphicStrings nrOfStrings={6} nrOfFrets={NO_OF_FRETS} />
              <BoardPosition tuning={openE} />
            </Board>
          </ViewPort>
        </SvgHeader>
      </div>
    </Wrapper>
  )
}

export default FretboardPage
