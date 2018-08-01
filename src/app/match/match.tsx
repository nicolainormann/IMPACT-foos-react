import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { PlayersApi } from "../api/players.api";
import { IPlayer } from "../global/player";
import { MatchScore } from "./match-score";
import { MatchTeam } from "./match-team";
import { IMatchScoreState, IMatchState, IMatchTeamChange } from "./match.model";

export class Match extends Component<any, IMatchState> {
    players: IPlayer[] = [];

    state: IMatchState = {
        match: {
            teams: [
                {
                    team: 0,
                    players: [
                        { position: 0, displayName: "", photoURL: null, uid: "" },
                        { position: 1, displayName: "", photoURL: null, uid: "" }
                    ],
                    score: 0
                },
                {
                    team: 1,
                    players: [
                        { position: 0, displayName: "", photoURL: null, uid: "" },
                        { position: 1, displayName: "", photoURL: null, uid: "" }
                    ],
                    score: 0
                }
            ]
        },
        availablePlayers: this.players,
        valid: {
            teams: [false, false],
            score: false
        }
    };

    componentDidMount() {
        PlayersApi.getPlayers().then(players => {
            this.players = players;
            this.setState({ availablePlayers: this.players });
        });
    }

    teamChange = (addMatchTeam: IMatchTeamChange) => {
        this.setState((current: IMatchState) => {
            const newState = current;
            newState.match.teams[addMatchTeam.team].team = addMatchTeam.team;
            newState.match.teams[addMatchTeam.team].players = addMatchTeam.players;
            newState.availablePlayers = this.players.filter(player => !current.match.teams.map(team => team.players.map(matchPlayer => matchPlayer.uid)).reduce((acc, val) => acc.concat(val), []).includes(player.uid));
            newState.valid.teams[addMatchTeam.team] = addMatchTeam.valid;

            return newState;
        });
    }

    scoreChange = (teamScores: IMatchScoreState) => {
        this.setState((current: IMatchState) => {
            const newState = current;
            teamScores.teamScores.forEach(teamScore => {
                newState.match.teams[teamScore.team].score = teamScore.score;
            });
            newState.valid.score = teamScores.valid;

            return newState;
        });
    }

    submit = () => {
        if (this.state.valid.teams[0] && this.state.valid.teams[1] && this.state.valid.score) {
            console.log(this.state.match);
        }
    }

    render() {
        const match = (
            <div class="match">
                {!!this.players.length && this.state.match.teams.map(team => <MatchTeam key={team.team} team={team} players={this.state.availablePlayers} onTeamChange={this.teamChange} />)}

                <MatchScore mode="tenPoint" onScoreChange={this.scoreChange} />

                <button class="button" onClick={this.submit}>{Translations.match.submit}</button>
            </div>
        );

        return match;
    }
}