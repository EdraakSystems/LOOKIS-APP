import React, {useRef} from 'react';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
import {backButton, IOS} from '../Constants';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const image = require('./../assets/stepOneBackground.png');

const imageOneTwo = require('./../assets/imageOneTwo.png');

const imageOneThree = require('./../assets/imageOneThree.png');
const StepOne = props => {
  const [issue, setIssue] = React.useState('');
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : 0, //StatusBar.currentHeight,
  }).current;

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="purple" />
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
          LESSON TYPE
        </Text>
        <View></View>
      </View>

      <AvoideKeyBoard>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={image}
            imageStyle={{
              height: screenHeight / 1.2,
              width: screenWidth,
            }}
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',

              height: screenHeight / 1.2,
              width: screenWidth,
              backgroundColor: 'grey',
              top: '-5%',
            }}
            resizeMode={'stretch'}>
            <View style={{backgroundColor: 'transparent'}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    borderRadius: 16,
                    borderWidth: 2,
                    borderColor: 'purple',
                    paddingHorizontal: 15,
                    width: screenWidth / 1.3,
                  }}>
                  <TextInput
                    style={{
                      textAlign: 'left',
                      color: 'gray',
                      fontSize: 15,
                      height: 40,
                    }}
                    placeholderTextColor={'grey'}
                    onChangeText={text => {
                      setIssue(text);
                    }}
                    placeholder="Type Here"
                  />
                </View>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    borderRadius: 16,
                    backgroundColor: issue.trim() === '' ? '#987da1' : 'purple',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    width: screenWidth / 1.3,
                  }}
                  disabled={issue.trim() === ''}
                  onPress={() => {
                    props.navigation.navigate('AgeGroup');
                  }}>
                  <Text
                    style={{
                      letterSpacing: 1.5,
                      fontSize: 15.5,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    Explore Our Collection Of Ideas
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </AvoideKeyBoard>
    </View>
  );
};
export default StepOne;
