import { Theme } from '@mui/material';

// page styles {
export const customButtonStyle = {
  width: {
    xs: '100%',
    sm: '45%',
    md: '30%',
    lg: '20%',
    xl: '15%',
  },
  margin: {
    xs: 'auto',
    sm: '0',
  },
  paddingX: {
    xs: '0',
    sm: '0',
  },
};

export const container = {
  padding: {
    xs: '1rem',
    sm: '2.5rem',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: {
    xs: '1.25rem',
    sm: '1.75rem',
  },
  paddingTop: {
    xs: '3rem',
    sm: '2.5rem',
  },
  paddingBottom: '2.5rem',
};

export const appTitle = {
  fontSize: {
    xs: '2em',
    sm: '2.5em',
    md: '3em',
    lg: '4em',
    xl: '5em',
  },
};

// table component styles

export const tableCell = {
  fontWeight: 700,
  fontSize: {
    xs: '0.8em',
    sm: '0.9em',
    md: '1em',
    lg: '1em',
    xl: '1em',
  },
};

export const tableProtocol = {
  color: '#1976d2',
  fontWeight: 700,
  fontSize: {
    xs: '0.8em',
    sm: '0.9em',
    md: '1em',
    lg: '1em',
    xl: '1em',
  },
};

export const getStatus = (status: string) => ({
  opacity: status === 'Failed' ? 0.5 : 1,
  fontSize: {
    xs: '0.8em',
    sm: '0.9em',
    md: '1em',
    lg: '1em',
    xl: '1em',
  },
});

// form components

export const closeIcon = (theme: Theme) => ({
  position: 'absolute',
  right: 16,
  top: 16,
  color: theme.palette.grey[500],
});

export const modal = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '3.5rem',
  padding: { xs: '1.5rem', sm: '5rem' },
};

export const title = {
  fontWeight: 600,
  fontSize: '1.3em',
  color: '#1976d2',
  textAlign: 'center',
  marginTop: '1.5em',
};

export const warningIcon = {
  fontSize: 30,
  position: 'absolute',
  top: '2vh',
};

export const box = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: { xs: '1rem', sm: '1.3rem', md: '1.4rem' },
  margin: 'auto',
  zIndex: 1000,
  height: 'auto',
  backgroundColor: 'white',
  borderRadius: '0.375rem',
  padding: { xs: '1rem', sm: '2rem', md: '3rem' },
  paddingTop: { xs: '0.5rem', sm: '1rem' },
  width: { xs: '100%', sm: '90%', md: '50%', lg: '40%', xl: '30%' },
  minWidth: '300px',
  boxSizing: 'border-box',
};

export const rowBox = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: '1rem',
  width: '100%',
};

export const textFieldBox = {
  flex: 1,
  width: '100%',
  maxWidth: 'none',
};
