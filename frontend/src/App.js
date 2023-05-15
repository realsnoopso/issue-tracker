import Dropdown from '@components/Dropdown/Dropdown';
import { useRef, useState } from 'react';
import { Button } from '@components/Button/Button';
import { IssuePage } from '@containers/IssuePage/IssuePage';
import { TextInput } from '@components/TextInput/TextInput';
import { Test } from './Test';

function App() {
	if (process.env.NODE_ENV === 'development') {
		const { worker } = require('./mocks/browser');
		worker.start();
	}

	return (
		<div className="App">
			<Test></Test>
			<IssuePage></IssuePage>
			<Button text="BUTTON" btnSize="l" color="blue"></Button>
			<br />
			<TextInput
				size="l"
				states="initial"
				label="Label"
				id="textInput"
				width="288px"
				placeholder="입력하세요."
			></TextInput>
			<br />
			<TextInput
				size="l"
				states="error"
				label="Label"
				id="textInput"
				width="288px"
				placeholder="다시 입력하세요."
			></TextInput>
			<br />
			<TextInput
				size="s"
				states="initial"
				label="Label"
				id="textInput"
				width="288px"
				placeholder="메롱"
			></TextInput>
		</div>
	);
}

export default App;
