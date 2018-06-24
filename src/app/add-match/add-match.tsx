import { Component, h } from "preact";
import { MatchDetails } from "../match-details/match-details";
import { AddMatchTeam } from "./add-match-team";
import { IAddMatchModel, IAddMatchStateModel, IAddMatchTeamModel, IPlayer } from "./add-match.model";

export class AddMatch extends Component {
    players: IPlayer[] = [
        {
            name: "Nicolai",
            username: "nnh"
        },
        {
            name: "Peter",
            username: "pvn"
        },
        {
            name: "Filip",
            username: "fbb"
        },
        {
            name: "Hartøft",
            username: "cha"
        }
    ];

    state: IAddMatchStateModel = {
        match: {
            teams: [
                {
                    team: 0,
                    players: [
                        { position: 0, username: "" },
                        { position: 1, username: "" }
                    ],
                    score: 0
                },
                {
                    team: 1,
                    players: [
                        { position: 0, username: "" },
                        { position: 1, username: "" }
                    ],
                    score: 0
                }
            ]
        },
        availablePlayers: this.players,
    };

    teamChange = (addMatchTeam: IAddMatchTeamModel) => {
        const match = this.state.match;
        match.teams[addMatchTeam.team] = addMatchTeam;
        const availablePlayers = this.players.filter(player => !this.state.match.teams.map(team => team.players.map(matchPlayer => matchPlayer.username)).reduce((acc, val) => acc.concat(val), []).includes(player.username));

        this.setState({
            availablePlayers,
            match
        });
    }

    render() {
        const addMatch = (
            <div class="add-match">
                <MatchDetails match={this.state.match} />

                <AddMatchTeam team={0} players={this.state.availablePlayers} onTeamChange={this.teamChange} />
                <AddMatchTeam team={1} players={this.state.availablePlayers} onTeamChange={this.teamChange} />
            </div>
        );

        return addMatch;
    }
}