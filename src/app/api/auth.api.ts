import { fireAuth } from "../firebase/firebase";
import { PlayersApi } from "./players.api";

export class AuthApi {
    static getCurrentUser() {
        return fireAuth.currentUser;
    }

    static auth$(nextOrObserver: firebase.Observer<any> | ((a: firebase.User | null) => any)) {
        return fireAuth.onAuthStateChanged(nextOrObserver);
    }

    static login(email: string, password: string) {
        return fireAuth.signInWithEmailAndPassword(email, password);
    }

    static logout() {
        return fireAuth.signOut();
    }

    static createUser(email: string, password: string) {
        return fireAuth.createUserWithEmailAndPassword(email, password);
    }

    static updateCurrentProfile(profile: { displayName: string | null; photoURL: string | null; }) {
        return fireAuth.currentUser!.updateProfile(profile).then(() => {
            return this.updatePlayer(profile.displayName, profile.photoURL);
        });
    }

    static updatePlayer(displayName: string | null, photoURL: string | null) {
        return PlayersApi.setPlayer({ displayName: displayName!, photoURL, uid: fireAuth.currentUser!.uid! });
    }
}