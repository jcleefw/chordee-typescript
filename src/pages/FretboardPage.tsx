import React from 'react'
import { Scale } from '@tonaljs/tonal'
import BoardGraphicStrings from '../components/Fretboard/BoardString'
import styled from 'styled-components'
import NutGraphicStrings from '../components/Fretboard/NutGraphicString'
import ViewPort from '../components/Fretboard/ViewPort'
import SvgHeader from '../components/Fretboard/SvgHeader'

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: white;
`

const FretboardPage = () => {
  console.log('scales', Scale.get('C major').notes)
  return (
    <Wrapper>
      <div>{Scale.get('D major').notes}</div>
      <div className="container">
        <SvgHeader>
          <ViewPort width={5} offset={0}>
            <NutGraphicStrings nrOfStrings={6} />
          </ViewPort>
          <ViewPort width={89} offset={5.75}>
            <BoardGraphicStrings nrOfStrings={6} nrOfFrets={15} />
          </ViewPort>
        </SvgHeader>
      </div>
    </Wrapper>
  )
}

export default FretboardPage
