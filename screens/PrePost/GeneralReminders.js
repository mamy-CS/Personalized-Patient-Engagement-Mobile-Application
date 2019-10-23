import React from 'react';

import {View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

const GeneralReminder = () => {
  let props = {};
  props.title = 'Pre-Op Guidelines';
  props.checklists = ['Drink water', 'Do checklists'];

  return (
    <View>
      <Text>{props.title}</Text>
      {props.checklists.map((item, i) => (
        <ListItem key={i} title={item} />
      ))}
    </View>
  );
};

export default GeneralReminder;
