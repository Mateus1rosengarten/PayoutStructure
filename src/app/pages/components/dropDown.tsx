"use client";

import { FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent } from "@mui/material"; 

interface HandleOnChange { 
  label: string;
  value: string;  
  items: string[];
  onChange: (event: SelectChangeEvent<string>) => void;
};

const DropDown: React.FC<HandleOnChange> = ({onChange,value,label,items}) => {
    return (
       <FormControl 
       required>
        <InputLabel>{label} </InputLabel>
        <Select
        onChange={onChange}
        value={value}
        label={label}
        className='w-full'
        >
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