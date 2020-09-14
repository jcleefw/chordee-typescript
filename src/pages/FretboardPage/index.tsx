import React, { FC, ReactNodeArray, useEffect, useState } from 'react'
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

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)

  return (
    <PageContainer className="container container-lg container-xl">
      <PageHeader setTuning={setTuning} />
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
