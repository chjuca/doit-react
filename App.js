import React from 'react';
//import {createStackNavigator, createAppContainer} from 'react-navigation';
//import LoginController from './LoginController';
import CalendarListComponent from './src/calendar/CalendarListComponent';

// const LoginNavigator = createStackNavigator({
//     login: {screen: LoginController}
// })

// const CalendarListNavigator = createStackNavigator({
//     calendarList: {screen: CalendarListComponent}
// })

// export default createAppContainer(CalendarListNavigator);

const App = () => {return (<CalendarListComponent/>);};
export default App;