import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button, TouchableHighlight, BackHandler } from 'react-native';
import LoginController from "../../../LoginController";
import StaticData from '../../../StaticData';

export default class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    loginServices = new LoginController();

    async componentDidMount() {
        StaticData.CURRENT_USER = await this.loginServices.getCurrentUser();
        if (StaticData.CURRENT_USER != undefined) {
            this.setState({ name: StaticData.CURRENT_USER.name })
        } else {
            this.props.navigation.navigate('Login')
        }
    }

    signOut() {
        this.loginServices.signOut();
        this.props.navigation.navigate('Login')
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
                    <View style={styles.containerImage}>
                        <Image style={styles.image} source={{ uri: StaticData.CURRENT_USER.photo }} />
                    </View>
                    <View style={styles.containerChild}>
                        <Text style={styles.fontBold}>Nombre:</Text>
                        <Text style={styles.fontRegular}>{StaticData.CURRENT_USER.name}</Text>
                        <Text style={styles.fontBold}>E-mail:</Text>
                        <Text style={styles.fontRegular}>{StaticData.CURRENT_USER.email}</Text>
                    </View>
                </View>
                <View style={styles.containerRow}>
                    <View style={styles.containerData}>
                        <Text style={styles.fontBold}>Eventos:</Text>
                        <Text style={styles.fontRegular}>342</Text>
                    </View>
                    <View style={styles.containerData}>
                        <Text style={styles.fontBold}>Grupos:</Text>
                        <Text style={styles.fontRegular}>21</Text>
                    </View>
                </View>
                <View style={styles.containerButton}>
                    <Button title="Cerrar Sesión" onPress={() => this.signOut()} />
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10
    },
    containerRow: {
        flex: 0.4,
        flexDirection: "row",
        padding: 5,
    },
    header: {
        flex: 0.25,
        margin: 10
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
    },
    image: {
        width: 115,
        height: 115,
        margin: 10,
        borderRadius: 100
    },
    containerChild: {
        flex: 1,
        padding: 10,
    },
    fontBold: {
        fontWeight: 'bold',
        paddingTop: 13,
        paddingBottom: 13,
        fontSize: 20
    },
    fontRegular: {
        fontSize: 15
    },
    containerImage: {
        flex: 0.70,
        padding: 10,
    },
    containerData: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    containerButton: {
        flex: 0.4
    },
})