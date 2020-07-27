import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Alert } from 'react-native';

export default class EditGroupComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            Group: {
                name:'',
                description: ''
            }
        }
    }
    updateName(name){
        this.setState({name})
    }
    updateDescription(description){
        this.setState({description})
    }
    buttonPressed(){
        Alert.alert('You clicked the button!')  
    }    
    render(){
        console.log(this.state.name + this.state.description)
        return(
            <View style={styles.cont}>
                <Text style={styles.tittle}>EDITAR GRUPO</Text>
                <Text style={styles.subtittle} >Nombre:</Text>
                <TextInput 
                    style={styles.inputBox} 
                    value = {this.state.name} 
                    onChangeText={(name) => this.updateName(name)}
                />
                <Text style={styles.subtittle} >Descripción:</Text>
                <TextInput
                    multiline  
                    style={styles.areaBox} 
                    value = {this.state.description} 
                    onChangeText={(description) => this.updateDescription(description)}
                />

                <View style={styles.submit}>
                    <Button title='Guardar' onPress={() => this.buttonPressed} ></Button>
                </View>
                <View style={styles.cancel}>
                    <Button style={styles.btn} title='Cancelar'
                    ></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cont:{
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#0000',
        marginTop: 40
    },
    tittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
    },
    subtittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 58,
        marginTop: 10
    },
    inputBox:{
        width:320,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderColor: 'gray',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        alignSelf: "center",
        borderWidth: 0.5
    },
    areaBox:{
        width:320,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderColor: 'gray',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        alignSelf: "center",
        borderWidth: 0.5
    },
    btn:{
        backgroundColor:'#dc143c',
    },
    submit:{
        width: 200,
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#68a0cf',
        borderRadius:15,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: "center"
    },
    cancel:{
        width: 200,
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#DDE9FB',
        borderRadius:15,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: "center"
    },

});