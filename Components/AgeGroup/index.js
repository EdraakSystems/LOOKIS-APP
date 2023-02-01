import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {backButton, IOS} from '../Constants';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const AgeGroup = ({navigation}) => {
  const [selectedAgeGroup, setSelectedAgeGroup] = React.useState('middle');
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
              navigation.goBack();
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
          AGE GROUP
        </Text>
        <View></View>
      </View>
      <AvoideKeyBoard>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={{
              resizeMode: 'cover',
              flex: 1,
              justifyContent: 'space-between',
              height: screenHeight / 1.1,
            }}
            source={require('../assets/DrawingBackground.jpg')}>
            <Image
              style={{width: screenWidth, height: '40%'}}
              resizeMode={'contain'}
              source={require('../assets/awaaam.png')}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                //  marginTop: screenHeight / 2,
                borderTopStartRadius: 0,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: '3%',
                }}>
                <Text
                  style={{
                    fontSize: screenWidth / 15,
                    color: '#000',
                    fontWeight: 'normal',
                  }}>
                  Select Your Age Group
                </Text>
              </View>

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Picker
                  selectedValue={selectedAgeGroup}
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedAgeGroup(itemValue);
                  }}
                  style={{
                    borderWidth: 2,
                    borderColor: 'gray',
                    fontWeight: 'bold',

                    letterSpacing: 2,
                    fontSize: 16,
                    color: 'gray',
                    width: screenWidth / 1.5,
                  }}>
                  <Picker.Item
                    label="Select Your Age Group"
                    style={{
                      fontWeight: 'bold',
                      letterSpacing: 2,
                      fontSize: 16,
                      color: 'gray',
                    }}
                    value="middle"
                  />
                  <Picker.Item
                    label="Emerging Artist ( Below 15 )"
                    value="Artist"
                  />

                  <Picker.Item
                    label="Sublime Professional ( 15 - 36)"
                    value="Professional"
                  />
                  <Picker.Item label="Legend ( 36 +)" value="Legend" />
                </Picker>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 20,
                  backgroundColor: '#fff',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('StartScribling');
                  }}
                  style={{
                    alignItems: 'center',
                    borderRadius: 16,
                    backgroundColor:
                      selectedAgeGroup === 'middle' ? '#987da1' : 'purple',
                    paddingHorizontal: 15,
                    paddingVertical: 10,

                    width: screenWidth / 1.3,
                  }}
                  disabled={selectedAgeGroup === 'middle'}>
                  <Text
                    style={{
                      letterSpacing: 1.5,
                      fontSize: 15.5,
                      textAlign: 'left',
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    {' '}
                    Next {'>'}{' '}
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
export default AgeGroup;
