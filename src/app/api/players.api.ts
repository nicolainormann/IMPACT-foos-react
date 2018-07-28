import { firestore } from "../firebase/firebase";
import { IPlayer } from "../global/player";

export class PlayersApi {
    private static _collection = firestore.collection("players");

    static getPlayers() {
        return this._collection.get().then(res => {
            return res.docs.map(player => player.data()) as IPlayer[];
        });
    }

    static setPlayer(player: IPlayer) {
        return this._collection.doc(player.uid).set(player);
    }
}