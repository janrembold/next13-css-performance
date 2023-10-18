import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Image
        src="/hero.jpg"
        alt="hero"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <div className={styles.content}>
        <h1>Welcome to the React TypeScript Template</h1>
        <p>
          This is a template for React projects using TypeScript, ESLint,
          Prettier, and Husky.
        </p>
      </div>
    </section>
  );
};
