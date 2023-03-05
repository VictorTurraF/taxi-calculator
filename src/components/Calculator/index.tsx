import useForm from "../../hooks/useForm"
import EarningsList from "../EarningsList"
import CalculatorInput from "../Input"
import MoneyInput, { createMoneyInputHandlerAdaptedToFormHook } from "../MoneyFormat"
import TotalResults from "../TotalResults"
import * as S from "./styles"

function Calculator() {
  const {

    getInputProps,
    handleInputChange,
    getInputValueByName

  } = useForm({
    initialValues: {
      distance: 0,
      price: 5.07,
      autonomy: 0
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

  function calculateTotalCosts() {
    const distance = getInputValueByName("distance") as number
    const price = getInputValueByName("price") as number
    const autonomy = getInputValueByName("autonomy") as number

    const totalCosts = (distance / autonomy) * price

    return totalCosts
  }

  const totalCosts = calculateTotalCosts()


  function sumEarnings() {
    const earnings = earningsForm.values as Record<string, number>

    return Object.values(earnings).reduce((acc, curr) => acc + curr, 0)
  }

  const totalEarnings = sumEarnings()

  const totalResult = totalEarnings - totalCosts

  return (
    <S.Form>
      <S.Container>
        <S.Title>Custos</S.Title>
        <S.InputsColumn>
          <MoneyInput
            placeholder="Preço do Combustível"
            name="price"
            value={getInputValueByName("price") as any}
            onChange={handleMoneyInputChange}
          />
          <CalculatorInput
            placeholder="KM Rodados"
            {...getInputProps({ name: "distance" })}
          />
          <CalculatorInput
            placeholder="Autonomia do Veículo (Km/L)"
            {...getInputProps({ name: "autonomy" })}
          />
        </S.InputsColumn>
        <S.TotalCosts totalCosts={totalCosts} />
      </S.Container>
      <S.EarningsContainer>
        <S.Title>Ganhos</S.Title>
        <EarningsList name={"earning"} form={earningsForm} />
        <S.TotalEarnings totalEarnings={totalEarnings} />
      </S.EarningsContainer>
      <S.TotalContainer>
        <S.Title>Resultado</S.Title>
        <S.TotalTotalCosts totalCosts={totalCosts} />
        <S.TotalTotalEarnings totalEarnings={totalEarnings} />
        <TotalResults totalResults={totalResult} />
      </S.TotalContainer>
    </S.Form>
  )
}

export default Calculator