import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class JoinGroupComponent {
    render() {
        return (
            <View>

                <Button title="Agregar" onPress={() => this.addGroup()} />
            </View>
        );
    }
}