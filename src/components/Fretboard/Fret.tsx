import React, { ReactElement } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { notesOnStringArray, stringifyNote } from '../../modules/fretboard'
import styled from 'styled-components'

interface Props {
  width: number
  stringIndex: number
  index: number
  note: TuningShape
  showOctave: boolean
}

const Fret = styled.div`
  position: relative;
  font-size: 0.8rem;
`

const FretBackground = styled.span`
  background: white;
  padding: 0 5px;
`

export default ({
  width,
  stringIndex,
  index,
  note,
  showOctave,
}: Props): ReactElement => {
  const fretString = showOctave ? stringifyNote(note) : note.note

  return (
    <Fret
      className={`fret-note`}
      style={{ width: `${width}%`, textAlign: 'center' }}
      key={`note-${stringIndex}-${index}`}
      data-note={stringifyNote(note)}
    >
      <FretBackground>{fretString.toUpperCase()}</FretBackground>
    </Fret>
  )
}
