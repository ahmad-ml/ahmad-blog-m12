import React from 'react';

const AboutPage: React.FC = () => {
  const containerStyle = {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p style={paragraphStyle}>
        Hello! I am a passionate developer who is diving into the world of Next.js 13. I have always been excited about building efficient and dynamic web applications, and Next.js seems to be the perfect framework to achieve that.
      </p>
      <p style={paragraphStyle}>
        With the release of Next.js 13, I am eager to explore all the new features and enhancements it brings to the table. The idea of optimizing performance, simplifying routing, and taking advantage of server-side rendering really resonates with me.
      </p>
      <p style={paragraphStyle}>
        This journey of learning Next.js 13 has been both challenging and rewarding. Ive been diving deep into the TypeScript integration, understanding the updated data fetching methods, and mastering the art of creating truly dynamic and engaging user interfaces.
      </p>
      <p style={paragraphStyle}>
        This website serves as my personal playground as I experiment with various Next.js 13 concepts and techniques. Feel free to explore the different pages and functionalities I have implemented. Your feedback and suggestions are highly appreciated!
      </p>
    </div>
  );
};

export default AboutPage;
