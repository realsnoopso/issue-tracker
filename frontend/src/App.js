import { Test } from './Test';
import { Navbar } from './components';

function App() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Test></Test>
    </div>
  );
}

export default App;
