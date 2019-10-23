import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {CheckBox} from 'react-native-elements';

class PrePostChecklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '001',
          title: 'Fill in form',
          checked: false,
        },
        {
          id: '002',
          title: 'Get prescription',
          checked: true,
        },
      ],
    };
  }

  onItemPress = index => {
    let data = this.state.data;
    data[index].checked = !data[index].checked;
    this.setState({data});
  };

  render() {
    let items = this.state.data.map((item, index) => (
      <CheckBox
        title={item.title}
        checked={item.checked}
        onPress={() => {
          this.onItemPress(index);
        }}
      />
    ));

    return (
      <View style={styles.screen}>
        <Text>Pre-Op Checklist</Text>
        {items}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize: 80,
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    margin: 100,
  },
});

export default PrePostChecklist;
