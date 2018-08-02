import { fireAuth, functions } from "../firebase/firebase";

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
        const updatePlayer = functions.httpsCallable("updatePlayer");
        return updatePlayer({ uid: fireAuth.currentUser!.uid!, ...profile });
    }
}