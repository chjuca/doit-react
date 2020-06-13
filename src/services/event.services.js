import firebase from '../../Firebase'
import LoginController from '../../LoginController';
import StaticData from '../../StaticData';

export default class EventService {

    databaseService = firebase.database();
    login = new LoginController();
    events = [];

        async addEvent() {
        const ref = this.databaseService.ref('events').child('scvdhabsjnm4mqw3dbam');
        await ref.set({
            id: "scvdhabsjnm4mqw3dbam",
            name: 'Exposicion Arquitectura',
            day: "2020-12-12",
            hourStart: 8,
            hourEnd: 9,
            description: 'lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit', 
            image: 'EA',
            color: '#33B679'
        });
    }

    async getEvents() {
        StaticData.CURRENT_USER = await this.login.getCurrentUser();
        const ref = this.databaseService.ref('events');
        await ref.orderByChild('email').equalTo(StaticData.CURRENT_USER.email).once('value', (snapshot) => {
            this.events = snapshot.val();
        });
        return Object.values(this.events);
    }


}
