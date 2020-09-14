import { AlternateTuningProps, musicNotes } from 'interfaces/tuning'

export const alternateTunings: AlternateTuningProps = {
  standard: {
    name: 'Standard',
    tunings: [
      { note: musicNotes.e, octave: 2 },
      { note: musicNotes.a, octave: 2 },
      { note: musicNotes.d, octave: 3 },
      { note: musicNotes.g, octave: 3 },
      { note: musicNotes.b, octave: 4 },
      { note: musicNotes.e, octave: 4 },
    ],
  },
  dadgad: {
    name: 'DADGAD',
    tunings: [
      { note: musicNotes.d, octave: 2 },
      { note: musicNotes.a, octave: 2 },
      { note: musicNotes.d, octave: 3 },
      { note: musicNotes.g, octave: 3 },
      { note: musicNotes.a, octave: 4 },
      { note: musicNotes.d, octave: 4 },
    ],
  },
  openC: {
    name: 'Open C',
    tunings: [
      { note: musicNotes.c, octave: 2 },
      { note: musicNotes.g, octave: 2 },
      { note: musicNotes.c, octave: 3 },
      { note: musicNotes.g, octave: 3 },
      { note: musicNotes.c, octave: 4 },
      { note: musicNotes.e, octave: 4 },
    ],
  },
  openD: {
    name: 'Open D',
    tunings: [
      { note: musicNotes.d, octave: 2 },
      { note: musicNotes.a, octave: 2 },
      { note: musicNotes.d, octave: 3 },
      { note: musicNotes.f, octave: 3, sharp: true },
      { note: musicNotes.a, octave: 4 },
      { note: musicNotes.d, octave: 4 },
    ],
  },
}
