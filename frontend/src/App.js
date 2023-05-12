import logo from './logo.svg';
import './App.module.css';
import Dropdown from '@components/Dropdown/Dropdown';
import { useRef, useState } from 'react';
import { Button } from './components/Button/Button';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedId, setSelectedId] = useState(false);
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
				<Dropdown
					isOpen={isOpen}
					btnOnClick={() => setIsOpen(!isOpen)}
					btnText="메롱"
					header="헤더더"
					hasRadioBtn={true}
					options={[
						{ id: 'adfsasdf', profile: 'dfadfsdfa', contents: 'test' },
						{ id: 'adfasdfxx', profile: 'ddd', contents: 'test2' },
					]}
					optionOnClick={({ currentTarget }) => {
						const id = currentTarget.getAttribute('id');
						setSelectedId(id);
					}}
					selectedId={selectedId}
				></Dropdown>
			</header>
			<Button text="BUTTON" btnSize="l" color="blue"></Button>
		</div>
	);
}

export default App;
