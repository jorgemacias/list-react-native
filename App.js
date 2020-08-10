import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import StringItem from './components/StringItem';
import StringInput from './components/StringInput';

export default function App() {
  const [enteredListStrings, setListStrings] = useState([]);
  const [isAddMode,setIsAddMode]=useState(false);

  const addTextHandler = (enteredText) => {
    console.log(enteredText);
    setListStrings(currentStrings => [...currentStrings, { id: Math.random().toString(), value: enteredText }]);
    // setListStrings([...enteredListStrings,enteredText]);
    setIsAddMode(false);
    console.log(enteredListStrings);
  };

  const removeTextHandler = stringId => {
    // console.log('vvhvh');
    setListStrings(currentStrings => {
      return currentStrings.filter(
        // txt es el elemento seleccionado
        (txt) => txt.id !== stringId
      );
    });
  };

  const cancelTextInput=()=>{
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title={"Add New Text"} onPress={()=>setIsAddMode(true)} />
      <StringInput
        cancelText={cancelTextInput}
        visible={isAddMode}
        onAddString={addTextHandler}
      />
      {/* <ScrollView style={{marginTop:10}}>
        {enteredListStrings.map((textString, index) =>(
          <View  key={index} style={styles.item}>
            <Text >{textString}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={enteredListStrings}
        renderItem={itemData => <StringItem
          id={itemData.item.id}
          onDelete={removeTextHandler}
          stringText={itemData.item.value}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50 },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '80%'
  },

});
