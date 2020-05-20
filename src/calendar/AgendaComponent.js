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
                    '2020-05-22': [{ name: 'Exposicion Arquitectura',hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'EA', color: '#33B679'}],
                    '2020-05-23': [{ name: 'Deber Sistemas Operativos',hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'DS', color: '#E67C73' }],
                    '2020-05-24': [],
                    '2020-05-25': [{name: 'Presentar Informe', hour: '8:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'PI', color: '#3F51B5' }, { name: 'Control de Lectura ',hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'CL', color: '#039BE5' }, { name: 'Presentacion Proyecto FIS',hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'PP', color: '#7986CB'}]
                }}
                renderItem={(item, firstItemInDay) => {return (<EventComponent item = {item}/>);}}
                onDayPress={(day) => { console.log('day pressed') }}
            />
        )
    }


}