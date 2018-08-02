import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { IPlayer } from "../../global/player";
admin.initializeApp();

export const updatePlayer = functions.https.onCall((data: IPlayer) => {
    const uid = data.uid;
    delete data.uid;
    return admin.firestore().collection("players").doc(uid).set(data).then(() => {
        return admin.auth().updateUser(uid, { displayName: data.displayName, photoURL: data.photoURL });
    });
});
