import { Component, h } from "preact";
import { AddMatchPlayer } from "./add-match-player";
import { IAddMatchPlayerModel, IAddMatchTeamProps, IAddMatchTeamStateModel } from "./add-match.model";

export class AddMatchTeam extends Component<IAddMatchTeamProps, any> {
    state: IAddMatchTeamStateModel = {
        score: "",
        players: [
            {
                position: 0,
                username: ""
            },
            {
                position: 1,
                username: ""
            }
        ]
    };

    teamChange() {
        this.props.onTeamChange({
            team: this.props.team,
            players: this.state.players,
            score: parseInt(this.state.score) ? parseInt(this.state.score) : 0
        });
    }

    playerChange = (addMatchPlayer: IAddMatchPlayerModel) => {
        const players = this.state.players;
        players[addMatchPlayer.position] = addMatchPlayer;
        this.setState({ players });
        this.teamChange();
    }

    scoreChange = (event: Event) => {
        this.setState({ score: (event.target as HTMLInputElement).value });
        this.teamChange();
    }

    render() {
        const addMatchTeam = (
            <div class="add-match-team">
                <AddMatchPlayer position={0} players={this.props.players} onAddPlayer={this.playerChange} />
                <AddMatchPlayer position={1} players={this.props.players} onAddPlayer={this.playerChange} />

                <input class="add-match-team__score" value={this.state.score} onChange={this.scoreChange} type="tel" />
            </div>
        );

        return addMatchTeam;
    }
}