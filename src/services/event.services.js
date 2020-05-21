import firebase from '../../Firebase'

export default class EventService {

    ref = firebase.firestore().collection('boards');

    getEvents() {
        return allEvents = ref.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
}
