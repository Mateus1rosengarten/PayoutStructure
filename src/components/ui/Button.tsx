import { Button } from '@mui/material';

interface ButtonComponentProps {
  onClick: () => void;
  label: string;
  customStyle?: object;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  label,
  customStyle = {},
}) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        letterSpacing: { sm: '0.1rem' },
        ...customStyle,
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
