/* eslint-disable import/prefer-default-export */
import { times, sum, isNil } from 'ramda'

export const fretWidth = (nrFrets: number) => (pos: number) =>
  ((2 ** (1 / nrFrets) - 1) / 2 ** ((pos + 1) / nrFrets)) * 100 * 2

export const fretOffset = (nrFrets: any) => (pos: any) =>
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  sum(times(fretWidth(nrFrets), pos))

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
