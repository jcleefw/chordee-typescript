import React, { useEffect, useState } from 'react';
import ChordeeApi from '../api';
import Heading from 'react-bulma-components/lib/components/heading';

function SongView({ id }) {
  const [song, setSong] = useState([]);
  useEffect(() => {
    const chordeeApi = new ChordeeApi();
    chordeeApi
      .fetchSong(id)
      .then((data) => {
        setSong(data.data);
      });
  }, [id]);

  return <section>
    <div className="columns">
      <div className="column song-view">
        <Heading size={4}>
          {song.name}
        </Heading>
        {song.sheetMusic}
      </div>
    </div>
  </section>

}

export default SongView;