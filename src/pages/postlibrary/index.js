import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostLibrary = () => {
    return (
        <View style={styles.container}>
            <Text>Post Library</Text>
        </View>
    )
}

export default PostLibrary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
