import React, {useRef} from 'react';
import Svg, {TSpan} from 'react-native-svg';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Modal,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import {ColorPicker} from 'react-native-color-picker';
import Draggable from 'react-native-draggable';
import polka from './../assets/polka.png';
import whiteBack from './../assets/whiteBackground.jpg';
import linedBackground from './../assets/linebck.png';
import imgBck from './../assets/backgroundImageIcon.png';
import PathModal from './PathModal';
import resizeableImageIcon from '../assets/resizzeee.png';

import {
  image,
  saveImage,
  rightArrow,
  pencil,
  pen,
  eraser,
  textt,
  slim,
  middle,
  fat,
  clr,
  layer2,
  months,
  IOS,
} from '../Constants';
import PictureModal from '../TierScreen/PictureModal';
import StepSix from '../StepSix';
import UserResizeableImages from './UserResizeableImages';
import PinchableImage from '../PinchableImage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const DrawingScreen = props => {
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : StatusBar.currentHeight,
  }).current;

  const rnRef = React.useRef(SketchCanvas);
  const [activeStep, setActiveStep] = React.useState(0);
  const [strokeWidth, setStrokeWidth] = React.useState(2);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [pictureModalVisible, setPictureModalVisible] = React.useState(false);
  const [resizableImageModal, setResizableImageModal] = React.useState(false);
  const [pictureUri, setPictureUri] = React.useState('https://ibb.co/fk2VZKk');
  const [strokeColor, setStrokeColor] = React.useState('red');
  const [tempColor, setTempColor] = React.useState('');
  const [pathModalVisible, setPathModalVisible] = React.useState(false);
  const [pathText, setPathText] = React.useState([]);
  const [stepSixModal, setStepSixModal] = React.useState(false);
  const [fileName, setFileName] = React.useState('');
  const [filePath, setFilePath] = React.useState('');
  const [listOfUserImages, setListOfUserImages] = React.useState([]);
  const [picWidth, setPicWidth] = React.useState(100);
  const [picLength, setPicLength] = React.useState(100);
  const [activeItem, setActiveItem] = React.useState(1);
  const [st, setSt] = React.useState({
    gestureState: {},
    thumbSize: 100,
    left: screenWidth / 2,
    top: screenHeight / 2,
  });

  const incrementWidthHeight = () => {
    if (picWidth < screenWidth - 20) {
      setPicWidth(picWidth + 25);
    }

    console.log(picLength + '---');
    setPicLength(picLength + 25);
  };

  const decrementWidthHeight = () => {
    if (picWidth > 50 && picLength > 50) {
      setPicWidth(picWidth - 25);
      setPicLength(picLength - 25);
    }
  };
  const checkVal = () => {
    if (tempColor !== '') {
      setStrokeColor(tempColor);
      setModalVisible(false);
    }
  };
  const setPictureUriFunction = param => {
    setPictureUri(param);
    setActiveStep(3);
    setPictureModalVisible(false);
  };

  const getDateTime = () => {
    let currentdate = new Date();
    let datetime =
      currentdate.getDate() +
      '' +
      months[currentdate.getMonth()] +
      '' +
      currentdate.getFullYear() +
      '' +
      currentdate.getHours() +
      '' +
      currentdate.getMinutes() +
      '' +
      currentdate.getSeconds();

    return datetime;
  };
  const addPathToCanvas = () => {
    try {
      //console.log(rnRef.current.addPath)

      rnRef.current.addPath({
        drawer: 'user1',
        size: {
          // the size of drawer's canvas
          width: 700,
          height: 700,
        },
        path: {
          id: 8979841, // path id
          color: 'red', // ARGB or RGB
          width: 5,
          data: [
            '296.11,281.34', // x,y
            '293.52,284.64',
            '290.75,289.73',
            '350,250',
            '0,250',
          ],
        },
      });
      setPathModalVisible(false);
    } catch (err) {
      console.log('Error is ' + err);
      setPathModalVisible(false);
    }
  };
  React.useEffect(() => {
    console.log('listofimags', listOfUserImages.length);
  }, [listOfUserImages]);
  return (
    <View style={[styles.container, safeAreaStyle]}>
      <View style={{flex: 1}}>
        <StepSix {...{stepSixModal, setStepSixModal, fileName, filePath}} />

        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View
            style={{
              backgroundColor: '#fff',
              paddingVertical: 3,
              paddingHorizontal: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                borderRadius: 16,
                borderWidth: 1,
                backgroundColor: '#fff',
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Text
                style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>
                {'<'} New Project
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveItem(1);
              }}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 4,
                borderColor: 'purple',
                backgroundColor: activeItem === 1 ? 'purple' : '#fff',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: activeItem === 1 ? '#fff' : 'purple',
                  fontWeight: activeItem === 1 ? 'bold' : 'normal',
                }}>
                Canvas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveItem(2);
              }}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 4,
                borderColor: 'purple',
                backgroundColor: activeItem === 2 ? 'purple' : '#fff',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: activeItem === 2 ? '#fff' : 'purple',
                  fontWeight: activeItem === 2 ? 'bold' : 'normal',
                }}>
                ABC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActiveItem(3);
              }}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 5,
                borderRadius: 4,
                borderColor: 'purple',
                backgroundColor: activeItem === 3 ? 'purple' : '#fff',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  color: activeItem === 3 ? '#fff' : 'purple',
                  fontWeight: activeItem === 3 ? 'bold' : 'normal',
                }}>
                Img
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                
                  let name = getDateTime();
                  setFileName(name);
                  rnRef.current.save(
                    'jpg',
                    true,
                    'lookis-art',
                    name,
                    activeStep === 3,
                    true,
                    true,
                  );
                  setStepSixModal(true);
          
                }}>
                <ImageBackground
                  source={saveImage}
                  style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}
                  resizeMode={'cover'}>
                  <Text
                    style={{
                      color: '#FFF',
                      paddingHorizontal: 10,
                      textAlign: 'center',
                    }}>
                    {' '}
                    Save
                  </Text>
                  <Image source={rightArrow} style={{width: 15, height: 15}} />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              maxWidth: screenWidth / 1.005,
            }}>
            <View
              style={{
                marginLeft: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#def6f8',
                paddingVertical: 5,
                paddingLeft: 7,
                borderTopLeftRadius: 22,
                borderBottomLeftRadius: 22,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setStrokeWidth(5.5);
                }}>
                <Image
                  source={pencil}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setPictureModalVisible(true);
                }}>
                <Image
                  source={imgBck}
                  height={20}
                  width={20}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setResizableImageModal(true);
                }}>
                <Image
                  source={resizeableImageIcon}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
                {/* <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>I</Text> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setStrokeWidth(3);
                }}>
                <Image
                  source={pen}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  rnRef.current.undo();
                }}>
                <Image
                  source={eraser}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setPathModalVisible(true);
                }}>
                <Image
                  source={textt}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#def6f8',
                paddingVertical: 5,
                paddingHorizontal: 2,
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: activeStep === 0 ? 'pink' : '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setActiveStep(0);
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: activeStep === 1 ? 'pink' : '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 2,
                }}
                onPress={() => {
                  setActiveStep(1);
                }}>
                <Image
                  source={layer2}
                  height={30}
                  width={30}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: activeStep===2?'pink':'#fff',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 2,
              }}
              onPress={()=>{setActiveStep(2)}}
              
              >
              <Image
                source={layer3}
                height={30}
                width={30}
                resizeMode={'contain'}
                style={{maxHeight: 22.5, maxWidth: 22.5}}
              />
            </TouchableOpacity> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#def6f8',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                paddingVertical: 3,
                marginHorizontal: 2,
              }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 2,
                }}
                onPress={() => {
                  setStrokeWidth(3);
                }}>
                <Image
                  source={slim}
                  height={22.5}
                  width={22.5}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 2,
                }}
                onPress={() => {
                  setStrokeWidth(6.5);
                }}>
                <Image
                  source={middle}
                  height={22.5}
                  width={22.5}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 2,
                }}
                onPress={() => {
                  setStrokeWidth(8.5);
                }}>
                <Image
                  source={fat}
                  height={22.5}
                  width={22.5}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                paddingVertical: 2,
                backgroundColor: '#def6f8',
                paddingLeft: 2,
                paddingRight: 10,
                borderTopEndRadius: 22,
                borderBottomEndRadius: 22,
              }}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#fff',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 3,
                }}
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Image
                  source={clr}
                  height={22.5}
                  width={22.5}
                  resizeMode={'contain'}
                  style={{maxHeight: 22.5, maxWidth: 22.5}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ColorModal
            {...{
              modalVisible,
              setModalVisible,
              setTempColor,
              setModalVisible,
              checkVal,
              setStrokeColor,
            }}
          />
          <PictureModal
            {...{
              pictureModalVisible,
              setPictureModalVisible,
              setPictureUriFunction,
            }}
          />

          <UserResizeableImages
            {...{
              resizableImageModal,
              setResizableImageModal,
              listOfUserImages,
              setListOfUserImages,
            }}
          />
          <PathModal
            {...{
              pathModalVisible,
              setPathModalVisible,
              pathText,
              setPathText,
              addPathToCanvas,
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderRadius: 16,
              borderColor: 'black',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <ImageBackground
              source={
                activeStep === 0
                  ? whiteBack
                  : activeStep === 1
                  ? linedBackground
                  : activeStep === 2
                  ? polka
                  : {uri: pictureUri}
              }
              resizeMode="cover"
              style={{flex: 1}}>
              {/* <View style={{flex:1}}>
                <Image source={image} style={{width:200,height:200}} resizeMode={'cover'}// width={200} height={200}
                />
              
                </View> */}
              <View style={{flex: 1}}>
                {listOfUserImages?.map((item, index) => {
                  return <PinchableImage src={item.uri} />;
                  //          <Draggable key={index} {...gestureResponder}
                  //          onShortPressRelease={()=>{
                  //           let temporaryArray=[...listOfUserImages];
                  //           temporaryArray[index].width-=25;
                  //           temporaryArray[index].height-=25;
                  //           setListOfUserImages(temporaryArray)

                  //          }}
                  //          onLongPress={()=>{

                  //   let temporaryArray=[...listOfUserImages];
                  //   temporaryArray[index].width+=25;
                  //   temporaryArray[index].height+=25;
                  //   setListOfUserImages(temporaryArray)
                  //  }}

                  //  >
                  // <Image source={{uri:item.uri}}

                  // style={{
                  //   //      width:st. thumbSize,
                  //   //      height: st.thumbSize,
                  //   // //     position: 'absolute',
                  //   //      left: st.left - st.thumbSize/2,
                  //   //      top: st.top - st.thumbSize/2,

                  //   width:item.width,height:item.height}} resizeMode={'contain'}// width={200} height={200}
                  // />
                  // </Draggable>

                  //    <Text>aaa</Text>
                  //  </Draggable>
                })}

                {pathText &&
                  pathText.map((item, index) => {
                    return (
                      <View
                        style={
                          {
                            //flex:activeItem===2?1:0
                          }
                        }>
                        <Draggable key={index}>
                          <Text
                            style={{
                              color: item.color ?? '#000',
                              fontSize:
                                item.size === 'large'
                                  ? 20
                                  : item.size === 'medium'
                                  ? 17
                                  : 14,
                            }}>
                            {item.value}
                          </Text>
                        </Draggable>
                      </View>
                    );
                  })}
                {/* <Draggable>
                         <Image source={image} style={{flex:1,width:100,height:100}} resizeMode={'cover'}// width={200} height={200}
                         />
</Draggable> */}
                {/* {listOfUserImages&&listOfUserImages.map((item,index)=>{
                 <Draggable key={index} onLongPress={()=>{

                  let temporaryArray=[...listOfUserImages];
                  temporaryArray[index].width+=25;
                  temporaryArray[index].height+=25;
                  setListOfUserImages(temporaryArray)
                 }}
                 
                 >
                   <Image source={{uri:item.uri}} style={{flex:1,width:200,height:200}} resizeMode={'cover'}// width={200} height={200}
                   />
                 </Draggable>
               })
               } */}
                <SketchCanvas
                  style={{flex: activeItem === 1 ? 1 : 0}}
                  strokeColor={strokeColor}
                  ref={rnRef}
                  strokeWidth={strokeWidth}
                  onSketchSaved={(result, path) => {
                    if (result) {
                      // alert(
                      //   "Successfully Saved image to 'lookis-art' Folder " +
                      //     path,
                      // );
                      setFilePath(path);
                    } else {
                      alert('Failed to Save Art');
                    }
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const ColorModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
      }}
      collapsable={true}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          borderColor: 'purple',
          borderWidth: 1.5,
          height: screenHeight / 1.5,
          borderRadius: 6,
          margin: 20,
          backgroundColor: '#f5f5f5',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          flexDirection: 'column',

          elevation: 12,
        }}>
        <ColorPicker
          onColorSelected={color => {
            //alert(`Color selected: ${color}`)
            props.setStrokeColor(color);
          }}
          style={{flex: 1, width: screenWidth / 1.4, height: 'auto'}}
        />
        <TouchableOpacity
          onPress={() => {
            props.setModalVisible(false);
          }}
          style={{
            backgroundColor: 'purple',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: screenWidth / 1.3,
            borderRadius: 6,
            height: 50,
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 15.5,
              textAlign: 'center',
              letterSpacing: 1.2,
            }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default DrawingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    //       justifyContent: "center"
  },
  text: {
    color: 'white',
    fontSize: 42,
    // lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
