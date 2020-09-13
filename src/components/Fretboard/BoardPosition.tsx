import React, { FC } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { notesOnStringArray, stringifyNote } from '../../modules/fretboard'
import styled from 'styled-components'
import { reverse } from 'ramda'
import { fretboardHeight } from 'interfaces/enums'

interface Props {
  tuning: TuningShape[]
  showOctave?: boolean
  boardHeight: fretboardHeight
}

const FretsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FretsRow = styled.div`
  display: flex;
  align-items: center;
`

const Fret = styled.div`
  position: relative;
  font-size: 0.8rem;
`

const FretBackground = styled.span`
  background: white;
  padding: 0 5px;
`

const BoardPosition: FC<Props> = ({
  tuning,
  showOctave = false,
  boardHeight,
}) => {
  const reverseTuning = reverse(tuning)
  const stringNotesByRow = reverseTuning.map((row, tuningIndex) => {
    const notesArray = notesOnStringArray(reverseTuning[tuningIndex], 15)
    const width = 100 / tuning.length
    const y = boardHeight / 6
    const fretNotes = notesArray.map((note, index) => {
      const fretString = showOctave ? stringifyNote(note) : note.note

      return (
        <Fret
          className={`fret-note`}
          style={{ width: `${width}%`, textAlign: 'center' }}
          key={`note-${tuningIndex}-${index}`}
          data-note={stringifyNote(note)}
        >
          <FretBackground>{fretString.toUpperCase()}</FretBackground>
        </Fret>
      )
    })
    return (
      <FretsRow
        className="fret-row"
        style={{ height: `${y}px` }}
        key={`row-${tuningIndex}`}
      >
        {fretNotes}
      </FretsRow>
    )
  })

  return (
    <foreignObject width="100%" height="100%">
      <FretsWrapper>{stringNotesByRow}</FretsWrapper>
    </foreignObject>
  )
}

export default BoardPosition
