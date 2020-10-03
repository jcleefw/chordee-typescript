import { HighlightStatus } from 'interfaces/tuning'

export const populateHighlightStatusForScales = (
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
