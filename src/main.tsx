import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// Get the root element by ID
const rootElement = document.getElementById('root');

// Check if the root element exists before creating the root
if (rootElement) {
  // Create a root element for your application
  const root = createRoot(rootElement);

  // Render the App component wrapped with Router into the root element
  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  console.error('Root element not found.');
}
