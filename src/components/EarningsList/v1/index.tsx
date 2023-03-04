import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CalculatorInput from '../../FormInput';

const AddButton = styled.button``
const RemoveButton = styled.button``

export interface InputListChangeEvent {
  name: string
  value: string
  actionType: 'remove' | 'add' | 'update'
  allValues: Input[]
  nativeEvent: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
}

interface InputListProps {
  onChange?: (event: InputListChangeEvent) => void
  value?: Input[]
  name?: string
}

interface IndexedInputEvent {
  nativeEvent: React.ChangeEvent<HTMLInputElement>,
  inputName: string
}

interface IndexedButtonEvent {
  nativeEvent: React.MouseEvent<HTMLButtonElement>,
  inputName: string
}

interface Input {
  name: string
  value: string
}

function InputList({ name = "item", value = [], onChange = () => {} }: InputListProps) {

  const [, setSequence] = useState(2)

  function handleAddInputClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setSequence(sequence => {
      const inputEntry = {
        name: `${name}--${sequence}`,
        value: ""
      }
      const newInputs = [...value, inputEntry ]

      onChange({
        allValues: newInputs,
        nativeEvent: event,
        name,
        value: inputEntry.value,
        actionType: 'add'
      })

      return sequence + 1
    })
  }

  function handleInputChange({ nativeEvent }: IndexedInputEvent) {
    const newInputs = value.map(input => {
      if (input.name === nativeEvent.target.name) {
        const updatedItem = {
          ...input,
          value: nativeEvent.target.value,
        };

        return updatedItem;
      }

      return input;
    });

    onChange({
      name,
      actionType: 'update',
      allValues: newInputs,
      nativeEvent,
      value: nativeEvent.target.value
    })
  }

  function handleRemoveInput({ nativeEvent, inputName }: IndexedButtonEvent) {
    nativeEvent.preventDefault()
    const newInputs = value.filter(input => input.name !== inputName)

    onChange({ 
      name,
      allValues: newInputs,
      actionType: 'remove',
      value: value.find(input => input.name === inputName)?.value || "",
      nativeEvent,
    })
  }

  return (
    <div>

      {value.map(({ name, value: inputValue }, index) => (
        <div style={{ display: "flex" }}>
          <CalculatorInput
            key={name}
            name={name}
            onChange={event => handleInputChange({
              nativeEvent: event,
              inputName: name,
            })}
            value={inputValue}
            placeholder="teste"
          />
          {value.length > 1 && (
            <RemoveButton
              onClick={event => handleRemoveInput({
                nativeEvent: event,
                inputName: name
              })}
            >
              Remover
            </RemoveButton>
          )}  
        </div>
      ))}

      <AddButton onClick={handleAddInputClick}>Add input</AddButton>
    </div>
  )
}

export default InputList