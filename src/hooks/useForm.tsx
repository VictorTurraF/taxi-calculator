// Create a complete form hook

import { useState } from "react"

type InputType = "text" | "numeric" | "select" | "numeric:list"

interface InputPropsParams {
  name: string
  type?: InputType
}

type ListInputTypeEntries = [string, InputType][]

type FormEntry = null | string | number | any[]

interface UseFormSettings {
  initialValues?: Record<string, FormEntry>
  onSubmit?: (values: Record<string, string>) => void
  validate?: (values: Record<string, string>) => Record<string, string>
  controlInputBlur?: boolean
  inputTypes?: Record<string, InputType>
}

export interface FormInputChangeHandler {
  name: string
  value: FormEntry
}

export default function useForm({
  initialValues,
  inputTypes = {},
  controlInputBlur = false
}: UseFormSettings = {}) {
  
  const [values, setValues] = useState(initialValues || {})
  const [touched, setTouched] = useState({})

  const listInputTypes: ListInputTypeEntries = Object
    .entries(inputTypes)
    .filter(([, inputType]) => inputType.includes(":list"))
    .map(([name, inputType]) => [name, inputType.replace(":list", "") as InputType])

  function handleHTMLInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    handleInputChange({ name, value })
  }

  function handleInputChange({ name, value }: FormInputChangeHandler) {

    let convertedValue = value
    let listInputType;

    if (listInputType = listInputTypes.find(([listName]) => name.includes(listName))) {
      const [, inputType] = listInputType
      convertedValue = convertValue(value, inputType || "text")
    } else {
      convertedValue = convertValue(value, inputTypes[name] || "text")
    }


    setValues(values => ({ ...values, [name]: convertedValue }))
  }

  function handleInputBlur(event: React.FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched({ ...touched, [name]: true })
  }

  function getInputValueByName(name: keyof typeof values) {
    return values[name] || ""
  }

  function getInputProps({ name }: InputPropsParams) {
    const originalValue = getInputValueByName(name as keyof typeof values)

    let convertedValue = originalValue
    let listInputType;

    if (listInputType = listInputTypes.find(([listName]) => name.includes(listName))) {
      const [, inputType] = listInputType
      convertedValue = convertValue(originalValue, inputType || "text")
    } else {
      convertedValue = convertValue(originalValue, inputTypes[name] || "text")
    }

    return {
      name,
      type: "text",
      value: convertedValue,
      onChange: handleHTMLInputChange,
      onBlur: controlInputBlur ? handleInputBlur : () => { },
    }
  }

  function convertValue(value: any, type: InputType) {
    switch (type) {
      case "numeric":
        return parseAndCleanNumericValue(value)
      default:
        return value
    }
  }

  function parseAndCleanNumericValue(value: any) {
    const cleanValue = String(value || "").replaceAll(/[^0-9\.]+/gim, "")
    return !cleanValue ? 0 : Number(cleanValue)
  }

  return { getInputProps, handleInputChange, handleInputBlur, getInputValueByName, values }
}