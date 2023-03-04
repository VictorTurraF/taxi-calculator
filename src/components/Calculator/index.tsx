import useForm from "../../hooks/useForm"
import EarningsList from "../EarningsList/v2"
import CalculatorInput from "../FormInput"
import MoneyInput, { createMoneyInputHandlerAdaptedToFormHook } from "../MoneyFormat"
import TotalCosts from "../TotalCosts"
import TotalEarnings from "../TotalEarnings"
import * as S from "./styles"

function Calculator() {
  const {

    getInputProps,
    handleInputChange,
    getInputValueByName
    

  } = useForm({
    initialValues: {
      distance: null,
      price: 5.07,
      autonomy: null
    },
    inputTypes: {
      distance: "numeric",
      price: "numeric",
      autonomy: "numeric",
    },
  })

  const handleMoneyInputChange = createMoneyInputHandlerAdaptedToFormHook(handleInputChange)

  const earningsForm = useForm({
    initialValues: {
      "earning--1": 10.5
    },
    inputTypes: {
      "earning": "numeric:list"
    }
  })


  return (
    <S.Form>
      <p>dados</p>
      <MoneyInput placeholder="Preço do Combustível" name="price" value={getInputValueByName("price") as any} onChange={handleMoneyInputChange} />
      <CalculatorInput placeholder="KM Rodados" {...getInputProps({ name: "distance" })} />
      <CalculatorInput placeholder="Autonomia do Veículo (Km/L)" {...getInputProps({ name: "autonomy" })} />

      <TotalCosts
        price={getInputValueByName('price') as number}
        autonomy={getInputValueByName('autonomy') as number}
        distance={getInputValueByName('distance') as number}
      />

      <hr />
      <p>ganhos</p>
      <EarningsList name={"earning"} form={earningsForm} />

      <TotalEarnings earnings={earningsForm.values as any} />
    </S.Form>
  )
}

export default Calculator