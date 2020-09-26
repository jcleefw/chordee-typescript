import React, { FC, useState, useEffect } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { alternateTunings } from 'data/alternateTunings'
import PageHeader from './PageHeader'
import { isEmpty } from 'ramda'
import { TonalKey } from 'interfaces/tonal'
import { convertTonalScaleIfNeeded } from '../../modules/fretboard'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)
  const [tonalKey, setTonalKey] = useState<TonalKey>({})

  return (
    <PageContainer className="container container-lg container-xl">
      <PageHeader setTuning={setTuning} setKey={setTonalKey} />
      {!isEmpty(tonalKey) && (
        <div>Notes on scale are: {tonalKey.convertedScale}</div>
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
