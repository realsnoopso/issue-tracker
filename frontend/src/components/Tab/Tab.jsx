import styles from './Tab.module.css';
import classNames from 'classnames/bind';
import { Button } from '@components/index';

export const Tab = ({ buttonDatas, active, _onClick }) => {
	const cx = classNames.bind(styles);
	const tabClassNames = `${cx('tab')}`;

	const isActive = (id, active) => active === id;
	const getBtnBgColor = (id, active) =>
		isActive(id, active)
			? 'var(--color-light-neutral-background-bold)'
			: 'inherit';
	const btnWidth = '160px';

	return (
		<div className={tabClassNames}>
			{buttonDatas.map((data) => (
				<Button
					style={{ backgroundColor: getBtnBgColor(data.text, active) }}
					key={data.text}
					text={data.text}
					width={btnWidth}
					icon={data.icon ?? false}
					_onClick={_onClick}
					btnSize="m"
					type="ghost"
				></Button>
			))}
		</div>
	);
};
