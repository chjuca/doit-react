import React, { Component } from 'react';
import { Agenda } from 'react-native-calendars';
import EventComponent from '../event/EventComponent'
import EventService from '../services/event.services';
import LoginController from '../../LoginController';
import StaticData from '../../StaticData'
import SyncStorage from 'sync-storage';

export default class AgendaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events:
                [{ name: 'Exposicion Arquitectura', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'EA', color: '#33B679', date: '2020-05-22' },
                { name: 'Deber Sistemas Operativos', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'DS', color: '#E67C73', date: '2020-05-23' },
                { name: 'Presentar Informe', hour: '8:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'PI', color: '#3F51B5', date: '2020-05-25' },
                { name: 'Control de Lectura ', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'CL', color: '#039BE5', date: '2020-05-25' }],
            items: {}
        }
    }

    loginController = new LoginController();
    instancia = new EventService();

    async componentDidMount() {
        let items = new Map();
        for (let event of this.state.events) {
            if (items.has(event.date)) {
                items.get(event.date).push(event)
            } else {
                items.set(event.date, [event])
            }
        }
        let itemsAux = new Object();
        for (var [key, value] of items) {
            itemsAux[key] = value;
        }
        this.setState({ items: itemsAux }, () => {
        });
        SyncStorage.set('foo', 'bar');

        const result = SyncStorage.get('foo');
        console.log(result); // 'bar'
    }


    render() {
        return (
            <Agenda
                items={this.state.items}
                renderItem={(item, firstItemInDay) => { return (<EventComponent item={item} />); }}
                onDayPress={(day) => { console.log('day pressed') }}
            />
        )
    }


}