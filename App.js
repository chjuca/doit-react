import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import LoginController from './LoginController';
import CalendarListComponent from './src/components/calendar/CalendarListComponent';
import AgendaComponent from './src/components/calendar/AgendaComponent'
import GroupComponent from './src/components/group/GroupComponent';
import JoinGroupComponent from './src/components/group/joinGroupComponent';
import HomeComponent from './src/components/home/homeComponent';
import GroupChatListComponent from './src/components/groupChatList/GroupChatListComponent';
import ProfileComponent from './src/components/profile/profileComponent';
import EventComponent from './src/components/event/EventComponent';
//change to commit group

const Stack = createStackNavigator();

function App() {
    const deepLinking = {
        prefixes: ['https://demoapp.com'],
        config: {
            JoinGroupComponent: {
                path: 'JoinGroup/:name/:groupId',
                params: {
                    name: '',
                    groupId: null
                }
            }
        }
    }
    return (
        <NavigationContainer linking={deepLinking}>
            <Stack.Navigator>
                <Stack.Screen name="Events" component={EventComponent} options = {{headerShown: false}} /> 
                <Stack.Screen name="Home" component={HomeComponent} options = {{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginController} options = {{headerShown: false}} />
                <Stack.Screen name="CreateGroupComponent" component={GroupComponent} />
                <Stack.Screen name="ProfileComponent" component={ProfileComponent} />
                <Stack.Screen name="JoinGroupComponent" component={JoinGroupComponent} />
                <Stack.Screen name="AgendaComponent" component={AgendaComponent} />
                <Stack.Screen name="CalendarList" component={CalendarListComponent} />
                <Stack.Screen name="GroupChatList" component={GroupChatListComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;