
import React from 'react';

import Header from '../src/Header';
import Blog from '../src/Blog';

function Layout({ showContactForm, setShowContactForm, language, changeLanguage }) {
  return (
    <div>
      <Header
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
        language={language}
        changeLanguage={changeLanguage}
      />
      <Blog />      
      
    </div>
  );
}

export default Layout;
