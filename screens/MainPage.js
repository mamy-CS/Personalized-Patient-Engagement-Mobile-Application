
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import { Left, Right} from 'native-base';

import {StyleSheet, View, Text, Button,TouchableOpacity} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

class MainPage extends Component  {
  render() {
  return (
    <View style = {styles.screen}>


      <Text style={{fontSize: 35, margin:40}}>HealthAloha</Text>
      <Text style={{fontSize: 35}}>Welcome to HealthAloha!</Text>
      {/* <MenuProvider style={{ backgroundColor:'red' }}>
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
      </MenuProvider> */}
         <View style={{flexDirection: 'row'}} >
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{this.props.navigation.navigate({routeName: 'PrePostScreen'});}}>
     <View style={{width:200, height: 200, backgroundColor: 'powderblue'}}>
     <Icon
    name='plus'
    size={70}
    color='#3b5998'
    style={styles.iconButton}/>
        <Text  style={styles.textButton}>Pre-op/Post-op Care</Text>
     </View>
 </TouchableOpacity>
 <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{this.props.navigation.navigate({routeName: 'SurveyScreen'});}}>
     <View style={{width:200, height: 200, backgroundColor: 'powderblue'}}>
     <Icon
    name='tasks'
    size={50}
    color='#3b5998'
    style={styles.iconButton}/>
         <Text  style={styles.textButton}>Survey</Text>
     </View>
 </TouchableOpacity>
</View>
<View style={{flexDirection: 'row'}} >
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{this.props.navigation.navigate({routeName: 'EducationScreen'});}}>
     <View style={{width:200, height: 200, backgroundColor: 'powderblue'}}>
     <Icon
    name='heart'
    size={50}
    color='#3b5998'
    style={styles.iconButton}/>
         <Text  style={styles.textButton}>Improve My Health</Text>
     </View>
 </TouchableOpacity>
 <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>{this.props.navigation.navigate({routeName: 'ProgressScreen'});}}>
     <View style={{width:200, height: 200, backgroundColor: 'powderblue'}}>
     <Icon
    name='line-chart'
    size={50}
    color='#3b5998'
    style={styles.iconButton}/>
         <Text  style={styles.textButton}>How Am I Doing</Text>
     </View>
 </TouchableOpacity>
</View>

      {/* <View style={{flexDirection: 'row'}} >
        <View style={{width:150, height: 150, backgroundColor: 'powderblue'}}>
          <Button title="Pre-op/Post-op Care"
            color='#3498db'
            style={{height:80,backgroundColor:'#1e90ff'}}
            onPress = {() => {
              props.navigation.navigate({routeName: 'PrePostScreen'});
            }}/>
             <Icon
    name='linechart'
    size={50}
    color='#3b5998'
    style={{height:45,width:25,marginLeft:60}}/>
        </View>


        <View  onPress = {() => {
              props.navigation.navigate({routeName: 'EducationScreen'});
            }} style={{width: 150, height: 150, backgroundColor: 'skyblue'}} >
           <Icon name='menu' size={40} color='#3b5998'style={{height:45,width:25}}/>
  <Text style={styles.buttonText}>Improve My Health</Text>
          </View>
      </View> */}
{/*

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
      </View> */}
    </View>
  );}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize:80,
    alignItems:"center"
  },
  button: {
    margin: 100
  },

  iconButton: {
    height:75,width:75,marginLeft:65, marginTop:30

  },
  textButton: {
    fontSize:25,

    textAlign: 'center'
  }
});

export default MainPage;
