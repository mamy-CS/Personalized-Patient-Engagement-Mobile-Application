// import React, { Component } from 'react';
// import {Alert, Button, StyleSheet,TextInput, Text, View,TouchableOpacity } from 'react-native';
// import DatePicker from 'react-native-datepicker'

// export default class Reminder extends Component {
  
//   constructor(props){
//     super(props)
//     this.state = {date:"2016-05-15"}
//   }
  
//   render() {
//     return (
//       <View>
//         <Text style={styles.bigHeader}>Reminder</Text>
//         <View style={styles.textInput}>
//          <TextInput
//           style={{height:25,fontSize:20}}
//           placeholder="Title"
//           placeholderTextColor = "black"
//           onChangeText={(text) => this.setState({text})}
//           multiline={true} 
//          />
//         </View>
        
//         <DatePicker
//             style={{width: 200}}
//             date={this.state.date}
//             mode="date"
//             placeholder="select date"
//             format="YYYY-MM-DD"
//             minDate="2016-05-01"
//             maxDate="2016-06-01"
//             confirmBtnText="Confirm"
//             cancelBtnText="Cancel"
//             customStyles={{
//             dateIcon: {
//                 position: 'absolute',
//                 left: 0,
//                 top: 4,
//                 marginLeft: 0
//             },
//             dateInput: {
//                 marginLeft: 36
//             }
//             }}
//             onDateChange={(date) => {this.setState({date: date})}}
//         />
        
//         <View style={{top:120,flex: 1, flexDirection: 'row',justifyContent:'space-around'}}>
//           <View style={styles.buttons}>
//             <Button  title="Cancel"/>
//           </View>
//           <View style={styles.buttons}>
//             <Button title="Save"/>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigHeader:{
//     position:'relative',
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 30,
//     alignSelf:'center',
//     flex:1,
//     top:30,
//   },
  
//   buttons:{
//     width:80,
//   },
  
//   textInput:{
//    position:'relative',
//    top:50,
//    borderBottomWidth: 2,
//    alignSelf: 'center',
//    width:150
//   }
// });


import React, { Component } from 'react';
import {Alert, Button, StyleSheet,TextInput, Text, View,TouchableOpacity    } from 'react-native';
import DatePicker from 'react-native-datepicker'

export default class Reminder extends Component {
  
  render() {
    return (
      <View>
        <Text style={styles.bigHeader}>Reminder</Text>
        <View style={styles.textInput}>
         <TextInput
          style={{height:25,fontSize:20}}
          placeholder="Title"
          placeholderTextColor = "black"
          onChangeText={(text) => this.setState({text})}
          multiline={true} 
         />
        </View>
        <View style={{top:90,flex: 1}}>
          <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
            <Text> Start </Text>
            <TextInput
              style={{ height: 20,width: 90, borderColor: 'black', borderWidth: 1,  marginBottom: 10 }}
              placeholder="DateInput" 
            />
          </View>
           <View style={{ flexDirection:'row',justifyContent:'space-around'}}>
            <Text> End </Text>
            <TextInput
              style={{ height: 20,width: 90, borderColor: 'black', borderWidth: 1}}
              placeholder="DateInput" 
            />
          </View>
        </View>
        <View style={{top:120,flex:1, flexDirection: 'row',justifyContent:'space-around'}}>
          <View style={styles.buttons}>
            <Button  title="Cancel"/>
          </View>
          <View style={styles.buttons}>
            <Button title="Save"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigHeader:{
    position:'relative',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf:'center',
    flex:1,
    top:30,
  },
  
  buttons:{
    width:80,
  },
  
  textInput:{
   position:'relative',
   top:50,
   borderBottomWidth: 2,
   alignSelf: 'center',
   width:150
  }
});
