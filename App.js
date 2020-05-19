import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginController from './LoginController';
import CalendarListComponent from './src/calendar/CalendarListComponent';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="CalendarList" component={CalendarListComponent} />
                <Stack.Screen name="Login" component={LoginController} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;