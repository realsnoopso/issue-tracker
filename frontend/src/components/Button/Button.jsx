import styles from './Button.module.css';
import classNames from 'classnames/bind';
import { Icon } from '@components/index';

export const Button = ({
	icon,
	text,
	type,
	status,
	color,
	width,
	btnSize,
	_onClick,
	style,
}) => {
	const cx = classNames.bind(styles);

	const btnSizeKind = cx(`size-${btnSize}`);
	const textSizeClass = `typo-${btnSize}`;
	const btnStatus = cx(`status-${status ?? 'default'}`);
	const btnType = type === 'ghost' ? cx('type-ghost') : cx('type-contained');
	const btnColor =
		type === 'outline'
			? cx(`outline-color-${color ?? 'black'}`)
			: cx('color-blue');

	const getTextColor = () => {
		if (type === 'ghost') {
			return 'var(--color-light-neutral-text)';
		}
		if (type === 'outline') {
			if (color === 'blue') {
				return 'var(--color-light-accent-text-weak)';
			}
			return 'var(--color-light-neutral-text)';
		}
		return 'var(--color-light-accent-text)';
	};
	const textColor = getTextColor(type);

	const buttonClassNames = `${cx(
		'btn'
	)} ${btnColor} ${btnSizeKind} ${btnStatus} ${btnType}`;

	return (
		<button
			className={buttonClassNames}
			onClick={_onClick}
			style={{ ...style, width }}
		>
			<Icon name={icon} fill={textColor}></Icon>
			<span style={{ color: textColor }} className={textSizeClass}>
				{text}
			</span>
		</button>
	);
};
