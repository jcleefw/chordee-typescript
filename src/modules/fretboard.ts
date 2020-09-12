/* eslint-disable import/prefer-default-export */
import { sum, isNil, times } from 'ramda'
import { TuningShape, notesArray } from '../interfaces/tuning'

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

export const ensureNoteObjects = (noteProps: any[]) =>
  noteProps.map((noteProp: { note: any; status: any; label: any }) =>
    typeof noteProp === 'string'
      ? {
          note: noteProp,
          status: 'selected',
          label: noteProp,
        }
      : {
          note: noteProp.note,
          status: noteProp.status || 'selected',
          label: noteProp.label || noteProp.note,
        }
  )

export const ensureLocObjects = (locProps: any[]) =>
  locProps.map((locProp: { str: any; loc: any; status: any; label: any }) =>
    !isNil(locProp.str)
      ? {
          loc: locProp,
          status: 'selected',
          label: '',
        }
      : {
          loc: locProp.loc,
          status: locProp.status || 'selected',
          label: locProp.label || '',
        }
  )

export const notesOnStringArray = (rootNote: TuningShape, noFrets: number) => {
  const rootNoteIndex = notesArray.indexOf(rootNote.note.toLowerCase())
  let startIndex = rootNoteIndex + 1
  let finalArray: TuningShape[] = []
  let octaveCount = rootNote.octave

  times(() => {
    finalArray.push({ note: notesArray[startIndex], octave: octaveCount })
    if (startIndex < 12 - 1) {
      startIndex += 1
    } else {
      startIndex = 0
      octaveCount += 1
    }
  }, noFrets)
  return finalArray
}

export const stringifyNote = (note: TuningShape) => {
  return `${note.note}${note.octave}`
}
