import Index from './components/Index';
import { BrowserRouter } from 'react-router-dom';
import { SystemProvider } from './context/SystemContext';
function App() {
  return (
    <>
      <SystemProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </SystemProvider>
    </>
  );
}

export default App;
