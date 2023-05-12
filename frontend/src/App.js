import logo from './logo.svg';
import './App.module.css';
import { Button } from './components/Button/Button';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Button text="BUTTON" btnSize="l" color="blue"></Button>
		</div>
	);
}

export default App;
