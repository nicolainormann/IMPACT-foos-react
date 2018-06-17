import { Component, h } from "preact";
import { IAddMatchPlayerProps } from "./add-match.model";

export class AddMatchPlayer extends Component<IAddMatchPlayerProps, any> {
    addPlayer(event: any) {
        console.log(this.addPlayer);
    }

    render() {
        const addMatchPlayer = (
            <div class="add-match-player">
                <select onChange={this.addPlayer}>
                    <option value="" disabled hidden selected>Choose player</option>
                    {this.props.players.map(player => <option key={player.username} value={player.username}>{player.name}</option>)}
                </select>
            </div>
        );

        return addMatchPlayer;
    }
}