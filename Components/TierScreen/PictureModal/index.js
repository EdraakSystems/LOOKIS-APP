import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
//import * as ImagePicker from "react-native-image-picker"
import cameraImage from './../../assets/image-gallery.png';
//import add from './../../assets/more.png'
import {launchImageLibrary} from 'react-native-image-picker';
//var ImagePicker = require('react-native-image-picker');
//import ImagePicker from 'react-native-image-picker';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const PictureModal = props => {
  const [filePath, setFilePath] = React.useState({});

  const addLibrary = async () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
        // alert('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        //alert('ImagePicker Error: ' + response.error);
      } else {
        let source = response;
        console.log('source: ' + source);
        // this.setState({
        // filePath: source,
        //});
        //setPictureUriFunction
        //console.log()
        props.setPictureUriFunction('data:image/jpeg;base64,' + source.data);
      }
    });
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.pictureModalVisible}
        onRequestClose={() => {
          setModalVisible(!props.pictureModalVisible);
        }}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            width: screenWidth / 1.2,
            marginTop: 30,
            marginLeft: 20,
            borderRadius: 6,
            borderColor: 'purple',
            borderWidth: 0.5,
            padding: 20,
            height: screenHeight / 2.25,
            backgroundColor: '#fff',
            flexDirection: 'column',
          }}>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 50,
            }}>
            <TouchableOpacity
              onPress={() => {
                props.setPictureModalVisible(false);
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 6,
                backgroundColor: 'purple',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 17, color: '#fff'}}>
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
              Upload image for the background of your masterpiece
            </Text>
          </View>
          <Text style={{textAlign: 'center', letterSpacing: 1.5}}>
            (Please add a jpeg file with high resolution.)
          </Text>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'purple',
                marginTop: 20,
                borderRadius: 6,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
              onPress={() => {
                addLibrary();
              }}>
              <Image source={cameraImage} style={{width: 50, height: 50}} />
              <Text style={{marginLeft: 10, color: '#fff'}}>
                Choose from Library
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PictureModal;
