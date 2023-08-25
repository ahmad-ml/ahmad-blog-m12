import React from 'react';

const ContactPage: React.FC = () => {
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
      <h1 style={headingStyle}>Contact Me</h1>
      <p style={paragraphStyle}>
        ahmad@niftyitsolution.com
      </p>
    </div>
  );
};

export default ContactPage;
