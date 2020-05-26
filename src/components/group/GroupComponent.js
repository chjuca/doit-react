import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Group from '../../models/group.interface';
import StaticData from '../../../StaticData';
import GroupServices from '../../services/group.service';
const uuid = require("uuid");

export default class GroupComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Group: {
                name: '',
                description: ''
            }
        }
    }

    groupServices = new GroupServices();

    addGroup() {
        let groupObj = Object.create(Group);
        groupObj = this.state.Group;
        const id = uuid.v4();
        groupObj.id = id;
        groupObj.adminID = StaticData.CURRENT_USER.user;
        this.groupServices.addGroup(groupObj);
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
            </View>
        );
    }
}
