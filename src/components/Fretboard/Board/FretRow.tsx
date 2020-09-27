import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'interfaces/enums'

interface Props {
  boardHeight: fretboardHeight
  children?: ReactElement[]
  noOfStrings: number
  stringIndex: number
}

const FretsRow = styled.div`
  display: flex;
  align-items: center;
`

export default ({
  noOfStrings,
  boardHeight,
  children,
  stringIndex,
}: Props): ReactElement => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <FretsRow
      className="fret-row"
      data-row={stringIndex}
      style={{ height: `${rowHeight}px` }}
    >
      {children}
    </FretsRow>
  )
}
