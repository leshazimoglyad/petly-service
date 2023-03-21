import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      mobileResponsive: 320,
      mobileAdaptive: 480,
      tablet: 768,
      desktop: 1200,
    },
  },
  customColors: {
    appBackground: '#FDF7F2',
    cardsBackground: '#FFFFFF',
    accent: '#F59256',
    primaryFont: '#111111',
    homeHeroTitleFont: '#000000',
    navigationFont: '#181C27',
    accentFont: '#FFFFFF',
    errorNotif: '#E2001A',
    successNotif: '#3CBC81',
    loginLink: '#3091EB',
    deleteButton: '#FF6101',
    translucentBlack: 'rgba(17, 17, 17, 0.6)',
    photoDescription: 'rgba(255, 255, 255, 0.6)',
    searchBarPlaceholder: '#535353',
    newsDescription: '#111321',
  },
  customShadow: {
    primary: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    secondary: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    addButton: '0px 4px 14px rgba(0, 0, 0, 0.11)',
    popUp: '4px 4px 8px rgba(0, 0, 0, 0.25)',
  },
  customBorderRadius: {
    round: '50%',
    primary: '40px',
    secondary: '20px',
    findPetCard: 'border-radius: 0px 0px 40px 40px',
  },
  customBorders: {
    primaryButtons: '2px solid #F59256',
    secondaryButtons: '1px solid rgba(245, 146, 86, 0.5)',
    errorNotif: '1px solid #E2001A',
    successNotif: '1px solid #3CBC81',
  },
  customFontFamily: {
    logo: 'Poppins',
    primary: 'Manrope',
    searchBar: 'Inter',
  },
  customFontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 68],
  customFontWeight: {
    normalS: 400,
    normalM: 500,
    bold: 700,
  },
  customLineHeight: [
    '15px',
    '16px',
    '17px',
    '19px',
    '22px',
    '24px',
    '25px',
    '26px',
    '27px',
    '33px',
    '38px',
    '42px',
    '44px',
    '48px',
    '49px',
    '66px',
    '100px',
  ],
  customLetterSpacing: {
    s: '-0.01em',
    m: '0.04em',
    l: '0.07em',
  },
});
