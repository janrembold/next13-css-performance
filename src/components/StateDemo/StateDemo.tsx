"use client";

import { Button } from "@mui/base";
import { Box, styled } from "@mui/system";
import { useEffect, useState } from "react";

const StyledButton = styled(Button)`
  background-color: green;
`;

export const StateDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <h1>State Demo</h1>
      <p>Count: {count}</p>
      <StyledButton onClick={() => setCount(count + 1)}>Increment</StyledButton>
    </Box>
  );
};
