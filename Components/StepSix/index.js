import React, {useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
} from 'react-native';
//import {backButton} from '../Constants';
import background from './../assets/StepSixBackground.png';
import Mailer from 'react-native-mail';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IOS} from '../Constants';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const StepSix = props => {
  const safeAreaStyle = useRef({
    paddingTop: IOS ? useSafeAreaInsets().top : 0, //StatusBar.currentHeight,
  }).current;
  //const [tier, setTier] = React.useState('');
  const handleEmail = () => {
    // alert(props.filePath.replace(props.fileName+".jpg",""))
    Mailer.mail(
      {
        subject: 'art',
        recipients: ['abc@example.com'],
        //   ccRecipients: ['supportCC@example.com'],
        //   bccRecipients: ['supportBCC@example.com'],
        //  body: '<b>A Bold Body</b>',
        //  customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
        //  isHTML: true,
        attachments: [
          {
            // Specify either `path` or `uri` to indicate where to find the file data.
            // The API used to create or locate the file will usually indicate which it returns.
            // An absolute path will look like: /cacheDir/photos/some image.jpg
            // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
            path: props.filePath, //props.filePath.replace(props.fileName+".jpg",""), // The absolute path of the file from which to read data.
            //  uri: '', // The uri of the file from which to read the data.
            // Specify either `type` or `mimeType` to indicate the type of data.
            type: 'jpg', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            //    mimeType: '', // - use only if you want to use custom type
            name: props.fileName, // Optional: Custom filename for attachment
          },
        ],
      },
      (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK: Email Error Response'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('CANCEL: Email Error Response'),
            },
          ],
          {cancelable: true},
        );
      },
    );
  };
  return (
    <Modal
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight,
      }}
      visible={props.stepSixModal}
      animationType="slide">
      <View style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          containerstyle={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
          <ImageBackground
            style={{
              resizeMode: 'cover',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: screenHeight,
              paddingBottom: 10,
              width: screenWidth,
            }}
            source={background}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: screenHeight / 1.1,
                alignItems: 'flex-end',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() => {
                  //alert('checks '+props.filePath)
                  props.setStepSixModal(false);
                }}
                style={{
                  borderWidth: 3,
                  borderColor: '#fff',
                  paddingVertical: 10,
                  marginVertical: 5,
                  width: screenWidth / 2.5,
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
                  Edit Project
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleEmail();
                }}
                style={{
                  borderWidth: 3,
                  borderColor: '#fff',
                  paddingVertical: 10,
                  marginVertical: 5,
                  width: screenWidth / 2.5,
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
                  Export
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
    </Modal>
  );
};
export default StepSix;
