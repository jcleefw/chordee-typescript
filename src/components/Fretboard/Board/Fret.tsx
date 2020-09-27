import React, { FC } from 'react'
import { TuningShape } from '../../../interfaces/tuning'
import { stringifyNote } from '../../../modules/fretboard'
import styled from 'styled-components'
import cx from 'classnames'

interface Props {
  width: number
  note: TuningShape
  showOctave: boolean
  index: number
  onClickHandler: (e: any) => void
}

type FretProp = {
  highlight: any
}

const FretDiv = styled.div<FretProp>`
  position: relative;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  background: inherit;

  &.--highlight {
    span {
      border-radius: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      padding-top: 8px;
    }
  }
`
const FretBackground = styled.span`
  background: white;
  padding: 5px;
  z-index: 6;
`
const fretMarking = [3, 5, 7, 9, 12, 15, 17]

const Fret: FC<Props> = ({
  width,
  note,
  showOctave,
  index,
  onClickHandler,
}) => {
  const fretString = stringifyNote(note, showOctave)
  const noteDetails = note

  return (
    <FretDiv
      className={cx('fret-note', {
        '--highlight': noteDetails.highlight,
        '--root': noteDetails.highlight === 'root',
        '--scale': noteDetails.highlight === 'scale',
        '--selected': noteDetails.highlight === 'selected',
        '--fret-mark': fretMarking.includes(index + 1),
      })}
      style={{ width: `${width}%` }}
      data-note={stringifyNote(noteDetails)}
      data-octave={noteDetails.octave}
      data-fret-index={index}
      highlight={noteDetails.highlight}
      onClick={onClickHandler}
    >
      <FretBackground>{fretString.toUpperCase()}</FretBackground>
    </FretDiv>
  )
}
export default Fret
