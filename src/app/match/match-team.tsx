import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { MatchPlayer } from "./match-player";
import { IMatchPlayerModel, IMatchTeamProps, IMatchTeamStateModel } from "./match.model";

export class MatchTeam extends Component<IMatchTeamProps, any> {
    state: IMatchTeamStateModel = {
        players: [
            { position: 0, displayName: "", photoURL: null, uid: "" },
            { position: 1, displayName: "", photoURL: null, uid: "" }
        ]
    };

    teamChange() {
        this.props.onTeamChange({
            team: this.props.team.team,
            players: this.state.players
        });
    }

    playerChange = (addMatchPlayer: IMatchPlayerModel) => {
        const players = this.state.players;
        players[addMatchPlayer.position] = addMatchPlayer;
        this.setState({ players });
        this.teamChange();
    }

    render() {
        const matchTeam = (
            <div class="match-team">
                <div class="match-team__team">
                    {Translations.replaceTokens(Translations.match.team.team, this.props.team.team + 1)}
                </div>

                {this.props.team.players.map(player => <MatchPlayer key={player.position} player={player} players={this.props.players} onAddPlayer={this.playerChange} />)}
            </div>
        );

        return matchTeam;
    }
}