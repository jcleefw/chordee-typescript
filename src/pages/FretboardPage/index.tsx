import React, { FC, useState } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { alternateTunings } from 'data/alternateTunings'
import PageHeader from './PageHeader'
import { isEmpty } from 'ramda'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false

interface TonalKey {
  [x: string]: any
}

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)
  const [key, setKey] = useState<TonalKey>({})

  return (
    <PageContainer className="container container-lg container-xl">
      <PageHeader setTuning={setTuning} setKey={setKey} />
      {!isEmpty(key) && <div>Notes on scale are: {key.scale}</div>}
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={NO_OF_FRETS}
        tuning={tuning.tunings}
        showOctave={showOctave}
      />
    </PageContainer>
  )
}

export default FretboardPage
