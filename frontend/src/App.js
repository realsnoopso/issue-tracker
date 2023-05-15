import { Test } from './Test';

function App() {
	if (process.env.NODE_ENV === 'development') {
		const { worker } = require('./mocks/browser');
		worker.start();
	}

	return (
		<div className="App">
			<Test></Test>
		</div>
	);
}

export default App;
