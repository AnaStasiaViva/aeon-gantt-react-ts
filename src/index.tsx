import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.scss';
import "gantt-task-react/dist/index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
