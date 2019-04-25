import createTheme from 'spectacle/lib/themes/default'

export const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#ffffff',
    tertiary: '#e12241',
    quaternary: '#e12241'
  },
  {
    primary: {
      name: 'Lato',
      googleFont: true,
      styles: ['400']
    },
    secondary: {
      name: 'Overpass',
      googleFont: true,
      styles: ['400']
    }
  }
)
