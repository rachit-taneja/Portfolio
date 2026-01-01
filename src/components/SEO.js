import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Rachit Taneja| Full Stack Developer</title>
      <meta name="description" content="Portfolio of Rachit Taneja, a passionate web developer skilled in React, Node.js, and modern web technologies." />
      <meta name="keywords" content="Rachit Taneja, Rachit Taneja, Rachit, Taneja, Web Developer Portfolio, React Developer, Indian Developer, Indian Coder, BCA DS&AI" />
      <meta name="author" content="Rachit Taneja" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph / Social Sharing
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ashapumohanportfolio.netlify.app/" />
      <meta property="og:title" content="Mohan Ashapu | Developer Portfolio" />
      <meta property="og:description" content="Explore the projects, skills, and contact information of Mohan Ashapu." />
      <meta property="og:image" content="https://ashapumohanportfolio.netlify.app/portfolio.png" /> */}

    </Helmet>
  );
};

export default SEO;
