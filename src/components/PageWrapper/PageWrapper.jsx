import React from 'react';
import '../../styles/components/PageWrapper/PageWrapper.css';

const PageWrapper = ({ children, title, description }) => {
  return (
    <div className="page-wrapper">
      {title && (
        <div className="page-header">
          <div className="container">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
