import React, { FC, useState } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { alternateTunings } from 'data/alternateTunings'
import PageHeader from './PageHeader'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)

  const onTuningChangeHandler = (e: any) => {
    setTuning(alternateTunings[e.value])
  }
  return (
    <PageContainer className="container container-lg container-xl">
      <PageHeader onTuningChangeHandler={onTuningChangeHandler} />
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
