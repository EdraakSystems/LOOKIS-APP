import React from 'react';
import RNSketchCanvas, {
  SketchCanvas,
} from '@terrylinla/react-native-sketch-canvas';
import PinchableBox from '../PinchableImage';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  //Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  //Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {FontAwesome} from '@expo/vector-icons';
import {createResponder} from 'react-native-gesture-responder';
import Draggable from 'react-native-draggable';
//import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const image = require('./../assets/DrawingBackground.png');
const saveImage = require('./../assets/savebtn.png');
const rightArrow = require('./../assets/rightArrow.png');
const leftArrow = require('./../assets/leftcircle.png');
const pencil = require('./../assets/pencil.png');
const newww = require('./../assets/new.png');
const pen = require('./../assets/pen.png');
const eraser = require('./../assets/eraser.png');
const textt = require('./../assets/text.png');
const slim = require('./../assets/thinnestline.png');
const middle = require('./../assets/midlle.png');
const fat = require('./../assets/fatline.png');
const clr = require('./../assets/clr.png');
const layer3 = require('./../assets/layer3.png');
const layer2 = require('./../assets/layer2.png');

const JasonSketch = props => {
  const [strokeWidth, setStrokeWidth] = React.useState(2);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [strokeColor, setStrokeColor] = React.useState('red');
  const [tempColor, setTempColor] = React.useState('');
  const [path, setPath] = React.useState('');
  const [startLocation, setStartLocation] = React.useState({
    x: 0,
    y: 0,
  });
  const [pointsArray, setPointsArray] = React.useState([]);
  const checkVal = () => {
    if (tempColor !== '') {
      setStrokeColor(tempColor);
      setModalVisible(false);
    }
  };
  //componentWillMount() {
  const gestureResponder = createResponder({
    onStartShouldSetResponder: (evt, gestureState) => true,
    onStartShouldSetResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetResponder: (evt, gestureState) => true,
    onMoveShouldSetResponderCapture: (evt, gestureState) => true,
    onResponderGrant: (evt, gestureState) => {
      setStartLocation({
        x: gestureState.x0,
        y: gestureState.y0,
      });
      alert('x0' + gestureState.x0 + ' y' + gestureState.y0);
    },
    onResponderMove: (evt, gestureState) => {
      setPointsArray([
        ...pointsArray,
        {x: gestureState.x0, y: gestureState.y0},
      ]);
    },
    onResponderTerminationRequest: (evt, gestureState) => true,
    onResponderRelease: (evt, gestureState) => {
      let temp = 'M' + startLocation.x + ' ' + startLocation.y;
      pointsArray.map((item, index) => {
        temp += ' L' + item.x + ' ' + item.y;
      });

      temp += ' C' + gestureState.x0 + ' ' + gestureState.y0;

      setPath(temp);
      alert(JSON.stringify(temp));
    },
    onResponderTerminate: (evt, gestureState) => {},

    onResponderSingleTapConfirmed: (evt, gestureState) => {
      alert(gestureState.x0);
    },

    moveThreshold: 2,
    debug: false,
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Text>aaaa</Text>
      <PinchableBox imageUri={'https://ibb.co/vX6tWvt'} />
    </View>
  );
};
export default JasonSketch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: screenWidth,
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
