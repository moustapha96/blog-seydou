import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/tailwind.css';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { SiteProvider } from './context/SiteContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastProvider>
      <AuthProvider>
        <SiteProvider>
          <App />
        </SiteProvider>
      </AuthProvider>
    </ToastProvider>
  </BrowserRouter>
);
