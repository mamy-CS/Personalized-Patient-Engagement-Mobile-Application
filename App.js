import React from 'react';

import Navigator from './navigation/Navigator';

export default function App() {
  return <Navigator/>;
}
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
// import { DrawerItems, createAppContainer } from 'react-navigation';
// import { createDrawerNavigator} from 'react-navigation-drawer';
// import MainPage from './screens/MainPage';

// const { width } = Dimensions.get("window");

// const CustomDrawerNavigation = (props) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
//         <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>

//         </View>
//         <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
//           <Text>John Doe</Text>
//         </View>
//       </View>

//       <View style={{ alignItems: "center", bottom: 20 }}>
//         <View style={{ flexDirection: 'row' }}>
//           <View style={{ flexDirection: 'column', marginRight: 15 }}>
//             <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
//           </View>
//           <View style={{ flexDirection: 'column' }}>
//             <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const Drawer = createDrawerNavigator({
//   Home: {
//     screen: MainPage,
//     navigationOptions: {
//       title: 'Home'
//     }
//   }

// },
//   {
//     drawerPosition: 'right',
//     contentComponent: CustomDrawerNavigation,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//     drawerWidth: (width / 3) * 2
//   });

// const App = createAppContainer(Drawer);

// export default App;
