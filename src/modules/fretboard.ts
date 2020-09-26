/* eslint-disable import/prefer-default-export */
import { sum, times } from 'ramda'
import {
  TuningShape,
  notesArray,
  HighlightStatus,
  musicNotes,
} from '../interfaces/tuning'
import { TonalKey } from 'interfaces/tonal'

export const fretWidth = (nrFrets: number) => (pos: number) =>
  ((2 ** (1 / nrFrets) - 1) / 2 ** ((pos + 1) / nrFrets)) * 100 * 2

export const fretOffset = (nrFrets: any) => (pos: any) => {
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  return sum(times(fretWidth(nrFrets), pos))
}

export const stringHeight = (nrOfStrings: number) => 100 / nrOfStrings

export const stringOffset = (nrOfStrings: any) => (str: number) =>
  str * stringHeight(nrOfStrings)

export const stringCenter = (nrOfStrings: any) => (str: any) =>
  stringOffset(nrOfStrings)(str) + stringHeight(nrOfStrings) / 2

export const convertTonalScaleIfNeeded = (scale: any) => {
  if (scale) {
    const convertedScale = scale.map((note: string, index: number) => {
      // when no conversion needed
      if (notesArray.includes(note)) return note

      // when conversion is needed
      const splitArray = note.split('')
      let firstNoteIndex: number | undefined
      if (splitArray.length === 2) {
        firstNoteIndex = notesArray.indexOf(splitArray[0])
      } else if (splitArray.length === 3) {
        firstNoteIndex = notesArray.indexOf(splitArray.splice(0, 2).join(''))
      }

      if (firstNoteIndex) {
        const searchIndex = (firstNoteIndex + 1) % notesArray.length
        return notesArray[searchIndex]
      }
    })
    return convertedScale
  }
}

export const populateHighlightStatus = (
  scale: Array<string>,
  currentNote: string
) => {
  const indexOfNote = scale?.indexOf(currentNote.toUpperCase())
  if (indexOfNote === 0) {
    return HighlightStatus.root
  } else if (indexOfNote > 0) {
    return HighlightStatus.scale
  } else {
    return null
  }
}

const addToArray = (
  startIndex: number,
  octaveCount: number,
  tonalScale: Array<string>
) => {
  const currentNote: string = notesArray[startIndex]

  return {
    note: currentNote,
    octave: octaveCount,
    highlight: populateHighlightStatus(tonalScale, currentNote),
  }
}

export const notesOnStringArray = (props: {
  rootNote: TuningShape
  noFrets: number
  tonalKey?: TonalKey
}) => {
  const { rootNote, noFrets, tonalKey } = props
  const rootNoteIndex = notesArray.indexOf(stringifyNote(rootNote))
  const tonalScale = tonalKey?.convertedScale

  let startIndex = rootNoteIndex + 1
  let octaveCount = rootNote.octave
  let finalArray: TuningShape[] = []

  times(() => {
    finalArray.push(addToArray(startIndex, octaveCount, tonalScale))
    if (startIndex < 12 - 1) {
      startIndex += 1
    } else {
      startIndex = 0
      octaveCount += 1
    }
  }, noFrets)

  return finalArray
}

export const stringifyNote = (note: TuningShape, showOctave?: boolean) => {
  return `${note.note}${note.sharp ? '#' : ''}${note.flat ? '♭' : ''}${
    showOctave ? note.octave : ''
  }`
}
