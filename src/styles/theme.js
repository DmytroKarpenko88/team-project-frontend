export const theme = Object.freeze({
  colors: {
    yellow: '#FFC107',
    grey: '#888888',
    light: '#FDF7F2',
    black: '#111111',
    blue: '#54ADFF',
    blueLight: '#CCE4FB',
    blueLight2: '#c5dff6',
    grBlue: [
      'linear-gradient(to, rgba(155,208,255,1) 3%, rgba(65,158,241,1) 37%)',
    ],
    grBlue2: 'linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)',
    green: '#00C3AD',
    red: '#F43F5E',
    white: '#FFFFFF',
    bgColor: ' #FEF9F9',
  },

  fonts: {
    main: {
      light: 'Manrope-Light', //300
      regular: 'Manrope-Regular', //400
      medium: 'Manrope-Medium', //500
      semiBold: 'Manrope-SemiBold', //600
      bold: 'Manrope-Bold', //700
    },
    secondary: {
      regular: 'Inter-Regular', //400
      medium: 'Inter-Medium', //500
    },
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
  boxShadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondary: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  transition: {
    main: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '250ms',
  },
});
