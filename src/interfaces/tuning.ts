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

export enum HighlightStatus {
  root = 'root',
  scale = 'scale',
}

export interface TuningShape {
  note: string
  octave: number
  sharp?: boolean
  flat?: boolean
  highlight?: HighlightStatus | null
}

export interface AlternateTuningProps {
  [x: string]: {
    name: string
    tunings: TuningShape[]
  }
}
