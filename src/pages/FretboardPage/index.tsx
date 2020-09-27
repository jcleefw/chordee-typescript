import React, { FC, useState, useEffect } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { alternateTunings } from 'data/alternateTunings'
import PageHeader from './PageHeader'
import { isEmpty, reverse } from 'ramda'
import { TonalKey } from 'interfaces/tonal'
import styled from 'styled-components'
import { generateNotesArray } from 'modules/fretboard'
import { TuningShape } from '../../interfaces/tuning'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false

const ScalesDisplay = styled.div`
  padding: 1rem 0;
  span {
    padding: 0 0.5rem;
  }
`

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)
  const [tonalKey, setTonalKey] = useState<TonalKey>({})
  const reverseTuning: TuningShape[] = reverse(tuning.tunings)
  const calculatedArray = generateNotesArray(
    reverseTuning,
    NO_OF_FRETS,
    tonalKey
  )

  const generateFretboardElement = (newArray: any) => {
    return (
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={NO_OF_FRETS}
        tuning={tuning.tunings}
        showOctave={showOctave}
        calculatedArray={newArray}
      />
    )
  }

  const [fretRowArray, setFretRowArray] = useState(calculatedArray)
  const [fretBoardElement, setFretBoardElement] = useState(
    generateFretboardElement(fretRowArray)
  )
  useEffect(() => {
    setFretRowArray(generateNotesArray(reverseTuning, NO_OF_FRETS, tonalKey))
  }, [tonalKey, tuning])

  useEffect(() => {
    setFretBoardElement(generateFretboardElement(fretRowArray))
  }, [fretRowArray])

  const decorateScaleNotes = () => {
    if (tonalKey?.convertedScale) {
      return tonalKey.convertedScale.map((item: string) => (
        <span key={item}>{item}</span>
      ))
    }
    return null
  }

  return (
    <PageContainer className="container container-lg container-xl">
      <PageHeader setTuning={setTuning} setKey={setTonalKey} />
      {!isEmpty(tonalKey) && (
        <ScalesDisplay>
          Notes on scale are: {decorateScaleNotes()}
        </ScalesDisplay>
      )}
      {fretBoardElement}
    </PageContainer>
  )
}

export default FretboardPage
