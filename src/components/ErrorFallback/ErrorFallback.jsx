import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-fallback">
      <div className="container">
        <div className="text-center p-lg">
          <h2 className="text-primary mb-md">Something went wrong</h2>
          <p className="text-muted mb-lg">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <div className="flex justify-center gap">
            <button 
              className="btn btn-primary" 
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => window.location.href = '/'}
            >
              Go home
            </button>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-lg">
              <summary>Error details</summary>
              <pre className="text-left mt-sm">{error.message}</pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;