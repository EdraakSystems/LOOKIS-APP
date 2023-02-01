import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {IOS} from '../Constants';
const AvoideKeyBoard = ({children}) => {
  return (
    <KeyboardAvoidingView
      behavior={IOS ? 'padding' : null}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AvoideKeyBoard;
