import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { MatchPlayer } from "./match-player";
import { IMatchPlayer, IMatchTeamProps, IMatchTeamState } from "./match.model";

export class MatchTeam extends Component<IMatchTeamProps, IMatchTeamState> {
    state: IMatchTeamState = {
        players: [
            { position: 0, displayName: "", photoURL: null, uid: "" },
            { position: 1, displayName: "", photoURL: null, uid: "" }
        ],
        valid: false
    };

    teamChange() {
        this.props.onTeamChange({
            team: this.props.team.team,
            players: this.state.players,
            valid: this.state.valid
        });
    }

    playerChange = (addMatchPlayer: IMatchPlayer) => {
        this.setState((current: IMatchTeamState) => {
            const newState = current;
            newState.players[addMatchPlayer.position] = addMatchPlayer;
            newState.valid = !!(newState.players[0].uid && newState.players[1].uid);
            return newState;
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