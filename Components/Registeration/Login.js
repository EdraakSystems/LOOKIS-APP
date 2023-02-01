import React from 'react';
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
//import { TextInput } from "react-native-gesture-handler";
import {icon, BackgroundImg} from '../Constants';
import Api from '../Database';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const Login = props => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const performLogin = () => {
    setLoading(true);
    //  console.log('email'+email+' password'+password)
    console.log(Api + '/login');
    fetch(Api + '/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //  'Authorization': 'my secret token'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res => {
      //  console.log(JSON.stringify(res))
      setLoading(false);
      if (res.status === 200) {
        alert('Welcome!');
        setLoading(false);
        setTimeout(() => {
          props.navigation.navigate('StepOne');
        }, 2000);
      } else if (res.status === 404) {
        alert('Email not registered!');
        setLoading(false);
      } else {
        console.log(JSON.stringify(res));
        alert('Please try again!');
        setLoading(false);
      }
    });
  };
  return loading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color="purple" size="large" />
    </View>
  ) : (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
        source={BackgroundImg}>
        <SafeAreaView style={{flex: 1, height: '100%'}}>
          <AvoideKeyBoard>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: screenWidth,
                  height: '100%',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 50,
                  }}>
                  <Text
                    style={{
                      letterSpacing: 2.25,
                      fontWeight: 'bold',
                      fontSize: 70,
                      color: '#fff',
                    }}>
                    LOGIN
                  </Text>
                </View>
                <View></View>
                <View
                  style={{
                    height: screenHeight / 1.65,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginHorizontal: 5,
                    width: screenWidth / 1.2,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    paddingBottom: 20,
                  }}>
                  <Image
                    source={icon}
                    resizeMode={'center'}
                    style={{top: -70, maxHeight: 150, maxWidth: 150}}
                  />
                  <View
                    style={{
                      marginBottom: 10,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 13,
                        letterSpacing: 1.5,
                      }}>
                      USERNAME / EMAIL
                    </Text>
                    <TextInput
                      placeholder="Please username or email"
                      onChangeText={text => {
                        setEmail(text);
                      }}
                      style={{
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                        width: screenWidth / 1.35,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 4,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        fontSize: 13,
                        letterSpacing: 1.5,
                      }}>
                      PASSWORD
                    </Text>

                    <TextInput
                      placeholder="Please enter your password"
                      onChangeText={text => {
                        setPassword(text);
                      }}
                      style={{
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                        width: screenWidth / 1.35,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 4,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      paddingRight: screenWidth / 3,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('ForgotPassword');
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          color: 'blue',
                          fontSize: 13,
                          letterSpacing: 1.5,
                        }}>
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (email === '' || password === '') {
                          alert('Please enter email and password');
                        } else {
                          performLogin();
                        }
                      }}
                      style={{
                        width: screenWidth / 1.35,
                        height: 50,
                        borderRadius: 4,
                        backgroundColor: 'purple',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        LOGIN
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      marginBottom: 10,
                      paddingVertical: 10,
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end',
                      borderBottomColor: 'purple',
                      borderBottomWidth: 1,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate('Signup');
                      }}>
                      <Text
                        style={{
                          letterSpacing: 1.25,
                          color: 'purple',
                          fontWeight: 'bold',
                          fontSize: 13,
                        }}>
                        Don't have an account ? Signup
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </AvoideKeyBoard>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;
