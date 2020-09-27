import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { fretboardHeight } from 'interfaces/enums'

interface Props {
  boardHeight: fretboardHeight
  children?: ReactElement[]
  noOfStrings: number
  stringIndex: number
  onClickHandler?: (e: any) => void
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
  onClickHandler,
}) => {
  const rowHeight = boardHeight / noOfStrings

  return (
    <FretsRowDiv
      className="fret-row"
      data-row={stringIndex}
      style={{ height: `${rowHeight}px` }}
      onClick={onClickHandler}
    >
      {children}
    </FretsRowDiv>
  )
}
export default FretsRow
