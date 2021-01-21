import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, Platform, Button } from 'react-native'
// import Carousel from '../component/Carousel'
// import { dummyData } from '../Detaildata/index'
import { DetailLogo } from '../../assets'
import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'
// import firebase from '../../../database/firebase'
// import Fire from '../../../fire';


// const firebase = require ("firebase")
// require("firebase/firestore")


const Detail = ({ navigation, state }) => {
    const [image, setImage] = useState(null);

    // state = {
    //     text : "",
    //     image : null
    // };
    
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const upload = () => {
        Fire.shared.addPhoto (image).then(() => {
            setImage(null)
        })
        .catch (err => {
            alert(err.massage)
        })
    }

    // const handlePost = () => {
    //     Fire.shared
    //         .addPost ({ text: this.state.text.trim(), localUri: this.state.image})
    //         .then (ref => {
    //             this.setState ({ text: "", image:null });
    //         })
    //         .catch(error => {
    //             alert(error);
    //         });
    // }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        //    this.setState ({image: result.uri})
        }
    };

    // const [state, setState] = useState ({
    //     name: "",
    //     title: "",
    //     discription: "",
    //     image: ""
    // })
    
    // const handleChangeText = (name, value) => {
    //     setState ({ ...state, [name]: value})
    // }
    
    // const savecomment = async () => {
    //     if (state.name === '') {
    //         alert ('Please provide a name')
    //     }
    //     else {
    //         await firebase.db.collection('users').add({
    //             name: state.name,
    //             title: state.title,
    //             discription: state.discription,
    //             image: state.image
    //         })
    //         alert('Seved!')
    //     }
    // }
//-----------------------------------------------------------------------------------------------------------------------
    // state = {
    //     image: null,
    // }

    // const pickFromGallery = async () =>{
    //     const {granted} =await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
    //     if (granted){
    //         let data = await ImagePicker.launchImageLibraryAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.All,
    //             allowsEditing: true,
    //             aspect:[1,1],
    //             quality: 0.5
    //         })
    //         console.log (data)
    //     }else {
    //         Alert.alert("you need to give up permissions to work")
    //     }
    // }
    // const pickFromCamera = async () =>{
    //     const {granted} =await Permissions.askAsync(Permissions.CAMERA)
    //     if (granted){
    //         let data = await ImagePicker.launchCameraAsync({
    //             mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //             allowsEditing: true,
    //             aspect:[1,1],
    //             quality: 0.5
    //         })
    //         console.log (data)
    //     }else {
    //         Alert.alert("you need to give up permissions to work")
    //     }
    // }

    // const [selectImg, setSelectedImg] = React.useState(null)
    // let openCamera = async () => {
    //     await Permissions.askAsync(Permissions.CAMERA);
    //     const {cancelled, uri} = await ImagePicker.launchCameraAsync({
    //         allowsEditing: false,
    //     });
    //     this.setState({ image:uri})
    // }

    // let pickFromGallery = async () => {
    //     let picker = await ImagePicker.launchImageLibraryAsync()

    //     if (picker.cancelled === true) {
    //         return;
    //     }
    //     // setSelectedImg({ localUri: picker.uri })
    //     console.log(picker)
    // }

    return (
        // <View>
        //     <Carousel data={dummyData} />
        // </View>

        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={DetailLogo} style={{ width: 250, height: 250, resizeMode: "contain" }} />
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>We-Splah</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 2 }}>Find your inspiration</Text>
                <TextInput
                    style={{
                        marginTop: 40, borderBottomColor: '#ddd',
                        borderBottomWidth: 1, paddingBottom: 10, borderTopColor: '#ddd',
                        borderTopWidth: 1, paddingTop: 10
                    }}
                    placeholder="Search free high-resolution photos"
                />
            </View>

            <Text style={{ fontSize: 25, color: '#000000', textAlign: 'center' }}>Wanna upload your photo?</Text>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={pickImage} style={{
                    width: 150, backgroundColor: '#00C2CB', padding: 10,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Pick an Image</Text>
                </TouchableOpacity>
                {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
                {image && <Image source={{ uri: image }} style={{ width: '100%', height: 300, marginTop: 25 }} 
                onChangeText= {(value) => handleChangeText ("image", value)}/>}
            </View>

                        {/* <View style={styles.inputgrup}>
                            <TextInput
                            style={{margin: 5, marginHorizontal: 15}}
                            placeholder= "Your Name"
                            onChangeText= {(value) => handleChangeText ("name", value)}
                            />
                        </View>

                        <View style={styles.inputgrup}>
                            <TextInput
                            style={{margin: 5, marginHorizontal: 15}}
                            placeholder= "Title"
                            onChangeText= {(value) => handleChangeText ("title", value)}
                            />
                        </View>

                        <View style={styles.inputgrup}>
                            <TextInput
                            style={{margin: 5, marginHorizontal: 15}}
                            placeholder= "Discription"
                            onChangeText= {(value) => handleChangeText ("discription", value)}
                            />
                        </View>

                        onPress={() =>  upload ()}
                        <TouchableOpacity onPress={() =>  upload ()} style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Sand</Text>
                        </TouchableOpacity> */}

            {/* {
                selectImg !== null ? (
                    <Image
                        style={styles.image}
                        source={{ uri: (selectImg.localUri !== null) ? selectImg.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg' }} />
                ) : <Text style={{alignSelf: 'center', marginTop: 30}}>Kosong</Text>
            } */}

            {/* <Text style={{ fontSize: 25, color: '#000000', textAlign: 'center' }}>Wanna upload your photo?</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity onPress={pickFromGallery} style={{
                        width: 150, backgroundColor: '#00C2CB', padding: 10,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                    }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Gallery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={pickFromCamera} style={{
                        width: 150, backgroundColor: '#00C2CB', padding: 10,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                    }}>
                        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Camera</Text>
                    </TouchableOpacity>
                </View> */}
        </ScrollView>

    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#00C2CB',
        borderRadius: 20,
        marginHorizontal: 30
    }
})
