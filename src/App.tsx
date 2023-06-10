import { ReactElement, useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <form>
        <textarea
          cols={30}
          rows={10}
          onChange={handleOnChange}
          value={input}
        ></textarea>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
