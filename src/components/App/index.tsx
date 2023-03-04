import Calculator from '../Calculator'
import * as S from "./styles"

function App() {
  return (
    <S.Container>
      <S.Title>
        Calculadora<br />de Kilometragem
      </S.Title>
      <Calculator />
    </S.Container>
  )
}

export default App