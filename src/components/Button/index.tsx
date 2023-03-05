import React from 'react'
import * as S from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean
  isDanger?: boolean
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>{children}</S.Button>
  )
}

export default Button