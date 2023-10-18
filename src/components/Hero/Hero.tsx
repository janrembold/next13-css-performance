import { Box } from "@mui/system";
import Image from "next/image";

export const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        width: "100%",
      }}
    >
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <Box sx={{ color: "#fff" }}>
        <h1>Welcome to the React TypeScript Template</h1>
        <p>
          This is a template for React projects using TypeScript, ESLint,
          Prettier, and Husky.
        </p>
      </Box>
    </Box>
  );
};
