import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {COLORS} from '../utils/Theme';

const useStyles = (): any => {
  return {
    view: {
      backgroundColor: COLORS.VIEW_COLOR,
    },
  };
};

interface ICustomViewProps {
  style: any;
  children: any;
}

export const CustomView: FunctionComponent<ICustomViewProps> = props => {
  const styles = useStyles();
  const {style, children} = props;

  return <View style={[styles.view, style]}>{children}</View>;
};
