import { Tonal } from '@tonaljs/tonal'
import React from 'react'
import { Note, Scale } from '@tonaljs/tonal'
import BoardGraphicStrings from '../components/Fretboard/BoardString'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: white;
`

const Fretboard = () => {
  console.log('scales', Scale.get('C major').notes)
  return (
    <Wrapper>
      <div>{Scale.get('D major').notes}</div>
      <BoardGraphicStrings nrOfStrings={6} nrOfFrets={15} />
    </Wrapper>
  )
}

export default Fretboard
