import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Keyboard from "react-simple-keyboard";
import InputAdornment from '@mui/material/InputAdornment';
import "react-simple-keyboard/build/css/index.css";

import { FC } from "react";
import { NumericTextField } from "components";

type Props = {
  layoutName?: string;
  id: string,
};

export const NumericInput: FC<Props> = ({ layoutName = "default", id }) => {
  const [input, setInput] = useState("￥0");
  const [currency, setCurrency] = useState("￥0");

  const onChange = (value: string) => {
    console.log("Input changed", value);
      setInput(value);
      if (isNaN(parseFloat(value)))
        setCurrency("￥0");
      else {
        const currency = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(parseFloat(value));
        setCurrency(currency);
      }
  };

  const onKeyPress = (button: string) => {
    console.log("Button pressed", button);
  };

  return (
    <div className="p-0">
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "dark",
        }}
      >
        <Box
        sx={{
          bgcolor: "aliceblue",
          color: "black",
          border: 0,
          borderRadius: 2,
        }}>
        <TextField className="text-3xl font-bold" 
            autoComplete="off" 
            id={id}
            required
            value={currency}
            fullWidth
            size="medium"
            inputProps={{min: 0, style: { textAlign: 'right' }}}
          />
          </Box>
        <Keyboard
          onChange={onChange}
          onKeyPress={onKeyPress}
          keyboardRef={(r) => r}
          layoutName={layoutName}
          layout={{
            default: ["1 2 3", "4 5 6", "7 8 9", " 0 .", "{backspace}"],
            float: ["1 2 3", "4 5 6", "7 8 9", " 0 ", "{backspace}"],
          }}
          display={{
            "{backspace}": "backspace",
          }}
          maxLength={20}
          inputPattern={/^\d+\.{0,1}\d{0,}$/}
          theme={"hg-theme-default"}
        />
      </Box>
    </div>
  );
};
