import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Share, Linking } from 'react-native';
import Group from '../../models/group.interface';
import StaticData from '../../../StaticData';
import GroupServices from '../../services/group.service';
import LoginController from "../../../LoginController";
const uuid = require("uuid");

export default class GroupComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Group: {
                name: '',
                description: ''
            },
            isclicked: true
        }
    }

    idGroup = '';
    groupServices = new GroupServices();
    loginServices = new LoginController();

    async componentDidMount(){
        StaticData.CURRENT_USER = await this.loginServices.getCurrentUser();
        console.log(StaticData.CURRENT_USER.name);
    }


    addGroup() {
        let groupObj = Object.create(Group);
        groupObj = this.state.Group;
        const id = uuid.v4();
        this.idGroup = id;
        groupObj.id = id;
        let members = [];
        members.push({
            name: StaticData.CURRENT_USER.name,
            email: StaticData.CURRENT_USER.email,
            id: StaticData.CURRENT_USER.id,
            photo: StaticData.CURRENT_USER.photo,
            role: "ADMIN"
        })
        groupObj.members = members;
        this.groupServices.addGroup(groupObj);
        this.setState({isclicked: false})
    }

    shareLinkWhatsapp(){
        const nameGroup = this.state.Group.name.replace(/ /g,"_");
        const message = 'DoIt- Invitacion para el Grupo\n https://demoapp.com/JoinGroup/'+nameGroup+'/' + this.idGroup;
        Linking.openURL('whatsapp://send?text=' + message);
    }
    shareLinkSocial(){
        const nameGroup = this.state.Group.name.replace(/ /g,"_")
        const shareOptions = {
            title: 'Title',
            message: 'DoIt- Invitacion para el Grupo\n https://demoapp.com/JoinGroup/'+nameGroup+'/' + this.idGroup,
            subject: 'Invitacion para el Grupo'
          };
          Share.share(shareOptions);
    }

    render() {
        return (
            <View>
                <TextInput placeholder='Nombre del grupo'
                    onChangeText={(name) => {
                        const Group = Object.assign({}, this.state.Group, { name });
                        this.setState({ Group })
                    }
                }
                />
                <TextInput placeholder='Descripción'
                    onChangeText={(description) => {
                        const Group = Object.assign({}, this.state.Group, { description});
                        this.setState({ Group })
                    }
                } />
                <Button title="Agregar" onPress={() => this.addGroup()} />
                <Button disabled={this.state.isclicked} title = "Compartir Whatsapp" onPress={() => this.shareLinkWhatsapp()} />
                <Button disabled={this.state.isclicked} title = "Compartir" onPress={() => this.shareLinkSocial()} />
            </View>
        );
    }
}
