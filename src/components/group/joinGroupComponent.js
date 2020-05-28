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
        StaticData.CURRENT_USER = await this.loginServices.getCurrentUser();
    }


     render(){
        const nameGroup = this.props.route.params.name.replace("_",' ');
        return (
            <View>
                <Text> Bienvenido</Text>
                <Text> Haz sido invitado al grupo</Text>
                <Text> {nameGroup}</Text>
                <Text> Da click en el boton de abajo para poder ver los eventos y hablar con miembros de Grupo</Text>
                <Button title = "Unirme al Grupo" onPress={() => this.groupServices.validateMember(this.props.route.params.groupId, StaticData.CURRENT_USER)} />
            </View>
        );
     }
}