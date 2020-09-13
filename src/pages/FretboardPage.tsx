import React from 'react'
import { Scale } from '@tonaljs/tonal'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { TuningShape, musicNotes } from 'interfaces/tuning'

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

const selectedTuning = openE
const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const tuning = selectedTuning ? selectedTuning : openE
const showOctave = true

const FretboardPage = () => {
  return (
    <PageContainer className="container container-lg container-xl">
      <div>{Scale.get('D major').notes}</div>
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={NO_OF_FRETS}
        tuning={tuning}
        showOctave={showOctave}
      />
    </PageContainer>
  )
}

export default FretboardPage
