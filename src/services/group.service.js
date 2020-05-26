import firebase from '../../Firebase'
import LoginController from '../../LoginController';

export default class GroupService {

    databaseService = firebase.database();
    login = new LoginController();
    groups = [];

    async addGroup(group) {
        const ref = this.databaseService.ref('groups').child(group.id);
        await ref.set(group);
    }
}