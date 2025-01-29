"use client";

import { Select, MenuItem, FormControl,SelectChangeEvent } from '@mui/material';

interface DropDownProps {
  onChange: (event: SelectChangeEvent<string>, id: string) => void;
  value: string;
  items: string[];
  disabled: boolean;
  id:string;
}

const DropDown: React.FC<DropDownProps> = ({ value,items,disabled,onChange,id}) => {
  return (
    <FormControl sx={{flex:1}}>
      <Select value={value} onChange={(event) => onChange(event ,id)} disabled={disabled}>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
