import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import Chats  from './Chat';

class ChatComponent extends Component {


    render() {
        return [
            <View style={styles.title}>
                <View style={styles.containerRow}>
                    <View style={styles.containerChild1}>
                        <Text style={styles.welcome}>Nombre del Chat</Text>
                    </View>
                    <View style={styles.containerChild2}>
                        <TouchableHighlight underlayColor='#E0ECFE' onPress={() => this.props.navigation.navigate('InfoGroupComponent')}>
                            <Image style={styles.image}
                                source={require('../../assets/options.png')} />
                        </TouchableHighlight>

                    </View>
                </View>
            </View>,
            <Chats key="content" />,
            // <footer>(c)stackoverflow</footer>
        ]
    }
}
const styles = StyleSheet.create({
    welcome: {

        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28
    },
    title: {
        backgroundColor: '#B8DBEB',
        flex: 0.13,
        //alignItems: 'center',
        flexDirection: "column",
        //padding: 10

    },
    containerRow: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    containerChild1: {
        flex: 0.94,
        //padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerChild2: {

        flex: 0.06,
        padding: 10,
        //backgroundColor: 'red'

    },
    image: {
        //flexDirection: 'row',
        //padding: 10,
        //resizeMode: "center",
        width: 19,
        height: 55,
        //margin: 10
    }
})
export default ChatComponent;