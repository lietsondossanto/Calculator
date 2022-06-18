const colors = {
  black: '#000',
  white: '#fff',
  'blue-dark': '#144890',
  'blue-base': '#2374e1',
  'blue-light': '#81b0ee',
  'blue-lighter': '#d7e5f9',
  'red-dark': '#e60000',
  'red-base': '#ff0000',
  'red-light': '#f33',
  'red-lighter': '#f7d4d6',
  'yellow-dark': '#ab570a',
  'yellow-base': '#f5a623',
  'yellow-light': '#f7b955',
  'yellow-lighter': '#ffefcf',
  'green-dark': '#149045',
  'green-base': '#1beb6e',
  'green-light': '#81eead',
  'green-lighter': '#d5fbe4',
  'purple-dark': '#3c0f57',
  'purple-base': '#6a1b9a',
  'purple-light': '#c486ea',
  'purple-lighter': '#ead4f7',
  'grey-50': '#fafafa',
  'grey-100': '#f5f5f5',
  'grey-200': '#eee',
  'grey-300': '#e0e0e0',
  'grey-400': '#bdbdbd',
  'grey-500': '#9e9e9e',
  'grey-600': '#757575',
  'grey-700': '#616161',
  'grey-800': '#424242',
  'grey-900': '#212121'
}

const Theme = {
  title: 'LIGHT',
  colors: {
    ...colors,
    primary: colors['blue-base'],
    secundary: '#6f86d6',
    background: colors['white'],
    backgroundContrast: colors['grey-100'],
    text: colors['grey-700'],
    textContrast: colors['grey-900'],
    icon: colors['grey-600'],
    link: colors['blue-dark'],
    linkContrast: colors['purple-base']
  }
}


export default Theme
