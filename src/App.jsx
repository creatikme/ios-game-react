import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Hero2 />
    </div>
  );
}

export default App;
