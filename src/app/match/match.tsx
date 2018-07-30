import { Component, h } from "preact";
import { PlayersApi } from "../api/players.api";
import { IPlayer } from "../global/player";
import { MatchScore } from "./match-score";
import { MatchTeam } from "./match-team";
import { IMatchState, IMatchTeam } from "./match.model";

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
                    ]
                },
                {
                    team: 1,
                    players: [
                        { position: 0, displayName: "", photoURL: null, uid: "" },
                        { position: 1, displayName: "", photoURL: null, uid: "" }
                    ]
                }
            ]
        },
        availablePlayers: this.players
    };

    componentDidMount() {
        PlayersApi.getPlayers().then(players => {
            this.players = players;
            this.setState({ availablePlayers: this.players });
        });
    }

    teamChange = (addMatchTeam: IMatchTeam) => {
        this.setState((current: IMatchState) => {
            const match = current.match;
            match.teams[addMatchTeam.team] = addMatchTeam;
            const availablePlayers = this.players.filter(player => !current.match.teams.map(team => team.players.map(matchPlayer => matchPlayer.uid)).reduce((acc, val) => acc.concat(val), []).includes(player.uid));

            return { match, availablePlayers };
        });
    }

    render() {
        const match = (
            <div class="match">
                {!!this.players.length && this.state.match.teams.map(team => <MatchTeam key={team.team} team={team} players={this.state.availablePlayers} onTeamChange={this.teamChange} />)}

                <MatchScore mode="tenPoint" />
            </div>
        );

        return match;
    }
}