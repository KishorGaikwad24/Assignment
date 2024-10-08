import React from 'react';
import { createRoot } from 'react-dom/client'; // For React 18
import App from './App';
import './index.css'; // Optional, if you have styles

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
