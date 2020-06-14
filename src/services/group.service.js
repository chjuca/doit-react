import firebase from '../../Firebase'
import LoginController from '../../LoginController';
export default class GroupService {

    databaseService = firebase.database();
    login = new LoginController();
    groups = [];

    async addGroup(group, chat) {
        const refGroup = this.databaseService.ref('groups').child(group.id);
        await refGroup.set(group).then(async () => {
            const refChats = this.databaseService.ref('chats').child(group.id);
            await refChats.set(chat);
        })
    }

    async validateMember(groupId, user) {
        const ref = this.databaseService.ref('groups');
        ref.orderByChild("id").equalTo(groupId).once("value", snapshot => {
            if (snapshot.exists()) {
                console.log('grupo existe');
                this.isJoinedUser(groupId, user);
            } else {
                console.log('grupo NO existe, por favor no insista :)');
            }
        });
    }

    async isJoinedUser(groupId, user) {
        const ref = this.databaseService.ref('groups').child(groupId).child('members');
        ref.orderByChild("id").equalTo(user.id).once("value", snapshot => {
            if (snapshot.exists()) {
                console.log('Usuario Registrado');

            } else {
                this.addMember(groupId, user);
            }
        });
    }

    async addMember(groupId, user) {
        const ref = this.databaseService.ref('groups').child(groupId).child('members');
        await ref.push(
            {
                name: user.name,
                email: user.email,
                id: user.id,
                photo: user.photo,
                role: "MEMBER"
            }
        )
    }
}