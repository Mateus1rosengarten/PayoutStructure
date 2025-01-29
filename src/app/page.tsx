"use client";
import { Box, Typography } from "@mui/material";
import ButtonComponent from "@/components/button";
import ModalCreatePayment from "@/components/modalCreate";
import ModalEdit from "@/components/modalEdit";
import PayoutsDashboard from "./payouts";
import BasicPagination from "@/components/pagination";
import { useCreatePayment } from "@/context/createPayment";
import { appTitle, container, customButtonStyle,} from "@/utils/customStyles";


export default function Home() {
  const {setModalOpen} = useCreatePayment();

  const handleOnClick = () => {
    console.log("clicked");
    setModalOpen(true);
  };

  

  return (
    <Box
      sx={container}
    >
      <Typography
        variant="h2"
        className="text-center"
        sx={appTitle}
      >
        Payment Dashboard
      </Typography>
      <ButtonComponent
        label="Create new Payment"
        customStyle={customButtonStyle}
        onClick={handleOnClick}
      />
      {/* <BasicPagination /> */}
      <PayoutsDashboard />
      <ModalCreatePayment />
      <ModalEdit />
    </Box>
  );
}
