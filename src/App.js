import React, { useState } from 'react';
import Form from './components/form/Form';
import Output from './components/output/Output';

import './css/App.css';

function App() {
  const [form, setToForm] = useState(true);
  const [output, setToOutput] = useState(false);

  const handleChange = () => {
    setToForm((previous) => !previous);
    setToOutput((previous) => !previous);
  };

  return (
    <main>
      {form && <Form moveToOutput={handleChange} />}
      {output && <Output moveToForm={handleChange} />}
    </main>
  );
}

export default App;
