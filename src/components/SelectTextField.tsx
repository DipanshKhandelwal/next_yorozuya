import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { FC } from "react";

type Props = {
  label?: string;
};

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export const SelectTextFields: FC<Props> = ({ label = "Token"}) => {
  const [currency, setCurrency] = useState("EUR");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  
  return (
    <div className="p-0">
     <Box
      sx={{
        '& .MuiTextField-root': { m: 3, width: '10ch' },
      }}
      >
        <div>
          <TextField
            id="select-token"
            select
            label={label}
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </div>
  );
};