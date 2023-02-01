import React from 'react';

import CustomDrawingScreen from '../Components/CustomDrawingScreen';
import AgeGroup from '../Components/AgeGroup';
import StepOne from '../Components/StepOne';
import StartScribling from '../Components/StartScribling';
import TierScreen from '../Components/TierScreen';
import DrawingScreen from '../Components/DrawingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../Components/HomePage';
import JasonSketch from '../Components/DrawingScreen/JasonSketch';
import Switcch from '../Components/DrawingScreen/Switcch';
import Login from '../Components/Registeration/Login';
import Signup from '../Components/Registeration/Signup';
import ForgotPassword from '../Components/Registeration/ForgotPassword';
import StepFive from '../Components/StepFive';
import PinchableImage from '../Components/PinchableImage';

import {LogBox} from 'react-native';
import SplashScreen from './SplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={'SplashScreen'}
        >
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="PinchableImage" component={PinchableImage} />

        <Stack.Screen name="Switcch" component={Switcch} />
        <Stack.Screen name="JasonSketch" component={JasonSketch} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DrawingScreen" component={DrawingScreen} />
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="AgeGroup" component={AgeGroup} />
        <Stack.Screen name="StartScribling" component={StartScribling} />
        <Stack.Screen name="StepFive" component={StepFive} />
        <Stack.Screen
          name="TierScreen"
          component={TierScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
