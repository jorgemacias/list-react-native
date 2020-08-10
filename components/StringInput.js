import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const StringInput = (props) => {

  const [enteredText, setText] = useState('');

  textInputHandler = (enteredInputText) => {
    setText(enteredInputText);
  };

  const addTextHandler = () => {
    props.onAddString(enteredText);
    setText('');
  };

  const cancelButton = () => {
    setText('');
    props.cancelText();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter text"
          style={styles.input}
          onChangeText={textInputHandler}
          value={enteredText}
        />
        {/* <Button title="Add" onPress={()=>props.onAddString(enteredText)} /> */}
        {/* <Button title="Add" onPress={props.onAddString.bind(this, enteredText)} /> */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelButton} color='red' />
          </View>
          <View style={styles.button}> 
            <Button title="Add" onPress={addTextHandler} />
          </View>
        </View>
      </View>
    </Modal>

  );
};

const styles = StyleSheet.create({

  inputContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%',
    marginBottom: 10
  },

  // buttonCancel:{
  //   backgroundColor:'red'
  // },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },

  button:{
    width:'40%'
  }
});

export default StringInput;


