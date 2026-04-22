module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        biaso: {
          black:        '#0F0F0F',
          white:        '#FAFAF8',
          cream:        '#F4F2EE',
          muted:        '#787672',
          border:       '#E2DFD9',
          'border-hover': '#C8C4BC',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0.5': '0.5px',
      },
      maxWidth: {
        quiz: '520px',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
}