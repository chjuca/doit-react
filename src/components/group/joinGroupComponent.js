import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import GroupService from "../../services/group.service";
import StaticData from "../../../StaticData";
import LoginController from "../../../LoginController";

export default class JoinGroupComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    groupServices = new GroupService();
    loginServices = new LoginController();

    async componentDidMount(){
        await this.loginServices.firebaseGoogleLogin();
    }


     render(){
        return (
            <View>
                <Text> {this.props.route.params.name +' '+ this.props.route.params.groupId} </Text>
                <Button title = "Unirme al Grupo" onPress={() => this.groupServices.validateMember(this.props.route.params.groupId, StaticData.CURRENT_USER.user)} />
            </View>
        );
     }
}