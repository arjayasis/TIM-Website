import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gracefully intercept and suppress third-party browser/extension errors (such as MetaMask) inside the iframe sandbox
if (typeof window !== 'undefined') {
  const ignorePatterns = [
    /metamask/i,
    /ethereum/i,
    /wallet/i,
    /blockchain/i,
    /provider/i,
    /rpc/i
  ];
  
  const handleError = (event: ErrorEvent) => {
    const message = event.message || '';
    const errorStack = event.error?.stack || '';
    if (ignorePatterns.some(pattern => pattern.test(message) || pattern.test(errorStack))) {
      event.preventDefault();
      event.stopPropagation();
      console.warn("Suppressed external third-party extension error:", message);
      return true;
    }
  };

  const handleRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    const reasonStr = typeof reason === 'string' ? reason : (reason?.message || JSON.stringify(reason) || '');
    const reasonStack = reason?.stack || '';
    if (ignorePatterns.some(pattern => pattern.test(reasonStr) || pattern.test(reasonStack))) {
      event.preventDefault();
      event.stopPropagation();
      console.warn("Suppressed external third-party extension rejection:", reasonStr);
      return true;
    }
  };

  window.addEventListener('error', handleError, true);
  window.addEventListener('unhandledrejection', handleRejection, true);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
