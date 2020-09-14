import React, { ReactElement } from 'react'
import { TuningShape } from '../../interfaces/tuning'
import { stringifyNote } from '../../modules/fretboard'
import styled from 'styled-components'

interface Props {
  width: number
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

export default ({ width, note, showOctave }: Props): ReactElement => {
  const fretString = stringifyNote(note, showOctave)

  return (
    <Fret
      className={`fret-note`}
      style={{ width: `${width}%`, textAlign: 'center' }}
      data-note={stringifyNote(note)}
    >
      <FretBackground>{fretString.toUpperCase()}</FretBackground>
    </Fret>
  )
}
