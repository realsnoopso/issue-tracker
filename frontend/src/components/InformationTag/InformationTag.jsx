import styles from './InformationTag.module.css';
import { Icon } from '@components/index';

export const InformationTag = ({
  iconName,
  text,
  backgroundColor,
  style = 'outline',
}) => {
  const { TagStyle, solidColor, outlineColor, outlineBgColor } = styles;
  const tagBgColor = style === 'solid' ? backgroundColor : outlineBgColor;
  const textColor = style === 'solid' ? solidColor : outlineColor;

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
