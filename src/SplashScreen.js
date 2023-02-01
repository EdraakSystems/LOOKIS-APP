import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ( {navigation} ) => {
  const checkLogin = async () => {
    navigation.navigate('HomePage');
  };
  useEffect(() => {
    setTimeout(function () {
      checkLogin();
    }, 3000);
  }, []);

 


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Image
        style={styles.logo}
        source={require('../Components/assets/Logo.png')}
      />



      <View style={{  width: '100%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <View style={{ width: '100%', alignItems: 'center' }}>

          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{'Created By EdraakSystems'}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <View style={{ borderBottomWidth: 2, width: '50%', marginTop: '2%', borderColor: '#008389' }} />
        </View>
      
       <Image
          style={styles.logo2}
          source={require('../Components/assets/edraakLogo.png')}

        />
    
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  logo: {
    width: '45%',
    height: '45%',
    resizeMode: 'contain',
  },
  logo2: {
    width: '20%',
    height: '20%',
    resizeMode: 'contain',
    marginTop:30,
    marginRight:30

  },
})