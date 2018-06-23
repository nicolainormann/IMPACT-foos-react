import { Component, h } from "preact";
import { AddMatchTeam } from "./add-match-team";
import { IAddMatchTeamModel, IPlayer } from "./add-match.model";

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

    availablePlayers: IPlayer[] = this.players;

    teamChange = (addMatchTeam: IAddMatchTeamModel) => {
        console.log(addMatchTeam.players);
        // this.availablePlayers = this.players
        //     .filter(player => console);
        // console.log(this.availablePlayers);
    }

    render() {
        const addMatch = (
            <div class="add-match">
                <AddMatchTeam team={0} players={this.availablePlayers} onTeamChange={this.teamChange} />
                <AddMatchTeam team={1} players={this.availablePlayers} onTeamChange={this.teamChange} />
            </div>
        );

        return addMatch;
    }
}