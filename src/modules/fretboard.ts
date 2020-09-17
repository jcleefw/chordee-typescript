/* eslint-disable import/prefer-default-export */
import { sum, isNil, times } from 'ramda'
import { TuningShape, notesArray, HighlightStatus } from '../interfaces/tuning'
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

export const notesOnStringArray = (props: {
  rootNote: TuningShape
  noFrets: number
  tonalKey?: TonalKey
}) => {
  const { rootNote, noFrets, tonalKey } = props
  const rootNoteIndex = notesArray.indexOf(
    stringifyNote(rootNote).toLowerCase()
  )

  let startIndex = rootNoteIndex + 1
  let finalArray: TuningShape[] = []
  let octaveCount = rootNote.octave

  const addToArray = (startIndex: number, octaveCount: number) => {
    const currentNote = notesArray[startIndex]
    finalArray.push({
      note: currentNote,
      octave: octaveCount,
      highlight: populateHighlightStatus(tonalKey?.scale, currentNote),
    })
  }

  times(() => {
    addToArray(startIndex, octaveCount)
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
