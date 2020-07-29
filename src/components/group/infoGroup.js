import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class InfoGroupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    name: 'Carlos Juca',
                    email: 'carlos@gmail',
                    id: '1',
                    photo: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=i5z0VbtQJ1cAX8xc4VM&_nc_oc=AQlvjLwyKOzwqySE-PVtrb4B2bM2ICBdwk369Fc6OtcMjnihKOezl7kqtEmCs8y8K9E&_nc_ht=scontent.fgye4-1.fna&oh=e58e281c8bb5d1e5358e74a4614a05ff&oe=5F45B14E',
                    role: 'ADMIN'
                },
                {
                    name: 'Gerson Santos',
                    email: 'carlos@gmail',
                    id: '1',
                    photo: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=i5z0VbtQJ1cAX8xc4VM&_nc_oc=AQlvjLwyKOzwqySE-PVtrb4B2bM2ICBdwk369Fc6OtcMjnihKOezl7kqtEmCs8y8K9E&_nc_ht=scontent.fgye4-1.fna&oh=e58e281c8bb5d1e5358e74a4614a05ff&oe=5F45B14E',
                    role: 'ADMIN'
                },
                {
                    name: 'Carlos Castillo',
                    email: 'carlos@gmail',
                    id: '1',
                    photo: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=i5z0VbtQJ1cAX8xc4VM&_nc_oc=AQlvjLwyKOzwqySE-PVtrb4B2bM2ICBdwk369Fc6OtcMjnihKOezl7kqtEmCs8y8K9E&_nc_ht=scontent.fgye4-1.fna&oh=e58e281c8bb5d1e5358e74a4614a05ff&oe=5F45B14E',
                    role: 'ADMIN'
                },
                {
                    name: 'Israel Ortiz',
                    email: 'carlos@gmail',
                    id: '1',
                    photo: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-9/51304255_1223653267810512_6402792010557685760_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=i5z0VbtQJ1cAX8xc4VM&_nc_oc=AQlvjLwyKOzwqySE-PVtrb4B2bM2ICBdwk369Fc6OtcMjnihKOezl7kqtEmCs8y8K9E&_nc_ht=scontent.fgye4-1.fna&oh=e58e281c8bb5d1e5358e74a4614a05ff&oe=5F45B14E',
                    role: 'ADMIN'
                }
            ]
               
               
                
            

        };
    }

    render() {
        return [
            <View style={styles.container}>
                <View style={styles.title}>
                    <View style={styles.containerChild1}>
                        <Text style={styles.welcome}>Nombre del Chat1</Text>
                    </View>
                </View>
                <View style={styles.containerColumn}>
                <View style={styles.containerChild2}>
                        <Text style={styles.secondtitle}>Descripción</Text>

                        <View style={styles.descripcion}>
                            <Text>Este chat es creado para tal cosa</Text>
                        </View>
                        </View>
                        <View style={styles.containerChild3}>
                        <Text style={styles.secondtitle}>Enlace invitacion:</Text>

                        <View style={styles.invitacion}>
                            <Text>zelda</Text>
                        </View>
                        </View>
                    
               
                {/* cambiar estilos */}
                <View style={styles.containerChildM}>
                <Text style={styles.secondtitle}>Miembros:</Text>
                <FlatList 
                data = { this.state.members }
                renderItem = { ({item}) => (
                    

                    <ListItem style={styles.miembros} 
                    // onPress = { () => this.props.navigation.navigate('')} 
                    
                    // roundAvatar
                    title={item.name}
                    titleStyle={{ 
                        color: 'black', 
                        fontWeight: 'bold' 
                    }}
                    subtitle={item.email}
                    leftAvatar={{
                        size: 35,
                        overlayContainerStyle:{backgroundColor: 'gray'},
                        //image: item.members.photo
                      }}
                    
                   
                    />
                )}
                keyExtractor={item => item.id}
            /> 
                </View>
                </View>
            </View>

            
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
    secondtitle: {

        fontFamily: 'Roboto',
        fontWeight: 'bold',
        //alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22
    },
    container: {
        flex: 1,
        flexDirection: "column",
        //padding: 10
    },
    title: {
        backgroundColor: '#B8DBEB',
        flex: 0.13,
        //alignItems: 'center',
        flexDirection: "column",
        //padding: 10
    },
    containerColumn: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
    },
    containerChild1: {
        flex: 0.80,
        //padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    descripcion: {
        color: '#222B45',
        backgroundColor: 'white',
        borderWidth: 1.3,
        borderRadius: 23,
        borderColor: '#000000',
        paddingTop: 8.5,
        paddingHorizontal: 20,
        marginLeft: 7,
        marginBottom: 5,
        marginTop: 20,

        flex: 0.9,
        padding: 10,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    invitacion: {
        color: '#222B45',
        backgroundColor: 'white',
        borderWidth: 1.3,
        borderRadius: 38,
        borderColor: '#000000',
        paddingTop: 4,
        paddingHorizontal: 20,
        marginLeft: 7,
        marginBottom: 5,
        marginTop: 10,

        flex: 0.9,
        padding: 10,
        //alignItems: 'center',
        justifyContent: 'center'
    },
    miembros: {
        color: '#222B45',
        //backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 65,
        borderColor: '#000000',
        //paddingTop: 4,
        paddingHorizontal: 2,
        marginLeft: 14,
        marginBottom: 9,
        marginTop: 9,

        //flex: 0.12,
        padding: 6,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    containerChild2: {

        flex: 0.3,
        padding: 10,
        //backgroundColor: 'red'
        
    },
    containerChild3: {

        flex: 0.2,
        padding: 5,
       //backgroundColor: 'red'
    },
    containerChildM: {

        flex: 0.6,
        padding: 5,
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