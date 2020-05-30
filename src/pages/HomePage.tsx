import React from 'react'
import BufferLoader from '../modules/BufferLoader'
import Metronome from '../modules/Metronome'

const HomePage = () => {
  const metronome = new Metronome().init(50)
  return (
    <section>
      <div>Hello</div>
    </section>
  )
}

export default HomePage
