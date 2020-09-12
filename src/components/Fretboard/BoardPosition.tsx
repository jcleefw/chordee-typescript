import React, { FC } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { notesOnStringArray, stringifyNote } from '../../modules/fretboard'
import styled from 'styled-components'
import { reverse } from 'ramda'

interface Props {
  tuning: TuningShape[]
  showOctave?: boolean
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

const FretsRow = styled.div`
  display: flex;
  height: 25px;
`

const Fret = styled.div`
  position: relative;
  font-size: 0.7rem;
`

const FretString = styled.span`
  background: white;
  padding: 0 3px;
`

const BoardPosition: FC<Props> = ({ tuning, showOctave = false, children }) => {
  const reverseTuning = reverse(tuning)
  const stringNotesByRow = reverseTuning.map((row, tuningIndex) => {
    const notesArray = notesOnStringArray(reverseTuning[tuningIndex], 15)
    const width = 100 / tuning.length
    const fretNotes = notesArray.map((note, index) => {
      const fretString = showOctave ? stringifyNote(note) : note.note
      return (
        <Fret
          className={`fret-note`}
          style={{ width: `${width}%`, textAlign: 'center' }}
          key={`note-${tuningIndex}-${index}`}
          data-note={stringifyNote(note)}
        >
          <FretString>{fretString.toUpperCase()}</FretString>
        </Fret>
      )
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
