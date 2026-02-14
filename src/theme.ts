import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#05379cff',
      light: '#4D8CFF',
      dark: '#003BB8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD93D',
      light: '#FFE680',
      dark: '#FFC300',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
    divider: '#E2E8F0',
    error: {
      main: '#EF4444',
      light: '#FCA5A5',
      dark: '#DC2626',
    },
    success: {
      main: '#10B981',
      light: '#6EE7B7',
      dark: '#059669',
    },
    warning: {
      main: '#F59E0B',
      light: '#FCD34D',
      dark: '#D97706',
    },
  },

  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',

    h1: {
      fontWeight: 700,
      fontSize: '3.75rem',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      '@media (max-width:1200px)': { fontSize: '3rem' },
      '@media (max-width:900px)': { fontSize: '2.5rem' },
      '@media (max-width:600px)': { fontSize: '2rem' },
    },

    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      '@media (max-width:1200px)': { fontSize: '2.25rem' },
      '@media (max-width:900px)': { fontSize: '2rem' },
      '@media (max-width:600px)': { fontSize: '1.75rem' },
    },

    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': { fontSize: '1.75rem' },
      '@media (max-width:600px)': { fontSize: '1.5rem' },
    },

    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.35,
      '@media (max-width:600px)': { fontSize: '1.25rem' },
    },

    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },

    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },

    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
      fontWeight: 500,
      color: '#475569',
    },

    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 500,
      color: '#64748B',
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#475569',
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: '#64748B',
    },

    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },

    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.6,
      color: '#94A3B8',
    },

    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#64748B',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 12,
  },

  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.06)',
    '0px 6px 12px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.09)',
    '0px 10px 20px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.11)',
    '0px 14px 28px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.13)',
    '0px 18px 36px rgba(0, 0, 0, 0.14)',
    '0px 20px 40px rgba(0, 0, 0, 0.15)',
    '0px 22px 44px rgba(0, 0, 0, 0.16)',
    '0px 24px 48px rgba(0, 0, 0, 0.17)',
    '0px 26px 52px rgba(0, 0, 0, 0.18)',
    '0px 28px 56px rgba(0, 0, 0, 0.19)',
    '0px 30px 60px rgba(0, 0, 0, 0.2)',
    '0px 32px 64px rgba(0, 0, 0, 0.21)',
    '0px 34px 68px rgba(0, 0, 0, 0.22)',
    '0px 36px 72px rgba(0, 0, 0, 0.23)',
    '0px 38px 76px rgba(0, 0, 0, 0.24)',
    '0px 40px 80px rgba(0, 0, 0, 0.25)',
    '0px 42px 84px rgba(0, 0, 0, 0.26)',
    '0px 44px 88px rgba(0, 0, 0, 0.27)',
    '0px 46px 92px rgba(0, 0, 0, 0.28)',
    '0px 48px 96px rgba(0, 0, 0, 0.29)',
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          fontFamily: '"Poppins", sans-serif',
        },
      },
    },
  },
});
