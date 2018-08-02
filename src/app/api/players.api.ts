import { IPlayer } from "../../../global/player";
import { firestore } from "../firebase/firebase";

export class PlayersApi {
    private static _collection = firestore.collection("players");

    static getPlayers(): Promise<IPlayer[]> {
        return this._collection.get().then(res => {
            return res.docs.map(player => {
                const data = player.data() as IPlayer;
                return { ...data, uid: player.id };
            });
        });
    }
}