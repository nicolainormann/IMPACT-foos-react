import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IMatchPlayerProps } from "./match.model";

export class MatchPlayer extends Component<IMatchPlayerProps, any> {
    addPlayer = (event: Event) => {
        const selectElement = (event.target as HTMLSelectElement);
        this.props.onAddPlayer({
            position: this.props.player.position,
            displayName: selectElement.selectedOptions[0].innerText,
            uid: selectElement.value,
            photoURL: null
        });
    }

    render() {
        const matchPlayer = (
            <div class="match-player">
                {Translations.match.player.position[this.props.player.position]}
                <select class="match-player__select input" onChange={this.addPlayer} required>
                    <option value="" disabled hidden selected>{Translations.match.player.selectPlaceholder}</option>
                    {this.props.player.uid && <option key={this.props.player.uid} value={this.props.player.uid}>{this.props.player.displayName}</option>}
                    {this.props.players.map(player => <option key={player.uid} value={player.uid}>{player.displayName}</option>)}
                </select>
            </div>
        );

        return matchPlayer;
    }
}