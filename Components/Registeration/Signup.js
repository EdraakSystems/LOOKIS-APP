import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';
//import {firebase} from './../Firebase/firebaseConfig'
//import firestore from '@react-native-firebase/firestore';
import {icon, BackgroundImg} from '../Constants';
import Api from '../Database';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Signup = props => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    email.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== ''
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [email, password, confirmPassword]);
  const performRegisteration = () => {
    setIsLoading(true);
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      alert('Please, all fields are mandatory');
      setIsLoading(false);
      return;
    } else if (password.trim() !== confirmPassword.trim()) {
      alert('Password and ConfirmPassword should be same');
      setIsLoading(false);
      return;
    } else {
      fetch(Api + '/register', {
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
        //  console.log(JSON.stringify(res))
        if (res.status === 200) {
          alert('Registered Successfully!');
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 2000);
        } else if (res.status === 422) {
          alert('Email already registered!');
        } else {
          alert('Please try again!');
        }
        setIsLoading(false);
      });

      /* firestore()
  .collection('Users')
  .add({
    email:email ,
    password:password,
  })
  .then(() => {
    console.log('Registered Successfully!');
  });*/
    }
  };

  return isLoading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color="purple" size="large" />
    </View>
  ) : (
    <View style={{flex: 1}}>
      <AvoideKeyBoard>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <ImageBackground
              style={{
                paddingVertical: 20,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={BackgroundImg}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  paddingBottom: 50,
                }}>
                <Text
                  style={{
                    letterSpacing: 2.25,
                    fontWeight: 'bold',
                    fontSize: 70,
                    color: '#fff',
                  }}>
                  SIGNUP
                </Text>
              </View>
              <View
                style={{
                  height: screenHeight / 1.3,
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
                  style={{top: -75, maxHeight: 150, maxWidth: 150}}
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
                      setEmail(text.trim());
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
                      setPassword(text.trim());
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
                    CONFIRM PASSWORD
                  </Text>
                  <TextInput
                    placeholder="Please enter confirm password"
                    onChangeText={text => {
                      setConfirmPassword(text.trim());
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
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      performRegisteration();
                    }}
                    disabled={isDisabled}
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
                      SIGNUP
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingVertical: 10,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    borderBottomColor: 'purple',
                    borderBottomWidth: 1,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Login');
                    }}>
                    <Text
                      style={{
                        letterSpacing: 1.25,
                        color: 'purple',
                        fontWeight: 'bold',
                        fontSize: 13,
                      }}>
                      Already have an account ? L O G I N
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </AvoideKeyBoard>
    </View>
  );
};

export default Signup;
