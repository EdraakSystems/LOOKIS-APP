// import React  from 'react'
// import {  Dimensions,Image,View,Text } from 'react-native'
// import { PinchGestureHandler,PinchGestureHandlerGestureEvent,State } from 'react-native-gesture-handler'
// import awm from './../assets/awaaam.png'
// import Animated,{useAnimatedGestureHandler,useAnimatedStyle,useSharedValue,} from 'react-native-reanimated'
// const screen = Dimensions.get('window')
// const AnimatedImage=Animated.createAnimatedComponent(Image);

// const PinchableImage = ({ imageUri }) => {
//   const scale = 1;

// const pinchHandler=useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({

//   onActive:(event)=>{
//         scale.value=event.scale;
//         console.log(event)
//     }
// });
// // const rStyle=useAnimatedStyle(()=>{
// //     return{
// //         transform:[{scale:1}]
// //     };
// // })
// //  const onPinchEvent =
// //  Animated.event(
// //     [
// //       {
// //         nativeEvent: { scale: scale },
// //         setValue:imgWidth+30
// //       }
// //     ],
// //     {
// //       useNativeDriver: true
// //     }
// //   )

// //   const onPinchStateChange = event => {
// //     if (event.nativeEvent.oldState === State.ACTIVE) {
// //       Animated.spring(scale, {
// //         toValue: 1,
// //         useNativeDriver: true
// //       }).start()
// //     }
//  // }

//   return (
//     <PinchGestureHandler
//       onGestureEvent={pinchHandler}
//     //  onHandlerStateChange={onPinchStateChange}
//     >
//       <AnimatedImage
//         source={awm}
//         style={{flex:1}}
//         resizeMode='contain'
//       />
//     </PinchGestureHandler>

//   )
// }

// export default PinchableImage

import React from 'react';
import {Text, Dimensions, View, Image} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Draggable from 'react-native-draggable';

// const {width}=Dimensions.get("window");
// function PinchableImage(){
//  let scale=new Animated.Value(1);
//  const onZoomEventFunction=Animated.event([
//     {
//       nativeEvent:{scale:scale}
//     }
//   ],
//   {
//     useNativeDriver:true
//   }
//   )

//   const onZoomStateChangeFunction=(event)=>{
//    console.log('state change function',event.nativeEvent.oldState==State.ACTIVE)
//     // alert('aaa')
//     if(event.nativeEvent.oldState==State.ACTIVE)
//     {
//       Animated.spring(scale,{
//         toValue:1,
//         useNativeDriver:true
//       }).start();

//     }
//   }
// //   const pinchHandler=useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({

// //   onActive:(event)=>{
// //         scale.value=event.scale;
// //         console.log(event)
// //     },

// // });
// // const rStyle=useAnimatedStyle(()=>{
// //     return{
// //         transform:[{scale:1}]
// //     };
// // })
//   return(
//     <View style={{backgroundColor:'pink',flex:1,justifyContent:'center',alignItems:'center'}}>
// <PinchGestureHandler
// onGestureEvent={onZoomEventFunction}
//      //  onGestureEvent={pinchHandler}

// onHandlerStateChange={onZoomStateChangeFunction}
// >
// <Animated.Image
// style={{width:350,height:500,transform:[{scale:scale}]}}
// source={{uri:"https://i.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8"}}
// />
// </PinchGestureHandler>
// <Text>aaa</Text>

//     </View>
//   )
// }

export default class PinchableImage extends React.Component {
  constructor(props) {
    super(props);
  }
  scale = new Animated.Value(1);
  onPinchEvent = Animated.event(
    [{nativeEvent: {scale: this.scale}}],

    {useNativeDrive: true},
  );
  render() {
    return (
      <View style={{flex: 1}}>
        <Draggable>
          <PinchGestureHandler onGestureEvent={this.onPinchEvent}>
            <Animated.Image
              style={{
                width: 350,
                height: 500,
                transform: [{scale: this.scale}],
              }}
              source={{
                uri:
                  this.props.src ??
                  'https://i.picsum.photos/id/200/200/200.jpg?hmac=mk1Tu6dXHQvpaA8RfxlDUZjbWG23krNkiB9kyYoEmO8',
              }}
            />
          </PinchGestureHandler>
        </Draggable>
      </View>
    );
  }
}
//export default PinchableImage;
