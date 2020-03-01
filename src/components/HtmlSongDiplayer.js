import React from 'react';
import ChordSheetJS from 'chordsheetjs';
import SongFormatter from '../formatter/songFormatter';

function format(chordSheet) {
  const parser = new ChordSheetJS.ChordSheetParser();
  const song = parser.parse(chordSheet);
  const formatter = new SongFormatter()
  const formatted = formatter.format(song)
  return formatted
}

const HtmlSongDisplayer = ({ chordSheet }) => {
  return <div>{format(chordSheet)}</div>
}

export default HtmlSongDisplayer;
