import React, { FC, useState } from 'react'
import Fretboard from 'components/Fretboard/FretBoard'
import { PageContainer } from 'components/Container'
import { fretboardHeight } from 'interfaces/enums'
import { AlternateTuningProps } from 'interfaces/tuning'
import Select from 'react-select'
import { alternateTunings } from 'data/alternateTunings'

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const generateOptions = (tuningOptions: AlternateTuningProps) => {
  return Object.keys(tuningOptions).map(key => {
    return { value: key, label: tuningOptions[key].name }
  })
}

const boardHeight = NO_OF_STRINGS * fretboardHeight.large
const showOctave = false
const options = generateOptions(alternateTunings)

const FretboardPage: FC = () => {
  const [tuning, setTuning] = useState(alternateTunings.standard)

  const onChangeHandler = (e: any) => {
    setTuning(alternateTunings[e.value])
  }
  return (
    <PageContainer className="container container-lg container-xl">
      <Select
        options={options}
        onChange={onChangeHandler}
        defaultValue={options[0]}
        className="select"
      />
      <br />
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
