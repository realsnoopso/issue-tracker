import style from './InformationTag.module.css';
import { Icon } from '@components/Icon/Icon';

export const InformationTag = ({ iconName, text, bgColor, mode }) => {
	const { TagStyle, LightColor, NeutralColor, NeutralBgColor } = style;
	const tagBgColor = mode === 'light' ? bgColor : NeutralBgColor;
	const textColor = mode === 'light' ? LightColor : NeutralColor;

	const InfoTagClassName = `${TagStyle} typo-caption ${tagBgColor} ${textColor}`;

	return (
		<label className={InfoTagClassName} style={{ backgroundColor: tagBgColor }}>
			<Icon name={iconName} fill="white"></Icon>
			{text}
		</label>
	);
};
