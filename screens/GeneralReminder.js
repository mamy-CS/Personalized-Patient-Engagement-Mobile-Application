import React from 'react'

import {StyleSheet, View, Text, Button} from 'react-native';
import { CheckBox } from 'react-native-elements'

const PrePost = props => {
  return (
    <View styles={styles.screen}>
      <Text>Pre-Op Checklist</Text>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
      <CheckBox title='Checkbox' checked={false}></CheckBox>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize:80,
    alignItems:"center"
  },
  button: {
    margin: 100
  }
})

export default PrePost