import { firestore } from "../firebase/firebase";
import { IPlayer } from "../match/match.model";

export class PlayersApi {
    static getPlayers() {
        return firestore.collection("players").get().then(res => {
            return res.docs.map(player => player.data()) as IPlayer[];
        });
    }
}