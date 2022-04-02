import React from 'react';
import ReactDOMClient  from 'react-dom/client';
import GifExpertApp from './Components/GifExpertApp';
import './index.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<GifExpertApp />);