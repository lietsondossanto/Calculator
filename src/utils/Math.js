const operators = ['+', '-', '*', '/', '.', '%']

export const update = (value, expressio, setExpression, setResult) => {
  let regex = /^[0-9]+\.[0-9]+$/
  let regex2 = /\s[0-9]+\.[0-9]+$/g

  if (value == '%') {
    setResult(percentage(expressio))
  }

  if (
    (operators.includes(value) && expressio == "") ||
    (operators.includes(value) && TheLastItemIsOperator(expressio)) ||
    (regex.test(expressio) && value == ".") ||
    (regex2.test(expressio) && value == ".")
  ) {
    return
  } else {
    // Verifica de o último valor de expressão é [e, π, %] se for adiciona X no final da expressão
    if (expressio.at(-1) == "e" || expressio.at(-1) == "π" || expressio.at(-1) == "%") {
      setExpression(expressio + " x " + filterOperators(value.toString(), true))
    } else if (value == "(" || value == ")") {
      setExpression(expressio + value)
      return
    } else { setExpression(expressio + filterOperators(value.toString(), true)) }

    if (
      expressio.toString().at(-1) == ")" &&
      expressio[0] != "("
    ) {
      let a =
        expressio.slice(0, -1) +
        filterOperators(value.toString(), true) +
        ")"

      setExpression(a)

      switch (expressio.split("")[0]) {
        case "√":
          if (sqrt(a) != undefined) setResult(sqrt(a))
          break
        default:
          setExpression("Algo correu mau :(")
          return
      }
    } else if (!operators.includes(value)) {
      if (expressio[0] == "(" && !expressio.includes(")")) {
        return
      } else {
        setResult(
          eval(filterOperators(expressio.toString()) + value).toString()
        )
      }
    }
  }
}

export const calculate = (expression, result) => {
  if (!expression == 0) {
    if (!operators.includes(expression.toString().at(-1))) {
      switch (expression[0]) {
        case '√':
          return sqrt(expression.replaceAll(' ', '')).toString()
        default:
          return eval(filterOperators(expression)).toString()
      }
    } else {
      return
    }
  } else {
    return '0'
  }
}

// Apaga o último valor da expressão
export const deleteLastItem = (expression, setResult) => {
  let value = null

  if (expression == '' || expression == '0' || expression == 0) return '0'

  if (
    ((!operators.includes(expression.toString().at(-2))) ||
      expression.toString().at(-2) == '+' ||
      expression.toString().at(-2) == '-') &&
    expression.toString().at(-1) == ' '
  ) {
    value = expression.toString().slice(0, -3)
  } else {
    value = expression.toString().slice(0, -1)
  }

  return value
}

/*
Filtra os operadores trocando de ÷ para / e x para * e vice versa
  * O parâmetro "clean" recebe "true" para fazer / ficar ÷
  * E recebe false(Padrão) para fazer ÷ ficar /
*/
export const filterOperators = (value, clean = false) => {
  let newValue = null

  if (value == undefined) return '0'

  let arrayValues = value.toString().replaceAll(' ', '').split('')

  if (clean) {
    newValue = arrayValues.map((item) => {
      switch (item) {
        case '/':
          return ' ÷ '
        case '*':
          return ' x '
        case '+':
          return ' + '
        case '-':
          return ' - '
        default:
          return item
      }
    })
  } else {
    newValue = arrayValues.map((item) => {
      switch (item) {
        case '÷':
          return '/'
        case 'x':
          return '*'
        case 'π':
          return Math.PI
        case 'e':
          return Math.E
        default:
          return item
      }
    })
  }

  return newValue.toString().replaceAll(',', '')
}

// Verifica se o último valor do input(expression) é um operador(+,-,/,*,%) ou o ponto(.)
export const TheLastItemIsOperator = (input) => {
  let value = filterOperators(input.toString().replaceAll(' ', '').at(-1))

  return operators.includes(value) ? true : false
}

// Calcula a Percentagem
export const percentage = (x) => {
  if (x == 0) return
  return (eval(filterOperators(x)) * 1) / 100
}

// Calcula a raiz quadrada
export const sqrt = (x) => {
  let value = x.toString()
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('√', '')

  if (!TheLastItemIsOperator(1, x)) {
    return Math.sqrt(eval(filterOperators(value)))
  }
}
