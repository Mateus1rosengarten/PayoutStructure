'use client'
import { Box,Typography } from "@mui/material";
import ButtonComponent from "./pages/components/button";
import ModalCreatePayment from "./pages/components/modalCreate";
import ModalEdit from "./pages/components/modalEdit";
import PayoutsDashboard from "./pages/payouts";

export default function Home() {
  
  const handleOnClick = () => {
    console.log('clicked')
  }

  const customButtonStyle = {
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
    paddingX:{
        xs:'0',
        sm:'0',
   }};
    


  
  return (
    <Box 
    sx={{
      padding: { xs: 4, sm: 10 },
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: 5, sm: 7},
      py: 10
    }}>
      <Typography variant="h2" className="text-center"
      sx={{
        fontSize:{xs:'2em', sm:'2.5em',md:'3em',lg:'4em',xl:'5em'},
      }}
      >Payment Dashboard</Typography>
      <ButtonComponent onClick={handleOnClick} label="Create new Payment" customStyle={customButtonStyle} />
      <PayoutsDashboard /> 
       <ModalCreatePayment />
       <ModalEdit />
     </Box>
  );
}
