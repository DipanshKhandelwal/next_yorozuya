import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { FC } from "react";

type Props = {
  id?: string;
  label?: string;
};

export const NumericTextField: FC<Props> = ({ label = "Amount", id = ""}) => {
  const [strval, setValid] = useState("");

  const isNumeric = (value: string) => {
    function onlyNumbers(value: string) {
      const ret = /^[0-9\.]*$/.test(value);
      return ret;
    }

    function countString(str: string, letter: string) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
          if (str.charAt(i) == letter) {
              count += 1;
          }
      }
      return count;
    }

    if (value == "")
      return true;

    if (value.length > 10) 
      return false;

    if (!onlyNumbers(value))
      return false;

    if (countString(value, '.') > 1)
      return false;

    const numeric = parseFloat(value);
    if (isNaN(numeric))
      return false;

    return true;
  }

  return (
    <div className="p-0">
     <Box
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' },
      }}
      >
        <div>
          <TextField className="" autoComplete="off" 
            id={id}
            label={label}
            required
            value={strval}
            onChange={(event) => {
              const newValue = event.target.value;
              if (isNumeric(newValue))
                setValid(newValue);
            }}
          />
        </div>
      </Box>
    </div>
  );
};
