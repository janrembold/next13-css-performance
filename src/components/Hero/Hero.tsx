import Image from "next/image";

export const Hero = () => {
  return (
    <section>
      <Image src="/hero.jpg" alt="hero" width={1920} height={300} />
      {/* <Image
        src="/hero.jpg"
        alt="hero"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      /> */}
      <div>
        <h1>Welcome to the React TypeScript Template</h1>
        <p>
          This is a template for React projects using TypeScript, ESLint,
          Prettier, and Husky.
        </p>
      </div>
    </section>
  );
};
