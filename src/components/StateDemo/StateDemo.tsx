"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: green;
`;

export const StateDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <Container>
      <h1>State Demo</h1>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </Container>
  );
};
