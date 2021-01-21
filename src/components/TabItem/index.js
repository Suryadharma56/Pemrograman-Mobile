import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

const Tab = ({ icon, isSelected }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <AntDesign name={icon} color={isSelected ? "black" : "grey"} size={25} />
  </View>
);
export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});



// import React from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { IconHome, IconHomeAktif, IconDetail, IconDetailAktif, IconProfile, IconProfileAktif } from '../../assets'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

//     return (
//         <TouchableOpacity
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={styles.container}
//         >
//             <Text style={styles.text}>
//                 {label}
//             </Text>
//         </TouchableOpacity>
//     )
// }

// export default TabItem

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center'
//     },
//     text: {
//         fontSize: 13,
//         color: '#000000'
//     }

// }
// )
