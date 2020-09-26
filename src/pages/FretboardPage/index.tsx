import React, { FC, useState } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { alternateTunings } from 'data/alternateTunings'
import PageHeader from './PageHeader'
import { isEmpty } from 'ramda'
import { TonalKey } from 'interfaces/tonal'
import styled from 'styled-components'

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
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={NO_OF_FRETS}
        tuning={tuning.tunings}
        showOctave={showOctave}
        tonalKey={tonalKey}
      />
    </PageContainer>
  )
}

export default FretboardPage
