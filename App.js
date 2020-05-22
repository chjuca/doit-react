import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginController from './LoginController';
import CalendarListComponent from './src/calendar/CalendarListComponent';
import AgendaComponent from './src/calendar/AgendaComponent'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginController} />
                <Stack.Screen name="AgendaComponent" component={AgendaComponent} />
                <Stack.Screen name="CalendarList" component={CalendarListComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;