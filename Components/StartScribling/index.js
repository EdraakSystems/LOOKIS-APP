import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {backButton, IOS} from '../Constants';
import sOne from './../assets/StepScribbb.png';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const StartScribling = props => {
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : 0, //StatusBar.currentHeight,
  }).current;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={[
          {
            backgroundColor: 'purple',
            paddingVertical: 15,
            paddingBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          safeAreaStyle,
        ]}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={backButton} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            letterSpacing: 1.5,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          SCRIBBLING
        </Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={sOne}
            resizeMode={'cover'}
            style={{
              flex: 1,
              flexDirection: 'column',
              height: screenHeight / 1.2,
              width: screenWidth,
              paddingTop: screenHeight / 2.2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingHorizontal: 50,
                color: '#000',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Start Scribbling Your Characters
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                borderRadius: 16,
                backgroundColor: 'purple',
                paddingHorizontal: 15,
                paddingVertical: 10,
                width: screenWidth / 1.3,
              }}
              onPress={() => {
                props.navigation.navigate('TierScreen');
              }}>
              <Text
                style={{
                  letterSpacing: 1.5,
                  fontSize: 15.5,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Go To Editor{' '}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};
export default StartScribling;
