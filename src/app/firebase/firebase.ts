import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import { config } from "./firebase.config";

firebase.initializeApp(config);

export const fireAuth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
firestore.settings({ timestampsInSnapshots: true });