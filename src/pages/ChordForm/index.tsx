import React from 'react'
import { PageContainer } from 'components/Container'
import styled from 'styled-components'
import { range } from 'ramda'
import { alternateTunings } from '../../data/alternateTunings'
import Fretboard from 'components/Fretboard/FretBoard'
import { fretboardHeight } from 'interfaces/enums'

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

const NO_OF_STRINGS = 6

const boardHeight = NO_OF_STRINGS * fretboardHeight.large

const generateFormField = (nrOfStrings: number) => {
  return range(0, nrOfStrings).map((index: number) => {
    return (
      <FormGroup>
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

const ChordForm = () => {
  return (
    <PageContainer>
      <div>Chord Form</div>
      <Fretboard
        boardHeight={boardHeight}
        noOfStrings={NO_OF_STRINGS}
        noOfFrets={15}
        tuning={alternateTunings.standard.tunings}
        showOctave={true}
        clickable={true}
      />
      <FormRow>{generateFormField(6)}</FormRow>
    </PageContainer>
  )
}

export default ChordForm
