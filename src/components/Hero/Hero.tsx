"use client";

import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

const Content = styled.div`
  color: #fff;
`;

export const Hero = () => {
  return (
    <Section>
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <Content>
        <h1>Welcome to the React TypeScript Template</h1>
        <p>
          This is a template for React projects using TypeScript, ESLint,
          Prettier, and Husky.
        </p>
      </Content>
    </Section>
  );
};
