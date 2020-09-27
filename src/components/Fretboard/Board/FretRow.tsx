import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'interfaces/enums'

interface Props {
  boardHeight: fretboardHeight
  children?: ReactElement[]
  noOfStrings: number
  stringIndex: number
}

const FretsRowDiv = styled.div`
  display: flex;
  align-items: center;
`

const FretsRow: FC<Props> = ({
  noOfStrings,
  boardHeight,
  children,
  stringIndex,
}) => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <FretsRowDiv
      className="fret-row"
      data-row={stringIndex}
      style={{ height: `${rowHeight}px` }}
    >
      {children}
    </FretsRowDiv>
  )
}
export default FretsRow
