import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import './index.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </StrictMode>
  );
} else {
  console.error('No se encontró el elemento raíz. Asegúrate de que existe un div con id "root" en tu archivo HTML.');
}
