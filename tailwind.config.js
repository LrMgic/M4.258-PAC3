module.exports = {
  important: '#app',
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      'black': 'rgba(33, 37, 41, 1)',
    },
    screens: {
      'sm': '640px',
      'md': '45em',
    },
    minWidth: {
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      vw1: '1vw',
      vw2: '2vw',
      vw25: '25vw',
      vw30: '30vw',
      vw45: '45vw',
      vw50: '50vw',
      vw75: '75vw',
      vw100: '100vw',
      vh25: '25vh',
      vh45: '45vh',
      vh50: '50vh',
      vh75: '75vh',
      vh100: '100vh',
    },
    maxWidth: {
      vw1: '1vw',
      vw2: '2vw',
      vw25: '25vw',
      vw45: '45vw',
      vw50: '50vw',
      vw75: '75vw',
      vw100: '100vw',
      vh25: '25vh',
      vh45: '45vh',
      vh50: '50vh',
      vh75: '75vh',
      vh100: '100vh',
    },
    spacing: {
      vw1: '1vw',
      vw2: '2vw',
      vw5: '5vw',
      vw25: '25vw',
      vw45: '45vw',
      vw50: '50vw',
      vw75: '75vw',
      vw100: '100vw',
      vh25: '25vh',
      vh45: '45vh',
      vh50: '50vh',
      vh75: '75vh',
      vh100: '100vh',
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      17: '72px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
      110: '800px'
    },
    colors: {
      propi: {
        1: 'rgb(34, 103, 230)',
        2: 'rgb(77, 81, 90)',
        3: 'rgba(39, 144, 185, 0.712)',
        4: 'rgb(214, 227, 255)',
        5: 'rgba(206, 212, 218, 1)',
        Text: '#282828',
        Text2: '#575757',
      },
      white: 'rgb(255, 255, 255)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
