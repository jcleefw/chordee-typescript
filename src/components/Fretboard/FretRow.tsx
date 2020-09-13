import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'interfaces/enums'

interface Props {
  boardHeight: fretboardHeight
  stringIndex: number
  children?: ReactElement[]
  noOfStrings: number
}

const FretsRow = styled.div`
  display: flex;
  align-items: center;
`

export default ({
  noOfStrings,
  boardHeight,
  stringIndex,
  children,
}: Props): ReactElement => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <FretsRow
      className="fret-row"
      style={{ height: `${rowHeight}px` }}
      key={`row-${stringIndex}`}
    >
      {children}
    </FretsRow>
  )
}
