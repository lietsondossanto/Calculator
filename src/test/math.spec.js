import * as Math from './../utils/Math'

describe('Testando a lib Math', () => {
  describe('Validando os valores', () => {
    it('Deve validar a expressão matematica e retornar o resultado do calculo', () => {
      expect(Math.calculate(10 + 10, 20)).toBe('20')
      expect(Math.calculate('√(4)')).toBe('2')
      expect(Math.calculate(0)).toBe('0')
      expect(Math.calculate('1+')).toBeUndefined()
      expect(Math.calculate('2 x (1 + 1)')).toBe("4")
    })

    it('Deve apagar o último valor da expressão matematica', () => {
      expect(Math.deleteLastItem('1+1')).toBe('1+')
      expect(Math.deleteLastItem('1 - 1')).toBe('1 - ')
      expect(Math.deleteLastItem('1 + 1')).toBe('1 + ')
      expect(Math.deleteLastItem('1 x ')).toBe('1')
      expect(Math.deleteLastItem('')).toBe('0')
      expect(Math.deleteLastItem('1 - ')).toBe('1')
      expect(Math.deleteLastItem('1 + ')).toBe('1')
    })

    it('Deve retornar ÷ ou x se encontar / ou * na expressão em questão', () => {
      expect(Math.filterOperators('1 * 2', true)).toBe('1 x 2')
      expect(Math.filterOperators('1 - 2', true)).toBe('1 - 2')
      expect(Math.filterOperators('1+2', true)).toBe('1 + 2')
      expect(Math.filterOperators('1 / 2', true)).toBe('1 ÷ 2')
    })

    it('Deve retornar / ou * se encontar ÷ ou x na expressão em questão', () => {
      expect(Math.filterOperators('1 ÷ 2')).toBe('1/2')
      expect(Math.filterOperators('1 x 2')).toBe('1*2')
      expect(Math.filterOperators(undefined)).toBe('0')
      expect(Math.filterOperators('π')).toBe('3.141592653589793')
      expect(Math.filterOperators('e')).toBe('2.718281828459045')
    })

    it('Deve retornar True se o último valor da expresão for um operador', () => {
      expect(Math.TheLastItemIsOperator('1+')).toBe(true)
      expect(Math.TheLastItemIsOperator('1+1')).toBe(false)
    })
  })

  describe('Testando o retorno da funções Matemáticas', () => {
    it('Deve retornar a percentagem do valor de x', () => {
      expect(Math.percentage(4)).toBe(0.04)
    })

    it('Deve retornar a raiz quadrada do valor de x', () => {
      expect(Math.sqrt(4)).toBe(2)
    })
  })
})
