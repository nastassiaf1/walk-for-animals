import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app'));

const root = createRoot(document.getElementById('app')!);
root.render(<div>Hello, React!</div>);
