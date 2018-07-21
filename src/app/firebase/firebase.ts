import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCW5_SBF9tepP5zAKad75vc60xkjoVBiiQ",
    authDomain: "impact-foos-1f63d.firebaseapp.com",
    databaseURL: "https://impact-foos-1f63d.firebaseio.com",
    projectId: "impact-foos-1f63d",
    storageBucket: "impact-foos-1f63d.appspot.com",
    messagingSenderId: "625077190680"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });