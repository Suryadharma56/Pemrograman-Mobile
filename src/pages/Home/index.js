// *Rancang Home 1*

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'


const Home = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 25, color: '#000' }}>Home</Text>
            </View>

            <ScrollView>
                <TouchableOpacity onPress={() => handleGoTo('Post')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2021/01/09/19/59/mountains-5903352_960_720.jpg', }}
                        />
                        <Text style={styles.username}>
                            Yan Copit
                        </Text>
                    </View>
                    <View style={styles.postImg}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2021/01/09/19/59/mountains-5903352_960_720.jpg', }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post2')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_960_720.jpg', }}
                        />
                        <Text style={styles.username}>
                            Gus Suryadharma
                        </Text>
                    </View>
                    <View style={styles.postImg}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_960_720.jpg', }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleGoTo('Post3')}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', }}
                        />
                        <Text style={styles.username}>
                            Gek Trisna
                        </Text>
                    </View>
                    <View style={styles.postImg}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.imgPerfil}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_960_720.jpg', }}
                        />
                        <Text style={styles.username}>
                            Made Artana
                        </Text>
                    </View>
                    <View style={styles.postImg}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2015/02/24/02/05/website-647013_960_720.jpg', }}
                        />
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10
    },
    username: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    postImg: {
        backgroundColor: '#DDD',
        width: '100%',
        height: 300
    },
    image: {
        height: 300
    }
})



// *Rancang Home 2*
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//             posts: [
//                 { key: 1, username: 'Henrique Dias', image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/03/como.png' },
//                 { key: 2, username: 'Sujeito Programador', image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/02/js.png' },
//                 { key: 3, username: 'Luana Souza', image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/01/coverCodeEdit.png' },
//                 { key: 4, username: 'Eren Yeager', image: 'https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 5, username: 'Mikasa Ackerman', image: 'https://images.pexels.com/photos/4124073/pexels-photo-4124073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 6, username: 'Hange Zoe', image: 'https://images.pexels.com/photos/4275890/pexels-photo-4275890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 7, username: 'Armin Arlert', image: 'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 8, username: 'Reiner Braun', image: 'https://images.pexels.com/photos/1497302/pexels-photo-1497302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 9, username: 'Erwin Smith', image: 'https://images.pexels.com/photos/1243440/pexels-photo-1243440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 10, username: 'Levi Ackerman', image: 'https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 11, username: 'Zeke Yeager', image: 'https://images.pexels.com/photos/2592537/pexels-photo-2592537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 12, username: 'Annie Leonhart', image: 'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//                 { key: 13, username: 'Porco Galliard', image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
//             ]
//         }
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={{ fontSize: 25, color: '#000' }}>Home</Text>
//                 </View>

//                 <ScrollView>
//                     {this.state.posts.map((post) => {
//                         return (
//                             <View key={post.key}>

//                                 <View style={styles.postHeader}>
//                                     <Image source={{ uri: post.image }} style={styles.imgPerfil} />
//                                     <Text style={styles.username}>
//                                         {post.username}
//                                     </Text>
//                                 </View>

//                                 <View style={styles.postImg}>
//                                     <Image source={{ uri: post.image }} style={styles.image} />
//                                 </View>

//                             </View>
//                         );
//                     })}
//                 </ScrollView>

//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 10,
//     },
//     header: {
//         width: '100%',
//         height: 55,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderBottomColor: '#ddd',
//         borderBottomWidth: 1,
//     },
//     imgPerfil: {
//         width: 40,
//         height: 40,
//         borderRadius: 25,
//         marginLeft: 10
//     },
//     postImg: {
//         backgroundColor: '#DDD',
//         width: '100%',
//         height: 300
//     },
//     username: {
//         color: '#000',
//         fontWeight: 'bold',
//         marginLeft: 10
//     },
//     postHeader: {
//         width: '100%',
//         height: 55,
//         flexDirection: 'row',
//         alignItems: 'center'
//     },
//     image: {
//         height: 300
//     }
// });