import { NumericFormatProps } from 'react-number-format'
import { FormInputChangeHandler } from '../../hooks/useForm'

import * as S from './styles'

interface MoneyFormatProps extends Omit<NumericFormatProps, "onChange"> {
  onChange: (values: any, name: string) => void
  name: string
}

export function createMoneyInputHandlerAdaptedToFormHook(
  formHookInputChangeHandler = ({}: FormInputChangeHandler) => {}
) {
  return (value: any, name: string) => {
    formHookInputChangeHandler({ name, value: value.floatValue })
  }
}

function MoneyFormat(props: MoneyFormatProps) {

  const { 
    defaultValue, 
    onChange = () => {}, 
    customInput, 
    name = "", 
    ...rest 
  } = props

  return (
    <S.MoneyFormat
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      decimalScale={2}
      fixedDecimalScale
      onValueChange={values => {
        onChange(values, name)
      }}
      {...rest}
    />
  )
}

export default MoneyFormat
