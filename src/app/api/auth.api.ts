import { fireAuth } from "../firebase/firebase";

export class AuthApi {
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
}