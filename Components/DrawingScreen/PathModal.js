import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
//import * as ImagePicker from "react-native-image-picker"
import {ColorPicker} from 'react-native-color-picker';

import {RadioButton} from 'react-native-paper';
import AvoideKeyBoard from '../AvoideKeyBoard/AvoideKeyBoard';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const PathModal = props => {
  const [textval, setTextVal] = React.useState('');
  const [textColor, setTextColor] = React.useState('');
  const [textSize, setTextSize] = React.useState('');
  const setTextValues = () => {
    props.setPathText([
      ...props.pathText,
      {value: textval, color: textColor, size: textSize},
    ]);
    props.setPathModalVisible(false);
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.pathModalVisible}
        onRequestClose={() => {
          setPathModalVisible(!props.pathModalVisible);
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
        <AvoideKeyBoard>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                height: '100%',
                backgroundColor: '#fff',
                flexDirection: 'column',
              }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  marginBottom: 15,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.setPathModalVisible(false);
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    backgroundColor: 'purple',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 17, color: '#fff'}}>
                    X
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 30,
                  }}>
                  Please enter text & details
                </Text>
              </View>

              <View
                style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    marginBottom: 0,
                  }}>
                  Enter Text
                </Text>
              </View>
              <View
                style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                <TextInput
                  onChangeText={text => {
                    setTextVal(text);
                  }}
                  style={{
                    height: 40,
                    width: screenWidth / 1.5,
                    borderRadius: 6,
                    borderWidth: 1,
                  }}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 15,
                    }}>
                    {' '}
                    Choose Size
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <RadioButton
                    value=""
                    status={textSize === 'large' ? 'checked' : 'unchecked'}
                    color="black"
                    onPress={() => setTextSize('large')}
                  />
                  <Text style={{fontSize: 20}}>Large</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <RadioButton
                    value=""
                    status={textSize === 'medium' ? 'checked' : 'unchecked'}
                    color="black"
                    onPress={() => setTextSize('medium')}
                  />
                  <Text style={{fontSize: 17}}>Medium</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <RadioButton
                    value=""
                    status={textSize === 'small' ? 'checked' : 'unchecked'}
                    color="black"
                    onPress={() => setTextSize('small')}
                  />
                  <Text style={{fontSize: 14}}>Small</Text>
                </View>
              </View>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{alignItems: 'flex-start', justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 15,
                    }}>
                    Choose Color
                  </Text>
                </View>
                <ColorPicker
                  onColorSelected={color => {
                    //alert(`Color selected: ${color}`)
                    setTextColor(color);
                  }}
                  style={{
                    flex: 1,
                    width: screenWidth / 1.3,
                    height: screenHeight / 4,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <TouchableOpacity
                  style={{
                    width: screenWidth / 1.5,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'purple',
                    borderRadius: 6,
                  }}
                  onPress={() => setTextValues()}>
                  <Text
                    style={{
                      color: '#fff',
                      letterSpacing: 1.5,
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <TouchableOpacity
                  style={{
                    width: screenWidth / 1.5,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'purple',
                    borderRadius: 6,
                  }}
                  onPress={() => {
                    props.setPathText([]);
                    props.setPathModalVisible(false);
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      letterSpacing: 1.5,
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    Clear All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </AvoideKeyBoard>
      </Modal>
    </View>
  );
};

export default PathModal;
