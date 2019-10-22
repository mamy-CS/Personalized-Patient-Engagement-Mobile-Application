import React, { Component } from 'react';
import {FlatList,Alert, Button, StyleSheet,TextInput, Text, View,TouchableOpacity    } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class Reminder extends Component {
  
  render() {
    return (
      <View>
        <View style={styles.backButton}>
            <Button title="< Back"/>
        </View>

  
        <View style={{borderWidth:1, width:'100%', height:150}}></View>
        
        <View style={styles.container}>
          <FlatList
            data={[
              {key: 'Appointment'},
              {key: 'Take Pills'},
              {key: 'See Doctor'},
              {key: 'Operation'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton:{
    position:'relative',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf:'flex-start',
    flex:1,
  },
  container: {
  },
  item: {
    fontSize: 18,
  },
});