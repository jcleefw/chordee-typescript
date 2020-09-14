import { alternateTunings } from 'data/alternateTunings'
import { AlternateTuningProps } from 'interfaces/tuning'
import React, { FC } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 1rem;
`

interface Props {
  onTuningChangeHandler: (e: any) => void
}

const generateOptions = (tuningOptions: AlternateTuningProps) => {
  return Object.keys(tuningOptions).map(key => {
    return { value: key, label: tuningOptions[key].name }
  })
}

const PageHeader: FC<Props> = ({ onTuningChangeHandler }) => {
  const options = generateOptions(alternateTunings)
  return (
    <Container>
      <Select
        options={options}
        onChange={onTuningChangeHandler}
        defaultValue={options[0]}
        className="select"
      />
    </Container>
  )
}

export default PageHeader
