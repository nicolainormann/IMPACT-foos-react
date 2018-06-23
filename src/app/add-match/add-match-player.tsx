import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IAddMatchPlayerProps } from "./add-match.model";

export class AddMatchPlayer extends Component<IAddMatchPlayerProps, any> {
    addPlayer = (event: Event) => {
        this.props.onAddPlayer({
            position: this.props.position,
            username: (event.target as HTMLSelectElement).value
        });
    }

    render() {
        const addMatchPlayer = (
            <div class="add-match-player">
                <select onChange={this.addPlayer}>
                    <option value="" disabled hidden selected>{Translations.addMatch.player.selectPlaceholder}</option>
                    {this.props.players.map(player => <option key={player.username} value={player.username}>{player.name}</option>)}
                </select>
            </div>
        );

        return addMatchPlayer;
    }
}