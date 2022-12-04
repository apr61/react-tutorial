import React, {useEffect, useState} from 'react'
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com';

function App() {

  const [resource, setResource] = useState("comments");
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(API_URL+`/${resource}`)
    .then(res => res.json())
    .then(data => {setData(data)})
  }, [resource])

  return (
      <main className='container'>
        <h2>useEffect() hook example using fetch api</h2>
        <div className='button-group'>
          <button onClick={() => setResource("comments")}>comments</button>
          <button onClick={() => setResource("users")}>Users</button>
          <button onClick={() => setResource("albums")}>Albums</button>
          <button onClick={() => setResource("todos")}>Todos</button>
        </div>
        <div className='result'>
          <h2>{resource}</h2>
          {data.map(d => {
            return <pre key={d.id}>{JSON.stringify(d)}</pre>
          })}
        </div>
      </main>
  );
}

export default App;
