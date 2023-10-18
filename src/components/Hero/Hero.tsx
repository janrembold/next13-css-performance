import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex justify-center items-center h-[60vh] w-full">
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <div className="text-white">
        <h1>Welcome to the React TypeScript Template</h1>
        <p>
          This is a template for React projects using TypeScript, ESLint,
          Prettier, and Husky.
        </p>
      </div>
    </section>
  );
};
