import { firestore } from "../firebase/firebase";
import { IPlayer } from "../global/player";

export class PlayersApi {
    static getPlayers() {
        return firestore.collection("players").get().then(res => {
            return res.docs.map(player => player.data()) as IPlayer[];
        });
    }

    static setPlayer(userId: string, player: IPlayer) {
        return firestore.collection("players").doc(userId).set(player);
    }
}