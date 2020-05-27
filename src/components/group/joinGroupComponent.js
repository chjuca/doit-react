import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';


export default class JoinGroupComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

     render(){
        return (
            <View>
                <Text> {this.props.route.params.name +' '+ this.props.route.params.groupId} </Text>
                <Button title="Unirme"/>
            </View>
        );
     }
}