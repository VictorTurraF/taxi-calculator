import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm"
import Button from "../Button";
import InputGroup from "../InputGroup";
import MoneyFormat, { createMoneyInputHandlerAdaptedToFormHook } from "../MoneyFormat";
import * as S from "./styles";

interface EarningsListProps {
  name: string
  form: ReturnType<typeof useForm>
}

function EarningsList({ form, name }: EarningsListProps) {
  const [inputs, setInputs] = useState([`${name}--1`]);
  const [, setSequence] = useState(2);

  const { handleInputChange, getInputValueByName } = form

  const handleMoneyInputChange = createMoneyInputHandlerAdaptedToFormHook(handleInputChange)

  function handleAddInputClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    setSequence(sequence => {
      const newInput = `earning--${sequence}`
      setInputs(inputs => [...inputs, newInput])
      return sequence + 1
    })
  }

  function handleRemoveInputClick(event: React.MouseEvent<HTMLButtonElement>, input: string) {
    event.preventDefault()

    handleInputChange({
      name: input,
      value: null
    })

    setInputs(inputs => inputs.filter(i => i !== input))
  }

  return (
    <S.EarningsList>
      {inputs.map(input => (
        <InputGroup style={{ display: 'flex' }}>
          <MoneyFormat
            placeholder="Ganho"
            value={getInputValueByName(input) as any}
            name={input}
            onChange={handleMoneyInputChange}
          />
          {inputs.length > 1 && (
            <Button
              isOutlined
              isDanger
              onClick={event => handleRemoveInputClick(event, input)}
            >
              Remover
            </Button>
          )}
        </InputGroup>
      ))}

      <Button onClick={handleAddInputClick}>Adicionar</Button>
    </S.EarningsList>
  )
}

export default EarningsList