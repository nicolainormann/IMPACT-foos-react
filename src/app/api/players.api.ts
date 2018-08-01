import { firestore } from "../firebase/firebase";
import { IPlayer } from "../global/player";

export class PlayersApi {
    private static _collection = firestore.collection("players");

    static getPlayers(): Promise<IPlayer[]> {
        return this._collection.get().then(res => {
            return res.docs.map(player => {
                const data = player.data() as IPlayer;
                return { uid: player.id, ...data };
            });
        });
    }

    static setPlayer(player: IPlayer) {
        const uid = player.uid;
        delete player.uid;
        return this._collection.doc(uid).set(player);
    }
}