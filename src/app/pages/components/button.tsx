"use client";
import { Button } from "@mui/material";

interface ButtonComponentProps {
  onClick: () => void;
  label: string;
  customStyle?: object;
  disabled? : boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ 
    onClick,
    label,
    disabled,
    customStyle = {},
}) => {
  return (
    <Button
      onClick={onClick}
      color="primary"
      variant="contained"
      disabled={disabled}
    
      sx={{
        letterSpacing : {sm:'0.1rem'},
         ...customStyle
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
