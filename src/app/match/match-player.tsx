import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IMatchPlayerProps } from "./match.model";

export class MatchPlayer extends Component<IMatchPlayerProps, any> {
    addPlayer = (event: Event) => {
        const selectElement = (event.target as HTMLSelectElement);
        this.props.onAddPlayer({
            position: this.props.player.position,
            name: selectElement.selectedOptions[0].innerText,
            username: selectElement.value
        });
    }

    render() {
        const matchPlayer = (
            <div class="match-player">
                {Translations.match.player.position[this.props.player.position]}
                <select class="match-player__select input" onChange={this.addPlayer} required>
                    <option value="" disabled hidden selected>{Translations.match.player.selectPlaceholder}</option>
                    {this.props.player.username && <option key={this.props.player.username} value={this.props.player.username}>{this.props.player.name}</option>}
                    {this.props.players.map(player => <option key={player.username} value={player.username}>{player.name}</option>)}
                </select>
            </div>
        );

        return matchPlayer;
    }
}