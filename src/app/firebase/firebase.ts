import * as firebase from "firebase";
import { config } from "./firebase.config";

firebase.initializeApp(config);

export const fireAuth = firebase.auth();
export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });