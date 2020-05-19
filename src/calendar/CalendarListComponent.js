import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { View, Button } from 'react-native'

export default class CalendarListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Button title='Login' onPress={() => this.props.navigation.navigate('Login')} />
                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    // Dia presionado
                    onDayPress={(day) => { console.log(day.timestamp) }}
                />
            </View>

        )
    }


}