// AboutPage.tsx
import styles from '@/app/globals.css';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>
        Hello! I am a passionate developer who is diving into the world of Next.js 13. I have always been excited about building efficient and dynamic web applications, and Next.js seems to be the perfect framework to achieve that.
      </p>
      <p>
        With the release of Next.js 13, I am eager to explore all the new features and enhancements it brings to the table. The idea of optimizing performance, simplifying routing, and taking advantage of server-side rendering really resonates with me.
      </p>
      <p>
        This journey of learning Next.js 13 has been both challenging and rewarding. Ive been diving deep into the TypeScript integration, understanding the updated data fetching methods, and mastering the art of creating truly dynamic and engaging user interfaces.
      </p>
      <p>
        This website serves as my personal playground as I experiment with various Next.js 13 concepts and techniques. Feel free to explore the different pages and functionalities I haveve implemented. Your feedback and suggestions are highly appreciated!
      </p>
    </div>
  );
};

export default AboutPage;
