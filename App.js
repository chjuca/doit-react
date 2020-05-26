import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginController from './LoginController';
import CalendarListComponent from './src/components/calendar/CalendarListComponent';
import AgendaComponent from './src/components/calendar/AgendaComponent'
import GroupComponent from './src/components/group/GroupComponent';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginController} />
                <Stack.Screen name="CreateGroupComponent" component={GroupComponent} />
                <Stack.Screen name="AgendaComponent" component={AgendaComponent} />
                <Stack.Screen name="CalendarList" component={CalendarListComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;