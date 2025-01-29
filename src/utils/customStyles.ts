import { Theme } from "@mui/material";


// page styles {
export const customButtonStyle = {
    width: {
      xs: "100%",
      sm: "45%",
      md: "30%",
      lg: "20%",
      xl: "15%",
    },
    margin: {
      xs: "auto",
      sm: "0",
    },
    paddingX: {
      xs: "0",
      sm: "0",
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
    paddingTop: '2.5rem', 
    paddingBottom: '2.5rem',
  };

  export const appTitle = {
    fontSize: {
      xs: '2em',
      sm: '2.5em',
      md: '3em',
      lg: '4em',
      xl: '5em',
    }}

// table component styles

export const tableCell = {
    fontWeight: 700,
    fontSize: "1rem"
  };

export const tableProtocol = {
    color:'#1976d2',
    fontWeight: 700

}  

export const getStatus = (status: string) => ({
    opacity: status === 'Failed' ? 0.5 : 1,
  });  


// form component styles 

export const closeIcon = (theme: Theme) => ({
    position: 'absolute',
    right: 16,
    top: 16,
    color: theme.palette.grey[500],
  });
  
export const title = {
    fontWeight: 600, 
    fontSize: "1.3em",
    color:'#1976d2',
    textAlign:'center'
}

// modal components styles 


export const modal = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem', 
  paddingTop: '3.5rem', 
  '@media (min-width: 640px)': {
    padding: '5rem', 
  }
}

export const warningIcon = {
  fontSize: 30 ,
  position:'absolute',
  top:'2vh' 

}

export const box = {
  position: 'relative',
  padding: '1rem',
  '@media (min-width: 640px)': {
    padding: '3rem', 
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem', 
  margin: 'auto', 
  zIndex: 1000,
  width: '100%', 
  '@media (min-width: 768px)': {
    width: '75%', 
  },
  '@media (min-width: 1024px)': {
    width: '50%', 
  },
  '@media (min-width: 1280px)': {
    width: '33.3333%', 
  },
  height: '100%', 
  backgroundColor: 'white', 
  borderRadius: '0.375rem', 
};
