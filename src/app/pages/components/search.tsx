import { TextField } from "@mui/material"

const PayoutSearcher: React.FC = () => {
  return(
    <TextField id="outlined-basic"
     label="Search payment ID" 
     variant="outlined"
     size="medium"
     sx={{width:'20%'}}/>

   );

};

export default PayoutSearcher;