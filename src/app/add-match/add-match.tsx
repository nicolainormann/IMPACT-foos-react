import { Component, h } from "preact";
import { AddMatchTeam } from "./add-match-team";
import { IPlayer } from "./add-match.model";

export class AddMatch extends Component {
    availablePlayers: IPlayer[] = [
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

    render() {
        const addMatch = (
            <div class="add-match">
                <AddMatchTeam players={this.availablePlayers} />
                <AddMatchTeam players={this.availablePlayers} />
            </div>
        );

        return addMatch;
    }
}