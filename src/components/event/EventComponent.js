import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class EventComponent extends Component {


   /* constructor(props) {
        super(props);
        this.state = {event:[]};
    }*/

    render() {
        return (
            <View style={styles.cont}>
                <Text style={styles.tittle}>EVENTOS</Text>
                <Text style={styles.subtittle}>Nombre</Text>
                <TextInput style={styles.inputBox} id='name'></TextInput>
                <Text style={styles.subtittle} >Descripción</Text>
                <TextInput style={styles.inputBox} id='description'></TextInput>

            </View>
           /* <View style={styles.container}>
                <View style={styles.containerRight}>
                    <Text style={styles.hour}>{this.props.item.hourStart} - {this.props.item.hourEnd} </Text>
                    <Text style={styles.subtittle}>{this.props.item.name}</Text>
                    <Text style={styles.description}>{this.props.item.description}</Text>
                </View>
                <View style={styles.containerLeft}>
                    <Text style={[styles.image, {backgroundColor: this.props.item.color}]}>{this.props.item.image}</Text>
                </View>
            </View>*/
        );
    }
}
const styles = StyleSheet.create({
    cont:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000'
    },
    container: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
       // justifyContent: 'center',
        alignSelf: 'stretch'
    },
    containerRight: {
        flex: 2,
        flexDirection: 'column',
        margin: 10,
    },
    containerLeft: {
        flex: 0.75,
    },
    hour: {
        fontFamily: 'Roboto',
        fontSize: 15,
        margin: 3,
        color: '#737373'
    },
    subtittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 58
    },
    tittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
    },
    name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 3,
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 13,
        margin: 3,
        color: '#929292'
    },
    image:{
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'sans-serif-condensed',
        width: 60,
        height: 60,
        color: 'white',
        fontSize: 45
    },
    inputBox:{
        width:320,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    }
})
