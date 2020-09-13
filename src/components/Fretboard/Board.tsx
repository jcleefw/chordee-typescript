import React, { FC } from 'react'

const Board: FC<{ boardHeight: number }> = ({ boardHeight, children }) => (
  <div className="board" style={{ height: `${boardHeight}px` }}>
    {children}
  </div>
)

export default Board
