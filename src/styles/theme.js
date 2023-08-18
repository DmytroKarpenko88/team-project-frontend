export const theme = Object.freeze({
    colors: {
      accent: '#FFC107',
      light: '#FDF7F2',
      black: '#111111',
      blue: '#54ADFF',
      blueLight: '#CCE4FB',
      grBlue: ['linear-gradient(to, rgba(155,208,255,1) 3%, rgba(65,158,241,1) 37%)'],
      green: '#00C3AD',
      red: '#F43F5E',     
    },
    fontSizes: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '20px',
      xl: '24px',
      xxl: '36px',
      xxxl: '48px',      
      heroTitle: '68px',      
    },
    breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1280px',
    },
    animations: {
      cubicBezier: 'cubic-bezier(0, 0.110, 0.35, 2);',
    },
    spacing: {
      step: 4,
    },
  });