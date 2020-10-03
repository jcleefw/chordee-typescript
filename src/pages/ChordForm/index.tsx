import React, { FC } from 'react'
import { PageContainer } from 'components/Container'
import styled from 'styled-components'
import { range, reverse } from 'ramda'
import { alternateTunings } from '../../data/alternateTunings'
import Fretboard from 'components/Fretboard/FretBoard'
import { fretboardHeight } from 'interfaces/enums'
import { TuningShape } from 'interfaces/tuning'
import { generateNotesArray } from 'modules/fretboard'

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:not(:first-child) {
    padding-left: 1.5rem;
  }

  > label {
    padding-right: 1.5rem;
  }

  > input {
    width: 50px;
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`

const NO_OF_FRETS = 15
const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large

const generateFormField = (nrOfStrings: number) => {
  return range(0, nrOfStrings).map((index: number) => {
    return (
      <FormGroup key={`string${index}`}>
        <label htmlFor={`string${index}`}>{`String ${index + 1}`}</label>
        <input
          maxLength={2}
          type="text"
          placeholder={`${index + 1}`}
          id={`string${index}`}
        />
      </FormGroup>
    )
  })
}

const ChordForm: FC = () => {
  const onClickHandler = (e: any) => {
    const selectedNote = e.currentTarget.dataset
    const selectedString = e.currentTarget.parentElement.dataset
    // const clonedArray = [...calculatedArray]
    // clonedArray[selectedString.row][selectedNote.fretIndex].highlight =
    //   HighlightStatus.selected
    // setFretRowArray(clonedArray)
    console.log('helo')
  }

  const reverseTuning: TuningShape[] = reverse(
    alternateTunings.standard.tunings
  )
  const calculatedArray = generateNotesArray({
    tuning: reverseTuning,
    noOfFrets: NO_OF_FRETS,
  })

  return (
    <PageContainer>
      <div>Chord Form</div>
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={NO_OF_FRETS}
        tuning={alternateTunings.standard.tunings}
        showOctave={true}
        onClickHandler={onClickHandler}
        calculatedArray={calculatedArray}
      />
      <FormRow>{generateFormField(6)}</FormRow>
    </PageContainer>
  )
}

export default ChordForm
