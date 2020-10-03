/* eslint-disable import/prefer-default-export */
import { sum, times } from 'ramda'
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

const addToArray = (props: {
  startIndex: number
  octaveCount: number
  tonalScale?: Array<string>
  highlightFn?: any
}) => {
  const { startIndex, octaveCount, tonalScale, highlightFn } = props
  const currentNote: string = notesArray[startIndex]

  return {
    note: currentNote,
    octave: octaveCount,
    highlight: highlightFn ? highlightFn(tonalScale, currentNote) : '',
  }
}

export const notesOnStringArray = (props: {
  rootNote: TuningShape
  noFrets: number
  tonalKey?: TonalKey
  highlightFn?: any
}) => {
  const { rootNote, noFrets, tonalKey, highlightFn } = props
  const rootNoteIndex = notesArray.indexOf(stringifyNote(rootNote))
  const tonalScale = tonalKey?.convertedScale

  let startIndex = rootNoteIndex + 1
  let octaveCount = rootNote.octave
  let finalArray: TuningShape[] = []

  times(() => {
    finalArray.push(
      addToArray({
        startIndex,
        octaveCount,
        tonalScale,
        highlightFn,
      })
    )
    if (startIndex < 12 - 1) {
      startIndex += 1
    } else {
      startIndex = 0
      octaveCount += 1
    }
  }, noFrets)

  return finalArray
}

export const generateNotesArray = (props: {
  tuning: TuningShape[]
  noOfFrets: number
  tonalKey?: TonalKey
  highlightFn?: any
}) => {
  const { tuning, noOfFrets, tonalKey, highlightFn } = props
  return tuning.map((_, stringIndex) => {
    return notesOnStringArray({
      rootNote: tuning[stringIndex],
      noFrets: noOfFrets,
      tonalKey: tonalKey,
      highlightFn,
    })
  })
}

export const stringifyNote = (note: TuningShape, showOctave?: boolean) => {
  return `${note.note}${note.sharp ? '#' : ''}${note.flat ? '♭' : ''}${
    showOctave ? note.octave : ''
  }`
}
