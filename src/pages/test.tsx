import { Button, Stack } from "@mui/material";
import StakeButton from "components/Test/StakeButton";
import UnstakeButton from "components/Test/UnstakeButton";
import UpdateButton from "components/Test/UpdateButton";
import WithdrawButton from "components/Test/WithdrawButton";
import type { NextPage } from "next";
import { useState } from "react";

const Test: NextPage = (props) => {
  return (
    <div>
        <title>Test</title>
        <Stack direction="row" spacing={2} mx={4} >
          <WithdrawButton />
          <UpdateButton />
          <StakeButton />
          <UnstakeButton />
        </Stack>
    </div>
  );
};

export default Test;
