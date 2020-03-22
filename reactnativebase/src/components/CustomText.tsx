import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {SIZES} from '../utils/Theme';

interface ICustomTextProps {
  style: any;
  children: any;
  bold: boolean;
  size: number;
}

const useStyles = (props: ICustomTextProps): any => {
  return {
    text: {
      fontWeight: props.bold ? 'bold' : undefined,
      fontSize: props.size ? props.size : undefined,
    },
  };
};

export const CustomText: FunctionComponent = (props: any) => {
  const {children, style, bold, ...rest} = props;

  const styles = useStyles(props);

  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  size: SIZES.FONT_NORMAL,
} as Partial<ICustomTextProps>;
