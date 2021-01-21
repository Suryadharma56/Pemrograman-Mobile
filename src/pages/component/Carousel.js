import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, TextInput, Image } from 'react-native'
import CarouselItem from './CarouselItem'
import { DetailLogo } from '../../assets'


const { width, heigth } = Dimensions.get('window')


// let flatList

// function infiniteScroll(dataList) {
//     const numberOfData = dataList.length
//     // let scrollValue = 0, scrolled = 0

//     // setInterval(function () {
//     //     scrolled++
//     //     if (scrolled < numberOfData)
//     //         scrollValue = scrollValue + width

//     //     else {
//     //         scrollValue = 0
//     //         scrolled = 0
//     //     }

//     //     this.flatList.scrollToOffset({ animated: true, offset: scrollValue })

//     // }, 3000)
// }


const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)


    // const [dataList, setDataList] = useState(data)

    // useEffect(() => {
    //     setDataList(data)
    //     infiniteScroll(dataList)
    // })


    if (data && data.length) {
        return (
            <View style={styles.container}>
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

                <FlatList data={data}

                    // ref={(flatList) => { this.flatList = flatList }}

                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>

            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    container: {
        backgroundColor: '#fff'
    }
})

export default Carousel