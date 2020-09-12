import React, { FC } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { notesOnStringArray } from '../../modules/fretboard'
import styled from 'styled-components'

interface Props {
  tuning: TuningShape[]
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FretsRow = styled.div`
  display: flex;
`

const BoardPosition: FC<Props> = ({ tuning, children }) => {
  const stringNotesByRow = tuning.map((row, tuningIndex) => {
    const notesArray = notesOnStringArray(tuning[tuningIndex], 15)
    const fretNotes = notesArray.map((note, index) => {
      return <div key={`note-${tuningIndex}-${index}`}>{`${note.note}`}</div>
    })
    return <FretsRow key={`row-${tuningIndex}`}>{fretNotes}</FretsRow>
  })

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{stringNotesByRow}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
