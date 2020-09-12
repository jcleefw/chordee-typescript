export enum musicNotes {
  c = 'C',
  d = 'D',
  e = 'E',
  f = 'F',
  g = 'G',
  a = 'A',
  b = 'B',
}

export const notesArray = [
  'a',
  'a#',
  'b',
  'c',
  'c#',
  'd',
  'd#',
  'e',
  'f',
  'f#',
  'g',
  'g#',
]

export interface TuningShape {
  note: string
  octave: number
  sharp?: boolean
  flat?: boolean
}
