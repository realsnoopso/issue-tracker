import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { Icon } from '@components/index';

export const Button = ({
	iconName,
	text,
	type,
	status,
	color,
	btnSize,
	_onClick,
}) => {
	const cx = classNames.bind(styles);

	const btnSizeKind =
		btnSize === 'l'
			? cx('size-l')
			: btnSize === 'm'
			? cx('size-m')
			: cx('size-s');

	const btnStatus =
		status === 'hover'
			? cx('status-hover')
			: status === 'press'
			? cx('status-press')
			: status === 'disabled'
			? cx('status-disabled')
			: status === 'active'
			? cx('status-active')
			: cx('status-default');

	const btnType = type === 'ghost' ? cx('type-ghost') : cx('type-contained');

	const btnColor =
		color === 'blue'
			? type === 'outline'
				? cx('outline-color-blue')
				: cx('color-blue')
			: type === 'outline'
			? cx('outline-color-black')
			: cx('color-blue');

	const buttonClassNames = `${cx(
		'btn'
	)} ${btnColor} ${btnSizeKind} ${btnStatus} ${btnType}`;

	return (
		<button className={buttonClassNames} onClick={_onClick}>
			{iconName && (
				<Icon name={iconName} fill="var(--color-light-accent-text)"></Icon>
			)}
			{text}
		</button>
	);
};
