import React, { version } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { LoginLogo } from '../../assets'

const HomeLogin = ({ navigation }) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <Image source={LoginLogo} style={styles.logo} />

            <Text style={{ fontSize: 40, fontWeight: "bold", paddingVertical: 20, paddingTop: 30 }}>Hello!</Text>
            <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center', marginHorizontal: 50 }}>WE! is home to many talented image designers. Each works in different styles and explores different concepts, so you can totally find the right image for your project.</Text>

            <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>

                <TouchableOpacity onPress={() => handleGoTo('LoginScreen')} style={{ backgroundColor: '#00C2CB', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('SignUp')} style={{ backgroundColor: '#fff', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#00C2CB' }}>
                    <Text style={{ textAlign: 'center', color: '#00C2CB', fontSize: 18 }}>Sign Up</Text>
                </TouchableOpacity>

            </View>

            <Text style={{ color: 'grey', fontSize: 16 }}>Or via social media</Text>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>

                <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#3f51b5', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>f</Text>
                </View>

                <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#f44366', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>G</Text>
                </View>

                <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#1565c0', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>in</Text>
                </View>

            </View>

        </View>
    )
}

export default HomeLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    }
})