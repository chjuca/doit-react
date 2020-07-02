import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight, BackHandler } from 'react-native';
import LoginController from "../../../LoginController";
import StaticData from '../../../StaticData';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    loginServices = new LoginController();

    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
        StaticData.CURRENT_USER = await this.loginServices.getCurrentUser();
        if (StaticData.CURRENT_USER != undefined) {
            this.setState({ name: StaticData.CURRENT_USER.name })
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
    }

    onBackButtonPressed() {
        BackHandler.exitApp();
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.welcome}>¡Bienvenido!</Text>
                    <Text></Text>
                    <Text style={styles.data}>{'\t\t' + this.state.name}</Text>
                </View>
                <View style={styles.containerRow}>
                    <View style={styles.containerChild}>
                        <TouchableHighlight underlayColor='#E0ECFE' onPress={() => this.props.navigation.navigate('AgendaComponent')}>
                            <Image style={styles.image} source={require('../../assets/icon_task.png')} />
                        </TouchableHighlight>
                        <Text>Tareas</Text>
                    </View>
                    <View style={styles.containerChild}>
                        <TouchableHighlight underlayColor='#E0ECFE' onPress={() => this.props.navigation.navigate('GroupChatList')}>
                            <Image style={styles.image} source={require('../../assets/icon_chat.png')} />
                        </TouchableHighlight>
                        <Text>Chat</Text>
                    </View>
                </View>
                <View style={styles.containerRow}>
                    <View style={styles.containerChild}>
                        <TouchableHighlight underlayColor='#E0ECFE' onPress={() => this.props.navigation.navigate('CreateGroupComponent')}>
                            <Image style={styles.image} source={require('../../assets/icon_group.png')} />
                        </TouchableHighlight>
                        <Text>Grupos</Text>
                    </View>
                    <View style={styles.containerChild}>
                        <TouchableHighlight underlayColor='#E0ECFE' onPress={() => this.props.navigation.navigate('ProfileComponent')}>
                            <Image style={styles.image} source={require('../../assets/icon_user.png')} />
                        </TouchableHighlight>
                        <Text>Perfil</Text>
                    </View>
                </View>
                <View style={styles.foother}>
                    {/* Poner aqui Footer si se necesita */}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 0.25,
        margin: 10
    },
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10
    },
    containerRow: {
        flex: 0.5,
        flexDirection: "row",
        padding: 10,
    },
    containerChild: {
        flex: 0.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flexDirection: 'row',
        padding: 10,
        resizeMode: "center",
        width: 100,
        height: 100,
        margin: 10
    },
    foother: {
        flex: 0.25,
        fontFamily: 'Roboto'
    },
    welcome: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 40
    },
    data: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontStyle: "italic"
    }
})