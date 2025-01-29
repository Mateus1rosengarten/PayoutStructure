import { CircularProgress } from "@mui/material";

const Spinner:React.FC = () => {
    return(
        <CircularProgress size={30} sx={{
            position:'absolute',
            bottom:'2%'

        }}/>

    );
};

export default Spinner;