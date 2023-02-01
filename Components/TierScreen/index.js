import React, {useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import StepFour from './../assets/tiertier.png';
import lines from './../assets/linesTier.png';
import TierOne from './../assets/TierOne.png';

import TierTwo from './../assets/TierTwo.png';
import TierThree from './../assets/TierThree.png';
import {backButton, IOS} from '../Constants';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const TierScreen = props => {
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
          TIER SELECTION
        </Text>
        <View></View>
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}>
        <AvoideKeyBoard>
          <ScrollView
            showsVerticalScrollIndicator={false}
            containerstyle={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
            <ImageBackground
              style={{
                resizeMode: 'cover',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: screenHeight / 1.2,
                paddingBottom: 10,
                width: screenWidth,
              }}
              imageStyle={{
                height: screenHeight / 1.3,
              }}
              source={StepFour}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: screenHeight / 2,
                }}>
                <TextInput
                  placeholder="Please Enter Tier Name."
                  placeholderTextColor={'grey'}
                  style={{
                    paddingVertical: 7,
                    paddingLeft: 15,
                    textAlign: 'center',
                    width: screenWidth / 1.5,
                    borderWidth: 2,
                    borderColor: 'purple',
                    borderRadius: 22,
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('StepFive');
                  }}
                  style={{
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
                    NEXT
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: screenWidth,

                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      props.navigation.navigate('DrawingScreen');
                    }}>
                    <Image
                      source={TierOne}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      props.navigation.navigate('DrawingScreen');
                    }}>
                    <Image
                      source={TierTwo}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      props.navigation.navigate('DrawingScreen');
                    }}>
                    <Image
                      source={TierThree}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </AvoideKeyBoard>
      </View>
    </View>
  );
};
export default TierScreen;

const styles = StyleSheet.create({
  image: {
    height: screenHeight / 3.5,

    maxWidth: 100,
  },
});
