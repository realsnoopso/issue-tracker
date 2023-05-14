import { useState } from 'react';
import styles from './TextInput.module.css';
import classNames from 'classnames/bind';

export const TextInput = ({ mode, states, label, id, width, height }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const cx = classNames.bind(styles);

	const textInputMode = mode === 'one' ? cx('one') : cx('two');
	const textInputState =
		states === 'initial'
			? cx('initial')
			: states === 'active'
			? cx('active')
			: states === 'typing'
			? cx('typing')
			: cx('disabled');

	const textInputClassName = `${cx(
		'TextInput'
	)} ${textInputMode} ${textInputState}`;

	const LabelClassName = `${cx('typo-dropdown-header')} ${cx('label')}`;

	const InputCLassName = `${cx('typo-body')} ${cx('input')}`;

	return (
		<div style={{ width, height }} className={textInputClassName}>
			<label className={LabelClassName} htmlFor={id}>
				{label}
			</label>
			<input
				className={InputCLassName}
				type="text"
				id={id}
				value={inputValue}
				onChange={handleInputChange}
				placeholder="입력하세요."
			/>
		</div>
	);
};
