import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
//import { TextInput } from "react-native-gesture-handler";
import {icon, BackgroundImg} from '../Constants';
import Api from '../Database';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const ForgotPassword = props => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  const changePassword = () => {
    fetch(Api + '/forgotpassword', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res => {
      if (res.status === 200) {
        alert('Successfully changed!');
        setTimeout(() => {
          props.navigation.navigate('Login');
        }, 2000);
      } else {
        alert('Please try again!');
      }
    });
  };
  const checkEmail = text => {
    console.log('text' + text);
    setEmail(text);
    fetch(Api + '/' + text, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => {
      //  console.log(JSON.stringify(res))
      if (res.status === 200) {
        //alert('found email')
        setDisabled(false);

        // alert('Welcome!')
        //setTimeout(() => {props.navigation.navigate('StepOne')}, 2000)
      } else {
        setDisabled(true);
      }
    });

    //  console.log('email'+email+' password'+password)
    //   fetch(Api+'/login',{
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify({
    //           email: email,
    //           password: password,

    //         })

    //       }).then(res=> {
    //        //  console.log(JSON.stringify(res))
    //           if (res.status===200){
    //               alert('Welcome!')
    //               setTimeout(() => {props.navigation.navigate('StepOne')}, 2000)
    //           }
    //           else{

    //               alert('Please try again!')
    //           }
    //       })
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        source={BackgroundImg}>
        <AvoideKeyBoard>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 20}}>
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
                Change Password
              </Text>
            </View>
            <View
              style={{
                height: screenHeight / 1.65,
                paddingHorizontal: 15,
                marginHorizontal: 5,
                width: screenWidth / 1.2,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                paddingBottom: 30,
              }}>
              <Image
                source={icon}
                resizeMode={'center'}
                style={{top: -70, maxHeight: 150, maxWidth: 150}}
              />
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
                  USERNAME / EMAIL
                </Text>
                <TextInput
                  placeholder="Please username or email"
                  onChangeText={text => {
                    checkEmail(text);
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
                  editable={!disabled}
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
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (email === '' || password === '') {
                      alert('Please enter email and password');
                    } else {
                      changePassword();
                    }
                  }}
                  style={{
                    width: screenWidth / 1.35,
                    height: 50,
                    borderRadius: 4,
                    backgroundColor: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  disabled={disabled}>
                  <Text
                    style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>
                    Submit
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
          </ScrollView>
        </AvoideKeyBoard>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
