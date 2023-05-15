import styles from './InformationTag.module.css';
import { Icon } from '@components/index';

export const InformationTag = ({ iconName, text, bgColor, mode }) => {
  const { TagStyle, LightColor, NeutralColor, NeutralBgColor } = styles;
  const tagBgColor = mode === 'light' ? bgColor : NeutralBgColor;
  const textColor = mode === 'light' ? LightColor : NeutralColor;

  const InfoTagClassName = `${TagStyle} typo-caption ${tagBgColor} ${textColor}`;

  return (
    <label className={InfoTagClassName} style={{ backgroundColor: tagBgColor }}>
      {iconName && (
        <Icon name={iconName} fill="var(--color-light-accent-text)"></Icon>
      )}
      {text}
    </label>
  );
};
