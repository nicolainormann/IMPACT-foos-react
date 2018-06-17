import { Component, h } from "preact";
import { AddMatchPlayer } from "./add-match-player";
import { IAddMatchTeamProps } from "./add-match.model";

export class AddMatchTeam extends Component<IAddMatchTeamProps, any> {
    render() {
        const addMatchTeam = (
            <div class="add-match-team">
                <AddMatchPlayer players={this.props.players} />
                <AddMatchPlayer players={this.props.players} />

                <input class="add-match-team__score" type="tel" />
            </div>
        );

        return addMatchTeam;
    }
}