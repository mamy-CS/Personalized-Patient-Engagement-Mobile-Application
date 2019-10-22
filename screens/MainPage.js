
import React from 'react';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {StyleSheet, View, Text, Button} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

const MainPage =  props => {
  return (
    <View style = {styles.screen}>
      <MenuProvider style={{ backgroundColor:'red' }}>
        <Menu>

          <MenuTrigger  >
            <Icon name="menu" size = {40} ></Icon>
          </MenuTrigger  >

          <MenuOptions>
            <MenuOption value={"Register"}>
              <Text style={styles.menuContent}>Profile</Text>
            </MenuOption>

            <MenuOption value={"Download"} onSelect={ () => {
              props.navigation.navigate({routeName: 'ContactScreen'});
            }}>
              <Text style={styles.menuContent}>Contact Doctor</Text>
            </MenuOption>

            <MenuOption value={"Logout"}>
              <Text style={styles.menuContent}>Calender</Text>
            </MenuOption>

            <MenuOption value={3} disabled={true}>
              <Text style={styles.menuContent}>Photo Gallery</Text>
            </MenuOption>

            <MenuOption value={3} disabled={true}>
              <Text style={styles.menuContent}>Log Out</Text>
            </MenuOption>
          </MenuOptions>

        </Menu>
      </MenuProvider>

      <Text style={{fontSize: 35, margin:80, backgroundColor: 'powderblue'}}>HealthAloha</Text>
      <Text style={{fontSize: 35}}>Welcome to HealthAloha!</Text>
      <View style={{flexDirection: 'row', margin:40}}>
        <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}>
          <Button title="Pre-op/Post-op Care"
            color='#3498db'
            style={{height:80,backgroundColor:'#1e90ff'}}
            onPress = {() => {
              props.navigation.navigate({routeName: 'PrePostScreen'});
            }}/>
        </View>
        <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}} >
          <Button title="Improve My Health"
            color='#1abc9c'
            style={styles.buttonContainer}
            onPress = {() => {
              props.navigation.navigate({routeName: 'EducationScreen'});
            }}/>
          </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}}>
          <Button title="Survey"
            color="brown"
            style={{size:80,marginTop:10, backgroundColor:'#FE434C'}}
            onPress = {() => {
              props.navigation.navigate({routeName: 'SurveyScreen'});
            }}
          />
        </View>
        <View style={{width: 150, height: 150, backgroundColor: 'pink'}}>
          <Button title="Ho am I doing"
            color="#FE434C"
            style={{size:80,marginTop:10, backgroundColor:'#FE434C'}}
            onPress = {() => {
              props.navigation.navigate({routeName: 'ProgressScreen'});
            }}
          />
        </View>
      </View>
    </View>
  );
};

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

export default MainPage;