import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { AuthProfileImage } from "../auth/auth-profile-image";
import { IPlayer } from "../global/player";
import { IMatchPlayerProps } from "./match.model";

export class MatchPlayer extends Component<IMatchPlayerProps, any> {
    addPlayer = (event: Event) => {
        const value = JSON.parse((event.target as HTMLSelectElement).value) as IPlayer;
        this.props.onAddPlayer({
            position: this.props.player.position,
            displayName: value.displayName,
            uid: value.uid,
            photoURL: value.photoURL
        });
    }

    render() {
        const matchPlayer = (
            <div class="match-player">
                {Translations.match.player.position[this.props.player.position]}

                <div class="match-player__player">
                    <div class="match-player__player-image">
                        <AuthProfileImage photoURL={this.props.player.photoURL} />
                    </div>
                    <select class="match-player__select input" onChange={this.addPlayer} required>
                        <option value="" disabled hidden selected>{Translations.match.player.selectPlaceholder}</option>
                        {this.props.player.uid && <option key={this.props.player.uid} value={this.props.player.uid}>{this.props.player.displayName}</option>}
                        {this.props.players.map(player => <option key={player.uid} value={JSON.stringify(player)}>{player.displayName}</option>)}
                    </select>
                </div>
            </div>
        );

        return matchPlayer;
    }
}