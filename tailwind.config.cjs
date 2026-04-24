module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        biaso: {
          white:          '#FAFAF8',
          cream:          '#F4F2EE',
          muted:          '#787672',
          border:         '#E2DFD9',
          'border-hover': '#C8C4BC',
          black:          '#0F0D0C',
          // Identidade visual
          dark:           '#1C1714',
          dark2:          '#2A2420',
          gold:           '#C8A882',
          gold2:          '#A8845E',
        },
      },
      fontFamily: {
        sans:  ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        label:    ['11px', { letterSpacing: '.1em' }],
        'body-sm':['15px', { lineHeight: '1.75' }],
        body:     ['16px', { lineHeight: '1.75' }],
        question: ['20px', { lineHeight: '1.4'  }],
        option:   ['15px', { lineHeight: '1.55' }],
        'result-h':['26px',{ lineHeight: '1.25' }],
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0.5': '0.5px',
      },
      maxWidth: {
        quiz: '520px',
      },
    },
  },
  plugins: [],
}