// { name: 'Deber Sistemas Operativos', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'DS', color: '#E67C73', date: '2020-05-23' },
// { name: 'Presentar Informe', hour: '8:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'PI', color: '#3F51B5', date: '2020-05-25' },
// { name: 'Control de Lectura ', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'CL', color: '#039BE5', date: '2020-05-25' }],
// { name: 'Exposicion Arquitectura', hour: '10:00AM -10:45AM', description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', image: 'EA', color: '#33B679', date: '2020-05-23'}
import React, { Component } from 'react';
import { Agenda, Calendar } from 'react-native-calendars';
import EventComponent from '../event/EventComponent'
import EventEmptyComponent from '../event/EventEmptyComponent'
import EventService from '../../services/event.services';
import LoginController from '../../../LoginController';
import StaticData from '../../../StaticData';
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['fr'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago.','Sept.','Oct.','Nov.','Dic.'],
    dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    dayNamesShort: ['Dom.','Lun.','Mar.','Mier.','Jue.','Vie.','Sab.'],
    today: 'Hoy/hoy'
  };
  LocaleConfig.defaultLocale = 'fr';


export default class AgendaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            items: []
        }
    }
    loginController = new LoginController();
    eventService = new EventService();

    async componentDidMount() {

        this.setState({ events : await this.eventService.getEvents()});
        let items = new Map();
        for (var event of this.state.events) {
             if (items.has(event.day)) {
                 items.get(event.day).push(event)
                } else {
                    items.set(event.day, [event])
                }
            }
            let itemsAux = new Object();
            for (var [key, value] of items) {
                itemsAux[key] = value;
            }
            this.setState({ items: itemsAux });
            console.log(StaticData.CURRENT_USER);
        }

    render() {
        return (
            <Agenda
                items={this.state.items}
                renderItem={(item, firstItemInDay) => { return (<EventComponent item={item} />); }}
                renderEmptyData={() => {return (<EventEmptyComponent />);}}
                onDayPress={(day) => { console.log('day pressed') }}
            />
        )
    }

}