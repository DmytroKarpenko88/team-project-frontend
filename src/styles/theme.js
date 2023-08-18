export const theme = Object.freeze({
    colors: {
      accent: '#FFC107',
      light: '#FDF7F2',
      black: '#111111',
      blue: '#54ADFF',
      blueLight: '#CCE4FB',
      grBlue: ['linear-gradient(90%, rgba(155,208,255,1) 3%, rgba(65,158,241,1) 37%)'],
      green: '#00C3AD',
      red: '#F43F5E',     
    },
    fontSizes: {
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      36: '36px',
      48: '48px',      
      68: '68px',      
    },
    breakpoints: {
      mobile: '(min-width: 320px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1280px)',
    },
    animations: {
      cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
    },
    // spacing: {
    //   step: 4,
    // },
    boxShadows: {
        main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
        secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
      },
      transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
  });