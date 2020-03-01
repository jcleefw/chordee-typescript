import React from "react";
// import HtmlSongDisplayer from "../components/HtmlSongDiplayer";

const chordSheet = `
Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be`.substring(1);

const HomePage = () => {
  return (
    <section>
      <div className="columns">
        <div className="column">{chordSheet}</div>
        <div className="column">
          {/* <HtmlSongDisplayer chordSheet={chordSheet} /> */}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
