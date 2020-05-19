import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import { View, Button } from 'react-native'
import EventComponent from '../event/EventComponent'

export default class AgendaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Agenda
                items={{
                    '2020-05-22': [{ name: 'item 1 - any js object' }],
                    '2020-05-23': [{ name: 'item 2 - any js object' }],
                    '2020-05-24': [],
                    '2020-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }, { name: 'any js object' }]
                }}
                renderItem={(item, firstItemInDay) => {return (<EventComponent item = {item}/>);}}
                onDayPress={(day) => { console.log('day pressed') }}
            />
        )
    }


}