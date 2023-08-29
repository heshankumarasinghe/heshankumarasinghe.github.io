/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
      },
      extend: {
        colors: {
          primary: 'hsl(343, 95%, 36%)',
          onPrimary: 'hsl(0, 0%, 100%)',
          secondary: 'hsl(203, 12%, 29%)',
          onSecondary: 'hsl(0, 0%, 100%)',
          accent: 'hsl(0, 0%, 0%)',
          onAccent: 'hsl(0, 0%, 100%)'
        },
        height: {
          100: '28rem',
          102: '30rem',
          104: '34rem',
          105: '37rem', // used
          106: '40rem', // used
          107: '43rem' // used
          // 108: '44rem',
          // 110: '48rem'
        },
        padding: {
          84: '23rem'
        },
        minHeight: (theme) => ({
          ...theme('spacing'),
        }),
        animation: {
          'dot-flashing': 'dot-flashing 1s infinite alternate'
        },
        keyframes: {
          'dot-flashing': {
            '0%': {
              backgroundColor: 'white'
            },
            '50%, 100%': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            },
          }
        }
      },
    },
    plugins: [
      require('tailwindcss-animation-delay')
    ],
  }
