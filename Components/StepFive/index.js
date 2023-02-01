import React, {useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {backButton, IOS} from '../Constants';
import background from './../assets/StepFiveBackground.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const StepFive = props => {
  //const [tier, setTier] = React.useState('');
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : 0, //StatusBar.currentHeight,
  }).current;
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          {
            backgroundColor: 'purple',
            paddingVertical: 15,
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
          NEW STORY
        </Text>
        <View></View>
      </View>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          containerstyle={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
          <ImageBackground
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: screenHeight / 1,
              top: '-10%',
              width: screenWidth,
            }}
            resizeMode={'stretch'}
            source={background}>
            <View
              style={{
                flexDirection: 'column',
                paddingTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('DrawingScreen');
                }}
                style={{
                  borderWidth: 3,
                  borderColor: '#fff',
                  paddingVertical: 10,
                  marginVertical: 5,
                  width: screenWidth / 1.5,
                  borderRadius: 22,
                  backgroundColor: 'purple',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: 2,
                  }}>
                  GO TO EDITOR
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </View>
  );
};
export default StepFive;
