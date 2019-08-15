

import * as firebase from 'firebase';


const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyD1mRQ3r0R8V2lI8HfbhF7WDofQy53SIgE",
    authDomain: "chok0lateamargo.firebaseapp.com",
    databaseURL: "https://chok0lateamargo.firebaseio.com",
    projectId: "chok0lateamargo",
    storageBucket: "chok0lateamargo.appspot.com",
    messagingSenderId: "881864685855",
    appId: "1:881864685855:web:e135f940b3997f9e"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;