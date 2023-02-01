import React, {useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import upperLogo from '../assets/upperLogo.png';
import logo from '../assets/Logo.png';
import Lookis from '../assets/Lookis.png';
import BottomImage from '../assets/bottomImage.png';
import startBack from '../assets/startback.png';
import {IOS} from '../Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const HomePage = props => {
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : 0, //StatusBar.currentHeight,
  }).current;

  return (
    <View style={[{flex: 1, width: '100%'}, safeAreaStyle]}>
      <ImageBackground
        style={{resizeMode: 'cover', flex: 1}}
        source={require('../assets/DrawingBackground.jpg')}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <ImageBackground
                source={upperLogo}
                resizeMode="stretch"
                style={{
                  width: screenWidth,
                  maxWidth: '100%',
                  height: '100%',
                  maxHeight: screenHeight / 2.4,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Lookis}
                  resizeMode={'contain'}
                  style={{width: screenWidth / 1.25}}
                />
              </ImageBackground>
              <ImageBackground
                source={BottomImage}
                style={{
                  paddingHorizontal: 10,
                  flex: 1,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: screenWidth / 1.3,
                  maxWidth: '100%',
                  height: screenHeight / 1.5,
                  borderRadius: 12,
                  marginHorizontal: 20,
                  flexDirection: 'column',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={logo}
                    resizeMode={'center'}
                    style={{top: -80, maxHeight: 200, maxWidth: 200}}
                  />
                </View>
                <View style={{top: -120}}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      marginBottom: 10,
                    }}>
                    <Text style={{fontSize: 11, letterSpacing: 1.5}}>
                      Challenge your creativity
                    </Text>
                  </View>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#000000',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Start drawing new ideas and create an aweome picture book
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('StepOne');
                      }}
                      style={{
                        marginVertical: 10,
                        width: screenWidth / 1.55,
                        backgroundColor: 'purple',
                        height: 35,
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          letterSpacing: 1.5,
                          color: '#fff',
                        }}>
                        Start a new project {'>'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Login');
                      }}
                      style={{
                        marginBottom: 2,
                        width: screenWidth / 1.55,
                        backgroundColor: 'transparent',
                        height: 35,
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: 'purple',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          letterSpacing: 1.5,
                          color: '#000000',
                        }}>
                        Login to save{' '}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Signup');
                      }}>
                      <Text
                        style={{
                          borderBottomWidth: 1,
                          fontSize: 14.5,
                          fontWeight: 'bold',
                          letterSpacing: 0.2,
                          marginTop: 5,
                        }}>
                        Create a new account
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default HomePage;
