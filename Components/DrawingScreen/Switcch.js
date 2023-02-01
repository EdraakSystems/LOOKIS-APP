import {Image, View, Dimensions} from 'react-native';
import React from 'react';
//import {createResponder} from 'react-native-gesture-responder';
import Draggable from 'react-native-draggable';
import pic from './../assets/awaaam.png';
import DoubleClick from 'react-native-double-tap';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Switcch = props => {
  const [picWidth, setPicWidth] = React.useState(100);
  const [picLength, setPicLength] = React.useState(100);
  const incrementWidthHeight = () => {
    setPicWidth(picWidth + 25);
    setPicLength(picLength + 25);
  };

  const decrementWidthHeight = () => {
    setPicWidth(picWidth - 25);
    setPicLength(picLength - 25);
  };

  return (
    <View
      style={{
        backgroundColor: '#cfcecc',
        display: 'flex',
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Draggable>
        <DoubleClick
          singleTap={() => incrementWidthHeight()}
          doubleTap={() => decrementWidthHeight()}
          delay={200}>
          <Image source={pic} style={{width: picWidth, height: picLength}} />
        </DoubleClick>
      </Draggable>
    </View>
  );
};
export default Switcch;
