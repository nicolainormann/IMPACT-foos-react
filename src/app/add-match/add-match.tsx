import { Component, h } from "preact";
import { AddMatchTeam } from "./add-match-team";
import { IAddMatchModel, IAddMatchTeamModel, IPlayer } from "./add-match.model";

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

    state = {
        availablePlayers: this.players
    };

    match: IAddMatchModel = {
        teams: [
            {
                team: 0,
                players: [],
                score: 0
            },
            {
                team: 1,
                players: [],
                score: 0
            }
        ]
    };

    teamChange = (addMatchTeam: IAddMatchTeamModel) => {
        this.match.teams[addMatchTeam.team] = addMatchTeam;
        // console.log(this.match.teams.flatMap(team => team.players.flatMap(player => player.username)));
        // this.setState({
        // availablePlayers: this.match.teams.map(team => team.players.map(player => player.username))
        // });
        console.log(this.match);
    }

    render() {
        const addMatch = (
            <div class="add-match">
                <AddMatchTeam team={0} players={this.state.availablePlayers} onTeamChange={this.teamChange} />
                <AddMatchTeam team={1} players={this.state.availablePlayers} onTeamChange={this.teamChange} />
            </div>
        );

        return addMatch;
    }
}