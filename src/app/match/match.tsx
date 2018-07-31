import { Component, h } from "preact";
import { PlayersApi } from "../api/players.api";
import { IPlayer } from "../global/player";
import { MatchScore } from "./match-score";
import { MatchTeam } from "./match-team";
import { IMatchScoreState, IMatchState, IMatchTeam } from "./match.model";

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
        valid: false
    };

    componentDidMount() {
        PlayersApi.getPlayers().then(players => {
            this.players = players;
            this.setState({ availablePlayers: this.players });
        });
    }

    teamChange = (addMatchTeam: Partial<IMatchTeam>) => {
        this.setState((current: IMatchState) => {
            const match = current.match;
            match.teams[addMatchTeam.team!].team = addMatchTeam.team!;
            match.teams[addMatchTeam.team!].players = addMatchTeam.players!;
            const availablePlayers = this.players.filter(player => !current.match.teams.map(team => team.players.map(matchPlayer => matchPlayer.uid)).reduce((acc, val) => acc.concat(val), []).includes(player.uid));

            return { match, availablePlayers };
        });
    }

    scoreChange = (teamScores: IMatchScoreState) => {
        this.setState((current: IMatchState) => {
            const match = current.match;
            teamScores.teamScores.forEach(teamScore => {
                match.teams[teamScore.team].score = teamScore.score;
            });

            return { match, valid: teamScores.valid };
        });
    }

    render() {
        const match = (
            <div class="match">
                {!!this.players.length && this.state.match.teams.map(team => <MatchTeam key={team.team} team={team} players={this.state.availablePlayers} onTeamChange={this.teamChange} />)}

                <MatchScore mode="tenPoint" onScoreChange={this.scoreChange} />

                <button class="button">{this.state.valid ? "true" : "false"}</button>
            </div>
        );

        return match;
    }
}