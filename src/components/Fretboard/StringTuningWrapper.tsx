import styled from 'styled-components'
import React, { FC } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { reverse } from 'ramda'

const TuningDivWrapper = styled.div`
  margin-top: 12px;
`
const TuningNotes = styled.div`
  font-size: 0.8rem;
  line-height: 1.05rem;
`
interface Props {
  tuning: Array<TuningShape>
}

const tuningNotes = (tuning: TuningShape[]) => {
  const array = tuning.map(row => `${row.note}${row.octave}`.toUpperCase())
  return reverse(array)
}

const StringTuningWrapper: FC<Props> = ({ tuning }) => {
  return (
    <foreignObject width="100%" height="100%">
      <TuningDivWrapper>
        {tuningNotes(tuning).map((notes: string, index: number) => {
          return <TuningNotes key={index}>{notes.toUpperCase()}</TuningNotes>
        })}
      </TuningDivWrapper>
    </foreignObject>
  )
}

export default StringTuningWrapper
