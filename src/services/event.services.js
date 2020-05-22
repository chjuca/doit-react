import firebase from '../../Firebase'
import LoginController from '../../LoginController';

export default class EventService {

    databaseService = firebase.database();
    ref = this.databaseService.ref('events');
    login = new LoginController();
    events = [];

    async addEvent() {

        await this.ref.push({
            campoTest: 'valor del test',
            ahora: new Date().getTime(),
        });
    }

    async getEvent() {
        await this.ref.once('value', (snapshot) => {
            this.events = snapshot.val()
        });
        return this.events;
    }


}
