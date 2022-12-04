import React, {useState} from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	function decreaseCount(){
		setCount(oldCount => oldCount -1);
	}
	function increaseCount(){
		setCount(oldCount => oldCount + 1);
	}
  return (
	<main className="container">
		<h2 className='title'>Counter App using react <code>useState()</code> hook</h2>
		<div className='card'>
			<button onClick={decreaseCount}>-</button>
			<span>{count}</span>
			<button onClick={increaseCount}>+</button>
		</div>
	</main>
  );
}

export default App;
