import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { MatchPlayer } from "./match-player";
import { IMatchPlayer, IMatchTeamProps, IMatchTeamState } from "./match.model";

export class MatchTeam extends Component<IMatchTeamProps, IMatchTeamState> {
    state: IMatchTeamState = {
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

    playerChange = (addMatchPlayer: IMatchPlayer) => {
        this.setState((current: IMatchTeamState) => {
            const players = current.players;
            players[addMatchPlayer.position] = addMatchPlayer;

            return { players };
        }, () => this.teamChange());
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