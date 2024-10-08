/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
} from 'react-native';

import Colors from '../constants/Colors';

export function useThemeColor(props, colorName) {
  const theme = useColorScheme() ?? 'light';

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const IconComponent = ({
  iconFamily: IconComponent,
  iconName,
  size,
  lightColor,
  darkColor,
}) => {
  const theme = useColorScheme() ?? 'light';
  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    theme === 'light' ? 'black' : 'white'
  );

  return <IconComponent name={iconName} size={size} color={iconColor} />;
};
