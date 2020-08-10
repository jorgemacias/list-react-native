import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const StringItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this,props.id)}>
      <View style={styles.item}>
        <Text>{props.stringText}</Text>
      </View>
    </TouchableNativeFeedback>
  );

}

const styles = StyleSheet.create({

  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1
  },
});

export default StringItem;