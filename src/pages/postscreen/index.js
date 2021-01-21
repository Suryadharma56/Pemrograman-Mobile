

// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import Index from '../../app/index';
// import Edit from '../../app/Edit';

// const AppNavigator = createSwitchNavigator({
//   Index: Index,
//   Edit: Edit
// },
// {
//   initialRouteName: 'Index',
// }
// )
// export default createAppContainer(AppNavigator);



// import React, { Component } from "react";
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from "react-native";
// import Tab from "../../components/TabItem";
// const { width } = Dimensions.get("window");
// import { Transition, Transitioning } from 'react-native-reanimated';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// // import firestore from '../../../fire'

// class PostScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 0,
//             // data: []
//         };
//         this.ref = React.createRef();
//     }
//     selectTab = tabIndex => {
//         this.ref.current.animateNextTransition()
//         this.setState({ selectedTab: tabIndex });
//     };
//     transition = (
//         <Transition.Together>
//             <Transition.Change />
//         </Transition.Together>
//     )

                // constructor (props) {
                //     super(props);
                //     this.state = {
                //         data: [],
                //     };
                // }
                        // componentDidMount() {
                        //     this.getDataCollection();
                        // }

                        // getDataCollection = async () => {
                        //     const users = await firestore().collection('users').get();
                        //     const allData = users.docs.map((doc) => doc.data());
                        //     this.setState({ data: allData });
                        //     console.log(alldata);
                        // }

//     render() {
//         const pickFromCamera = async () => {
//             const { granted } = await Permissions.askAsync(Permissions.CAMERA)
//             if (granted) {
//                 let data = await ImagePicker.launchCameraAsync({
//                     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                     allowsEditing: true,
//                     aspect: [1, 1],
//                     quality: 0.5
//                 })
//                 console.log(data)
//             } else {
//                 Alert.alert("you need to give up permissions to work")
//             }
//         }

//         let pickFromGallery = async () => {
//             let picker = await ImagePicker.launchImageLibraryAsync()

//             if (picker.cancelled === true) {
//                 return;
//             }
//             // setSelectedImg({ localUri: picker.uri })
//             console.log(picker)
//         }

//         return (
//             <Transitioning.View
//                 ref={this.ref}
//                 transition={this.transition}
//                 style={{ flex: 1 }}
//             >
//                 <View style={{ ...styles.tabContainer }}>
//                     <View
//                         style={[
//                             {
//                                 position: "absolute",
//                                 height: 70,
//                                 width: (width - 200) / 2,
//                                 backgroundColor: "#00C2CB",
//                                 left: this.state.selectedTab == 0 ? 0 : null,
//                                 right: this.state.selectedTab == 1 ? 0 : null
//                             }
//                         ]}
//                     />

//                     <TouchableOpacity
//                         style={{ flex: 1 }}
//                         onPress={() => this.selectTab(0)}
//                     >
//                         <Tab
//                             icon="camerao"
//                             isSelected={this.state.selectedTab == 0 ? true : false}
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={{ flex: 1 }}
//                         onPress={() => this.selectTab(1)}
//                     >
//                         <Tab
//                             icon="filetext1"
//                             isSelected={this.state.selectedTab == 1 ? true : false}
//                         />
//                     </TouchableOpacity>
//                 </View>

//                 {this.state.selectedTab == 0 ? (
//                     <View style={{ alignItems: 'center' }}>
//                         <Text style={{ fontSize: 25, color: '#000000', textAlign: 'center' }}>Wanna upload your photo?</Text>

//                         <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
//                             <TouchableOpacity onPress={pickFromGallery} style={{
//                                 width: 150, backgroundColor: '#00C2CB', padding: 10,
//                                 alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
//                             }}>
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Gallery</Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity onPress={pickFromCamera} style={{
//                                 width: 150, backgroundColor: '#00C2CB', padding: 10,
//                                 alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
//                             }}>
//                                 <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Camera</Text>
//                             </TouchableOpacity>

//                         </View>
//                     </View>
//                 ) : (
//                         <View style={{ alignItems: 'center' }}></View>
//                     )}

//             </Transitioning.View>
//         );
//     }
// }
// export default PostScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     tabContainer: {
//         height: 50,
//         flexDirection: "row",
//         marginTop: 50,
//         borderRadius: 70,
//         width: width - 200,
//         marginHorizontal: 100,
//         backgroundColor: "lightgrey",
//         overflow: "hidden"
//     },
//     image: {
//         width: 300,
//         height: 300,
//         resizeMode: 'contain'
//     }
// });