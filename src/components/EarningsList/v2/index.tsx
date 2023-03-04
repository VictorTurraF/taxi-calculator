import { useState } from "react";
import useForm from "../../../hooks/useForm"
import MoneyFormat, { createMoneyInputHandlerAdaptedToFormHook } from "../../MoneyFormat";

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
    setInputs(inputs => inputs.filter(i => i !== input))
  }


  return (
    <div>
      {inputs.map(input => (
        <div style={{ display: 'flex' }}>
          <MoneyFormat
            placeholder="Ganho"
            value={getInputValueByName(input) as any}
            name={input}
            onChange={handleMoneyInputChange}
          />
          {inputs.length > 1 && (
            <button onClick={event => handleRemoveInputClick(event, input)}>
              Remover
            </button>
          )}
        </div>
      ))}

      <button onClick={handleAddInputClick}>Adicionar</button>
    </div>
  )
}

export default EarningsList