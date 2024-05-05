
import './App.css';
import News from './component/News';
import { useState } from 'react';


function App() {
  const [data, setData] = useState("")

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark m-0">
      <div class="container-fluid px-5">
        <a class="navbar-brand text-white" to="#"><b>News App</b></a>

        <select class="form-select mb-2" aria-label="Default select example" value={data}
          onChange={(e) => setData(e.target.value)}>
          <option selected>Select Category</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>

      </div>
    </nav>
      <News country="in" category={data} />
      <p className='bg-dark text-white text-center py-2'>Copyright © 2023 - 2024 TermsFeed®. All rights reserved.</p>
    </>


  );
}

export default App;
