import logo from './logo.svg';
import './App.module.css';
import { Icon, Dropdown } from '@components/index';

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
				<Icon />
				<Dropdown text="test" options={['1', '2']}></Dropdown>
			</header>
		</div>
	);
}

export default App;
