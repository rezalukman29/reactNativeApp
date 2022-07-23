import React from 'react';
import {View, ViewStyle} from 'react-native';
import useTheme from '../../theme/useTheme';
import Spacing from './Spacing';

type Props = {
  xxs?: boolean;
  xs?: boolean;
  s?: boolean;
  m?: boolean;
  l?: boolean;
  xl?: boolean;
  xxl?: boolean;
  height?: number;
  style?: ViewStyle;
  horizontal?: boolean;
  static?: boolean
};

const Spacer = (props: Props) => {
  const {style = {}, horizontal = false,} = props;
  const theme = useTheme();
  let space = Spacing.xxl;
  if (props.height) {
    space = props.height;
  } else if (props.xxs) {
    space = Spacing.xxs;
  } else if (props.xs) {
    space = Spacing.xs;
  } else if (props.s) {
    space = Spacing.s;
  } else if (props.m) {
    space = Spacing.m;
  } else if (props.l) {
    space = Spacing.l;
  } else if (props.xl) {
    space = Spacing.xl;
  } else if (props.xxl) {
    space = Spacing.xxl;
  }

  return (
    <View
      style={[
        style,
        {
          backgroundColor: props.static ? theme?.colors.PRIMARY : theme?.colors.BACKGROUND,
          height: horizontal ? '100%' : space,
          width: horizontal ? space : '100%',
        },
      ]}
    />
  );
};

export default Spacer;
