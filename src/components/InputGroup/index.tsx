import React from 'react'
import * as S from './styles'

function InputGroup({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <S.InputGroup>{children}</S.InputGroup>
  )
}

export default InputGroup