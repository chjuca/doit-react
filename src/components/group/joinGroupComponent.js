import { View, Text, Button, StyleSheet } from 'react-native';


export default class JoinGroupComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    joinGroup(){
        console.log('Hola desde JoinGroup!')
    }

    render() {
        return (
            <View>
                <Text> ¡Bienvenido! al grupo : name</Text>
                <Button title="Unirme" onPress={() => this.joinGroup()} />
            </View>
        );
    }
}