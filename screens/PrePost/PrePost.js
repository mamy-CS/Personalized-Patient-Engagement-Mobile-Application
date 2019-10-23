import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

const PrePost = props => (
  <View styles={styles.screen}>
    <Text>I want to see my . . .</Text>
    <Button
      title="General Reminders"
      onPress={() => {
        props.navigation.navigate({routeName: 'GeneralRemindersScreen'});
      }}
    />
    <Button
      title="Pre/Post-Op Checklist"
      onPress={() => {
        props.navigation.navigate({routeName: 'PrePostChecklistScreen'});
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize: 80,
    alignItems: 'center',
  },
  button: {
    margin: 100,
  },
});

export default PrePost;
